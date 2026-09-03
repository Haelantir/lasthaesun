import type { ProblemSeed } from '../types';

/**
 * Reserved problem records for the Motorcycle Steering & Handling system.
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
  { slug: 'notchy-steering-head-bearings', name: 'Notchy Steering Head Bearings', h1: 'Can I Ignore Notchy Steering Head Bearings?' },
  { slug: 'motorcycle-handlebar-vibration', name: 'Handlebar Vibration', h1: 'Can I Ignore Vibration Through the Handlebars?' },
  { slug: 'motorcycle-pulls-to-one-side', name: 'Motorcycle Pulls to One Side', h1: 'Can I Ignore a Motorcycle That Pulls to One Side?' },
];

export const plannedMotorcycleSteeringProblems: ProblemSeed[] = planned.map(({ slug, name, h1 }) => ({
  systemSlug: 'motorcycle-steering',
  slug,
  name,
  h1,
  canonicalPath: `/motorcycles/steering/${slug}/`,
  status: 'draft',
  indexable: false,
}));
