/**
 * Tokenizer and parser for the incoming content format.
 *
 * Two passes rather than a pile of regexes. The tokenizer classifies each line
 * into one of four things — a field header, a bullet, a blank, or text — and the
 * parser is a small state machine over that stream. Nothing downstream has to
 * re-read the raw source.
 *
 * The classification rules are deliberately narrow, because the input is prose
 * full of colons, apostrophes, quotes and dashes:
 *
 *   - a line opens a new field only when its name is a known field name
 *     (spec.ts) in upper case followed by a colon;
 *   - inside a list, a line opens a new key only when that key is declared for
 *     that list;
 *   - everything else continues the value being read.
 *
 * So "It is important: check the label" stays prose, and only "SOURCES:" or
 * "  notes:" inside SOURCES starts something new.
 *
 * Bullets are optional. `- slug: …` is the documented form, but a writer who
 * omits the bullet is understood anyway: inside a list, a declared key opens an
 * item when none is open, and the list's OPENING key coming round again ends the
 * current item and starts the next. Without that, a bullet-less document parsed
 * to zero items and failed much later as "SCENARIOS is required and missing",
 * which points at the wrong thing entirely.
 */
import type { FieldName, FieldSpec } from './spec';
import { fieldSpec, isFieldName } from './spec';

export interface ParseIssue {
  line: number;
  message: string;
}

export interface RawItem {
  /** Line the bullet started on, for error messages. */
  line: number;
  values: Map<string, string>;
}

export interface RawDocument {
  scalars: Map<FieldName, { value: string; line: number }>;
  lists: Map<FieldName, RawItem[]>;
  bareLists: Map<FieldName, { values: string[]; line: number }>;
  issues: ParseIssue[];
}

type Token =
  | { kind: 'field'; name: FieldName; inline: string; line: number }
  | { kind: 'bullet'; text: string; line: number }
  | { kind: 'text'; text: string; line: number }
  | { kind: 'blank'; line: number };

const FIELD_HEADER = /^([A-Z][A-Z0-9_]*)\s*:[ \t]*(.*)$/;
const BULLET = /^[ \t]*[-*][ \t]+(.*)$/;
const ITEM_KEY = /^[ \t]*([a-z][a-z0-9_]*)[ \t]*:[ \t]*(.*)$/;

/** Line endings, BOM and non-breaking spaces normalised away up front. */
export function normalizeSource(source: string): string {
  return source
    .replace(/^﻿/, '')
    .replace(/\r\n?/g, '\n')
    .replace(/ /g, ' ');
}

function tokenize(source: string): Token[] {
  const tokens: Token[] = [];
  const lines = normalizeSource(source).split('\n');

  lines.forEach((raw, index) => {
    const line = index + 1;
    const text = raw.replace(/[ \t]+$/, '');

    if (text.trim() === '') {
      tokens.push({ kind: 'blank', line });
      return;
    }

    const header = FIELD_HEADER.exec(text);
    if (header && isFieldName(header[1]!)) {
      tokens.push({ kind: 'field', name: header[1] as FieldName, inline: header[2] ?? '', line });
      return;
    }

    const bullet = BULLET.exec(text);
    if (bullet) {
      tokens.push({ kind: 'bullet', text: bullet[1] ?? '', line });
      return;
    }

    tokens.push({ kind: 'text', text: text.trim(), line });
  });

  return tokens;
}

/**
 * Joins the lines of one value.
 *
 * Hard-wrapped prose becomes one line — the content model stores a paragraph as
 * a single string — and a blank line becomes a paragraph break, which is what
 * `whyItMatters` splits on when it is rendered.
 */
function joinValue(lines: string[]): string {
  const paragraphs: string[] = [];
  let current: string[] = [];

  for (const line of lines) {
    if (line.trim() === '') {
      if (current.length > 0) {
        paragraphs.push(current.join(' '));
        current = [];
      }
      continue;
    }
    current.push(line.trim());
  }
  if (current.length > 0) paragraphs.push(current.join(' '));

  return paragraphs.join('\n\n').trim();
}

/**
 * True when a bullet-less `key: value` line inside a list starts the NEXT item
 * rather than the next key of the current one — that is, when the list's opening
 * key has come round again.
 *
 * Only the opening key can do this. Any other declared key still belongs to the
 * item being read, so bulleted input behaves exactly as it always did: an item
 * never legitimately repeats the key it started with.
 */
