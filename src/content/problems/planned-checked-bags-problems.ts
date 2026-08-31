import type { ProblemSeed } from '../types';

/**
 * Reserved problem records for the Checked Bags system.
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
  { slug: 'wrong-baggage-tag', name: 'Wrong Baggage Tag', h1: 'Can I Ignore the Wrong Destination on My Baggage Tag?' },
  { slug: 'bag-not-checked-through', name: 'Bag Not Checked Through', h1: 'Can I Ignore That My Bag Is Not Checked Through to My Final Stop?' },
];

export const plannedCheckedBagsProblems: ProblemSeed[] = planned.map(({ slug, name, h1 }) => ({
  systemSlug: 'checked-bags',
  slug,
  name,
  h1,
  canonicalPath: `/travel/luggage/checked-bags/${slug}/`,
  status: 'draft',
  indexable: false,
}));
