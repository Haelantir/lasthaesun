import type { ProblemSeed } from '../types';

/**
 * Reserved problem records for the Dog Behavior & Energy system.
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
  { slug: 'dog-licking-paws-constantly', name: 'Dog Licking Paws Constantly', h1: 'Can I Ignore a Dog That Licks Its Paws All Day?' },
  { slug: 'dog-pacing-at-night', name: 'Dog Pacing at Night', h1: 'Can I Ignore a Dog That Paces at Night?' },
  { slug: 'dog-sleeping-more-than-usual', name: 'Dog Sleeping More Than Usual', h1: 'Can I Ignore a Dog That Is Sleeping More Than Usual?' },
  { slug: 'dog-trembling', name: 'Trembling Dog', h1: 'Can I Ignore a Dog That Trembles for No Clear Reason?' },
];

export const plannedDogBehaviorAndEnergyProblems: ProblemSeed[] = planned.map(({ slug, name, h1 }) => ({
  systemSlug: 'dog-behavior-and-energy',
  slug,
  name,
  h1,
  canonicalPath: `/pets/dogs/behavior-and-energy/${slug}/`,
  status: 'draft',
  indexable: false,
}));
