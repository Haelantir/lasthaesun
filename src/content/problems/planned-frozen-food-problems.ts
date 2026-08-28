import type { ProblemSeed } from '../types';

/**
 * Reserved problem records for the Frozen Food system.
 *
 * Same rationale as `planned-tire-problems.ts`: these hold only what is
 * genuinely known today — name, question, URL — so the related-problems
 * graph on `freezer-burn` has real rows to point at. `status` is 'draft',
 * so they are not routable, not in the sitemap and render as plain text
 * ("Planned") rather than links until each is actually written.
 */

interface PlannedProblem {
  slug: string;
  name: string;
  h1: string;
}

const planned: PlannedProblem[] = [
  { slug: 'freezer-door-left-open', name: 'Freezer Door Left Open', h1: 'Can I Ignore a Freezer Door Left Open Overnight?' },
  { slug: 'partially-thawed-frozen-food', name: 'Partially Thawed Frozen Food', h1: 'Can I Ignore Frozen Food That Partially Thawed?' },
  { slug: 'ice-crystals-on-frozen-food', name: 'Ice Crystals on Frozen Food', h1: 'Can I Ignore Ice Crystals on Frozen Food?' },
  { slug: 'old-frozen-food', name: 'Old Frozen Food', h1: 'Can I Ignore Food That Has Been Frozen for a Long Time?' },
  { slug: 'freezer-not-cold-enough', name: 'Freezer Not Cold Enough', h1: 'Can I Ignore a Freezer That Is Not Cold Enough?' },
];

export const plannedFrozenFoodProblems: ProblemSeed[] = planned.map(({ slug, name, h1 }) => ({
  systemSlug: 'frozen-food',
  slug,
  name,
  h1,
  canonicalPath: `/food-kitchen/food-storage/frozen-food/${slug}/`,
  status: 'draft',
  indexable: false,
}));
