import type { Glyph, Tone } from '@/lib/verdict';

/**
 * The verdict scale for "Can I Use It With…" — the compatibility section.
 *
 * Deliberately NOT `VerdictLevel` from `verdict.ts`. That enum answers "may I
 * leave this alone?" and its labels ("DON'T IGNORE") are meaningless for a
 * pairing. This is a separate scale for a separate question, mapped onto the
 * same five tones so the two sections look like one site.
 *
 * Same accessibility rule as `verdict.ts`: every presentation carries a `label`,
 * so the meaning survives greyscale and screen readers. Colour and glyph are
 * always redundant reinforcement.
 */

export type CompatVerdict = 'yes' | 'yes_with_limits' | 'risky' | 'no';

/** How the two entities are being combined. Stored, not derived: "foil IN an
 *  air fryer" and "vinegar ON granite" are different relations, and the word is
 *  what makes the H1 and the <title> read like the search that found them. */
export type PairingRelation = 'in' | 'on' | 'with' | 'plugged-into' | 'washed-in' | 'stored-in';

export interface CompatPresentation {
  label: string;
  gloss: string;
  tone: Tone;
  glyph: Glyph;
}

const COMPAT: Record<CompatVerdict, CompatPresentation> = {
  yes: {
    label: 'YES',
    gloss: 'This combination is fine as normally used.',
    tone: 'safe',
    glyph: 'check',
  },
  yes_with_limits: {
    label: 'YES, WITH LIMITS',
    gloss: 'Safe only under specific conditions. The conditions are the answer.',
    tone: 'caution',
    glyph: 'clock',
  },
  risky: {
    label: 'RISKY',
    gloss: 'It usually works and sometimes causes damage. Pick something else.',
    tone: 'warning',
    glyph: 'alert',
  },
  no: {
    label: 'NO',
    gloss: 'Do not combine these. Use the alternative instead.',
    tone: 'danger',
    glyph: 'stop',
  },
};

export function compatPresentation(verdict: CompatVerdict): CompatPresentation {
  return COMPAT[verdict];
}

/** Reads inside the H1: "Can I Use Aluminum Foil ___ an Air Fryer?" */
const RELATION_PHRASE: Record<PairingRelation, string> = {
  in: 'in',
  on: 'on',
  with: 'with',
  'plugged-into': 'plugged into',
  'washed-in': 'in',
  'stored-in': 'in',
};

export function relationPhrase(relation: PairingRelation): string {
  return RELATION_PHRASE[relation];
}
