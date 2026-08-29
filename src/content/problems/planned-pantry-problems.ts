import type { ProblemSeed } from '../types';

/**
 * Reserved problem records for the Pantry system.
 *
 * Name, question and URL only, so the related-problems graph on
 * `dented-can` points at real rows. `status` is 'draft', so they are not
 * routable and render as plain text ("Planned") until each is written.
 */

interface PlannedProblem {
  slug: string;
  name: string;
  h1: string;
}

const planned: PlannedProblem[] = [
  { slug: 'bulging-can', name: 'Bulging Can', h1: 'Can I Ignore a Can With a Bulging Lid?' },
  { slug: 'rusty-can', name: 'Rusty Can', h1: 'Can I Ignore Rust on a Food Can?' },
  { slug: 'expired-canned-food', name: 'Expired Canned Food', h1: 'Can I Ignore the Date on a Can of Food?' },
  { slug: 'can-that-hisses-when-opened', name: 'Can That Hisses When Opened', h1: 'Can I Ignore a Can That Hisses or Spurts When Opened?' },
  { slug: 'food-left-in-an-open-can', name: 'Food Left in an Open Can', h1: 'Can I Ignore Food Stored in an Opened Can?' },
];

export const plannedPantryProblems: ProblemSeed[] = planned.map(({ slug, name, h1 }) => ({
  systemSlug: 'pantry',
  slug,
  name,
  h1,
  canonicalPath: `/food-kitchen/food-storage/pantry/${slug}/`,
  status: 'draft',
  indexable: false,
}));
