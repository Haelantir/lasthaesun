import type { Pairing } from './types';

/**
 * The registry of "Can I Use It With…" records.
 *
 * `npm run content:compat` appends to this file: one import beneath the last
 * one, one entry before the closing bracket. Keep both lists in authored order
 * — the section hub and the subject switcher both render it as written.
 */

import { aluminumFoilInAirFryer } from './pairings/aluminum-foil--air-fryer';
import { parchmentPaperInAirFryer } from './pairings/parchment-paper--air-fryer';
import { waxPaperInAirFryer } from './pairings/wax-paper--air-fryer';
import { paperPlateInAirFryer } from './pairings/paper-plate--air-fryer';
import { glassBowlInAirFryer } from './pairings/glass-bowl--air-fryer';
import { pyrexInAirFryer } from './pairings/pyrex--air-fryer';
import { cookingSprayInAirFryer } from './pairings/cooking-spray--air-fryer';
import { siliconeLinerInAirFryer } from './pairings/silicone-liner--air-fryer';
import { aluminumFoilInOven } from './pairings/aluminum-foil--oven';
import { parchmentPaperInOven } from './pairings/parchment-paper--oven';
import { waxPaperInOven } from './pairings/wax-paper--oven';
import { pyrexInOven } from './pairings/pyrex--oven';
import { siliconeBakewareInOven } from './pairings/silicone-bakeware--oven';
import { plasticContainerInOven } from './pairings/plastic-container--oven';
import { spaceHeaterPluggedIntoExtensionCord } from './pairings/space-heater--extension-cord';
import { airConditionerPluggedIntoExtensionCord } from './pairings/air-conditioner--extension-cord';
import { refrigeratorPluggedIntoExtensionCord } from './pairings/refrigerator--extension-cord';
import { microwavePluggedIntoExtensionCord } from './pairings/microwave--extension-cord';
import { tvPluggedIntoExtensionCord } from './pairings/tv--extension-cord';
import { laptopChargerPluggedIntoExtensionCord } from './pairings/laptop-charger--extension-cord';
import { aluminumFoilInMicrowave } from './pairings/aluminum-foil--microwave';
import { paperPlateInMicrowave } from './pairings/paper-plate--microwave';
import { plasticContainerInMicrowave } from './pairings/plastic-container--microwave';
import { pyrexInMicrowave } from './pairings/pyrex--microwave';
import { styrofoamInMicrowave } from './pairings/styrofoam--microwave';
import { parchmentPaperInMicrowave } from './pairings/parchment-paper--microwave';
import { castIronPanInDishwasher } from './pairings/cast-iron-pan--dishwasher';
import { woodenCuttingBoardInDishwasher } from './pairings/wooden-cutting-board--dishwasher';
import { nonstickPanInDishwasher } from './pairings/nonstick-pan--dishwasher';
import { stainlessSteelInDishwasher } from './pairings/stainless-steel--dishwasher';
import { siliconeUtensilsInDishwasher } from './pairings/silicone-utensils--dishwasher';
import { plasticContainerInDishwasher } from './pairings/plastic-container--dishwasher';
import { towelsInClothesDryer } from './pairings/towels--clothes-dryer';
import { jeansInClothesDryer } from './pairings/jeans--clothes-dryer';
import { downComforterInClothesDryer } from './pairings/down-comforter--clothes-dryer';
import { woolSweaterInClothesDryer } from './pairings/wool-sweater--clothes-dryer';
import { braInClothesDryer } from './pairings/bra--clothes-dryer';
import { rubberBackedBathMatInClothesDryer } from './pairings/rubber-backed-bath-mat--clothes-dryer';
import { breadInFreezer } from './pairings/bread--freezer';
import { cookedRiceInFreezer } from './pairings/cooked-rice--freezer';
import { milkInFreezer } from './pairings/milk--freezer';
import { cheeseInFreezer } from './pairings/cheese--freezer';
import { lettuceInFreezer } from './pairings/lettuce--freezer';
import { eggsInTheShellInFreezer } from './pairings/eggs-in-the-shell--freezer';
import { shoesInWashingMachine } from './pairings/shoes--washing-machine';
import { backpackInWashingMachine } from './pairings/backpack--washing-machine';
import { pillowsInWashingMachine } from './pairings/pillows--washing-machine';
import { stuffedAnimalsInWashingMachine } from './pairings/stuffed-animals--washing-machine';
import { weightedBlanketInWashingMachine } from './pairings/weighted-blanket--washing-machine';
import { memoryFoamPillowInWashingMachine } from './pairings/memory-foam-pillow--washing-machine';
import { desktopComputerPluggedIntoPowerStrip } from './pairings/desktop-computer--power-strip';
import { gamingConsolePluggedIntoPowerStrip } from './pairings/gaming-console--power-strip';
import { wiFiRouterPluggedIntoPowerStrip } from './pairings/wi-fi-router--power-strip';
import { laserPrinterPluggedIntoPowerStrip } from './pairings/laser-printer--power-strip';
import { coffeeMakerPluggedIntoPowerStrip } from './pairings/coffee-maker--power-strip';
import { electricKettlePluggedIntoPowerStrip } from './pairings/electric-kettle--power-strip';
import { dishSoapInDishwasher } from './pairings/dish-soap--dishwasher';
import { regularDetergentInHeWashingMachine } from './pairings/regular-detergent--he-washing-machine';
import { castIronPanOnGlassTopStove } from './pairings/cast-iron-pan--glass-top-stove';
import { castIronPanOnInductionCooktop } from './pairings/cast-iron-pan--induction-cooktop';
import { vinegarOnGraniteCountertop } from './pairings/vinegar--granite-countertop';
import { tapWaterInHumidifier } from './pairings/tap-water--humidifier';
import { essentialOilsInHumidifier } from './pairings/essential-oils--humidifier';
import { bottledWaterInHumidifier } from './pairings/bottled-water--humidifier';
import { vinegarInHumidifier } from './pairings/vinegar--humidifier';
import { humidifierWithAirPurifier } from './pairings/humidifier--air-purifier';
import { windexOnTvScreen } from './pairings/windex--tv-screen';
import { paperTowelInMicrowave } from './pairings/paper-towel--microwave';
import { bakingSodaInWashingMachine } from './pairings/baking-soda--washing-machine';
import { airFryerBasketWashedInDishwasher } from './pairings/air-fryer-basket--dishwasher';
import { vinegarOnMarbleCountertop } from './pairings/vinegar--marble-countertop';
import { steamMopOnLaminateFlooring } from './pairings/steam-mop--laminate-flooring';
import { bleachOnGrout } from './pairings/bleach--grout';
import { rubbingAlcoholOnPhoneScreen } from './pairings/rubbing-alcohol--phone-screen';
import { magicEraserOnGlassTopStove } from './pairings/magic-eraser--glass-top-stove';
import { bleachOnStainlessSteel } from './pairings/bleach--stainless-steel';
import { nonPoeDevicePluggedIntoPoeSwitch } from './pairings/non-poe-device--poe-switch';
import { thunderbolt4CableWithUsbCDevice } from './pairings/thunderbolt-4-cable--usb-c-device';
import { laptopUsbCChargerWithPhone } from './pairings/laptop-usb-c-charger--phone';
import { powerBankWithLaptop } from './pairings/power-bank--laptop';
import { laserPrinterPluggedIntoUps } from './pairings/laser-printer--ups';
import { hdmi21CableInHdmi20Port } from './pairings/hdmi-2-1-cable--hdmi-2-0-port';
import { refrigeratorPluggedIntoPortablePowerStation } from './pairings/refrigerator--portable-power-station';
import { spaceHeaterPluggedIntoPortablePowerStation } from './pairings/space-heater--portable-power-station';
import { extensionCordWithEvCharger } from './pairings/extension-cord--ev-charger';
import { eBikeOnBikeRack } from './pairings/e-bike--bike-rack';
import { tireSealantWithTpmsSensors } from './pairings/tire-sealant--tpms-sensors';
import { regularBatteryChargerWithAgmBattery } from './pairings/regular-battery-charger--agm-battery';
import { jumperCablesOnHybridCar } from './pairings/jumper-cables--hybrid-car';
import { snowChainsOnAwdCar } from './pairings/snow-chains--awd-car';
import { drainCleanerWithSepticSystem } from './pairings/drain-cleaner--septic-system';
import { bleachWithSepticSystem } from './pairings/bleach--septic-system';
import { fabricSoftenerOnMicrofiberTowels } from './pairings/fabric-softener--microfiber-towels';
import { glassBakingDishInBroiler } from './pairings/glass-baking-dish--broiler';
import { ceramicCookwareOnInductionCooktop } from './pairings/ceramic-cookware--induction-cooktop';
import { steamMopOnVinylPlankFlooring } from './pairings/steam-mop--vinyl-plank-flooring';
import { drywallAnchorsInPlasterWalls } from './pairings/drywall-anchors--plaster-walls';
import { magicEraserOnCarPaint } from './pairings/magic-eraser--car-paint';

