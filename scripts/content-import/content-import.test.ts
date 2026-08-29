/**
 * Tests for the deterministic importer.
 *
 * Nothing here reaches the network or a model — the importer has no path that
 * could. The filesystem tests run the real CLI against fixtures in a temp
 * directory and assert that `src/content` is byte-identical afterwards, which
 * is the property that matters for `--dry-run` and for a failed batch.
 */
import { execFileSync } from 'node:child_process';
import crypto from 'node:crypto';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';

import type { ProblemSeed } from '../../src/content/types';
import { buildSeed } from './build';
import { emitProblemFile, exportName, quote } from './emit';
import { parseDocument } from './parser';
import type { RepoState } from './repo';
import { checkCollisions, checkReferences, registerInIndex, registerTaxonomy, repoPaths } from './repo';
import { planTaxonomy, type TaxonomySnapshot } from './taxonomy';

/* ------------------------------------------------------------------ fixtures */

interface DocParts {
  [field: string]: string;
}

const BASE: DocParts = {
  SYSTEM: 'alarms',
  SLUG: 'test-problem',
  CANONICAL_PATH: '/home/safety/alarms/test-problem/',
  NAME: 'Test Problem',
  EYEBROW: 'Home · Safety · Alarms',
  H1: 'Can I Ignore a Test Problem?',
  SEO_TITLE: 'Test Problem: What It Means | Can I Ignore It',
  META_DESCRIPTION: 'A short description of the test problem, well under the meta description limit.',
  VERDICT: 'probably_not',
  URGENCY: 'medium',
  SAFETY_RISK: 'moderate',
  FIX_DIFFICULTY: 'easy',
  CAN_I_USE_IT_QUESTION: 'Can I leave it?',
  CAN_I_USE_IT_LABEL: 'Not for long',
  SHORT_ANSWER: 'Not for long. It gets worse.',
  WHY_IT_MATTERS: 'It matters because of one thing.',
  LAST_REVIEWED: '2026-08-29',
  REVIEW_SCOPE: 'Checked against agency guidance.',
};

const LISTS = `
SCENARIOS:

* slug: one-case
  label: The first case
  result_headline: Deal with it
  result_body: Because it gets worse.
  recommended_action: Fix it today.

CONSEQUENCES:

* stage_label: Later
  title: It gets worse
  severity: danger

WINDOWS:

* situation: The usual case
  ignore_answer: No
  severity: warning
  what_to_do: Fix it.

ACTIONS:

* title: Do the thing
  body: Here is how you do the thing.

FLAGS:

* title: Something alarming

FAQS:

* q: Is this a question?
  a: Yes it is.

SOURCES:

* publisher: U.S. Fire Administration
  title: Smoke Alarms
  url: https://www.usfa.fema.gov/prevention/home-fires/prepare-for-fire/smoke-alarms/
  source_type: government
`;

function makeDoc(overrides: DocParts = {}, extra = LISTS): string {
  const parts = { ...BASE, ...overrides };
  const scalars = Object.entries(parts)
    .filter(([, value]) => value !== '')
    .map(([field, value]) => `${field}:\n${value}\n`)
    .join('\n');
  return `${scalars}\n${extra}`;
}

function build(text: string) {
  return buildSeed(parseDocument(text));
}

function errorFields(result: ReturnType<typeof build>): string[] {
  return result.errors.map((e) => e.field);
}

/* -------------------------------------------------------------------- parser */

