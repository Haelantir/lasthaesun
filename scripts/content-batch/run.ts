/**
 * One command for a day's batch: topics in, imported content out.
 *
 *   npm run content:batch -- --fresh       subjects.txt -> generate -> import -> verify
 *   npm run content:batch -- --generate    stop after writing incoming/
 *   npm run content:batch -- --import      skip generation, import what is there
 *   npm run content:batch -- --models gpt  list model ids, to confirm one rather than guess
 *
 * What it deliberately does NOT do: seed a database, commit, push or deploy.
 * `DATABASE_URL` points at production, so seeding stays a separate sentence a
 * person has to say out loud. This script stops at a verified working tree.
 *
 * Generation is resumable. A topic whose file already exists is skipped, so a
 * run interrupted at topic seven costs six minutes on the retry, not thirty.
 */
import { execSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

import { buildSeed } from '../content-import/build';
import { parseDocument } from '../content-import/parser';
import { placeTopics } from './placement';
import { listModels, writeTopic, writerConfig, type Progress, type WriterConfig } from './writer';

const ROOT = process.cwd();
const INCOMING = path.join(ROOT, 'incoming');
const PROMPT_FILE = path.join(ROOT, 'docs', 'content-authoring-prompt.txt');
/** Readable from a second terminal while a batch runs: `cat incoming/STATUS.log`. */
const STATUS_FILE = path.join(INCOMING, 'STATUS.log');
const TOPIC_PLACEHOLDER = '[여기에 토픽 하나만 적는다]';
/** The prompt tells the writer to refuse rather than force-fit a topic. */
const REFUSAL = '이 토픽에 맞는 system이 없다';

interface Options {
  subjects: string;
  generateOnly: boolean;
  importOnly: boolean;
  fresh: boolean;
  concurrency: number;
  models: string | null;
  placement: boolean;
}

function parseArgs(argv: string[]): Options {
  const value = (flag: string) => {
    const index = argv.indexOf(flag);
    return index >= 0 ? (argv[index + 1] ?? null) : null;
  };
  return {
    subjects: value('--subjects') ?? 'subjects.txt',
    generateOnly: argv.includes('--generate'),
    importOnly: argv.includes('--import'),
    fresh: argv.includes('--fresh'),
    concurrency: Math.max(1, Number(value('--concurrency')) || 3),
    models: argv.includes('--models') ? (value('--models') ?? '') : null,
    placement: !argv.includes('--no-placement'),
  };
}

export interface Subject {
  topic: string;
  /** Optional editorial steering. Empty when the topic stands alone. */
  notes: string;
}

export interface SubjectsFile {
  subjects: Subject[];
  /** True when the file was read as a pasted answer rather than a clean list. */
  loose: boolean;
  /** Lines discarded in loose mode, so a bad read is visible rather than silent. */
  dropped: string[];
}

/** Topics on this site are English questions. Korean text is commentary. */
const HANGUL = /[ㄱ-ㆎ가-힣]/;
/** `→ IT DEPENDS / PROBABLY NOT` — a suggested verdict, never a note. */
const VERDICT_ARROW = /^\s*(?:→|->|=>)/;

function looksLikeTopic(line: string): boolean {
  return line.trim().endsWith('?') && !HANGUL.test(line);
}

/**
 * One topic per unindented line. Indented lines beneath it are notes for that
 * topic. Blank lines, `#` comments and list bullets are ignored.
 *
 *   Can I Ignore a Damaged Passport?
 *     Scenarios worth separating: water damage, a torn page, a damaged photo
 *     page, a bent cover. Different question from an expired passport.
 *
 * Notes exist to steer ANGLE and SCENARIOS — the two things a writer working
 * from a bare title gets thin. They are deliberately not a place to pre-assign a
 * verdict: see the guard in `promptFor`.
 */
export function parseSubjects(source: string): SubjectsFile {
  const lines = source
    .replace(/^﻿/, '')
    .split(/\r?\n/)
    .map((raw) => raw.replace(/\s+$/, ''))
    .filter((line) => line.trim() !== '' && !line.trim().startsWith('#'));

  // Loose mode exists because the topics usually arrive as a pasted answer —
  // preamble, a verdict arrow under each title, a paragraph of reasoning — and
  // reformatting that by hand every morning is exactly the chore this pipeline
  // is supposed to remove. It turns on only when the file is unambiguously not
  // a clean list: some flush-left lines are questions and some are not. A list
  // where every line is a topic is still read exactly as before.
  const flush = lines.filter((line) => !/^\s/.test(line));
  const loose = flush.some(looksLikeTopic) && flush.some((line) => !looksLikeTopic(line));

  const subjects: Subject[] = [];
  const dropped: string[] = [];

  const addNote = (text: string) => {
    const current = subjects[subjects.length - 1];
    if (!current) {
      dropped.push(text);
      return;
    }
    current.notes = current.notes === '' ? text : `${current.notes} ${text}`;
  };

  for (const line of lines) {
    const text = line.replace(/^\s*[-*]\s+/, '').trim();

    if (/^\s/.test(line)) {
      addNote(text);
      continue;
    }

    if (!loose) {
      subjects.push({ topic: text, notes: '' });
      continue;
    }

    if (looksLikeTopic(line)) {
      subjects.push({ topic: text, notes: '' });
      continue;
    }

    // A suggested verdict is the one thing that must never survive as a note:
    // kept, it hands the writer its conclusion before it has read a source.
    if (VERDICT_ARROW.test(line)) {
      dropped.push(text);
      continue;
    }

    addNote(text);
  }

  return { subjects, loose, dropped };
}

/** One topic per line. Blank lines, `#` comments and list bullets are ignored. */
function readSubjects(file: string): SubjectsFile {
  const resolved = path.resolve(ROOT, file);
  if (!fs.existsSync(resolved)) {
    throw new Error(
      `No subjects file at ${path.relative(ROOT, resolved)}.\n` +
        '  Write one topic per line, for example:\n' +
        '    Can I Ignore My Dog Eating Grass?\n' +
        '    Can I Ignore My Cat Sneezing?',
    );
  }
  const parsed = parseSubjects(fs.readFileSync(resolved, 'utf8'));

  if (parsed.subjects.length === 0) {
    throw new Error(`${path.relative(ROOT, resolved)} has no topics in it — only blank lines and comments.`);
  }

  const titles = parsed.subjects.map((subject) => subject.topic);
  const duplicates = titles.filter((topic, index) => titles.indexOf(topic) !== index);
  if (duplicates.length > 0) {
    // Two identical topics would race for one filename and one slug.
    throw new Error(`Duplicate topic(s) in ${path.relative(ROOT, resolved)}:\n  ${[...new Set(duplicates)].join('\n  ')}`);
  }

  return parsed;
}

/**
 * Builds the prompt for one topic.
 *
 * Notes are appended under the topic rather than merged into it, wrapped in a
 * guard that says what they are. Without that guard a note reads as a finding
 * the writer may cite, and a hint like "airlines treat these differently"
 * becomes a sourced claim in the copy. The verdict in particular has to come out
 * of the research: a page whose conclusion was decided before anyone looked is
 * the one thing this site cannot afford to ship.
 */
export function promptFor(basePrompt: string, subject: Subject): string {
  const block =
    subject.notes === ''
      ? subject.topic
      : [
          subject.topic,
          '',
          '편집 메모 (참고용, 사실 아님):',
          subject.notes,
          '',
          '이 메모는 다룰 각도와 시나리오 후보를 제안할 뿐이다. 근거가 아니다.',
          'VERDICT, URGENCY, SAFETY_RISK는 반드시 네가 직접 검증한 출처에서 나와야 한다.',
          '메모가 어떤 결론을 시사하더라도, 조사 결과가 다르면 조사 결과를 따른다.',
          '메모에 적힌 시나리오라도 verdict가 실제로 달라지지 않으면 넣지 않는다.',
          '메모의 문장을 출처처럼 인용하거나 본문에 그대로 옮기지 않는다.',
        ].join('\n');

  return basePrompt.replace(TOPIC_PLACEHOLDER, block);
}

function slugify(topic: string): string {
  return topic
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 60);
}

