import { SITE_DESCRIPTION, SITE_NAME, absoluteUrl, siteOrigin } from '@/lib/site';

/**
 * Structured data, used sparingly.
 *
 * Included: WebSite, Organization, and BreadcrumbList — all describing things
 * that actually exist on the page.
 *
 * The WebSite node used to carry a SearchAction for the sitelinks search box.
 * Google retired that feature in 2024, so the markup bought nothing, and it
 * pointed at `/search`, a page this site deliberately keeps out of the index.
 *
 * Deliberately excluded: FAQPage. Google restricted FAQ rich results to
 * government and health sites, so adding it here would be markup aimed at a
 * result we cannot get. Also excluded: Product, Review, MedicalWebPage and
 * NewsArticle — this page is none of those, and claiming otherwise is the kind
 * of schema spam that gets a site manually actioned.
 */

export function websiteJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${siteOrigin()}/#website`,
    name: SITE_NAME,
    description: SITE_DESCRIPTION,
    url: `${siteOrigin()}/`,
    publisher: { '@id': `${siteOrigin()}/#organization` },
  };
}

export function organizationJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    '@id': `${siteOrigin()}/#organization`,
    name: SITE_NAME,
    url: `${siteOrigin()}/`,
    description: SITE_DESCRIPTION,
  };
}

/** WebPage node for a problem, tying the page to its breadcrumb trail and to
 *  the review date actually shown on it. */
export function problemWebPageJsonLd(input: {
  name: string;
  description: string;
  canonicalPath: string;
  lastReviewedAt: Date | null;
  citations: { title: string; url: string | null }[];
}) {
  const url = absoluteUrl(input.canonicalPath);
  const citations = input.citations
    .filter((c): c is { title: string; url: string } => Boolean(c.url))
    .map((c) => ({ '@type': 'CreativeWork', name: c.title, url: c.url }));

  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': `${url}#webpage`,
    url,
    name: input.name,
    description: input.description,
    isPartOf: { '@id': `${siteOrigin()}/#website` },
    ...(input.lastReviewedAt ? { lastReviewed: input.lastReviewedAt.toISOString().slice(0, 10) } : {}),
    ...(citations.length ? { citation: citations } : {}),
  };
}

/** Renders a JSON-LD block. Kept in one place so escaping is handled once. */
export function JsonLd({ data }: { data: object | object[] }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is escaped for the one character that can break
      // out of a <script> block.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, '\\u003c') }}
    />
  );
}
