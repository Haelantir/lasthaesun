import type { ProblemSeed } from '../types';

/**
 * Reserved problem records for the Screens system.
 *
 * Same rationale as `planned-tire-problems.ts`: these hold only what is
 * genuinely known today — name, question, URL — so the related-problems
 * graph on `cracked-phone-screen` has real rows to point at. `status` is
 * 'draft', so they are not routable, not in the sitemap and render as
 * plain text ("Planned") rather than links until each is actually written.
 */

interface PlannedProblem {
  slug: string;
  name: string;
  h1: string;
}

const planned: PlannedProblem[] = [
  { slug: 'swollen-phone-battery', name: 'Swollen Phone Battery', h1: 'Can I Ignore a Swollen Phone Battery?' },
  { slug: 'phone-screen-lifting', name: 'Phone Screen Lifting', h1: 'Can I Ignore a Phone Screen Lifting From the Frame?' },
  { slug: 'black-spot-on-phone-screen', name: 'Black Spot on Phone Screen', h1: 'Can I Ignore a Black Spot on My Phone Screen?' },
  { slug: 'phone-ghost-touch', name: 'Phone Ghost Touch', h1: 'Can I Ignore Ghost Touches on My Phone Screen?' },
  { slug: 'cracked-phone-back-glass', name: 'Cracked Phone Back Glass', h1: 'Can I Ignore Cracked Glass on the Back of My Phone?' },
];

export const plannedScreensProblems: ProblemSeed[] = planned.map(({ slug, name, h1 }) => ({
  systemSlug: 'screens',
  slug,
  name,
  h1,
  canonicalPath: `/technology/phones/screens/${slug}/`,
  status: 'draft',
  indexable: false,
}));
