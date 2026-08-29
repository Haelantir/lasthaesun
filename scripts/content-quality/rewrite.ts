/**
 * Targeted rewrite.
 *
 * The model is handed the faulted fields and returns replacements for them.
 * Applying a replacement is a string swap at a known path on a copy of the
 * seed — there is no code path here that can add a field, reorder a section, or
 * touch a passage the judge did not fault.
 */
import type { ProblemSeed } from '../../src/content/types';
import type { Usage } from './anthropic';
import { callStructured } from './anthropic';
import type { ContentDocument } from './extract';
import { extractDocument } from './extract';
import type { Judgement } from './judge';
import { REWRITE_PROMPT_VERSION, REWRITE_SYSTEM_PROMPT, buildRewriteUserPrompt, collectTargetPaths } from './prompts/rewrite';
import { rewriteResponseSchema } from './schemas';
import type { RewriteResponse } from './schemas';

export interface AppliedRevision {
  path: string;
  before: string;
  after: string;
  rationale: string;
}

export interface RewriteResult {
  promptVersion: string;
  response: RewriteResponse;
  usage: Usage;
  seed: ProblemSeed;
  applied: AppliedRevision[];
  /** Paths the model returned that are not editable — never applied. */
  rejected: { path: string; reason: string }[];
}

interface ParsedPath {
  root: string;
  index: number | null;
  leaf: string | null;
}

/** Parses `faqs[3].answer` and `shortAnswer`. Anything else is rejected. */
export function parsePath(path: string): ParsedPath | null {
  const scalar = path.match(/^([a-zA-Z]+)$/);
  if (scalar?.[1]) return { root: scalar[1], index: null, leaf: null };
  const indexed = path.match(/^([a-zA-Z]+)\[(\d+)\]\.([a-zA-Z]+)$/);
  if (indexed?.[1] && indexed[2] !== undefined && indexed[3]) {
    return { root: indexed[1], index: Number(indexed[2]), leaf: indexed[3] };
  }
  return null;
}

type Mutable = Record<string, unknown>;

/**
 * Applies replacements to a deep copy of the seed.
 *
 * A revision is applied only when its path already exists in the extracted
 * document and currently holds a non-empty string — so a rewrite can change
 * prose but cannot create a field that the author never wrote.
 */
export function applyRevisions(
  seed: ProblemSeed,
  revisions: RewriteResponse['revisions'],
): { seed: ProblemSeed; applied: AppliedRevision[]; rejected: { path: string; reason: string }[] } {
  const editable = new Map(extractDocument(seed).fields.map((f) => [f.path, f.text]));
  // Dates do not survive JSON round-tripping; restore the one field that is one.
  const next = { ...(JSON.parse(JSON.stringify(seed)) as ProblemSeed) };
  if (seed.lastReviewedAt) next.lastReviewedAt = new Date(seed.lastReviewedAt);

  const applied: AppliedRevision[] = [];
  const rejected: { path: string; reason: string }[] = [];

  for (const revision of revisions) {
    const before = editable.get(revision.path);
    if (before === undefined) {
      rejected.push({ path: revision.path, reason: 'not an editable field on this page' });
      continue;
    }
    const replacement = revision.replacement.trim();
    if (replacement.length === 0) {
      rejected.push({ path: revision.path, reason: 'empty replacement — deleting a field is not a copy edit' });
      continue;
    }
    const parsed = parsePath(revision.path);
    if (!parsed) {
      rejected.push({ path: revision.path, reason: 'unparseable path' });
      continue;
    }

    const container = next as unknown as Mutable;
    if (parsed.index === null) {
      container[parsed.root] = replacement;
    } else {
      const list = container[parsed.root];
      if (!Array.isArray(list) || !list[parsed.index] || parsed.leaf === null) {
        rejected.push({ path: revision.path, reason: 'target no longer exists' });
        continue;
      }
      (list[parsed.index] as Mutable)[parsed.leaf] = replacement;
    }

    if (before !== replacement) {
      applied.push({ path: revision.path, before, after: replacement, rationale: revision.rationale });
    }
  }

  return { seed: next, applied, rejected };
}

export async function rewrite(seed: ProblemSeed, doc: ContentDocument, judgement: Judgement): Promise<RewriteResult> {
  const targetPaths = collectTargetPaths(doc, judgement.response);
  if (targetPaths.length === 0) {
    throw new Error('The judge failed the page but named no field to fix — nothing to rewrite.');
  }

  const { data, usage } = await callStructured({
    stage: 'rewrite',
    system: REWRITE_SYSTEM_PROMPT,
    user: buildRewriteUserPrompt({ doc, judgement: judgement.response, targetPaths }),
    schema: rewriteResponseSchema,
  });

  const { seed: revisedSeed, applied, rejected } = applyRevisions(seed, data.revisions);

  return {
    promptVersion: REWRITE_PROMPT_VERSION,
    response: data,
    usage,
    seed: revisedSeed,
    applied,
    rejected,
  };
}
