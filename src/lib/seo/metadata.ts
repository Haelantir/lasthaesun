import type { Metadata } from 'next';

import { SITE_NAME, absoluteUrl } from '@/lib/site';

/**
 * All page metadata is built here, from stored fields.
 *
 * Nothing in a component composes a <title> or a description, and no file
 * hard-codes a domain — the canonical origin comes from NEXT_PUBLIC_SITE_URL
 * via `absoluteUrl`. Adding a problem therefore produces correct, unique
 * metadata with no code change, which is the only way this stays true at scale.
 */

interface PageMetaInput {
  seoTitle: string;
  metaDescription: string;
  canonicalPath: string;
  /** Published-but-thin hubs are linkable for people and withheld from search. */
  indexable: boolean;
}

export function buildPageMetadata({
  seoTitle,
  metaDescription,
  canonicalPath,
  indexable,
}: PageMetaInput): Metadata {
  const url = absoluteUrl(canonicalPath);

  return {
    title: seoTitle,
    description: metaDescription,
    alternates: { canonical: url },
    robots: indexable
      ? { index: true, follow: true }
      : // noindex, but still follow: the crawler should keep discovering the
        // published problems this hub links to.
        { index: false, follow: true },
    openGraph: {
      type: 'website',
      siteName: SITE_NAME,
      title: seoTitle,
      description: metaDescription,
      url,
    },
    twitter: {
      card: 'summary',
      title: seoTitle,
      description: metaDescription,
    },
  };
}

/**
 * Fallback metadata for a hub whose author has not written a title yet.
 * Generated from structured fields rather than reusing another page's copy —
 * duplicate descriptions across a large site are an SEO defect.
 */
export function hubMetadataDefaults(name: string, shortDescription: string | null) {
  return {
    seoTitle: `${name} Problems: What Can You Ignore? | ${SITE_NAME.replace('?', '')}`.replace('  ', ' '),
    metaDescription:
      shortDescription ??
      `Verdicts on common ${name.toLowerCase()} problems — what you can safely leave, what needs dealing with, and what happens if you wait.`,
  };
}
