import type { ProblemSeed } from '../types';

/**
 * Reserved problem records for the Scooter Stem & Steering system.
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
  { slug: 'loose-electric-scooter-stem', name: 'Loose Electric Scooter Stem', h1: 'Can I Ignore a Loose Electric Scooter Stem?' },
  { slug: 'rattling-scooter-handlebars', name: 'Rattling Scooter Handlebars', h1: 'Can I Ignore Rattling Scooter Handlebars?' },
  { slug: 'scooter-folding-latch-play', name: 'Play in a Folding Latch', h1: 'Can I Ignore Play in a Scooter Folding Latch?' },
  { slug: 'scooter-pulls-to-one-side', name: 'Scooter Pulls to One Side', h1: 'Can I Ignore a Scooter That Pulls to One Side?' },
];

export const plannedScooterSteeringProblems: ProblemSeed[] = planned.map(({ slug, name, h1 }) => ({
  systemSlug: 'scooter-steering',
  slug,
  name,
  h1,
  canonicalPath: `/e-bikes-and-scooters/scooter-steering/${slug}/`,
  status: 'draft',
  indexable: false,
}));
