import type { ProblemSeed } from '../types';

/**
 * Reserved problem records for the Foundation system.
 *
 * Same rationale as `planned-drains-problems.ts`: name, question and URL only,
 * so the writer can be pointed at an exact slug instead of inventing one.
 */

interface PlannedProblem {
  slug: string;
  name: string;
  h1: string;
}

const planned: PlannedProblem[] = [];

export const plannedFoundationProblems: ProblemSeed[] = planned.map(({ slug, name, h1 }) => ({
  systemSlug: 'foundation',
  slug,
  name,
  h1,
  canonicalPath: `/home/structure/foundation/${slug}/`,
  status: 'draft',
  indexable: false,
}));
