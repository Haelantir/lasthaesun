import type { ProblemSeed } from '../types';

/**
 * Reserved problem records for the Displays system.
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
  { slug: 'flickering-monitor', name: 'Flickering Monitor', h1: 'Can I Ignore a Monitor That Flickers?' },
  { slug: 'line-across-a-laptop-screen', name: 'Line Across a Laptop Screen', h1: 'Can I Ignore a Line Across My Laptop Screen?' },
  { slug: 'backlight-bleed-on-a-monitor', name: 'Backlight Bleed on a Monitor', h1: 'Can I Ignore Backlight Bleed Around the Edge of a Screen?' },
];

export const plannedDisplaysProblems: ProblemSeed[] = planned.map(({ slug, name, h1 }) => ({
  systemSlug: 'displays',
  slug,
  name,
  h1,
  canonicalPath: `/technology/computers/displays/${slug}/`,
  status: 'draft',
  indexable: false,
}));
