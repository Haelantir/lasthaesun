'use client';

import { useEffect } from 'react';

/**
 * Clean failure. The most likely cause in production is the database being
 * unreachable, and the honest response to that is to say the page cannot be
 * loaded right now — not to fall back to stale or invented content on a page
 * whose whole job is giving people a safety verdict.
 */
export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
  useEffect(() => {
    console.error('[page error]', error);
  }, [error]);

  return (
    <div className="container">
      <main id="main" className="measure page-top">
        <h1>This page could not be loaded</h1>
        <p className="section__lead">
          Something went wrong on our side, so we are not going to guess at an answer. Please try again.
        </p>
        <p className="hub-note">
          <button type="button" className="button" onClick={reset}>
            Try again
          </button>
        </p>
        {error.digest ? <p className="checker__fallback">Reference: {error.digest}</p> : null}
      </main>
    </div>
  );
}
