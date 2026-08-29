import type { ProblemSeed } from '../types';

/**
 * Reserved problem records for the Suspension system.
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
  { slug: 'bouncy-ride-after-bumps', name: 'Bouncy Ride After Bumps', h1: 'Can I Ignore a Car That Keeps Bouncing After a Bump?' },
  { slug: 'leaking-shock-absorber', name: 'Leaking Shock Absorber', h1: 'Can I Ignore a Leaking Shock Absorber?' },
  { slug: 'car-sitting-lower-on-one-corner', name: 'Car Sitting Lower on One Corner', h1: 'Can I Ignore a Car That Sits Lower on One Corner?' },
];

export const plannedSuspensionProblems: ProblemSeed[] = planned.map(({ slug, name, h1 }) => ({
  systemSlug: 'suspension',
  slug,
  name,
  h1,
  canonicalPath: `/cars/suspension/${slug}/`,
  status: 'draft',
  indexable: false,
}));
