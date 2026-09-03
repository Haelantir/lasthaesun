import type { ProblemSeed } from '../types';

/**
 * Reserved problem records for the Bike Wheels & Tires system.
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
  { slug: 'wobbly-bike-wheel', name: 'Wobbly Bike Wheel', h1: 'Can I Ignore a Wobbly Bike Wheel?' },
  { slug: 'cracks-in-a-bike-tire', name: 'Cracks in a Bike Tire', h1: 'Can I Ignore Cracks in a Bike Tire?' },
  { slug: 'loose-bike-spoke', name: 'Loose Bike Spoke', h1: 'Can I Ignore a Loose Bike Spoke?' },
  { slug: 'bike-tire-losing-air-slowly', name: 'Bike Tire Losing Air Slowly', h1: 'Can I Ignore a Bike Tire That Loses Air Slowly?' },
  { slug: 'play-in-a-bike-hub', name: 'Play in a Bike Hub', h1: 'Can I Ignore Play in a Bike Hub?' },
];

export const plannedBikeWheelsAndTiresProblems: ProblemSeed[] = planned.map(({ slug, name, h1 }) => ({
  systemSlug: 'bike-wheels-and-tires',
  slug,
  name,
  h1,
  canonicalPath: `/bicycles/wheels-and-tires/${slug}/`,
  status: 'draft',
  indexable: false,
}));
