import type { ProblemSeed } from '../types';

/**
 * Reserved problem records for the Cat Behavior & Energy system.
 *
 * Same rationale as `planned-tire-problems.ts`. `cat-sleeping-all-day` is
 * NOT on this list — it is being written as a real page, not reserved.
 */

interface PlannedProblem {
  slug: string;
  name: string;
  h1: string;
}

const planned: PlannedProblem[] = [
  { slug: 'cat-hiding-suddenly', name: 'Cat Hiding Suddenly', h1: 'Can I Ignore My Cat Suddenly Hiding?' },
];

export const plannedCatBehaviorAndEnergyProblems: ProblemSeed[] = planned.map(({ slug, name, h1 }) => ({
  systemSlug: 'cat-behavior-and-energy',
  slug,
  name,
  h1,
  canonicalPath: `/pets/cats/behavior-and-energy/${slug}/`,
  status: 'draft',
  indexable: false,
}));
