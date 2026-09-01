import type { ProblemSeed } from '../types';

/**
 * Reserved problem records for the Gas Burners system.
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
  { slug: 'gas-burner-wont-light', name: 'Gas Burner Will Not Light', h1: 'Can I Ignore a Gas Burner That Will Not Light?' },
  { slug: 'gas-stove-keeps-clicking', name: 'Gas Stove Keeps Clicking', h1: 'Can I Ignore a Gas Stove That Keeps Clicking?' },
];

export const plannedGasBurnersProblems: ProblemSeed[] = planned.map(({ slug, name, h1 }) => ({
  systemSlug: 'gas-burners',
  slug,
  name,
  h1,
  canonicalPath: `/appliances/stoves-and-ovens/gas-burners/${slug}/`,
  status: 'draft',
  indexable: false,
}));
