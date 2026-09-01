import Link from 'next/link';
import type { Metadata } from 'next';

import { Breadcrumbs, type Crumb } from '@/components/Breadcrumbs';
import { ToneIcon } from '@/components/ui/ToneIcon';
import { compatPresentation, type CompatVerdict } from '@/lib/compat';
import { buildPageMetadata } from '@/lib/seo/metadata';

/**
 * SAMPLE — the ENTITY DOSSIER, and the structural point of the whole section.
 *
 * A compatibility site is tempting to build as one page per pair, which is N²
 * pages and is exactly the "page per search phrasing" failure documented in
 * docs/content-architecture.md §4. So the unit here is the entity, not the
 * pair: N entities, N pages, N² rows. A pair is promoted to its own page only
 * when a table row plus one sentence genuinely cannot answer it — as with foil
 * in an air fryer, where the answer branches on how the appliance moves air.
 *
 * That keeps the graph dense while the page count stays linear.
 */

const CRUMBS: Crumb[] = [
  { name: 'Home', path: '/' },
  { name: 'Can I Use It With…', path: '/use/' },
  { name: 'Aluminum Foil', path: '/use/aluminum-foil/' },
];

export const metadata: Metadata = buildPageMetadata({
  seoTitle: 'Where Can You Use Aluminum Foil? Oven, Microwave, Air Fryer, Grill',
  metaDescription:
    'A single table for aluminum foil: which appliances and surfaces it is safe with, which it is not, and the one property of foil that decides every row.',
  canonicalPath: '/use/aluminum-foil/',
  indexable: false,
});

interface Row {
  target: string;
  verdict: CompatVerdict;
  why: string;
  href?: string;
}

const ROWS: Row[] = [
  {
    target: 'Air fryer',
    verdict: 'yes_with_limits',
    why: 'Only weighed down by food and clear of the perforated floor. The fan lifts loose foil onto the element.',
    href: '/use/aluminum-foil/air-fryer/',
  },
  {
    target: 'Conventional oven',
    verdict: 'yes',
    why: 'No fan strong enough to move it and no radiation to reflect. Keep it off the oven floor and heating elements.',
  },
  {
    target: 'Microwave',
    verdict: 'no',
    why: 'Metal reflects microwave radiation. Edges and crumples concentrate it and arc.',
  },
  {
    target: 'Toaster oven',
    verdict: 'risky',
    why: 'Elements sit very close to the food. Many manuals prohibit it outright — check yours.',
  },
  {
    target: 'Charcoal or gas grill',
    verdict: 'yes',
    why: 'Standard practice. Direct flame contact will burn through it, so expect a single use.',
  },
  {
    target: 'Slow cooker',
    verdict: 'yes',
    why: 'Low, still heat with no fan and no flame. Nothing here acts on the foil.',
  },
  {
    target: 'Freezer',
    verdict: 'yes_with_limits',
    why: 'Fine as a barrier, poor as a seal. It tears and lets air in, which is what causes freezer burn.',
  },
  {
    target: 'Acidic food (tomato, citrus, vinegar)',
    verdict: 'no',
    why: 'Acid strips the oxide layer, the foil pits and aluminium transfers into the food.',
  },
];

export default function AluminumFoilDossierPage() {
  return (
    <div className="container">
      <Breadcrumbs crumbs={CRUMBS} />

      <main id="main" className="problem">
        <div className="measure">
          <p className="problem__eyebrow">Material dossier</p>
          <h1 className="problem__h1">Where Can I Use Aluminum Foil?</h1>
        </div>

        <div className="callout measure" style={{ marginTop: 0 }}>
          <p className="callout__label">The one property that decides every row</p>
          <p>
            Foil is metal, it is extremely light, and it is protected by a thin oxide layer. So it
            fails in exactly three situations: where something <strong>reflects</strong> off metal
            (a microwave), where moving air can <strong>lift</strong> it (an air fryer), and where
            acid can <strong>strip</strong> it (tomato, citrus, vinegar). Every verdict below is one
            of those three, and nothing else.
          </p>
        </div>

        <section className="section" aria-labelledby="matrix-heading">
          <div className="section__head measure">
            <h2 id="matrix-heading">Aluminum foil compatibility</h2>
          </div>

          <div className="table-scroll">
            <table className="decision-table">
              <caption className="sr-only">
                Where aluminum foil may and may not be used, with the reason for each verdict
              </caption>
              <thead>
                <tr>
                  <th scope="col">Use it in / with</th>
                  <th scope="col">Verdict</th>
                  <th scope="col">Why</th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row) => {
                  const v = compatPresentation(row.verdict);
                  return (
                    <tr key={row.target}>
                      <th scope="row">
                        {row.href ? <Link href={row.href}>{row.target}</Link> : row.target}
                      </th>
                      <td data-tone={v.tone}>
                        <span className="compat-verdict">
                          <ToneIcon glyph={v.glyph} className="compat-verdict__glyph" size={16} />
                          {v.label}
                        </span>
                      </td>
                      <td>{row.why}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>

          <p className="section__lead measure">
            A row becomes its own page only when the answer branches into conditions a row cannot
            hold. So far that is true of one row: the air fryer.
          </p>
        </section>
      </main>
    </div>
  );
}
