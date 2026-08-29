/**
 * Orchestration: deterministic check -> Claude judge -> targeted rewrite ->
 * re-judge -> fact preservation.
 *
 * The order is a cost decision as much as an editorial one. Counting is free,
 * so it runs first and can stop a broken page before a token is spent. The
 * judge sees only user-visible prose plus baseline statistics — never the
 * repository, never the gold corpus in full. The rewriter sees only the fields
 * that failed.
 *
 * One rule outranks the rest: this pipeline fails closed. A timeout, a refusal,
 * a malformed response or a fact-check violation all end as a non-pass. Nothing
 * gets published because a review could not be completed.
 */
import type { ProblemSeed } from '../../src/content/types';
import type { Usage } from './anthropic';
import { totalCost } from './anthropic';
import type { Baseline } from './baseline';
import { MAX_REWRITE_CYCLES, MODELS, THRESHOLDS } from './config';
import type { DeterministicResult } from './deterministic';
import { checkDeterministic } from './deterministic';
import { extractDocument } from './extract';
import type { FactCheckResult } from './fact-check';
import { factCheck } from './fact-check';
import type { Judgement } from './judge';
import { judge } from './judge';
import { FACT_CHECK_PROMPT_VERSION } from './prompts/fact-check';
import { QUALITY_JUDGE_PROMPT_VERSION } from './prompts/judge';
import { REWRITE_PROMPT_VERSION } from './prompts/rewrite';
import type { AppliedRevision, RewriteResult } from './rewrite';
import { rewrite } from './rewrite';

export type Outcome =
  /** Every gate cleared. */
  | 'PASS'
  /** Structurally broken — stopped before the editorial review. */
  | 'BLOCKED'
  /** Reviewed and failed; no rewrite was attempted. */
  | 'FAIL'
  /** Rewritten up to the cycle limit and still failing. */
  | 'FAILED_REVIEW'
  /** The rewrite changed meaning — the revision is discarded. */
  | 'FACT_CHECK_FAILED'
  /** The review could not be completed. Never treated as a pass. */
  | 'ERROR';

export interface CycleRecord {
  cycle: number;
  deterministic: DeterministicResult;
  judge: Judgement | null;
}

export interface RewriteRecord {
  cycle: number;
  promptVersion: string;
  applied: AppliedRevision[];
  rejected: { path: string; reason: string }[];
  leftAlone: { path: string; reason: string }[];
}

export interface QualityReport {
  slug: string;
  h1: string;
  canonicalPath: string;
  generatedAt: string;
  mode: 'check' | 'fix';
  isGoldSet: boolean;
  models: { judge: string; rewrite: string; factCheck: string };
  promptVersions: { judge: string; rewrite: string; factCheck: string };
  thresholds: typeof THRESHOLDS;
  baseline: { frozenAt: string; goldSize: number };
  cycles: CycleRecord[];
  rewrites: RewriteRecord[];
  factCheck: FactCheckResult | null;
  final: Outcome;
  /** One line per reason the page is not publishable. */
  blockers: string[];
  usage: { calls: Usage[]; inputTokens: number; outputTokens: number; costUsd: number | null };
  /** Present when a rewrite produced usable text. */
  revised: { seed: ProblemSeed; changedPaths: string[] } | null;
  error: string | null;
}

export interface RunOptions {
  mode: 'check' | 'fix';
  isGoldSet?: boolean;
  maxCycles?: number;
}

function blockersFrom(deterministic: DeterministicResult, judgement: Judgement | null): string[] {
  const blockers: string[] = [];
  for (const finding of deterministic.findings) {
    if (finding.severity === 'fail') blockers.push(finding.message);
  }
  if (judgement) {
    if (!judgement.gates.usefulness) blockers.push(`Usefulness ${judgement.response.usefulness.score} (needs ${THRESHOLDS.usefulness}).`);
    if (!judgement.gates.naturalness) blockers.push(`Naturalness ${judgement.response.naturalness.score} (needs ${THRESHOLDS.naturalness}).`);
    if (!judgement.gates.length) blockers.push(`Length ${judgement.response.length.score} (needs ${THRESHOLDS.length}).`);
    for (const issue of [
      ...judgement.response.usefulness.issues,
      ...judgement.response.naturalness.issues,
      ...judgement.response.length.issues,
    ]) {
      if (issue.severity === 'critical' || issue.severity === 'major') {
        blockers.push(`${issue.section}: ${issue.issue}`);
      }
    }
  }
  return blockers;
}

