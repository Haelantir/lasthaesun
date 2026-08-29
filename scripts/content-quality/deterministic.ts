/**
 * The deterministic half of the gate.
 *
 * Runs before any API call, for two reasons: it is free, and a page with an
 * empty Short Answer or twice the corpus word count does not need an editor's
 * opinion — it needs fixing first. Everything here is a comparison against the
 * frozen Gold Set, so the standard is the site's own corpus rather than a
 * number someone liked.
 */
import type { Baseline } from './baseline';
import type { ContentDocument, ContentMetrics, MetricKey, SectionName } from './extract';
import { SECTIONS, measure, sectionShares, sectionWordCounts } from './extract';
import type { RepetitionCandidate, StyleMetricKey, StyleStats } from './signals';
import { findRepetitionCandidates, measureStyle } from './signals';
import { round } from './text';

export type Severity = 'info' | 'warn' | 'fail';

export interface DeterministicFinding {
  check: 'length' | 'balance' | 'style' | 'repetition' | 'structure';
  severity: Severity;
  /** Metric or section the finding is about. */
  subject: string;
  message: string;
  observed?: number;
  typical?: { p10: number; median: number; p90: number };
  /** True when the page is too broken to be worth an editorial review. */
  blocking?: boolean;
}

export interface DeterministicResult {
  slug: string;
  metrics: ContentMetrics;
  style: StyleStats;
  shares: Record<SectionName, number>;
  sectionWords: Record<SectionName, number>;
  repetitionCandidates: RepetitionCandidate[];
  findings: DeterministicFinding[];
  /** Any blocking finding — the pipeline stops before spending on the judge. */
  blocked: boolean;
  counts: { fail: number; warn: number; info: number };
}

/** Which direction of deviation is worth reporting, per metric. */
const METRIC_DIRECTION: Partial<Record<MetricKey, 'both' | 'high' | 'low' | 'off'>> = {
  totalWords: 'both',
  totalChars: 'off',
  totalSentences: 'off',
  shortAnswerWords: 'both',
  shortAnswerSentences: 'high',
  whyItMattersWords: 'high',
  whyItMattersParagraphs: 'high',
  scenarioCount: 'both',
  scenarioBodyWords: 'high',
  scenarioActionWords: 'high',
  consequenceCount: 'both',
  consequenceDescriptionWords: 'high',
  windowCount: 'both',
  windowWhatToDoWords: 'high',
  actionCount: 'both',
  actionBodyWords: 'high',
  flagCount: 'both',
  faqCount: 'both',
  faqAnswerWords: 'high',
  resourceCount: 'off',
  sourceCount: 'low',
  relatedCount: 'off',
};

const METRIC_LABEL: Partial<Record<MetricKey, string>> = {
  totalWords: 'total visible prose',
  shortAnswerWords: 'short answer length',
  shortAnswerSentences: 'short answer sentence count',
  whyItMattersWords: 'Why It Matters length',
  whyItMattersParagraphs: 'Why It Matters paragraphs',
  scenarioCount: 'scenario count',
  scenarioBodyWords: 'average scenario body',
  scenarioActionWords: 'average scenario action',
  consequenceCount: 'consequence stages',
  consequenceDescriptionWords: 'average consequence description',
  windowCount: 'decision-table rows',
  windowWhatToDoWords: 'average "what to do" cell',
  actionCount: 'action steps',
  actionBodyWords: 'average action body',
  flagCount: 'red flags',
  faqCount: 'FAQ count',
  faqAnswerWords: 'average FAQ answer',
  sourceCount: 'source count',
};

/**
 * Absolute floors for the style metrics. Without them, a gold set that happens
 * never to use a construction would make one use of it a failure.
 */
