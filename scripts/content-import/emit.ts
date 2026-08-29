/**
 * `ProblemSeed` -> TypeScript source, in the shape a person would have typed.
 *
 * The output has to be indistinguishable from the hand-authored files, because
 * from the moment it lands it is treated exactly like them: reviewed in a diff,
 * edited by hand, read by whoever picks the topic up next. So: the same block
 * comments, the same key order, long strings broken onto their own line the way
 * the existing files do, and no banner announcing that a machine wrote it.
 */
import type {
  DomainSeed,
  ObjectCategorySeed,
  ProblemSeed,
  SystemSeed,
} from '../../src/content/types';

const RULE = '  /* ---------------------------------------------------------------- Block';
const WRAP_AT = 112;

/** Single quotes by default, double when the value contains an apostrophe. */
export function quote(value: string): string {
  const escaped = value.replace(/\\/g, '\\\\');
  if (!escaped.includes("'")) return `'${escaped}'`;
  if (!escaped.includes('"')) return `"${escaped}"`;
  return `'${escaped.replace(/'/g, "\\'")}'`;
}

/** `key: 'value',` on one line, or wrapped onto the next when it is too long. */
function line(indent: string, key: string, literal: string): string {
  const single = `${indent}${key}: ${literal},`;
  if (single.length <= WRAP_AT) return single;
  return `${indent}${key}:\n${indent}  ${literal},`;
}

function stringLine(indent: string, key: string, value: string | undefined): string | null {
  if (value === undefined) return null;
  return line(indent, key, quote(value));
}

function rawLine(indent: string, key: string, literal: string | undefined): string | null {
  if (literal === undefined) return null;
  return `${indent}${key}: ${literal},`;
}

function block(indent: string, key: string, entries: (string | null)[][]): string[] {
  const out: string[] = [`${indent}${key}: [`];
  for (const entry of entries) {
    out.push(`${indent}  {`);
    for (const item of entry) if (item !== null) out.push(item);
    out.push(`${indent}  },`);
  }
  out.push(`${indent}],`);
  return out;
}

/**
 * `whyItMatters` is stored as paragraphs joined with a blank line. The
 * hand-authored files write that as an array with `.join('\n\n')` rather than
 * one string containing escapes, so a paragraph stays readable in the source.
 */
function whyItMattersLines(value: string): string[] {
  const paragraphs = value.split('\n\n').filter((p) => p.trim() !== '');
  if (paragraphs.length <= 1) {
    return [line('  ', 'whyItMatters', quote(value))];
  }
  const out = ['  whyItMatters: ['];
  for (const paragraph of paragraphs) out.push(`    ${quote(paragraph)},`);
  out.push("  ].join('\\n\\n'),");
  return out;
}

/** `chirping-smoke-alarm` -> `chirpingSmokeAlarm` */
export function exportName(slug: string): string {
  return slug.replace(/-([a-z0-9])/g, (_, c: string) => c.toUpperCase());
}

