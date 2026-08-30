import type { ProblemSeed } from '../types';

/**
 * Reserved problem records for the Air Conditioning system.
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

export const plannedAirConditioningProblems: ProblemSeed[] = planned.map(({ slug, name, h1 }) => ({
  systemSlug: 'air-conditioning',
  slug,
  name,
  h1,
  canonicalPath: `/home/hvac/air-conditioning/${slug}/`,
  status: 'draft',
  indexable: false,
}));