const STYLE_FLOOR: Record<StyleMetricKey, number> = {
  aiPhrasePer1000: 4,
  contrastPer1000: 3,
  hedgePer1000: 25,
  abstractNounPer1000: 2,
  meanSentenceWords: 20,
  longSentenceShare: 0.12,
  repeatedNgramCount: 6,
  nearDuplicateCount: 3,
};

const STYLE_LABEL: Record<StyleMetricKey, string> = {
  aiPhrasePer1000: 'AI-tell phrase density',
  contrastPer1000: 'manufactured contrast density',
  hedgePer1000: 'hedge density',
  abstractNounPer1000: 'abstract-noun density',
  meanSentenceWords: 'mean sentence length',
  longSentenceShare: 'share of sentences over 30 words',
  repeatedNgramCount: 'repeated 5-word sequences',
  nearDuplicateCount: 'near-duplicate sentence pairs',
};

function typical(range: { p10: number; median: number; p90: number }) {
  return { p10: round(range.p10, 2), median: round(range.median, 2), p90: round(range.p90, 2) };
}

export function checkDeterministic(doc: ContentDocument, baseline: Baseline): DeterministicResult {
  const metrics = measure(doc);
  const style = measureStyle(doc);
  const shares = sectionShares(doc);
  const sectionWords = sectionWordCounts(doc);
  const repetitionCandidates = findRepetitionCandidates(doc);
  const findings: DeterministicFinding[] = [];

  // --- Structure: the page has to exist before it can be judged -------------
  const required: { subject: string; value: number; label: string }[] = [
    { subject: 'shortAnswer', value: metrics.shortAnswerWords, label: 'Short Answer' },
    { subject: 'whyItMatters', value: metrics.whyItMattersWords, label: 'Why It Matters' },
    { subject: 'scenarios', value: metrics.scenarioCount, label: 'situation checker' },
    { subject: 'consequences', value: metrics.consequenceCount, label: 'ignore timeline' },
    { subject: 'actions', value: metrics.actionCount, label: 'action steps' },
    { subject: 'flags', value: metrics.flagCount, label: 'red flags' },
    { subject: 'sources', value: metrics.sourceCount, label: 'sources' },
  ];
  for (const { subject, value, label } of required) {
    if (value === 0) {
      findings.push({
        check: 'structure',
        severity: 'fail',
        subject,
        message: `${label} is empty.`,
        blocking: true,
      });
    }
  }

  const totalRange = baseline.metrics.totalWords;
  if (metrics.totalWords > 0) {
    if (metrics.totalWords < totalRange.median * 0.5) {
      findings.push({
        check: 'structure',
        severity: 'fail',
        subject: 'totalWords',
        message: `Page is less than half the Gold Set median (${metrics.totalWords} vs ${round(totalRange.median)} words). Too thin to review.`,
        observed: metrics.totalWords,
        typical: typical(totalRange),
        blocking: true,
      });
    } else if (metrics.totalWords > totalRange.median * 2) {
      findings.push({
        check: 'structure',
        severity: 'fail',
        subject: 'totalWords',
        message: `Page is more than twice the Gold Set median (${metrics.totalWords} vs ${round(totalRange.median)} words). Cut before review.`,
        observed: metrics.totalWords,
        typical: typical(totalRange),
        blocking: true,
      });
    }
  }

  // --- Length consistency against the frozen corpus -------------------------
  for (const [key, direction] of Object.entries(METRIC_DIRECTION) as [MetricKey, string][]) {
    if (direction === 'off') continue;
    const range = baseline.metrics[key];
    const observed = metrics[key];
    if (observed === 0 && key !== 'totalWords') continue; // absence is a structure finding, not a length one

    const label = METRIC_LABEL[key] ?? key;
    const high = direction === 'both' || direction === 'high';
    const low = direction === 'both' || direction === 'low';

    if (high && observed > range.upperFence) {
      findings.push({
        check: 'length',
        severity: 'fail',
        subject: key,
        message: `${label} is well past anything in the Gold Set (${round(observed, 1)}; corpus p90 ${round(range.p90, 1)}).`,
        observed,
        typical: typical(range),
      });
    } else if (high && observed > range.p90) {
      findings.push({
        check: 'length',
        severity: 'warn',
        subject: key,
        message: `${label} is above the usual range (${round(observed, 1)}; corpus p10–p90 ${round(range.p10, 1)}–${round(range.p90, 1)}).`,
        observed,
        typical: typical(range),
      });
    } else if (low && observed < range.lowerFence) {
      findings.push({
        check: 'length',
        severity: 'fail',
        subject: key,
        message: `${label} is well below anything in the Gold Set (${round(observed, 1)}; corpus p10 ${round(range.p10, 1)}).`,
        observed,
        typical: typical(range),
      });
    } else if (low && observed < range.p10) {
      findings.push({
        check: 'length',
        severity: 'warn',
        subject: key,
        message: `${label} is below the usual range (${round(observed, 1)}; corpus p10–p90 ${round(range.p10, 1)}–${round(range.p90, 1)}).`,
        observed,
        typical: typical(range),
      });
    }
  }

  // --- Balance: no single section swallowing the page ----------------------
  for (const section of SECTIONS) {
    const range = baseline.sectionShares[section];
    const observed = shares[section];
    if (observed > range.upperFence && observed > range.p90 + 0.05) {
      findings.push({
        check: 'balance',
        severity: 'warn',
        subject: section,
        message: `${section} holds ${Math.round(observed * 100)}% of the page (Gold Set typically ${Math.round(range.p10 * 100)}–${Math.round(range.p90 * 100)}%).`,
        observed: round(observed, 3),
        typical: typical(range),
      });
    }
  }

  // --- Style signals -------------------------------------------------------
  for (const key of Object.keys(STYLE_FLOOR) as StyleMetricKey[]) {
    const range = baseline.style[key];
    const observed = style[key] as number;
    const floor = STYLE_FLOOR[key];
    const warnAt = Math.max(range.p90, floor);
    const failAt = Math.max(range.upperFence, floor * 1.5);
    if (observed > failAt) {
      findings.push({
        check: 'style',
        severity: 'fail',
        subject: key,
        message: `${STYLE_LABEL[key]} is far above the Gold Set (${round(observed, 2)}; corpus p90 ${round(range.p90, 2)}).`,
        observed,
        typical: typical(range),
      });
    } else if (observed > warnAt) {
      findings.push({
        check: 'style',
        severity: 'warn',
        subject: key,
        message: `${STYLE_LABEL[key]} is above the Gold Set (${round(observed, 2)}; corpus p90 ${round(range.p90, 2)}).`,
        observed,
        typical: typical(range),
      });
    }
  }

  // --- Repetition candidates ----------------------------------------------
  // Individual pairs are candidates for the judge, not verdicts: the gold pages
  // carry a few themselves, usually a red flag deliberately restated where the
  // reader has to act. Only a near-verbatim pair is worth a warning on its own;
  // the calibrated signal is `nearDuplicateCount` against the corpus, above.
  for (const candidate of repetitionCandidates.slice(0, 5)) {
    findings.push({
      check: 'repetition',
      severity: candidate.similarity >= 0.9 ? 'warn' : 'info',
      subject: `${candidate.pathA} ~ ${candidate.pathB}`,
      message: `Near-identical sentences (${Math.round(candidate.similarity * 100)}% token overlap).`,
      observed: candidate.similarity,
    });
  }

  const counts = {
    fail: findings.filter((f) => f.severity === 'fail').length,
    warn: findings.filter((f) => f.severity === 'warn').length,
    info: findings.filter((f) => f.severity === 'info').length,
  };

  return {
    slug: doc.slug,
    metrics,
    style,
    shares,
    sectionWords,
    repetitionCandidates,
    findings,
    blocked: findings.some((f) => f.blocking === true),
    counts,
  };
}