export function emitProblemFile(seed: ProblemSeed): string {
  const out: string[] = [];
  const push = (...lines: (string | null)[]) => {
    for (const item of lines) if (item !== null) out.push(item);
  };

  out.push("import type { ProblemSeed } from '../types';", '');
  out.push(`export const ${exportName(seed.slug)}: ProblemSeed = {`);

  push(`${RULE} 1 */`);
  push(stringLine('  ', 'systemSlug', seed.systemSlug));
  push(stringLine('  ', 'slug', seed.slug));
  push(stringLine('  ', 'canonicalPath', seed.canonicalPath));
  push(stringLine('  ', 'name', seed.name));
  push(stringLine('  ', 'eyebrow', seed.eyebrow));
  out.push('');
  push(stringLine('  ', 'h1', seed.h1));
  push(stringLine('  ', 'seoTitle', seed.seoTitle));
  push(stringLine('  ', 'metaDescription', seed.metaDescription));

  if (seed.aliases && seed.aliases.length > 0) {
    out.push('');
    push(line('  ', 'aliases', `[${seed.aliases.map(quote).join(', ')}]`));
  }

  out.push('');
  push(rawLine('  ', 'status', quote(seed.status)));
  push(rawLine('  ', 'indexable', String(seed.indexable)));

  out.push('');
  push(`${RULE} 2 */`);
  push(stringLine('  ', 'verdict', seed.verdict));
  push(stringLine('  ', 'urgency', seed.urgency));
  push(stringLine('  ', 'safetyRisk', seed.safetyRisk));
  push(stringLine('  ', 'fixDifficulty', seed.fixDifficulty));
  push(stringLine('  ', 'canIUseItQuestion', seed.canIUseItQuestion));
  push(stringLine('  ', 'canIUseItLabel', seed.canIUseItLabel));

  out.push('');
  push(stringLine('  ', 'shortAnswer', seed.shortAnswer));

  out.push('');
  push(stringLine('  ', 'whyItMattersHeading', seed.whyItMattersHeading));
  if (seed.whyItMatters !== undefined) out.push(...whyItMattersLines(seed.whyItMatters));

  if (seed.redFlagsHeading !== undefined) {
    out.push('');
    push(stringLine('  ', 'redFlagsHeading', seed.redFlagsHeading));
  }

  if (seed.lastReviewedAt || seed.reviewScope || seed.disclaimer) {
    out.push('');
    if (seed.lastReviewedAt) {
      push(rawLine('  ', 'lastReviewedAt', `new Date(${quote(seed.lastReviewedAt.toISOString())})`));
    }
    push(stringLine('  ', 'reviewScope', seed.reviewScope));
    push(stringLine('  ', 'disclaimer', seed.disclaimer));
  }

  if (seed.scenarios?.length) {
    out.push('', `${RULE} 3 */`);
    out.push(
      ...block('  ', 'scenarios', seed.scenarios.map((s) => [
        stringLine('      ', 'slug', s.slug),
        stringLine('      ', 'label', s.label),
        stringLine('      ', 'shortDescription', s.shortDescription),
        stringLine('      ', 'verdictOverride', s.verdictOverride),
        stringLine('      ', 'urgencyOverride', s.urgencyOverride),
        stringLine('      ', 'resultHeadline', s.resultHeadline),
        stringLine('      ', 'resultBody', s.resultBody),
        stringLine('      ', 'recommendedAction', s.recommendedAction),
      ])),
    );
  }

  if (seed.consequences?.length) {
    out.push('', `${RULE} 4 */`);
    out.push(
      ...block('  ', 'consequences', seed.consequences.map((s) => [
        stringLine('      ', 'stageLabel', s.stageLabel),
        stringLine('      ', 'title', s.title),
        stringLine('      ', 'description', s.description),
        stringLine('      ', 'severity', s.severity),
        stringLine('      ', 'chainLabel', s.chainLabel),
      ])),
    );
  }

  if (seed.windows?.length) {
    out.push('', `${RULE} 5 */`);
    out.push(
      ...block('  ', 'windows', seed.windows.map((s) => [
        stringLine('      ', 'situation', s.situation),
        stringLine('      ', 'ignoreAnswer', s.ignoreAnswer),
        stringLine('      ', 'severity', s.severity),
        stringLine('      ', 'whatToDo', s.whatToDo),
      ])),
    );
  }

  if (seed.actions?.length) {
    out.push('', `${RULE} 6 */`);
    out.push(
      ...block('  ', 'actions', seed.actions.map((s) => [
        stringLine('      ', 'title', s.title),
        stringLine('      ', 'body', s.body),
        stringLine('      ', 'destinationProblemSlug', s.destinationProblemSlug),
        stringLine('      ', 'destinationLabel', s.destinationLabel),
      ])),
    );
  }

  if (seed.flags?.length) {
    out.push('', `${RULE} 8 */`);
    out.push(
      ...block('  ', 'flags', seed.flags.map((s) => [
        stringLine('      ', 'title', s.title),
        stringLine('      ', 'description', s.description),
        stringLine('      ', 'severity', s.severity),
      ])),
    );
  }

  if (seed.faqs?.length) {
    out.push('', `${RULE} 10 */`);
    out.push(
      ...block('  ', 'faqs', seed.faqs.map((s) => [
        stringLine('      ', 'question', s.question),
        stringLine('      ', 'answer', s.answer),
      ])),
    );
  }

  if (seed.sources?.length) {
    out.push('', `${RULE} 11 */`);
    out.push(
      ...block('  ', 'sources', seed.sources.map((s) => [
        stringLine('      ', 'publisher', s.publisher),
        stringLine('      ', 'title', s.title),
        rawLine('      ', 'url', s.url === null ? 'null' : quote(s.url)),
        stringLine('      ', 'sourceType', s.sourceType),
        stringLine('      ', 'notes', s.notes),
      ])),
    );
  }

  if (seed.resources?.length) {
    out.push('', `${RULE} 7 */`);
    out.push(
      ...block('  ', 'resources', seed.resources.map((s) => [
        stringLine('      ', 'title', s.title),
        stringLine('      ', 'description', s.description),
        stringLine('      ', 'kind', s.kind),
        rawLine('      ', 'url', s.url === null ? 'null' : quote(s.url)),
        rawLine('      ', 'affiliate', String(s.affiliate)),
      ])),
    );
  }

  if (seed.related?.length) {
    out.push('', `${RULE} 12 */`);
    out.push('  related: [');
    for (const item of seed.related) {
      const inline = `    { slug: ${quote(item.slug)}, anchorText: ${quote(item.anchorText)}, relationshipType: ${quote(item.relationshipType)} },`;
      if (inline.length <= WRAP_AT) {
        out.push(inline);
      } else {
        out.push('    {');
        out.push(`      slug: ${quote(item.slug)},`);
        out.push(`      anchorText: ${quote(item.anchorText)},`);
        out.push(`      relationshipType: ${quote(item.relationshipType)},`);
        out.push('    },');
      }
    }
    out.push('  ],');
  }

  out.push('};', '');
  return out.join('\n');
}

