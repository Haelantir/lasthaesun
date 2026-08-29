/**
 * Central configuration for the content quality gate.
 *
 * Nothing about the Anthropic account lives in source: the key comes from the
 * environment only, and every model id is overridable so a cheap model can be
 * swapped in for the mechanical stages without touching call sites.
 */
import path from 'node:path';
import { fileURLToPath } from 'node:url';

/** scripts/content-quality/ */
export const MODULE_DIR = path.dirname(fileURLToPath(import.meta.url));
/** Repository root. */
export const REPO_ROOT = path.resolve(MODULE_DIR, '..', '..');

export const BASELINE_PATH = path.join(MODULE_DIR, 'baseline.json');
export const REPORT_DIR = path.join(REPO_ROOT, 'reports', 'content-quality');

/**
 * Model ids are read from the environment so the judge and the rewriter can be
 * pointed at different tiers. The defaults are the highest-quality option,
 * because a cheap judge that waves content through is worse than no judge.
 */
export const MODELS = {
  judge: process.env.CONTENT_JUDGE_MODEL ?? 'claude-opus-5',
  rewrite: process.env.CONTENT_REWRITE_MODEL ?? 'claude-opus-5',
  factCheck: process.env.CONTENT_FACT_CHECK_MODEL ?? process.env.CONTENT_JUDGE_MODEL ?? 'claude-opus-5',
} as const;

export type Stage = keyof typeof MODELS;

/** `output_config.effort` per stage. */
export const EFFORT: Record<Stage, 'low' | 'medium' | 'high' | 'xhigh' | 'max'> = {
  judge: (process.env.CONTENT_JUDGE_EFFORT as 'high' | undefined) ?? 'high',
  rewrite: (process.env.CONTENT_REWRITE_EFFORT as 'high' | undefined) ?? 'high',
  factCheck: (process.env.CONTENT_FACT_CHECK_EFFORT as 'high' | undefined) ?? 'high',
};

export const MAX_TOKENS: Record<Stage, number> = {
  judge: 16000,
  rewrite: 16000,
  factCheck: 8000,
};

/**
 * Score gates. Each dimension must clear its own threshold — an article does
 * not average its way past a usefulness failure.
 *
 * Calibrated 2026-08-29 against five representative Gold Set pages under judge
 * prompt v1.1 (see CALIBRATION.md). Measured medians were 90 / 87 / 86, so the
 * bars sit at or just under the corpus median: new content has to match the
 * site's own pages, not clear an invented ideal.
 *
 * Length is the loosest of the three on purpose. The hard bound on length is the
 * deterministic comparison against the frozen percentiles, which is a
 * measurement; the judge's length score is a second opinion on proportion, and
 * it still drifts toward scoring verbosity.
 */
export const THRESHOLDS = {
  usefulness: Number(process.env.CONTENT_MIN_USEFULNESS ?? 90),
  naturalness: Number(process.env.CONTENT_MIN_NATURALNESS ?? 85),
  length: Number(process.env.CONTENT_MIN_LENGTH ?? 80),
} as const;

/**
 * The compression estimate is an editorial signal, not a measurement — the same
 * page scores it differently run to run. It is always reported and blocks only
 * when explicitly switched on. The reference figure is the Gold Set's own
 * measured range (10-14%), so "worse than the corpus" means something.
 */
export const COMPRESSION = {
  reportOnly: process.env.CONTENT_COMPRESSION_ENFORCE !== 'true',
  maxRemovablePercent: Number(process.env.CONTENT_MAX_REMOVABLE_PERCENT ?? 15),
} as const;

/** Rewrite cycles after the first judge run. */
export const MAX_REWRITE_CYCLES = Number(process.env.CONTENT_MAX_REWRITE_CYCLES ?? 2);

/** How many gold excerpts to ship as style reference. Kept small on purpose. */
export const GOLD_EXCERPT_COUNT = Number(process.env.CONTENT_GOLD_EXCERPTS ?? 2);

/**
 * USD per million tokens, used only to put an approximate figure on a report.
 * Unknown models report token counts and omit the cost.
 */
export const PRICING: Record<string, { input: number; output: number }> = {
  'claude-fable-5': { input: 10, output: 50 },
  'claude-opus-5': { input: 5, output: 25 },
  'claude-opus-4-8': { input: 5, output: 25 },
  'claude-opus-4-7': { input: 5, output: 25 },
  'claude-opus-4-6': { input: 5, output: 25 },
  'claude-sonnet-5': { input: 2, output: 10 },
  'claude-sonnet-4-6': { input: 3, output: 15 },
  'claude-haiku-4-5': { input: 1, output: 5 },
};

export class MissingApiKeyError extends Error {
  constructor() {
    super(
      'ANTHROPIC_API_KEY is not set. Add it to .env.local (it is gitignored) or export it, ' +
        'then re-run. The deterministic checks run without it; the Claude review stages do not.',
    );
    this.name = 'MissingApiKeyError';
  }
}

export function requireApiKey(): string {
  const key = process.env.ANTHROPIC_API_KEY?.trim();
  if (!key) throw new MissingApiKeyError();
  return key;
}
