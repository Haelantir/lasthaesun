import type { ProblemSeed } from '../types';

/**
 * Reserved problem records for the Dog Mobility system.
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
  { slug: 'dog-stiff-after-lying-down', name: 'Dog Stiff After Lying Down', h1: 'Can I Ignore a Dog That Is Stiff After Getting Up?' },
  { slug: 'dog-reluctant-to-jump', name: 'Dog Reluctant to Jump', h1: 'Can I Ignore a Dog That Will Not Jump on the Sofa Anymore?' },
  { slug: 'dog-shaking-a-paw', name: 'Dog Shaking a Paw', h1: 'Can I Ignore a Dog That Keeps Shaking One Paw?' },
];

export const plannedDogMobilityProblems: ProblemSeed[] = planned.map(({ slug, name, h1 }) => ({
  systemSlug: 'dog-mobility',
  slug,
  name,
  h1,
  canonicalPath: `/pets/dogs/mobility/${slug}/`,
  status: 'draft',
  indexable: false,
}));
