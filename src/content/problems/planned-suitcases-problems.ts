import type { ProblemSeed } from '../types';

/**
 * Reserved problem records for the Suitcases system.
 *
 * Same rationale as `planned-tire-problems.ts`: name, question and URL only, so
 * the related-problems graph has real rows to point at before the pages exist.
 */

interface PlannedProblem {
  slug: string;
  name: string;
  h1: string;
}

const planned: PlannedProblem[] = [
  { slug: 'suitcase-zip-not-closing', name: 'Suitcase Zip Not Closing', h1: 'Can I Ignore a Suitcase Zip That Barely Closes?' },
];

export const plannedSuitcasesProblems: ProblemSeed[] = planned.map(({ slug, name, h1 }) => ({
  systemSlug: 'suitcases',
  slug,
  name,
  h1,
  canonicalPath: `/travel/luggage/suitcases/${slug}/`,
  status: 'draft',
  indexable: false,
}));