function run(command: string, args: string[]): void {
  // Every argument here is a literal from this file, so joining them into one
  // shell command introduces no injection surface — and it avoids Node's warning
  // about an args array with `shell: true`. npm needs a shell on Windows, where
  // it is a .cmd rather than an executable.
  execSync([command, ...args].join(' '), { cwd: ROOT, stdio: 'inherit' });
}

/**
 * Moves a PREVIOUS batch aside.
 *
 * Left in place, already-imported files collide on their own slugs and the whole
 * batch is refused — a confusing way to discover that yesterday's work is still
 * sitting in the folder.
 *
 * Files this run is about to write are not leftovers, they are its own finished
 * work: skipping them is what makes an interrupted run cheap to resume, so they
 * are excluded here rather than swept away by `--fresh`.
 */
function archiveLeftovers(fresh: boolean, expected: Set<string>): void {
  fs.mkdirSync(INCOMING, { recursive: true });
  const leftovers = fs
    .readdirSync(INCOMING)
    .filter((name) => /\.(txt|md)$/i.test(name) && name !== 'STATUS.log' && !expected.has(name));
  if (leftovers.length === 0) return;

  if (!fresh) {
    throw new Error(
      `incoming/ still holds ${leftovers.length} file(s) from an earlier batch.\n` +
        '  Re-run with --fresh to archive them into incoming/done/<timestamp>/,\n' +
        '  or with --import to import exactly what is already there.',
    );
  }

  const stamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
  const archive = path.join(INCOMING, 'done', stamp);
  fs.mkdirSync(archive, { recursive: true });
  for (const name of leftovers) fs.renameSync(path.join(INCOMING, name), path.join(archive, name));
  console.log(`archived ${leftovers.length} earlier file(s) into ${path.relative(ROOT, archive)}`);
}

