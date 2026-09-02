import type { ProblemSeed } from '../types';

/**
 * Reserved problem records for the Lawn Fungus & Mushrooms system.
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
  { slug: 'fairy-ring-in-lawn', name: 'Fairy Ring in a Lawn', h1: 'Can I Ignore a Ring of Mushrooms in the Lawn?' },
  { slug: 'brown-patch-in-lawn', name: 'Brown Patch in a Lawn', h1: 'Can I Ignore a Brown Patch Spreading in the Lawn?' },
  { slug: 'moss-in-lawn', name: 'Moss in a Lawn', h1: 'Can I Ignore Moss Taking Over the Lawn?' },
  { slug: 'slime-mold-on-grass', name: 'Slime Mold on Grass', h1: 'Can I Ignore Grey Slime Mold on the Grass?' },
];

export const plannedLawnFungusProblems: ProblemSeed[] = planned.map(({ slug, name, h1 }) => ({
  systemSlug: 'lawn-fungus',
  slug,
  name,
  h1,
  canonicalPath: `/garden-and-outdoors/lawn/fungus-and-mushrooms/${slug}/`,
  status: 'draft',
  indexable: false,
}));
