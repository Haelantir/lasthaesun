import type { ProblemSeed } from '../types';

/**
 * Reserved problem records for the Chargers system.
 *
 * Same rationale as `planned-tire-problems.ts`: these hold only what is
 * genuinely known today — name, question, URL — so the related-problems
 * graph on `hot-laptop-charger` has real rows to point at. `status` is
 * 'draft', so they are not routable, not in the sitemap and render as
 * plain text ("Planned") rather than links until each is actually written.
 */

interface PlannedProblem {
  slug: string;
  name: string;
  h1: string;
}

const planned: PlannedProblem[] = [
  { slug: 'damaged-laptop-charger-cable', name: 'Damaged Laptop Charger Cable', h1: 'Can I Ignore a Damaged Laptop Charging Cable?' },
  { slug: 'laptop-not-charging', name: 'Laptop Not Charging', h1: 'Can I Ignore a Laptop That Will Not Charge?' },
  { slug: 'laptop-charger-sparking', name: 'Laptop Charger Sparking', h1: 'Can I Ignore Sparks From My Laptop Charger?' },
];

export const plannedChargersProblems: ProblemSeed[] = planned.map(({ slug, name, h1 }) => ({
  systemSlug: 'chargers',
  slug,
  name,
  h1,
  canonicalPath: `/technology/computers/chargers/${slug}/`,
  status: 'draft',
  indexable: false,
}));
