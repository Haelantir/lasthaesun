import type { ProblemSeed } from '../types';

/**
 * Reserved problem records for the Newborn Feeding system.
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
  { slug: 'newborn-feeding-less-than-usual', name: 'Newborn Feeding Less Than Usual', h1: 'Can I Ignore My Newborn Feeding Less Than Usual?' },
];

export const plannedNewbornFeedingProblems: ProblemSeed[] = planned.map(({ slug, name, h1 }) => ({
  systemSlug: 'newborn-feeding',
  slug,
  name,
  h1,
  canonicalPath: `/babies/newborns/feeding/${slug}/`,
  status: 'draft',
  indexable: false,
}));
