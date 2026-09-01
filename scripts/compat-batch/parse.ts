/**
 * Reads the writer's field output into a `Pairing`, or into a list of errors.
 *
 * Deliberately strict and deliberately offline. Nothing here calls the network
 * or an API — the whole file is a pure function from text to a record, which is
 * what makes it testable and what stops a malformed draft from ever reaching a
 * page. The URL check that follows is the one network step, and it lives in
 * `run.ts` where it can be seen.
 */
import type { Pairing } from '../../src/content/compat/types';

const VERDICTS = ['yes', 'yes_with_limits', 'risky', 'no'] as const;
const RELATIONS = ['in', 'on', 'with', 'plugged-into', 'washed-in', 'dried-in', 'stored-in'] as const;
const SOURCE_KINDS = [
  'government',
  'regulation',
  'manufacturer',
  'standards_body',
  'industry',
  'academic',
  'other',
] as const;

export interface ParseResult {
  pairing?: Pairing;
  errors: string[];
}

/** `FIELD:` at column 0, everything until the next one is its value. */
function readFields(text: string): Map<string, string> {
  const fields = new Map<string, string>();
  const lines = text.replace(/\r\n/g, '\n').split('\n');

  let key: string | null = null;
  let buffer: string[] = [];

  const flush = () => {
    if (key) fields.set(key, buffer.join('\n').trim());
    buffer = [];
  };

  for (const line of lines) {
    const header = /^([A-Z][A-Z0-9_]*):\s*$/.exec(line);
    if (header) {
      flush();
      key = header[1]!;
      continue;
    }
    if (key) buffer.push(line);
  }
  flush();
  return fields;
}

/** Bullet list. The prompt requires `- `; a stray `* ` is a format fix. */
function bullets(value: string): string[] {
  return value
    .split('\n')
    .map((line) => line.trim())
    .filter((line) => /^[-*]\s+/.test(line))
    .map((line) => line.replace(/^[-*]\s+/, '').trim())
    .filter((line) => line !== '');
}

/** Paragraphs separated by a blank line. */
function paragraphs(value: string): string[] {
  return value
    .split(/\n\s*\n/)
    .map((block) => block.replace(/\s*\n\s*/g, ' ').trim())
    .filter((block) => block !== '');
}

/**
 * Sub-records: a `- KEY: value` line opens one, indented `KEY: value` lines
 * continue it. Used by MECHANISMS and SOURCES.
 */
function subRecords(value: string): Record<string, string>[] {
  const records: Record<string, string>[] = [];
  let current: Record<string, string> | null = null;
  let lastKey: string | null = null;

  for (const raw of value.split('\n')) {
    const line = raw.trim();
    if (line === '') continue;

    const opener = /^[-*]\s+([A-Z][A-Z0-9_]*):\s*(.*)$/.exec(line);
    if (opener) {
      current = {};
      records.push(current);
      lastKey = opener[1]!.toLowerCase();
      current[lastKey] = opener[2]!.trim();
      continue;
    }

    const field = /^([A-Z][A-Z0-9_]*):\s*(.*)$/.exec(line);
    if (field && current) {
      lastKey = field[1]!.toLowerCase();
      current[lastKey] = field[2]!.trim();
      continue;
    }

    // A wrapped continuation of the previous value.
    if (current && lastKey) current[lastKey] = `${current[lastKey]} ${line}`.trim();
  }

  return records;
}

