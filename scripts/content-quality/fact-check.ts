/**
 * Fact preservation.
 *
 * Style editing is allowed to change every word on the page. It is not allowed
 * to change what the page means. This stage compares the fields that actually
 * changed and fails the run if a fact appeared, a fact vanished, or a warning
 * got quieter.
 */
import type { Usage } from './anthropic';
import { callStructured } from './anthropic';
import type { ContentDocument } from './extract';
import { FACT_CHECK_PROMPT_VERSION, FACT_CHECK_SYSTEM_PROMPT, buildFactCheckUserPrompt } from './prompts/fact-check';
import { factCheckResponseSchema } from './schemas';
import type { FactCheckResponse } from './schemas';

export interface FactCheckResult {
  promptVersion: string;
  response: FactCheckResponse;
  usage: Usage;
  /** Locally derived: any major or critical violation fails, whatever the model set. */
  pass: boolean;
}

export function evaluateFactCheck(response: FactCheckResponse): boolean {
  const serious = response.violations.filter((v) => v.severity === 'major' || v.severity === 'critical');
  return serious.length === 0 && response.preserved;
}

export async function factCheck(
  original: ContentDocument,
  revised: ContentDocument,
  changedPaths: string[],
): Promise<FactCheckResult> {
  const { data, usage } = await callStructured({
    stage: 'factCheck',
    system: FACT_CHECK_SYSTEM_PROMPT,
    user: buildFactCheckUserPrompt({ original, revised, changedPaths }),
    schema: factCheckResponseSchema,
  });

  return {
    promptVersion: FACT_CHECK_PROMPT_VERSION,
    response: data,
    usage,
    pass: evaluateFactCheck(data),
  };
}
