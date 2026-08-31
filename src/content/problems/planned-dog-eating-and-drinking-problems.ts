import type { ProblemSeed } from '../types';

/**
 * Reserved problem records for the Dog Eating & Drinking system.
 *
 * Same rationale as `planned-tire-problems.ts`: these hold only what is
 * genuinely known today — name, question, URL — so the related-problems
 * graph on the Dogs eating/drinking pages has real rows to point at.
 * `status` is 'draft', so they are not routable, not in the sitemap and
 * render as plain text ("Planned") rather than links until each is
 * actually written.
 */

interface PlannedProblem {
  slug: string;
  name: string;
  h1: string;
}

const planned: PlannedProblem[] = [
];

export const plannedDogEatingAndDrinkingProblems: ProblemSeed[] = planned.map(({ slug, name, h1 }) => ({
  systemSlug: 'dog-eating-and-drinking',
  slug,
  name,
  h1,
  canonicalPath: `/pets/dogs/eating-and-drinking/${slug}/`,
  status: 'draft',
  indexable: false,
}));