export const PAIRINGS: Pairing[] = [
  aluminumFoilInAirFryer,
  parchmentPaperInAirFryer,
  waxPaperInAirFryer,
  paperPlateInAirFryer,
  glassBowlInAirFryer,
  pyrexInAirFryer,
  cookingSprayInAirFryer,
  siliconeLinerInAirFryer,
  aluminumFoilInOven,
  parchmentPaperInOven,
  waxPaperInOven,
  pyrexInOven,
  siliconeBakewareInOven,
  plasticContainerInOven,
  spaceHeaterPluggedIntoExtensionCord,
  airConditionerPluggedIntoExtensionCord,
  refrigeratorPluggedIntoExtensionCord,
  microwavePluggedIntoExtensionCord,
  tvPluggedIntoExtensionCord,
  laptopChargerPluggedIntoExtensionCord,
  aluminumFoilInMicrowave,
  paperPlateInMicrowave,
  plasticContainerInMicrowave,
  pyrexInMicrowave,
  styrofoamInMicrowave,
  parchmentPaperInMicrowave,
  castIronPanInDishwasher,
  woodenCuttingBoardInDishwasher,
  nonstickPanInDishwasher,
  stainlessSteelInDishwasher,
  siliconeUtensilsInDishwasher,
  plasticContainerInDishwasher,
  towelsInClothesDryer,
  jeansInClothesDryer,
  downComforterInClothesDryer,
  woolSweaterInClothesDryer,
  braInClothesDryer,
  rubberBackedBathMatInClothesDryer,
  breadInFreezer,
  cookedRiceInFreezer,
  milkInFreezer,
  cheeseInFreezer,
  lettuceInFreezer,
  eggsInTheShellInFreezer,
  shoesInWashingMachine,
  backpackInWashingMachine,
  pillowsInWashingMachine,
  stuffedAnimalsInWashingMachine,
  weightedBlanketInWashingMachine,
  memoryFoamPillowInWashingMachine,
  desktopComputerPluggedIntoPowerStrip,
  gamingConsolePluggedIntoPowerStrip,
  wiFiRouterPluggedIntoPowerStrip,
  laserPrinterPluggedIntoPowerStrip,
  coffeeMakerPluggedIntoPowerStrip,
  electricKettlePluggedIntoPowerStrip,
  dishSoapInDishwasher,
  regularDetergentInHeWashingMachine,
  castIronPanOnGlassTopStove,
  castIronPanOnInductionCooktop,
  vinegarOnGraniteCountertop,
  tapWaterInHumidifier,
  essentialOilsInHumidifier,
  bottledWaterInHumidifier,
  vinegarInHumidifier,
  humidifierWithAirPurifier,
  windexOnTvScreen,
  paperTowelInMicrowave,
  bakingSodaInWashingMachine,
  airFryerBasketWashedInDishwasher,
  vinegarOnMarbleCountertop,
  steamMopOnLaminateFlooring,
  bleachOnGrout,
  rubbingAlcoholOnPhoneScreen,
  magicEraserOnGlassTopStove,
  bleachOnStainlessSteel,
  nonPoeDevicePluggedIntoPoeSwitch,
  thunderbolt4CableWithUsbCDevice,
  laptopUsbCChargerWithPhone,
  powerBankWithLaptop,
  laserPrinterPluggedIntoUps,
  hdmi21CableInHdmi20Port,
  refrigeratorPluggedIntoPortablePowerStation,
  spaceHeaterPluggedIntoPortablePowerStation,
  extensionCordWithEvCharger,
  eBikeOnBikeRack,
  tireSealantWithTpmsSensors,
  regularBatteryChargerWithAgmBattery,
  jumperCablesOnHybridCar,
  snowChainsOnAwdCar,
  drainCleanerWithSepticSystem,
  bleachWithSepticSystem,
  fabricSoftenerOnMicrofiberTowels,
  glassBakingDishInBroiler,
  ceramicCookwareOnInductionCooktop,
  steamMopOnVinylPlankFlooring,
  drywallAnchorsInPlasterWalls,
  magicEraserOnCarPaint,
];

export type { Pairing, CompatSource, CompatMechanism } from './types';

export function pairingPath(pairing: Pick<Pairing, 'subjectSlug' | 'targetSlug'>): string {
  return `/use/${pairing.subjectSlug}/${pairing.targetSlug}/`;
}

/** Every pairing sharing a target, in authored order. Drives the switcher. */
export function pairingsForTarget(targetSlug: string): Pairing[] {
  return PAIRINGS.filter((pairing) => pairing.targetSlug === targetSlug);
}

/** Every pairing sharing a subject, in authored order. Drives the dossier. */
export function pairingsForSubject(subjectSlug: string): Pairing[] {
  return PAIRINGS.filter((pairing) => pairing.subjectSlug === subjectSlug);
}

export function findPairing(subjectSlug: string, targetSlug: string): Pairing | undefined {
  return PAIRINGS.find((p) => p.subjectSlug === subjectSlug && p.targetSlug === targetSlug);
}
