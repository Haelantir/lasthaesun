/**
 * The input format, described once as data.
 *
 * Everything the parser knows about the text format lives here: which field
 * names exist, which of them hold a single value and which hold a list, and
 * which keys a list item may use. The parser itself contains no field names.
 *
 * That matters for robustness. A line only starts a new field when its name is
 * one of these, so a sentence that happens to begin "Note:" or "Warning:" stays
 * part of the prose it belongs to instead of silently becoming a new section.
 */

export type FieldSpec =
  /** One value, possibly spanning many lines and paragraphs. */
  | { kind: 'scalar' }
  /** A bulleted list whose items are `key: value` pairs. */
  | { kind: 'list'; keys: readonly string[]; aliases?: Readonly<Record<string, string>> }
  /** A bulleted list of bare values, one per bullet. */
  | { kind: 'bareList' };

export const FIELDS = {
  SYSTEM: { kind: 'scalar' },
  SLUG: { kind: 'scalar' },
  CANONICAL_PATH: { kind: 'scalar' },
  NAME: { kind: 'scalar' },
  EYEBROW: { kind: 'scalar' },
  H1: { kind: 'scalar' },
  SEO_TITLE: { kind: 'scalar' },
  META_DESCRIPTION: { kind: 'scalar' },
  VERDICT: { kind: 'scalar' },
  URGENCY: { kind: 'scalar' },
  SAFETY_RISK: { kind: 'scalar' },
  FIX_DIFFICULTY: { kind: 'scalar' },
  CAN_I_USE_IT_QUESTION: { kind: 'scalar' },
  CAN_I_USE_IT_LABEL: { kind: 'scalar' },
  SHORT_ANSWER: { kind: 'scalar' },
  WHY_IT_MATTERS_HEADING: { kind: 'scalar' },
  WHY_IT_MATTERS: { kind: 'scalar' },
  RED_FLAGS_HEADING: { kind: 'scalar' },
  LAST_REVIEWED: { kind: 'scalar' },
  REVIEW_SCOPE: { kind: 'scalar' },
  DISCLAIMER: { kind: 'scalar' },
  STATUS: { kind: 'scalar' },
  INDEXABLE: { kind: 'scalar' },

  SCENARIOS: {
    kind: 'list',
    keys: [
      'slug',
      'label',
      'short_description',
      'verdict_override',
      'urgency_override',
      'result_headline',
      'result_body',
      'recommended_action',
    ],
  },
  CONSEQUENCES: {
    kind: 'list',
    keys: ['stage_label', 'title', 'description', 'severity', 'chain_label'],
  },
  WINDOWS: {
    kind: 'list',
    keys: ['situation', 'ignore_answer', 'severity', 'what_to_do'],
  },
  ACTIONS: {
    kind: 'list',
    keys: ['title', 'body', 'destination_problem_slug', 'destination_label'],
  },
  FLAGS: {
    kind: 'list',
    keys: ['title', 'description', 'severity'],
  },
  FAQS: {
    kind: 'list',
    keys: ['q', 'a', 'question', 'answer'],
    aliases: { question: 'q', answer: 'a' },
  },
  RESOURCES: {
    kind: 'list',
    keys: ['title', 'description', 'kind', 'url', 'affiliate'],
  },
  SOURCES: {
    kind: 'list',
    keys: ['publisher', 'title', 'url', 'source_type', 'notes'],
  },
  RELATED: {
    kind: 'list',
    keys: ['slug', 'anchor_text', 'relationship_type'],
  },

  ALIASES: { kind: 'bareList' },
} as const satisfies Record<string, FieldSpec>;

export type FieldName = keyof typeof FIELDS;

export function isFieldName(name: string): name is FieldName {
  return Object.prototype.hasOwnProperty.call(FIELDS, name);
}

export function fieldSpec(name: FieldName): FieldSpec {
  return FIELDS[name] as FieldSpec;
}

/** Fields that must be present and non-empty for an importable problem. */
export const REQUIRED_FIELDS: readonly FieldName[] = [
  'SYSTEM',
  'SLUG',
  'CANONICAL_PATH',
  'NAME',
  'H1',
  'SEO_TITLE',
  'META_DESCRIPTION',
  'VERDICT',
  'URGENCY',
  'SAFETY_RISK',
  'FIX_DIFFICULTY',
  'CAN_I_USE_IT_QUESTION',
  'CAN_I_USE_IT_LABEL',
  'SHORT_ANSWER',
  'WHY_IT_MATTERS',
  'SCENARIOS',
  'CONSEQUENCES',
  'WINDOWS',
  'ACTIONS',
  'FLAGS',
  'FAQS',
  'SOURCES',
  'LAST_REVIEWED',
  'REVIEW_SCOPE',
];

/** Keys each list item must carry, beyond the optional ones in `keys`. */
export const REQUIRED_ITEM_KEYS: Partial<Record<FieldName, readonly string[]>> = {
  SCENARIOS: ['slug', 'label', 'result_headline', 'result_body', 'recommended_action'],
  CONSEQUENCES: ['stage_label', 'title', 'severity'],
  WINDOWS: ['situation', 'ignore_answer', 'severity', 'what_to_do'],
  ACTIONS: ['title', 'body'],
  FLAGS: ['title'],
  FAQS: ['q', 'a'],
  RESOURCES: ['title', 'description', 'kind'],
  SOURCES: ['publisher', 'title', 'source_type'],
  RELATED: ['slug', 'anchor_text', 'relationship_type'],
};
