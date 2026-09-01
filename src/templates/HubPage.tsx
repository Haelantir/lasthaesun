import Link from 'next/link';

import { Breadcrumbs, breadcrumbJsonLd, type Crumb } from '@/components/Breadcrumbs';
import { ProblemSearch } from '@/components/ProblemSearch';
import { CompatChip } from '@/components/compat/CompatChip';
import { VerdictChip } from '@/components/problem/VerdictCard';
import { JsonLd } from '@/lib/seo/jsonld';
import type { PairingSummary } from '@/lib/repository/compat';
import type { ProblemSummary } from '@/lib/repository/problems';
import { VERDICT_GROUP_HEADING, VERDICT_ORDER } from '@/lib/verdict';

/**
 * One template for all three hub levels (domain, object, system).
 *
 * A hub is not a folder listing. It groups its problems by verdict, most urgent
 * first, so the hub itself answers a question — "which of these actually
 * matter?" — rather than being a link dump waiting for content.
 *
 * Children with zero published problems are rendered as plain text, not links.
 * That is the difference between a site that shows its real size and a site that
 * ships fifty empty category pages.
 *
 * A hub carries both content types. Someone opening "Appliances" is asking what
 * this site knows about appliances, and answering with only the half phrased as
 * a decision would be an artefact of how the content is stored rather than an
 * editorial choice. The pairings keep their own section and their own verdict
 * scale rather than being mixed into the verdict groups — they answer a
 * different question, and flattening them would hide that.
 *
 * They sit BELOW the child hubs. A domain hub has no decisions of its own, so
 * putting them any higher buries the navigation under thirty-eight answers on
 * the one page whose job is to point somewhere else.
 */

export interface HubChild {
  name: string;
  path: string;
  shortDescription: string | null;
  problemCount: number;
}

export function HubPage({
  heading,
  intro,
  crumbs,
  childHubs,
  childLabel,
  planned,
  problems,
  pairings = [],
  showSearch = true,
}: {
  heading: string;
  intro: string | null;
  crumbs: Crumb[];
  childHubs: HubChild[];
  childLabel: string;
  planned: string[];
  problems: ProblemSummary[];
  /** Compatibility answers filed under this node. Empty on nodes that have none. */
  pairings?: PairingSummary[];
  showSearch?: boolean;
}) {
  const linkable = childHubs.filter((child) => child.problemCount > 0);
  const empty = childHubs.filter((child) => child.problemCount === 0).map((child) => child.name);
  const notYet = [...empty, ...planned];

  return (
    <>
      <JsonLd data={breadcrumbJsonLd(crumbs)} />

      <div className="container">
        <Breadcrumbs crumbs={crumbs} />

        <main id="main">
          <div className="measure">
            <h1>{heading}</h1>
            {intro ? <p className="section__lead">{intro}</p> : null}
          </div>

          {problems.length > 0 ? (
            <section className="section" aria-labelledby="by-verdict">
              <div className="section__head measure">
                <h2 id="by-verdict">Sorted by how urgent they actually are</h2>
              </div>
              <VerdictGroups problems={problems} />
            </section>
          ) : null}

          {linkable.length > 0 ? (
            <section className="section" aria-labelledby="browse">
              <div className="section__head measure">
                <h2 id="browse">{childLabel}</h2>
              </div>
              <ul className="hub-grid">
                {linkable.map((child) => (
                  <li key={child.path}>
                    <Link className="hub-tile" href={child.path}>
                      <span className="hub-tile__name">{child.name}</span>
                      {child.shortDescription ? (
                        <span className="hub-tile__meta">{child.shortDescription}</span>
                      ) : null}
                      <span className="hub-tile__meta">
                        {child.problemCount} {child.problemCount === 1 ? 'problem' : 'problems'}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </section>
          ) : null}

          {pairings.length > 0 ? (
            <section className="section" aria-labelledby="what-goes-with-what">
              <div className="section__head measure">
                <h2 id="what-goes-with-what">What goes with what</h2>
                <p className="section__lead">
                  Before anything goes wrong: whether these two things belong together.
                </p>
              </div>
              <PairingGroups pairings={pairings} />
            </section>
          ) : null}

          {notYet.length > 0 ? (
            <section className="section" aria-labelledby="planned">
              <div className="section__head measure">
                <h2 id="planned">Planned</h2>
                <p className="section__lead">
                  Named but not written yet. They are listed as text rather than links, because a link should
                  lead somewhere.
                </p>
              </div>
              <ul className="planned">
                {notYet.map((name) => (
                  <li key={name}>{name}</li>
                ))}
              </ul>
            </section>
          ) : null}

          {showSearch ? (
            <section className="section">
              <div className="search-block measure">
                <h2>Can I Ignore Something Else?</h2>
                <ProblemSearch id="hub-search" placeholder="Type your problem…" />
              </div>
            </section>
          ) : null}
        </main>
      </div>
    </>
  );
}

/** Grouped by the thing on the right of the pair, which is the half a reader
 *  already knows: they are standing at the dishwasher holding something. */
function PairingGroups({ pairings }: { pairings: PairingSummary[] }) {
  const groups = new Map<string, { name: string; rows: PairingSummary[] }>();
  for (const pairing of pairings) {
    const group = groups.get(pairing.targetSlug);
    if (group) group.rows.push(pairing);
    else groups.set(pairing.targetSlug, { name: pairing.targetName, rows: [pairing] });
  }

  return (
    <>
      {[...groups.values()].map((group) => (
        <div className="verdict-group" key={group.name}>
          <h3 className="verdict-group__heading">{group.name}</h3>
          <ul className="problem-list">
            {group.rows.map((pairing) => (
              <li key={pairing.id}>
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
        </div>
      ))}
    </>
  );
}

/** Groups problems by verdict, in descending order of urgency. */
function VerdictGroups({ problems }: { problems: ProblemSummary[] }) {
  return (
    <>
      {VERDICT_ORDER.map((verdict) => {
        const group = problems.filter((problem) => problem.verdict === verdict);
        if (group.length === 0) return null;

        return (
          <div className="verdict-group" key={verdict}>
            <h3 className="verdict-group__heading">{VERDICT_GROUP_HEADING[verdict]}</h3>
            <ul className="problem-list">
              {group.map((problem) => (
                <li key={problem.id}>
                  <Link className="problem-card" href={problem.path}>
                    <span className="problem-card__top">
                      <span className="problem-card__title">{problem.h1}</span>
                      <VerdictChip verdict={problem.verdict} />
                    </span>
                    {problem.shortAnswer ? (
                      <span className="problem-card__answer">{problem.shortAnswer}</span>
                    ) : null}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </>
  );
}
