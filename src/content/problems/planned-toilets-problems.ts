import type { ProblemSeed } from '../types';

/**
 * Reserved problem records for the Toilets system.
 *
 * Same rationale as `planned-tire-problems.ts`: these hold only what is
 * genuinely known today — name, question, URL — so the related-problems
 * graph on `toilet-keeps-running` has real rows to point at. `status` is
 * 'draft', so they are not routable, not in the sitemap and render as
 * plain text ("Planned") rather than links until each is actually written.
 */

interface PlannedProblem {
  slug: string;
  name: string;
  h1: string;
}

const planned: PlannedProblem[] = [
  { slug: 'toilet-wont-flush', name: "Toilet Won't Flush", h1: 'Can I Ignore a Toilet That Will Not Flush?' },
  { slug: 'clogged-toilet', name: 'Clogged Toilet', h1: 'Can I Ignore a Toilet That Keeps Clogging?' },
  { slug: 'toilet-water-rising', name: 'Toilet Water Rising', h1: 'Can I Ignore Rising Water in the Toilet Bowl?' },
  { slug: 'water-around-toilet-base', name: 'Water Around Toilet Base', h1: 'Can I Ignore Water Leaking Around the Toilet Base?' },
  { slug: 'toilet-gurgling', name: 'Toilet Gurgling', h1: 'Can I Ignore a Toilet That Keeps Gurgling?' },
];

export const plannedToiletsProblems: ProblemSeed[] = planned.map(({ slug, name, h1 }) => ({
  systemSlug: 'toilets',
  slug,
  name,
  h1,
  canonicalPath: `/home/plumbing/toilets/${slug}/`,
  status: 'draft',
  indexable: false,
}));
