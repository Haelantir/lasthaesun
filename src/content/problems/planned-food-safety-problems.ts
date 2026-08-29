import type { ProblemSeed } from '../types';

/**
 * Reserved problem records for the Food Safety system.
 *
 * Same rationale as `planned-tire-problems.ts`: these hold only what is
 * genuinely known today — name, question, URL — so the related-problems
 * graph on `refrigerator-door-left-open-overnight` has real rows to point
 * at. `status` is 'draft', so they are not routable, not in the sitemap
 * and render as plain text ("Planned") rather than links until each is
 * actually written.
 */

interface PlannedProblem {
  slug: string;
  name: string;
  h1: string;
}

const planned: PlannedProblem[] = [
  { slug: 'fridge-not-cold-enough', name: 'Fridge Not Cold Enough', h1: 'Can I Ignore a Refrigerator That Is Not Cold Enough?' },
  { slug: 'milk-left-out', name: 'Milk Left Out', h1: 'Can I Ignore Milk That Was Left Out Too Long?' },
];

export const plannedFoodSafetyProblems: ProblemSeed[] = planned.map(({ slug, name, h1 }) => ({
  systemSlug: 'food-safety',
  slug,
  name,
  h1,
  canonicalPath: `/food-kitchen/refrigeration/food-safety/${slug}/`,
  status: 'draft',
  indexable: false,
}));
