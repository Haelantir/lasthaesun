import type { ProblemSeed } from './types';
import { acLeakingWaterInside } from './problems/ac-leaking-water-inside';
import { bedBugsInHotelRoom } from './problems/bed-bugs-in-hotel-room';
import { blueScreenHappenedOnce } from './problems/blue-screen-happened-once';
import { boardingPassWontLoad } from './problems/boarding-pass-wont-load';
import { breakerKeepsTripping } from './problems/breaker-keeps-tripping';
import { brownWaterFromFaucet } from './problems/brown-water-from-faucet';
import { burningSmellFromDryer } from './problems/burning-smell-from-dryer';
import { burningSmellFromFurnace } from './problems/burning-smell-from-furnace';
import { catSleepingAllDay } from './problems/cat-sleeping-all-day';
import { catSneezing } from './problems/cat-sneezing';
import { catStrainingToPee } from './problems/cat-straining-to-pee';
import { catThrowingUp } from './problems/cat-throwing-up';
import { clickingHardDrive } from './problems/clicking-hard-drive';
import { crackInFoundation } from './problems/crack-in-foundation';
import { crackedEgg } from './problems/cracked-egg';
import { damagedPassport } from './problems/damaged-passport';
import { damagedSuitcase } from './problems/damaged-suitcase';
import { dogAteChocolate } from './problems/dog-ate-chocolate';
import { dogDiarrhea } from './problems/dog-diarrhea';
import { dogDrinkingLotsOfWater } from './problems/dog-drinking-lots-of-water';
import { dogEatingGrass } from './problems/dog-eating-grass';
import { dogNotEating } from './problems/dog-not-eating';
import { dogReverseSneezing } from './problems/dog-reverse-sneezing';
import { dogThrowingUp } from './problems/dog-throwing-up';
import { dryerTakesTooLongToDry } from './problems/dryer-takes-too-long-to-dry';
import { eggsPastSellByDate } from './problems/eggs-past-sell-by-date';
import { fridgeNotColdEnough } from './problems/fridge-not-cold-enough';
import { garbageDisposalHumming } from './problems/garbage-disposal-humming';
import { gasSmellNearTheStove } from './problems/gas-smell-near-the-stove';
import { hotPhoneWhileCharging } from './problems/hot-phone-while-charging';
import { hotelRoomSmellsLikeMold } from './problems/hotel-room-smells-like-mold';
import { laptopFanRunsConstantly } from './problems/laptop-fan-runs-constantly';
import { liquidDetectedWarning } from './problems/liquid-detected-warning';
import { lowWaterPressure } from './problems/low-water-pressure';
import { meatThawedInFridge } from './problems/meat-thawed-in-fridge';
import { meatTurnedBrownInFridge } from './problems/meat-turned-brown-in-fridge';
import { missingRoofShingle } from './problems/missing-roof-shingle';
import { moldOnBread } from './problems/mold-on-bread';
import { nameTypoOnPlaneTicket } from './problems/name-typo-on-plane-ticket';
import { newbornHiccups } from './problems/newborn-hiccups';
import { newbornNoisyBreathing } from './problems/newborn-noisy-breathing';
import { newbornNotPooping } from './problems/newborn-not-pooping';
import { newbornSleepingThroughFeedings } from './problems/newborn-sleeping-through-feedings';
import { newbornSneezing } from './problems/newborn-sneezing';
import { newbornSpittingUp } from './problems/newborn-spitting-up';
import { passportExpiringSoon } from './problems/passport-expiring-soon';
import { phoneBatteryDrainingFast } from './problems/phone-battery-draining-fast';
import { plannedAirConditioningProblems } from './problems/planned-air-conditioning-problems';
import { plannedBreakersProblems } from './problems/planned-breakers-problems';
import { plannedCeilingsProblems } from './problems/planned-ceilings-problems';
import { plannedFoundationProblems } from './problems/planned-foundation-problems';
import { plannedHeatingProblems } from './problems/planned-heating-problems';
import { plannedShinglesProblems } from './problems/planned-shingles-problems';
import { plannedWaterHeatersProblems } from './problems/planned-water-heaters-problems';
import { plannedWaterPressureProblems } from './problems/planned-water-pressure-problems';
import { plannedWaterQualityProblems } from './problems/planned-water-quality-problems';
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
import { plannedCatBehaviorAndEnergyProblems } from './problems/planned-cat-behavior-and-energy-problems';
import { plannedCatBreathingProblems } from './problems/planned-cat-breathing-problems';
import { plannedCatDigestionProblems } from './problems/planned-cat-digestion-problems';
import { plannedCatUrinaryAndLitterBoxProblems } from './problems/planned-cat-urinary-and-litter-box-problems';
import { plannedChargersProblems } from './problems/planned-chargers-problems';
import { plannedChargingProblems } from './problems/planned-charging-problems';
import { plannedCoolingProblems } from './problems/planned-cooling-problems';
import { plannedDogBreathingProblems } from './problems/planned-dog-breathing-problems';
import { plannedDogDigestionProblems } from './problems/planned-dog-digestion-problems';
import { plannedDogEatingAndDrinkingProblems } from './problems/planned-dog-eating-and-drinking-problems';
import { plannedDogToxinsAndForeignObjectsProblems } from './problems/planned-dog-toxins-and-foreign-objects-problems';
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
import { plannedPassportsProblems } from './problems/planned-passports-problems';
import { plannedTicketsAndCheckInProblems } from './problems/planned-tickets-and-check-in-problems';
import { plannedConnectionsProblems } from './problems/planned-connections-problems';
import { plannedSuitcasesProblems } from './problems/planned-suitcases-problems';
import { plannedCheckedBagsProblems } from './problems/planned-checked-bags-problems';
import { plannedHotelRoomsProblems } from './problems/planned-hotel-rooms-problems';
import { plannedRentalCarDamageProblems } from './problems/planned-rental-car-damage-problems';
import { plannedNewbornFeedingProblems } from './problems/planned-newborn-feeding-problems';
import { plannedNewbornBreathingAndSoundsProblems } from './problems/planned-newborn-breathing-and-sounds-problems';
import { plannedNewbornDiapersAndDigestionProblems } from './problems/planned-newborn-diapers-and-digestion-problems';
import { refrigeratorDoorLeftOpenOvernight } from './problems/refrigerator-door-left-open-overnight';
import { refrigeratorLeakingWater } from './problems/refrigerator-leaking-water';
import { refrigeratorMakingLoudNoise } from './problems/refrigerator-making-loud-noise';
import { scratchOnRentalCar } from './problems/scratch-on-rental-car';
import { sewerGasSmell } from './problems/sewer-gas-smell';
import { shortLayover } from './problems/short-layover';
import { smallLeakUnderSink } from './problems/small-leak-under-sink';
import { smallWindshieldChip } from './problems/small-windshield-chip';
import { slowDrain } from './problems/slow-drain';
import { softwareUpdate } from './problems/software-update';
import { sparkingMicrowave } from './problems/sparking-microwave';
import { sproutsOnAPotato } from './problems/sprouts-on-a-potato';
import { squeakyBrakes } from './problems/squeaky-brakes';
import { standingWaterInDishwasher } from './problems/standing-water-in-dishwasher';
import { storageAlmostFullWarning } from './problems/storage-almost-full-warning';
import { swollenLaptopBattery } from './problems/swollen-laptop-battery';
import { toiletKeepsRunning } from './problems/toilet-keeps-running';
import { tpmsWarningLight } from './problems/tpms-warning-light';
import { warmElectricalOutlet } from './problems/warm-electrical-outlet';
import { washingMachineLeakingWater } from './problems/washing-machine-leaking-water';
import { washingMachineShakesViolently } from './problems/washing-machine-shakes-violently';
import { waterDrippingFromExhaust } from './problems/water-dripping-from-exhaust';
import { waterHeaterLeaking } from './problems/water-heater-leaking';
import { waterStainOnCeiling } from './problems/water-stain-on-ceiling';
import { wheelVibration } from './problems/wheel-vibration';
import { whiteSmokeFromExhaust } from './problems/white-smoke-from-exhaust';
import { wifiKeepsDisconnecting } from './problems/wifi-keeps-disconnecting';
import { wrongBaggageTag } from './problems/wrong-baggage-tag';
import { yellowFlameOnGasStove } from './problems/yellow-flame-on-gas-stove';
import { yourConnectionIsNotPrivateWarning } from './problems/your-connection-is-not-private-warning';

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
  waterStainOnCeiling,
  brownWaterFromFaucet,
  breakerKeepsTripping,
  acLeakingWaterInside,
  crackInFoundation,
  sewerGasSmell,
  waterHeaterLeaking,
  lowWaterPressure,
  burningSmellFromFurnace,
  missingRoofShingle,
  dogEatingGrass,
  catStrainingToPee,
  catSleepingAllDay,
  dogReverseSneezing,
  catSneezing,
  dogDiarrhea,
  dogThrowingUp,
  catThrowingUp,
  dogNotEating,
  dogAteChocolate,
  dogDrinkingLotsOfWater,
  nameTypoOnPlaneTicket,
  passportExpiringSoon,
  damagedPassport,
  shortLayover,
  bedBugsInHotelRoom,
  hotelRoomSmellsLikeMold,
  damagedSuitcase,
  scratchOnRentalCar,
  boardingPassWontLoad,
  wrongBaggageTag,
  newbornSpittingUp,
  newbornNoisyBreathing,
  newbornSleepingThroughFeedings,
  newbornSneezing,
  newbornHiccups,
  newbornNotPooping,
  refrigeratorLeakingWater,
  washingMachineLeakingWater,
  fridgeNotColdEnough,
  standingWaterInDishwasher,
  dryerTakesTooLongToDry,
  washingMachineShakesViolently,
  burningSmellFromDryer,
  refrigeratorMakingLoudNoise,
  garbageDisposalHumming,
  gasSmellNearTheStove,
  moldOnBread,
  eggsPastSellByDate,
  meatTurnedBrownInFridge,
  crackedEgg,
  meatThawedInFridge,
  sproutsOnAPotato,
  hotPhoneWhileCharging,
  liquidDetectedWarning,
  phoneBatteryDrainingFast,
  blueScreenHappenedOnce,
  laptopFanRunsConstantly,
  clickingHardDrive,
  storageAlmostFullWarning,
  wifiKeepsDisconnecting,
  softwareUpdate,
  yourConnectionIsNotPrivateWarning,
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
  ...plannedCeilingsProblems,
  ...plannedFoundationProblems,
  ...plannedBreakersProblems,
  ...plannedWaterHeatersProblems,
  ...plannedWaterPressureProblems,
  ...plannedWaterQualityProblems,
  ...plannedAirConditioningProblems,
  ...plannedHeatingProblems,
  ...plannedShinglesProblems,
  ...plannedDogEatingAndDrinkingProblems,
  ...plannedDogDigestionProblems,
  ...plannedDogBreathingProblems,
  ...plannedDogToxinsAndForeignObjectsProblems,
  ...plannedCatDigestionProblems,
  ...plannedCatUrinaryAndLitterBoxProblems,
  ...plannedCatBreathingProblems,
  ...plannedCatBehaviorAndEnergyProblems,
  ...plannedPassportsProblems,
  ...plannedTicketsAndCheckInProblems,
  ...plannedConnectionsProblems,
  ...plannedSuitcasesProblems,
  ...plannedCheckedBagsProblems,
  ...plannedHotelRoomsProblems,
  ...plannedRentalCarDamageProblems,
  ...plannedNewbornFeedingProblems,
  ...plannedNewbornBreathingAndSoundsProblems,
  ...plannedNewbornDiapersAndDigestionProblems,
];