/* ----------------------------------------------------------- live status */

type State =
  | { kind: 'waiting' }
  | { kind: 'running'; startedAt: number; progress: Progress }
  | { kind: 'done'; ms: number; searches: number; chars: number }
  | { kind: 'failed'; ms: number; reason: string }
  | { kind: 'skipped' };

interface TopicJob extends Subject {
  index: number;
  slug: string;
  file: string;
  state: State;
}

function elapsed(ms: number): string {
  const total = Math.round(ms / 1000);
  return `${Math.floor(total / 60)}m${String(total % 60).padStart(2, '0')}s`;
}

function statusLine(job: TopicJob): string {
  const head = `  ${String(job.index).padStart(2, '0')} ${job.slug.slice(0, 42).padEnd(42)}`;
  const { state } = job;
  switch (state.kind) {
    case 'waiting':
      return `${head} waiting`;
    case 'skipped':
      return `${head} skipped (already written)`;
    case 'running': {
      const { phase, searches, chars } = state.progress;
      const parts = [phase.padEnd(9), elapsed(Date.now() - state.startedAt).padStart(6)];
      if (searches > 0) parts.push(`${searches} search${searches === 1 ? '' : 'es'}`);
      if (chars > 0) parts.push(`${(chars / 1000).toFixed(1)}k written`);
      return `${head} ${parts.join('  ')}`;
    }
    case 'done':
      return `${head} ok       ${elapsed(state.ms).padStart(6)}  ${state.searches} searches  ${(state.chars / 1000).toFixed(1)}k`;
    case 'failed':
      return `${head} FAILED   ${elapsed(state.ms).padStart(6)}  ${state.reason.slice(0, 60)}`;
  }
}

/**
 * Repaints the job table in place.
 *
 * Only when stdout is a terminal — piped into a file or a CI log, cursor moves
 * would turn into escape-code noise, so there the same lines are simply written
 * to STATUS.log and printed once per completed topic.
 */
