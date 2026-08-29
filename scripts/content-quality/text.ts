/**
 * Text measurement primitives.
 *
 * Deliberately simple and dependency-free: every number the gate reports has to
 * be reproducible by hand, otherwise a "your FAQ answers are long" verdict is
 * unarguable in the wrong direction.
 */

/** Words are whitespace-delimited runs containing at least one letter or digit. */
export function words(text: string | null | undefined): string[] {
  if (!text) return [];
  return text
    .split(/\s+/)
    .map((token) => token.trim())
    .filter((token) => /[\p{L}\p{N}]/u.test(token));
}

export function wordCount(text: string | null | undefined): number {
  return words(text).length;
}

export function charCount(text: string | null | undefined): number {
  return text ? text.trim().length : 0;
}

/**
 * Sentence splitter.
 *
 * A terminator ends a sentence only when followed by whitespace and a capital,
 * digit or quote — and not when it belongs to an abbreviation. Both guards are
 * needed: this corpus cites "U.S. FDA" and "U.S. DOT" constantly, and counting
 * those as sentence breaks would inflate every sentence-count metric on exactly
 * the pages that cite the most sources.
 */
const ABBREVIATIONS = 'Dr|Mr|Mrs|Ms|St|vs|etc|Inc|Ltd|Jr|Sr|No|Fig|approx|Approx|e\\.g|i\\.e';

export function sentences(text: string | null | undefined): string[] {
  if (!text) return [];
  const splitter = new RegExp(
    `(?<!\\b[A-Z]\\.)(?<!\\b(?:${ABBREVIATIONS})\\.)(?<=[.!?])\\s+(?=["'“(]?[A-Z0-9])`,
    'u',
  );
  return text
    .replace(/\s+/g, ' ')
    .split(splitter)
    .map((s) => s.trim())
    .filter((s) => s.length > 0 && /[\p{L}\p{N}]/u.test(s));
}

export function sentenceCount(text: string | null | undefined): number {
  return sentences(text).length;
}

export function mean(values: number[]): number {
  if (values.length === 0) return 0;
  return values.reduce((sum, v) => sum + v, 0) / values.length;
}

/**
 * Linear-interpolated percentile over a sorted copy of `values`.
 * `p` is 0..100.
 */
export function percentile(values: number[], p: number): number {
  if (values.length === 0) return 0;
  const sorted = [...values].sort((a, b) => a - b);
  if (sorted.length === 1) return sorted[0]!;
  const rank = (p / 100) * (sorted.length - 1);
  const low = Math.floor(rank);
  const high = Math.ceil(rank);
  const lowValue = sorted[low]!;
  if (low === high) return lowValue;
  const highValue = sorted[high]!;
  return lowValue + (highValue - lowValue) * (rank - low);
}

export interface RobustRange {
  /** Number of gold pages behind these numbers. */
  n: number;
  min: number;
  max: number;
  p10: number;
  p25: number;
  median: number;
  p75: number;
  p90: number;
  /** Tukey fences from the IQR — one odd page cannot move these much. */
  lowerFence: number;
  upperFence: number;
}

/**
 * Typical range plus outlier fences.
 *
 * p10..p90 is the "normal" band — outside it is a warning. The Tukey fences are
 * the hard bounds, so one unusual gold page widens what is tolerated rather
 * than defining it.
 *
 * The fences are then widened to at least the observed min/max. Several metrics
 * are near-constant across the corpus (almost every page has five consequence
 * stages), which collapses the IQR to zero and would make the one page with six
 * a hard failure — while the message next to it claims the value is "past
 * anything in the Gold Set". Clamping to the observed extremes makes the number
 * mean what the sentence says: a failure is a value the editor has never
 * shipped.
 */
export function robustRange(values: number[]): RobustRange {
  const q1 = percentile(values, 25);
  const q3 = percentile(values, 75);
  const iqr = q3 - q1;
  const min = values.length ? Math.min(...values) : 0;
  const max = values.length ? Math.max(...values) : 0;
  return {
    n: values.length,
    min,
    max,
    p10: percentile(values, 10),
    p25: q1,
    median: percentile(values, 50),
    p75: q3,
    p90: percentile(values, 90),
    lowerFence: Math.min(q1 - 1.5 * iqr, min),
    upperFence: Math.max(q3 + 1.5 * iqr, max),
  };
}

export function round(value: number, digits = 2): number {
  const factor = 10 ** digits;
  return Math.round(value * factor) / factor;
}

/** Lower-cased alphanumeric tokens, for similarity comparisons. */
export function normalizeTokens(text: string): string[] {
  return text
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')
    .split(/\s+/)
    .filter(Boolean);
}

/** Jaccard similarity over token sets. Cheap, and good enough as a first filter. */
export function jaccard(a: string[], b: string[]): number {
  if (a.length === 0 || b.length === 0) return 0;
  const setA = new Set(a);
  const setB = new Set(b);
  let intersection = 0;
  for (const token of setA) if (setB.has(token)) intersection += 1;
  const union = setA.size + setB.size - intersection;
  return union === 0 ? 0 : intersection / union;
}
