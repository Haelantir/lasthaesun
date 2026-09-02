import type { ProblemSeed } from '../types';

/**
 * Reserved problem records for the Refrigerator Noises system.
 *
 * Same rationale as `planned-tire-problems.ts`: these hold only what is
 * genuinely known today — name, question, URL — so the related-problems graph
 * has real rows to point at. `status` is 'draft', so they are not routable, not
 * in the sitemap and render as plain text ("Planned") rather than links until
 * each is actually written.
 */

interface PlannedProblem {
  slug: string;
  name: string;
  h1: string;
}

const planned: PlannedProblem[] = [
  { slug: 'buzzing-refrigerator', name: 'Buzzing Refrigerator', h1: 'Can I Ignore a Refrigerator That Makes a Loud Buzzing Noise?' },
  { slug: 'refrigerator-clicking-on-and-off', name: 'Refrigerator Clicking On and Off', h1: 'Can I Ignore a Refrigerator That Keeps Clicking On and Off?' },
  { slug: 'refrigerator-rattling', name: 'Rattling Refrigerator', h1: 'Can I Ignore a Refrigerator That Rattles?' },
];

export const plannedRefrigeratorNoisesProblems: ProblemSeed[] = planned.map(({ slug, name, h1 }) => ({
  systemSlug: 'noises',
  slug,
  name,
  h1,
  canonicalPath: `/appliances/refrigerators/noises/${slug}/`,
  status: 'draft',
  indexable: false,
}));
