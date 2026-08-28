import type { ProblemSeed } from '../types';

/**
 * Reserved problem records for the Outlets system.
 *
 * Same rationale as `planned-tire-problems.ts`: these hold only what is
 * genuinely known today — name, question, URL — so the related-problems
 * graph on `warm-electrical-outlet` has real rows to point at. `status` is
 * 'draft', so they are not routable, not in the sitemap and render as
 * plain text ("Planned") rather than links until each is actually written.
 */

interface PlannedProblem {
  slug: string;
  name: string;
  h1: string;
}

const planned: PlannedProblem[] = [
  { slug: 'loose-electrical-outlet', name: 'Loose Electrical Outlet', h1: 'Can I Ignore an Outlet That Will Not Hold a Plug?' },
  { slug: 'buzzing-electrical-outlet', name: 'Buzzing Electrical Outlet', h1: 'Can I Ignore an Electrical Outlet That Buzzes?' },
  { slug: 'burning-smell-from-outlet', name: 'Burning Smell From Outlet', h1: 'Can I Ignore a Burning Smell From an Outlet?' },
];

export const plannedOutletsProblems: ProblemSeed[] = planned.map(({ slug, name, h1 }) => ({
  systemSlug: 'outlets',
  slug,
  name,
  h1,
  canonicalPath: `/home/electrical/outlets/${slug}/`,
  status: 'draft',
  indexable: false,
}));
