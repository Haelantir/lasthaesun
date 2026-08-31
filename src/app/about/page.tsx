import Link from 'next/link';
import type { Metadata } from 'next';

import { buildPageMetadata } from '@/lib/seo/metadata';
import { SITE_NAME, SITE_TAGLINE } from '@/lib/site';

export const metadata: Metadata = buildPageMetadata({
  seoTitle: `About | ${SITE_NAME.replace('?', '')}`.replace('  ', ' '),
  metaDescription:
    'Can I Ignore It gives you the verdict first: how urgent a problem is, what happens if you wait, and the signs that mean you should stop waiting.',
  canonicalPath: '/about/',
  indexable: true,
});

export default function AboutPage() {
  return (
    <div className="container">
      <main id="main" className="measure page-top prose">
        <h1>About {SITE_NAME}</h1>
        <p className="section__lead">{SITE_TAGLINE}</p>

        <p>
          A warning light comes on. Something starts leaking. Your dog eats something weird. Your baby
          starts doing something you have never seen before.
        </p>
        <p>You want to know one thing:</p>
        <p>
          <strong>Can I ignore it?</strong>
        </p>
        <p>That is what this site is for.</p>
        <p>
          Each page gives you a verdict first, then tells you how urgent the problem is, what can happen if
          you wait, what signs mean you should act and what to do next.
        </p>

        <h2>One problem, one page</h2>
        <p>We do not make separate articles for different versions of the same question.</p>
        <p>
          &ldquo;Can I drive with low tire pressure?&rdquo; and &ldquo;How long can I drive with low tire
          pressure?&rdquo; are the same problem, so they belong on the same page.
        </p>
        <p>A nail in the tire is a different problem, so it gets a separate page.</p>

        <h2>How we decide</h2>
        <p>
          We use sources that fit the subject, including government agencies, medical organizations,
          professional bodies and manufacturers.
        </p>
        <p>
          If the answer depends on the situation, we explain what changes it. If waiting could be dangerous,
          we say that clearly.
        </p>
        <p>
          You can read more in <Link href="/methodology/">how we decide</Link> and our{' '}
          <Link href="/sources/">sources policy</Link>.
        </p>

        <p>
          You should not have to read 1,500 words to find out whether something can wait.
        </p>
      </main>
    </div>
  );
}
