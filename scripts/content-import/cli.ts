/**
 * Deterministic content importer.
 *
 *   npm run content:import -- ./incoming/problem.txt --dry-run
 *   npm run content:import -- ./incoming/
 *
 * Finished text in, `.ts` content file out. No model is consulted, no prose is
 * rewritten, and no editorial judgement is made anywhere in this path — the
 * importer either converts what it was given or refuses and says why.
 *
 * Batch runs are atomic: every file is parsed, validated and collision-checked
 * before anything is written, so a bad tenth file cannot leave nine imported.
 */
import fs from 'node:fs';
import path from 'node:path';

import type { ProblemSeed } from '../../src/content/types';
import type { ImportError } from './build';
import { buildSeed } from './build';
import { emitProblemFile } from './emit';
import { parseDocument } from './parser';
import type { OverwriteMode, RepoPaths, RepoState } from './repo';
import { checkCollisions, checkReferences, loadRepoState, registerInIndex, registerTaxonomy, repoPaths } from './repo';
import type { TaxonomyAction } from './taxonomy';
import { planTaxonomy } from './taxonomy';

interface Options {
  inputs: string[];
  dryRun: boolean;
  mode: OverwriteMode;
  createTaxonomy: boolean;
}

interface Prepared {
  file: string;
  seed: ProblemSeed;
  taxonomySteps: TaxonomyAction[];
  errors: ImportError[];
}

const INPUT_EXTENSIONS = new Set(['.txt', '.md']);

function parseArgs(argv: string[]): Options {
  const flags = new Set(argv.filter((a) => a.startsWith('--')));
  const inputs = argv.filter((a) => !a.startsWith('--'));
  const replace = flags.has('--replace');
  const force = flags.has('--force');
  return {
    inputs,
    dryRun: flags.has('--dry-run') || flags.has('--check'),
    mode: replace ? (force ? 'replace-published' : 'replace') : 'refuse',
    createTaxonomy: flags.has('--create-taxonomy'),
  };
}

/** One file, or every .txt/.md in a directory, in filename order. */
function collectInputs(inputs: string[]): string[] {
  const files: string[] = [];
  for (const input of inputs) {
    const resolved = path.resolve(input);
    if (!fs.existsSync(resolved)) throw new Error(`No such file or directory: ${input}`);
    if (fs.statSync(resolved).isDirectory()) {
      const found = fs
        .readdirSync(resolved)
        .filter((name) => INPUT_EXTENSIONS.has(path.extname(name).toLowerCase()))
        .sort();
      if (found.length === 0) throw new Error(`No .txt or .md files in ${input}`);
      files.push(...found.map((name) => path.join(resolved, name)));
    } else {
      files.push(resolved);
    }
  }
  return files;
}

function prepare(file: string, state: RepoState, paths: RepoPaths, options: Options, claimed: Claimed): Prepared {
  const source = fs.readFileSync(file, 'utf8');
  const doc = parseDocument(source);
  const { seed, errors } = buildSeed(doc);

  if (!seed) return { file, seed: emptySeed(), taxonomySteps: [], errors };

  const plan = planTaxonomy(
    {
      systemSlug: seed.systemSlug,
      canonicalPath: seed.canonicalPath,
      eyebrow: seed.eyebrow,
      allowCreate: options.createTaxonomy,
    },
    state.taxonomy,
  );

  const collisions = checkCollisions(seed, state, paths, options.mode, claimed);
  const references = checkReferences(seed, state, claimed.batchSlugs);

  return { file, seed, taxonomySteps: plan.steps, errors: [...errors, ...plan.errors, ...collisions, ...references] };
}

interface Claimed {
  slugs: Map<string, string>;
  paths: Map<string, string>;
  batchSlugs: Set<string>;
}

function emptySeed(): ProblemSeed {
  return { systemSlug: '', slug: '', canonicalPath: '', name: '', h1: '', status: 'draft', indexable: false };
}

