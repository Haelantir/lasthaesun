import type { ProblemSeed } from '../types';

/**
 * Reserved problem records for the Dog Digestion system.
 *
 * Same rationale as `planned-tire-problems.ts`. `dog-throwing-up` and
 * `dog-diarrhea` are NOT on this list — they are being written as real
 * pages, not reserved. See "The reserved-slug trap" in CLAUDE.md: once one
 * of those graduates to its own file, do not also list it here.
 */

interface PlannedProblem {
  slug: string;
  name: string;
  h1: string;
}

const planned: PlannedProblem[] = [
  { slug: 'dog-constipation', name: 'Dog Constipation', h1: 'Can I Ignore My Dog Not Pooping?' },
];

export const plannedDogDigestionProblems: ProblemSeed[] = planned.map(({ slug, name, h1 }) => ({
  systemSlug: 'dog-digestion',
  slug,
  name,
  h1,
  canonicalPath: `/pets/dogs/digestion/${slug}/`,
  status: 'draft',
  indexable: false,
}));
