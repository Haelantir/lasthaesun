import type { ProblemSeed } from '../types';

/**
 * Reserved problem records for the Bike Brakes system.
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
  { slug: 'squeaky-bike-brakes', name: 'Squeaky Bike Brakes', h1: 'Can I Ignore Squeaky Bike Brakes?' },
  { slug: 'bike-brake-lever-pulls-to-bar', name: 'Brake Lever Pulls to the Bar', h1: 'Can I Ignore a Brake Lever That Pulls to the Bar?' },
  { slug: 'worn-bike-brake-pads', name: 'Worn Bike Brake Pads', h1: 'Can I Ignore Worn Bike Brake Pads?' },
];

export const plannedBikeBrakesProblems: ProblemSeed[] = planned.map(({ slug, name, h1 }) => ({
  systemSlug: 'bike-brakes',
  slug,
  name,
  h1,
  canonicalPath: `/bicycles/brakes/${slug}/`,
  status: 'draft',
  indexable: false,
}));
