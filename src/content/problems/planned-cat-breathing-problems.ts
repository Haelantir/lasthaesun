import type { ProblemSeed } from '../types';

/**
 * Reserved problem records for the Cat Breathing system.
 *
 * Same rationale as `planned-tire-problems.ts`. `cat-sneezing` is NOT on
 * this list — it is being written as a real page, not reserved.
 */

interface PlannedProblem {
  slug: string;
  name: string;
  h1: string;
}

const planned: PlannedProblem[] = [
  { slug: 'cat-coughing', name: 'Cat Coughing', h1: 'Can I Ignore My Cat Coughing?' },
];

export const plannedCatBreathingProblems: ProblemSeed[] = planned.map(({ slug, name, h1 }) => ({
  systemSlug: 'cat-breathing',
  slug,
  name,
  h1,
  canonicalPath: `/pets/cats/breathing/${slug}/`,
  status: 'draft',
  indexable: false,
}));
