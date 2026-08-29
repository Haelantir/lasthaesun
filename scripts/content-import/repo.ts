/**
 * Everything that touches the repository: what is already there, what may be
 * overwritten, and the text edits that register a new problem.
 *
 * The edits are string insertions into `index.ts` and `taxonomy.ts` rather than
 * a code transform, for the same reason the output is hand-shaped: these files
 * are read and edited by people, and a formatter-driven rewrite of the whole
 * file would turn a one-line addition into an unreviewable diff.
 */
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

import type { DomainSeed, ObjectCategorySeed, ProblemSeed, SystemSeed } from '../../src/content/types';
import type { ImportError } from './build';
import { emitDomain, emitObject, emitSystem, exportName } from './emit';
import type { TaxonomyAction, TaxonomySnapshot } from './taxonomy';

export interface RepoPaths {
  root: string;
  problemsDir: string;
  indexFile: string;
  taxonomyFile: string;
  baselineFile: string;
}

export function repoPaths(root: string): RepoPaths {
  return {
    root,
    problemsDir: path.join(root, 'src', 'content', 'problems'),
    indexFile: path.join(root, 'src', 'content', 'index.ts'),
    taxonomyFile: path.join(root, 'src', 'content', 'taxonomy.ts'),
    baselineFile: path.join(root, 'scripts', 'content-quality', 'baseline.json'),
  };
}

export interface RepoState {
  problems: ProblemSeed[];
  taxonomy: TaxonomySnapshot;
  /** Slugs frozen as the Gold Set. Never overwritten, whatever the flags say. */
  goldSlugs: Set<string>;
}

export async function loadRepoState(paths: RepoPaths): Promise<RepoState> {
  // pathToFileURL, because a bare Windows path is not a valid ESM specifier.
  const indexUrl = pathToFileURL(path.join(paths.root, 'src', 'content', 'index.ts')).href;
  const content = (await import(indexUrl)) as {
    problems: ProblemSeed[];
    domains: DomainSeed[];
    objectCategories: ObjectCategorySeed[];
    systems: SystemSeed[];
  };

  let goldSlugs = new Set<string>();
  if (fs.existsSync(paths.baselineFile)) {
    const baseline = JSON.parse(fs.readFileSync(paths.baselineFile, 'utf8')) as { goldSlugs?: string[] };
    goldSlugs = new Set(baseline.goldSlugs ?? []);
  }

  return {
    problems: content.problems,
    taxonomy: {
      domains: content.domains,
      objectCategories: content.objectCategories,
      systems: content.systems,
    },
    goldSlugs,
  };
}

export type OverwriteMode = 'refuse' | 'replace' | 'replace-published';

/**
 * Collision rules.
 *
 * A slug that already exists is a mistake by default — two files exporting the
 * same problem is not something to resolve silently. `--replace` opts in;
 * `--force` extends that to a page that is currently published; nothing extends
 * it to the Gold Set, which is the corpus every later page is measured against.
 */
export function checkCollisions(
  seed: ProblemSeed,
  state: RepoState,
  paths: RepoPaths,
  mode: OverwriteMode,
  /** Slugs and paths claimed earlier in the same batch. */
  claimed: { slugs: Map<string, string>; paths: Map<string, string> },
): ImportError[] {
  const errors: ImportError[] = [];
  const targetFile = path.join(paths.problemsDir, `${seed.slug}.ts`);

  const claimedBy = claimed.slugs.get(seed.slug);
  if (claimedBy) {
    errors.push({ field: 'SLUG', message: `"${seed.slug}" is already used by ${claimedBy} in this batch` });
  }

  const existing = state.problems.find((p) => p.slug === seed.slug);
  if (existing) {
    if (state.goldSlugs.has(seed.slug)) {
      errors.push({
        field: 'SLUG',
        message: `"${seed.slug}" is in the frozen Gold Set. The importer will not overwrite it under any flag.`,
      });
    } else if (mode === 'refuse') {
      errors.push({
        field: 'SLUG',
        message: `"${seed.slug}" already exists. Pass --replace to overwrite it.`,
      });
    } else if (existing.status === 'published' && mode !== 'replace-published') {
      errors.push({
        field: 'SLUG',
        message: `"${seed.slug}" is currently published. Pass --replace --force to overwrite a live page.`,
      });
    }
  } else if (fs.existsSync(targetFile) && mode === 'refuse') {
    errors.push({ field: 'SLUG', message: `${path.relative(paths.root, targetFile)} already exists on disk.` });
  }

  const pathClaimedBy = claimed.paths.get(seed.canonicalPath);
  if (pathClaimedBy) {
    errors.push({
      field: 'CANONICAL_PATH',
      message: `"${seed.canonicalPath}" is already used by ${pathClaimedBy} in this batch`,
    });
  }

  const takenBy = state.problems.find((p) => p.canonicalPath === seed.canonicalPath && p.slug !== seed.slug);
  if (takenBy) {
    errors.push({
      field: 'CANONICAL_PATH',
      message: `"${seed.canonicalPath}" already belongs to "${takenBy.slug}"`,
    });
  }

  const taxonomyPaths = [
    ...state.taxonomy.domains,
    ...state.taxonomy.objectCategories,
    ...state.taxonomy.systems,
  ].map((node) => node.canonicalPath);
  if (taxonomyPaths.includes(seed.canonicalPath)) {
    errors.push({ field: 'CANONICAL_PATH', message: `"${seed.canonicalPath}" is a taxonomy hub path` });
  }

  const existingCanonical = new Set(state.problems.map((p) => p.canonicalPath));
  const existingAliases = new Set(state.problems.flatMap((p) => p.aliases ?? []));
  for (const alias of seed.aliases ?? []) {
    if (existingCanonical.has(alias) || claimed.paths.has(alias)) {
      errors.push({ field: 'ALIASES', message: `"${alias}" collides with a real page path` });
    }
    if (existingAliases.has(alias)) {
      errors.push({ field: 'ALIASES', message: `"${alias}" is already an alias of another page` });
    }
    if (taxonomyPaths.includes(alias)) {
      errors.push({ field: 'ALIASES', message: `"${alias}" is a taxonomy hub path` });
    }
  }

  return errors;
}

