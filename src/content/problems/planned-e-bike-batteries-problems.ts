import type { ProblemSeed } from '../types';

/**
 * Reserved problem records for the E-Bike Batteries system.
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
  { slug: 'e-bike-battery-hot-while-charging', name: 'E-Bike Battery Hot While Charging', h1: 'Can I Ignore an E-Bike Battery That Gets Hot While Charging?' },
  { slug: 'e-bike-battery-range-drop', name: 'E-Bike Battery Range Drop', h1: 'Can I Ignore a Sudden Drop in E-Bike Battery Range?' },
  { slug: 'e-bike-battery-got-wet', name: 'E-Bike Battery That Got Wet', h1: 'Can I Ignore an E-Bike Battery That Got Wet?' },
  { slug: 'swollen-e-bike-battery', name: 'Swollen E-Bike Battery', h1: 'Can I Ignore an E-Bike Battery That Looks Swollen?' },
  { slug: 'e-bike-battery-left-over-winter', name: 'E-Bike Battery Left Over Winter', h1: 'Can I Ignore an E-Bike Battery Left Flat Over Winter?' },
];

export const plannedEBikeBatteriesProblems: ProblemSeed[] = planned.map(({ slug, name, h1 }) => ({
  systemSlug: 'e-bike-batteries',
  slug,
  name,
  h1,
  canonicalPath: `/e-bikes-and-scooters/e-bike-batteries/${slug}/`,
  status: 'draft',
  indexable: false,
}));
