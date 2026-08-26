import type { Metadata } from 'next';

import { Footer } from '@/components/site/Footer';
import { Header } from '@/components/site/Header';
import { JsonLd, organizationJsonLd, websiteJsonLd } from '@/lib/seo/jsonld';
import { SITE_DESCRIPTION, SITE_NAME, SITE_TAGLINE, siteOrigin } from '@/lib/site';

import './globals.css';
import './problem.css';

/**
 * No webfont is loaded. The system UI stack renders instantly, has no layout
 * shift, costs zero requests and looks native on every platform — which beats
 * any font this site could load for the sake of personality.
 */
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
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
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
