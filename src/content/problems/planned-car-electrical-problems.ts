import type { ProblemSeed } from '../types';

/**
 * Reserved problem records for the Car Electrical system.
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
  { slug: 'battery-warning-light', name: 'Battery Warning Light', h1: 'Can I Ignore a Battery Warning Light?' },
  { slug: 'car-slow-to-start', name: 'Car Slow to Start', h1: 'Can I Ignore a Car That Is Slow to Start?' },
  { slug: 'corroded-battery-terminal', name: 'Corroded Battery Terminal', h1: 'Can I Ignore a Corroded Battery Terminal?' },
  { slug: 'dim-headlights', name: 'Dim Headlights', h1: 'Can I Ignore Headlights That Have Gone Dim?' },
];

export const plannedCarElectricalProblems: ProblemSeed[] = planned.map(({ slug, name, h1 }) => ({
  systemSlug: 'car-electrical',
  slug,
  name,
  h1,
  canonicalPath: `/cars/electrical/${slug}/`,
  status: 'draft',
  indexable: false,
}));
