import type { ProblemSeed } from '../types';

/**
 * Reserved problem records for the Motorcycle Electrical system.
 *
 * Name, question and URL only, so the related-problems graph has real rows to
 * point at. `status` is 'draft', so they are not routable and render as plain
 * text ("Planned") until each is written.
 */

interface PlannedProblem {
  slug: string;
  name: string;
  h1: string;
}

const planned: PlannedProblem[] = [
  { slug: 'motorcycle-dim-headlight', name: 'Dim Motorcycle Headlight', h1: 'Can I Ignore a Motorcycle Headlight That Has Gone Dim?' },
  { slug: 'blown-motorcycle-fuse', name: 'Blown Motorcycle Fuse', h1: 'Can I Ignore a Motorcycle Fuse That Keeps Blowing?' },
  { slug: 'motorcycle-neutral-light-flickers', name: 'Flickering Neutral Light', h1: 'Can I Ignore a Neutral Light That Flickers?' },
];

export const plannedMotorcycleElectricalProblems: ProblemSeed[] = planned.map(({ slug, name, h1 }) => ({
  systemSlug: 'motorcycle-electrical',
  slug,
  name,
  h1,
  canonicalPath: `/motorcycles/electrical/${slug}/`,
  status: 'draft',
  indexable: false,
}));
