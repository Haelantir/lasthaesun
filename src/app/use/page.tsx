import Link from 'next/link';
import type { Metadata } from 'next';

import { Breadcrumbs, type Crumb } from '@/components/Breadcrumbs';
import { compatPresentation } from '@/lib/compat';
import { buildPageMetadata } from '@/lib/seo/metadata';
import { PAIRINGS, pairingPath } from '@/content/compat/pairings';

/**
 * SAMPLE — section hub for "Can I Use It With…".
 *
 * `indexable: false`, following the rule the taxonomy hubs already use: a hub
 * stays out of the index until it holds enough pages to be worth ranking. One
 * sample pairing is not enough.
 */

const CRUMBS: Crumb[] = [
  { name: 'Home', path: '/' },
  { name: 'Can I Use It With…', path: '/use/' },
];

export const metadata: Metadata = buildPageMetadata({
  seoTitle: 'Can I Use It With… — Compatibility Answers for Everyday Things',
  metaDescription:
    'What you can put in it, use on it, plug into it, wash it with or store beside it. One verdict per pairing, with the mechanism behind it.',
  canonicalPath: '/use/',
  indexable: false,
});

const CATEGORIES = [
  { name: 'Kitchen & Cooking', note: 'Liners, wraps, cookware, containers', ready: PAIRINGS.length },
  { name: 'Electrical & Power', note: 'Power strips, extension cords, chargers, adapters', ready: 0 },
  { name: 'Cleaning & Surfaces', note: 'Cleaners and methods against finishes', ready: 0 },
  { name: 'Laundry & Fabrics', note: 'Detergents, dryers, materials', ready: 0 },
  { name: 'Storage', note: 'What may share a garage, shed, attic or fridge', ready: 0 },
  { name: 'Vehicles & Fluids', note: 'Oils, coolants, additives, mixing rules', ready: 0 },
];

export default function UseHubPage() {
  return (
    <div className="container">
      <Breadcrumbs crumbs={CRUMBS} />

      <main id="main" className="problem">
        <div className="measure">
          <p className="problem__eyebrow">Sample section</p>
          <h1 className="problem__h1">Can I Use It With&hellip;</h1>
          <p className="verdict__answer" style={{ marginTop: 0 }}>
            <em>Can I Ignore It?</em> answers what happens when something has already gone wrong. This
            answers the question that comes before it: do these two things go together at all &mdash;
            what you can put in it, use on it, plug into it, wash it with, or store beside it.
          </p>
        </div>

        <section className="section" aria-labelledby="ready-heading">
          <div className="section__head measure">
            <h2 id="ready-heading">Written so far</h2>
            <p className="section__lead">
              Everything answered against one appliance, which is how a compatibility set becomes
              useful rather than long.
            </p>
          </div>
          <ul className="pair-list">
            {PAIRINGS.map((pairing) => (
              <li key={pairingPath(pairing)}>
                <Link className="pair-card" href={pairingPath(pairing)}>
                  <span className="pair-card__title">{pairing.h1}</span>
                  <span className="pair-card__meta">
                    {pairing.eyebrow} · {compatPresentation(pairing.verdict).label}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section className="section" aria-labelledby="planned-heading">
          <div className="section__head measure">
            <h2 id="planned-heading">Planned categories</h2>
            <p className="section__lead">
              Named here, not linked: the site says one pairing is published when one pairing is
              published.
            </p>
          </div>
          <ul className="hub-grid">
            {CATEGORIES.map((category) => (
              <li key={category.name}>
                <span className="hub-tile" style={{ cursor: 'default' }}>
                  <span className="hub-tile__name" style={{ color: 'var(--text)' }}>
                    {category.name}
                  </span>
                  <span className="hub-tile__meta">{category.note}</span>
                  <span className="hub-tile__meta">
                    {category.ready > 0 ? `${category.ready} written` : 'Planned'}
                  </span>
                </span>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
