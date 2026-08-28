import type { ProblemSeed } from '../types';

/**
 * Reserved problem records for the Drains system.
 *
 * Same rationale as `planned-tire-problems.ts`: these hold only what is
 * genuinely known today — name, question, URL — so the related-problems
 * graph on `slow-drain` has real rows to point at. `status` is 'draft', so
 * they are not routable, not in the sitemap and render as plain text
 * ("Planned") rather than links until each is actually written.
 */

interface PlannedProblem {
  slug: string;
  name: string;
  h1: string;
}

const planned: PlannedProblem[] = [
  { slug: 'completely-clogged-drain', name: 'Completely Clogged Drain', h1: 'Can I Ignore a Completely Clogged Drain?' },
  { slug: 'drain-gurgling', name: 'Drain Gurgling', h1: 'Can I Ignore a Drain That Keeps Gurgling?' },
  { slug: 'sewage-backup', name: 'Sewage Backup', h1: 'Can I Ignore Sewage Backing Up Through a Drain?' },
  { slug: 'bad-smell-from-drain', name: 'Bad Smell From Drain', h1: 'Can I Ignore a Bad Smell Coming From a Drain?' },
];

export const plannedDrainsProblems: ProblemSeed[] = planned.map(({ slug, name, h1 }) => ({
  systemSlug: 'drains',
  slug,
  name,
  h1,
  canonicalPath: `/home/plumbing/drains/${slug}/`,
  status: 'draft',
  indexable: false,
}));
