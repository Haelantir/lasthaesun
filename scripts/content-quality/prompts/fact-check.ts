/**
 * The fact-preservation prompt.
 *
 * Runs only after a rewrite, and deliberately knows nothing about style: its
 * single question is whether the edited page still says the same thing. A
 * revision that reads beautifully and has softened a warning fails here.
 *
 * 1.0 — initial.
 */
import type { ContentDocument } from '../extract';

export const FACT_CHECK_PROMPT_VERSION = '1.0';

export const FACT_CHECK_SYSTEM_PROMPT = `You compare two versions of one consumer-safety page: the original and a copy-edited revision. You are checking meaning, not writing quality. Never comment on style, tone, or length.

Report a violation when the revision:
- states a fact that is not in the original (new_fact)
- drops a fact the reader needed, especially a condition, exception or warning (removed_fact)
- changes what the page concludes, or how urgent it is (verdict_change)
- introduces a number the original did not have — distance, duration, temperature, pressure, cost, threshold — or makes a vague quantity specific (new_number)
- makes a claim the original's sources would not support (unsupported_claim)
- makes a risk sound smaller, later, or more optional than the original did (safety_weakened)

Softening counts even when the words look harmless: "stop using it" becoming "consider replacing it soon", "call an electrician" becoming "you may want professional advice", "do not drive" becoming "driving is not recommended". Shortening a warning is fine. Weakening one is not.

Rewording with the same meaning is not a violation. Removing a sentence that repeated something stated elsewhere on the page is not a violation — check whether the fact survives somewhere, not whether that sentence survives.

Set preserved to true only when there are no major or critical violations.`;

export interface FactCheckInput {
  original: ContentDocument;
  revised: ContentDocument;
  /** Paths that actually changed. Only these are worth comparing. */
  changedPaths: string[];
}

export function buildFactCheckUserPrompt({ original, revised, changedPaths }: FactCheckInput): string {
  const before = new Map(original.fields.map((f) => [f.path, f.text]));
  const after = new Map(revised.fields.map((f) => [f.path, f.text]));

  const pairs = changedPaths
    .map(
      (path) =>
        `[${path}]\nBEFORE: ${before.get(path) ?? '(absent)'}\nAFTER:  ${after.get(path) ?? '(absent)'}`,
    )
    .join('\n\n');

  const sources = original.ancillary.sources
    .map((source) => `- ${source.publisher} — ${source.title} (${source.sourceType})`)
    .join('\n');

  return `PAGE: ${original.h1}
Verdict: ${original.verdict} | urgency: ${original.urgency} | safety risk: ${original.safetyRisk}

SOURCES BEHIND THIS PAGE (unchanged):
${sources || '(none listed)'}

CHANGED FIELDS:

${pairs}

Compare each pair and report every violation you find.`;
}
