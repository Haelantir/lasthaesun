import type { ProblemSeed } from '../types';

/**
 * Reserved problem records for the Walls system.
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
  { slug: 'nail-pops-in-drywall', name: 'Nail Pops in Drywall', h1: 'Can I Ignore Nail Pops in a Drywall Wall?' },
  { slug: 'bulging-drywall', name: 'Bulging Drywall', h1: 'Can I Ignore a Wall That Bulges Outward?' },
  { slug: 'stain-on-a-wall', name: 'Stain on a Wall', h1: 'Can I Ignore a Brown Stain on a Wall?' },
  { slug: 'gap-between-wall-and-ceiling', name: 'Gap Between Wall and Ceiling', h1: 'Can I Ignore a Gap Where the Wall Meets the Ceiling?' },
];

export const plannedWallsProblems: ProblemSeed[] = planned.map(({ slug, name, h1 }) => ({
  systemSlug: 'walls',
  slug,
  name,
  h1,
  canonicalPath: `/home/structure/walls/${slug}/`,
  status: 'draft',
  indexable: false,
}));
