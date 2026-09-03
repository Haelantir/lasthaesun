/**
 * Warms the ISR cache for every URL Googlebot can reach.
 *
 * Why this exists. `generateStaticParams()` returns `[]` on both dynamic routes
 * (`[...path]` and `use/[subject]/[target]`), so no page is rendered at build
 * time. The first request for a page pays the render plus its Neon round-trip:
 * measured at 670-940ms cold against 40-95ms once cached. On a site nobody
 * visits yet that first request is almost always Googlebot, so Google measures
 * this site at ~900ms and throttles its crawl rate to match — which is the
 * whole reason the crawl-stats average climbed 141ms to 313ms over the first
 * week while the page count grew.
 *
 * A deployment starts with an empty ISR cache, so every push puts all of it
 * back to cold. This runs AFTER a deploy (and after a seed), walks every URL
 * once, and hands the cold-render bill to us instead of to the crawler.
 *
 * It changes nothing about what a page says. It only decides who pays for the
 * first render.
 *
 *   npm run warm
 *   npm run warm -- --concurrency=8
 *   npm run warm -- --limit=20              smoke test against a few urls
 *   npm run warm -- --no-recheck            single pass, skip the proof
 *   npm run warm -- --origin=https://...    override WARM_ORIGIN
 *
 * The origin comes from `--origin`, then `WARM_ORIGIN`, then
 * `NEXT_PUBLIC_SITE_URL`. It needs its own variable because
 * `NEXT_PUBLIC_SITE_URL` is localhost in `.env.local` — correct for `next dev`,
 * and useless here. Warming production is a deliberate act, so it takes a
 * deliberate setting rather than a hard-coded domain.
 *
 * Exits non-zero if any URL answered with something other than 200: a URL that
 * is in the sitemap or linked from a hub but does not return 200 is crawl
 * budget being spent on nothing.
 */
import { siteOrigin } from '../src/lib/site';

/**
 * Pages that link onward to everything else.
 *
 * Their outgoing links are walked so the noindex hubs get warmed too. Those are
 * absent from the sitemap by design (`hubIsIndexable`), but Googlebot still
 * reaches them from /browse/ and still pays the cold render when it does.
 */
const LINK_SOURCES = ['/', '/browse/', '/use/'];

/**
 * Routes that cannot be warmed and should not be reported as if they could.
 *
 * `/search/` is `force-dynamic` — it renders per query string by design, so it
 * has no cache entry to fill and would report MISS on every run. Leaving it in
 * would train the eye to ignore the one line that is supposed to mean something
 * is wrong.
 */
const UNCACHEABLE = new Set(['/search/']);

const USER_AGENT = 'caniignoreit-cache-warmer';
const REQUEST_TIMEOUT_MS = 30_000;

/**
 * Breathing room between passes.
 *
 * The cache entry is written as the render finishes, not as the response
 * flushes, so asking again immediately reports MISS on the very pages that were
 * slowest to render — the ones the re-check exists to prove. Two seconds turns
 * that false alarm back into the HIT it actually is.
 */
const SETTLE_MS = 2_000;

const settle = (): Promise<void> => new Promise((resolve) => setTimeout(resolve, SETTLE_MS));

interface Options {
  origin: string;
  concurrency: number;
  limit: number | null;
  recheck: boolean;
}

interface Probe {
  path: string;
  status: number;
  cache: string;
  ms: number;
}

function parseArgs(argv: string[]): Options {
  const flag = (name: string): string | undefined => {
    const hit = argv.find((arg) => arg === `--${name}` || arg.startsWith(`--${name}=`));
    if (!hit) return undefined;
    return hit.includes('=') ? hit.slice(hit.indexOf('=') + 1) : '';
  };

  const number = (name: string, fallback: number): number => {
    const raw = flag(name);
    if (raw === undefined || raw === '') return fallback;
    const value = Number(raw);
    if (!Number.isFinite(value) || value < 1) {
      throw new Error(`--${name} must be a positive number`);
    }
    return Math.floor(value);
  };

  const origin = (flag('origin') || process.env.WARM_ORIGIN?.trim() || siteOrigin()).replace(
    /\/+$/,
    '',
  );
  if (/localhost|127\.0\.0\.1/.test(origin)) {
    throw new Error(
      `origin resolves to ${origin}. Warming a local server does nothing for Googlebot — ` +
        'set WARM_ORIGIN in .env.local or pass --origin=https://caniignoreit.com',
    );
  }

  return {
    origin,
    concurrency: number('concurrency', 5),
    limit: flag('limit') === undefined ? null : number('limit', 20),
    recheck: flag('no-recheck') === undefined,
  };
}

