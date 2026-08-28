import type { ProblemSeed } from './types';
import { checkEngineLight } from './problems/check-engine-light';
import { highRpmAfterColdStart } from './problems/high-rpm-after-cold-start';
import { lowTirePressure } from './problems/low-tire-pressure';
import { nailInTire } from './problems/nail-in-tire';
import { oilLeak } from './problems/oil-leak';
import { plannedCoolingProblems } from './problems/planned-cooling-problems';
import { plannedEngineProblems } from './problems/planned-engine-problems';
import { plannedExhaustProblems } from './problems/planned-exhaust-problems';
import { plannedFluidsProblems } from './problems/planned-fluids-problems';
import { plannedGlassProblems } from './problems/planned-glass-problems';
import { plannedTireProblems } from './problems/planned-tire-problems';
import { smallWindshieldChip } from './problems/small-windshield-chip';
import { squeakyBrakes } from './problems/squeaky-brakes';
import { tpmsWarningLight } from './problems/tpms-warning-light';
import { waterDrippingFromExhaust } from './problems/water-dripping-from-exhaust';
import { whiteSmokeFromExhaust } from './problems/white-smoke-from-exhaust';

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
  checkEngineLight,
  squeakyBrakes,
  tpmsWarningLight,
  oilLeak,
  whiteSmokeFromExhaust,
  smallWindshieldChip,
  ...plannedTireProblems,
  ...plannedExhaustProblems,
  ...plannedCoolingProblems,
  ...plannedEngineProblems,
  ...plannedFluidsProblems,
  ...plannedGlassProblems,
];
