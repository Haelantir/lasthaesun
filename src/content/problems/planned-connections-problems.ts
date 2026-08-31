import type { ProblemSeed } from '../types';

/**
 * Reserved problem records for the Connections system.
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
  { slug: 'short-layover', name: 'Short Layover', h1: 'Can I Ignore a Short Layover Between Flights?' },
  { slug: 'connection-on-separate-tickets', name: 'Connection on Separate Tickets', h1: 'Can I Ignore That My Connection Is on a Separate Ticket?' },
];

export const plannedConnectionsProblems: ProblemSeed[] = planned.map(({ slug, name, h1 }) => ({
  systemSlug: 'connections',
  slug,
  name,
  h1,
  canonicalPath: `/travel/air-travel/connections/${slug}/`,
  status: 'draft',
  indexable: false,
}));
