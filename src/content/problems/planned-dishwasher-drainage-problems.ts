import type { ProblemSeed } from '../types';

/**
 * Reserved problem records for the Dishwasher Drainage system.
 *
 * Drafts hold only what is genuinely known today — name, question, URL — so the
 * related-problems graph has real rows to point at. They are not routable, not
 * in the sitemap, and render as plain text ("Planned") until each is written.
 */

interface PlannedProblem {
  slug: string;
  name: string;
  h1: string;
}

const planned: PlannedProblem[] = [
  { slug: 'dishwasher-backing-up-into-sink', name: 'Dishwasher Backing Up Into the Sink', h1: 'Can I Ignore a Dishwasher That Backs Up Into the Sink?' },
  { slug: 'smelly-dishwasher', name: 'Smelly Dishwasher', h1: 'Can I Ignore a Dishwasher That Smells?' },
  { slug: 'dishwasher-drain-hose-clogged', name: 'Clogged Dishwasher Drain Hose', h1: 'Can I Ignore a Clogged Dishwasher Drain Hose?' },
];

export const plannedDishwasherDrainageProblems: ProblemSeed[] = planned.map(({ slug, name, h1 }) => ({
  systemSlug: 'drainage',
  slug,
  name,
  h1,
  canonicalPath: `/appliances/dishwashers/drainage/${slug}/`,
  status: 'draft',
  indexable: false,
}));
