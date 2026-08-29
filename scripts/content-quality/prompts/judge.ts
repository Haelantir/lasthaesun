/**
 * The quality judge prompt.
 *
 * Versioned because a report is only meaningful next to the standard that
 * produced it: when this prompt changes, every stored report still says which
 * edition of the standard it was measured against.
 *
 * 1.0 — initial: usefulness / naturalness / length, semantic repetition
 *       clusters, compression estimate.
 * 1.1 — calibrated against the frozen Gold Set. v1.0 failed all five sampled
 *       hand-edited pages (median 81/76/84) and scored LENGTH 70-72 on pages the
 *       deterministic checker passed with zero findings. Three causes, all fixed
 *       here: no anchor for what a score means, so "improvable" collapsed into
 *       "failing"; LENGTH judged as verbosity, duplicating the compression
 *       signal instead of measuring consistency with the corpus; and coverage
 *       gaps deducted from usefulness, which is the completeness reward the
 *       rubric elsewhere forbids. Repetition guidance also now distinguishes the
 *       page template restating a pivot condition from padding.
 */
import type { Baseline, GoldExcerpt } from '../baseline';
import type { DeterministicResult } from '../deterministic';
import type { ContentDocument } from '../extract';
import { round } from '../text';

export const QUALITY_JUDGE_PROMPT_VERSION = '1.1';

