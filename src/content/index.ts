import type { ProblemSeed } from './types';
import { checkEngineLight } from './problems/check-engine-light';
import { crackedPhoneScreen } from './problems/cracked-phone-screen';
import { flickeringLight } from './problems/flickering-light';
import { freezerBurn } from './problems/freezer-burn';
import { highRpmAfterColdStart } from './problems/high-rpm-after-cold-start';
import { hotLaptopCharger } from './problems/hot-laptop-charger';
import { lowTirePressure } from './problems/low-tire-pressure';
import { nailInTire } from './problems/nail-in-tire';
import { oilLeak } from './problems/oil-leak';
import { plannedBatteriesProblems } from './problems/planned-batteries-problems';
import { plannedChargersProblems } from './problems/planned-chargers-problems';
import { plannedCoolingProblems } from './problems/planned-cooling-problems';
import { plannedDrainsProblems } from './problems/planned-drains-problems';
import { plannedEngineProblems } from './problems/planned-engine-problems';
import { plannedExhaustProblems } from './problems/planned-exhaust-problems';
import { plannedFluidsProblems } from './problems/planned-fluids-problems';
import { plannedFoodSafetyProblems } from './problems/planned-food-safety-problems';
import { plannedFrozenFoodProblems } from './problems/planned-frozen-food-problems';
import { plannedGlassProblems } from './problems/planned-glass-problems';
import { plannedLeaksProblems } from './problems/planned-leaks-problems';
import { plannedLightingProblems } from './problems/planned-lighting-problems';
import { plannedOutletsProblems } from './problems/planned-outlets-problems';
import { plannedScreensProblems } from './problems/planned-screens-problems';
import { plannedTireProblems } from './problems/planned-tire-problems';
import { plannedToiletsProblems } from './problems/planned-toilets-problems';
import { refrigeratorDoorLeftOpenOvernight } from './problems/refrigerator-door-left-open-overnight';
import { smallLeakUnderSink } from './problems/small-leak-under-sink';
import { smallWindshieldChip } from './problems/small-windshield-chip';
import { slowDrain } from './problems/slow-drain';
import { squeakyBrakes } from './problems/squeaky-brakes';
import { swollenLaptopBattery } from './problems/swollen-laptop-battery';
import { toiletKeepsRunning } from './problems/toilet-keeps-running';
import { tpmsWarningLight } from './problems/tpms-warning-light';
import { warmElectricalOutlet } from './problems/warm-electrical-outlet';
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
  slowDrain,
  toiletKeepsRunning,
  smallLeakUnderSink,
  flickeringLight,
  warmElectricalOutlet,
  crackedPhoneScreen,
  swollenLaptopBattery,
  hotLaptopCharger,
  freezerBurn,
  refrigeratorDoorLeftOpenOvernight,
  ...plannedTireProblems,
  ...plannedExhaustProblems,
  ...plannedCoolingProblems,
  ...plannedEngineProblems,
  ...plannedFluidsProblems,
  ...plannedGlassProblems,
  ...plannedDrainsProblems,
  ...plannedToiletsProblems,
  ...plannedLeaksProblems,
  ...plannedLightingProblems,
  ...plannedOutletsProblems,
  ...plannedScreensProblems,
  ...plannedBatteriesProblems,
  ...plannedChargersProblems,
  ...plannedFrozenFoodProblems,
  ...plannedFoodSafetyProblems,
];
