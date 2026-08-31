import Link from 'next/link';

import { SITE_NAME, SITE_TAGLINE } from '@/lib/site';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="site-footer__grid">
          <div>
            <h2>{SITE_NAME}</h2>
            <p>{SITE_TAGLINE}</p>
            <p>
              Contact: <a href="mailto:karakoram2310@gmail.com">karakoram2310@gmail.com</a>
            </p>
          </div>
          <div>
            <h2>About this site</h2>
            <ul>
              <li>
                <Link href="/about/">About</Link>
              </li>
              <li>
                <Link href="/methodology/">How we decide</Link>
              </li>
              <li>
                <Link href="/sources/">Sources policy</Link>
              </li>
              <li>
                <Link href="/privacy/">Privacy policy</Link>
              </li>
              <li>
                <Link href="/contact/">Contact</Link>
              </li>
            </ul>
          </div>
        </div>

        <p className="site-footer__note">
          Verdicts are general guidance to help you triage a situation, not an inspection of your vehicle,
          home or equipment. When something looks unsafe, treat it as unsafe and have it checked.
        </p>
      </div>
    </footer>
  );
}
