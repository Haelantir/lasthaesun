import type { ProblemSeed } from '../types';

/**
 * Reserved problem records for the Pool Water Quality system.
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
  { slug: 'green-pool-water', name: 'Green Pool Water', h1: 'Can I Ignore Pool Water That Has Turned Green?' },
  { slug: 'low-chlorine-in-a-pool', name: 'Low Chlorine in a Pool', h1: 'Can I Ignore a Low Chlorine Reading?' },
  { slug: 'high-ph-in-a-pool', name: 'High pH in a Pool', h1: 'Can I Ignore a High pH Reading in a Pool?' },
  { slug: 'pool-losing-water', name: 'Pool Losing Water', h1: 'Can I Ignore a Pool That Keeps Losing Water?' },
];

export const plannedPoolWaterQualityProblems: ProblemSeed[] = planned.map(({ slug, name, h1 }) => ({
  systemSlug: 'pool-water-quality',
  slug,
  name,
  h1,
  canonicalPath: `/garden-and-outdoors/pools/water-quality/${slug}/`,
  status: 'draft',
  indexable: false,
}));
