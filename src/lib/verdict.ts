/**
 * The one place where stored semantics become something a human reads.
 *
 * The database stores `probably_not`. This file decides that a user sees
 * "PROBABLY NOT", in the `warning` tone, with a triangle glyph. Rewording a
 * verdict is an edit here, not a migration — and no component anywhere else is
 * allowed to hard-code a label, a colour or an emoji for a stored enum.
 *
 * Accessibility rule enforced by this module: every presentation carries a
 * `label`, so meaning survives greyscale, colour-blindness and screen readers.
 * `emoji` and `glyph` are always redundant reinforcement, never the only signal.
 */

export type Tone = 'safe' | 'caution' | 'warning' | 'danger' | 'neutral';

/** Shape of the icon drawn next to a label. Shapes differ per tone so the icon
 *  still distinguishes states when colour is unavailable. */
export type Glyph = 'check' | 'clock' | 'alert' | 'stop' | 'info';

export type VerdictLevel = 'safe_to_ignore' | 'can_wait' | 'probably_not' | 'do_not_ignore';
export type UrgencyLevel = 'low' | 'medium' | 'high' | 'critical';
export type RiskLevel = 'low' | 'moderate' | 'high' | 'severe';
export type DifficultyLevel = 'easy' | 'moderate' | 'hard' | 'professional';
export type SeverityLevel = 'info' | 'caution' | 'warning' | 'danger';

export interface Presentation {
  /** Always present. The text is what actually communicates the state. */
  label: string;
  tone: Tone;
  glyph: Glyph;
  /** Redundant colour cue. Safe to drop without losing meaning. */
  emoji: string;
}

const TONE_GLYPH: Record<Tone, Glyph> = {
  safe: 'check',
  caution: 'clock',
  warning: 'alert',
  danger: 'stop',
  neutral: 'info',
};

const TONE_EMOJI: Record<Tone, string> = {
  safe: '🟢',
  caution: '🟡',
  warning: '🟠',
  danger: '🔴',
  neutral: '⚪',
};

function present(label: string, tone: Tone): Presentation {
  return { label, tone, glyph: TONE_GLYPH[tone], emoji: TONE_EMOJI[tone] };
}

/* -------------------------------------------------------------------------- */
/* Verdict                                                                    */
/* -------------------------------------------------------------------------- */

const VERDICT_TONE: Record<VerdictLevel, Tone> = {
  safe_to_ignore: 'safe',
  can_wait: 'caution',
  probably_not: 'warning',
  do_not_ignore: 'danger',
};

const VERDICT_LABEL: Record<VerdictLevel, string> = {
  safe_to_ignore: 'YES',
  can_wait: 'YES, BUT',
  probably_not: 'PROBABLY NOT',
  do_not_ignore: "DON'T IGNORE",
};

/** One line explaining what the verdict word actually means, so "YES, BUT"
 *  is never ambiguous on its own. */
const VERDICT_GLOSS: Record<VerdictLevel, string> = {
  safe_to_ignore: 'Low urgency. Handle it whenever it suits you.',
  can_wait: 'Not an emergency, but it does need dealing with.',
  probably_not: 'Deal with this soon rather than later.',
  do_not_ignore: 'Act now. Waiting makes this meaningfully worse.',
};

export function verdictPresentation(verdict: VerdictLevel): Presentation & { gloss: string } {
  return { ...present(VERDICT_LABEL[verdict], VERDICT_TONE[verdict]), gloss: VERDICT_GLOSS[verdict] };
}

/** Verdict ordering, used to group hub listings from most to least urgent. */
export const VERDICT_ORDER: readonly VerdictLevel[] = [
  'do_not_ignore',
  'probably_not',
  'can_wait',
  'safe_to_ignore',
];

/** Headings used when a hub groups its problems by verdict. */
export const VERDICT_GROUP_HEADING: Record<VerdictLevel, string> = {
  do_not_ignore: "Don't ignore",
  probably_not: 'Deal with soon',
  can_wait: 'Can usually wait a little',
  safe_to_ignore: 'Low urgency',
};

/* -------------------------------------------------------------------------- */
/* Supporting metrics                                                         */
/* -------------------------------------------------------------------------- */

const URGENCY: Record<UrgencyLevel, Presentation> = {
  low: present('Low', 'safe'),
  medium: present('Medium', 'caution'),
  high: present('High', 'warning'),
  critical: present('Immediate', 'danger'),
};

const RISK: Record<RiskLevel, Presentation> = {
  low: present('Low', 'safe'),
  moderate: present('Moderate', 'caution'),
  high: present('Can become serious', 'warning'),
  severe: present('Serious', 'danger'),
};

const DIFFICULTY: Record<DifficultyLevel, Presentation> = {
  easy: present('Usually easy', 'safe'),
  moderate: present('Some effort', 'caution'),
  hard: present('Involved', 'warning'),
  professional: present('Needs a professional', 'neutral'),
};

export const urgencyPresentation = (level: UrgencyLevel): Presentation => URGENCY[level];
export const riskPresentation = (level: RiskLevel): Presentation => RISK[level];
export const difficultyPresentation = (level: DifficultyLevel): Presentation => DIFFICULTY[level];

/* -------------------------------------------------------------------------- */
/* Generic severity (timeline stages, red flags, decision-table rows)         */
/* -------------------------------------------------------------------------- */

const SEVERITY_TONE: Record<SeverityLevel, Tone> = {
  info: 'neutral',
  caution: 'caution',
  warning: 'warning',
  danger: 'danger',
};

export function severityTone(severity: SeverityLevel): Tone {
  return SEVERITY_TONE[severity];
}

export function severityEmoji(severity: SeverityLevel): string {
  return TONE_EMOJI[SEVERITY_TONE[severity]];
}

export function severityGlyph(severity: SeverityLevel): Glyph {
  return TONE_GLYPH[SEVERITY_TONE[severity]];
}
