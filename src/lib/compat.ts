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
export type PairingRelation =
  | 'in'
  | 'on'
  | 'with'
  | 'plugged-into'
  | 'washed-in'
  | 'dried-in'
  | 'stored-in';

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
  // These three read as "in" on the page. The distinction they carry is what the
  // appliance DOES to the thing, which decides the question's wording and the
  // mechanisms worth explaining, not the word shown in the pairing box.
  'washed-in': 'in',
  'dried-in': 'in',
  'stored-in': 'in',
};

export function relationPhrase(relation: PairingRelation): string {
  return RELATION_PHRASE[relation];
}

/**
 * The question an entity's index page answers, phrased the way it is searched.
 *
 * The generated version of this used to be "Where Can You Use Air Fryer?" for
 * every entity — ungrammatical for a thing you put something INTO, and unlike
 * any query a person types. Which question is right depends on which side of a
 * pairing the entity keeps appearing on, and on the relation word, which is
 * exactly why the relation is stored rather than derived.
 *
 * An entity that only ever appears as a subject (foil, parchment) is asked
 * about the other way round: not what goes in it, but where it may go.
 */
const TARGET_QUESTION: Record<PairingRelation, (thing: string) => string> = {
  in: (thing) => `What Can You Put in ${thing}?`,
  on: (thing) => `What Can You Use on ${thing}?`,
  with: (thing) => `What Can You Use with ${thing}?`,
  'plugged-into': (thing) => `What Can You Plug Into ${thing}?`,
  'washed-in': (thing) => `What Can Go in ${thing}?`,
  'dried-in': (thing) => `What Can Go in ${thing}?`,
  'stored-in': (thing) => `What Can You Store in ${thing}?`,
};

const TARGET_VERB: Record<PairingRelation, string> = {
  in: 'put in',
  on: 'use on',
  with: 'use with',
  'plugged-into': 'plug into',
  'washed-in': 'wash in',
  'dried-in': 'dry in',
  'stored-in': 'store in',
};

/** "air fryer" -> "an air fryer". Plurals take no article: "towels" stays. */
export function withArticle(name: string): string {
  if (/s$/i.test(name) && !/(ss|us|is)$/i.test(name)) return name;
  return `${/^[aeiou]/i.test(name) ? 'an' : 'a'} ${name}`;
}

/** The relation the entity is most often on the receiving end of, if any. */
function dominantRelation(relations: PairingRelation[]): PairingRelation | null {
  let best: PairingRelation | null = null;
  let bestCount = 0;
  const tally = new Map<PairingRelation, number>();
  for (const relation of relations) {
    const n = (tally.get(relation) ?? 0) + 1;
    tally.set(relation, n);
    if (n > bestCount) {
      best = relation;
      bestCount = n;
    }
  }
  return best;
}

/** H1 and <title> for `/use/<entity>/`. `relations` are the ones where the
 *  entity is the target — the thing being put into, plugged into or washed in. */
export function entityQuestion(name: string, relations: PairingRelation[]): string {
  const relation = dominantRelation(relations);
  if (!relation) return `Where Can You Use ${name}?`;
  return TARGET_QUESTION[relation](withArticle(name));
}

/** Meta description for the same page. Says what the reader gets, and stays
 *  unique per entity without repeating the H1 back at them.
 *
 *  The name leads the sentence so it can keep its own capitalisation: entity
 *  names are stored title-cased and some of them are brands ("Pyrex"), which
 *  lower-casing into the middle of a sentence would quietly get wrong. */
export function entityDescription(name: string, relations: PairingRelation[]): string {
  const relation = dominantRelation(relations);
  if (!relation) {
    return `${name}: where it is safe to use and where it is not, one appliance at a time, each answer with the guidance behind it.`;
  }
  return `${name}: what you can ${TARGET_VERB[relation]} it and what you cannot, each answer with a verdict and the guidance behind it.`;
}