function createBoard(jobs: TopicJob[]): { tick: () => void; stop: () => void } {
  const tty = Boolean(process.stdout.isTTY);
  let painted = 0;

  const render = () => {
    const width = (process.stdout.columns ?? 100) - 1;
    const lines = jobs.map((job) => statusLine(job).slice(0, width));
    fs.writeFileSync(STATUS_FILE, `${new Date().toISOString()}\n${lines.join('\n')}\n`, 'utf8');
    if (!tty) return;
    if (painted > 0) process.stdout.write(`\u001b[${painted}A`);
    for (const line of lines) process.stdout.write(`\u001b[2K${line}\n`);
    painted = lines.length;
  };

  render();
  const timer = setInterval(render, 1000);
  timer.unref();
  return { tick: render, stop: () => { clearInterval(timer); render(); } };
}

/* ------------------------------------------------------------ generation */

interface LinkResult {
  file: string;
  url: string;
  status: string;
}

/**
 * Checks that every cited source URL actually resolves.
 *
 * The importer validates that a URL is well-formed, not that it exists, so a
 * plausible but dead government link clears every other gate and ships. It is
 * the one honesty rule nothing downstream can enforce — and a model that really
 * did search the web can still cite a page that has since been moved.
 *
 * A 403 or a timeout is not evidence of a dead page: plenty of publishers refuse
 * unattended clients. Only an explicit 404 or 410 counts as a failure; anything
 * else is reported as unverified and left to a person to judge.
 */
async function checkSourceUrls(files: string[]): Promise<{ dead: LinkResult[]; unverified: LinkResult[] }> {
  const queue: { file: string; url: string }[] = [];
  for (const file of files) {
    const { seed } = buildSeed(parseDocument(fs.readFileSync(file, 'utf8')));
    for (const source of seed?.sources ?? []) {
      if (source.url) queue.push({ file: path.basename(file), url: source.url });
    }
  }

  const dead: LinkResult[] = [];
  const unverified: LinkResult[] = [];

  const worker = async (): Promise<void> => {
    for (;;) {
      const target = queue.shift();
      if (!target) return;
      try {
        const response = await fetch(target.url, {
          redirect: 'follow',
          headers: { 'user-agent': 'Mozilla/5.0 (compatible; caniignoreit-linkcheck/1.0)' },
          signal: AbortSignal.timeout(25_000),
        });
        if (response.status === 404 || response.status === 410) {
          dead.push({ ...target, status: String(response.status) });
        } else if (!response.ok) {
          unverified.push({ ...target, status: String(response.status) });
        }
      } catch (error) {
        unverified.push({ ...target, status: (error as Error).name });
      }
    }
  };

  await Promise.all(Array.from({ length: Math.min(6, Math.max(queue.length, 1)) }, worker));
  return { dead, unverified };
}

/**
 * Releases the reserved drafts this batch has just replaced with real pages.
 *
 * `scripts/seed.ts` upserts by [systemId, slug], and the `...planned*` spreads
 * sit at the END of the problems array — so a leftover reservation is the LAST
 * write and silently overwrites the page that was just imported back to an empty
 * draft. Nothing fails and nothing warns; the page simply goes blank at the next
 * seed. The importer does not do this (it only adds), and remembering it by hand
 * every day is not a plan.
 */
function releaseReservedSlugs(slugs: Set<string>): string[] {
  const dir = path.join(ROOT, 'src', 'content', 'problems');
  const released: string[] = [];

  for (const name of fs.readdirSync(dir).filter((f) => f.startsWith('planned-') && f.endsWith('.ts'))) {
    const file = path.join(dir, name);
    const lines = fs.readFileSync(file, 'utf8').split('\n');
    const kept = lines.filter((line) => {
      const match = /^\s*\{\s*slug:\s*'([^']+)'/.exec(line);
      if (!match || !slugs.has(match[1]!)) return true;
      released.push(`${match[1]!}  (${name})`);
      return false;
    });
    if (kept.length !== lines.length) fs.writeFileSync(file, kept.join('\n'), 'utf8');
  }

  return released;
}

