import type { ProblemSeed } from '../types';

/**
 * Reserved problem records for the Newborn Head & Skull system.
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
  { slug: 'newborn-cone-shaped-head', name: 'Cone-Shaped Head After Birth', h1: 'Can I Ignore a Cone-Shaped Head After Birth?' },
  { slug: 'newborn-soft-spot-pulsing', name: 'Pulsing Soft Spot', h1: 'Can I Ignore a Soft Spot That Pulses?' },
  { slug: 'newborn-cradle-cap', name: 'Cradle Cap', h1: 'Can I Ignore Cradle Cap on a Newborn?' },
  { slug: 'newborn-head-lag', name: 'Newborn Head Lag', h1: 'Can I Ignore a Newborn Who Cannot Hold Their Head Up Yet?' },
];

export const plannedNewbornHeadAndSkullProblems: ProblemSeed[] = planned.map(({ slug, name, h1 }) => ({
  systemSlug: 'newborn-head-and-skull',
  slug,
  name,
  h1,
  canonicalPath: `/babies/newborns/head-and-skull/${slug}/`,
  status: 'draft',
  indexable: false,
}));
