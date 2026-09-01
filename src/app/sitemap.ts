import type { MetadataRoute } from 'next';

import { getIndexablePairings } from '@/lib/repository/compat';
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
 */
export const revalidate = 3600;


export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let urls: Awaited<ReturnType<typeof getIndexableUrls>>;
  let pairings: Awaited<ReturnType<typeof getIndexablePairings>> = [];

  try {
    [urls, pairings] = await Promise.all([getIndexableUrls(), getIndexablePairings()]);
  } catch {
    // A sitemap listing only the home page beats a 500 during a database blip.
    return [{ url: absoluteUrl('/'), changeFrequency: 'weekly', priority: 1 }];
  }

  return [
    { url: absoluteUrl('/'), changeFrequency: 'weekly' as const, priority: 1 },
    // Indexable, entirely internal links, and omitted from here until now purely
    // because this file was built before it existed.
    { url: absoluteUrl('/browse/'), changeFrequency: 'weekly' as const, priority: 0.7 },
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
  ];
}
