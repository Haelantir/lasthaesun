import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';

import { Breadcrumbs, type Crumb } from '@/components/Breadcrumbs';
import { CompatChip } from '@/components/compat/CompatChip';
import { buildPageMetadata } from '@/lib/seo/metadata';
import { getPairingEntity } from '@/lib/repository/compat';
import type { PairingSummary } from '@/lib/repository/compat';

/**
 * The entity page: everything written about one thing, in both directions.
 *
 * A slug can appear on either side of a pairing — a microwave is something you
 * put foil in AND something you plug into an extension cord — so this page lists
 * both. That is the whole reason it is one page per entity rather than one per
 * role.
 *
 * Deliberately an INDEX and nothing more. The tempting version is a broad
 * compatibility table (foil against ovens, grills, freezers), but the site does
 * not publish a claim it has not sourced, and a table of eight rows is eight
 * unsourced claims unless eight pairings have been written.
 *
 * `indexable: false` until an entity holds enough to be worth ranking, matching
 * the hub rule the decision side already follows.
 */

/** An entity page earns a place in the index once it answers this many. */
const INDEXABLE_FROM = 3;

export const revalidate = 3600;
export const dynamicParams = true;

export function generateStaticParams(): { subject: string }[] {
  return [];
}

type RouteProps = { params: Promise<{ subject: string }> };

export async function generateMetadata({ params }: RouteProps): Promise<Metadata> {
  const { subject } = await params;
  const entity = await getPairingEntity(subject);
  if (!entity) return {};

  const total = entity.asSubject.length + entity.asTarget.length;

  return buildPageMetadata({
    seoTitle: `Where Can You Use ${entity.name}? | Can I Use It With`,
    metaDescription: `Every compatibility answer written for ${entity.name.toLowerCase()}, with the verdict for each.`,
    canonicalPath: `/use/${subject}/`,
    indexable: total >= INDEXABLE_FROM,
  });
}

export default async function EntityPage({ params }: RouteProps) {
  const { subject } = await params;
  const entity = await getPairingEntity(subject);
  if (!entity) notFound();

  const crumbs: Crumb[] = [
    { name: 'Home', path: '/' },
    { name: 'Can I Use It With…', path: '/use/' },
    { name: entity.name, path: `/use/${subject}/` },
  ];

  return (
    <div className="container">
      <Breadcrumbs crumbs={crumbs} />

      <main id="main" className="problem">
        <div className="measure">
          <p className="problem__eyebrow">{entity.kind}</p>
          <h1 className="problem__h1">{entity.name}</h1>
        </div>

        <div className="pairing">
          <span className="pairing__entity pairing__subject">
            <span className="pairing__kind">{entity.kind}</span>
            <span className="pairing__name">{entity.name}</span>
            <span className="pairing__note">{entity.note}</span>
          </span>
        </div>

        {entity.asSubject.length > 0 ? (
          <PairingSection
            id="where-it-goes"
            heading={`Where ${entity.name.toLowerCase()} can go`}
            rows={entity.asSubject}
            label={(row) => row.targetName}
          />
        ) : null}

        {entity.asTarget.length > 0 ? (
          <PairingSection
            id="what-goes-in-it"
            heading={`What goes with ${entity.name.toLowerCase()}`}
            rows={entity.asTarget}
            label={(row) => row.subjectName}
          />
        ) : null}
      </main>
    </div>
  );
}

function PairingSection({
  id,
  heading,
  rows,
  label,
}: {
  id: string;
  heading: string;
  rows: PairingSummary[];
  label: (row: PairingSummary) => string;
}) {
  return (
    <section className="section" aria-labelledby={id}>
      <div className="section__head measure">
        <h2 id={id}>{heading}</h2>
      </div>
      <ul className="problem-list">
        {rows.map((row) => (
          <li key={row.path}>
            <Link className="problem-card" href={row.path}>
              <span className="problem-card__top">
                <span className="problem-card__title">{label(row)}</span>
                <CompatChip verdict={row.verdict} />
              </span>
              <span className="problem-card__answer">{row.shortAnswer}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
