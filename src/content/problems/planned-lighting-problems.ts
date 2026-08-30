import type { ProblemSeed } from '../types';

/**
 * Reserved problem records for the Lighting system.
 *
 * Same rationale as `planned-tire-problems.ts`: these hold only what is
 * genuinely known today — name, question, URL — so the related-problems
 * graph on `flickering-light` has real rows to point at. `status` is
 * 'draft', so they are not routable, not in the sitemap and render as
 * plain text ("Planned") rather than links until each is actually written.
 */

interface PlannedProblem {
  slug: string;
  name: string;
  h1: string;
}

const planned: PlannedProblem[] = [
  { slug: 'buzzing-light-switch', name: 'Buzzing Light Switch', h1: 'Can I Ignore a Buzzing Light Switch?' },
  { slug: 'light-bulb-keeps-burning-out', name: 'Light Bulb Keeps Burning Out', h1: 'Can I Ignore a Light Bulb That Keeps Burning Out?' },
  { slug: 'dimmer-switch-hot', name: 'Dimmer Switch Hot', h1: 'Can I Ignore a Dimmer Switch That Feels Hot?' },
];

export const plannedLightingProblems: ProblemSeed[] = planned.map(({ slug, name, h1 }) => ({
  systemSlug: 'lighting',
  slug,
  name,
  h1,
  canonicalPath: `/home/electrical/lighting/${slug}/`,
  status: 'draft',
  indexable: false,
}));
