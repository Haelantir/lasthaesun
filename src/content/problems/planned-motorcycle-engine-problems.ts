import type { ProblemSeed } from '../types';

/**
 * Reserved problem records for the Motorcycle Engine system.
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
  { slug: 'motorcycle-pops-on-deceleration', name: 'Motorcycle Popping on Deceleration', h1: 'Can I Ignore a Motorcycle That Pops on Deceleration?' },
  { slug: 'motorcycle-running-hot', name: 'Motorcycle Running Hot', h1: 'Can I Ignore a Motorcycle That Runs Hot in Traffic?' },
  { slug: 'motorcycle-idles-rough', name: 'Rough Motorcycle Idle', h1: 'Can I Ignore a Motorcycle That Idles Rough?' },
  { slug: 'motorcycle-hard-to-start-cold', name: 'Hard Cold Start', h1: 'Can I Ignore a Motorcycle That Is Hard to Start Cold?' },
];

export const plannedMotorcycleEngineProblems: ProblemSeed[] = planned.map(({ slug, name, h1 }) => ({
  systemSlug: 'motorcycle-engine',
  slug,
  name,
  h1,
  canonicalPath: `/motorcycles/engine/${slug}/`,
  status: 'draft',
  indexable: false,
}));