/** The slugs a set of pending files will import as. */
function slugsIn(files: string[]): Set<string> {
  const slugs = new Set<string>();
  for (const file of files) {
    const slug = parseDocument(fs.readFileSync(file, 'utf8')).scalars.get('SLUG')?.value;
    if (slug) slugs.add(slug);
  }
  return slugs;
}

/** Validates a generated file exactly the way the importer will. */
function checkFile(file: string): string[] {
  const text = fs.readFileSync(file, 'utf8');
  if (text.includes(REFUSAL)) return ['the writer refused: no system fits this topic'];
  return buildSeed(parseDocument(text)).errors.map((error) => `${error.field}: ${error.message}`);
}

async function generate(jobs: TopicJob[], config: WriterConfig, concurrency: number): Promise<TopicJob[]> {
  const basePrompt = fs.readFileSync(PROMPT_FILE, 'utf8');
  if (!basePrompt.includes(TOPIC_PLACEHOLDER)) {
    throw new Error(
      `The authoring prompt no longer contains the topic placeholder "${TOPIC_PLACEHOLDER}".\n` +
        '  scripts/content-import/write-prompt.ts and this script have to agree on it.',
    );
  }

  const queue = jobs.filter((job) => job.state.kind === 'waiting');
  const board = createBoard(jobs);
  const tty = Boolean(process.stdout.isTTY);
  // The board repaints in place on a terminal; piped output gets one line per
  // topic instead, so a resumed run still shows what it decided to skip.
  if (!tty) for (const job of jobs) if (job.state.kind === 'skipped') console.log(statusLine(job));

  const worker = async (): Promise<void> => {
    for (;;) {
      const job = queue.shift();
      if (!job) return;
      const startedAt = Date.now();
      job.state = { kind: 'running', startedAt, progress: { phase: 'thinking', searches: 0, chars: 0 } };
      board.tick();

      try {
        const result = await writeTopic(promptFor(basePrompt, job), config, (progress) => {
          job.state = { kind: 'running', startedAt, progress };
        });
        fs.writeFileSync(job.file, `${result.text}\n`, 'utf8');
        const issues = checkFile(job.file);
        job.state =
          issues.length > 0
            ? {
                kind: 'failed',
                ms: result.ms,
                reason: issues.length === 1 ? issues[0]! : `${issues.length} problems, first: ${issues[0]!}`,
              }
            : { kind: 'done', ms: result.ms, searches: result.searches, chars: result.text.length };
      } catch (error) {
        job.state = { kind: 'failed', ms: Date.now() - startedAt, reason: (error as Error).message.split('\n')[0] ?? 'failed' };
      }

      board.tick();
      if (!tty) console.log(statusLine(job));
    }
  };

  await Promise.all(Array.from({ length: Math.min(concurrency, Math.max(queue.length, 1)) }, worker));
  board.stop();
  return jobs.filter((job) => job.state.kind === 'failed');
}

/* ------------------------------------------------------------------ main */

