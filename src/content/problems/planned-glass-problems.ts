import type { ProblemSeed } from '../types';

/**
 * Reserved problem records for the Glass system.
 *
 * Same rationale as `planned-tire-problems.ts`: these hold only what is
 * genuinely known today — name, question, URL — so the related-problems
 * graph on `small-windshield-chip` has real rows to point at. `status` is
 * 'draft', so they are not routable, not in the sitemap and render as
 * plain text ("Planned") rather than links until each is actually written.
 */

interface PlannedProblem {
  slug: string;
  name: string;
  h1: string;
}

const planned: PlannedProblem[] = [
  { slug: 'cracked-windshield', name: 'Cracked Windshield', h1: 'Can I Ignore a Cracked Windshield?' },
  { slug: 'windshield-camera-warning', name: 'Windshield Camera Warning', h1: 'Can I Ignore a Windshield Camera Warning?' },
  { slug: 'windshield-wiper-streaks', name: 'Windshield Wiper Streaks', h1: 'Can I Ignore Windshield Wiper Streaks?' },
];

export const plannedGlassProblems: ProblemSeed[] = planned.map(({ slug, name, h1 }) => ({
  systemSlug: 'glass',
  slug,
  name,
  h1,
  canonicalPath: `/cars/glass/${slug}/`,
  status: 'draft',
  indexable: false,
}));
