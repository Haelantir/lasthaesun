import type { ProblemSeed } from '../types';

/**
 * Reserved problem records for the Alarms system.
 *
 * Same rationale as `planned-tire-problems.ts`: these hold only what is
 * genuinely known today — name, question, URL — so the related-problems
 * graph on `chirping-smoke-alarm` has real rows to point at. `status` is
 * 'draft', so they are not routable, not in the sitemap and render as plain
 * text ("Planned") rather than links until each is actually written.
 */

interface PlannedProblem {
  slug: string;
  name: string;
  h1: string;
}

const planned: PlannedProblem[] = [
  { slug: 'co-alarm-beeping', name: 'CO Alarm Beeping', h1: 'Can I Ignore a Carbon Monoxide Alarm That Beeps?' },
  { slug: 'expired-smoke-alarm', name: 'Expired Smoke Alarm', h1: 'Can I Ignore a Smoke Alarm Past Its Replacement Date?' },
  { slug: 'smoke-alarm-goes-off-cooking', name: 'Smoke Alarm Goes Off When Cooking', h1: 'Can I Ignore a Smoke Alarm That Goes Off Every Time I Cook?' },
  { slug: 'no-smoke-alarm-in-bedroom', name: 'No Smoke Alarm in a Bedroom', h1: 'Can I Ignore a Bedroom With No Smoke Alarm?' },
  { slug: 'smoke-alarm-wont-stop-beeping', name: 'Smoke Alarm Will Not Stop Beeping', h1: 'Can I Ignore a Smoke Alarm That Will Not Reset?' },
];

export const plannedAlarmsProblems: ProblemSeed[] = planned.map(({ slug, name, h1 }) => ({
  systemSlug: 'alarms',
  slug,
  name,
  h1,
  canonicalPath: `/home/safety/alarms/${slug}/`,
  status: 'draft',
  indexable: false,
}));