/* -------------------------------------------------------------------------- */
/* Taxonomy records                                                           */
/* -------------------------------------------------------------------------- */

function taxonomyCommon(record: DomainSeed, indent = '    '): string[] {
  const out: (string | null)[] = [
    stringLine(indent, 'slug', record.slug),
    stringLine(indent, 'name', record.name),
  ];
  if ('singularName' in record && (record as ObjectCategorySeed).singularName) {
    out.push(stringLine(indent, 'singularName', (record as ObjectCategorySeed).singularName));
  }
  out.push(
    stringLine(indent, 'canonicalPath', record.canonicalPath),
    stringLine(indent, 'shortDescription', record.shortDescription),
    stringLine(indent, 'hubHeading', record.hubHeading),
    stringLine(indent, 'seoTitle', record.seoTitle),
    stringLine(indent, 'metaDescription', record.metaDescription),
    rawLine(indent, 'sortOrder', String(record.sortOrder)),
    stringLine(indent, 'status', record.status),
    rawLine(indent, 'indexable', String(record.indexable)),
  );
  return out.filter((item): item is string => item !== null);
}

export function emitDomain(record: DomainSeed): string {
  return ['  {', ...taxonomyCommon(record), '  },'].join('\n');
}

export function emitObject(record: ObjectCategorySeed): string {
  const body = taxonomyCommon(record);
  return ['  {', `    domainSlug: ${quote(record.domainSlug)},`, ...body, '  },'].join('\n');
}

export function emitSystem(record: SystemSeed): string {
  const body = taxonomyCommon(record);
  return ['  {', `    objectSlug: ${quote(record.objectSlug)},`, ...body, '  },'].join('\n');
}
