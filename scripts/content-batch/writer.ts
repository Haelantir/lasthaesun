/**
 * The only place in the content pipeline that talks to a model.
 *
 * Everything under `scripts/content-import` is deterministic and has no network
 * path at all — that property is deliberate and is asserted by its tests. This
 * file sits deliberately OUTSIDE that boundary: it produces exactly the `.txt` a
 * person would otherwise have pasted in by hand, and hands it to the importer
 * untouched. The importer still validates every field, so nothing here can put
 * an unchecked page on the site.
 *
 * The model and its reasoning effort are PINNED BY CONFIGURATION and are not a
 * tuning knob. They decide what the site publishes, so there is no default and
 * no fallback: an unset model id is a hard error rather than a quiet
 * substitution of whatever happens to be cheapest.
 *
 * Responses are streamed. Not for speed — nothing consumes the text until it is
 * complete — but because a batch of ten topics is twenty minutes of silence
 * otherwise, and the one thing worth watching is whether the model is actually
 * searching the web. Without a search it writes from memory and invents the
 * source URLs the importer then rejects, and the run fails at the very end.
 */
const ENDPOINT = 'https://api.openai.com/v1/responses';

export interface WriterConfig {
  model: string;
  effort: string;
  webSearch: boolean;
  timeoutMs: number;
}

export function writerConfig(): WriterConfig {
  const model = process.env.CONTENT_WRITER_MODEL?.trim();
  if (!model) {
    throw new Error(
      'CONTENT_WRITER_MODEL is not set.\n' +
        '  Put the exact model id in .env.local. This pipeline never guesses which\n' +
        '  model wrote the content — the wrong one silently changes the whole site.',
    );
  }
  return {
    model,
    effort: process.env.CONTENT_WRITER_EFFORT?.trim() || 'high',
    webSearch: process.env.CONTENT_WRITER_WEB_SEARCH?.trim().toLowerCase() !== 'off',
    timeoutMs: Number(process.env.CONTENT_WRITER_TIMEOUT_MS) || 15 * 60 * 1000,
  };
}

function apiKey(): string {
  const key = process.env.OPENAI_API_KEY?.trim();
  if (!key) throw new Error('OPENAI_API_KEY is not set in .env.local.');
  return key;
}

/** What a caller can show while a topic is being written. */
export interface Progress {
  phase: 'thinking' | 'searching' | 'writing';
  /** Completed web searches. Zero at the end means the sources are suspect. */
  searches: number;
  /** Characters of content written so far. */
  chars: number;
}

/**
 * Pulls the assistant's text out of a non-streamed Responses payload.
 *
 * Reasoning models return reasoning items and tool calls in the same `output`
 * array, so the text cannot be read positionally — only the `output_text` parts
 * of a `message` item are the answer.
 */
export function extractText(payload: unknown): string {
  const root = payload as { output_text?: unknown; output?: unknown };

  if (typeof root.output_text === 'string' && root.output_text.trim() !== '') {
    return root.output_text;
  }

  const parts: string[] = [];
  for (const item of Array.isArray(root.output) ? root.output : []) {
    const entry = item as { type?: string; content?: unknown };
    if (entry.type !== 'message') continue;
    for (const piece of Array.isArray(entry.content) ? entry.content : []) {
      const part = piece as { type?: string; text?: unknown };
      if (part.type === 'output_text' && typeof part.text === 'string') parts.push(part.text);
    }
  }
  return parts.join('');
}

/**
 * Removes a wrapping markdown code fence.
 *
 * The prompt forbids fences, but a model that has just written five hundred
 * lines of structured text sometimes wraps them anyway. Unwrapping is a format
 * fix of exactly the kind the import rules allow — no word of the content
 * changes.
 */
export function stripFence(text: string): string {
  const trimmed = text.trim();
  const fence = /^```[a-z]*\n([\s\S]*?)\n```$/.exec(trimmed);
  return (fence ? fence[1]! : trimmed).trim();
}

export interface WriterResult {
  text: string;
  ms: number;
  searches: number;
}

/** Splits an SSE byte stream into decoded `data:` payloads. */
async function* sseEvents(body: ReadableStream<Uint8Array>): AsyncGenerator<unknown> {
  const reader = body.getReader();
  const decoder = new TextDecoder();
  let buffer = '';

  for (;;) {
    const { done, value } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });

    let split = buffer.indexOf('\n\n');
    while (split !== -1) {
      const block = buffer.slice(0, split);
      buffer = buffer.slice(split + 2);
      split = buffer.indexOf('\n\n');

      for (const line of block.split('\n')) {
        if (!line.startsWith('data:')) continue;
        const raw = line.slice(5).trim();
        if (raw === '' || raw === '[DONE]') continue;
        try {
          yield JSON.parse(raw);
        } catch {
          // A partial or non-JSON keepalive frame. The stream carries its own
          // completion event, so a dropped frame here is not worth failing on.
        }
      }
    }
  }
}

export async function writeTopic(
  prompt: string,
  config: WriterConfig,
  onProgress?: (progress: Progress) => void,
): Promise<WriterResult> {
  const started = Date.now();
  const body: Record<string, unknown> = {
    model: config.model,
    input: prompt,
    reasoning: { effort: config.effort },
    stream: true,
  };
  if (config.webSearch) body.tools = [{ type: 'web_search' }];

  const response = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { authorization: `Bearer ${apiKey()}`, 'content-type': 'application/json' },
    body: JSON.stringify(body),
    signal: AbortSignal.timeout(config.timeoutMs),
  });

  if (!response.ok) {
    const detail = await response.text().catch(() => '');
    throw new Error(`OpenAI ${response.status} ${response.statusText}\n${detail.slice(0, 1200)}`);
  }
  if (!response.body) throw new Error('OpenAI returned no response body.');

  let text = '';
  let searches = 0;
  let phase: Progress['phase'] = 'thinking';
  let failure: string | null = null;

  const report = () => onProgress?.({ phase, searches, chars: text.length });

  for await (const event of sseEvents(response.body)) {
    const { type, delta, response: final } = event as {
      type?: string;
      delta?: unknown;
      response?: unknown;
    };
    if (typeof type !== 'string') continue;

    if (type.includes('web_search_call')) {
      if (type.endsWith('.completed')) {
        searches += 1;
      } else {
        phase = 'searching';
      }
      report();
      continue;
    }

    if (type === 'response.output_text.delta' && typeof delta === 'string') {
      phase = 'writing';
      text += delta;
      report();
      continue;
    }

    if (type === 'response.completed' && final) {
      // Deltas are the normal path; the final payload is the backstop for a
      // stream that delivered the message without them.
      if (text === '') text = extractText(final);
      continue;
    }

    if (type === 'response.failed' || type === 'response.incomplete' || type === 'error') {
      failure = JSON.stringify(event).slice(0, 800);
    }
  }

  if (failure) throw new Error(`The model did not finish: ${failure}`);

  const cleaned = stripFence(text);
  if (cleaned === '') throw new Error('The model returned an empty response.');
  return { text: cleaned, ms: Date.now() - started, searches };
}
