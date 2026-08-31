import type { ProblemSeed } from '../types';

/**
 * Reserved problem records for the Dog Breathing system.
 *
 * Same rationale as `planned-tire-problems.ts`. `dog-reverse-sneezing` is
 * NOT on this list — it is being written as a real page, not reserved.
 */

interface PlannedProblem {
  slug: string;
  name: string;
  h1: string;
}

const planned: PlannedProblem[] = [
  { slug: 'dog-coughing', name: 'Dog Coughing', h1: 'Can I Ignore My Dog Coughing?' },
];

export const plannedDogBreathingProblems: ProblemSeed[] = planned.map(({ slug, name, h1 }) => ({
  systemSlug: 'dog-breathing',
  slug,
  name,
  h1,
  canonicalPath: `/pets/dogs/breathing/${slug}/`,
  status: 'draft',
  indexable: false,
}));
