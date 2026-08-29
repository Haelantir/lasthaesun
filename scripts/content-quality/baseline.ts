/**
 * The frozen Gold Set.
 *
 * `baseline.json` records the exact slugs that were the site's hand-edited
 * corpus at the moment the gate was built, plus the statistics derived from
 * them. Machine-generated pages are measured against that fixed set forever —
 * if the baseline recomputed itself over whatever is published today, every
 * generated page would quietly shift the definition of normal and the standard
 * would drift toward whatever the model happens to produce.
 *
 * Re-freezing is therefore a deliberate act: `npm run content:baseline -- --write --force`.
 */
import fs from 'node:fs';
import path from 'node:path';

import type { ProblemSeed } from '../../src/content/types';
import { BASELINE_PATH } from './config';
import type { MetricKey, SectionName } from './extract';
import { METRIC_KEYS, SECTIONS, extractDocument, measure, sectionShares } from './extract';
import type { StyleMetricKey } from './signals';
import { STYLE_METRIC_KEYS, measureStyle } from './signals';
import type { RobustRange } from './text';
import { robustRange } from './text';

export const BASELINE_VERSION = '1.0';

export interface GoldExcerpt {
  slug: string;
  h1: string;
  verdict: string;
  shortAnswer: string;
  scenarioResultBody?: string;
  actionBody?: string;
  faq?: { question: string; answer: string };
}

export interface Baseline {
  version: string;
  frozenAt: string;
  /** The immutable membership list. Order is the order they were published. */
  goldSlugs: string[];
  metrics: Record<MetricKey, RobustRange>;
  sectionShares: Record<SectionName, RobustRange>;
  style: Record<StyleMetricKey, RobustRange>;
  /** Short style references for the judge prompt — not whole pages. */
  excerpts: GoldExcerpt[];
}

function rangesFor<K extends string>(keys: readonly K[], rows: Record<K, number>[]): Record<K, RobustRange> {
  const out = {} as Record<K, RobustRange>;
  for (const key of keys) out[key] = robustRange(rows.map((row) => row[key]));
  return out;
}

/** Builds a baseline from the given seeds. The caller decides which seeds. */
export function computeBaseline(seeds: ProblemSeed[], frozenAt = new Date()): Baseline {
  if (seeds.length === 0) throw new Error('Cannot build a baseline from zero problems.');

  const docs = seeds.map(extractDocument);
  const metricRows = docs.map(measure) as unknown as Record<MetricKey, number>[];
  const shareRows = docs.map(sectionShares) as unknown as Record<SectionName, number>[];
  const styleRows = docs.map(measureStyle) as unknown as Record<StyleMetricKey, number>[];

  return {
    version: BASELINE_VERSION,
    frozenAt: frozenAt.toISOString(),
    goldSlugs: seeds.map((s) => s.slug),
    metrics: rangesFor(METRIC_KEYS, metricRows),
    sectionShares: rangesFor(SECTIONS, shareRows),
    style: rangesFor(STYLE_METRIC_KEYS, styleRows),
    excerpts: pickExcerpts(seeds),
  };
}

/**
 * Representative pages, chosen by how close each sits to the corpus median
 * length — the point is a typical voice, not the best or the longest page.
 */
export function pickExcerpts(seeds: ProblemSeed[], count = 3): GoldExcerpt[] {
  const scored = seeds.map((seed) => {
    const doc = extractDocument(seed);
    return { seed, doc, words: measure(doc).totalWords };
  });
  const sorted = [...scored].sort((a, b) => a.words - b.words);
  const median = sorted[Math.floor(sorted.length / 2)]?.words ?? 0;

  return [...scored]
    .sort((a, b) => Math.abs(a.words - median) - Math.abs(b.words - median))
    .slice(0, count)
    .map(({ seed }) => {
      const scenario = seed.scenarios?.[0];
      const action = seed.actions?.[0];
      const faq = seed.faqs?.[0];
      return {
        slug: seed.slug,
        h1: seed.h1,
        verdict: seed.verdict ?? '(unset)',
        shortAnswer: seed.shortAnswer ?? '',
        ...(scenario ? { scenarioResultBody: scenario.resultBody } : {}),
        ...(action ? { actionBody: action.body } : {}),
        ...(faq ? { faq: { question: faq.question, answer: faq.answer } } : {}),
      };
    });
}

export function baselineExists(file = BASELINE_PATH): boolean {
  return fs.existsSync(file);
}

export function saveBaseline(baseline: Baseline, file = BASELINE_PATH): void {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, `${JSON.stringify(baseline, null, 2)}\n`, 'utf8');
}

export function loadBaseline(file = BASELINE_PATH): Baseline {
  if (!fs.existsSync(file)) {
    throw new Error(
      `No frozen Gold Set at ${file}. Create it with: npm run content:baseline -- --write`,
    );
  }
  const parsed = JSON.parse(fs.readFileSync(file, 'utf8')) as Baseline;
  if (parsed.version !== BASELINE_VERSION) {
    throw new Error(
      `Baseline was written by version ${parsed.version}, this code expects ${BASELINE_VERSION}. Re-freeze it deliberately.`,
    );
  }
  return parsed;
}

export interface GoldDrift {
  missing: string[];
  unpublished: string[];
  newlyPublished: string[];
}

/**
 * Compares the frozen membership against what is published now. Drift is
 * reported, never applied: a page joining the corpus does not join the Gold Set.
 */
export function detectDrift(baseline: Baseline, allProblems: ProblemSeed[]): GoldDrift {
  const bySlug = new Map(allProblems.map((p) => [p.slug, p]));
  const gold = new Set(baseline.goldSlugs);
  return {
    missing: baseline.goldSlugs.filter((slug) => !bySlug.has(slug)),
    unpublished: baseline.goldSlugs.filter((slug) => {
      const problem = bySlug.get(slug);
      return problem !== undefined && problem.status !== 'published';
    }),
    newlyPublished: allProblems
      .filter((p) => p.status === 'published' && !gold.has(p.slug))
      .map((p) => p.slug),
  };
}
