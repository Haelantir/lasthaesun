import type { ProblemSeed } from '../types';

/**
 * Reserved problem records for the Bike Drivetrain system.
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
  { slug: 'dry-bike-chain', name: 'Dry Bike Chain', h1: 'Can I Ignore a Dry Bike Chain?' },
  { slug: 'rusty-bike-chain', name: 'Rusty Bike Chain', h1: 'Can I Ignore a Rusty Bike Chain?' },
  { slug: 'bike-gears-wont-shift-cleanly', name: 'Gears Will Not Shift Cleanly', h1: 'Can I Ignore Gears That Will Not Shift Cleanly?' },
];

export const plannedBikeDrivetrainProblems: ProblemSeed[] = planned.map(({ slug, name, h1 }) => ({
  systemSlug: 'bike-drivetrain',
  slug,
  name,
  h1,
  canonicalPath: `/bicycles/drivetrain/${slug}/`,
  status: 'draft',
  indexable: false,
}));