async function main(): Promise<number> {
  const options = parseArgs(process.argv.slice(2));

  if (options.models !== null) {
    const ids = await listModels(options.models);
    console.log(ids.length === 0 ? '(no model ids matched)' : ids.join('\n'));
    return 0;
  }

  if (!options.importOnly) {
    const config = writerConfig();
    const { subjects, loose, dropped } = readSubjects(options.subjects);
    const annotated = subjects.filter((subject) => subject.notes !== '').length;
    console.log(
      `${subjects.length} topic(s) from ${options.subjects}` +
        (annotated > 0 ? `, ${annotated} with editorial notes` : ''),
    );

    // Print what was read before spending anything on it. A misread subjects
    // file is the cheapest failure to catch and the most annoying to discover
    // twenty minutes in.
    if (loose) {
      console.log(`read as a pasted answer — ${dropped.length} line(s) dropped as commentary or a suggested verdict`);
      for (const subject of subjects) {
        console.log(`  ${subject.topic}`);
        if (subject.notes !== '') console.log(`     notes: ${subject.notes.slice(0, 100)}${subject.notes.length > 100 ? '…' : ''}`);
      }
    }

    console.log(`model ${config.model} · reasoning ${config.effort} · web search ${config.webSearch ? 'on' : 'OFF'}`);

    const planned = subjects.map((subject, index) => {
      const slug = slugify(subject.topic);
      return {
        ...subject,
        index: index + 1,
        slug,
        file: path.join(INCOMING, `${String(index + 1).padStart(2, '0')}-${slug}.txt`),
      };
    });

    archiveLeftovers(options.fresh, new Set(planned.map((job) => path.basename(job.file))));

    // The prompt is generated from repository state, so it is rebuilt before
    // every batch. A stale list is how a writer picks a slug that is taken.
    console.log('\nregenerating the authoring prompt');
    run('npm', ['run', 'content:prompt']);

    const jobs: TopicJob[] = planned.map((job) => ({
      ...job,
      state: fs.existsSync(job.file) ? { kind: 'skipped' } : { kind: 'waiting' },
    }));

    // Placement before generation. A topic with no home costs three minutes and
    // returns a refusal; ten of them cost the afternoon. One cheap call up front
    // answers for the whole batch — and, crucially, proposes a shape for the
    // homeless ones *as a group*, which is the only way to get a taxonomy that
    // is not one system per page.
    const pendingJobs = jobs.filter((job) => job.state.kind === 'waiting');
    if (options.placement && pendingJobs.length > 0) {
      console.log('\nplacing topics against the existing taxonomy');
      const { placements, proposal } = await placeTopics(pendingJobs, config);

      for (const placement of placements) {
        const where = placement.system
          ? placement.system
          : placement.duplicate
            ? 'already published'
            : placement.invalid
              ? `no home (model said "${placement.invalid}")`
              : 'no home';
        console.log(`  ${placement.system ? '  ' : '! '}${where.padEnd(34)}${placement.topic}`);
      }

      const duplicates = placements.filter((placement) => placement.duplicate);
      if (duplicates.length > 0) {
        console.log(`\n${duplicates.length} topic(s) are already covered by a published page:`);
        for (const placement of duplicates) console.log(`  ${placement.topic}`);
        console.log(
          '\nA keyword variation of an existing page belongs in that page\'s aliases[], not\n' +
            'in a new record. Drop them from subjects.txt and re-run. Nothing was written.',
        );
        return 1;
      }

      const homeless = placements.filter((placement) => placement.system === null);
      if (homeless.length > 0) {
        console.log(
          [
            '',
            `${homeless.length} of ${placements.length} topic(s) have nowhere to go. Generating them would`,
            'spend three minutes each to be told the same thing, so nothing was written.',
            '',
            'Either drop them from subjects.txt, or add the taxonomy they need. A shape',
            'to react to — proposed for these topics together, not one system per page:',
            '',
            proposal === '' ? '  (the model offered no proposal)' : proposal,
            '',
            'Creating taxonomy is a deliberate decision, not a side effect of a batch:',
            'the URLs are permanent. Approve a shape, then re-run.',
            'To generate the topics that DO have a home, remove the others and re-run.',
          ].join('\n'),
        );
        return 1;
      }
    }

    console.log(`\nwriting — live status also in ${path.relative(ROOT, STATUS_FILE)}\n`);
    const failed = await generate(jobs, config, options.concurrency);

    if (failed.length > 0) {
      console.log(`\n${failed.length} topic(s) did not produce importable content:`);
      for (const job of failed) {
        console.log(`  ${job.slug}: ${job.state.kind === 'failed' ? job.state.reason : ''}`);
      }
      console.log('\nDelete those files and re-run — finished topics are skipped. Nothing was imported.');
      return 1;
    }

    // A page written without a search reads fine and cites URLs that do not
    // exist. The importer only checks that a URL is well-formed, so this is the
    // one quality failure nothing downstream can catch.
    const searchless = jobs.filter((job) => job.state.kind === 'done' && job.state.searches === 0);
    if (searchless.length > 0) {
      console.log(
        `\nWarning: ${searchless.length} topic(s) finished without a single web search, which the\n` +
          'authoring prompt requires. Their source URLs are likely invented — read them before\n' +
          `seeding: ${searchless.map((job) => job.slug).join(', ')}`,
      );
    }

  }

  const pending = fs
    .readdirSync(INCOMING)
    .filter((name) => /\.(txt|md)$/i.test(name) && name !== 'STATUS.log')
    .map((name) => path.join(INCOMING, name));

  console.log('\nchecking that every cited source URL resolves');
  const { dead, unverified } = await checkSourceUrls(pending);
  for (const link of unverified) {
    console.log(`  unverified (${link.status})  ${link.file}  ${link.url}`);
  }
  if (dead.length > 0) {
    console.log(`\n${dead.length} cited source URL(s) do not exist:`);
    for (const link of dead) console.log(`  ${link.status}  ${link.file}\n       ${link.url}`);
    console.log(
      [
        '',
        'Nothing was imported. A dead source is the one honesty rule the importer',
        'cannot catch, and the text is not mine to edit — either delete those files',
        'and re-run the topics, or correct the URLs yourself and re-run --import.',
      ].join('\n'),
    );
    return 1;
  }
  console.log(`  ${pending.length} file(s) checked, no dead links`);

  if (options.generateOnly) {
    console.log(`\nGenerated into ${path.relative(ROOT, INCOMING)}. Stopping before import as asked.`);
    return 0;
  }

  // Dry run first. The importer is atomic either way, but seeing the plan before
  // anything is written is what makes an unattended batch safe to trust.
  //
  // `--replace` is not a loosening. Most topics arrive against a slug already
  // reserved as a draft in a `planned-*.ts`, and the importer refuses an existing
  // slug without it. Overwriting a PUBLISHED page needs `--force` as well, which
  // this pipeline never passes — so a finished page still cannot be clobbered.
  console.log('\nimport --dry-run');
  run('npm', ['run', 'content:import', '--', './incoming/', '--replace', '--dry-run']);

  console.log('\nimport');
  const imported = slugsIn(pending);
  run('npm', ['run', 'content:import', '--', './incoming/', '--replace']);

  const released = releaseReservedSlugs(imported);
  if (released.length > 0) {
    console.log(`\nreleased ${released.length} reserved draft(s) that now have a real page:`);
    for (const entry of released) console.log(`  ${entry}`);
  }

  console.log('\nregenerating the authoring prompt for the next batch');
  run('npm', ['run', 'content:prompt']);

  console.log('\nverify');
  run('npm', ['run', 'verify']);

  // Only now, with the content imported and every check green, are these files
  // spent. Archiving them here is what lets tomorrow's run be a plain
  // `content:batch` instead of remembering `--fresh` every single day.
  const stamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
  const archive = path.join(INCOMING, 'done', stamp);
  fs.mkdirSync(archive, { recursive: true });
  for (const file of pending) fs.renameSync(file, path.join(archive, path.basename(file)));
  console.log(`\narchived ${pending.length} imported file(s) into ${path.relative(ROOT, archive)}`);

  console.log(
    [
      '',
      'Done. The working tree holds the new content and every check passes.',
      '',
      'Nothing was seeded, committed or deployed — DATABASE_URL is production, so',
      'that stays a separate decision. Review `git status`, then say so explicitly.',
    ].join('\n'),
  );
  return 0;
}

/**
 * Only run when invoked directly.
 *
 * The tests import `parseSubjects` and `promptFor` from this module, and a
 * top-level `main()` would start a real batch — archiving files and calling the
 * model — as a side effect of loading it.
 */
if (process.argv[1] !== undefined && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main()
    .then((code) => {
      process.exitCode = code;
    })
    .catch((error: unknown) => {
      console.error(`\n${(error as Error).message}`);
      process.exitCode = 1;
    });
}
