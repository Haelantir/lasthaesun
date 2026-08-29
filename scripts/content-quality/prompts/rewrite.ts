/**
 * The rewrite prompt.
 *
 * A rewrite here is a copy-edit with a scalpel: it receives only the fields the
 * judge faulted and may return only replacements for those fields. It cannot
 * add a fact, move a section, or touch a passage that passed — which is what
 * keeps a style pass from quietly becoming a content rewrite.
 *
 * 1.0 — initial.
 */
import type { ContentDocument } from '../extract';
import type { JudgeResponse } from '../schemas';

export const REWRITE_PROMPT_VERSION = '1.0';

export const REWRITE_SYSTEM_PROMPT = `You are the copy editor for "Can I Ignore It", a US consumer site. You are given specific fields from one page that failed editorial review, with the reason each failed. You return replacements for those fields and nothing else.

Hard rules — a violation makes the revision unusable:
- Add no new facts. If it is not in the text you were given, it does not go in.
- Change no source, and add no citation.
- Do not change the verdict, the urgency, or what the page tells the reader to do.
- Never weaken a safety point. If a warning is blunt, keep it blunt. Trimming words must not trim the meaning of a risk.
- Invent no number: no distance, duration, temperature, pressure, cost or threshold, and never convert a vague statement into a specific one.
- Keep the structure. One field in, one field out. Do not merge fields, split them, or move content between them.
- Leave passages that were not flagged alone.
- Delete no information the reader needs. Cutting is for repetition and filler, not for content.

What to do:
- Cut sentences that repeat something the reader already read.
- Put the conclusion first when a sentence circles before reaching it.
- Remove hedges that do not change the meaning. Keep the ones that are honest.
- Replace jargon and abstract nouns with plain words. "Check" beats "perform an assessment".
- Delete closing summaries that restate the section.
- Break up sentences too long to follow on one read.
- Keep the site's voice: direct, calm, written for someone reading fast on a phone.

Write American English. Return the full new value for each field you change — not a diff, not a fragment. If a flagged field is already right, leave it out of the revisions and record it under left_alone with the reason.`;

export interface RewriteInput {
  doc: ContentDocument;
  judgement: JudgeResponse;
  /** Paths the judge faulted, in page order. */
  targetPaths: string[];
}

/**
 * Collects the paths the judge pointed at. Issues with no path are attached to
 * every field of the section they name, because a section-level fault has to be
 * actionable somewhere.
 */
export function collectTargetPaths(doc: ContentDocument, judgement: JudgeResponse): string[] {
  const known = new Set(doc.fields.map((f) => f.path));
  const targets = new Set<string>();

  const issues = [...judgement.usefulness.issues, ...judgement.naturalness.issues, ...judgement.length.issues];
  for (const issue of issues) {
    let matched = false;
    for (const path of issue.paths) {
      if (known.has(path)) {
        targets.add(path);
        matched = true;
      }
    }
    if (!matched && issue.section !== 'overall') {
      for (const field of doc.fields) {
        if (field.section === issue.section) targets.add(field.path);
      }
    }
  }

  for (const cluster of judgement.naturalness.repetition_clusters) {
    if (cluster.necessary) continue;
    for (const path of cluster.paths) if (known.has(path)) targets.add(path);
  }

  return doc.fields.filter((f) => targets.has(f.path)).map((f) => f.path);
}

export function buildRewriteUserPrompt({ doc, judgement, targetPaths }: RewriteInput): string {
  const byPath = new Map(doc.fields.map((f) => [f.path, f]));
  const issues = [
    ...judgement.usefulness.issues.map((i) => ({ ...i, dimension: 'usefulness' })),
    ...judgement.naturalness.issues.map((i) => ({ ...i, dimension: 'naturalness' })),
    ...judgement.length.issues.map((i) => ({ ...i, dimension: 'length' })),
  ];

  const issueBlock = issues
    .map(
      (issue) =>
        `- [${issue.dimension}/${issue.severity}] ${issue.section}${issue.paths.length ? ` (${issue.paths.join(', ')})` : ''}\n  problem: ${issue.issue}\n  fix: ${issue.suggested_fix}`,
    )
    .join('\n');

  const clusterBlock = judgement.naturalness.repetition_clusters
    .filter((cluster) => !cluster.necessary)
    .map((cluster) => `- repeated claim: ${cluster.claim}\n  appears in: ${cluster.paths.join(', ') || cluster.sections.join(', ')}\n  keep it in one place; remove the rest.`)
    .join('\n');

  const fieldBlock = targetPaths
    .map((path) => `[${path}]\n${byPath.get(path)?.text ?? ''}`)
    .join('\n\n');

  return `PAGE: ${doc.h1}
Verdict: ${doc.verdict} (urgency ${doc.urgency}, safety risk ${doc.safetyRisk}). These do not change.

SCORES: usefulness ${judgement.usefulness.score}, naturalness ${judgement.naturalness.score}, length ${judgement.length.score}.

ISSUES TO FIX:
${issueBlock || '(none reported at issue level)'}

${clusterBlock ? `UNNECESSARY REPETITION:\n${clusterBlock}\n` : ''}
FIELDS YOU MAY EDIT — return a replacement for each one you change, keyed by the exact path:

${fieldBlock}

Everything else on the page passed review and is not shown. Do not reference it, do not restate it, and do not assume anything about it beyond what is written above.`;
}
