import type { ProblemSeed } from '../types';

/**
 * Reserved problem records for the Cockroaches system.
 *
 * Same rationale as `planned-tire-problems.ts`: name, question and URL only, so
 * the related-problems graph has real rows to point at before the pages exist.
 */

interface PlannedProblem {
  slug: string;
  name: string;
  h1: string;
}

const planned: PlannedProblem[] = [
  { slug: 'cockroach-in-the-bathroom', name: 'Cockroach in the Bathroom', h1: 'Can I Ignore a Cockroach in the Bathroom?' },
  { slug: 'dead-cockroaches-indoors', name: 'Dead Cockroaches Indoors', h1: 'Can I Ignore Dead Cockroaches I Keep Finding?' },
  { slug: 'cockroach-droppings', name: 'Cockroach Droppings', h1: 'Can I Ignore Cockroach Droppings in a Cupboard?' },
  { slug: 'cockroach-in-daylight', name: 'Cockroach Out in Daylight', h1: 'Can I Ignore a Cockroach Walking Around in Daylight?' },
];

export const plannedCockroachesProblems: ProblemSeed[] = planned.map(({ slug, name, h1 }) => ({
  systemSlug: 'cockroaches',
  slug,
  name,
  h1,
  canonicalPath: `/home/pests/cockroaches/${slug}/`,
  status: 'draft',
  indexable: false,
}));
