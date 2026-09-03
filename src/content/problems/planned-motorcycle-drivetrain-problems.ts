import type { ProblemSeed } from '../types';

/**
 * Reserved problem records for the Motorcycle Chain & Clutch system.
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
  { slug: 'loose-motorcycle-chain', name: 'Loose Motorcycle Chain', h1: 'Can I Ignore a Loose Motorcycle Chain?' },
  { slug: 'slipping-motorcycle-clutch', name: 'Slipping Motorcycle Clutch', h1: 'Can I Ignore a Slipping Motorcycle Clutch?' },
  { slug: 'rusty-motorcycle-chain', name: 'Rusty Motorcycle Chain', h1: 'Can I Ignore a Rusty Motorcycle Chain?' },
  { slug: 'worn-motorcycle-sprocket', name: 'Worn Motorcycle Sprocket', h1: 'Can I Ignore a Worn Motorcycle Sprocket?' },
  { slug: 'motorcycle-clutch-lever-play', name: 'Clutch Lever Play', h1: 'Can I Ignore Play at the Clutch Lever?' },
];

export const plannedMotorcycleDrivetrainProblems: ProblemSeed[] = planned.map(({ slug, name, h1 }) => ({
  systemSlug: 'motorcycle-drivetrain',
  slug,
  name,
  h1,
  canonicalPath: `/motorcycles/drivetrain/${slug}/`,
  status: 'draft',
  indexable: false,
}));