/** Cross-references have to resolve to a record that exists, draft or not. */
export function checkReferences(
  seed: ProblemSeed,
  state: RepoState,
  batchSlugs: Set<string>,
): ImportError[] {
  const known = new Set([...state.problems.map((p) => p.slug), ...batchSlugs]);
  const errors: ImportError[] = [];

  seed.related?.forEach((item, index) => {
    if (!known.has(item.slug)) {
      errors.push({
        field: `RELATED[${index}].slug`,
        message: `"${item.slug}" is not a problem in this repository. Reserve it as a draft first, or point somewhere real.`,
      });
    }
  });

  seed.actions?.forEach((action, index) => {
    if (action.destinationProblemSlug && !known.has(action.destinationProblemSlug)) {
      errors.push({
        field: `ACTIONS[${index}].destination_problem_slug`,
        message: `"${action.destinationProblemSlug}" is not a problem in this repository.`,
      });
    }
  });

  return errors;
}

/* -------------------------------------------------------------------------- */
/* Text edits                                                                 */
/* -------------------------------------------------------------------------- */

/** Adds the import and the array entry, both in the place a person would. */
export function registerInIndex(source: string, seed: ProblemSeed): string {
  const name = exportName(seed.slug);
  const importLine = `import { ${name} } from './problems/${seed.slug}';`;
  if (source.includes(importLine)) return source;

  const lines = source.split('\n');
  const importPattern = /^import \{ \w+ \} from '\.\/problems\/([^']+)';$/;

  let insertAt = -1;
  for (let i = 0; i < lines.length; i += 1) {
    const match = importPattern.exec(lines[i]!);
    if (!match) continue;
    if (match[1]! > seed.slug) {
      insertAt = i;
      break;
    }
    insertAt = i + 1;
  }
  if (insertAt === -1) throw new Error('Could not find the problem imports in src/content/index.ts');
  lines.splice(insertAt, 0, importLine);

  const arrayStart = lines.findIndex((l) => l.startsWith('export const problems: ProblemSeed[] = ['));
  if (arrayStart === -1) throw new Error('Could not find the problems array in src/content/index.ts');
  let entryAt = -1;
  for (let i = arrayStart + 1; i < lines.length; i += 1) {
    if (lines[i]!.startsWith('];')) {
      entryAt = i;
      break;
    }
    if (lines[i]!.trimStart().startsWith('...')) {
      entryAt = i;
      break;
    }
  }
  if (entryAt === -1) throw new Error('Could not find the end of the problems array');
  if (!lines.slice(arrayStart, entryAt).some((l) => l.trim() === `${name},`)) {
    lines.splice(entryAt, 0, `  ${name},`);
  }

  return lines.join('\n');
}

/** Inserts new taxonomy records into the right array in taxonomy.ts. */
export function registerTaxonomy(source: string, steps: TaxonomyAction[]): string {
  let result = source;

  for (const step of steps) {
    if (step.action !== 'create') continue;

    if (step.level === 'domain') {
      result = insertIntoArray(result, 'export const domains: DomainSeed[] = [', emitDomain(step.record));
    } else if (step.level === 'object') {
      result = insertIntoArray(
        result,
        'export const objectCategories: ObjectCategorySeed[] = [',
        emitObject(step.record),
      );
    } else {
      result = insertIntoArray(result, 'export const systems: SystemSeed[] = [', emitSystem(step.record));
    }
  }

  return result;
}

/**
 * Appends a record to the end of one array literal, before any spread that
 * generates records programmatically — those belong last, as they do today.
 */
function insertIntoArray(source: string, header: string, record: string): string {
  const lines = source.split('\n');
  const start = lines.findIndex((l) => l.startsWith(header));
  if (start === -1) throw new Error(`Could not find "${header}" in taxonomy.ts`);

  let depth = 0;
  let end = -1;
  let spreadAt = -1;
  for (let i = start; i < lines.length; i += 1) {
    const line = lines[i]!;
    if (i > start && spreadAt === -1 && /^ {2}\.\.\.\(/.test(line)) spreadAt = i;
    for (const char of line) {
      if (char === '[') depth += 1;
      if (char === ']') depth -= 1;
    }
    if (i > start && depth === 0) {
      end = i;
      break;
    }
  }
  if (end === -1) throw new Error(`Could not find the end of "${header}"`);

  lines.splice(spreadAt === -1 ? end : spreadAt, 0, record);
  return lines.join('\n');
}
