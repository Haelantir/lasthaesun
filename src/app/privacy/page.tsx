import Link from 'next/link';
import type { Metadata } from 'next';

import { buildPageMetadata } from '@/lib/seo/metadata';
import { SITE_NAME } from '@/lib/site';

export const metadata: Metadata = buildPageMetadata({
  seoTitle: `Privacy Policy | ${SITE_NAME.replace('?', '')}`.replace('  ', ' '),
  metaDescription:
    'What Can I Ignore It collects, what it does not, which third parties are involved, and how to opt out of personalised advertising.',
  canonicalPath: '/privacy/',
  indexable: true,
});

export default function PrivacyPolicyPage() {
  return (
    <div className="container">
      <main id="main" className="measure page-top prose">
        <h1>Privacy policy</h1>
        <p className="section__lead">
          What this site collects, what it does not, and who else is involved. Last updated 1 September 2026.
        </p>

        <h2>The short version</h2>
        <p>
          You do not need an account to read anything here, and there is nothing to sign up for. We do not
          ask for your name, your address or your payment details, because there is nothing on this site that
          would need them. What is collected is ordinary web analytics and, where advertising is shown, the
          cookies that advertising uses.
        </p>

        <h2>What we collect ourselves</h2>
        <p>
          Nothing directly. This site has no forms, no comments, no logins and no newsletter. If you email
          us, we have your email address and whatever you wrote in it, for as long as we keep the message.
        </p>

        <h2>Analytics</h2>
        <p>
          We use two analytics tools to see which pages are read and whether the site is working. Both report
          in aggregate; neither is used to build a profile of you, and we never try to identify individual
          readers.
        </p>
        <p>
          <strong>Vercel Analytics</strong> counts page views without cookies and without storing anything on
          your device.
        </p>
        <p>
          <strong>Google Analytics</strong> uses cookies and collects the page you viewed, roughly where in
          the world you are, your device and browser, and how you arrived. Google processes this data on our
          behalf. You can opt out of Google Analytics entirely with{' '}
          <a href="https://tools.google.com/dlpage/gaoptout" rel="nofollow noopener" target="_blank">
            Google&rsquo;s browser add-on
          </a>
          .
        </p>

        <h2>Advertising</h2>
        <p>
          This site is supported by advertising served through Google AdSense. Google, as a third-party
          vendor, uses cookies to serve ads on this site. Google&rsquo;s use of advertising cookies enables
          it and its partners to serve ads based on your visit to this site and other sites on the internet.
        </p>
        <p>
          You can opt out of personalised advertising in{' '}
          <a href="https://myadcenter.google.com/" rel="nofollow noopener" target="_blank">
            Google Ad Settings
          </a>
          , or opt out of a third-party vendor&rsquo;s use of cookies for personalised advertising at{' '}
          <a href="https://optout.aboutads.info/" rel="nofollow noopener" target="_blank">
            aboutads.info
          </a>
          . More detail on how Google uses data from sites that use its services is in{' '}
          <a
            href="https://policies.google.com/technologies/partner-sites"
            rel="nofollow noopener"
            target="_blank"
          >
            Google&rsquo;s own policy
          </a>
          .
        </p>

        <h2>Server logs</h2>
        <p>
          This site is hosted by Vercel, which keeps standard request logs — IP address, time, page requested,
          browser — for operational and security purposes. That is a normal part of serving a website and is
          not used for marketing.
        </p>

        <h2>Cookies</h2>
        <p>
          The site itself sets no cookies. The cookies you may receive come from Google Analytics and, where
          ads are shown, from Google and its advertising partners. You can block or delete cookies in your
          browser settings; nothing on this site stops working if you do.
        </p>

        <h2>Your rights</h2>
        <p>
          Depending on where you live — the EU and UK under the GDPR, California under the CCPA, and similar
          laws elsewhere — you have the right to ask what data is held about you, to have it corrected or
          deleted, and to object to it being processed. Since we hold nothing that identifies you beyond an
          email you chose to send us, most such requests are answered by the analytics and advertising
          opt-outs above. For anything else, email us and we will deal with it.
        </p>

        <h2>Children</h2>
        <p>
          This site is written for adults making decisions about their own property, vehicles, homes and
          families. It is not directed at children and we do not knowingly collect anything from them.
        </p>

        <h2>Changes</h2>
        <p>
          If what we collect changes, this page changes with it and the date at the top moves. There is no
          mailing list to notify, so the date is the record.
        </p>

        <h2>Contact</h2>
        <p>
          Questions about any of this go to <Link href="/contact/">our contact page</Link>.
        </p>
      </main>
    </div>
  );
}