describe('parser', () => {
  it('accepts a complete document', () => {
    const { seed, errors } = build(makeDoc());
    expect(errors).toEqual([]);
    expect(seed?.slug).toBe('test-problem');
    expect(seed?.scenarios).toHaveLength(1);
    expect(seed?.sources).toHaveLength(1);
  });

  it('treats omitted optional fields as absent rather than empty', () => {
    const { seed, errors } = build(makeDoc({ EYEBROW: '', DISCLAIMER: '' }));
    expect(errors).toEqual([]);
    expect(seed?.eyebrow).toBeUndefined();
    expect(seed?.disclaimer).toBeUndefined();
    expect(seed?.resources).toEqual([]);
  });

  it('joins hard-wrapped prose into one line and keeps blank lines as paragraphs', () => {
    const text = makeDoc({
      WHY_IT_MATTERS: 'One idea that runs\nacross two source lines.\n\nA second paragraph\nalso wrapped.',
    });
    const { seed } = build(text);
    expect(seed?.whyItMatters).toBe('One idea that runs across two source lines.\n\nA second paragraph also wrapped.');
  });

  it('does not treat a colon inside prose as a new field', () => {
    const { seed, errors } = build(
      makeDoc({ SHORT_ANSWER: 'No. The rule is simple: stop using it. NOTE: that applies to every model.' }),
    );
    expect(errors).toEqual([]);
    expect(seed?.shortAnswer).toContain('rule is simple: stop using it');
    expect(seed?.shortAnswer).toContain('NOTE: that applies');
  });

  it('does not treat a colon inside a list item as a new key', () => {
    const extra = LISTS.replace(
      'result_body: Because it gets worse.',
      'result_body: Because it gets worse. Remember: the label is what decides it.',
    );
    const { seed, errors } = build(makeDoc({}, extra));
    expect(errors).toEqual([]);
    expect(seed?.scenarios?.[0]?.resultBody).toContain('Remember: the label is what decides it.');
  });

  it('reads CRLF input identically to LF', () => {
    const lf = build(makeDoc());
    const crlf = build(makeDoc().replace(/\n/g, '\r\n'));
    expect(crlf.errors).toEqual([]);
    expect(crlf.seed).toEqual(lf.seed);
  });

  it('keeps apostrophes, quotes and dashes intact', () => {
    const prose = 'It is the maker’s call — "check the label", they say, and don\'t guess.';
    const { seed, errors } = build(makeDoc({ SHORT_ANSWER: prose }));
    expect(errors).toEqual([]);
    expect(seed?.shortAnswer).toBe(prose);
  });

  it('reports a list item that does not start with a known key', () => {
    const extra = LISTS.replace('* slug: one-case', '* nonsense: one-case');
    const result = build(makeDoc({}, extra));
    expect(result.errors.some((e) => e.message.includes('does not start with a known key'))).toBe(true);
  });
});

/* ---------------------------------------------------------------- validation */

