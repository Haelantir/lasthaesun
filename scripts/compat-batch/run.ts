/**
 * One command for a batch of pairings: a scruffy list in, published pages out.
 *
 *   npm run content:compat                  subjects-compat.txt -> write -> verify
 *   npm run content:compat -- --generate    stop after writing incoming-compat/
 *   npm run content:compat -- --import      skip generation, use what is there
 *   npm run content:compat -- --subjects f  read a different list
 *
 * The sibling of `scripts/content-batch/run.ts`, and deliberately the same
 * shape: read a list, call the pinned writer once per item, validate, write the
 * repository files, run `npm run verify`, archive. What it also does not do is
 * the same: no database, no commit, no push, no deploy. It stops at a verified
 * working tree, because "ship it" should stay a sentence a person says.
 *
 * The one step this has that the decision pipeline does not is the URL check.
 * A compatibility answer lives or dies on manufacturer guidance, and a model
 * that did not search will produce a plausible URL that 404s. Every cited URL is
 * requested before the record is written, and a pairing with a dead citation
 * fails rather than shipping a link nobody followed.
 *
 * Generation is resumable: a pairing whose draft already exists is skipped, so
 * a run interrupted at item seven costs six minutes on the retry, not thirty.
 */
import { execFileSync, execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';

import { parseCompatSubjects, parsePairing, slugify, type CompatSubject } from './parse';
import { recordFileName, registerInIndex, renderRecord } from './emit';
import { writeTopic, writerConfig, type WriterConfig } from '../content-batch/writer';
import type { Pairing } from '../../src/content/compat/types';

const ROOT = process.cwd();
const INCOMING = path.join(ROOT, 'incoming-compat');
const PROMPT_FILE = path.join(ROOT, 'docs', 'compat-authoring-prompt.txt');
const RECORDS = path.join(ROOT, 'src', 'content', 'compat', 'pairings');
const INDEX = path.join(ROOT, 'src', 'content', 'compat', 'index.ts');
const PAIRING_PLACEHOLDER = '{{PAIRING}}';

interface Options {
  subjects: string;
  generateOnly: boolean;
  importOnly: boolean;
  concurrency: number;
}

function parseArgs(argv: string[]): Options {
  const value = (flag: string) => {
    const index = argv.indexOf(flag);
    return index >= 0 ? (argv[index + 1] ?? null) : null;
  };
  return {
    subjects: value('--subjects') ?? 'subjects-compat.txt',
    generateOnly: argv.includes('--generate'),
    importOnly: argv.includes('--import'),
    concurrency: Math.max(1, Number(value('--concurrency')) || 3),
  };
}

interface Job extends CompatSubject {
  index: number;
  slug: string;
  file: string;
  skipped: boolean;
  failure?: string;
  pairing?: Pairing;
}

const article = (word: string) => (/^[aeiou]/i.test(word) ? 'an' : 'a');

/**
 * The reader's question, in the words they would actually type.
 *
 * Two relations need their own sentence. "Can I use a space heater plugged into
 * an extension cord" and "can I use cast iron in a dishwasher" are not English
 * anybody searches, and handing the writer an awkward question hands it an
 * awkward H1 — the H1 is supposed to be the search, verbatim.
 */
function readerQuestion(job: CompatSubject): string {
  const subject = job.subject.toLowerCase();
  const target = job.target.toLowerCase();

  if (job.relation === 'plugged-into') {
    return `Can I plug ${article(subject)} ${subject} into ${article(target)} ${target}?`;
  }
  // "in THE dishwasher / dryer / freezer" — a household has one of each, and
  // nobody searches "a dishwasher". These three also share a verb: you PUT the
  // thing in, you do not "use" it there.
  if (job.relation === 'washed-in' || job.relation === 'dried-in' || job.relation === 'stored-in') {
    return `Can I put ${article(subject)} ${subject} in the ${target}?`;
  }
  return `Can I use ${subject} ${job.relation.replace('-', ' ')} ${article(target)} ${target}?`;
}

/** The prompt block for one pairing, in the shape the authoring doc expects. */
export function promptFor(basePrompt: string, job: CompatSubject): string {
  const relationWord = job.relation.replace('-', ' ');
  const question = readerQuestion(job);

  const block = [
    `  SUBJECT  = ${job.subject}`,
    `  RELATION = ${relationWord}`,
    `  TARGET   = ${job.target}`,
    '',
    `즉 독자의 질문은 "${question}" 이다.`,
  ];

  // Notes steer the angle. They are explicitly not findings and explicitly not
  // a verdict: a page whose conclusion was decided before anyone read a source
  // is the one thing this site cannot ship.
  if (job.notes !== '') {
    block.push(
      '',
      '아래는 편집자가 남긴 각도 힌트다. 사실이 아니고 근거도 아니다.',
      '판정을 미리 정하지 말고, 검색으로 확인한 것만 쓴다.',
      `  ${job.notes}`,
    );
  }

  return basePrompt.replace(PAIRING_PLACEHOLDER, block.join('\n'));
}

/**
 * Every cited URL, requested. A citation that cannot be confirmed fails the
 * pairing, because a link nobody followed is the same as a link that is wrong.
 *
 * Sends an ordinary browser's headers. An honest crawler UA gets refused or
 * dropped by enough government and manufacturer sites that the check was
 * reporting live pages as dead — usda.gov answers 200 to a browser and fails
 * outright to `caniignoreit link check`. One retry covers the transient half.
 *
 * A refusal that survives the retry AND curl is a failure. It may well be a WAF
 * guarding a real page, but "probably fine" is not the standard this site cites
 * sources by, and the writer can be asked for a source that can be opened.
 *
 * The npm script runs node with `--use-system-ca` for the same reason. Node's
 * bundled CA list cannot verify some government hosts that a browser opens
 * without complaint — usda.gov among them — and a TLS failure here reads as a
 * dead link, which is the worst possible way to be wrong: it throws away a
 * correctly sourced page.
 */
const BROWSER_HEADERS = {
  'user-agent':
    'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/131.0.0.0 Safari/537.36',
  accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
  'accept-language': 'en-US,en;q=0.9',
};

/**
 * Last resort: ask curl.
 *
 * Some WAFs fingerprint the TLS handshake rather than the headers, and undici's
 * fingerprint is not a browser's — honeywellpluggedin.com serves a manual that
 * curl and Chrome both open and that Node refuses with 403 no matter what
 * headers it sends. The question this check actually asks is "can a reader open
 * this?", and curl answers it more faithfully than fetch does. Absent curl, the
 * fetch result stands.
 */
function curlStatus(url: string): number | null {
  try {
    const out = execFileSync(
      'curl',
      ['-s', '-o', process.platform === 'win32' ? 'NUL' : '/dev/null',
       '-w', '%{http_code}', '-L', '--max-time', '30', '-A', BROWSER_HEADERS['user-agent'], url],
      { encoding: 'utf8', timeout: 40_000 },
    );
    const code = Number(out.trim());
    return Number.isFinite(code) && code > 0 ? code : null;
  } catch {
    return null;
  }
}

async function checkUrls(pairing: Pairing): Promise<string[]> {
  const failures: string[] = [];

  const probe = async (url: string): Promise<string | null> => {
    try {
      const response = await fetch(url, {
        redirect: 'follow',
        headers: BROWSER_HEADERS,
        signal: AbortSignal.timeout(30_000),
      });
      return response.ok ? null : `${response.status} ${url}`;
    } catch (error) {
      return `unreachable ${url} (${(error as Error).message})`;
    }
  };

  await Promise.all(
    pairing.sources.map(async (source) => {
      if ((await probe(source.url)) === null) return;
      const retry = await probe(source.url);
      if (retry === null) return;

      // Two rapid requests are enough to trip a rate limiter, and the third
      // then confirms a "dead" link that is merely annoyed. Pause before the
      // deciding attempt; this has rescued two correctly sourced pages so far.
      await new Promise((resolve) => setTimeout(resolve, 2_000));

      const viaCurl = curlStatus(source.url);
      if (viaCurl !== null && viaCurl >= 200 && viaCurl < 400) return;

      failures.push(retry);
    }),
  );

  return failures;
}

function run(command: string, args: string[]): void {
  execSync([command, ...args].join(' '), { cwd: ROOT, stdio: 'inherit' });
}

async function main(): Promise<number> {
  const options = parseArgs(process.argv.slice(2));
  fs.mkdirSync(INCOMING, { recursive: true });

  const subjectsFile = path.resolve(ROOT, options.subjects);
  if (!fs.existsSync(subjectsFile)) {
    console.error(
      `No pairings file at ${path.relative(ROOT, subjectsFile)}.\n` +
        '  Write one pairing per line, for example:\n' +
        '    Cooking Spray in an Air Fryer\n' +
        '    Vinegar on Granite\n' +
        '    Space Heater plugged into a Power Strip',
    );
    return 1;
  }

  const { subjects, dropped } = parseCompatSubjects(fs.readFileSync(subjectsFile, 'utf8'));
  if (subjects.length === 0) {
    console.error(`${options.subjects} has no readable pairings in it.`);
    return 1;
  }

  console.log(`${subjects.length} pairing(s) from ${options.subjects}`);
  for (const dead of dropped) console.log(`  dropped (no connective word): ${dead}`);

  const jobs: Job[] = subjects.map((subject, index) => {
    const slug = `${slugify(subject.subject)}--${slugify(subject.target)}`;
    const file = path.join(INCOMING, `${String(index + 1).padStart(2, '0')}-${slug}.txt`);
    return { ...subject, index: index + 1, slug, file, skipped: fs.existsSync(file) };
  });

  for (const job of jobs) {
    console.log(
      `  ${String(job.index).padStart(2)}. ${job.subject} ${job.relation.replace('-', ' ')} ${job.target}` +
        (job.notes !== '' ? `\n        notes: ${job.notes.slice(0, 90)}${job.notes.length > 90 ? '…' : ''}` : ''),
    );
  }

  /* ------------------------------------------------------------- generate */
  if (!options.importOnly) {
    const config: WriterConfig = writerConfig();
    console.log(
      `\nmodel ${config.model} · reasoning ${config.effort} · web search ${config.webSearch ? 'on' : 'OFF'}`,
    );

    const basePrompt = fs.readFileSync(PROMPT_FILE, 'utf8');
    if (!basePrompt.includes(PAIRING_PLACEHOLDER)) {
      console.error(`${path.relative(ROOT, PROMPT_FILE)} no longer contains ${PAIRING_PLACEHOLDER}.`);
      return 1;
    }

    const queue = jobs.filter((job) => !job.skipped);
    for (const job of jobs) if (job.skipped) console.log(`  skip  ${job.slug} (draft already written)`);

    const worker = async (): Promise<void> => {
      for (;;) {
        const job = queue.shift();
        if (!job) return;
        const started = Date.now();
        try {
          const result = await writeTopic(promptFor(basePrompt, job), config);
          fs.writeFileSync(job.file, `${result.text}\n`, 'utf8');
          console.log(
            `  ok    ${job.slug.padEnd(34)} ${Math.round(result.ms / 1000)}s · ` +
              `${result.searches} search${result.searches === 1 ? '' : 'es'}` +
              (result.searches === 0 ? '  ← no search: sources are suspect' : ''),
          );
        } catch (error) {
          job.failure = (error as Error).message.split('\n')[0] ?? 'failed';
          console.log(`  FAIL  ${job.slug.padEnd(34)} ${Math.round((Date.now() - started) / 1000)}s · ${job.failure}`);
        }
      }
    };

    console.log('');
    await Promise.all(
      Array.from({ length: Math.min(options.concurrency, Math.max(queue.length, 1)) }, worker),
    );

    if (options.generateOnly) {
      console.log(`\ndrafts are in ${path.relative(ROOT, INCOMING)} — re-run with --import to write them`);
      return jobs.some((job) => job.failure) ? 1 : 0;
    }
  }

  /* --------------------------------------------------------------- verify */
  console.log('\nvalidating drafts');
  const reviewedAt = new Date(new Date().toISOString().slice(0, 10) + 'T00:00:00Z');

  for (const job of jobs) {
    if (job.failure) continue;
    if (!fs.existsSync(job.file)) {
      job.failure = 'no draft was written';
      continue;
    }

    const parsed = parsePairing(fs.readFileSync(job.file, 'utf8'), reviewedAt);
    if (!parsed.pairing) {
      job.failure = parsed.errors.length === 1 ? parsed.errors[0]! : `${parsed.errors.length} problems, first: ${parsed.errors[0]!}`;
      console.log(`  FAIL  ${job.slug}`);
      for (const error of parsed.errors) console.log(`          ${error}`);
      continue;
    }

    const dead = await checkUrls(parsed.pairing);
    if (dead.length > 0) {
      job.failure = `${dead.length} dead source URL(s)`;
      console.log(`  FAIL  ${job.slug}`);
      for (const line of dead) console.log(`          ${line}`);
      continue;
    }

    job.pairing = parsed.pairing;
    console.log(`  ok    ${job.slug.padEnd(34)} ${parsed.pairing.verdict} · ${parsed.pairing.sources.length} sources verified`);
  }

  /* ---------------------------------------------------------------- write */
  // Atomic in the same sense as the importer: everything is validated before
  // anything is written, so one bad draft in six means nothing lands.
  const ready = jobs.filter((job) => job.pairing);
  const failed = jobs.filter((job) => job.failure);

  if (failed.length > 0) {
    console.error(`\n${failed.length} pairing(s) failed; nothing was written.`);
    for (const job of failed) console.error(`  ${job.slug}: ${job.failure}`);
    console.error(`\nDrafts are in ${path.relative(ROOT, INCOMING)}. Fix or delete, then re-run.`);
    return 1;
  }

  console.log('\nwriting records');
  fs.mkdirSync(RECORDS, { recursive: true });

  for (const job of ready) {
    const pairing = job.pairing!;
    const file = path.join(RECORDS, recordFileName(pairing));
    const existed = fs.existsSync(file);
    fs.writeFileSync(file, renderRecord(pairing), 'utf8');
    const registered = registerInIndex(INDEX, pairing);
    console.log(
      `  ${existed ? 'replaced' : 'added   '} src/content/compat/pairings/${recordFileName(pairing)}` +
        (registered === 'added' ? ' + index' : ''),
    );
  }

  /* --------------------------------------------------------------- verify */
  console.log('\nnpm run verify');
  run('npm', ['run', 'verify']);

  /* -------------------------------------------------------------- archive */
  const stamp = new Date().toISOString().replace(/[:.]/g, '-');
  const archive = path.join(INCOMING, 'done', stamp);
  fs.mkdirSync(archive, { recursive: true });
  for (const job of ready) fs.renameSync(job.file, path.join(archive, path.basename(job.file)));
  console.log(`\narchived ${ready.length} draft(s) to ${path.relative(ROOT, archive)}`);

  console.log(
    `\n${ready.length} pairing(s) written and verified. Nothing was committed, pushed or deployed —\n` +
      'review the diff, then say so out loud.',
  );
  return 0;
}

main().then(
  (code) => process.exit(code),
  (error) => {
    console.error(error);
    process.exit(1);
  },
);
