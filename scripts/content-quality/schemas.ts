/**
 * Response schemas for the three Claude stages.
 *
 * These are passed to the Messages API as `output_config.format`, so the model
 * is constrained to the shape rather than asked politely for JSON. Nothing here
 * is optional: a missing field would have to be guessed at parse time, and a
 * guessed score is exactly the failure mode this gate exists to prevent.
 *
 * Imported from `zod/v4` because that is the entrypoint `zodOutputFormat`
 * itself is typed against.
 */
import * as z from 'zod/v4';

import { SECTIONS } from './extract';

export const SECTION_ENUM = [...SECTIONS, 'overall'] as const;

export const issueSchema = z.object({
  section: z.enum(SECTION_ENUM).describe('Which block the problem is in.'),
  paths: z
    .array(z.string())
    .describe('Exact field paths from the supplied content, e.g. "faqs[3].answer". Empty if it is a whole-section problem.'),
  issue: z.string().describe('What is wrong, in one or two sentences, quoting the offending words.'),
  severity: z.enum(['minor', 'major', 'critical']),
  suggested_fix: z.string().describe('The concrete edit to make. Not a restatement of the issue.'),
});

export const repetitionClusterSchema = z.object({
  claim: z.string().describe('The single fact being repeated, stated once.'),
  sections: z.array(z.enum(SECTION_ENUM)),
  paths: z.array(z.string()),
  necessary: z.boolean().describe('True when the repetition genuinely helps the reader (a safety point at a decision moment).'),
});

export const judgeResponseSchema = z.object({
  usefulness: z.object({
    score: z.number().min(0).max(100),
    pass: z.boolean(),
    issues: z.array(issueSchema),
  }),
  naturalness: z.object({
    score: z.number().min(0).max(100),
    pass: z.boolean(),
    issues: z.array(issueSchema),
    repetition_clusters: z.array(repetitionClusterSchema),
  }),
  length: z.object({
    score: z.number().min(0).max(100),
    pass: z.boolean(),
    issues: z.array(issueSchema),
  }),
  compression: z.object({
    estimated_removable_percent: z.number().min(0).max(100),
    explanation: z.string(),
  }),
  final_pass: z.boolean(),
});

export type JudgeResponse = z.infer<typeof judgeResponseSchema>;

export const rewriteResponseSchema = z.object({
  revisions: z.array(
    z.object({
      path: z.string().describe('Exact path of the field being replaced, copied from the supplied content.'),
      replacement: z.string().describe('The full new value for that field.'),
      rationale: z.string().describe('Which reported issue this addresses.'),
    }),
  ),
  left_alone: z
    .array(z.object({ path: z.string(), reason: z.string() }))
    .describe('Flagged fields deliberately not changed, and why.'),
});

export type RewriteResponse = z.infer<typeof rewriteResponseSchema>;

export const factCheckResponseSchema = z.object({
  preserved: z.boolean().describe('True only when the revision changed wording without changing meaning.'),
  violations: z.array(
    z.object({
      type: z.enum([
        'new_fact',
        'removed_fact',
        'verdict_change',
        'new_number',
        'unsupported_claim',
        'safety_weakened',
      ]),
      path: z.string(),
      detail: z.string(),
      severity: z.enum(['minor', 'major', 'critical']),
    }),
  ),
  summary: z.string(),
});

export type FactCheckResponse = z.infer<typeof factCheckResponseSchema>;
