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

export const PAIRINGS: Pairing[] = [
  aluminumFoilInAirFryer,
  parchmentPaperInAirFryer,
  waxPaperInAirFryer,
  paperPlateInAirFryer,
  glassBowlInAirFryer,
  pyrexInAirFryer,
  cookingSprayInAirFryer,
  siliconeLinerInAirFryer,
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
