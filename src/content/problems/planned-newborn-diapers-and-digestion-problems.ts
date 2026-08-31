import type { ProblemSeed } from '../types';

/**
 * Reserved problem records for the Newborn Diapers & Digestion system.
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
  { slug: 'newborn-green-poop', name: 'Newborn Green Poop', h1: 'Can I Ignore Green Poop in My Newborn’s Diaper?' },
  { slug: 'newborn-straining-to-poop', name: 'Newborn Straining to Poop', h1: 'Can I Ignore My Newborn Straining to Poop?' },
];

export const plannedNewbornDiapersAndDigestionProblems: ProblemSeed[] = planned.map(({ slug, name, h1 }) => ({
  systemSlug: 'newborn-diapers-and-digestion',
  slug,
  name,
  h1,
  canonicalPath: `/babies/newborns/diapers-and-digestion/${slug}/`,
  status: 'draft',
  indexable: false,
}));
