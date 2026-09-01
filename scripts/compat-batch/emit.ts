/**
 * Turns a validated pairing into the `.ts` file a person would have written.
 *
 * Deterministic: same record in, same bytes out, every time. The output uses the
 * same block comments and key order as the records already in the repository, so
 * an imported pairing is edited afterwards like any other file.
 */
import fs from 'node:fs';
import path from 'node:path';

import type { Pairing } from '../../src/content/compat/types';

/** camelCase export name: `aluminum-foil` + `air-fryer` -> `aluminumFoilInAirFryer`. */
export function exportName(pairing: Pick<Pairing, 'subjectSlug' | 'targetSlug' | 'relation'>): string {
  const camel = (slug: string, upperFirst: boolean) =>
    slug
      .split('-')
      .map((part, index) =>
        index === 0 && !upperFirst ? part : part.charAt(0).toUpperCase() + part.slice(1),
      )
      .join('');
  const relation = pairing.relation.split('-').map((p) => p.charAt(0).toUpperCase() + p.slice(1)).join('');
  return `${camel(pairing.subjectSlug, false)}${relation}${camel(pairing.targetSlug, true)}`;
}

export function recordFileName(pairing: Pick<Pairing, 'subjectSlug' | 'targetSlug'>): string {
  return `${pairing.subjectSlug}--${pairing.targetSlug}.ts`;
}

/** Single-quoted TS string literal. */
function str(value: string): string {
  return `'${value.replace(/\\/g, '\\\\').replace(/'/g, "\\'")}'`;
}

function list(values: string[], indent: string): string {
  if (values.length === 0) return '[]';
  return `[\n${values.map((v) => `${indent}  ${str(v)},`).join('\n')}\n${indent}]`;
}

export function renderRecord(pairing: Pairing): string {
  const name = exportName(pairing);

  const mechanisms = pairing.mechanisms
    .map(
      (m) =>
        `    {\n      title: ${str(m.title)},\n      body: ${str(m.body)},\n    },`,
    )
    .join('\n');

  const sources = pairing.sources
    .map(
      (s) =>
        `    {\n      publisher: ${str(s.publisher)},\n      title: ${str(s.title)},\n` +
        `      url: ${str(s.url)},\n      kind: ${str(s.kind)},\n    },`,
    )
    .join('\n');

  return `import type { Pairing } from '../types';

/**
 * ${pairing.subjectName} ${pairing.relation.replace('-', ' ')} ${pairing.targetName}.
 *
 * Written by the pinned content writer (CONTENT_WRITER_MODEL) against
 * docs/compat-authoring-prompt.txt and reproduced verbatim. Every source URL
 * below returned HTTP 200 when this file was written; a source whose URL could
 * not be verified was dropped rather than guessed at.
 */
export const ${name}: Pairing = {
  subjectSlug: ${str(pairing.subjectSlug)},
  subjectName: ${str(pairing.subjectName)},
  subjectKind: ${str(pairing.subjectKind)},
  subjectNote: ${str(pairing.subjectNote)},

  relation: ${str(pairing.relation)},

  targetSlug: ${str(pairing.targetSlug)},
  targetName: ${str(pairing.targetName)},
  targetKind: ${str(pairing.targetKind)},
  targetNote: ${str(pairing.targetNote)},

  eyebrow: ${str(pairing.eyebrow)},
  h1: ${str(pairing.h1)},
  seoTitle: ${str(pairing.seoTitle)},
  metaDescription:
    ${str(pairing.metaDescription)},

  verdict: ${str(pairing.verdict)},
  shortAnswer:
    ${str(pairing.shortAnswer)},

  mainRisk: ${str(pairing.mainRisk)},
  damages: ${str(pairing.damages)},
  alternative: ${str(pairing.alternative)},

  conditionsOk: ${list(pairing.conditionsOk, '  ')},
  conditionsNever: ${list(pairing.conditionsNever, '  ')},

  mechanisms: [
${mechanisms}
  ],

  calloutLabel: ${str(pairing.calloutLabel)},
  calloutBody: ${list(pairing.calloutBody, '  ')},

  sources: [
${sources}
  ],

  reviewedAt: new Date('${pairing.reviewedAt.toISOString()}'),
  reviewScope:
    ${str(pairing.reviewScope)},
};
`;
}

/**
 * Adds the import and the array entry to `src/content/compat/index.ts`.
 *
 * Line endings are normalised to LF before matching. Git's `core.autocrlf` can
 * hand this file back with CRLF on Windows even when the blob is LF, and an
 * anchored regex silently never matches — the same trap that bites
 * `scripts/content-import/repo.ts`.
 */
export function registerInIndex(indexFile: string, pairing: Pairing): 'added' | 'already-there' {
  const source = fs.readFileSync(indexFile, 'utf8').replace(/\r\n/g, '\n');
  const name = exportName(pairing);
  const file = recordFileName(pairing).replace(/\.ts$/, '');
  const importLine = `import { ${name} } from './pairings/${file}';`;

  if (source.includes(importLine)) return 'already-there';

  const lines = source.split('\n');

  const lastImport = lines.reduce(
    (found, line, index) => (line.startsWith("import { ") && line.includes("./pairings/") ? index : found),
    -1,
  );
  if (lastImport === -1) {
    throw new Error(`Could not find the pairing imports in ${path.basename(indexFile)}.`);
  }
  lines.splice(lastImport + 1, 0, importLine);

  const arrayStart = lines.findIndex((line) => line.startsWith('export const PAIRINGS'));
  if (arrayStart === -1) throw new Error(`Could not find PAIRINGS in ${path.basename(indexFile)}.`);
  const arrayEnd = lines.findIndex((line, index) => index > arrayStart && line.startsWith('];'));
  if (arrayEnd === -1) throw new Error(`PAIRINGS in ${path.basename(indexFile)} is not closed.`);
  lines.splice(arrayEnd, 0, `  ${name},`);

  fs.writeFileSync(indexFile, lines.join('\n'), 'utf8');
  return 'added';
}
