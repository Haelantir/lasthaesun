import Link from 'next/link';
import type { Metadata } from 'next';

import { Breadcrumbs, type Crumb } from '@/components/Breadcrumbs';
import { CompatChip } from '@/components/compat/CompatChip';
import { buildPageMetadata } from '@/lib/seo/metadata';
import { getAllPairings, type PairingSummary } from '@/lib/repository/compat';

/**
 * Every pairing on one page, grouped by the thing on the right of the pair.
 *
 * Deliberately the same shape as /browse/: a heading, one line saying what the
 * list is, a jump nav, then one vertical run of groups. Nobody arrives here to
 * read about the section — they arrive to find whether their thing is answered
 * for their appliance, and the fastest way to answer that is a list they can
 * scroll. So the section explains itself in one sentence and then gets out of
 * the way.
 *
 * Grouped by target rather than by subject because that is the half a reader
 * already knows: they are standing at the dishwasher holding something. The
 * other direction exists on each subject's own dossier.
 */

const CRUMBS: Crumb[] = [
  { name: 'Home', path: '/' },
  { name: 'Can I Use It With…', path: '/use/' },
];

export const metadata: Metadata = buildPageMetadata({
  seoTitle: 'Can I Use It With… — What Goes With What',
  metaDescription:
    'Find out whether two everyday things go together — what you can put in it, use on it, plug into it, wash it with or store beside it.',
  canonicalPath: '/use/',
  indexable: false,
});

export const revalidate = 3600;

interface TargetGroup {
  slug: string;
  name: string;
  pairings: PairingSummary[];
}

/** Groups in the order their first pairing was authored, like the browse tree. */
function groupByTarget(all: PairingSummary[]): TargetGroup[] {
  const groups = new Map<string, TargetGroup>();

  for (const pairing of all) {
    const group = groups.get(pairing.targetSlug);
    if (group) group.pairings.push(pairing);
    else {
      groups.set(pairing.targetSlug, {
        slug: pairing.targetSlug,
        name: pairing.targetName,
        pairings: [pairing],
      });
    }
  }

  return [...groups.values()];
}

export default async function UseHubPage() {
  const all = await getAllPairings();
  const groups = groupByTarget(all);

  return (
    <div className="container">
      <Breadcrumbs crumbs={CRUMBS} />

      <main id="main" className="page-top">
        <div className="measure">
          <h1>Can I Use It With&hellip;</h1>
          <p className="section__lead">
            {all.length === 0
              ? 'Nothing is published yet.'
              : `All ${all.length} answers, grouped by what you are using it with.`}
          </p>
        </div>

        {groups.length > 1 ? (
          <nav className="browse-jump" aria-label="Jump to an appliance">
            {groups.map((group) => (
              <a className="browse-jump__link" key={group.slug} href={`#${group.slug}`}>
                {group.name} <span className="browse-jump__count">{group.pairings.length}</span>
              </a>
            ))}
          </nav>
        ) : null}

        {groups.map((group) => (
          <section className="section" key={group.slug} aria-labelledby={group.slug}>
            <div className="section__head measure">
              <h2 id={group.slug}>{group.name}</h2>
            </div>

            <ul className="problem-list">
              {group.pairings.map((pairing) => (
                <li key={pairing.path}>
                  <Link className="problem-card" href={pairing.path}>
                    <span className="problem-card__top">
                      <span className="problem-card__title">{pairing.subjectName}</span>
                      <CompatChip verdict={pairing.verdict} />
                    </span>
                    <span className="problem-card__answer">{pairing.shortAnswer}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </main>
    </div>
  );
}
