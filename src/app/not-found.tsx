import Link from 'next/link';

import { ProblemSearch } from '@/components/ProblemSearch';

/**
 * A genuine 404 — Next serves this with a 404 status, so an unpublished or
 * nonexistent problem never returns a soft 200 that a crawler would index.
 */
export default function NotFound() {
  return (
    <div className="container">
      <main id="main" className="measure page-top">
        <h1>We haven&rsquo;t decided this one yet</h1>
        <p className="section__lead">
          There is no page at this address. Either it has not been written yet, or the link was wrong.
        </p>

        <div className="search-block">
          <h2>Try searching instead</h2>
          <ProblemSearch id="notfound-search" />
        </div>

        <p className="hub-note">
          Or browse <Link href="/cars/tires/">tire problems</Link>,{' '}
          <Link href="/cars/">car problems</Link>, or start from the{' '}
          <Link href="/">home page</Link>.
        </p>
      </main>
    </div>
  );
}
