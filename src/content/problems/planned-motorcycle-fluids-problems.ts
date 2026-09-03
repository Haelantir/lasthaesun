import type { ProblemSeed } from '../types';

/**
 * Reserved problem records for the Motorcycle Fluids system.
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
  { slug: 'motorcycle-oil-leak', name: 'Motorcycle Oil Leak', h1: 'Can I Ignore an Oil Leak on My Motorcycle?' },
  { slug: 'weeping-fork-seal', name: 'Weeping Fork Seal', h1: 'Can I Ignore a Weeping Fork Seal?' },
  { slug: 'dark-motorcycle-brake-fluid', name: 'Dark Brake Fluid', h1: 'Can I Ignore Brake Fluid That Has Gone Dark?' },
  { slug: 'motorcycle-coolant-smell', name: 'Coolant Smell', h1: 'Can I Ignore a Coolant Smell From My Motorcycle?' },
];

export const plannedMotorcycleFluidsProblems: ProblemSeed[] = planned.map(({ slug, name, h1 }) => ({
  systemSlug: 'motorcycle-fluids',
  slug,
  name,
  h1,
  canonicalPath: `/motorcycles/fluids/${slug}/`,
  status: 'draft',
  indexable: false,
}));
