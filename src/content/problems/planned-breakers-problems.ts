import type { ProblemSeed } from '../types';

/**
 * Reserved problem records for the Breakers system.
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

export const plannedBreakersProblems: ProblemSeed[] = planned.map(({ slug, name, h1 }) => ({
  systemSlug: 'breakers',
  slug,
  name,
  h1,
  canonicalPath: `/home/electrical/breakers/${slug}/`,
  status: 'draft',
  indexable: false,
}));
