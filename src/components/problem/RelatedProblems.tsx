import Link from 'next/link';

import type { RelatedProblemLink } from '@/lib/repository/problems';

/**
 * BLOCK 12 — "Other problems you might be ignoring".
 *
 * The rule this component exists to enforce: a related problem becomes a LINK
 * only when its record is actually published. Anything still in draft renders
 * as plain text with a "planned" marker.
 *
 * That means the site never ships a link to a 404, never needs a thin
 * "coming soon" page to satisfy the UI, and lights up new internal links by
 * itself the moment a record's status changes — no code edit, no deploy of this
 * file.
 *
 * Anchor text is authored per relationship ("Can I ignore a nail in my tire?")
 * rather than generated, because meaningful anchors are the entire point of
 * internal linking.
 */

export function RelatedProblems({
  heading,
  items,
  upLinks,
}: {
  heading: string;
  items: RelatedProblemLink[];
  upLinks: { label: string; href: string }[];
}) {
  const published = items.filter((item) => item.href);
  const planned = items.filter((item) => !item.href);

  return (
    <>
      <h2 id="related">{heading}</h2>

      {items.length > 0 ? (
        <ul className="related">
          {published.map((item) => (
            <li key={item.label}>
              <Link className="related__item related__item--link" href={item.href as string}>
                {item.label}
                <span aria-hidden="true" className="related__status">
                  →
                </span>
              </Link>
            </li>
          ))}
          {planned.map((item) => (
            <li className="related__item related__item--planned" key={item.label}>
              <span>{item.label}</span>
              <span className="related__status">Planned</span>
            </li>
          ))}
        </ul>
      ) : null}

      {planned.length > 0 ? (
        <p className="checker__fallback">
          Planned decisions are written and reviewed one at a time. They appear here as links once they are
          published.
        </p>
      ) : null}

      {upLinks.length > 0 ? (
        <nav className="up-links" aria-label="Browse up">
          {upLinks.map((link) => (
            <Link className="button button--secondary" href={link.href} key={link.href}>
              <span aria-hidden="true">←</span> {link.label}
            </Link>
          ))}
        </nav>
      ) : null}
    </>
  );
}