function describe(prepared: Prepared, paths: RepoPaths): string[] {
  const { seed } = prepared;
  const target = path.relative(paths.root, path.join(paths.problemsDir, `${seed.slug}.ts`));
  const lines = [
    `  slug              ${seed.slug}`,
    `  canonical path    ${seed.canonicalPath}`,
    `  system            ${seed.systemSlug}`,
    `  target file       ${target}`,
    `  verdict           ${seed.verdict ?? '(none)'} / ${seed.urgency ?? '(none)'} / risk ${seed.safetyRisk ?? '(none)'} / fix ${seed.fixDifficulty ?? '(none)'}`,
    `  status            ${seed.status}, indexable ${seed.indexable}`,
    `  scenarios ${seed.scenarios?.length ?? 0}  consequences ${seed.consequences?.length ?? 0}  windows ${seed.windows?.length ?? 0}  actions ${seed.actions?.length ?? 0}`,
    `  flags ${seed.flags?.length ?? 0}  faqs ${seed.faqs?.length ?? 0}  resources ${seed.resources?.length ?? 0}  sources ${seed.sources?.length ?? 0}  related ${seed.related?.length ?? 0}`,
    `  aliases           ${seed.aliases?.length ? seed.aliases.join(', ') : '(none)'}`,
  ];

  for (const step of prepared.taxonomySteps) {
    lines.push(
      step.action === 'reuse'
        ? `  taxonomy          reuse ${step.level} ${step.path}`
        : `  taxonomy          CREATE ${step.level} ${step.record.canonicalPath} ("${step.record.name}")`,
    );
  }

  return lines;
}

async function main(): Promise<number> {
  const options = parseArgs(process.argv.slice(2));
  if (options.inputs.length === 0) {
    console.log(
      [
        'Deterministic content importer — no model is called.',
        '',
        '  npm run content:import -- <file-or-directory> [options]',
        '',
        '  --dry-run            report the plan and change nothing',
        '  --replace            overwrite an existing problem of the same slug',
        '  --force              with --replace, allow overwriting a published page',
        '  --create-taxonomy    create the hub records the canonical path needs',
      ].join('\n'),
    );
    return 0;
  }

  const paths = repoPaths(process.cwd());
  const state = await loadRepoState(paths);
  const files = collectInputs(options.inputs);

  // ---- Preflight: parse and validate everything before writing anything ----
  const claimed: Claimed = { slugs: new Map(), paths: new Map(), batchSlugs: new Set() };
  // Slugs arriving in this batch count as existing for cross-reference checks.
  for (const file of files) {
    const doc = parseDocument(fs.readFileSync(file, 'utf8'));
    const slug = doc.scalars.get('SLUG')?.value;
    if (slug) claimed.batchSlugs.add(slug);
  }

  const prepared: Prepared[] = [];
  for (const file of files) {
    const result = prepare(file, state, paths, options, claimed);
    prepared.push(result);
    if (result.seed.slug) {
      claimed.slugs.set(result.seed.slug, path.basename(file));
      claimed.paths.set(result.seed.canonicalPath, path.basename(file));
    }
  }

  let failed = 0;
  for (const item of prepared) {
    console.log(`\n${path.relative(process.cwd(), item.file)}`);
    if (item.errors.length > 0) {
      failed += 1;
      console.log(`  FAILED — ${item.errors.length} problem(s):`);
      for (const error of item.errors) {
        console.log(`    ${error.field}${error.line ? ` (line ${error.line})` : ''}: ${error.message}`);
      }
      continue;
    }
    console.log('  OK');
    for (const line of describe(item, paths)) console.log(line);
  }

  console.log('');
  if (failed > 0) {
    console.log(`${failed} of ${prepared.length} file(s) failed validation. Nothing was written.`);
    return 1;
  }
  if (options.dryRun) {
    console.log(`Dry run: ${prepared.length} file(s) would be imported. No repository file was modified.`);
    return 0;
  }

  // ---- Write phase: only reached when every file is valid ----------------
  let indexSource = fs.readFileSync(paths.indexFile, 'utf8');
  let taxonomySource = fs.readFileSync(paths.taxonomyFile, 'utf8');

  for (const item of prepared) {
    const target = path.join(paths.problemsDir, `${item.seed.slug}.ts`);
    fs.writeFileSync(target, emitProblemFile(item.seed), 'utf8');
    indexSource = registerInIndex(indexSource, item.seed);
    taxonomySource = registerTaxonomy(taxonomySource, item.taxonomySteps);
    console.log(`wrote ${path.relative(paths.root, target)}`);
  }

  fs.writeFileSync(paths.indexFile, indexSource, 'utf8');
  const createdTaxonomy = prepared.some((p) => p.taxonomySteps.some((s) => s.action === 'create'));
  if (createdTaxonomy) {
    fs.writeFileSync(paths.taxonomyFile, taxonomySource, 'utf8');
    console.log('updated src/content/taxonomy.ts');
  }
  console.log('updated src/content/index.ts');

  console.log(
    [
      '',
      `Imported ${prepared.length} problem(s).`,
      'Nothing was seeded, committed or deployed. Next:',
      '  npm run typecheck && npm run lint && npm test',
    ].join('\n'),
  );
  return 0;
}

main()
  .then((code) => {
    process.exitCode = code;
  })
  .catch((error: unknown) => {
    console.error(error instanceof Error ? error.message : error);
    process.exitCode = 1;
  });
