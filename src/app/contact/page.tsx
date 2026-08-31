import Link from 'next/link';
import type { Metadata } from 'next';

import { buildPageMetadata } from '@/lib/seo/metadata';
import { SITE_NAME } from '@/lib/site';

const EMAIL = 'karakoram2310@gmail.com';

export const metadata: Metadata = buildPageMetadata({
  seoTitle: `Contact | ${SITE_NAME.replace('?', '')}`.replace('  ', ' '),
  metaDescription:
    'How to reach Can I Ignore It — corrections to a verdict, a source that has moved, a topic worth covering, or anything else.',
  canonicalPath: '/contact/',
  indexable: true,
});

export default function ContactPage() {
  return (
    <div className="container">
      <main id="main" className="measure page-top prose">
        <h1>Contact</h1>
        <p className="section__lead">One address, read by a person.</p>

        <p>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </p>

        <h2>Corrections come first</h2>
        <p>
          If a verdict on this site is wrong, we would rather hear it from you than leave it up. That
          includes a judgement that reads as too relaxed for a situation that is genuinely dangerous, and a
          judgement that raises alarm about something that turns out to be fine. Both do damage.
        </p>
        <p>
          It helps if you can say which page, which part of it, and what you think the answer should be.
          Where you know of a source that settles it, send that too — the rules we follow for citations are
          in our <Link href="/sources/">sources policy</Link>.
        </p>

        <h2>Broken and moved sources</h2>
        <p>
          Every link here was checked before it was published, but agencies reorganise their sites and pages
          move. If a citation now leads somewhere unhelpful, tell us and we will chase down where it went.
        </p>

        <h2>Topics</h2>
        <p>
          If there is something you looked for here and did not find, that is useful to know. The site grows
          by covering decisions people are actually stuck on, and the gaps are easier to see from the outside.
        </p>

        <h2>What this address is not</h2>
        <p>
          It is not advice about your specific vehicle, home, pet or child. We cannot see the thing you are
          looking at, and a page that sorts a situation into likely categories is not the same as somebody
          qualified examining it. When something looks unsafe, treat it as unsafe and have it checked by
          someone who can be there.
        </p>
        <p>
          For anything urgent involving a person or an animal, contact a doctor, a veterinarian or your local
          emergency number rather than waiting on an email.
        </p>

        <h2>Privacy</h2>
        <p>
          If you email us we have your address and your message, and nothing else. What the site collects
          otherwise is set out in our <Link href="/privacy/">privacy policy</Link>.
        </p>
      </main>
    </div>
  );
}
