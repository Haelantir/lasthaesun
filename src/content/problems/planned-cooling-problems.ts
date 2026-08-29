import type { ProblemSeed } from '../types';

/**
 * Reserved problem record for the Cooling system.
 *
 * `coolant-leak` was published (see `coolant-leak.ts`). This reserves
 * `engine-overheating` so `water-dripping-from-exhaust`'s related-problems
 * graph still has a real row to point at. Same rationale as
 * `planned-tire-problems.ts`: not routable, not in the sitemap, rendered as
 * plain text ("Planned") until it is written.
 */

export const plannedCoolingProblems: ProblemSeed[] = [
  {
    systemSlug: 'cooling',
    slug: 'engine-overheating',
    name: 'Engine Overheating',
    h1: 'Can I Ignore an Overheating Engine?',
    canonicalPath: '/cars/cooling/engine-overheating/',
    status: 'draft',
    indexable: false,
  },
];
