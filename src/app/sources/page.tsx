import type { Metadata } from 'next';

import { buildPageMetadata } from '@/lib/seo/metadata';
import { SITE_NAME } from '@/lib/site';

export const metadata: Metadata = buildPageMetadata({
  seoTitle: `Sources Policy | ${SITE_NAME.replace('?', '')}`.replace('  ', ' '),
  metaDescription:
    'The rules Can I Ignore It follows when citing sources: what we cite, what we never invent, and what we do when no authoritative answer exists.',
  canonicalPath: '/sources/',
  indexable: true,
});

export default function SourcesPolicyPage() {
  return (
    <div className="container">
      <main id="main" className="measure page-top prose">
        <h1>Sources policy</h1>
        <p className="section__lead">
          Safety guidance is only worth as much as what it is based on. These are the rules we hold ourselves
          to.
        </p>

        <h2>What we cite</h2>
        <p>
          In order of preference: regulators and government agencies; the regulations themselves; the
          manufacturer of the specific thing you own; recognised standards bodies; then established industry
          and academic sources. For automotive topics that usually means NHTSA, the Code of Federal
          Regulations, the U.S. Department of Energy, and your vehicle&rsquo;s own documentation.
        </p>

        <h2>We never invent a URL</h2>
        <p>
          Every link on this site was opened and checked before it was published. When a source is real but
          has no single public address — your vehicle&rsquo;s tire placard, for instance, which differs per
          car — it is listed without a link and marked as such. A plausible-looking URL that goes nowhere is
          worse than no URL at all.
        </p>

        <h2>We never invent a number</h2>
        <p>
          No fabricated safe distances, safe durations, or thresholds. If an authoritative source gives a
          figure, we use it and say where it came from. If none does, the page says there is no honest number
          and explains what to judge instead.
        </p>

        <h2>We never invent a reviewer</h2>
        <p>
          Pages show when they were last reviewed and what that review covered. They do not carry the name of
          a technician, doctor or engineer who did not review them. If that changes, the credential will be
          real and checkable.
        </p>

        <h2>Corrections</h2>
        <p>
          Content is reviewed on a schedule and re-checked whenever a cited source changes. Where a page has
          been corrected in a way that changes its verdict, the review date moves with it.
        </p>
      </main>
    </div>
  );
}
