import type { ProblemSeed } from '../types';

/**
 * Reserved problem records for the Scooter Tires system.
 *
 * Name, question and URL only, so the related-problems graph has real rows to
 * point at. `status` is 'draft', so they are not routable and render as plain
 * text ("Planned") until each is written.
 */

interface PlannedProblem {
  slug: string;
  name: string;
  h1: string;
}

const planned: PlannedProblem[] = [
  { slug: 'scooter-tire-losing-air', name: 'Scooter Tire Losing Air', h1: 'Can I Ignore an Electric Scooter Tire That Keeps Losing Air?' },
  { slug: 'worn-scooter-tire', name: 'Worn Scooter Tire', h1: 'Can I Ignore a Worn Electric Scooter Tire?' },
  { slug: 'cracked-solid-scooter-tire', name: 'Cracked Solid Scooter Tire', h1: 'Can I Ignore Cracks in a Solid Scooter Tire?' },
  { slug: 'scooter-tire-flat-spot', name: 'Scooter Tire Flat Spot', h1: 'Can I Ignore a Flat Spot on a Scooter Tire?' },
];

export const plannedScooterTiresProblems: ProblemSeed[] = planned.map(({ slug, name, h1 }) => ({
  systemSlug: 'scooter-tires',
  slug,
  name,
  h1,
  canonicalPath: `/e-bikes-and-scooters/scooter-tires/${slug}/`,
  status: 'draft',
  indexable: false,
}));
