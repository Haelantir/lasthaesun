import { Breadcrumbs, breadcrumbJsonLd } from '@/components/Breadcrumbs';
import { ProblemSearch } from '@/components/ProblemSearch';
import { ActionSteps } from '@/components/problem/ActionSteps';
import { CommonQuestions } from '@/components/problem/CommonQuestions';
import { IgnoreDecisionTable } from '@/components/problem/IgnoreDecisionTable';
import { IgnoreTimeline } from '@/components/problem/IgnoreTimeline';
import { RedFlagPanel } from '@/components/problem/RedFlagPanel';
import { RelatedProblems } from '@/components/problem/RelatedProblems';
import { SituationChecker } from '@/components/problem/SituationChecker';
import { SourceList } from '@/components/problem/SourceList';
import { VerdictCard } from '@/components/problem/VerdictCard';
import { JsonLd, problemWebPageJsonLd } from '@/lib/seo/jsonld';
import type { ProblemPageData } from '@/lib/repository/problems';

/**
 * THE problem page template. One file, every decision on the site.
 *
 * The block order below is fixed and intentional — it is the product, not a
 * layout preference:
 *
 *   1  heading + breadcrumb        7  useful right now
 *   2  verdict                     8  stop ignoring it if...
 *   3  check my situation          9  why it matters
 *   4  what happens if you ignore  10 common questions
 *   5  how long can I ignore it   11  sources + review
 *   6  what should I do now       12  related + search
 *
 * The answer comes first and the explanation comes ninth. Do not reorder this
 * into a conventional article (intro → explanation → advice → FAQ); a reader who
 * searched "can I drive on this" gets their answer in the first screen, and that
 * is the whole differentiator.
 *
 * Nothing here is specific to tires. Every string comes from the database.
 */
export function ProblemPage({ data }: { data: ProblemPageData }) {
  const { problem, breadcrumbs, system, objectCategory } = data;

  return (
    <>
      <JsonLd
        data={[
          breadcrumbJsonLd(breadcrumbs),
          problemWebPageJsonLd({
            name: problem.h1,
            description: problem.metaDescription,
            canonicalPath: problem.canonicalPath,
            lastReviewedAt: problem.lastReviewedAt,
            citations: data.citations,
          }),
        ]}
      />

      <div className="container">
        {/* ---------------------------------------------------- BLOCK 1 */}
        <Breadcrumbs crumbs={breadcrumbs} />

        <main id="main" className="problem">
          <div className="measure">
            {problem.eyebrow ? <p className="problem__eyebrow">{problem.eyebrow}</p> : null}
            {/* The H1 is the brand question; the <title> is the search phrasing.
                Different strings, both stored, neither derived from the other. */}
            <h1 className="problem__h1">{problem.h1}</h1>
          </div>

          {/* ---------------------------------------------------- BLOCK 2 */}
          <VerdictCard
            verdict={problem.verdict}
            shortAnswer={problem.shortAnswer}
            metrics={{
              canIUseItQuestion: problem.canIUseItQuestion,
              canIUseItLabel: problem.canIUseItLabel,
              urgency: problem.urgency,
              safetyRisk: problem.safetyRisk,
              fixDifficulty: problem.fixDifficulty,
            }}
            checkerHref="#how-bad"
          />

          {/* ---------------------------------------------------- BLOCK 3 */}
          {data.scenarios.length > 0 ? (
            <section className="section" aria-labelledby="how-bad-heading">
              {/* The anchor sits on the section so the CTA lands above the
                  heading rather than scrolling it under the sticky header. */}
              <div className="section__head measure" id="how-bad">
                <h2 id="how-bad-heading">How bad is it?</h2>
                <p className="section__lead">Choose the closest match.</p>
              </div>
              <SituationChecker
                scenarios={data.scenarios}
                defaultVerdict={problem.verdict}
                problemSlug={problem.slug}
              />
            </section>
          ) : null}

          {/* ---------------------------------------------------- BLOCK 4 */}
          {data.consequences.length > 0 ? (
            <section className="section" aria-labelledby="what-happens">
              <div className="section__head measure">
                <h2 id="what-happens">What Happens If You Ignore {problem.name}?</h2>
              </div>
              <IgnoreTimeline steps={data.consequences} />
            </section>
          ) : null}

          {/* ---------------------------------------------------- BLOCK 5 */}
          {data.windows.length > 0 ? (
            <section className="section" aria-labelledby="how-long-heading">
              <div className="section__head measure" id="how-long">
                <h2 id="how-long-heading">How Long Can I Ignore It?</h2>
              </div>
              <IgnoreDecisionTable
                rows={data.windows}
                caption={`Situation by situation — ${problem.name.toLowerCase()}.`}
              />
            </section>
          ) : null}

          {/* ---------------------------------------------------- BLOCK 6 */}
          {data.actions.length > 0 ? (
            <section className="section measure" aria-labelledby="do-now">
              <div className="section__head">
                <h2 id="do-now">What Should I Do Now?</h2>
              </div>
              {/* `destinationHref` is resolved in the repository and is null
                  unless the destination problem is actually published. */}
              <ActionSteps steps={data.actions} />
            </section>
          ) : null}

          {/* ---------------------------------------------------- BLOCK 7 */}
          {data.resources.length > 0 ? (
            <section className="section" aria-labelledby="useful-now">
              <div className="section__head measure">
                <h2 id="useful-now">Useful Right Now</h2>
                <p className="section__lead">What actually helps with this?</p>
              </div>
              <div className="ad-slot">Coming Soon...</div>
            </section>
          ) : null}

          {/* ---------------------------------------------------- BLOCK 8 */}
          {data.flags.length > 0 ? (
            <section className="section">
              <RedFlagPanel
                heading={problem.redFlagsHeading ?? `Stop and check if you notice:`}
                flags={data.flags}
              />
            </section>
          ) : null}

          {/* ---------------------------------------------------- BLOCK 9 */}
          <section className="section measure" aria-labelledby="why">
            <div className="section__head">
              <h2 id="why">{problem.whyItMattersHeading ?? `Why Does ${problem.name} Matter?`}</h2>
            </div>
            <div className="prose">
              {problem.whyItMatters.split('\n\n').map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </section>

          {/* --------------------------------------------------- BLOCK 10 */}
          {data.questions.length > 0 ? (
            <section className="section measure" aria-labelledby="questions">
              <div className="section__head">
                <h2 id="questions">Common Questions</h2>
              </div>
              <CommonQuestions questions={data.questions} />
            </section>
          ) : null}

          {/* --------------------------------------------------- BLOCK 11 */}
          <section className="section measure" aria-labelledby="sources">
            <div className="section__head">
              <h2 id="sources">Sources</h2>
            </div>
            <SourceList
              sources={data.citations}
              lastReviewedAt={problem.lastReviewedAt}
              reviewScope={problem.reviewScope}
              disclaimer={problem.disclaimer}
            />
          </section>

          {/* --------------------------------------------------- BLOCK 12 */}
          <section className="section" aria-labelledby="related">
            <RelatedProblems
              heading={`Other ${system.label} Problems You Might Be Ignoring`}
              items={data.related}
              upLinks={[
                { label: `All ${system.label} Problems`, href: system.path },
                { label: `${objectCategory.label} Problems`, href: objectCategory.path },
              ]}
            />

            <div className="search-block measure">
              <h2>Can I Ignore Something Else?</h2>
              <ProblemSearch id="problem-page-search" placeholder="Type your problem…" />
            </div>
          </section>
        </main>
      </div>
    </>
  );
}