export async function runQualityGate(
  seed: ProblemSeed,
  baseline: Baseline,
  options: RunOptions,
): Promise<QualityReport> {
  const maxCycles = options.maxCycles ?? MAX_REWRITE_CYCLES;
  const originalDoc = extractDocument(seed);
  const usages: Usage[] = [];
  const cycles: CycleRecord[] = [];
  const rewrites: RewriteRecord[] = [];

  const report: QualityReport = {
    slug: seed.slug,
    h1: seed.h1,
    canonicalPath: seed.canonicalPath,
    generatedAt: new Date().toISOString(),
    mode: options.mode,
    isGoldSet: options.isGoldSet ?? false,
    models: { judge: MODELS.judge, rewrite: MODELS.rewrite, factCheck: MODELS.factCheck },
    promptVersions: {
      judge: QUALITY_JUDGE_PROMPT_VERSION,
      rewrite: REWRITE_PROMPT_VERSION,
      factCheck: FACT_CHECK_PROMPT_VERSION,
    },
    thresholds: THRESHOLDS,
    baseline: { frozenAt: baseline.frozenAt, goldSize: baseline.goldSlugs.length },
    cycles,
    rewrites,
    factCheck: null,
    final: 'ERROR',
    blockers: [],
    usage: { calls: usages, inputTokens: 0, outputTokens: 0, costUsd: null },
    revised: null,
    error: null,
  };

  const finish = (final: Outcome, blockers: string[], error?: string): QualityReport => {
    const totals = totalCost(usages);
    report.final = final;
    report.blockers = blockers;
    report.usage = { calls: usages, ...totals };
    report.error = error ?? null;
    return report;
  };

  let currentSeed = seed;
  let currentDoc = originalDoc;
  let deterministic = checkDeterministic(currentDoc, baseline);

  // Structural failure: not worth an editor's time or an API call.
  if (deterministic.blocked) {
    cycles.push({ cycle: 0, deterministic, judge: null });
    return finish('BLOCKED', blockersFrom(deterministic, null));
  }

  let judgement: Judgement;
  try {
    judgement = await judge(currentDoc, baseline, deterministic);
    usages.push(judgement.usage);
  } catch (error) {
    cycles.push({ cycle: 0, deterministic, judge: null });
    return finish('ERROR', ['Editorial review could not be completed.'], String(error));
  }
  cycles.push({ cycle: 0, deterministic, judge: judgement });

  if (judgement.pass) return finish('PASS', []);
  if (options.mode === 'check') return finish('FAIL', blockersFrom(deterministic, judgement));

  // --- Rewrite cycles ------------------------------------------------------
  const changedPaths = new Set<string>();
  for (let cycle = 1; cycle <= maxCycles; cycle += 1) {
    let result: RewriteResult;
    try {
      result = await rewrite(currentSeed, currentDoc, judgement);
      usages.push(result.usage);
    } catch (error) {
      return finish('ERROR', blockersFrom(deterministic, judgement), String(error));
    }

    rewrites.push({
      cycle,
      promptVersion: result.promptVersion,
      applied: result.applied,
      rejected: result.rejected,
      leftAlone: result.response.left_alone,
    });

    if (result.applied.length === 0) {
      // Nothing changed, so re-judging would cost money to learn nothing.
      break;
    }
    for (const revision of result.applied) changedPaths.add(revision.path);

    currentSeed = result.seed;
    currentDoc = extractDocument(currentSeed);
    deterministic = checkDeterministic(currentDoc, baseline);
    if (deterministic.blocked) {
      cycles.push({ cycle, deterministic, judge: null });
      report.revised = { seed: currentSeed, changedPaths: [...changedPaths] };
      return finish('FAILED_REVIEW', ['The rewrite left the page structurally broken.', ...blockersFrom(deterministic, null)]);
    }

    try {
      judgement = await judge(currentDoc, baseline, deterministic);
      usages.push(judgement.usage);
    } catch (error) {
      cycles.push({ cycle, deterministic, judge: null });
      report.revised = { seed: currentSeed, changedPaths: [...changedPaths] };
      return finish('ERROR', ['Re-review could not be completed.'], String(error));
    }
    cycles.push({ cycle, deterministic, judge: judgement });

    if (judgement.pass) break;
  }

  if (changedPaths.size > 0) {
    report.revised = { seed: currentSeed, changedPaths: [...changedPaths] };
    try {
      const check = await factCheck(originalDoc, currentDoc, [...changedPaths]);
      usages.push(check.usage);
      report.factCheck = check;
      if (!check.pass) {
        return finish(
          'FACT_CHECK_FAILED',
          [
            'The rewrite changed meaning — discard it.',
            ...check.response.violations
              .filter((v) => v.severity !== 'minor')
              .map((v) => `${v.type} at ${v.path}: ${v.detail}`),
          ],
        );
      }
    } catch (error) {
      return finish('ERROR', ['Fact-preservation check could not be completed.'], String(error));
    }
  }

  if (judgement.pass) return finish('PASS', []);
  return finish('FAILED_REVIEW', blockersFrom(deterministic, judgement));
}
