import type { ProblemSeed } from '../types';

/**
 * Reserved problem records for the Ceilings system.
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

export const plannedCeilingsProblems: ProblemSeed[] = planned.map(({ slug, name, h1 }) => ({
  systemSlug: 'ceilings',
  slug,
  name,
  h1,
  canonicalPath: `/home/structure/ceilings/${slug}/`,
  status: 'draft',
  indexable: false,
}));