/** Same-origin page paths only: no assets, no query strings, no fragments. */
function collectPaths(html: string): string[] {
  const found = new Set<string>();

  for (const match of html.matchAll(/href="(\/[^"]*)"/g)) {
    const href = match[1] ?? '';
    if (href.startsWith('//') || href.startsWith('/_next/')) continue;

    const path = href.split(/[?#]/)[0] ?? '';
    // A dot in the last segment means a file (.svg, .js, .woff2), not a page.
    const last = path.replace(/\/+$/, '').split('/').pop() ?? '';
    if (path.length === 0 || last.includes('.')) continue;

    found.add(path.endsWith('/') ? path : `${path}/`);
  }

  return [...found];
}

async function fetchText(url: string): Promise<string> {
  const response = await fetch(url, {
    headers: { 'user-agent': USER_AGENT },
    signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
  });
  if (!response.ok) throw new Error(`${url} answered ${response.status}`);
  return response.text();
}

async function discover(
  options: Options,
): Promise<{ paths: string[]; fromSitemap: number; fromHubs: number }> {
  const sitemap = await fetchText(`${options.origin}/sitemap.xml`);
  const sitemapPaths = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)]
    .map((match) => (match[1] ?? '').replace(options.origin, ''))
    .filter((path) => path.startsWith('/'));

  const all = new Set(sitemapPaths);

  for (const source of LINK_SOURCES) {
    try {
      const html = await fetchText(`${options.origin}${source}`);
      for (const path of collectPaths(html)) all.add(path);
    } catch (error) {
      // A hub that will not load is worth saying out loud, but it must not stop
      // the warm for every other URL.
      console.warn(`  ! could not read ${source}: ${(error as Error).message}`);
    }
  }

  for (const path of UNCACHEABLE) all.delete(path);

  const paths = [...all].sort();
  const fromSitemap = [...new Set(sitemapPaths)].filter((path) => !UNCACHEABLE.has(path)).length;
  return {
    // Counted before `--limit` truncates, so the summary always describes where
    // the site's URLs come from rather than what this run happened to sample.
    paths: options.limit === null ? paths : paths.slice(0, options.limit),
    fromSitemap,
    fromHubs: paths.length - fromSitemap,
  };
}

async function probe(origin: string, path: string): Promise<Probe> {
  const started = performance.now();
  try {
    const response = await fetch(`${origin}${path}`, {
      headers: { 'user-agent': USER_AGENT },
      signal: AbortSignal.timeout(REQUEST_TIMEOUT_MS),
    });
    // The body has to be drained for the render to have actually happened.
    await response.arrayBuffer();
    return {
      path,
      status: response.status,
      cache: response.headers.get('x-vercel-cache') ?? 'none',
      ms: performance.now() - started,
    };
  } catch (error) {
    return { path, status: 0, cache: (error as Error).name, ms: performance.now() - started };
  }
}

/**
 * A fixed pool rather than `Promise.all` over 400 urls: the point is to warm
 * the site, not to knock its database over doing it.
 */
async function runPass(origin: string, paths: string[], concurrency: number): Promise<Probe[]> {
  const results: Probe[] = new Array(paths.length);
  let next = 0;
  let done = 0;

  const worker = async (): Promise<void> => {
    for (;;) {
      const index = next;
      next += 1;
      const path = paths[index];
      if (path === undefined) return;

      results[index] = await probe(origin, path);
      done += 1;
      if (done % 25 === 0 || done === paths.length) {
        process.stdout.write(`\r  ${done}/${paths.length}`);
      }
    }
  };

  await Promise.all(Array.from({ length: Math.min(concurrency, paths.length) }, worker));
  process.stdout.write('\n');
  return results;
}

function percentile(sorted: number[], fraction: number): number {
  if (sorted.length === 0) return 0;
  return sorted[Math.min(sorted.length - 1, Math.floor(sorted.length * fraction))] ?? 0;
}

