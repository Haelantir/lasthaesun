import type { MetadataRoute } from 'next';

import { absoluteUrl } from '@/lib/site';

/**
 * Content is fully crawlable. Nothing blocks CSS or JS — blocking them stops
 * Google rendering the page and is a classic self-inflicted SEO wound.
 *
 * Nothing is disallowed either. `/search` used to be, which was the classic
 * self-cancelling pair: the page also sends `noindex`, and a crawler blocked by
 * robots.txt never fetches the page, never sees the `noindex`, and can still
 * index the URL from a link elsewhere. Pick one. `noindex, follow` is the one
 * that actually keeps a page out of the index, so the block goes and the header
 * stays. Query-string sprawl is not a real risk here: the only links to
 * `/search` are bare, and the results page is rendered from a form.
 *
 * Thin hubs are kept out of the index the same way — per-page `noindex`, which
 * still lets the crawler follow their links onward.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
    sitemap: absoluteUrl('/sitemap.xml'),
    host: absoluteUrl('/'),
  };
}