function opensNextItem(
  spec: Extract<FieldSpec, { kind: 'list' }>,
  item: RawItem,
  currentKey: string | null,
  name: string,
): boolean {
  const normalise = (k: string) => spec.aliases?.[k] ?? k;
  const opener = normalise(spec.keys[0]!);
  if (normalise(name) !== opener) return false;
  // The opener is either already stored on this item, or is the key currently
  // being read and not yet flushed.
  return item.values.has(opener) || (currentKey !== null && normalise(currentKey) === opener);
}

export function parseDocument(source: string): RawDocument {
  const doc: RawDocument = {
    scalars: new Map(),
    lists: new Map(),
    bareLists: new Map(),
    issues: [],
  };

  const tokens = tokenize(source);

  let field: FieldName | null = null;
  let fieldLine = 0;
  let item: RawItem | null = null;
  let key: string | null = null;
  let buffer: string[] = [];

  const flush = () => {
    if (field === null) {
      buffer = [];
      return;
    }
    const spec = fieldSpec(field);
    const value = joinValue(buffer);
    buffer = [];

    if (spec.kind === 'scalar') {
      if (value !== '') doc.scalars.set(field, { value, line: fieldLine });
      return;
    }
    if (spec.kind === 'bareList') {
      if (value !== '') {
        const entry = doc.bareLists.get(field) ?? { values: [], line: fieldLine };
        entry.values.push(value);
        doc.bareLists.set(field, entry);
      }
      return;
    }
    if (item && key) {
      const normalisedKey = spec.aliases?.[key] ?? key;
      if (value !== '') item.values.set(normalisedKey, value);
    }
  };

  const closeItem = () => {
    flush();
    if (field !== null && item !== null) {
      const spec = fieldSpec(field);
      if (spec.kind === 'list' && item.values.size > 0) {
        const list = doc.lists.get(field) ?? [];
        list.push(item);
        doc.lists.set(field, list);
      }
    }
    item = null;
    key = null;
  };

  for (const token of tokens) {
    if (token.kind === 'field') {
      closeItem();
      field = token.name;
      fieldLine = token.line;
      const spec = fieldSpec(field);
      if (spec.kind === 'list') {
        if (!doc.lists.has(field)) doc.lists.set(field, []);
      } else if (spec.kind === 'bareList') {
        if (!doc.bareLists.has(field)) doc.bareLists.set(field, { values: [], line: token.line });
      }
      if (token.inline.trim() !== '') buffer.push(token.inline);
      continue;
    }

    if (field === null) {
      if (token.kind !== 'blank') {
        doc.issues.push({ line: token.line, message: `Content before the first field header: "${trim(token)}"` });
      }
      continue;
    }

    const spec = fieldSpec(field);

    if (token.kind === 'bullet') {
      if (spec.kind === 'scalar') {
        buffer.push(`- ${token.text}`);
        continue;
      }
      closeItem();
      if (spec.kind === 'bareList') {
        buffer.push(token.text);
        flush();
        continue;
      }
      item = { line: token.line, values: new Map() };
      const first = ITEM_KEY.exec(token.text);
      if (!first || !spec.keys.includes(first[1] as string)) {
        doc.issues.push({
          line: token.line,
          message: `${field} item does not start with a known key. Expected one of: ${spec.keys.join(', ')}`,
        });
        item = null;
        continue;
      }
      key = first[1]!;
      buffer.push(first[2] ?? '');
      continue;
    }

    if (token.kind === 'blank') {
      buffer.push('');
      continue;
    }

    // A bare list holds exactly one value per line, so an unbulleted line is a
    // whole entry. Left to accumulate it would glue the next alias onto this one
    // and produce a single unusable path.
    if (spec.kind === 'bareList') {
      buffer.push(token.text);
      flush();
      continue;
    }

    // A text line. Inside a list it may open the next key — or, when the writer
    // omitted the bullets, the next item.
    if (spec.kind === 'list') {
      const next = ITEM_KEY.exec(token.text);
      const name = next?.[1];
      if (next && name !== undefined && spec.keys.includes(name)) {
        if (item === null || opensNextItem(spec, item, key, name)) {
          closeItem();
          item = { line: token.line, values: new Map() };
        } else {
          flush();
        }
        key = name;
        buffer.push(next[2] ?? '');
        continue;
      }
    }
    buffer.push(token.text);
  }

  closeItem();
  if (field !== null && fieldSpec(field).kind === 'scalar') flush();

  return doc;
}

function trim(token: Token): string {
  const text = token.kind === 'text' ? token.text : token.kind === 'bullet' ? token.text : '';
  return text.length > 60 ? `${text.slice(0, 57)}...` : text;
}