function tally(probes: Probe[], key: 'cache' | 'status'): string {
  const counts = new Map<string, number>();
  for (const item of probes) {
    const name = String(item[key]);
    counts.set(name, (counts.get(name) ?? 0) + 1);
  }
  return [...counts.entries()]
    .sort((a, b) => b[1] - a[1])
    .map(([name, count]) => `${name} ${count}`)
    .join('   ');
}

function medianMs(probes: Probe[]): number {
  return percentile(
    probes.map((item) => item.ms).sort((a, b) => a - b),
    0.5,
  );
}

function report(probes: Probe[]): void {
  const times = probes.map((item) => item.ms).sort((a, b) => a - b);
  console.log(`  cache    ${tally(probes, 'cache')}`);
  console.log(`  status   ${tally(probes, 'status')}`);
  console.log(
    `  time     median ${percentile(times, 0.5).toFixed(0)}ms` +
      `   p95 ${percentile(times, 0.95).toFixed(0)}ms`,
  );
}

async function main(): Promise<void> {
  const options = parseArgs(process.argv.slice(2));
  const { paths, fromSitemap, fromHubs } = await discover(options);

  console.log(
    `warming ${paths.length} urls at ${options.origin} (concurrency ${options.concurrency})`,
  );
  console.log(`  ${fromSitemap} from /sitemap.xml`);
  console.log(`  ${fromHubs} linked from a hub but not in it (noindex hubs)`);
  if (options.limit !== null) {
    console.log(`  --limit=${options.limit}, so only the first slice of those is warmed`);
  }
  console.log('');

  console.log('pass 1 — cold');
  const started = performance.now();
  const first = await runPass(options.origin, paths, options.concurrency);
  report(first);
  console.log(`  elapsed  ${((performance.now() - started) / 1000).toFixed(0)}s\n`);

  const broken = first.filter((item) => item.status !== 200);
  if (broken.length > 0) {
    console.log(`${broken.length} url(s) did not answer 200 — each one is wasted crawl budget:`);
    for (const item of broken) console.log(`  ${String(item.status).padEnd(4)} ${item.path}`);
    console.log('');
  }

  /**
   * Only a MISS is worth re-checking.
   *
   * STALE means the entry exists and is merely past `revalidate`, which Next
   * serves immediately while regenerating behind it — fast for Googlebot
   * already, and re-requesting it would compare a 15ms stale hit against a
   * 250ms regeneration and call that a regression.
   */
  const cold = first.filter(
    (item) => item.status === 200 && (item.cache === 'MISS' || item.cache === 'none'),
  );
  const stale = first.filter((item) => item.cache === 'STALE').length;
  if (stale > 0) {
    console.log(`${stale} url(s) were STALE — already fast, regenerating behind the response.\n`);
  }

  if (options.recheck && cold.length > 0) {
    await settle();
    console.log(`pass 2 — re-checking ${cold.length} url(s) that were not already warm`);
    const second = await runPass(
      options.origin,
      cold.map((item) => item.path),
      options.concurrency,
    );
    report(second);

    let stillCold = second.filter((item) => item.cache !== 'HIT');
    if (stillCold.length > 0) {
      // One more look before calling it a problem: the slowest renders are the
      // likeliest to have finished writing a moment after pass 2 asked.
      await settle();
      stillCold = (
        await runPass(
          options.origin,
          stillCold.map((item) => item.path),
          options.concurrency,
        )
      ).filter((item) => item.cache !== 'HIT');
    }

    if (stillCold.length > 0) {
      console.log(`\n  ${stillCold.length} url(s) still not HIT — these stay slow for Googlebot:`);
      for (const item of stillCold.slice(0, 10)) {
        console.log(`    ${item.cache.padEnd(6)} ${item.path}`);
      }
    }

    const before = medianMs(cold);
    const after = medianMs(second);
    console.log(
      after < before
        ? `\n✓ ${cold.length} cold url(s) warmed — googlebot now gets ` +
            `~${after.toFixed(0)}ms there instead of ~${before.toFixed(0)}ms`
        : `\n✓ ${cold.length} cold url(s) warmed`,
    );
  } else {
    console.log(`✓ every url already warm (median ${medianMs(first).toFixed(0)}ms)`);
  }

  if (broken.length > 0) process.exit(1);
}

main().catch((error) => {
  console.error('✗ warm failed');
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
