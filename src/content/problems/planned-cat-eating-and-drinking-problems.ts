import type { ProblemSeed } from '../types';

/**
 * Reserved problem records for the Cat Eating & Drinking system.
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
  { slug: 'cat-drinking-lots-of-water', name: 'Cat Drinking Lots of Water', h1: 'Can I Ignore a Cat That Suddenly Drinks a Lot of Water?' },
  { slug: 'cat-always-hungry', name: 'Cat Always Hungry', h1: 'Can I Ignore a Cat That Acts Hungry All the Time?' },
  { slug: 'cat-eating-houseplants', name: 'Cat Eating Houseplants', h1: 'Can I Ignore a Cat That Chews on Houseplants?' },
];

export const plannedCatEatingAndDrinkingProblems: ProblemSeed[] = planned.map(({ slug, name, h1 }) => ({
  systemSlug: 'cat-eating-and-drinking',
  slug,
  name,
  h1,
  canonicalPath: `/pets/cats/eating-and-drinking/${slug}/`,
  status: 'draft',
  indexable: false,
}));
