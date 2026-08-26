/**
 * Site-level constants. The production origin lives in exactly one place so
 * that no component ever hard-codes a domain.
 */

export const SITE_NAME = 'Can I Ignore It?';
export const SITE_TAGLINE = 'Find out what happens if you do nothing.';
export const SITE_DESCRIPTION =
  'A growing database of things people wonder whether they can safely ignore. Get the verdict first, then see what actually happens if you wait.';

const FALLBACK_ORIGIN = 'http://localhost:3000';

/** Absolute origin, no trailing slash. */
export function siteOrigin(): string {
  const raw = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (!raw) return FALLBACK_ORIGIN;
  return raw.replace(/\/+$/, '');
}

/** Turn a stored canonical path into the absolute URL used in <link rel=canonical>,
 *  JSON-LD and the sitemap. */
export function absoluteUrl(path: string): string {
  return `${siteOrigin()}${path.startsWith('/') ? path : `/${path}`}`;
}

/**
 * Normalise an incoming request path into the shape canonical paths are stored
 * in: leading slash, exactly one trailing slash, lower case.
 */
export function normalizePath(segments: string[] | string): string {
  const raw = Array.isArray(segments) ? segments.join('/') : segments;
  const trimmed = raw
    // Repeated slashes anywhere collapse to one, so `//cars//tires//` resolves to
    // the same row as `/cars/tires/` instead of 404ing.
    .replace(/\/{2,}/g, '/')
    .replace(/^\/+/, '')
    .replace(/\/+$/, '');
  return trimmed.length === 0 ? '/' : `/${trimmed.toLowerCase()}/`;
}
