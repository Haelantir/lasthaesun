import type { ProblemSeed } from '../types';

/**
 * Reserved problem records for the Scooter Brakes system.
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
  { slug: 'weak-electric-scooter-brakes', name: 'Weak Electric Scooter Brakes', h1: 'Can I Ignore Weak Brakes on an Electric Scooter?' },
  { slug: 'squealing-scooter-brakes', name: 'Squealing Scooter Brakes', h1: 'Can I Ignore Squealing Scooter Brakes?' },
  { slug: 'scooter-brake-lever-goes-soft', name: 'Soft Scooter Brake Lever', h1: 'Can I Ignore a Scooter Brake Lever That Goes Soft?' },
  { slug: 'scooter-regen-braking-weaker', name: 'Weaker Regen Braking', h1: 'Can I Ignore Regen Braking That Has Got Weaker?' },
];

export const plannedScooterBrakesProblems: ProblemSeed[] = planned.map(({ slug, name, h1 }) => ({
  systemSlug: 'scooter-brakes',
  slug,
  name,
  h1,
  canonicalPath: `/e-bikes-and-scooters/scooter-brakes/${slug}/`,
  status: 'draft',
  indexable: false,
}));
