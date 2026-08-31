import type { ProblemSeed } from '../types';

/**
 * Reserved problem records for the Cat Urinary & Litter Box system.
 *
 * Same rationale as `planned-tire-problems.ts`. `cat-straining-to-pee` is
 * NOT on this list — it is being written as a real page, not reserved.
 */

interface PlannedProblem {
  slug: string;
  name: string;
  h1: string;
}

const planned: PlannedProblem[] = [
  { slug: 'cat-peeing-outside-litter-box', name: 'Cat Peeing Outside the Litter Box', h1: 'Can I Ignore My Cat Peeing Outside the Litter Box?' },
];

export const plannedCatUrinaryAndLitterBoxProblems: ProblemSeed[] = planned.map(({ slug, name, h1 }) => ({
  systemSlug: 'cat-urinary-and-litter-box',
  slug,
  name,
  h1,
  canonicalPath: `/pets/cats/urinary-and-litter-box/${slug}/`,
  status: 'draft',
  indexable: false,
}));
