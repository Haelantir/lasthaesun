import Link from 'next/link';

import { Breadcrumbs, breadcrumbJsonLd, type Crumb } from '@/components/Breadcrumbs';
import { ProblemSearch } from '@/components/ProblemSearch';
import { PairingSwitcher } from '@/components/compat/PairingSwitcher';
import { ToneIcon } from '@/components/ui/ToneIcon';
import { compatPresentation, relationPhrase } from '@/lib/compat';
import { JsonLd, problemWebPageJsonLd } from '@/lib/seo/jsonld';
import { PAIRINGS, pairingPath, pairingsForTarget, type Pairing } from '@/content/compat';

/**
 * THE pairing page template. One file, every compatibility answer on the site.
 *
 * Block order deliberately mirrors ProblemPage.tsx — verdict at block 2,
 * explanation at block 4 — because it is the same product promise in a
 * different question. A reader who searched "can I put foil in an air fryer"
 * gets the answer in the first screen.
 *
 *   1  pairing box + breadcrumb      4  why
 *   2  verdict                       5  where the question comes from
 *   3  the conditions                6  sources + related
 *
 * Nothing here is specific to foil or to air fryers. Every string comes from
 * src/content/compat/.
 */
export function CompatPage({ pairing }: { pairing: Pairing }) {
  const v = compatPresentation(pairing.verdict);
  const path = pairingPath(pairing);
  const relation = relationPhrase(pairing.relation);

  const crumbs: Crumb[] = [
    { name: 'Home', path: '/' },
    { name: 'Can I Use It With…', path: '/use/' },
    { name: pairing.subjectName, path: `/use/${pairing.subjectSlug}/` },
    { name: `${relation[0]!.toUpperCase()}${relation.slice(1)} ${
      /^[aeiou]/i.test(pairing.targetName) ? 'an' : 'a'
    } ${pairing.targetName}`, path },
  ];

  const siblings = pairingsForTarget(pairing.targetSlug);

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd(crumbs),
          problemWebPageJsonLd({
            name: pairing.h1,
            description: pairing.metaDescription,
            canonicalPath: path,
            lastReviewedAt: pairing.reviewedAt,
            citations: pairing.sources.map((s) => ({ title: s.title, url: s.url })),
          }),
        ]}
      />

      <div className="container">
        {/* ---------------------------------------------------- BLOCK 1 */}
        <Breadcrumbs crumbs={crumbs} />

        <main id="main" className="problem">
          <div className="measure">
            <p className="problem__eyebrow">{pairing.eyebrow}</p>
            <h1 className="problem__h1">{pairing.h1}</h1>
          </div>

          {/* The pairing box: the visual signature of a compatibility page. The
              subject links to its own dossier, which is what turns a pile of
              pages into a graph; the switcher underneath swaps the subject
              while the target stays put. */}
          <div className="pairing">
            <Link className="pairing__entity pairing__subject" href={`/use/${pairing.subjectSlug}/`}>
              <span className="pairing__kind">{pairing.subjectKind}</span>
              <span className="pairing__name">{pairing.subjectName}</span>
              <span className="pairing__note">{pairing.subjectNote}</span>
            </Link>

            <div className="pairing__swap">
              <PairingSwitcher
                targetName={pairing.targetName}
                currentSubjectSlug={pairing.subjectSlug}
                options={siblings.map((sibling) => ({
                  subjectSlug: sibling.subjectSlug,
                  subjectName: sibling.subjectName,
                  href: pairingPath(sibling),
                  verdict: sibling.verdict,
                }))}
              />
            </div>

            <span className="pairing__relation">{relation}</span>

            <span className="pairing__entity pairing__target">
              <span className="pairing__kind">{pairing.targetKind}</span>
              <span className="pairing__name">{pairing.targetName}</span>
              <span className="pairing__note">{pairing.targetNote}</span>
            </span>
          </div>

          {/* ---------------------------------------------------- BLOCK 2 */}
          <section className="verdict" data-tone={v.tone} aria-labelledby="verdict-label">
            <p className="verdict__label" id="verdict-label">
              <ToneIcon glyph={v.glyph} className="verdict__glyph" />
              {v.label}
            </p>
            <p className="verdict__gloss">{v.gloss}</p>

            <p className="verdict__answer">{pairing.shortAnswer}</p>

            <h2 className="sr-only">Compatibility summary</h2>
            <ul className="metrics">
              <li className="metric" data-tone={v.tone}>
                <span className="metric__label">Can I use them together?</span>
                <span className="metric__value">
                  <ToneIcon glyph={v.glyph} className="metric__glyph" />
                  {v.label === 'NO' ? 'No' : 'Only under conditions'}
                </span>
              </li>
              <li className="metric" data-tone="danger">
                <span className="metric__label">Main risk</span>
                <span className="metric__value">
                  <ToneIcon glyph="stop" className="metric__glyph" />
                  {pairing.mainRisk}
                </span>
              </li>
              <li className="metric" data-tone="warning">
                <span className="metric__label">What gets damaged</span>
                <span className="metric__value">
                  <ToneIcon glyph="alert" className="metric__glyph" />
                  {pairing.damages}
                </span>
              </li>
              <li className="metric" data-tone="safe">
                <span className="metric__label">Instead</span>
                <span className="metric__value">
                  <ToneIcon glyph="check" className="metric__glyph" />
                  {pairing.alternative}
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

          {/* ---------------------------------------------------- BLOCK 3 */}
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
                  {pairing.conditionsOk.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>

              <div className="conditions__col" data-tone="danger">
                <p className="conditions__heading">
                  <ToneIcon glyph="stop" size={18} />
                  Never do
                </p>
                <ul className="conditions__list">
                  {pairing.conditionsNever.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* ---------------------------------------------------- BLOCK 4 */}
          <section className="section" aria-labelledby="why-heading">
            <div className="section__head measure">
              <h2 id="why-heading">Why those conditions exist</h2>
            </div>

            <ol className="mechanisms measure">
              {pairing.mechanisms.map((mechanism) => (
                <li className="mechanism" key={mechanism.title}>
                  <span className="mechanism__number" aria-hidden="true" />
                  <div>
                    <p className="mechanism__title">{mechanism.title}</p>
                    <div className="mechanism__body">
                      <p>{mechanism.body}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ol>

            {/* ------------------------------------------------- BLOCK 5 */}
            <div className="callout measure">
              <p className="callout__label">{pairing.calloutLabel}</p>
              {pairing.calloutBody.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </section>

          {/* ---------------------------------------------------- BLOCK 6 */}
          <section className="section measure" aria-labelledby="sources-heading">
            <div className="section__head">
              <h2 id="sources-heading">Sources</h2>
            </div>
            <ul className="conditions__list source-list">
              {pairing.sources.map((source) => (
                <li key={`${source.publisher}-${source.url}`}>
                  {source.publisher} &mdash;{' '}
                  <a href={source.url} rel="nofollow noopener" target="_blank">
                    {source.title}
                  </a>
                </li>
              ))}
            </ul>
            <p className="section__lead">
              Reviewed{' '}
              {pairing.reviewedAt.toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'long',
                year: 'numeric',
                timeZone: 'UTC',
              })}{' '}
              · {pairing.reviewScope}
            </p>
          </section>

          {/* ---------------------------------------------------- RELATED */}
          <section className="section" aria-labelledby="related-heading">
            <div className="section__head measure">
              <h2 id="related-heading">Related</h2>
            </div>
            <ul className="pair-list">
              <li>
                <Link className="pair-card" href={`/use/${pairing.subjectSlug}/`}>
                  <span className="pair-card__title">
                    Everything written about {pairing.subjectName.toLowerCase()}
                  </span>
                  {/* The targets that actually exist, never a list of promises. */}
                  <span className="pair-card__meta">
                    {PAIRINGS.filter((p) => p.subjectSlug === pairing.subjectSlug)
                      .map((p) => p.targetName)
                      .join(' · ')}
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

            <div className="measure search-tail">
              <ProblemSearch id="compat-page-search" placeholder="Type your problem…" />
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