describe('validation', () => {
  it('names every missing required field', () => {
    const result = build(makeDoc({ VERDICT: '', SHORT_ANSWER: '' }));
    expect(errorFields(result)).toContain('VERDICT');
    expect(errorFields(result)).toContain('SHORT_ANSWER');
    expect(result.seed).toBeNull();
  });

  it('rejects an invalid enum and lists the allowed values', () => {
    const result = build(makeDoc({ VERDICT: 'maybe_later' }));
    const error = result.errors.find((e) => e.field === 'VERDICT');
    expect(error?.message).toContain('safe_to_ignore');
    expect(result.seed).toBeNull();
  });

  it('rejects an invalid severity inside a list item, with its index', () => {
    const extra = LISTS.replace('severity: danger', 'severity: extremely-bad');
    const result = build(makeDoc({}, extra));
    expect(errorFields(result)).toContain('CONSEQUENCES[0].severity');
  });

  it('rejects a source URL that is not https', () => {
    const extra = LISTS.replace('url: https://www.usfa.fema.gov', 'url: http://www.usfa.fema.gov');
    expect(errorFields(build(makeDoc({}, extra)))).toContain('SOURCES[0].url');
  });

  it('rejects a placeholder URL', () => {
    const extra = LISTS.replace(/url: https:\/\/\S+/, 'url: https://example.com/guide');
    expect(errorFields(build(makeDoc({}, extra)))).toContain('SOURCES[0].url');
  });

  it('accepts a null source URL', () => {
    const extra = LISTS.replace(/url: https:\/\/\S+/, 'url: null');
    const { seed, errors } = build(makeDoc({}, extra));
    expect(errors).toEqual([]);
    expect(seed?.sources?.[0]?.url).toBeNull();
  });

  it('requires a government or regulation source', () => {
    const extra = LISTS.replace('source_type: government', 'source_type: industry');
    expect(errorFields(build(makeDoc({}, extra)))).toContain('SOURCES');
  });

  it('enforces the SEO title and meta description limits', () => {
    const long = build(makeDoc({ SEO_TITLE: 'x'.repeat(80), META_DESCRIPTION: 'y'.repeat(200) }));
    expect(errorFields(long)).toContain('SEO_TITLE');
    expect(errorFields(long)).toContain('META_DESCRIPTION');
  });

  it('rejects a review scope longer than the database column', () => {
    // The failure that reached production once. It cannot again.
    expect(errorFields(build(makeDoc({ REVIEW_SCOPE: 'z'.repeat(201) })))).toContain('REVIEW_SCOPE');
  });

  it('rejects an SEO title identical to the H1', () => {
    expect(errorFields(build(makeDoc({ SEO_TITLE: BASE.H1! })))).toContain('SEO_TITLE');
  });

  it('rejects an invented distance or duration in reader-facing prose', () => {
    const result = build(makeDoc({ SHORT_ANSWER: 'You can drive on it for 50 miles.' }));
    expect(errorFields(result)).toContain('SHORT_ANSWER');
    expect(result.errors[0]?.message).toContain('50 miles');
  });

  it('rejects a canonical path that does not end with the slug', () => {
    expect(errorFields(build(makeDoc({ CANONICAL_PATH: '/home/safety/alarms/something-else/' })))).toContain(
      'CANONICAL_PATH',
    );
  });

  it('rejects a malformed canonical path', () => {
    expect(errorFields(build(makeDoc({ CANONICAL_PATH: '/Home/Safety/Test_Problem' })))).toContain('CANONICAL_PATH');
  });

  it('rejects a malformed alias and one that shadows the page itself', () => {
    const withAlias = `${makeDoc()}\nALIASES:\n\n* /Not A Path/\n* ${BASE.CANONICAL_PATH}\n`;
    expect(errorFields(build(withAlias)).filter((f) => f === 'ALIASES')).toHaveLength(2);
  });

  it('rejects weak related anchor text', () => {
    const extra = `${LISTS}\nRELATED:\n\n* slug: chirping-smoke-alarm\n  anchor_text: click here\n  relationship_type: related\n`;
    expect(errorFields(build(makeDoc({}, extra)))).toContain('RELATED[0].anchor_text');
  });

  it('rejects an affiliate resource and a resource URL', () => {
    const extra = `${LISTS}\nRESOURCES:\n\n* title: A thing\n  description: Buy it\n  kind: part\n  url: https://shop.example.org/x\n  affiliate: true\n`;
    const fields = errorFields(build(makeDoc({}, extra)));
    expect(fields).toContain('RESOURCES[0].url');
    expect(fields).toContain('RESOURCES[0].affiliate');
  });
});

/* ------------------------------------------------------------------ taxonomy */

const SNAPSHOT: TaxonomySnapshot = {
  domains: [
    {
      slug: 'home',
      name: 'Home',
      canonicalPath: '/home/',
      shortDescription: 'Home things.',
      sortOrder: 20,
      status: 'published',
      indexable: false,
    },
  ],
  objectCategories: [
    {
      domainSlug: 'home',
      slug: 'safety',
      name: 'Home Safety',
      canonicalPath: '/home/safety/',
      shortDescription: 'Safety devices.',
      sortOrder: 30,
      status: 'published',
      indexable: false,
    },
  ],
  systems: [
    {
      objectSlug: 'safety',
      slug: 'alarms',
      name: 'Alarms',
      canonicalPath: '/home/safety/alarms/',
      shortDescription: 'Alarms.',
      sortOrder: 10,
      status: 'published',
      indexable: false,
    },
  ],
};

