/**
 * Command line entry point for the content quality gate.
 *
 *   npm run content:baseline              inspect the frozen Gold Set
 *   npm run content:baseline -- --write   freeze it (refuses to overwrite)
 *   npm run content:quality -- <slug>     check one problem
 *   npm run content:quality:all           check every publishable non-gold page
 *   npm run content:quality:fix -- <slug> check, rewrite, re-check, verify facts
 *
 * Exit codes: 0 pass, 1 fail or error. A run that could not reach the API exits
 * non-zero — an unfinished review is never a pass.
 */
import { problems } from '../../src/content/index';
import type { ProblemSeed } from '../../src/content/types';
import { MissingApiKeyError } from './config';
import type { Baseline } from './baseline';
import { baselineExists, computeBaseline, detectDrift, loadBaseline, saveBaseline } from './baseline';
import { checkDeterministic } from './deterministic';
import { extractDocument, measure } from './extract';
import { runQualityGate } from './pipeline';
import { renderConsole, writeReport } from './report';
import { round } from './text';

interface Args {
  command: string;
  slugs: string[];
  flags: Set<string>;
}

function parseArgs(argv: string[]): Args {
  const [command = 'help', ...rest] = argv;
  const flags = new Set(rest.filter((arg) => arg.startsWith('--')));
  const slugs = rest.filter((arg) => !arg.startsWith('--'));
  return { command, slugs, flags };
}

function publishedProblems(): ProblemSeed[] {
  return problems.filter((problem) => problem.status === 'published');
}

function findProblem(slug: string): ProblemSeed {
  const problem = problems.find((p) => p.slug === slug);
  if (!problem) throw new Error(`No problem with slug "${slug}". Check src/content/index.ts.`);
  return problem;
}

// --- content:baseline ------------------------------------------------------

function commandBaseline(flags: Set<string>): number {
  const write = flags.has('--write');
  const force = flags.has('--force');

  if (write) {
    if (baselineExists() && !force) {
      console.error(
        'A frozen Gold Set already exists. Re-freezing changes the standard every future page is measured\n' +
          'against — pass --force if that is what you mean to do.',
      );
      return 1;
    }
    const seeds = publishedProblems();
    const baseline = computeBaseline(seeds);
    saveBaseline(baseline);
    console.log(`Froze ${baseline.goldSlugs.length} published problems as the Gold Set.`);
    console.log(baseline.goldSlugs.map((slug) => `  - ${slug}`).join('\n'));
    return 0;
  }

  if (!baselineExists()) {
    console.error('No frozen Gold Set yet. Create it with: npm run content:baseline -- --write');
    return 1;
  }

  const baseline = loadBaseline();
  const drift = detectDrift(baseline, problems);
  console.log(`Gold Set: ${baseline.goldSlugs.length} pages, frozen ${baseline.frozenAt.slice(0, 10)} (baseline v${baseline.version})`);
  console.log('');
  const keys = ['totalWords', 'shortAnswerWords', 'whyItMattersWords', 'scenarioCount', 'faqCount', 'faqAnswerWords', 'sourceCount'] as const;
  for (const key of keys) {
    const range = baseline.metrics[key];
    console.log(
      `  ${key.padEnd(22)} p10 ${String(round(range.p10, 1)).padStart(7)}  median ${String(round(range.median, 1)).padStart(7)}  p90 ${String(round(range.p90, 1)).padStart(7)}`,
    );
  }
  console.log('');
  if (drift.missing.length) console.log(`  ! ${drift.missing.length} gold slug(s) no longer exist: ${drift.missing.join(', ')}`);
  if (drift.unpublished.length) console.log(`  ! ${drift.unpublished.length} gold slug(s) are no longer published: ${drift.unpublished.join(', ')}`);
  console.log(
    drift.newlyPublished.length
      ? `  ${drift.newlyPublished.length} page(s) published since the freeze are measured against the Gold Set, not part of it.`
      : '  No pages published since the freeze.',
  );
  return 0;
}

// --- content:quality -------------------------------------------------------

