import Link from 'next/link';
import type { Metadata } from 'next';

import { ProblemSearch } from '@/components/ProblemSearch';
import { VerdictChip } from '@/components/problem/VerdictCard';
import { normalizeQuery, searchProblems } from '@/lib/repository/search';
import { SITE_NAME } from '@/lib/site';

/**
 * Search results, server-rendered.
 *
 * `noindex, follow`: a search-results page is not content and should not compete
 * with the problem pages it links to, but the crawler is welcome to follow those
 * links. This is one of the few places where noindex is the correct answer
 * rather than a compromise.
 */

export const metadata: Metadata = {
  title: `Search | ${SITE_NAME.replace('?', '')}`.replace('  ', ' '),
  description: 'Search the database of decisions.',
  robots: { index: false, follow: true },
};

// Results depend entirely on the query string, so there is nothing to cache.
export const dynamic = 'force-dynamic';

export default async function SearchPage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string }>;
}) {
  const { q } = await searchParams;
  const query = normalizeQuery(q);
  const results = query.length >= 2 ? await searchProblems(query) : [];
  const searched = query.length >= 2;

  return (
    <div className="container">
      <main id="main">
        <div className="measure page-top">
          <h1>Can I ignore something else?</h1>
          <p className="section__lead">Search the decisions we have published.</p>
          <div className="hero__search">
            <ProblemSearch id="search-page" defaultValue={query} large autoFocus={!searched} />
          </div>
        </div>

        <section className="section" aria-labelledby="results">
          <h2 className="sr-only" id="results">
            Results
          </h2>

          {!searched ? (
            <p className="empty-state measure">
              Type at least two characters. Try <strong>low tire pressure</strong>.
            </p>
          ) : results.length === 0 ? (
            <div className="empty-state measure">
              <p>
                Nothing published matches <strong>{query}</strong> yet.
              </p>
              <p>
                The database is new and grows one researched decision at a time, so a miss here usually means
                it has not been written yet rather than that it does not matter.{' '}
                <Link href="/cars/tires/">Browse tire problems</Link> or{' '}
                <Link href="/cars/">all car problems</Link>.
              </p>
            </div>
          ) : (
            <>
              <p className="section__lead measure">
                {results.length} {results.length === 1 ? 'result' : 'results'} for <strong>{query}</strong>
              </p>
              <ul className="problem-list">
                {results.map((result) => (
                  <li key={result.id}>
                    <Link className="problem-card" href={result.path}>
                      <span className="problem-card__top">
                        <span className="problem-card__title">{result.h1}</span>
                        <VerdictChip verdict={result.verdict} />
                      </span>
                      <span className="problem-card__answer">{result.shortAnswer}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </>
          )}
        </section>
      </main>
    </div>
  );
}
