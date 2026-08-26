import type { MetadataRoute } from 'next';

import { absoluteUrl } from '@/lib/site';

/**
 * Content is fully crawlable. Nothing blocks CSS or JS — blocking them stops
 * Google rendering the page and is a classic self-inflicted SEO wound.
 *
 * Only `/search` is disallowed: it is a results page, not content, and letting
 * a crawler wander through query strings creates infinite near-duplicate URLs.
 * Individual thin pages are kept out of the index with per-page `noindex`
 * instead, which still lets the crawler follow their links.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/search'],
      },
    ],
    sitemap: absoluteUrl('/sitemap.xml'),
    host: absoluteUrl('/'),
  };
}