describe('taxonomy planning', () => {
  it('reuses a system that already exists', () => {
    const plan = planTaxonomy(
      { systemSlug: 'alarms', canonicalPath: '/home/safety/alarms/x/', allowCreate: false },
      SNAPSHOT,
    );
    expect(plan.errors).toEqual([]);
    expect(plan.steps).toEqual([
      { action: 'reuse', level: 'system', slug: 'alarms', path: '/home/safety/alarms/', name: 'Alarms' },
    ]);
  });

  it('refuses to invent taxonomy unless asked', () => {
    const plan = planTaxonomy(
      { systemSlug: 'extinguishers', canonicalPath: '/home/safety/extinguishers/x/', allowCreate: false },
      SNAPSHOT,
    );
    expect(plan.errors[0]?.message).toContain('--create-taxonomy');
    expect(plan.steps).toEqual([]);
  });

  it('creates only the missing levels when asked', () => {
    const plan = planTaxonomy(
      {
        systemSlug: 'extinguishers',
        canonicalPath: '/home/safety/extinguishers/x/',
        eyebrow: 'Home · Safety · Extinguishers',
        allowCreate: true,
      },
      SNAPSHOT,
    );
    expect(plan.errors).toEqual([]);
    expect(plan.steps.map((s) => `${s.action}:${s.level}`)).toEqual(['reuse:domain', 'reuse:object', 'create:system']);
    const created = plan.steps.at(-1);
    expect(created?.action === 'create' && created.record.name).toBe('Extinguishers');
    expect(created?.action === 'create' && created.record.canonicalPath).toBe('/home/safety/extinguishers/');
  });

  it('refuses a near-duplicate of an existing system rather than creating one', () => {
    const plan = planTaxonomy(
      { systemSlug: 'alarm', canonicalPath: '/home/safety/alarm/x/', allowCreate: true },
      SNAPSHOT,
    );
    expect(plan.steps).toEqual([]);
    expect(plan.errors[0]?.message).toContain('looks like the existing system "alarms"');
  });

  it('flags a system slug that disagrees with the path', () => {
    const plan = planTaxonomy(
      { systemSlug: 'bells', canonicalPath: '/home/safety/alarms/x/', allowCreate: false },
      SNAPSHOT,
    );
    expect(plan.errors[0]?.message).toContain('does not match the system already at');
  });
});

/* ---------------------------------------------------------------- collisions */

function stateWith(problems: ProblemSeed[], gold: string[] = []): RepoState {
  return { problems, taxonomy: SNAPSHOT, goldSlugs: new Set(gold) };
}

const PATHS = repoPaths(path.join(os.tmpdir(), 'ciii-not-a-real-repo'));
const NO_CLAIMS = { slugs: new Map<string, string>(), paths: new Map<string, string>() };

function seedFor(overrides: Partial<ProblemSeed> = {}): ProblemSeed {
  return {
    systemSlug: 'alarms',
    slug: 'test-problem',
    canonicalPath: '/home/safety/alarms/test-problem/',
    name: 'Test Problem',
    h1: 'Can I Ignore a Test Problem?',
    status: 'published',
    indexable: true,
    ...overrides,
  };
}

