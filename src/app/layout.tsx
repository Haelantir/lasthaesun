import type { Metadata } from 'next';
import { Atkinson_Hyperlegible_Next } from 'next/font/google';
import Script from 'next/script';
import { Analytics } from '@vercel/analytics/next';
import { GoogleAnalytics } from '@next/third-parties/google';

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
  /* AdSense ownership check, the second of two signals — the loader script in
   * the body below is the first. Page metadata is merged field by field, and no
   * page sets `other`, so this reaches every route including the problem pages
   * that build their metadata in `generateMetadata`. */
  other: {
    'google-adsense-account': 'ca-pub-6323439373011689',
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
        <Analytics />
        {/* Only in production so local dev and preview traffic never lands in
            the real GA4 property. */}
        {process.env.NODE_ENV === 'production' ? <GoogleAnalytics gaId="G-WDL6BXBKC1" /> : null}
        {/* AdSense.
         *
         * `beforeInteractive` rather than the default, because this tag is what
         * Google reads to confirm the site is ours: the strategy puts it in the
         * server-rendered <head>, where a verifier finds it without having to
         * execute the page first. It is also NOT gated on NODE_ENV — the whole
         * job of this script is to be present, and an environment check is one
         * more way for it to be missing on the day it is looked for. */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6323439373011689"
          crossOrigin="anonymous"
          strategy="beforeInteractive"
        />
      </body>
    </html>
  );
}
