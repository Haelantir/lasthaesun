import type { ProblemSeed } from '../types';

/**
 * Reserved problem records for the Transmission system.
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
  { slug: 'delayed-gear-engagement', name: 'Delayed Gear Engagement', h1: 'Can I Ignore a Delay Before the Car Engages a Gear?' },
  { slug: 'transmission-fluid-leak', name: 'Transmission Fluid Leak', h1: 'Can I Ignore a Transmission Fluid Leak?' },
  { slug: 'grinding-when-shifting', name: 'Grinding When Shifting', h1: 'Can I Ignore Grinding When the Car Shifts?' },
];

export const plannedTransmissionProblems: ProblemSeed[] = planned.map(({ slug, name, h1 }) => ({
  systemSlug: 'transmission',
  slug,
  name,
  h1,
  canonicalPath: `/cars/transmission/${slug}/`,
  status: 'draft',
  indexable: false,
}));