describe('collision and overwrite rules', () => {
  it('refuses a duplicate slug by default', () => {
    const state = stateWith([seedFor({ status: 'draft' })]);
    const errors = checkCollisions(seedFor(), state, PATHS, 'refuse', NO_CLAIMS);
    expect(errors[0]?.message).toContain('--replace');
  });

  it('allows --replace over a draft', () => {
    const state = stateWith([seedFor({ status: 'draft' })]);
    expect(checkCollisions(seedFor(), state, PATHS, 'replace', NO_CLAIMS)).toEqual([]);
  });

  it('refuses --replace over a published page without --force', () => {
    const state = stateWith([seedFor({ status: 'published' })]);
    const errors = checkCollisions(seedFor(), state, PATHS, 'replace', NO_CLAIMS);
    expect(errors[0]?.message).toContain('--force');
  });

  it('never overwrites the Gold Set, whatever the flags', () => {
    const state = stateWith([seedFor({ status: 'published' })], ['test-problem']);
    for (const mode of ['refuse', 'replace', 'replace-published'] as const) {
      const errors = checkCollisions(seedFor(), state, PATHS, mode, NO_CLAIMS);
      expect(errors[0]?.message).toContain('Gold Set');
    }
  });

  it('refuses a canonical path that belongs to another problem', () => {
    const state = stateWith([seedFor({ slug: 'other-problem' })]);
    const errors = checkCollisions(seedFor(), state, PATHS, 'refuse', NO_CLAIMS);
    expect(errors.some((e) => e.field === 'CANONICAL_PATH')).toBe(true);
  });

  it('refuses an alias that collides with a real page or a hub', () => {
    const state = stateWith([seedFor({ slug: 'other', canonicalPath: '/home/safety/alarms/other/' })]);
    const errors = checkCollisions(
      seedFor({ aliases: ['/home/safety/alarms/other/', '/home/safety/alarms/'] }),
      state,
      PATHS,
      'refuse',
      NO_CLAIMS,
    );
    expect(errors.filter((e) => e.field === 'ALIASES')).toHaveLength(2);
  });

  it('refuses a slug already claimed earlier in the same batch', () => {
    const claimed = { slugs: new Map([['test-problem', 'first.txt']]), paths: new Map<string, string>() };
    const errors = checkCollisions(seedFor(), stateWith([]), PATHS, 'refuse', claimed);
    expect(errors[0]?.message).toContain('first.txt');
  });

  it('requires related and destination slugs to exist', () => {
    const seed = seedFor({
      related: [{ slug: 'nowhere', anchorText: 'Can I ignore something that does not exist?', relationshipType: 'related' }],
      actions: [{ title: 'x', body: 'y', destinationProblemSlug: 'also-nowhere' }],
    });
    const errors = checkReferences(seed, stateWith([]), new Set());
    expect(errors.map((e) => e.field)).toEqual(['RELATED[0].slug', 'ACTIONS[0].destination_problem_slug']);
  });

  it('counts slugs arriving in the same batch as existing', () => {
    const seed = seedFor({
      related: [{ slug: 'sibling-page', anchorText: 'Can I ignore the sibling page?', relationshipType: 'sibling' }],
    });
    expect(checkReferences(seed, stateWith([]), new Set(['sibling-page']))).toEqual([]);
  });
});

/* -------------------------------------------------------------------- output */

describe('generated file', () => {
  it('escapes nothing it does not have to', () => {
    expect(quote('plain')).toBe("'plain'");
    expect(quote("it's")).toBe('"it\'s"');
    expect(quote(`he said "no" and it's fine`)).toBe(`'he said "no" and it\\'s fine'`);
    expect(quote('back\\slash')).toBe("'back\\\\slash'");
  });

  it('derives the export name from the slug', () => {
    expect(exportName('chirping-smoke-alarm')).toBe('chirpingSmokeAlarm');
  });

  it('writes multi-paragraph prose as an array join, not an escaped string', () => {
    const { seed } = build(makeDoc({ WHY_IT_MATTERS: 'First paragraph.\n\nSecond paragraph.' }));
    const file = emitProblemFile(seed!);
    expect(file).toContain('whyItMatters: [');
    expect(file).toContain("].join('\\n\\n')");
    expect(file).not.toContain('First paragraph.\\n\\nSecond paragraph.');
  });

  it('produces a file that starts like a hand-authored one', () => {
    const { seed } = build(makeDoc());
    const file = emitProblemFile(seed!);
    expect(file.startsWith("import type { ProblemSeed } from '../types';\n\nexport const testProblem: ProblemSeed = {")).toBe(
      true,
    );
    expect(file).not.toMatch(/generated|do not edit/i);
    expect(file.endsWith('};\n')).toBe(true);
  });
});

describe('registration', () => {
  const INDEX = [
    "import type { ProblemSeed } from './types';",
    "import { alpha } from './problems/alpha';",
    "import { zulu } from './problems/zulu';",
    '',
    'export const problems: ProblemSeed[] = [',
    '  alpha,',
    '  zulu,',
    '  ...plannedThings,',
    '];',
    '',
  ].join('\n');

  it('inserts the import alphabetically and the entry before the spreads', () => {
    const next = registerInIndex(INDEX, seedFor({ slug: 'mike' }));
    const lines = next.split('\n');
    expect(lines[2]).toBe("import { mike } from './problems/mike';");
    expect(lines.indexOf('  mike,')).toBe(lines.indexOf('  ...plannedThings,') - 1);
  });

  it('is idempotent', () => {
    const once = registerInIndex(INDEX, seedFor({ slug: 'mike' }));
    expect(registerInIndex(once, seedFor({ slug: 'mike' }))).toBe(once);
  });

  it('appends a created system to the systems array', () => {
    const taxonomy = [
      'export const systems: SystemSeed[] = [',
      '  {',
      "    objectSlug: 'safety',",
      "    slug: 'alarms',",
      '  },',
      '];',
      '',
    ].join('\n');
    const plan = planTaxonomy(
      { systemSlug: 'extinguishers', canonicalPath: '/home/safety/extinguishers/x/', allowCreate: true },
      SNAPSHOT,
    );
    const next = registerTaxonomy(taxonomy, plan.steps);
    expect(next).toContain("slug: 'extinguishers'");
    expect(next.indexOf("slug: 'extinguishers'")).toBeLessThan(next.indexOf('];'));
  });
});

