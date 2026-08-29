import type { ProblemSeed } from '../types';

/**
 * Reserved problem records for the Helmets system.
 *
 * Name, question and URL only, so the related-problems graph on
 * `cracked-bike-helmet` points at real rows. `status` is 'draft', so they are
 * not routable and render as plain text ("Planned") until each is written.
 */

interface PlannedProblem {
  slug: string;
  name: string;
  h1: string;
}

const planned: PlannedProblem[] = [
  { slug: 'old-bike-helmet', name: 'Old Bike Helmet', h1: 'Can I Ignore How Old My Bike Helmet Is?' },
  { slug: 'dropped-bike-helmet', name: 'Dropped Bike Helmet', h1: 'Can I Ignore a Helmet I Dropped on the Ground?' },
  { slug: 'loose-helmet-straps', name: 'Loose Helmet Straps', h1: 'Can I Ignore Helmet Straps That Will Not Stay Tight?' },
  { slug: 'secondhand-bike-helmet', name: 'Secondhand Bike Helmet', h1: 'Can I Ignore the History of a Secondhand Helmet?' },
  { slug: 'helmet-too-big-for-a-child', name: 'Helmet Too Big for a Child', h1: 'Can I Ignore a Helmet That Is Too Big for My Child?' },
];

export const plannedHelmetsProblems: ProblemSeed[] = planned.map(({ slug, name, h1 }) => ({
  systemSlug: 'helmets',
  slug,
  name,
  h1,
  canonicalPath: `/bicycles/helmets/${slug}/`,
  status: 'draft',
  indexable: false,
}));
