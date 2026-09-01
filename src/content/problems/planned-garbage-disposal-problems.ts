import type { ProblemSeed } from '../types';

/**
 * Reserved problem records for the Garbage Disposal Jams & Clogs system.
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
  { slug: 'garbage-disposal-wont-turn-on', name: 'Garbage Disposal Will Not Turn On', h1: 'Can I Ignore a Garbage Disposal That Will Not Turn On?' },
  { slug: 'garbage-disposal-draining-slowly', name: 'Garbage Disposal Draining Slowly', h1: 'Can I Ignore a Garbage Disposal That Drains Slowly?' },
  { slug: 'something-metal-in-garbage-disposal', name: 'Something Metal in the Garbage Disposal', h1: 'Can I Ignore Something Metal That Fell Into the Garbage Disposal?' },
];

export const plannedGarbageDisposalProblems: ProblemSeed[] = planned.map(({ slug, name, h1 }) => ({
  systemSlug: 'jams-and-clogs',
  slug,
  name,
  h1,
  canonicalPath: `/appliances/garbage-disposals/jams-and-clogs/${slug}/`,
  status: 'draft',
  indexable: false,
}));
