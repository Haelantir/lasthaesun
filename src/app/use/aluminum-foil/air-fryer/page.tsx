import Link from 'next/link';
import type { Metadata } from 'next';

import { Breadcrumbs, breadcrumbJsonLd, type Crumb } from '@/components/Breadcrumbs';
import { ProblemSearch } from '@/components/ProblemSearch';
import { ToneIcon } from '@/components/ui/ToneIcon';
import { compatPresentation, type CompatVerdict } from '@/lib/compat';
import { JsonLd, problemWebPageJsonLd } from '@/lib/seo/jsonld';
import { buildPageMetadata } from '@/lib/seo/metadata';

/**
 * SAMPLE — "Can I Use It With…", the compatibility section.
 *
 * Hand-written at the URL the taxonomy would generate, so the shape can be
 * judged before any schema, importer or seed work is done. A real section would
 * store all of this and render it from one template, exactly as ProblemPage.tsx
 * does for decisions; nothing below is specific to foil except the strings.
 *
 * The block order mirrors the decision pages on purpose — answer first,
 * explanation later:
 *
 *   1  pairing box + breadcrumb      4  why (mechanism)
 *   2  verdict                       5  what else fits (the matrix)
 *   3  the conditions                6  sources + related
 *
 * Note on sources: every URL below is null. The pairing is governed by
 * manufacturer guidance, and none of those pages were opened and verified in
 * the session that wrote this file, so under the repository's "never invent a
 * URL" rule they are listed without links. This is also the section's first
 * real design problem — see the note in the Sources block.
 */

const CANONICAL_PATH = '/use/aluminum-foil/air-fryer/';

const VERDICT: CompatVerdict = 'yes_with_limits';

const CRUMBS: Crumb[] = [
  { name: 'Home', path: '/' },
  { name: 'Can I Use It With…', path: '/use/' },
  { name: 'Aluminum Foil', path: '/use/aluminum-foil/' },
  { name: 'In an Air Fryer', path: CANONICAL_PATH },
];

export const metadata: Metadata = buildPageMetadata({
  seoTitle: 'Can You Put Aluminum Foil in an Air Fryer? | Can I Use It With',
  metaDescription:
    'Yes, with limits. Foil is safe in an air fryer only when food weighs it down and it never covers the perforated floor. Here is the rule and the reason behind it.',
  canonicalPath: CANONICAL_PATH,
  indexable: true,
});

