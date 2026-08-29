/**
 * Turns a `ProblemSeed` into (a) the prose a reader actually sees and (b) the
 * numbers the gate reasons about.
 *
 * Two rules hold this file together:
 *   1. only user-visible strings are extracted — no slugs, no enum plumbing,
 *      no file comments. The judge reviews the page, not the record.
 *   2. every extracted string keeps a stable `path` ("faqs[3].answer"), which
 *      is the address the rewriter is allowed to patch. Nothing else is
 *      writable, so a style pass cannot restructure the page.
 */
import type { ProblemSeed } from '../../src/content/types';
import { charCount, mean, round, sentenceCount, wordCount } from './text';

export const SECTIONS = [
  'shortAnswer',
  'whyItMatters',
  'scenarios',
  'consequences',
  'windows',
  'actions',
  'flags',
  'faqs',
  'resources',
] as const;

export type SectionName = (typeof SECTIONS)[number];

export interface ContentField {
  /** Address the rewriter may patch, e.g. `scenarios[2].resultBody`. */
  path: string;
  section: SectionName;
  text: string;
}

export interface ContentDocument {
  slug: string;
  name: string;
  h1: string;
  canonicalPath: string;
  /** Decision fields. Shown to the judge as context; never rewritten. */
  verdict: string;
  urgency: string;
  safetyRisk: string;
  fixDifficulty: string;
  canIUseItQuestion: string;
  canIUseItLabel: string;
  redFlagsHeading: string;
  whyItMattersHeading: string;
  /** Every rewritable prose string, in reading order. */
  fields: ContentField[];
  /** Visible but out of scope for the style pass: citations and the disclaimer. */
  ancillary: {
    sources: { publisher: string; title: string; sourceType: string; url: string | null; notes?: string }[];
    related: { anchorText: string; relationshipType: string }[];
    reviewScope?: string;
    disclaimer?: string;
  };
}

export interface ContentMetrics {
  totalWords: number;
  totalChars: number;
  totalSentences: number;
  shortAnswerWords: number;
  shortAnswerSentences: number;
  whyItMattersWords: number;
  whyItMattersParagraphs: number;
  scenarioCount: number;
  scenarioBodyWords: number;
  scenarioActionWords: number;
  consequenceCount: number;
  consequenceDescriptionWords: number;
  windowCount: number;
  windowWhatToDoWords: number;
  actionCount: number;
  actionBodyWords: number;
  flagCount: number;
  faqCount: number;
  faqAnswerWords: number;
  resourceCount: number;
  sourceCount: number;
  relatedCount: number;
}

/** Metric keys compared against the gold baseline. */
export const METRIC_KEYS = [
  'totalWords',
  'totalChars',
  'totalSentences',
  'shortAnswerWords',
  'shortAnswerSentences',
  'whyItMattersWords',
  'whyItMattersParagraphs',
  'scenarioCount',
  'scenarioBodyWords',
  'scenarioActionWords',
  'consequenceCount',
  'consequenceDescriptionWords',
  'windowCount',
  'windowWhatToDoWords',
  'actionCount',
  'actionBodyWords',
  'flagCount',
  'faqCount',
  'faqAnswerWords',
  'resourceCount',
  'sourceCount',
  'relatedCount',
] as const satisfies readonly (keyof ContentMetrics)[];

export type MetricKey = (typeof METRIC_KEYS)[number];

function push(fields: ContentField[], section: SectionName, path: string, text: string | undefined): void {
  if (text && text.trim().length > 0) fields.push({ path, section, text });
}

/** Extracts the user-visible content of a problem. */
export function extractDocument(seed: ProblemSeed): ContentDocument {
  const fields: ContentField[] = [];

  push(fields, 'shortAnswer', 'shortAnswer', seed.shortAnswer);
  push(fields, 'whyItMatters', 'whyItMatters', seed.whyItMatters);

  (seed.scenarios ?? []).forEach((scenario, i) => {
    push(fields, 'scenarios', `scenarios[${i}].label`, scenario.label);
    push(fields, 'scenarios', `scenarios[${i}].shortDescription`, scenario.shortDescription);
    push(fields, 'scenarios', `scenarios[${i}].resultHeadline`, scenario.resultHeadline);
    push(fields, 'scenarios', `scenarios[${i}].resultBody`, scenario.resultBody);
    push(fields, 'scenarios', `scenarios[${i}].recommendedAction`, scenario.recommendedAction);
  });

  (seed.consequences ?? []).forEach((consequence, i) => {
    push(fields, 'consequences', `consequences[${i}].stageLabel`, consequence.stageLabel);
    push(fields, 'consequences', `consequences[${i}].title`, consequence.title);
    push(fields, 'consequences', `consequences[${i}].description`, consequence.description);
    push(fields, 'consequences', `consequences[${i}].chainLabel`, consequence.chainLabel);
  });

  (seed.windows ?? []).forEach((window, i) => {
    push(fields, 'windows', `windows[${i}].situation`, window.situation);
    push(fields, 'windows', `windows[${i}].ignoreAnswer`, window.ignoreAnswer);
    push(fields, 'windows', `windows[${i}].whatToDo`, window.whatToDo);
  });

  (seed.actions ?? []).forEach((action, i) => {
    push(fields, 'actions', `actions[${i}].title`, action.title);
    push(fields, 'actions', `actions[${i}].body`, action.body);
  });

  (seed.flags ?? []).forEach((flag, i) => {
    push(fields, 'flags', `flags[${i}].title`, flag.title);
    push(fields, 'flags', `flags[${i}].description`, flag.description);
  });

  (seed.faqs ?? []).forEach((faq, i) => {
    push(fields, 'faqs', `faqs[${i}].question`, faq.question);
    push(fields, 'faqs', `faqs[${i}].answer`, faq.answer);
  });

  (seed.resources ?? []).forEach((resource, i) => {
    push(fields, 'resources', `resources[${i}].title`, resource.title);
    push(fields, 'resources', `resources[${i}].description`, resource.description);
  });

  return {
    slug: seed.slug,
    name: seed.name,
    h1: seed.h1,
    canonicalPath: seed.canonicalPath,
    verdict: seed.verdict ?? '(unset)',
    urgency: seed.urgency ?? '(unset)',
    safetyRisk: seed.safetyRisk ?? '(unset)',
    fixDifficulty: seed.fixDifficulty ?? '(unset)',
    canIUseItQuestion: seed.canIUseItQuestion ?? 'Can I use it?',
    canIUseItLabel: seed.canIUseItLabel ?? '(unset)',
    redFlagsHeading: seed.redFlagsHeading ?? 'Stop and check if you notice:',
    whyItMattersHeading: seed.whyItMattersHeading ?? `Why Does ${seed.name} Matter?`,
    fields,
    ancillary: {
      sources: (seed.sources ?? []).map((s) => ({
        publisher: s.publisher,
        title: s.title,
        sourceType: s.sourceType,
        url: s.url,
        ...(s.notes ? { notes: s.notes } : {}),
      })),
      related: (seed.related ?? []).map((r) => ({
        anchorText: r.anchorText,
        relationshipType: r.relationshipType,
      })),
      ...(seed.reviewScope ? { reviewScope: seed.reviewScope } : {}),
      ...(seed.disclaimer ? { disclaimer: seed.disclaimer } : {}),
    },
  };
}

