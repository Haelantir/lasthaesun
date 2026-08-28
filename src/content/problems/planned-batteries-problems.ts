import type { ProblemSeed } from '../types';

/**
 * Reserved problem records for the (laptop) Batteries system.
 *
 * Same rationale as `planned-tire-problems.ts`: these hold only what is
 * genuinely known today — name, question, URL — so the related-problems
 * graph on `swollen-laptop-battery` has real rows to point at. `status` is
 * 'draft', so they are not routable, not in the sitemap and render as
 * plain text ("Planned") rather than links until each is actually written.
 */

interface PlannedProblem {
  slug: string;
  name: string;
  h1: string;
}

const planned: PlannedProblem[] = [
  { slug: 'laptop-trackpad-lifting', name: 'Laptop Trackpad Lifting', h1: 'Can I Ignore a Laptop Trackpad That Is Lifting?' },
  { slug: 'laptop-overheating', name: 'Laptop Overheating', h1: 'Can I Ignore a Laptop That Keeps Overheating?' },
  { slug: 'laptop-battery-draining-fast', name: 'Laptop Battery Draining Fast', h1: 'Can I Ignore a Laptop Battery That Drains Quickly?' },
  { slug: 'laptop-case-bulging', name: 'Laptop Case Bulging', h1: 'Can I Ignore a Laptop Case That Is Bulging?' },
];

export const plannedBatteriesProblems: ProblemSeed[] = planned.map(({ slug, name, h1 }) => ({
  systemSlug: 'batteries',
  slug,
  name,
  h1,
  canonicalPath: `/technology/computers/batteries/${slug}/`,
  status: 'draft',
  indexable: false,
}));
