import type { ProblemSeed } from '../types';

/**
 * Reserved problem records for the Cat Digestion system.
 *
 * Same rationale as `planned-tire-problems.ts`. `cat-throwing-up` is NOT on
 * this list — it is being written as a real page, not reserved.
 */

interface PlannedProblem {
  slug: string;
  name: string;
  h1: string;
}

const planned: PlannedProblem[] = [
  { slug: 'cat-diarrhea', name: 'Cat Diarrhea', h1: 'Can I Ignore Diarrhea in My Cat?' },
];

export const plannedCatDigestionProblems: ProblemSeed[] = planned.map(({ slug, name, h1 }) => ({
  systemSlug: 'cat-digestion',
  slug,
  name,
  h1,
  canonicalPath: `/pets/cats/digestion/${slug}/`,
  status: 'draft',
  indexable: false,
}));