function fieldText(doc: ContentDocument, path: string): string {
  return doc.fields.find((f) => f.path === path)?.text ?? '';
}

/** Texts of one field across every item of one section, e.g. `faqs[*].answer`. */
function itemTexts(doc: ContentDocument, prefix: string, suffix: string): string[] {
  const pattern = new RegExp(`^${prefix}\\[\\d+\\]\\.${suffix}$`);
  return doc.fields.filter((f) => pattern.test(f.path)).map((f) => f.text);
}

function countItems(doc: ContentDocument, prefix: string): number {
  const indexes = new Set<string>();
  for (const field of doc.fields) {
    const match = field.path.match(new RegExp(`^${prefix}\\[(\\d+)\\]`));
    if (match?.[1]) indexes.add(match[1]);
  }
  return indexes.size;
}

/**
 * `totalWords` covers the same sections as the corpus table in CLAUDE.md, so
 * the two never disagree: citations, review scope and the disclaimer are
 * visible but excluded, because they are boilerplate the editor does not tune.
 */
export function measure(doc: ContentDocument): ContentMetrics {
  const allProse = doc.fields.map((f) => f.text);
  const shortAnswer = fieldText(doc, 'shortAnswer');
  const whyItMatters = fieldText(doc, 'whyItMatters');

  return {
    totalWords: allProse.reduce((sum, text) => sum + wordCount(text), 0),
    totalChars: allProse.reduce((sum, text) => sum + charCount(text), 0),
    totalSentences: allProse.reduce((sum, text) => sum + sentenceCount(text), 0),
    shortAnswerWords: wordCount(shortAnswer),
    shortAnswerSentences: sentenceCount(shortAnswer),
    whyItMattersWords: wordCount(whyItMatters),
    whyItMattersParagraphs: whyItMatters.split('\n\n').filter((p) => p.trim().length > 0).length,
    scenarioCount: countItems(doc, 'scenarios'),
    scenarioBodyWords: round(mean(itemTexts(doc, 'scenarios', 'resultBody').map(wordCount)), 1),
    scenarioActionWords: round(mean(itemTexts(doc, 'scenarios', 'recommendedAction').map(wordCount)), 1),
    consequenceCount: countItems(doc, 'consequences'),
    consequenceDescriptionWords: round(mean(itemTexts(doc, 'consequences', 'description').map(wordCount)), 1),
    windowCount: countItems(doc, 'windows'),
    windowWhatToDoWords: round(mean(itemTexts(doc, 'windows', 'whatToDo').map(wordCount)), 1),
    actionCount: countItems(doc, 'actions'),
    actionBodyWords: round(mean(itemTexts(doc, 'actions', 'body').map(wordCount)), 1),
    flagCount: countItems(doc, 'flags'),
    faqCount: countItems(doc, 'faqs'),
    faqAnswerWords: round(mean(itemTexts(doc, 'faqs', 'answer').map(wordCount)), 1),
    resourceCount: countItems(doc, 'resources'),
    sourceCount: doc.ancillary.sources.length,
    relatedCount: doc.ancillary.related.length,
  };
}

/** Share of total prose held by each section, 0..1. */
export function sectionShares(doc: ContentDocument): Record<SectionName, number> {
  const totals = Object.fromEntries(SECTIONS.map((s) => [s, 0])) as Record<SectionName, number>;
  let total = 0;
  for (const field of doc.fields) {
    const count = wordCount(field.text);
    totals[field.section] += count;
    total += count;
  }
  for (const section of SECTIONS) {
    totals[section] = total === 0 ? 0 : round(totals[section] / total, 4);
  }
  return totals;
}

/** Section word counts, used by reports and by the rewrite prompt. */
export function sectionWordCounts(doc: ContentDocument): Record<SectionName, number> {
  const totals = Object.fromEntries(SECTIONS.map((s) => [s, 0])) as Record<SectionName, number>;
  for (const field of doc.fields) totals[field.section] += wordCount(field.text);
  return totals;
}
