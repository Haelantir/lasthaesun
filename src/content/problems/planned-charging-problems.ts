import type { ProblemSeed } from '../types';

/**
 * Reserved problem records for the phone Charging system.
 *
 * Name, question and URL only, so the related-problems graph on
 * `frayed-charging-cable` points at real rows. `status` is 'draft', so they
 * are not routable and render as plain text ("Planned") until each is written.
 */

interface PlannedProblem {
  slug: string;
  name: string;
  h1: string;
}

const planned: PlannedProblem[] = [
  { slug: 'phone-not-charging', name: 'Phone Not Charging', h1: 'Can I Ignore a Phone That Charges Only Sometimes?' },
  { slug: 'hot-phone-while-charging', name: 'Hot Phone While Charging', h1: 'Can I Ignore a Phone That Gets Hot While Charging?' },
  { slug: 'loose-charging-port', name: 'Loose Charging Port', h1: 'Can I Ignore a Charging Port That Will Not Hold the Cable?' },
  { slug: 'cheap-third-party-charger', name: 'Cheap Third-Party Charger', h1: 'Can I Ignore Which Charger I Use?' },
  { slug: 'phone-charges-slowly', name: 'Phone Charges Slowly', h1: 'Can I Ignore a Phone That Charges Slowly?' },
];

export const plannedChargingProblems: ProblemSeed[] = planned.map(({ slug, name, h1 }) => ({
  systemSlug: 'charging',
  slug,
  name,
  h1,
  canonicalPath: `/technology/phones/charging/${slug}/`,
  status: 'draft',
  indexable: false,
}));
