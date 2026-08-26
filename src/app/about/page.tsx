import Link from 'next/link';
import type { Metadata } from 'next';

import { buildPageMetadata } from '@/lib/seo/metadata';
import { SITE_NAME, SITE_TAGLINE } from '@/lib/site';

export const metadata: Metadata = buildPageMetadata({
  seoTitle: `About | ${SITE_NAME.replace('?', '')}`.replace('  ', ' '),
  metaDescription:
    'Can I Ignore It is a database of decisions, not articles. Find out what happens if you do nothing — and when doing nothing stops being an option.',
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
          Most advice about a warning light, a noise or an overdue maintenance job starts with three
          paragraphs of background and gets to the point somewhere near the bottom. But almost nobody
          searching has a background question. They have a decision to make, usually right now, often
          standing next to the thing.
        </p>
        <p>So this site answers first and explains second.</p>

        <h2>Decisions, not articles</h2>
        <p>
          The unit here is not a page of prose — it is a decision. Each one carries a verdict, an urgency, a
          safety risk, the chain of what happens if you keep ignoring it, the point at which you should stop,
          and the sources behind all of it. That is stored as structured data, which is why every page looks
          and behaves the same and why the answer is always in the same place.
        </p>
        <p>
          It also means the site grows by researching new problems rather than by rephrasing old ones.{' '}
          &ldquo;Can I drive with low tire pressure&rdquo; and &ldquo;how long can I drive with low tire
          pressure&rdquo; are the same problem, so they get the same page. A nail in the tire is a different
          problem, so it gets its own.
        </p>

        <h2>Where we are</h2>
        <p>
          Early. There is one fully researched decision published —{' '}
          <Link href="/cars/tires/low-tire-pressure/">Can I ignore low tire pressure?</Link> — and the rest
          are listed as planned rather than dressed up as finished. You will not find a category here that
          leads to an empty page.
        </p>

        <h2>How verdicts are reached</h2>
        <p>
          The factors and the limits are set out in <Link href="/methodology/">how we decide</Link>, and the
          rules we follow about citations are in our <Link href="/sources/">sources policy</Link>.
        </p>
      </main>
    </div>
  );
}
