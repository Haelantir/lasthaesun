import type { MetadataRoute } from 'next';

import { PAIRINGS, pairingPath } from '@/content/compat';
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
 * The "Can I Use It With…" pairings come from `src/content/compat`, which is not
 * in the database at all. They were invisible here for their first eight
 * batches: 56 live pages with no sitemap entry, because this file only knew how
 * to ask Postgres. Their hubs stay out on the same rule as the taxonomy hubs —
 * `/use/` and `/use/<subject>/` are both `indexable: false` today.
 *
 * At tens of thousands of URLs this should be split into a sitemap index
 * (Google's limit is 50,000 URLs / 50MB per file); `getIndexableUrls` is already
 * the single place the database half would need to paginate.
 */
export const revalidate = 3600;

/** Pairing pages, which are `indexable: true` in their route. */
const compatUrls: MetadataRoute.Sitemap = PAIRINGS.map((pairing) => ({
  url: absoluteUrl(pairingPath(pairing)),
  lastModified: pairing.reviewedAt,
  changeFrequency: 'monthly' as const,
  priority: 0.9,
}));

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let urls: Awaited<ReturnType<typeof getIndexableUrls>>;

  try {
    urls = await getIndexableUrls();
  } catch {
    // A database blip must not take the pairings down with it: they do not come
    // from Postgres, so there is no reason for them to disappear when it hiccups.
    return [
      { url: absoluteUrl('/'), changeFrequency: 'weekly', priority: 1 },
      ...compatUrls,
    ];
  }

  return [
    { url: absoluteUrl('/'), changeFrequency: 'weekly' as const, priority: 1 },
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
    ...compatUrls,
  ];
}
