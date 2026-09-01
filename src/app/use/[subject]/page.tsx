import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

import { Breadcrumbs, type Crumb } from '@/components/Breadcrumbs';
import { compatPresentation } from '@/lib/compat';
import { buildPageMetadata } from '@/lib/seo/metadata';
import { PAIRINGS, pairingPath, type Pairing } from '@/content/compat';

/**
 * The entity dossier: everything written about one subject, in one place.
 *
 * Deliberately an INDEX and nothing more. The tempting version of this page is
 * a broad compatibility table — foil against ovens, grills, freezers — but the
 * site does not publish a claim it has not sourced, and a table of eight rows
 * is eight unsourced claims unless eight pairings have been written. So the
 * page lists what exists and says nothing else, the same way the taxonomy hubs
 * refuse to fake scale (docs/content-architecture.md §5).
 *
 * It is `indexable: false` until a subject holds enough pairings to be worth
 * ranking, matching the hub rule the decision side already follows.
 */

const SUBJECTS = [...new Map(PAIRINGS.map((p) => [p.subjectSlug, p])).values()];

export function generateStaticParams() {
  return SUBJECTS.map((pairing) => ({ subject: pairing.subjectSlug }));
}

export const dynamicParams = false;

function subjectInfo(slug: string): Pairing | undefined {
  return SUBJECTS.find((pairing) => pairing.subjectSlug === slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ subject: string }>;
}): Promise<Metadata> {
  const { subject } = await params;
  const info = subjectInfo(subject);
  if (!info) return {};

  return buildPageMetadata({
    seoTitle: `Where Can You Use ${info.subjectName}? | Can I Use It With`,
    metaDescription: `Every compatibility answer written so far for ${info.subjectName.toLowerCase()}, with the verdict for each.`,
    canonicalPath: `/use/${subject}/`,
    indexable: false,
  });
}

export default async function SubjectDossierPage({
  params,
}: {
  params: Promise<{ subject: string }>;
}) {
  const { subject } = await params;
  const info = subjectInfo(subject);
  if (!info) notFound();

  const written = PAIRINGS.filter((pairing) => pairing.subjectSlug === subject);

  const crumbs: Crumb[] = [
    { name: 'Home', path: '/' },
    { name: 'Can I Use It With…', path: '/use/' },
    { name: info.subjectName, path: `/use/${subject}/` },
  ];

  return (
    <div className="container">
      <Breadcrumbs crumbs={crumbs} />

      <main id="main" className="problem">
        <div className="measure">
          <p className="problem__eyebrow">{info.subjectKind} dossier</p>
          <h1 className="problem__h1">Where Can I Use {info.subjectName}?</h1>
        </div>

        <div className="pairing">
          <span className="pairing__entity pairing__subject">
            <span className="pairing__kind">{info.subjectKind}</span>
            <span className="pairing__name">{info.subjectName}</span>
            <span className="pairing__note">{info.subjectNote}</span>
          </span>
        </div>

        <section className="section" aria-labelledby="written-heading">
          <div className="section__head measure">
            <h2 id="written-heading">Answers written so far</h2>
            <p className="section__lead">
              {written.length === 1
                ? 'One pairing. More appear here as they are written.'
                : `${written.length} pairings. More appear here as they are written.`}
            </p>
          </div>

          <ul className="pair-list">
            {written.map((pairing) => (
              <li key={pairingPath(pairing)}>
                <Link className="pair-card" href={pairingPath(pairing)}>
                  <span className="pair-card__title">{pairing.h1}</span>
                  <span className="pair-card__meta">
                    {compatPresentation(pairing.verdict).label} · {pairing.eyebrow}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}
