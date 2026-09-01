import type { MetadataRoute } from 'next';

import { getIndexableEntities, getIndexablePairings } from '@/lib/repository/compat';
import { getIndexableUrls } from '@/lib/repository/taxonomy';
import { absoluteUrl } from '@/lib/site';

/**
 * The sitemap has two sources, because the site has two content stores.
 *
 * The decision pages come from the database and contribute only rows that are
 * BOTH `published` AND `indexable` — the hubs are live for people but withheld
 * from search until they hold enough content to be worth ranking, because a
 * sitemap listing thin category pages is a quality signal working against you.
 *
 * The "Can I Use It With…" pairings are a second table rather than a second
 * source: they were TypeScript records once, and invisible here for their first
 * eight batches because this file only knew how to ask Postgres. Their hub stays
 * out on the same rule the taxonomy hubs follow; an entity page joins the index
 * once it answers enough to be worth ranking.
 *
 * At tens of thousands of URLs this should be split into a sitemap index
 * (Google's limit is 50,000 URLs / 50MB per file); `getIndexableUrls` is already
 * the single place the database half would need to paginate.
 *
 * `lastModified` is omitted wherever there is no honest date to give. It is an
 * optional field, and a `lastmod` that says "today" every time the site is
 * rebuilt is worse than none: Google only keeps using the signal while it keeps
 * matching reality, and stops trusting the whole file once it does not.
 */
export const revalidate = 3600;

/**
 * The hand-written pages.
 *
 * They set `indexable: true` in their own metadata and were missing here purely
 * because this file only ever asked the database. Nothing carries a date: they
 * change when somebody edits the JSX, which no runtime value knows about.
 */
const STATIC_PAGES = [
  { path: '/browse/', priority: 0.7 },
  // `/use/` itself is deliberately `noindex` — it reprints every pairing's
  // short answer and would compete with the pages it lists — so it stays out.
  { path: '/about/', priority: 0.5 },
  { path: '/methodology/', priority: 0.5 },
  { path: '/sources/', priority: 0.5 },
  { path: '/contact/', priority: 0.3 },
  { path: '/privacy/', priority: 0.3 },
] as const;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let urls: Awaited<ReturnType<typeof getIndexableUrls>>;
  let pairings: Awaited<ReturnType<typeof getIndexablePairings>> = [];
  let entities: Awaited<ReturnType<typeof getIndexableEntities>> = [];

  try {
    [urls, pairings, entities] = await Promise.all([
      getIndexableUrls(),
      getIndexablePairings(),
      getIndexableEntities(),
    ]);
  } catch {
    // A sitemap listing only the home page beats a 500 during a database blip.
    return [{ url: absoluteUrl('/'), changeFrequency: 'weekly', priority: 1 }];
  }

  return [
    { url: absoluteUrl('/'), changeFrequency: 'weekly' as const, priority: 1 },
    ...STATIC_PAGES.map((page) => ({
      url: absoluteUrl(page.path),
      changeFrequency: 'monthly' as const,
      priority: page.priority,
    })),
    ...urls.domains.map((row) => ({
      url: absoluteUrl(row.path),
      lastModified: row.updatedAt,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    })),
    ...urls.objectCategories.map((row) => ({
      url: absoluteUrl(row.path),
      lastModified: row.updatedAt,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    })),
    ...urls.systems.map((row) => ({
      url: absoluteUrl(row.path),
      lastModified: row.updatedAt,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
    ...urls.problems.map((row) => ({
      url: absoluteUrl(row.path),
      lastModified: row.updatedAt,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
    ...pairings.map((row) => ({
      url: absoluteUrl(row.path),
      lastModified: row.updatedAt,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    })),
    // `/use/<entity>/`, on the same threshold the taxonomy hubs use.
    ...entities.map((row) => ({
      url: absoluteUrl(row.path),
      lastModified: row.updatedAt,
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
  ];
}