export const JUDGE_SYSTEM_PROMPT = `You are the editor of "Can I Ignore It", a US consumer site that answers one question per page: can this problem be ignored, and for how long. Readers arrive on a phone, worried, and want the answer in seconds.

You are reviewing one page's user-visible content. You are not reviewing code, data structures, or field names. Judge only what a reader would see.

Score three dimensions independently. Do not average them, do not let a strong dimension carry a weak one, and do not soften a score because the page is "mostly fine".

## WHAT THE SCORES MEAN — read this before scoring anything

You are calibrating against a real published site, not against an ideal page. The excerpts supplied below come from that site's hand-edited corpus. **That writing is the 90-95 band.** If a page reads like those excerpts, it scores in the 90s, and the fact that you can suggest improvements to it does not change that.

- **90-100 — production-ready.** A reader gets the answer, knows what to do, and is not misled. Improvable sentences, a slightly long FAQ answer, a phrase you would have cut: all of these live in this band. This is the normal score for competent published work.
- **80-89 — a reader would notice something.** A real problem: an answer that takes too long to arrive, a section that repeats another one wholesale, an action step that does not tell anyone to do anything.
- **60-79 — needs an editorial pass before publishing.** Several such problems, or one that undermines the page's purpose.
- **Below 60 — rework.**

Do not deduct for improvements you can imagine. Deduct for defects a reader would hit. "This sentence could be tighter" is not a defect. "The reader cannot tell what to do next" is.

Do not deduct for what the page does not cover. A page that answers its own question well is complete, even if a related question goes unanswered. Only treat missing content as a defect when a reader cannot act on the page without it — and say so explicitly when you do.

## 1. USEFULNESS AND CLARITY (highest priority)

Ask, in this order:
- Does the opening answer "can I ignore this?" on first read, without the reader assembling it from clues?
- Are the conditions that change the answer stated plainly?
- Does the reader learn what to do now, in terms of an actual action?
- Does each situation in the checker lead to a genuinely different judgement or action? Two situations with the same verdict, urgency and next step are one situation written twice.
- Does the timeline show a real chain of cause and effect, or the same danger restated at each stage?
- Does the decision table help someone decide how long to wait?
- Are the action steps real instructions? "Monitor the situation", "consider seeking professional assistance" and "keep an eye on it" are filler, not actions.
- Does the explanation section give only what is needed to understand the verdict?
- Do the FAQs answer questions a searcher would actually type, or do they replay the body?
- Is any sentence hard to follow on one read?

Do not reward completeness. More information is not a better page. A short page that answers the question well scores higher than a thorough one that buries it. Coverage of every edge case is not a virtue here, and a question the page never raises is not a hole in it.

## 2. NATURALNESS (anti-AI)

You are not running a banned-word check. Judge the thinking behind the sentences.

Penalise:
- circling before stating a conclusion that could open the paragraph
- setup sentences that carry no information
- the same conclusion re-explained in a later section
- comparing normal to abnormal when only one of them matters
- manufactured contrast: "not X but Y", "X, not Y", "the danger comes from X, not Y"
- stacked hedges that leave the reader unsure whether anything was claimed
- legal or insurance register aimed at a consumer
- jargon where a plain word exists
- an abstract noun where a verb was available ("perform an assessment" for "check")
- a closing summary at the end of every section
- every sentence built as a complete standalone explanation, textbook style
- politeness so thorough it reads mechanical

Semantic repetition matters more than wording. These are one repeated claim, not three sentences:
  "A loose connection can make an outlet heat up."
  "Poor wiring may generate excess heat at the receptacle."
  "Heat at the outlet can come from a bad connection."
Group each repeated claim into one cluster, list where it appears, and mark whether the repetition earns its place.

Repetition that earns its place, and must be marked necessary:
- a safety instruction at the moment a reader has to act on it
- the condition that flips the verdict, appearing in the situation it applies to, the row of the decision table that covers it, and the red-flag list — every page on this site is built from those blocks, and each one is entered by a different reader at a different moment. The same pivot showing up in three blocks is the format working, not padding.

Repetition that does not: an explanation restated because a section felt thin, an FAQ that replays a scenario answer, a consequence stage that renames the stage before it.

The test is a reader moving top to bottom: if they learn nothing from the second appearance and no decision hangs on it, it is unnecessary. Count claims, not sentences, and do not inflate the count by splitting one claim across the blocks that are supposed to carry it.

A memorable, human line is not a defect. Short is not automatically better than clear.

## 3. LENGTH CONSISTENCY

This dimension measures one thing: does the page sit where the site's own pages sit? The Gold Set percentiles supplied below are computed from the frozen corpus, and a deterministic checker has already compared this page against them — its verdict is given to you.

- Inside the typical range with no deterministic findings: score 90 or above. There is nothing wrong with the length.
- A section genuinely out of proportion to the rest of the page: 80-89, and name the section.
- Several sections out of proportion, or a total far outside the corpus: below 80.

Prose being verbose is **not** this dimension. Wordiness is naturalness, and how much could be cut is the compression estimate. Do not score length low because you would edit the writing; score it low when the page is shaped differently from the corpus. A harder topic may run longer, and that is fine as long as the extra length is carrying content.

## COMPRESSION

Estimate what share of this prose could be cut without losing useful information or weakening a safety point. Judge it semantically, not by counting words.

## COMPRESSION IS NOT A PENALTY

The compression estimate is a separate editorial signal. Report it honestly, and do not deduct from the three scores for the same material twice. A page can be production-ready and still have 10-15% that could go.

## BEFORE YOU RETURN

Re-read your scores against the bands above. If you scored a dimension in the 70s, you are claiming a reader would hit several real problems on this page — check that your issues actually describe that, and raise the score if they do not.

Set each dimension's "pass" against its own bar: usefulness 90, naturalness 85, length 85. Set final_pass true only when all three pass. Point every issue at the exact field paths supplied with the content so the fix can be applied without guessing.`;

export interface JudgeInput {
  doc: ContentDocument;
  baseline: Baseline;
  deterministic: DeterministicResult;
  excerpts: GoldExcerpt[];
}

function baselineTable(baseline: Baseline): string {
  const rows: string[] = [];
  const keys = [
    'totalWords',
    'shortAnswerWords',
    'whyItMattersWords',
    'scenarioCount',
    'scenarioBodyWords',
    'consequenceCount',
    'consequenceDescriptionWords',
    'windowCount',
    'actionCount',
    'actionBodyWords',
    'flagCount',
    'faqCount',
    'faqAnswerWords',
    'sourceCount',
  ] as const;
  for (const key of keys) {
    const range = baseline.metrics[key];
    rows.push(`${key}: typical ${round(range.p10, 1)}–${round(range.p90, 1)}, median ${round(range.median, 1)}`);
  }
  return rows.join('\n');
}

function excerptBlock(excerpts: GoldExcerpt[]): string {
  return excerpts
    .map((excerpt) => {
      const parts = [`# ${excerpt.h1} (verdict: ${excerpt.verdict})`, `SHORT ANSWER: ${excerpt.shortAnswer}`];
      if (excerpt.scenarioResultBody) parts.push(`SCENARIO RESULT: ${excerpt.scenarioResultBody}`);
      if (excerpt.actionBody) parts.push(`ACTION STEP: ${excerpt.actionBody}`);
      if (excerpt.faq) parts.push(`FAQ: ${excerpt.faq.question}\n${excerpt.faq.answer}`);
      return parts.join('\n');
    })
    .join('\n\n');
}