export default function AluminumFoilInAirFryerPage() {
  const v = compatPresentation(VERDICT);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd(CRUMBS),
          problemWebPageJsonLd({
            name: 'Can I Use Aluminum Foil in an Air Fryer?',
            description:
              'Whether aluminum foil can be used in an air fryer basket, the conditions that make it safe, and the mechanism behind each one.',
            canonicalPath: CANONICAL_PATH,
            lastReviewedAt: new Date('2026-09-01T00:00:00Z'),
            citations: [],
          }),
        ]}
      />

      <div className="container">
        {/* ------------------------------------------------------- BLOCK 1 */}
        <Breadcrumbs crumbs={CRUMBS} />

        <main id="main" className="problem">
          <div className="measure">
            <p className="problem__eyebrow">Kitchen · Liners &amp; Wraps</p>
            <h1 className="problem__h1">Can I Use Aluminum Foil in an Air Fryer?</h1>
          </div>

          {/* The pairing box: the visual signature of a compatibility page.
              Both halves link to their own dossier, which is what turns a pile
              of pages into a graph. */}
          <div className="pairing">
            <Link className="pairing__entity" href="/use/aluminum-foil/">
              <span className="pairing__kind">Material</span>
              <span className="pairing__name">Aluminum Foil</span>
              <span className="pairing__note">Thin rolled aluminium, kitchen wrap</span>
            </Link>
            <span className="pairing__relation">in</span>
            <span className="pairing__entity">
              <span className="pairing__kind">Appliance</span>
              <span className="pairing__name">Air Fryer</span>
              <span className="pairing__note">Countertop convection oven, fan-driven</span>
            </span>
          </div>

          {/* ------------------------------------------------------- BLOCK 2 */}
          <section className="verdict" data-tone={v.tone} aria-labelledby="verdict-label">
            <p className="verdict__label" id="verdict-label">
              <ToneIcon glyph={v.glyph} className="verdict__glyph" />
              {v.label}
            </p>
            <p className="verdict__gloss">{v.gloss}</p>

            <p className="verdict__answer">
              Foil can go in an air fryer basket, but only underneath food that is heavy enough to hold it
              down, and never spread across the perforated floor. Loose foil gets picked up by the fan and
              pushed onto the heating element. Leave it out entirely for acidic food and for an empty
              preheat.
            </p>

            <h2 className="sr-only">Compatibility summary</h2>
            <ul className="metrics">
              <li className="metric" data-tone={v.tone}>
                <span className="metric__label">Can I use them together?</span>
                <span className="metric__value">
                  <ToneIcon glyph={v.glyph} className="metric__glyph" />
                  Yes, under conditions
                </span>
              </li>
              <li className="metric" data-tone="danger">
                <span className="metric__label">Main risk</span>
                <span className="metric__value">
                  <ToneIcon glyph="stop" className="metric__glyph" />
                  Fire
                </span>
              </li>
              <li className="metric" data-tone="warning">
                <span className="metric__label">What gets damaged</span>
                <span className="metric__value">
                  <ToneIcon glyph="alert" className="metric__glyph" />
                  The air fryer
                </span>
              </li>
              <li className="metric" data-tone="safe">
                <span className="metric__label">Safer option exists</span>
                <span className="metric__value">
                  <ToneIcon glyph="check" className="metric__glyph" />
                  Yes — perforated liner
                </span>
              </li>
            </ul>

            <p className="verdict__cta">
              <a className="button" href="#conditions">
                See the conditions
                <span aria-hidden="true">↓</span>
              </a>
            </p>
          </section>

          {/* ------------------------------------------------------- BLOCK 3 */}
          <section className="section" aria-labelledby="conditions-heading">
            <div className="section__head measure" id="conditions">
              <h2 id="conditions-heading">The conditions</h2>
              <p className="section__lead">
                On a &ldquo;yes, with limits&rdquo; pairing the limits are the answer, not a footnote.
              </p>
            </div>

            <div className="conditions">
              <div className="conditions__col" data-tone="safe">
                <p className="conditions__heading">
                  <ToneIcon glyph="check" size={18} />
                  Fine to do
                </p>
                <ul className="conditions__list">
                  <li>A small sheet sitting under the food, with the food&rsquo;s own weight holding it flat.</li>
                  <li>Foil that leaves the perforations around and beside the food clear.</li>
                  <li>Foil kept well clear of the heating element and the fan opening.</li>
                  <li>Loosely tenting a finished item to rest it — with the appliance off.</li>
                </ul>
              </div>

              <div className="conditions__col" data-tone="danger">
                <p className="conditions__heading">
                  <ToneIcon glyph="stop" size={18} />
                  Never do
                </p>
                <ul className="conditions__list">
                  <li>Preheat with foil in an empty basket. Nothing is holding it down.</li>
                  <li>Line the whole basket floor. That is the appliance&rsquo;s air path, not a pan.</li>
                  <li>Use foil with tomato, citrus or vinegar-based food.</li>
                  <li>Let foil touch, or blow against, the heating element.</li>
                  <li>Wrap food completely. Sealed food steams; it does not air-fry.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* ------------------------------------------------------- BLOCK 4 */}
          <section className="section" aria-labelledby="why-heading">
            <div className="section__head measure">
              <h2 id="why-heading">Why those conditions exist</h2>
              <p className="section__lead">Three separate mechanisms, not one rule.</p>
            </div>

            <ol className="mechanisms measure">
              <li className="mechanism">
                <span className="mechanism__number" aria-hidden="true" />
                <div>
                  <p className="mechanism__title">The fan can lift it</p>
                  <div className="mechanism__body">
                    <p>
                      An air fryer is a small convection oven: a heating element with a high-speed fan
                      moving air past it and down through the basket. That airflow is strong enough to
                      lift a light sheet of foil. If it lands on the element it scorches, and burning
                      material inside a closed, very hot chamber is how this pairing becomes a fire
                      rather than a mess.
                    </p>
                    <p>
                      This is why every condition above reduces to the same test:{' '}
                      <strong>is something heavy holding the foil down right now?</strong> During a
                      preheat the answer is no, which is why the preheat is the single worst moment for
                      it.
                    </p>
                  </div>
                </div>
              </li>

              <li className="mechanism">
                <span className="mechanism__number" aria-hidden="true" />
                <div>
                  <p className="mechanism__title">The holes are the appliance</p>
                  <div className="mechanism__body">
                    <p>
                      The basket floor is perforated on purpose. Hot air has to pass through it and
                      around the food — that circulation is the entire difference between an air fryer
                      and a small oven. Foil laid across the floor converts it back into a covered pan:
                      food cooks unevenly and browns poorly, and the chamber holds heat differently
                      than the design assumes.
                    </p>
                  </div>
                </div>
              </li>

              <li className="mechanism">
                <span className="mechanism__number" aria-hidden="true" />
                <div>
                  <p className="mechanism__title">Acid attacks aluminium</p>
                  <div className="mechanism__body">
                    <p>
                      Aluminium protects itself with a thin oxide layer. Acidic food — tomato, citrus,
                      a vinegar marinade — strips that layer, so the foil pits and some aluminium
                      transfers into the food, usually with a metallic taste. This one has nothing to
                      do with air fryers; it is true of foil in any hot dish, and it is why the answer
                      changes with what you are cooking rather than with the appliance.
                    </p>
                  </div>
                </div>
              </li>
            </ol>

            <div className="callout measure">
              <p className="callout__label">Where this question comes from</p>
              <p>
                Almost everyone arrives here carrying the microwave rule: metal does not go in a
                microwave. That rule does not transfer. A microwave cooks with electromagnetic
                radiation, which metal reflects and can arc across — see{' '}
                <Link href="/appliances/microwaves/sparking-and-damage/sparking-microwave/">
                  why a microwave sparks and what to do about it
                </Link>
                .
              </p>
              <p>
                An air fryer has no radiation to reflect. It cooks with a hot element and moving air,
                and the basket it cooks in is itself metal. So the risk here is{' '}
                <strong>mechanical and thermal, never electrical</strong> — which is exactly why the
                answer is &ldquo;yes, if it cannot move&rdquo; instead of the flat no people expect.
              </p>
            </div>
          </section>

          {/* ------------------------------------------------------- BLOCK 5 */}
          <section className="section" aria-labelledby="matrix-heading">
            <div className="section__head measure">
              <h2 id="matrix-heading">What else can line an air fryer basket?</h2>
              <p className="section__lead">
                The row you came for is one of eight. This table is the part an AI summary cannot hand
                back in three sentences.
              </p>
            </div>

            <div className="table-scroll">
              <table className="decision-table">
                <caption className="sr-only">
                  Air fryer basket liners, with a compatibility verdict and the reason for each
                </caption>
                <thead>
                  <tr>
                    <th scope="col">Liner</th>
                    <th scope="col">Verdict</th>
                    <th scope="col">Why</th>
                  </tr>
                </thead>
                <tbody>
                  <MatrixRow
                    liner="Aluminum foil"
                    verdict="yes_with_limits"
                    why="Must be weighed down by food and kept off the perforations. Not with acidic food."
                  />
                  <MatrixRow
                    liner="Perforated parchment liner"
                    verdict="yes"
                    why="Cut for airflow, which is the whole problem foil creates. Still needs food on top of it."
                  />
                  <MatrixRow
                    liner="Plain parchment, uncut"
                    verdict="risky"
                    why="Blocks the air path and lifts as easily as foil. Scorches above its rated temperature."
                  />
                  <MatrixRow
                    liner="Silicone basket liner"
                    verdict="yes"
                    why="Heavy enough not to lift. Check the liner's stated temperature rating against your setting."
                  />
                  <MatrixRow
                    liner="Oven-safe glass or ceramic dish"
                    verdict="yes_with_limits"
                    why="Only if rated for oven use and small enough to leave air moving around it."
                  />
                  <MatrixRow
                    liner="Paper towel"
                    verdict="no"
                    why="Lifts on the first fan cycle and is flammable. There is no safe version of this."
                  />
                  <MatrixRow
                    liner="Wax paper"
                    verdict="no"
                    why="Not heat-rated. The wax melts onto the food and the basket."
                  />
                  <MatrixRow
                    liner="Nothing — bare basket"
                    verdict="yes"
                    why="What the appliance is designed for. Every liner is a trade against airflow."
                  />
                </tbody>
              </table>
            </div>
          </section>

          {/* ------------------------------------------------------- BLOCK 6 */}
          <section className="section measure" aria-labelledby="sources-heading">
            <div className="section__head">
              <h2 id="sources-heading">Sources</h2>
            </div>
            <ul className="conditions__list" style={{ paddingLeft: '1.1rem' }}>
              <li>
                Ninja Kitchen — air fryer owner&rsquo;s guide, accessories and liners.{' '}
                <em>No verified URL.</em>
              </li>
              <li>
                Instant Brands — air fryer support: using foil and parchment. <em>No verified URL.</em>
              </li>
              <li>
                Philips — Airfryer FAQ: what may be placed in the basket. <em>No verified URL.</em>
              </li>
            </ul>
            <p className="section__lead">
              Reviewed 1 September 2026 · Scope: air fryer basket liners and airflow.
            </p>
            <div className="callout">
              <p className="callout__label">Sample note — not part of the page</p>
              <p>
                This pairing is governed by manufacturer guidance. No government or regulation source
                exists for it, so the publish gate that every decision page passes (&ldquo;at least one
                government or regulation source&rdquo;) cannot be copied over to this section unchanged.
                The URLs are null because they were not opened and checked. Both need deciding before
                anything here ships.
              </p>
            </div>
          </section>

          {/* ------------------------------------------------------- RELATED */}
          <section className="section" aria-labelledby="related-heading">
            <div className="section__head measure">
              <h2 id="related-heading">Related</h2>
            </div>
            <ul className="pair-list">
              <li>
                <Link className="pair-card" href="/use/aluminum-foil/">
                  <span className="pair-card__title">Everywhere else aluminum foil can and cannot go</span>
                  <span className="pair-card__meta">
                    Oven · Microwave · Grill · Slow cooker · Toaster oven · Freezer
                  </span>
                </Link>
              </li>
              <li>
                <Link
                  className="pair-card"
                  href="/appliances/microwaves/sparking-and-damage/sparking-microwave/"
                >
                  <span className="pair-card__title">My microwave is sparking — can I ignore it?</span>
                  <span className="pair-card__meta">
                    Can I Ignore It? · Why metal behaves completely differently in a microwave
                  </span>
                </Link>
              </li>
            </ul>

            <div className="measure" style={{ marginTop: 'var(--space-6)' }}>
              <ProblemSearch id="compat-page-search" placeholder="Type your problem…" />
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

function MatrixRow({
  liner,
  verdict,
  why,
}: {
  liner: string;
  verdict: CompatVerdict;
  why: string;
}) {
  const v = compatPresentation(verdict);
  return (
    <tr>
      <th scope="row">{liner}</th>
      <td data-tone={v.tone}>
        <span className="compat-verdict">
          <ToneIcon glyph={v.glyph} className="compat-verdict__glyph" size={16} />
          {v.label}
        </span>
      </td>
      <td>{why}</td>
    </tr>
  );
}
