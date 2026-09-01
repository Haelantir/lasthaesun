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
 * Hand-placed at the URL the taxonomy would generate, so the shape can be
 * judged before any schema, importer or seed work is done. A real section would
 * store all of this and render it from one template, exactly as ProblemPage.tsx
 * does for decisions; nothing below is specific to foil except the strings.
 *
 * The prose was written by the pinned content writer (CONTENT_WRITER_MODEL,
 * scripts/content-batch/writer.ts) against the same voice rules as
 * docs/content-authoring-prompt.txt §2, and is reproduced verbatim. Every source
 * URL below returned 200 when this file was written.
 *
 * Block order mirrors the decision pages — answer first, explanation later:
 *
 *   1  pairing box + breadcrumb      4  why
 *   2  verdict                       5  where the question comes from
 *   3  the conditions                6  sources + related
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
  seoTitle: 'Aluminum Foil in Air Fryers: Safe Use Rules | Can I Use It With',
  metaDescription:
    'Sometimes. Use aluminum foil only when your air fryer’s manual allows it, keep airflow openings clear, and secure the foil under food before cooking.',
  canonicalPath: CANONICAL_PATH,
  indexable: true,
});

const SOURCES = [
  {
    publisher: 'Philips',
    title: 'Can I use baking paper/tin foil in my Philips Airfryer?',
    url: 'https://www.usa.philips.com/c-f/XC000003625/can-i-use-baking-paper-tin-foil-in-my-philips-airfryer',
  },
  {
    publisher: 'Instant Pot',
    title: 'Frequently Asked Questions',
    url: 'https://instantpot.com/pages/frequently-asked-questions',
  },
  {
    publisher: 'Hamilton Beach',
    title: 'Hamilton Beach FAQs',
    url: 'https://hamiltonbeach.com/frequently-asked-questions',
  },
];

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
              'Whether aluminum foil can be used in an air fryer, the conditions that make it safe, and what the fan changes.',
            canonicalPath: CANONICAL_PATH,
            lastReviewedAt: new Date('2026-09-01T00:00:00Z'),
            citations: SOURCES.map((s) => ({ title: s.title, url: s.url })),
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
              <span className="pairing__note">Thin rolled aluminum kitchen wrap</span>
            </Link>
            <span className="pairing__relation">in</span>
            <span className="pairing__entity">
              <span className="pairing__kind">Appliance</span>
              <span className="pairing__name">Air Fryer</span>
              <span className="pairing__note">Fan-driven countertop cooking appliance</span>
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
              Sometimes. Manuals differ, so use foil only if your air fryer&rsquo;s instructions allow it.
              Keep the piece small, hold it down with food, leave airflow openings clear, and keep it away
              from the heating element. If your manual says no, cook directly in the basket.
            </p>

            <h2 className="sr-only">Compatibility summary</h2>
            <ul className="metrics">
              <li className="metric" data-tone={v.tone}>
                <span className="metric__label">Can I use them together?</span>
                <span className="metric__value">
                  <ToneIcon glyph={v.glyph} className="metric__glyph" />
                  Sometimes, if the manual allows
                </span>
              </li>
              <li className="metric" data-tone="danger">
                <span className="metric__label">Main risk</span>
                <span className="metric__value">
                  <ToneIcon glyph="stop" className="metric__glyph" />
                  Foil burning
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
                <span className="metric__label">Alternative</span>
                <span className="metric__value">
                  <ToneIcon glyph="check" className="metric__glyph" />
                  Cook in bare basket
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
            </div>

            <div className="conditions">
              <div className="conditions__col" data-tone="safe">
                <p className="conditions__heading">
                  <ToneIcon glyph="check" size={18} />
                  Fine to do
                </p>
                <ul className="conditions__list">
                  <li>The owner&rsquo;s manual for your exact model allows foil.</li>
                  <li>
                    The piece is no larger than needed for the food, with open space around it for
                    circulation.
                  </li>
                  <li>
                    Food is already on top before the fan starts and is heavy enough to keep the foil from
                    moving.
                  </li>
                  <li>
                    The foil sits only in the location approved by the manual and stays away from the
                    heating element.
                  </li>
                </ul>
              </div>

              <div className="conditions__col" data-tone="danger">
                <p className="conditions__heading">
                  <ToneIcon glyph="stop" size={18} />
                  Never do
                </p>
                <ul className="conditions__list">
                  <li>Never use foil when the manual prohibits or discourages it.</li>
                  <li>Never cover the entire basket or block its perforations.</li>
                  <li>
                    Never line a grease-collection pan unless the manual specifically allows that
                    placement.
                  </li>
                  <li>Never run the fan with loose, unweighted foil inside.</li>
                  <li>Never let foil protrude toward or touch the heating element.</li>
                </ul>
              </div>
            </div>
          </section>

          {/* ------------------------------------------------------- BLOCK 4 */}
          <section className="section" aria-labelledby="why-heading">
            <div className="section__head measure">
              <h2 id="why-heading">Why those conditions exist</h2>
            </div>

            <ol className="mechanisms measure">
              <li className="mechanism">
                <span className="mechanism__number" aria-hidden="true" />
                <div>
                  <p className="mechanism__title">Blocked airflow</p>
                  <div className="mechanism__body">
                    <p>
                      The fan pushes heated air through and around the basket. A broad foil sheet closes
                      openings, so less hot air reaches the food and cooking becomes uneven.
                    </p>
                  </div>
                </div>
              </li>

              <li className="mechanism">
                <span className="mechanism__number" aria-hidden="true" />
                <div>
                  <p className="mechanism__title">Lifted into heater</p>
                  <div className="mechanism__body">
                    <p>
                      Moving air can raise thin foil when food does not hold it down. Foil that reaches
                      the heating element can start to burn.
                    </p>
                  </div>
                </div>
              </li>
            </ol>

            {/* --------------------------------------------------- BLOCK 5 */}
            <div className="callout measure">
              <p className="callout__label">Oven-safe assumption</p>
              <p>
                Foil handles normal oven heat, so lining an air fryer can look like an easy way to catch
                drips and speed cleanup.
              </p>
              <p>
                The fan changes the decision. Foil can cover the openings that move hot air around the
                food, and an unsecured sheet can rise toward the heater. Manufacturers allow different
                placements, so the manual for the exact model controls.
              </p>
            </div>
          </section>

          {/* ------------------------------------------------------- BLOCK 6 */}
          <section className="section measure" aria-labelledby="sources-heading">
            <div className="section__head">
              <h2 id="sources-heading">Sources</h2>
            </div>
            <ul className="conditions__list" style={{ paddingLeft: '1.1rem' }}>
              {SOURCES.map((source) => (
                <li key={source.url}>
                  {source.publisher} &mdash;{' '}
                  <a href={source.url} rel="nofollow noopener" target="_blank">
                    {source.title}
                  </a>
                </li>
              ))}
            </ul>
            <p className="section__lead">
              Reviewed 1 September 2026 · Reviewed against manufacturer support and owner guidance from
              Philips, Instant Pot and Hamilton Beach, with differences between models and brands
              preserved.
            </p>
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
                    Can I Ignore It? · Why metal behaves differently in a microwave
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
