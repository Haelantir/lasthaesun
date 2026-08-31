import type { ProblemSeed } from '../types';

/**
 * Reserved problem records for the Newborn Breathing & Sounds system.
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
  { slug: 'newborn-stuffy-nose', name: 'Newborn Stuffy Nose', h1: 'Can I Ignore My Newborn’s Stuffy Nose?' },
];

export const plannedNewbornBreathingAndSoundsProblems: ProblemSeed[] = planned.map(({ slug, name, h1 }) => ({
  systemSlug: 'newborn-breathing-and-sounds',
  slug,
  name,
  h1,
  canonicalPath: `/babies/newborns/breathing-and-sounds/${slug}/`,
  status: 'draft',
  indexable: false,
}));
