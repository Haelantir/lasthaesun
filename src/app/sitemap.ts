import type { MetadataRoute } from 'next';

import { getIndexableUrls } from '@/lib/repository/taxonomy';
import { absoluteUrl } from '@/lib/site';

/**
 * The sitemap is generated from the database, not maintained by hand.
 *
 * It contains only rows that are BOTH `published` AND `indexable`. Today that is
 * the home page and one problem — the hubs are live for people but deliberately
 * withheld from search until they hold enough content to be worth ranking. A
 * sitemap listing thin category pages is a quality signal working against you.
 *
 * At tens of thousands of problems this should be split into a sitemap index
 * (Google's limit is 50,000 URLs / 50MB per file); `getIndexableUrls` is already
 * the single place that would need to paginate.
 */
export const revalidate = 3600;

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let urls: Awaited<ReturnType<typeof getIndexableUrls>>;

  try {
    urls = await getIndexableUrls();
  } catch {
    // A sitemap listing only the home page beats a 500 during a database blip.
    return [{ url: absoluteUrl('/'), changeFrequency: 'weekly', priority: 1 }];
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
  ];
}
