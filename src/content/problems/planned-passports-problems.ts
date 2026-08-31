import type { ProblemSeed } from '../types';

/**
 * Reserved problem records for the Passports system.
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
  { slug: 'passport-expiring-soon', name: 'Passport Expiring Soon', h1: 'Can I Ignore a Passport That Expires in Less Than 6 Months?' },
  { slug: 'damaged-passport', name: 'Damaged Passport', h1: 'Can I Ignore a Damaged Passport?' },
  { slug: 'passport-out-of-blank-pages', name: 'Passport Out of Blank Pages', h1: 'Can I Ignore a Passport With Almost No Blank Pages Left?' },
];

export const plannedPassportsProblems: ProblemSeed[] = planned.map(({ slug, name, h1 }) => ({
  systemSlug: 'passports',
  slug,
  name,
  h1,
  canonicalPath: `/travel/documents/passports/${slug}/`,
  status: 'draft',
  indexable: false,
}));
