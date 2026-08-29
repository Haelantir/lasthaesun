import type { ProblemSeed } from '../types';

/**
 * Reserved problem records for the Steering system.
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
  { slug: 'loose-steering-wheel', name: 'Loose Steering Wheel', h1: 'Can I Ignore a Steering Wheel With Play in It?' },
  { slug: 'whining-noise-when-turning', name: 'Whining Noise When Turning', h1: 'Can I Ignore a Whining Noise When I Turn the Wheel?' },
  { slug: 'crooked-steering-wheel', name: 'Crooked Steering Wheel', h1: 'Can I Ignore a Steering Wheel That Sits Crooked?' },
];

export const plannedSteeringProblems: ProblemSeed[] = planned.map(({ slug, name, h1 }) => ({
  systemSlug: 'steering',
  slug,
  name,
  h1,
  canonicalPath: `/cars/steering/${slug}/`,
  status: 'draft',
  indexable: false,
}));
