import type { ProblemSeed } from './types';
import { burningSmellFromEngine } from './problems/burning-smell-from-engine';
import { carJerksWhenAccelerating } from './problems/car-jerks-when-accelerating';
import { carPullsToOneSide } from './problems/car-pulls-to-one-side';
import { checkEngineLight } from './problems/check-engine-light';
import { chirpingSmokeAlarm } from './problems/chirping-smoke-alarm';
import { clickingNoiseWhenTurning } from './problems/clicking-noise-when-turning';
import { clunkingNoiseOverBumps } from './problems/clunking-noise-over-bumps';
import { coolantLeak } from './problems/coolant-leak';
import { crackedBikeHelmet } from './problems/cracked-bike-helmet';
import { crackedPhoneScreen } from './problems/cracked-phone-screen';
import { dentedCan } from './problems/dented-can';
import { flickeringLight } from './problems/flickering-light';
import { frayedChargingCable } from './problems/frayed-charging-cable';
import { freezerBurn } from './problems/freezer-burn';
import { frostBuildupInFreezer } from './problems/frost-buildup-in-freezer';
import { gfciKeepsTripping } from './problems/gfci-keeps-tripping';
import { highRpmAfterColdStart } from './problems/high-rpm-after-cold-start';
import { hotLaptopCharger } from './problems/hot-laptop-charger';
import { leakingFaucet } from './problems/leaking-faucet';
import { leftoversLeftOut } from './problems/leftovers-left-out';
import { lowTirePressure } from './problems/low-tire-pressure';
import { moldAroundWindow } from './problems/mold-around-window';
import { nailInTire } from './problems/nail-in-tire';
import { oilLeak } from './problems/oil-leak';
import { plannedAlarmsProblems } from './problems/planned-alarms-problems';
import { plannedBatteriesProblems } from './problems/planned-batteries-problems';
import { plannedChargersProblems } from './problems/planned-chargers-problems';
import { plannedChargingProblems } from './problems/planned-charging-problems';
import { plannedCoolingProblems } from './problems/planned-cooling-problems';
import { plannedDishwasherDrainageProblems } from './problems/planned-dishwasher-drainage-problems';
import { plannedDrainsProblems } from './problems/planned-drains-problems';
import { plannedEngineProblems } from './problems/planned-engine-problems';
import { plannedExhaustProblems } from './problems/planned-exhaust-problems';
import { plannedFluidsProblems } from './problems/planned-fluids-problems';
import { plannedFoodSafetyProblems } from './problems/planned-food-safety-problems';
import { plannedFrozenFoodProblems } from './problems/planned-frozen-food-problems';
import { plannedFrostAndIceProblems } from './problems/planned-frost-and-ice-problems';
import { plannedGarbageDisposalProblems } from './problems/planned-garbage-disposal-problems';
import { plannedGasBurnersProblems } from './problems/planned-gas-burners-problems';
import { plannedGlassProblems } from './problems/planned-glass-problems';
import { plannedHelmetsProblems } from './problems/planned-helmets-problems';
import { plannedLeaksProblems } from './problems/planned-leaks-problems';
import { plannedLightingProblems } from './problems/planned-lighting-problems';
import { plannedOutletsProblems } from './problems/planned-outlets-problems';
import { plannedMicrowaveProblems } from './problems/planned-microwave-problems';
import { plannedPantryProblems } from './problems/planned-pantry-problems';
import { plannedRefrigeratorNoisesProblems } from './problems/planned-refrigerator-noises-problems';
import { plannedSteeringProblems } from './problems/planned-steering-problems';
import { plannedSuspensionProblems } from './problems/planned-suspension-problems';
import { plannedScreensProblems } from './problems/planned-screens-problems';
import { plannedTireProblems } from './problems/planned-tire-problems';
import { plannedToiletsProblems } from './problems/planned-toilets-problems';
import { plannedTransmissionProblems } from './problems/planned-transmission-problems';
import { refrigeratorDoorLeftOpenOvernight } from './problems/refrigerator-door-left-open-overnight';
import { smallLeakUnderSink } from './problems/small-leak-under-sink';
import { smallWindshieldChip } from './problems/small-windshield-chip';
import { slowDrain } from './problems/slow-drain';
import { sparkingMicrowave } from './problems/sparking-microwave';
import { squeakyBrakes } from './problems/squeaky-brakes';
import { swollenLaptopBattery } from './problems/swollen-laptop-battery';
import { toiletKeepsRunning } from './problems/toilet-keeps-running';
import { tpmsWarningLight } from './problems/tpms-warning-light';
import { warmElectricalOutlet } from './problems/warm-electrical-outlet';
import { waterDrippingFromExhaust } from './problems/water-dripping-from-exhaust';
import { wheelVibration } from './problems/wheel-vibration';
import { whiteSmokeFromExhaust } from './problems/white-smoke-from-exhaust';
import { yellowFlameOnGasStove } from './problems/yellow-flame-on-gas-stove';

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
  chirpingSmokeAlarm,
  gfciKeepsTripping,
  moldAroundWindow,
  leftoversLeftOut,
  dentedCan,
  frayedChargingCable,
  crackedBikeHelmet,
  leakingFaucet,
  sparkingMicrowave,
  frostBuildupInFreezer,
  yellowFlameOnGasStove,
  carPullsToOneSide,
  wheelVibration,
  clickingNoiseWhenTurning,
  coolantLeak,
  burningSmellFromEngine,
  clunkingNoiseOverBumps,
  carJerksWhenAccelerating,
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
  ...plannedAlarmsProblems,
  ...plannedPantryProblems,
  ...plannedChargingProblems,
  ...plannedHelmetsProblems,
  ...plannedRefrigeratorNoisesProblems,
  ...plannedFrostAndIceProblems,
  ...plannedDishwasherDrainageProblems,
  ...plannedGarbageDisposalProblems,
  ...plannedGasBurnersProblems,
  ...plannedMicrowaveProblems,
  ...plannedSuspensionProblems,
  ...plannedSteeringProblems,
  ...plannedTransmissionProblems,
];
