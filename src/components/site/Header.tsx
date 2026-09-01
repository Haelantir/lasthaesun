import Link from 'next/link';

import { SITE_NAME } from '@/lib/site';

/**
 * Compact by design. No mega-menu: the site is navigated by searching for a
 * problem, by drilling down from a hub, or from the browse page, and a header
 * full of categories would push the verdict below the fold on a phone for no
 * benefit.
 */
export function Header() {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        {/* The site answers two questions, so it carries two wordmarks. The
            second is not navigation — it is the other half of what this site is,
            and putting it in the nav beside "Browse" said the opposite. Its
            question mark is the accent blue rather than the warning orange, so
            the pair reads as siblings rather than as one long string. */}
        <div className="site-header__marks">
          <Link className="wordmark" href="/">
            <span className="wordmark__mark" aria-hidden="true">
              ?
            </span>
            {SITE_NAME}
          </Link>
          <Link className="wordmark wordmark--use" href="/use/">
            <span className="wordmark__mark" aria-hidden="true">
              ?
            </span>
            Can I Use It With&hellip;
          </Link>
        </div>
        <nav className="site-header__nav" aria-label="Main">
          <Link className="site-header__link" href="/browse/">
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
