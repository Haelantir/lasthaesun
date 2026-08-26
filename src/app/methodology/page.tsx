import type { Metadata } from 'next';

import { buildPageMetadata } from '@/lib/seo/metadata';
import { SITE_NAME } from '@/lib/site';

export const metadata: Metadata = buildPageMetadata({
  seoTitle: `How We Decide | ${SITE_NAME.replace('?', '')}`.replace('  ', ' '),
  metaDescription:
    'How Can I Ignore It reaches a verdict: the factors we weigh, the sources we use, and the limits of what a website can tell you.',
  canonicalPath: '/methodology/',
  indexable: true,
});

/**
 * A site that issues verdicts owes its readers an explanation of how it reaches
 * them — including where the method stops.
 */
export default function MethodologyPage() {
  return (
    <div className="container">
      <main id="main" className="measure page-top prose">
        <h1>How we decide</h1>
        <p className="section__lead">
          Every page here ends in a judgement, so it is fair to ask how that judgement is made.
        </p>

        <h2>What goes into a verdict</h2>
        <p>Each problem is assessed against five things:</p>
        <ul>
          <li>
            <strong>Urgency</strong> — how quickly the situation changes if nothing is done.
          </li>
          <li>
            <strong>Safety risk</strong> — what the realistic worst case is, and who it affects.
          </li>
          <li>
            <strong>Consequences of failure</strong> — whether ignoring it stays cheap or becomes expensive.
          </li>
          <li>
            <strong>Ease of remediation</strong> — a five-minute fix and a workshop job justify different
            advice.
          </li>
          <li>
            <strong>Authoritative guidance</strong> — what regulators, manufacturers and standards bodies
            actually say.
          </li>
        </ul>
        <p>
          Those combine into one of four verdicts: <strong>YES</strong>, <strong>YES, BUT</strong>,{' '}
          <strong>PROBABLY NOT</strong>, or <strong>DON&rsquo;T IGNORE</strong>. Then the situation checker
          adjusts the answer, because a warning light and a visibly flat tire are not the same question.
        </p>

        <h2>What this is not</h2>
        <p>
          This is not a measurement, and we are not going to dress it up as one. There is no scoring
          algorithm behind the verdict and no claim of scientific precision. It is structured editorial
          judgement, applied consistently and shown with its reasoning so you can disagree with it.
        </p>
        <p>
          We also cannot see your vehicle, your home or your appliance. Every page is triage — helping you
          work out whether this needs attention now, soon, or whenever — not an inspection.
        </p>

        <h2>Numbers we refuse to invent</h2>
        <p>
          The most common question on a page like this is &ldquo;how long can I leave it?&rdquo; and the most
          common answer elsewhere is a fabricated one. If no authoritative source supports a specific
          distance, duration or threshold, we say so instead of guessing. A confident wrong number on a
          safety page is worse than no number.
        </p>

        <h2>Review</h2>
        <p>
          Pages carry a review date and the scope of that review. Where a named expert has reviewed a page we
          will say who they are and what qualifies them. Where none has, we say nothing — we do not attach
          invented credentials to a page to make it look more authoritative than it is.
        </p>
      </main>
    </div>
  );
}
