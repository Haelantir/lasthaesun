import type { ProblemSeed } from '../types';

/**
 * Reserved problem records for the Frost & Ice system.
 *
 * The food-side twins of these questions live under Frozen Food
 * (`ice-crystals-on-frozen-food`, `freezer-not-cold-enough`). These are the
 * appliance-side ones: what the frost says about the freezer itself. Drafts
 * hold only name, question and URL until each is written.
 */

interface PlannedProblem {
  slug: string;
  name: string;
  h1: string;
}

const planned: PlannedProblem[] = [
  { slug: 'ice-on-freezer-back-wall', name: 'Ice on the Freezer Back Wall', h1: 'Can I Ignore a Sheet of Ice on the Freezer Back Wall?' },
  { slug: 'ice-maker-freezing-up', name: 'Ice Maker Freezing Up', h1: 'Can I Ignore an Ice Maker That Keeps Freezing Up?' },
  { slug: 'water-pooling-under-crisper', name: 'Water Pooling Under the Crisper', h1: 'Can I Ignore Water Pooling Under the Crisper Drawer?' },
];

export const plannedFrostAndIceProblems: ProblemSeed[] = planned.map(({ slug, name, h1 }) => ({
  systemSlug: 'frost-and-ice',
  slug,
  name,
  h1,
  canonicalPath: `/appliances/refrigerators/frost-and-ice/${slug}/`,
  status: 'draft',
  indexable: false,
}));
