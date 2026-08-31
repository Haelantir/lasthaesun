import type { ProblemSeed } from '../types';

/**
 * Reserved problem records for the Dog Toxins & Foreign Objects system.
 *
 * Same rationale as `planned-tire-problems.ts`. `dog-ate-chocolate` is NOT
 * on this list — it is being written as a real page, not reserved.
 */

interface PlannedProblem {
  slug: string;
  name: string;
  h1: string;
}

const planned: PlannedProblem[] = [
  { slug: 'dog-ate-grapes', name: 'Dog Ate Grapes or Raisins', h1: 'Can I Ignore My Dog Eating Grapes or Raisins?' },
  { slug: 'dog-swallowed-a-sock', name: 'Dog Swallowed a Sock or Toy', h1: 'Can I Ignore My Dog Swallowing a Sock or Toy?' },
];

export const plannedDogToxinsAndForeignObjectsProblems: ProblemSeed[] = planned.map(({ slug, name, h1 }) => ({
  systemSlug: 'dog-toxins-and-foreign-objects',
  slug,
  name,
  h1,
  canonicalPath: `/pets/dogs/toxins-and-foreign-objects/${slug}/`,
  status: 'draft',
  indexable: false,
}));
