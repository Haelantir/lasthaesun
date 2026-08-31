import type { ProblemSeed } from '../types';

/**
 * Reserved problem records for the Tickets & Check-In system.
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
  { slug: 'wrong-date-on-flight-booking', name: 'Wrong Date on a Flight Booking', h1: 'Can I Ignore a Wrong Date on My Flight Booking?' },
];

export const plannedTicketsAndCheckInProblems: ProblemSeed[] = planned.map(({ slug, name, h1 }) => ({
  systemSlug: 'tickets-and-check-in',
  slug,
  name,
  h1,
  canonicalPath: `/travel/air-travel/tickets-and-check-in/${slug}/`,
  status: 'draft',
  indexable: false,
}));
