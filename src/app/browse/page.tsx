import Link from 'next/link';
import type { Metadata } from 'next';

import { VerdictChip } from '@/components/problem/VerdictCard';
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
 */

export const metadata: Metadata = buildPageMetadata({
  seoTitle: `Browse Every Decision | ${SITE_NAME.replace('?', '')}`.replace('  ', ' '),
  metaDescription:
    'Every question answered on Can I Ignore It, listed by category — cars, home, food and kitchen, and technology.',
  canonicalPath: '/browse/',
  indexable: true,
});

export const revalidate = 3600;

export default async function BrowsePage() {
  const tree = await getBrowseTree();
  const total = tree.reduce((sum, domain) => sum + domain.total, 0);

  return (
    <div className="container">
      <main id="main" className="page-top">
        <div className="measure">
          <h1>Browse everything</h1>
          <p className="section__lead">
            {total === 0
              ? 'Nothing is published yet.'
              : `All ${total} decisions, grouped by where they sit on the site.`}
          </p>
        </div>

        {tree.length > 1 ? (
          <nav className="browse-jump" aria-label="Jump to a category">
            {tree.map((domain) => (
              <a className="browse-jump__link" key={domain.domainId} href={`#${slugify(domain.name)}`}>
                {domain.name} <span className="browse-jump__count">{domain.total}</span>
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
