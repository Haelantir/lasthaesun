import type { ProblemSeed } from '../types';

/**
 * Reserved problem records for the E-Bike Power system.
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
  { slug: 'e-bike-cuts-out-while-riding', name: 'E-Bike Cuts Out While Riding', h1: 'Can I Ignore an E-Bike That Cuts Out While Riding?' },
  { slug: 'e-bike-assist-feels-weak', name: 'Weak E-Bike Assist', h1: 'Can I Ignore E-Bike Assist That Feels Weak?' },
  { slug: 'e-bike-motor-noise', name: 'E-Bike Motor Noise', h1: 'Can I Ignore a New Noise From an E-Bike Motor?' },
  { slug: 'e-bike-error-code', name: 'E-Bike Error Code', h1: 'Can I Ignore an Error Code on an E-Bike Display?' },
];

export const plannedEBikePowerProblems: ProblemSeed[] = planned.map(({ slug, name, h1 }) => ({
  systemSlug: 'e-bike-power',
  slug,
  name,
  h1,
  canonicalPath: `/e-bikes-and-scooters/e-bike-power/${slug}/`,
  status: 'draft',
  indexable: false,
}));
