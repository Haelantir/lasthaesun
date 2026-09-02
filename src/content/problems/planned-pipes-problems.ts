import type { ProblemSeed } from '../types';

/**
 * Reserved problem records for the Pipes system.
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
  { slug: 'sweating-pipes', name: 'Sweating Pipes', h1: 'Can I Ignore Pipes That Sweat in Summer?' },
  { slug: 'whistling-pipes', name: 'Whistling Pipes', h1: 'Can I Ignore Pipes That Whistle While the Water Runs?' },
  { slug: 'rattling-pipes-in-the-wall', name: 'Rattling Pipes in the Wall', h1: 'Can I Ignore Pipes That Rattle Inside the Wall?' },
  { slug: 'cold-pipes-in-a-crawl-space', name: 'Cold Pipes in a Crawl Space', h1: 'Can I Ignore Uninsulated Pipes in a Crawl Space?' },
];

export const plannedPipesProblems: ProblemSeed[] = planned.map(({ slug, name, h1 }) => ({
  systemSlug: 'pipes',
  slug,
  name,
  h1,
  canonicalPath: `/home/plumbing/pipes/${slug}/`,
  status: 'draft',
  indexable: false,
}));
