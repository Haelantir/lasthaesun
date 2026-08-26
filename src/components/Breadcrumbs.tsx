import Link from 'next/link';

import { absoluteUrl } from '@/lib/site';

export interface Crumb {
  name: string;
  path: string;
}

/**
 * Breadcrumbs follow the TAXONOMY, not the URL.
 *
 * "Home > Mobility > Cars > Tires > Low Tire Pressure" is shown even though the
 * URL is /cars/tires/low-tire-pressure/ — the Mobility crumb links to its own
 * hub at /mobility/. Showing the taxonomy here is what lets the URL stay short
 * without losing the category signal for readers or for crawlers.
 */
export function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol>
        {crumbs.map((crumb, index) => {
          const isLast = index === crumbs.length - 1;
          return (
            <li key={crumb.path}>
              {index > 0 ? (
                <span className="breadcrumbs__sep" aria-hidden="true">
                  ›
                </span>
              ) : null}
              {isLast ? (
                <span aria-current="page">{crumb.name}</span>
              ) : (
                <Link href={crumb.path}>{crumb.name}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

/** BreadcrumbList JSON-LD built from the same array the visible trail uses, so
 *  the two can never disagree. */
export function breadcrumbJsonLd(crumbs: Crumb[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      item: absoluteUrl(crumb.path),
    })),
  };
}
