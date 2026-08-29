import type { ProblemSeed } from '../types';

/**
 * Reserved problem records for the Engine system.
 *
 * Same rationale as `planned-tire-problems.ts`: these hold only what is
 * genuinely known today — name, question, URL — so the related-problems
 * graph on `high-rpm-after-cold-start` has real rows to point at. `status`
 * is 'draft', so they are not routable, not in the sitemap and render as
 * plain text ("Planned") rather than links until each is actually written.
 */

interface PlannedProblem {
  slug: string;
  name: string;
  h1: string;
}

const planned: PlannedProblem[] = [
  { slug: 'rough-idle', name: 'Rough Idle', h1: 'Can I Ignore a Rough Idle?' },
  { slug: 'engine-rpm-surging', name: 'Engine RPM Surging', h1: 'Can I Ignore Engine RPM Surging?' },
];

export const plannedEngineProblems: ProblemSeed[] = planned.map(({ slug, name, h1 }) => ({
  systemSlug: 'engine',
  slug,
  name,
  h1,
  canonicalPath: `/cars/engine/${slug}/`,
  status: 'draft',
  indexable: false,
}));
