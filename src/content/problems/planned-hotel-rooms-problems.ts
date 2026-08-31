import type { ProblemSeed } from '../types';

/**
 * Reserved problem records for the Hotel Rooms system.
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
  { slug: 'bed-bugs-in-hotel-room', name: 'Bed Bugs in a Hotel Room', h1: 'Can I Ignore Signs of Bed Bugs in a Hotel Room?' },
  { slug: 'hotel-room-smells-like-mold', name: 'Hotel Room Smells Like Mold', h1: 'Can I Ignore a Hotel Room That Smells Like Mold?' },
  { slug: 'stain-on-hotel-bedding', name: 'Stain on Hotel Bedding', h1: 'Can I Ignore a Stain on the Hotel Bedding?' },
];

export const plannedHotelRoomsProblems: ProblemSeed[] = planned.map(({ slug, name, h1 }) => ({
  systemSlug: 'hotel-rooms',
  slug,
  name,
  h1,
  canonicalPath: `/travel/lodging/hotel-rooms/${slug}/`,
  status: 'draft',
  indexable: false,
}));
