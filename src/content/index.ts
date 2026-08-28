import type { ProblemSeed } from './types';
import { highRpmAfterColdStart } from './problems/high-rpm-after-cold-start';
import { lowTirePressure } from './problems/low-tire-pressure';
import { nailInTire } from './problems/nail-in-tire';
import { plannedCoolingProblems } from './problems/planned-cooling-problems';
import { plannedEngineProblems } from './problems/planned-engine-problems';
import { plannedExhaustProblems } from './problems/planned-exhaust-problems';
import { plannedTireProblems } from './problems/planned-tire-problems';
import { waterDrippingFromExhaust } from './problems/water-dripping-from-exhaust';

export { domains, objectCategories, systems } from './taxonomy';

/**
 * Every problem record in the repository.
 *
 * Adding the site's next decision means adding one file here and one line to
 * this array. No route, no page component and no layout code changes.
 */
export const problems: ProblemSeed[] = [
  lowTirePressure,
  nailInTire,
  waterDrippingFromExhaust,
  highRpmAfterColdStart,
  ...plannedTireProblems,
  ...plannedExhaustProblems,
  ...plannedCoolingProblems,
  ...plannedEngineProblems,
];
