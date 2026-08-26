import { z } from 'zod';

/**
 * The publish gate.
 *
 * The `problems` table lets a draft be honestly incomplete — a reserved name and
 * URL with no invented verdict. This schema defines what "published" means, and
 * it is enforced in two places:
 *
 *   1. the seed/import script, so incomplete content can never be marked published;
 *   2. the repository, so a page never renders half a decision.
 *
 * Adding a required field to a problem page means adding it here. That is the
 * intended workflow: content correctness is a validation concern, not a
 * reviewer's memory.
 */

export const verdictLevelSchema = z.enum(['safe_to_ignore', 'can_wait', 'probably_not', 'do_not_ignore']);
export const urgencyLevelSchema = z.enum(['low', 'medium', 'high', 'critical']);
export const riskLevelSchema = z.enum(['low', 'moderate', 'high', 'severe']);
export const difficultyLevelSchema = z.enum(['easy', 'moderate', 'hard', 'professional']);
export const severityLevelSchema = z.enum(['info', 'caution', 'warning', 'danger']);
export const contentStatusSchema = z.enum(['draft', 'reviewed', 'published', 'archived']);

/** Canonical paths are absolute, lower-case and end in exactly one slash. */
export const canonicalPathSchema = z
  .string()
  .regex(/^\/(?:[a-z0-9-]+\/)*$/, 'canonical path must look like /cars/tires/low-tire-pressure/');

/** A URL we are willing to print. Null is always allowed and always preferred
 *  over guessing — see the "never fabricate a source URL" rule. */
export const optionalUrlSchema = z.url().nullable();

/**
 * The fields a problem MUST have before `status: 'published'` is allowed.
 * Google-facing metadata is included because a published page without a unique
 * title and description is an SEO defect, not a cosmetic one.
 */
export const publishedProblemSchema = z.object({
  name: z.string().min(1),
  h1: z.string().min(1),
  seoTitle: z.string().min(1).max(256),
  metaDescription: z.string().min(1).max(512),
  canonicalPath: canonicalPathSchema,
  verdict: verdictLevelSchema,
  urgency: urgencyLevelSchema,
  safetyRisk: riskLevelSchema,
  fixDifficulty: difficultyLevelSchema,
  canIUseItLabel: z.string().min(1),
  canIUseItQuestion: z.string().min(1),
  shortAnswer: z.string().min(1),
  whyItMatters: z.string().min(1),
});

export type PublishedProblemFields = z.infer<typeof publishedProblemSchema>;

/**
 * Narrow a raw `problems` row to a guaranteed-complete published problem.
 * Returns null (rather than throwing) so a malformed row degrades to a 404
 * instead of a 500 — a half-rendered verdict would be worse than no page.
 */
export function asPublishedProblem<T extends Record<string, unknown>>(
  row: T,
): (T & PublishedProblemFields) | null {
  const result = publishedProblemSchema.safeParse(row);
  if (!result.success) {
    if (process.env.NODE_ENV !== 'production') {
      console.warn(
        `[content] problem "${String(row.slug ?? row.id)}" is marked published but incomplete:`,
        z.treeifyError(result.error),
      );
    }
    return null;
  }
  return { ...row, ...result.data };
}
