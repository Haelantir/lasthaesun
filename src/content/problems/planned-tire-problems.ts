import type { ProblemSeed } from '../types';

/**
 * Reserved problem records.
 *
 * These exist so the related-problems graph has real rows to point at. They hold
 * only what is genuinely known today — the name, the question, and the URL the
 * page will occupy — and nothing that would have to be invented. There is no
 * verdict here, because nobody has researched one yet, and the schema does not
 * force us to make one up.
 *
 * Because `status` is 'draft' they are:
 *   - not routable  (the path resolver only matches published rows)
 *   - not in the sitemap
 *   - not in search results
 *   - rendered as plain text in "Other Tire Problems", never as a link
 *
 * Publishing one is a content change, not a code change: fill in the editorial
 * fields, set status to 'published', re-seed. The link on this page lights up by
 * itself. See docs/content-architecture.md.
 *
 * Note what these are NOT: keyword variations of low tire pressure. Each is a
 * genuinely different problem with a different answer. "How long can I drive on
 * low tire pressure" is not on this list — it is a heading on the existing page.
 */

interface PlannedProblem {
  slug: string;
  name: string;
  h1: string;
}

const planned: PlannedProblem[] = [
  // 'nail-in-tire' graduated to its own file: src/content/problems/nail-in-tire.ts
  { slug: 'tpms-warning-light', name: 'TPMS Warning Light', h1: 'Can I Ignore a TPMS Warning Light?' },
  { slug: 'cracked-tire-sidewall', name: 'Cracked Tire Sidewall', h1: 'Can I Ignore a Cracked Tire Sidewall?' },
  { slug: 'tire-rotation', name: 'Tire Rotation', h1: 'Can I Skip Tire Rotation?' },
  { slug: 'uneven-tire-wear', name: 'Uneven Tire Wear', h1: 'Can I Ignore Uneven Tire Wear?' },
  { slug: 'wheel-vibration', name: 'Wheel Vibration', h1: 'Can I Ignore Wheel Vibration?' },
];

export const plannedTireProblems: ProblemSeed[] = planned.map(({ slug, name, h1 }) => ({
  systemSlug: 'tires',
  slug,
  name,
  h1,
  canonicalPath: `/cars/tires/${slug}/`,
  status: 'draft',
  indexable: false,
}));
