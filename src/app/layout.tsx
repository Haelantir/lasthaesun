import type { Metadata } from 'next';
import { Atkinson_Hyperlegible_Next } from 'next/font/google';

import { Footer } from '@/components/site/Footer';
import { Header } from '@/components/site/Header';
import { JsonLd, organizationJsonLd, websiteJsonLd } from '@/lib/seo/jsonld';
import { SITE_DESCRIPTION, SITE_NAME, SITE_TAGLINE, siteOrigin } from '@/lib/site';

import './globals.css';
import './problem.css';

/**
 * The one deliberate exception to "no webfont": Atkinson Hyperlegible Next is
 * designed by the Braille Institute specifically for readers with low vision,
 * which is directly on-mission for a safety-verdict site. `next/font/google`
 * self-hosts it at build time (no request to fonts.googleapis.com, no
 * render-blocking round trip) and `weight: 'variable'` pulls the whole
 * 200–800 range as one file, so the site's five-step weight scale in
 * `globals.css` (`--fw-regular` … `--fw-extrabold`) renders as true distinct
 * instances instead of the browser faking bold.
 */
const atkinsonHyperlegibleNext = Atkinson_Hyperlegible_Next({
  subsets: ['latin'],
  weight: 'variable',
  variable: '--font-atkinson',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(siteOrigin()),
  title: {
    default: `${SITE_NAME} — ${SITE_TAGLINE}`,
    // Per-page titles come from the database and are used verbatim.
    template: '%s',
  },
  description: SITE_DESCRIPTION,
  applicationName: SITE_NAME,
  formatDetection: { telephone: false },
  verification: {
    google: 'mg3GemRDrca-591iTKs2AhumwynLOX7HbLfirr11C3o',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={atkinsonHyperlegibleNext.variable}>
      <body>
        <JsonLd data={[websiteJsonLd(), organizationJsonLd()]} />
        <div className="page">
          <a className="skip-link" href="#main">
            Skip to content
          </a>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
