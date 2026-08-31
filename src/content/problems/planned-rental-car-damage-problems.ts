import type { ProblemSeed } from '../types';

/**
 * Reserved problem records for the Rental Car Damage & Returns system.
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
  { slug: 'chip-in-rental-car-windshield', name: 'Chip in a Rental Car Windshield', h1: 'Can I Ignore a Chip in a Rental Car Windshield?' },
];

export const plannedRentalCarDamageProblems: ProblemSeed[] = planned.map(({ slug, name, h1 }) => ({
  systemSlug: 'rental-car-damage',
  slug,
  name,
  h1,
  canonicalPath: `/travel/rental-cars/damage-and-returns/${slug}/`,
  status: 'draft',
  indexable: false,
}));