async function runOne(seed: ProblemSeed, baseline: Baseline, mode: 'check' | 'fix'): Promise<boolean> {
  const isGoldSet = baseline.goldSlugs.includes(seed.slug);
  const report = await runQualityGate(seed, baseline, { mode, isGoldSet });
  console.log(renderConsole(report));
  const written = writeReport(report);
  console.log(`Report: ${written.jsonPath}`);
  if (written.revisionPath) console.log(`Proposed revisions: ${written.revisionPath}`);
  return report.final === 'PASS';
}

async function commandQuality(slugs: string[], flags: Set<string>, mode: 'check' | 'fix'): Promise<number> {
  const baseline = loadBaseline();

  if (slugs.length === 0) {
    console.error(`Usage: npm run content:quality${mode === 'fix' ? ':fix' : ''} -- <slug>`);
    return 1;
  }

  let allPassed = true;
  for (const slug of slugs) {
    const seed = findProblem(slug);
    if (mode === 'fix' && baseline.goldSlugs.includes(slug) && !flags.has('--allow-gold')) {
      console.error(
        `"${slug}" is in the frozen Gold Set. It is the standard, not a candidate for rewriting.\n` +
          'Pass --allow-gold if you really intend to edit the baseline corpus.',
      );
      allPassed = false;
      continue;
    }
    allPassed = (await runOne(seed, baseline, mode)) && allPassed;
  }
  return allPassed ? 0 : 1;
}

async function commandQualityAll(flags: Set<string>): Promise<number> {
  const baseline = loadBaseline();
  const gold = new Set(baseline.goldSlugs);
  const targets = publishedProblems().filter((problem) => flags.has('--include-gold') || !gold.has(problem.slug));

  if (targets.length === 0) {
    console.log('Nothing to check: every published page is in the frozen Gold Set.');
    console.log('Pass --include-gold to audit the baseline corpus itself.');
    return 0;
  }

  console.log(`Checking ${targets.length} page(s) against ${baseline.goldSlugs.length} Gold Set pages.`);
  let allPassed = true;
  for (const seed of targets) {
    allPassed = (await runOne(seed, baseline, 'check')) && allPassed;
  }
  return allPassed ? 0 : 1;
}

// --- content:quality:dry ---------------------------------------------------

/** Deterministic checks only. No API key, no cost — useful in CI. */
function commandDeterministic(slugs: string[]): number {
  const baseline = loadBaseline();
  const targets = slugs.length > 0 ? slugs.map(findProblem) : publishedProblems();
  let failures = 0;

  for (const seed of targets) {
    const doc = extractDocument(seed);
    const result = checkDeterministic(doc, baseline);
    const metrics = measure(doc);
    const status = result.blocked ? 'BLOCKED' : result.counts.fail > 0 ? 'FAIL' : result.counts.warn > 0 ? 'WARN' : 'OK';
    if (status === 'FAIL' || status === 'BLOCKED') failures += 1;
    console.log(`${status.padEnd(8)} ${seed.slug.padEnd(40)} ${metrics.totalWords} words`);
    for (const finding of result.findings.filter((f) => f.severity !== 'info')) {
      console.log(`         [${finding.severity}] ${finding.message}`);
    }
  }
  return failures > 0 ? 1 : 0;
}

async function main(): Promise<number> {
  const { command, slugs, flags } = parseArgs(process.argv.slice(2));

  switch (command) {
    case 'baseline':
      return commandBaseline(flags);
    case 'check':
      return commandQuality(slugs, flags, 'check');
    case 'check-all':
      return commandQualityAll(flags);
    case 'fix':
      return commandQuality(slugs, flags, 'fix');
    case 'deterministic':
      return commandDeterministic(slugs);
    default:
      console.log(
        [
          'Content quality gate',
          '',
          '  baseline [--write] [--force]     inspect or freeze the Gold Set',
          '  deterministic [slug...]          counting checks only, no API calls',
          '  check <slug...>                  deterministic + Claude review',
          '  check-all [--include-gold]       check every published non-gold page',
          '  fix <slug> [--allow-gold]        check, rewrite, re-check, verify facts',
        ].join('\n'),
      );
      return command === 'help' ? 0 : 1;
  }
}

main()
  .then((code) => {
    process.exitCode = code;
  })
  .catch((error: unknown) => {
    if (error instanceof MissingApiKeyError) {
      console.error(`\n${error.message}\n`);
      console.error('Deterministic checks still work: npm run content:quality:deterministic');
    } else {
      console.error(error);
    }
    process.exitCode = 1;
  });
