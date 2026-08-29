/**
 * The Claude editorial review.
 *
 * The model returns its own pass flags; this module ignores them for the
 * decision and re-applies the thresholds locally. A judge that talks itself
 * into a pass is the one failure mode a quality gate cannot afford.
 */
import { THRESHOLDS } from './config';
import type { Baseline } from './baseline';
import type { DeterministicResult } from './deterministic';
import type { ContentDocument } from './extract';
import { GOLD_EXCERPT_COUNT } from './config';
import { JUDGE_SYSTEM_PROMPT, QUALITY_JUDGE_PROMPT_VERSION, buildJudgeUserPrompt } from './prompts/judge';
import { judgeResponseSchema } from './schemas';
import type { JudgeResponse } from './schemas';
import type { Usage } from './anthropic';
import { callStructured } from './anthropic';

export interface Gates {
  usefulness: boolean;
  naturalness: boolean;
  length: boolean;
}

export interface Judgement {
  promptVersion: string;
  response: JudgeResponse;
  usage: Usage;
  /** Locally computed from the scores — the authority on pass/fail. */
  gates: Gates;
  pass: boolean;
  /** True when the model's own final_pass disagreed with the thresholds. */
  modelDisagreed: boolean;
}

export function evaluateGates(response: JudgeResponse): Gates {
  return {
    usefulness: response.usefulness.score >= THRESHOLDS.usefulness,
    naturalness: response.naturalness.score >= THRESHOLDS.naturalness,
    length: response.length.score >= THRESHOLDS.length,
  };
}

/** Every dimension clears its own bar, or the page fails. No averaging. */
export function gatesPass(gates: Gates): boolean {
  return gates.usefulness && gates.naturalness && gates.length;
}

export async function judge(
  doc: ContentDocument,
  baseline: Baseline,
  deterministic: DeterministicResult,
): Promise<Judgement> {
  const { data, usage } = await callStructured({
    stage: 'judge',
    system: JUDGE_SYSTEM_PROMPT,
    user: buildJudgeUserPrompt({
      doc,
      baseline,
      deterministic,
      excerpts: baseline.excerpts.slice(0, GOLD_EXCERPT_COUNT),
    }),
    schema: judgeResponseSchema,
  });

  const gates = evaluateGates(data);
  const pass = gatesPass(gates);

  return {
    promptVersion: QUALITY_JUDGE_PROMPT_VERSION,
    response: data,
    usage,
    gates,
    pass,
    modelDisagreed: data.final_pass !== pass,
  };
}
