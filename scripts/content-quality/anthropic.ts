/**
 * The one place this repository talks to the Anthropic API.
 *
 * Two invariants:
 *   - the key is read from the environment, never passed around or logged;
 *   - every failure is a failure. A timeout, a rate limit or a malformed
 *     response returns an error, never an empty result that a caller could
 *     mistake for "nothing wrong with this page".
 */
import Anthropic from '@anthropic-ai/sdk';
import { zodOutputFormat } from '@anthropic-ai/sdk/helpers/zod';
import type * as z from 'zod/v4';

import type { Stage } from './config';
import { EFFORT, MAX_TOKENS, MODELS, PRICING, requireApiKey } from './config';

export interface Usage {
  model: string;
  stage: Stage;
  inputTokens: number;
  outputTokens: number;
  cacheReadTokens: number;
  cacheCreationTokens: number;
  /** USD, omitted when the model is not in the local pricing table. */
  costUsd: number | null;
}

export class ContentQualityApiError extends Error {
  readonly stage: Stage;

  constructor(stage: Stage, message: string, options?: { cause?: unknown }) {
    super(message, options);
    this.name = 'ContentQualityApiError';
    this.stage = stage;
  }
}

let client: Anthropic | null = null;

export function getClient(): Anthropic {
  if (!client) {
    client = new Anthropic({
      apiKey: requireApiKey(),
      maxRetries: 2,
      timeout: 10 * 60 * 1000,
    });
  }
  return client;
}

/** Test seam: lets the suite install a stub without touching the network. */
export function setClient(stub: Anthropic | null): void {
  client = stub;
}

function priceOf(model: string, inputTokens: number, outputTokens: number): number | null {
  const rate = PRICING[model];
  if (!rate) return null;
  return (inputTokens / 1_000_000) * rate.input + (outputTokens / 1_000_000) * rate.output;
}

export interface StructuredCall<T> {
  stage: Stage;
  system: string;
  user: string;
  schema: z.ZodType<T>;
}

export interface StructuredResult<T> {
  data: T;
  usage: Usage;
}

/**
 * One structured request. The schema is enforced twice — once by the API via
 * `output_config.format`, once locally — because a response that parses as JSON
 * but not as the schema is exactly as unusable as no response at all.
 */
export async function callStructured<T>({ stage, system, user, schema }: StructuredCall<T>): Promise<StructuredResult<T>> {
  const model = MODELS[stage];
  const anthropic = getClient();

  let message;
  try {
    message = await anthropic.messages.parse({
      model,
      max_tokens: MAX_TOKENS[stage],
      output_config: { effort: EFFORT[stage], format: zodOutputFormat(schema) },
      system,
      messages: [{ role: 'user', content: user }],
    });
  } catch (error) {
    if (error instanceof Anthropic.AuthenticationError) {
      throw new ContentQualityApiError(stage, 'Anthropic rejected the API key.', { cause: error });
    }
    if (error instanceof Anthropic.RateLimitError) {
      throw new ContentQualityApiError(stage, 'Rate limited by the Anthropic API after retries.', { cause: error });
    }
    if (error instanceof Anthropic.APIConnectionTimeoutError) {
      throw new ContentQualityApiError(stage, 'Anthropic request timed out.', { cause: error });
    }
    if (error instanceof Anthropic.APIError) {
      throw new ContentQualityApiError(stage, `Anthropic API error ${error.status ?? ''}: ${error.message}`, { cause: error });
    }
    throw new ContentQualityApiError(stage, `Anthropic request failed: ${String(error)}`, { cause: error });
  }

  if (message.stop_reason === 'refusal') {
    throw new ContentQualityApiError(stage, `Model declined the request (${message.stop_details?.category ?? 'unknown'}).`);
  }
  if (message.stop_reason === 'max_tokens') {
    throw new ContentQualityApiError(stage, 'Response hit max_tokens before finishing — treat as no result.');
  }

  const raw =
    (message.parsed_output as unknown) ??
    firstJsonBlock(message.content.map((block) => (block.type === 'text' ? block.text : '')).join('\n'));

  const parsed = schema.safeParse(raw);
  if (!parsed.success) {
    throw new ContentQualityApiError(
      stage,
      `Response did not match the expected schema: ${parsed.error.issues.map((i) => `${i.path.join('.')} ${i.message}`).join('; ')}`,
    );
  }

  const usage: Usage = {
    model,
    stage,
    inputTokens: message.usage.input_tokens,
    outputTokens: message.usage.output_tokens,
    cacheReadTokens: message.usage.cache_read_input_tokens ?? 0,
    cacheCreationTokens: message.usage.cache_creation_input_tokens ?? 0,
    costUsd: priceOf(model, message.usage.input_tokens, message.usage.output_tokens),
  };

  return { data: parsed.data, usage };
}

/** Last-resort recovery when the API returned text instead of parsed output. */
function firstJsonBlock(text: string): unknown {
  const start = text.indexOf('{');
  const end = text.lastIndexOf('}');
  if (start === -1 || end <= start) return null;
  try {
    return JSON.parse(text.slice(start, end + 1));
  } catch {
    return null;
  }
}

export function totalCost(usages: Usage[]): { costUsd: number | null; inputTokens: number; outputTokens: number } {
  const inputTokens = usages.reduce((sum, u) => sum + u.inputTokens, 0);
  const outputTokens = usages.reduce((sum, u) => sum + u.outputTokens, 0);
  const priced = usages.filter((u) => u.costUsd !== null);
  const costUsd = priced.length === usages.length ? priced.reduce((sum, u) => sum + (u.costUsd ?? 0), 0) : null;
  return { costUsd, inputTokens, outputTokens };
}
