import Link from 'next/link';

import { SITE_NAME } from '@/lib/site';

/**
 * Compact by design. No mega-menu: the site is navigated by searching for a
 * problem or by drilling down from a hub, and a header full of categories would
 * push the verdict below the fold on a phone for no benefit.
 */
export function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link className="wordmark" href="/">
          <span className="wordmark__mark" aria-hidden="true">
            ?
          </span>
          {SITE_NAME}
        </Link>
        <nav className="site-header__nav" aria-label="Main">
          <Link className="site-header__link" href="/cars/">
            Browse
          </Link>
          <Link className="site-header__link" href="/search/">
            Search
          </Link>
        </nav>
      </div>
    </header>
  );
}
