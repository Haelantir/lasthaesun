import type { ProblemSeed } from '../types';

/**
 * Reserved problem record for the Cooling system.
 *
 * The Cooling system itself is still `status: 'draft'` in taxonomy.ts — this
 * record reserves `coolant-leak` under it purely so
 * `water-dripping-from-exhaust`'s related-problems graph has a real row to
 * point at. Same rationale as `planned-tire-problems.ts`: not routable, not
 * in the sitemap, rendered as plain text ("Planned") until it is written and
 * the Cooling system itself is published.
 */

export const plannedCoolingProblems: ProblemSeed[] = [
  {
    systemSlug: 'cooling',
    slug: 'coolant-leak',
    name: 'Coolant Leak',
    h1: 'Can I Ignore a Coolant Leak?',
    canonicalPath: '/cars/cooling/coolant-leak/',
    status: 'draft',
    indexable: false,
  },
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