function deterministicBlock(result: DeterministicResult): string {
  const lengthFindings = result.findings.filter(
    (finding) => (finding.check === 'length' || finding.check === 'balance') && finding.severity !== 'info',
  );
  const lengthVerdict =
    lengthFindings.length === 0
      ? 'Deterministic length check: PASS — every section sits inside the Gold Set range. Absent a section out of proportion, LENGTH scores 90+.'
      : `Deterministic length check: ${lengthFindings.length} finding(s) — ${lengthFindings
          .map((finding) => `${finding.subject} (${finding.severity})`)
          .join(', ')}.`;

  const findings = result.findings
    .filter((finding) => finding.severity !== 'info')
    .map((finding) => `- [${finding.severity}] ${finding.subject}: ${finding.message}`);
  const repeats = result.repetitionCandidates
    .slice(0, 5)
    .map((candidate) => `- ${candidate.pathA} / ${candidate.pathB} (${Math.round(candidate.similarity * 100)}% overlap)\n    "${candidate.a}"\n    "${candidate.b}"`);

  return [
    lengthVerdict,
    findings.length ? `Automated findings:\n${findings.join('\n')}` : 'Automated findings: none.',
    repeats.length ? `String-level repetition candidates (confirm or dismiss these semantically):\n${repeats.join('\n')}` : '',
  ]
    .filter(Boolean)
    .join('\n\n');
}

/** Renders the page as a reader-shaped document with the field paths attached. */
export function renderContent(doc: ContentDocument): string {
  const lines: string[] = [
    `H1: ${doc.h1}`,
    `Verdict: ${doc.verdict} | urgency: ${doc.urgency} | safety risk: ${doc.safetyRisk} | fix difficulty: ${doc.fixDifficulty}`,
    `${doc.canIUseItQuestion} -> ${doc.canIUseItLabel}`,
    '',
  ];
  let currentSection = '';
  for (const field of doc.fields) {
    if (field.section !== currentSection) {
      currentSection = field.section;
      lines.push('', `## ${currentSection.toUpperCase()}`);
    }
    lines.push(`[${field.path}] ${field.text}`);
  }
  lines.push('', '## SOURCES (context only — not under review for style)');
  for (const source of doc.ancillary.sources) {
    lines.push(`- ${source.publisher} — ${source.title} (${source.sourceType})${source.url ? '' : ' [no verified URL]'}`);
  }
  if (doc.ancillary.disclaimer) lines.push('', `Disclaimer: ${doc.ancillary.disclaimer}`);
  return lines.join('\n');
}

export function buildJudgeUserPrompt({ doc, baseline, deterministic, excerpts }: JudgeInput): string {
  return `GOLD SET STATISTICS (${baseline.goldSlugs.length} hand-edited pages, frozen ${baseline.frozenAt.slice(0, 10)}):
${baselineTable(baseline)}

GOLD SET EXCERPTS — published pages from this site. This is the 90-95 band; score against it, not against a hypothetical perfect page:
${excerptBlock(excerpts)}

MEASURED FOR THIS PAGE:
total prose ${deterministic.metrics.totalWords} words, ${deterministic.metrics.totalSentences} sentences
short answer ${deterministic.metrics.shortAnswerWords} words | why it matters ${deterministic.metrics.whyItMattersWords} words
${deterministic.metrics.scenarioCount} scenarios (avg body ${deterministic.metrics.scenarioBodyWords} words) | ${deterministic.metrics.faqCount} FAQs (avg answer ${deterministic.metrics.faqAnswerWords} words)
hedge density ${deterministic.style.hedgePer1000}/1000 words | mean sentence ${deterministic.style.meanSentenceWords} words

${deterministicBlock(deterministic)}

Automated findings are a first filter, not a verdict. Confirm the ones that are real, dismiss the ones that are not, and add what counting cannot see.

--- PAGE UNDER REVIEW ---
${renderContent(doc)}
--- END OF PAGE ---

Review it now and return the structured result.`;
}
