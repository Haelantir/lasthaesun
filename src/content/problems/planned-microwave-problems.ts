import type { ProblemSeed } from '../types';

/**
 * Reserved problem records for the Microwave Sparking & Damage system.
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
  { slug: 'burning-smell-from-microwave', name: 'Burning Smell From the Microwave', h1: 'Can I Ignore a Burning Smell From the Microwave?' },
  { slug: 'chipped-paint-inside-microwave', name: 'Chipped Paint Inside the Microwave', h1: 'Can I Ignore Chipped Paint Inside the Microwave?' },
  { slug: 'damaged-microwave-door-seal', name: 'Damaged Microwave Door Seal', h1: 'Can I Ignore a Damaged Microwave Door Seal?' },
];

export const plannedMicrowaveProblems: ProblemSeed[] = planned.map(({ slug, name, h1 }) => ({
  systemSlug: 'sparking-and-damage',
  slug,
  name,
  h1,
  canonicalPath: `/appliances/microwaves/sparking-and-damage/${slug}/`,
  status: 'draft',
  indexable: false,
}));
