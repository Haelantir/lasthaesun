import type { ProblemSeed } from '../types';

/**
 * Reserved problem records for the Fluids system.
 *
 * Same rationale as `planned-tire-problems.ts`: these hold only what is
 * genuinely known today — name, question, URL — so the related-problems
 * graph on `oil-leak` has real rows to point at. `status` is 'draft', so
 * they are not routable, not in the sitemap and render as plain text
 * ("Planned") rather than links until each is actually written.
 */

interface PlannedProblem {
  slug: string;
  name: string;
  h1: string;
}

const planned: PlannedProblem[] = [
  { slug: 'low-engine-oil', name: 'Low Engine Oil', h1: 'Can I Ignore Low Engine Oil?' },
  { slug: 'oil-pressure-warning-light', name: 'Oil-Pressure Warning Light', h1: 'Can I Ignore an Oil-Pressure Warning Light?' },
];

export const plannedFluidsProblems: ProblemSeed[] = planned.map(({ slug, name, h1 }) => ({
  systemSlug: 'fluids',
  slug,
  name,
  h1,
  canonicalPath: `/cars/fluids/${slug}/`,
  status: 'draft',
  indexable: false,
}));