export function slugify(value: string): string {
  return value
    .toLowerCase()
    .normalize('NFKD')
    .replace(/["'’]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function parsePairing(text: string, reviewedAt: Date): ParseResult {
  const errors: string[] = [];
  const fields = readFields(text);

  const required = (name: string): string => {
    const value = fields.get(name);
    if (!value) {
      errors.push(`${name} is required and missing`);
      return '';
    }
    // The prompt shows placeholders in brackets; a copied one is not content.
    if (/^\[.*\]$/.test(value)) {
      errors.push(`${name} still holds the prompt's placeholder`);
      return '';
    }
    return value;
  };

  const subjectName = required('SUBJECT_NAME');
  const targetName = required('TARGET_NAME');
  const relationRaw = required('RELATION').toLowerCase().replace(/\s+/g, '-');
  const verdictRaw = required('VERDICT').toLowerCase();
  const seoTitle = required('SEO_TITLE');
  const metaDescription = required('META_DESCRIPTION');

  if (relationRaw && !RELATIONS.includes(relationRaw as (typeof RELATIONS)[number])) {
    errors.push(`RELATION must be one of ${RELATIONS.join(', ')} — got "${relationRaw}"`);
  }
  if (verdictRaw && !VERDICTS.includes(verdictRaw as (typeof VERDICTS)[number])) {
    errors.push(`VERDICT must be one of ${VERDICTS.join(', ')} — got "${verdictRaw}"`);
  }
  if (seoTitle.length > 75) errors.push(`SEO_TITLE is ${seoTitle.length} chars, limit is 75`);
  if (metaDescription.length > 170) {
    errors.push(`META_DESCRIPTION is ${metaDescription.length} chars, limit is 170`);
  }

  const h1 = required('H1');
  if (h1 && seoTitle && h1 === seoTitle) errors.push('SEO_TITLE must differ from H1');

  const conditionsOk = bullets(fields.get('CONDITIONS_OK') ?? '');
  const conditionsNever = bullets(fields.get('CONDITIONS_NEVER') ?? '');
  if (conditionsOk.length === 0) errors.push('CONDITIONS_OK is empty — check the "- " bullets');
  if (conditionsNever.length === 0) errors.push('CONDITIONS_NEVER is empty — check the "- " bullets');

  const mechanisms = subRecords(fields.get('MECHANISMS') ?? '')
    .filter((record) => record.title && record.body)
    .map((record) => ({ title: record.title!, body: record.body! }));
  if (mechanisms.length === 0) errors.push('MECHANISMS is empty or has no TITLE/BODY pairs');

  const sources = subRecords(fields.get('SOURCES') ?? '')
    .filter((record) => record.publisher && record.title && record.url)
    .map((record) => ({
      publisher: record.publisher!,
      title: record.title!,
      url: record.url!,
      kind: (SOURCE_KINDS as readonly string[]).includes(record.kind ?? '')
        ? (record.kind as Pairing['sources'][number]['kind'])
        : 'other',
    }));
  if (sources.length === 0) errors.push('SOURCES is empty or has no PUBLISHER/TITLE/URL triples');
  for (const source of sources) {
    if (!/^https:\/\//.test(source.url)) errors.push(`source URL is not https: ${source.url}`);
    if (/example\.(com|org|net)/i.test(source.url)) errors.push(`placeholder source URL: ${source.url}`);
  }

  const calloutBody = paragraphs(fields.get('CALLOUT_BODY') ?? '');
  if (calloutBody.length === 0) errors.push('CALLOUT_BODY is required and missing');

  /* The prompt forbids markdown, and a writer that has just cited forty sources
   * sometimes footnotes the prose anyway — "([fsis.usda.gov](https://…))" inside
   * a sentence, tracking parameters and all. It renders as literal brackets on
   * the page and it shipped once before this check existed. Citations belong in
   * SOURCES; the prose carries none. */
  for (const [name, value] of fields) {
    if (name === 'SOURCES') continue;
    if (/\]\(https?:/i.test(value)) {
      errors.push(`${name} contains a markdown link — citations belong in SOURCES`);
    }
    if (/https?:\/\//i.test(value)) {
      errors.push(`${name} contains a bare URL — citations belong in SOURCES`);
    }
    if (/\*\*|`/.test(value)) errors.push(`${name} contains markdown formatting`);
  }
  // A search-tool artefact, never something a source's own address contains.
  for (const source of sources) {
    if (/utm_source=/i.test(source.url)) {
      errors.push(`source URL carries a tracking parameter: ${source.url}`);
    }
  }

  if (errors.length > 0) return { errors };

  return {
    errors: [],
    pairing: {
      subjectSlug: slugify(subjectName),
      subjectName,
      subjectKind: fields.get('SUBJECT_KIND') ?? 'Material',
      subjectNote: fields.get('SUBJECT_NOTE') ?? '',

      relation: relationRaw as Pairing['relation'],

      targetSlug: slugify(targetName),
      targetName,
      targetKind: fields.get('TARGET_KIND') ?? 'Appliance',
      targetNote: fields.get('TARGET_NOTE') ?? '',

      eyebrow: fields.get('EYEBROW') ?? '',
      h1,
      seoTitle,
      metaDescription,

      verdict: verdictRaw as Pairing['verdict'],
      shortAnswer: required('SHORT_ANSWER'),

      mainRisk: fields.get('METRIC_MAIN_RISK') ?? '',
      damages: fields.get('METRIC_DAMAGES') ?? '',
      alternative: fields.get('METRIC_ALTERNATIVE') ?? '',

      conditionsOk,
      conditionsNever,
      mechanisms,

      calloutLabel: fields.get('CALLOUT_LABEL') ?? '',
      calloutBody,

      sources,
      reviewedAt,
      reviewScope: fields.get('REVIEW_SCOPE') ?? '',
    },
  };
}

/* -------------------------------------------------------------------------- */
/* subjects-compat.txt                                                        */
/* -------------------------------------------------------------------------- */

export interface CompatSubject {
  /** As typed, e.g. "Cooking Spray in an Air Fryer". */
  line: string;
  subject: string;
  relation: string;
  target: string;
  notes: string;
}

const CONNECTIVES: { pattern: RegExp; relation: string }[] = [
  { pattern: /\s+plugged\s+into\s+/i, relation: 'plugged-into' },
  { pattern: /\s+in\s+the\s+dishwasher\b/i, relation: 'washed-in' },
  { pattern: /\s+stored\s+in\s+/i, relation: 'stored-in' },
  { pattern: /\s+washed\s+in\s+/i, relation: 'washed-in' },
  { pattern: /\s+dried\s+in\s+/i, relation: 'dried-in' },
  { pattern: /\s+in\s+/i, relation: 'in' },
  { pattern: /\s+on\s+/i, relation: 'on' },
  { pattern: /\s+with\s+/i, relation: 'with' },
];

/** "an Air Fryer" -> "Air Fryer". Articles are grammar, not part of the name. */
function stripArticle(value: string): string {
  return value.replace(/^(?:an?|the)\s+/i, '').trim();
}

/**
 * One pairing per unindented line; indented lines beneath it are editorial
 * notes for that pairing, exactly like `subjects.txt`.
 *
 *   Cooking Spray in an Air Fryer
 *     에어로졸 추진제와 논스틱 코팅 손상이 핵심.
 *
 * "Can I Use X in a Y?" is accepted too, because that is how the question gets
 * pasted in. Blank lines and `#` comments are ignored.
 */
export function parseCompatSubjects(source: string): { subjects: CompatSubject[]; dropped: string[] } {
  const lines = source
    .replace(/^﻿/, '')
    .split(/\r?\n/)
    .map((raw) => raw.replace(/\s+$/, ''))
    .filter((line) => line.trim() !== '' && !line.trim().startsWith('#'));

  const subjects: CompatSubject[] = [];
  const dropped: string[] = [];

  for (const line of lines) {
    const text = line.replace(/^\s*[-*]\s+/, '').trim();

    if (/^\s/.test(line)) {
      const current = subjects[subjects.length - 1];
      if (current) current.notes = current.notes === '' ? text : `${current.notes} ${text}`;
      else dropped.push(text);
      continue;
    }

    // "Can I Use Foil in an Air Fryer?" and "Foil in an Air Fryer" are the same
    // instruction; only the middle of the sentence carries information.
    const bare = text
      .replace(/^can\s+i\s+(?:use|put)\s+/i, '')
      .replace(/\?+\s*$/, '')
      .trim();

    const match = CONNECTIVES.find((candidate) => candidate.pattern.test(bare));
    if (!match) {
      dropped.push(text);
      continue;
    }

    const index = bare.search(match.pattern);
    const separator = match.pattern.exec(bare)![0];
    const subject = stripArticle(bare.slice(0, index).trim());
    const target = stripArticle(bare.slice(index + separator.length).trim());

    if (subject === '' || target === '') {
      dropped.push(text);
      continue;
    }

    subjects.push({ line: text, subject, relation: match.relation, target, notes: '' });
  }

  return { subjects, dropped };
}
