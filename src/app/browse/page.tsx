import Link from 'next/link';
import type { Metadata } from 'next';

import { CompatChip } from '@/components/compat/CompatChip';
import { VerdictChip } from '@/components/problem/VerdictCard';
import { getPairingsWithDomain } from '@/lib/repository/compat';
import { getBrowseTree } from '@/lib/repository/problems';
import { buildPageMetadata } from '@/lib/seo/metadata';
import { SITE_NAME } from '@/lib/site';

/**
 * Every published decision on one page, in taxonomy order.
 *
 * The hubs answer "which of these actually matter?" by grouping on verdict.
 * This page answers the other question — "what is on this site?" — so it stays
 * in taxonomy order and does not re-sort anything. One vertical run of
 * categories, each with its problems under it, no pagination and no tiles to
 * click through. If you can see the whole catalogue by scrolling, you should.
 *
 * "Everything" means both content types. A domain's compatibility answers sit
 * under its decisions, in their own block: they answer a different question on
 * a different verdict scale, and merging the two lists would say they were the
 * same kind of thing.
 */

export const metadata: Metadata = buildPageMetadata({
  seoTitle: `Browse Everything | ${SITE_NAME.replace('?', '')}`.replace('  ', ' '),
  metaDescription:
    'Every question answered on this site, listed by category — what you can ignore, and what goes with what.',
  canonicalPath: '/browse/',
  indexable: true,
});

export const revalidate = 3600;

export default async function BrowsePage() {
  const [tree, pairings] = await Promise.all([getBrowseTree(), getPairingsWithDomain()]);
  const problemTotal = tree.reduce((sum, domain) => sum + domain.total, 0);
  const total = problemTotal + pairings.length;

  const pairingsByDomain = new Map<number, typeof pairings>();
  for (const pairing of pairings) {
    if (pairing.domainId === null) continue;
    const list = pairingsByDomain.get(pairing.domainId);
    if (list) list.push(pairing);
    else pairingsByDomain.set(pairing.domainId, [pairing]);
  }

  return (
    <div className="container">
      <main id="main" className="page-top">
        <div className="measure">
          <h1>Browse everything</h1>
          <p className="section__lead">
            {total === 0
              ? 'Nothing is published yet.'
              : `All ${total} answers, grouped by where they sit on the site.`}
          </p>
        </div>

        {tree.length > 1 ? (
          <nav className="browse-jump" aria-label="Jump to a category">
            {tree.map((domain) => (
              <a className="browse-jump__link" key={domain.domainId} href={`#${slugify(domain.name)}`}>
                {domain.name}{' '}
                <span className="browse-jump__count">
                  {domain.total + (pairingsByDomain.get(domain.domainId)?.length ?? 0)}
                </span>
              </a>
            ))}
          </nav>
        ) : null}

        {tree.map((domain) => (
          <section className="section" key={domain.domainId} aria-labelledby={slugify(domain.name)}>
            <div className="section__head measure">
              <h2 id={slugify(domain.name)}>
                <Link href={domain.path}>{domain.name}</Link>
              </h2>
              {domain.shortDescription ? <p className="section__lead">{domain.shortDescription}</p> : null}
            </div>

            {domain.categories.map((category) => (
              <div className="browse-category" key={category.systemId}>
                <h3 className="browse-category__heading">
                  <Link href={category.objectPath}>{category.objectName}</Link>
                  <span aria-hidden="true"> › </span>
                  <Link href={category.systemPath}>{category.systemName}</Link>
                </h3>
                <ul className="problem-list">
                  {category.problems.map((problem) => (
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
            ))}

            {(pairingsByDomain.get(domain.domainId)?.length ?? 0) > 0 ? (
              <div className="browse-category">
                <h3 className="browse-category__heading">What goes with what</h3>
                <ul className="problem-list">
                  {pairingsByDomain.get(domain.domainId)!.map((pairing) => (
                    <li key={pairing.id}>
                      <Link className="problem-card" href={pairing.path}>
                        <span className="problem-card__top">
                          <span className="problem-card__title">{pairing.h1}</span>
                          <CompatChip verdict={pairing.verdict} />
                        </span>
                        <span className="problem-card__answer">{pairing.shortAnswer}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}
          </section>
        ))}

        {total === 0 ? (
          <section className="section measure">
            <p className="empty-state">
              No decisions are published yet. Run <code>npm run db:seed</code> to load the content records.
            </p>
          </section>
        ) : null}
      </main>
    </div>
  );
}

/** Stable anchor ids from a domain name, e.g. "Food & Kitchen" -> "food-kitchen". */
function slugify(name: string): string {
  return name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
}
