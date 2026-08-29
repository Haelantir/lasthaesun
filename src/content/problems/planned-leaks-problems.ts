import type { ProblemSeed } from '../types';

/**
 * Reserved problem records for the Leaks system.
 *
 * Same rationale as `planned-tire-problems.ts`: these hold only what is
 * genuinely known today — name, question, URL — so the related-problems
 * graph on `small-leak-under-sink` has real rows to point at. `status` is
 * 'draft', so they are not routable, not in the sitemap and render as
 * plain text ("Planned") rather than links until each is actually written.
 */

interface PlannedProblem {
  slug: string;
  name: string;
  h1: string;
}

const planned: PlannedProblem[] = [
  { slug: 'leaking-p-trap', name: 'Leaking P-Trap', h1: 'Can I Ignore a Leaking P-Trap Under the Sink?' },
  { slug: 'dripping-shutoff-valve', name: 'Dripping Shutoff Valve', h1: 'Can I Ignore a Dripping Water Shutoff Valve?' },
  { slug: 'water-damaged-cabinet', name: 'Water-Damaged Cabinet', h1: 'Can I Ignore Water Damage Inside a Sink Cabinet?' },
  { slug: 'mold-under-sink', name: 'Mold Under Sink', h1: 'Can I Ignore Mold Growing Under the Sink?' },
];

export const plannedLeaksProblems: ProblemSeed[] = planned.map(({ slug, name, h1 }) => ({
  systemSlug: 'leaks',
  slug,
  name,
  h1,
  canonicalPath: `/home/plumbing/leaks/${slug}/`,
  status: 'draft',
  indexable: false,
}));