/* ------------------------------------------------------------- CLI behaviour */

const REPO = process.cwd();

function contentFingerprint(): string {
  const dir = path.join(REPO, 'src', 'content');
  const hash = crypto.createHash('sha256');
  const walk = (current: string) => {
    for (const entry of fs.readdirSync(current).sort()) {
      const full = path.join(current, entry);
      if (fs.statSync(full).isDirectory()) walk(full);
      else hash.update(entry).update(fs.readFileSync(full));
    }
  };
  walk(dir);
  return hash.digest('hex');
}

/**
 * node on tsx's own entry point rather than the .bin shim: no shell is spawned,
 * so the arguments are not re-parsed and the Windows .cmd wrapper is bypassed.
 */
const TSX_CLI = path.join(REPO, 'node_modules', 'tsx', 'dist', 'cli.mjs');

function runImporter(args: string[]): { status: number; output: string } {
  try {
    const output = execFileSync(process.execPath, [TSX_CLI, 'scripts/content-import/cli.ts', ...args], {
      cwd: REPO,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
      env: { ...process.env, ANTHROPIC_API_KEY: '' },
    });
    return { status: 0, output };
  } catch (error) {
    const err = error as { status?: number; stdout?: string; stderr?: string };
    return { status: err.status ?? 1, output: `${err.stdout ?? ''}${err.stderr ?? ''}` };
  }
}

describe('CLI', () => {
  let dir: string;

  beforeEach(() => {
    dir = fs.mkdtempSync(path.join(os.tmpdir(), 'ciii-import-'));
  });

  afterEach(() => {
    fs.rmSync(dir, { recursive: true, force: true });
  });

  it('changes nothing on a dry run, and needs no API key', () => {
    const before = contentFingerprint();
    fs.writeFileSync(path.join(dir, 'ok.txt'), makeDoc({ SLUG: 'dry-run-page', CANONICAL_PATH: '/home/safety/alarms/dry-run-page/' }));

    const { status, output } = runImporter([path.join(dir, 'ok.txt'), '--dry-run']);
    expect(output).toContain('No repository file was modified');
    expect(status).toBe(0);
    expect(contentFingerprint()).toBe(before);
  }, 120_000);

  it('writes nothing when one file in a batch fails', () => {
    const before = contentFingerprint();
    fs.writeFileSync(path.join(dir, '1-good.txt'), makeDoc({ SLUG: 'batch-one', CANONICAL_PATH: '/home/safety/alarms/batch-one/' }));
    fs.writeFileSync(path.join(dir, '2-bad.txt'), makeDoc({ SLUG: 'batch-two', CANONICAL_PATH: '/home/safety/alarms/batch-two/', VERDICT: 'nonsense' }));

    const { status, output } = runImporter([dir]);
    expect(status).toBe(1);
    expect(output).toContain('Nothing was written');
    expect(contentFingerprint()).toBe(before);
  }, 120_000);

  it('refuses to overwrite a Gold Set page', () => {
    const before = contentFingerprint();
    fs.writeFileSync(
      path.join(dir, 'gold.txt'),
      makeDoc({
        SYSTEM: 'tires',
        SLUG: 'low-tire-pressure',
        CANONICAL_PATH: '/cars/tires/low-tire-pressure/',
        EYEBROW: 'Cars · Tires',
      }),
    );

    const { status, output } = runImporter([path.join(dir, 'gold.txt'), '--replace', '--force']);
    expect(status).toBe(1);
    expect(output).toContain('Gold Set');
    expect(contentFingerprint()).toBe(before);
  }, 120_000);
});
