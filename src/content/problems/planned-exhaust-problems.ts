import type { ProblemSeed } from '../types';

/**
 * Reserved problem records for the Exhaust system.
 *
 * Same rationale as `planned-tire-problems.ts`: these hold only what is
 * genuinely known today — name, question, URL — so the related-problems
 * graph on `water-dripping-from-exhaust` has real rows to point at. `status`
 * is 'draft', so they are not routable, not in the sitemap and render as
 * plain text ("Planned") rather than links until each is actually written.
 */

interface PlannedProblem {
  slug: string;
  name: string;
  h1: string;
}

const planned: PlannedProblem[] = [
  { slug: 'exhaust-leak', name: 'Exhaust Leak', h1: 'Can I Ignore an Exhaust Leak?' },
  { slug: 'blue-smoke-from-exhaust', name: 'Blue Smoke From Exhaust', h1: 'Can I Ignore Blue Smoke From My Exhaust?' },
];

export const plannedExhaustProblems: ProblemSeed[] = planned.map(({ slug, name, h1 }) => ({
  systemSlug: 'exhaust',
  slug,
  name,
  h1,
  canonicalPath: `/cars/exhaust/${slug}/`,
  status: 'draft',
  indexable: false,
}));
