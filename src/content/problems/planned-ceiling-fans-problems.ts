import type { ProblemSeed } from '../types';

/**
 * Reserved problem records for the Ceiling Fans system.
 *
 * Same rationale as `planned-tire-problems.ts`: name, question and URL only, so
 * the related-problems graph has real rows to point at before the pages exist.
 */

interface PlannedProblem {
  slug: string;
  name: string;
  h1: string;
}

const planned: PlannedProblem[] = [
  { slug: 'ceiling-fan-clicking', name: 'Clicking Ceiling Fan', h1: 'Can I Ignore a Ceiling Fan That Clicks Every Turn?' },
  { slug: 'ceiling-fan-slowed-down', name: 'Ceiling Fan Running Slower', h1: 'Can I Ignore a Ceiling Fan That Has Slowed Down?' },
  { slug: 'ceiling-fan-light-flickering', name: 'Flickering Ceiling Fan Light', h1: 'Can I Ignore a Ceiling Fan Light That Flickers?' },
  { slug: 'ceiling-fan-humming', name: 'Humming Ceiling Fan', h1: 'Can I Ignore a Ceiling Fan That Hums?' },
];

export const plannedCeilingFansProblems: ProblemSeed[] = planned.map(({ slug, name, h1 }) => ({
  systemSlug: 'ceiling-fans',
  slug,
  name,
  h1,
  canonicalPath: `/home/electrical/ceiling-fans/${slug}/`,
  status: 'draft',
  indexable: false,
}));
