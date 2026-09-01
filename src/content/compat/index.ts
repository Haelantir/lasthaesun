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
