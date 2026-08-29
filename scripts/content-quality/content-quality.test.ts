/**
 * Tests for the content quality gate.
 *
 * Nothing here touches the network. The Anthropic client is replaced with a
 * stub, so the suite costs nothing to run and stays runnable without a key —
 * which also means the failure paths (timeout, malformed response, missing
 * credentials) can be tested, and those are the ones that matter: a gate that
 * passes content when the API breaks is worse than no gate.
 */
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { afterEach, beforeEach, describe, expect, it } from 'vitest';

import type Anthropic from '@anthropic-ai/sdk';

import { problems } from '../../src/content/index';
import type { ProblemSeed } from '../../src/content/types';
import { ContentQualityApiError, callStructured, setClient, getClient, totalCost } from './anthropic';
import { computeBaseline, detectDrift, loadBaseline, pickExcerpts } from './baseline';
import { MissingApiKeyError, THRESHOLDS } from './config';
import { checkDeterministic } from './deterministic';
import { extractDocument, measure, sectionShares } from './extract';
import { evaluateFactCheck } from './fact-check';
import { evaluateGates, gatesPass } from './judge';
import { runQualityGate } from './pipeline';
import { renderConsole, writeReport } from './report';
import { applyRevisions, parsePath } from './rewrite';
import { judgeResponseSchema } from './schemas';
import { measureStyle } from './signals';
import { percentile, robustRange, sentences, wordCount } from './text';

const published = problems.filter((p) => p.status === 'published');
const goldSeeds = published;
const baseline = computeBaseline(goldSeeds, new Date('2026-08-29T00:00:00Z'));
const sample = published.find((p) => p.slug === 'slow-drain')!;

// --------------------------------------------------------------- primitives

describe('text measurement', () => {
  it('counts words without counting punctuation as words', () => {
    expect(wordCount('Yes — usually, if it stayed frozen.')).toBe(6);
    expect(wordCount('')).toBe(0);
    expect(wordCount(undefined)).toBe(0);
  });

  it('does not split a sentence at an abbreviation', () => {
    const text = 'The U.S. FDA says so. Freezer burn is a quality problem.';
    expect(sentences(text)).toHaveLength(2);
  });

  it('interpolates percentiles rather than picking a neighbour', () => {
    expect(percentile([1, 2, 3, 4], 50)).toBe(2.5);
    expect(percentile([5], 90)).toBe(5);
    expect(percentile([], 50)).toBe(0);
  });

  it('never sets a fence tighter than the observed values', () => {
    // Near-constant metric: every Tukey fence collapses onto the median, which
    // would make the one real outlier in the corpus a failure against itself.
    const range = robustRange([5, 5, 5, 5, 6]);
    expect(range.upperFence).toBeGreaterThanOrEqual(6);
    expect(range.lowerFence).toBeLessThanOrEqual(5);
  });
});

// ------------------------------------------------------------------ baseline

describe('gold set baseline', () => {
  it('freezes exactly the problems it was given', () => {
    expect(baseline.goldSlugs).toHaveLength(goldSeeds.length);
    expect(baseline.goldSlugs).toContain('low-tire-pressure');
    expect(baseline.version).toBe('1.0');
  });

  it('computes a range for every tracked metric', () => {
    expect(baseline.metrics.totalWords.median).toBeGreaterThan(500);
    expect(baseline.metrics.totalWords.p10).toBeLessThanOrEqual(baseline.metrics.totalWords.median);
    expect(baseline.metrics.totalWords.p90).toBeGreaterThanOrEqual(baseline.metrics.totalWords.median);
    expect(baseline.metrics.faqCount.n).toBe(goldSeeds.length);
  });

  it('ships short style excerpts, not whole pages', () => {
    const excerpts = pickExcerpts(goldSeeds, 2);
    expect(excerpts).toHaveLength(2);
    for (const excerpt of excerpts) {
      expect(excerpt.shortAnswer.length).toBeGreaterThan(0);
      expect(JSON.stringify(excerpt).length).toBeLessThan(3000);
    }
  });

  it('reports pages published after the freeze without absorbing them', () => {
    const extra: ProblemSeed = { ...sample, slug: 'brand-new-page', canonicalPath: '/home/plumbing/drains/brand-new-page/' };
    const drift = detectDrift(baseline, [...goldSeeds, extra]);
    expect(drift.newlyPublished).toContain('brand-new-page');
    expect(baseline.goldSlugs).not.toContain('brand-new-page');
    expect(drift.missing).toHaveLength(0);
  });

  it('has a frozen baseline.json checked into the repository', () => {
    const frozen = loadBaseline();
    expect(frozen.goldSlugs.length).toBeGreaterThan(0);
    expect(frozen.metrics.totalWords.n).toBe(frozen.goldSlugs.length);
  });
});

// ------------------------------------------------------------ deterministic

describe('deterministic checker', () => {
  it('measures only what a reader sees', () => {
    const doc = extractDocument(sample);
    const metrics = measure(doc);
    expect(metrics.totalWords).toBeGreaterThan(800);
    expect(metrics.faqCount).toBe(sample.faqs?.length ?? 0);
    expect(metrics.sourceCount).toBe(sample.sources?.length ?? 0);
    expect(JSON.stringify(doc)).not.toContain(sample.slug === 'slow-drain' ? 'systemSlug' : 'nothing');
  });

  it('keeps section shares summing to one', () => {
    const shares = sectionShares(extractDocument(sample));
    const total = Object.values(shares).reduce((a, b) => a + b, 0);
    expect(total).toBeGreaterThan(0.98);
    expect(total).toBeLessThan(1.02);
  });

  it('passes every gold page against its own corpus', () => {
    // A hand-edited page must never fail the standard derived from it.
    for (const seed of goldSeeds) {
      const result = checkDeterministic(extractDocument(seed), baseline);
      expect(result.blocked, `${seed.slug} was blocked`).toBe(false);
      expect(result.counts.fail, `${seed.slug} had failures: ${result.findings.map((f) => f.message).join(' | ')}`).toBe(0);
    }
  });

  it('blocks a page that is missing a required block', () => {
    const gutted: ProblemSeed = { ...sample, shortAnswer: '', faqs: [], flags: [] };
    const result = checkDeterministic(extractDocument(gutted), baseline);
    expect(result.blocked).toBe(true);
    expect(result.findings.some((f) => f.subject === 'shortAnswer' && f.blocking)).toBe(true);
  });

  it('blocks a page at twice the corpus length', () => {
    const bloated: ProblemSeed = {
      ...sample,
      whyItMatters: `${sample.whyItMatters}\n\n${'The drain is slow. '.repeat(900)}`,
    };
    const result = checkDeterministic(extractDocument(bloated), baseline);
    expect(result.blocked).toBe(true);
    expect(result.findings.some((f) => f.subject === 'totalWords' && f.blocking)).toBe(true);
  });

  it('flags a long short answer without blocking the page', () => {
    const wordy: ProblemSeed = {
      ...sample,
      shortAnswer: `${sample.shortAnswer} ${'It depends on a number of different contributing factors. '.repeat(8)}`,
    };
    const result = checkDeterministic(extractDocument(wordy), baseline);
    expect(result.findings.some((f) => f.subject === 'shortAnswerWords')).toBe(true);
  });
});

// ------------------------------------------------------------- style signals

describe('AI-style detection', () => {
  it('measures density, not presence', () => {
    const doc = extractDocument(sample);
    const style = measureStyle(doc);
    expect(style.words).toBeGreaterThan(0);
    expect(style.hedgePer1000).toBeGreaterThanOrEqual(0);
    // The gold pages use some of these constructions and are still fine.
    expect(style.aiPhrasePer1000).toBeLessThan(20);
  });

  it('catches stacked AI tells in prose that a word list alone would pass', () => {
    const slop: ProblemSeed = {
      ...sample,
      whyItMatters: [
        'It is important to note that the key thing to understand is what matters here.',
        'In other words, when it comes to this, the bottom line is that it is worth noting that a slow drain is not a blockage but a warning.',
        'Depending on the situation, this is where the useful distinction becomes relevant, rather than the alternative.',
      ].join('\n\n'),
    };
    const clean = measureStyle(extractDocument(sample));
    const dirty = measureStyle(extractDocument(slop));
    expect(dirty.aiPhrasePer1000).toBeGreaterThan(clean.aiPhrasePer1000);
    expect(dirty.aiPhraseHits.length).toBeGreaterThan(4);

    const result = checkDeterministic(extractDocument(slop), baseline);
    expect(result.findings.some((f) => f.check === 'style' && f.subject === 'aiPhrasePer1000')).toBe(true);
  });

  it('surfaces near-duplicate sentences as candidates for the judge', () => {
    const repetitive: ProblemSeed = {
      ...sample,
      whyItMatters: [
        'A loose connection can make an outlet heat up over time.',
        'A loose connection can make an outlet heat up over time.',
      ].join('\n\n'),
    };
    const style = measureStyle(extractDocument(repetitive));
    expect(style.nearDuplicateCount).toBeGreaterThan(0);
  });
});

// ----------------------------------------------------------- threshold logic

describe('score thresholds', () => {
  const scores = (usefulness: number, naturalness: number, length: number) =>
    judgeResponseSchema.parse({
      usefulness: { score: usefulness, pass: true, issues: [] },
      naturalness: { score: naturalness, pass: true, issues: [], repetition_clusters: [] },
      length: { score: length, pass: true, issues: [] },
      compression: { estimated_removable_percent: 5, explanation: 'tight' },
      final_pass: true,
    });

  it('requires every dimension to clear its own bar', () => {
    expect(gatesPass(evaluateGates(scores(100, 100, 100)))).toBe(true);
    expect(gatesPass(evaluateGates(scores(THRESHOLDS.usefulness - 1, 100, 100)))).toBe(false);
    expect(gatesPass(evaluateGates(scores(100, THRESHOLDS.naturalness - 1, 100)))).toBe(false);
    expect(gatesPass(evaluateGates(scores(100, 100, THRESHOLDS.length - 1)))).toBe(false);
  });

  it('does not let a high average rescue a failed dimension', () => {
    // Mean of 91.3 — a page that would sail through an averaged gate.
    const gates = evaluateGates(scores(80, 96, 98));
    expect(gates.usefulness).toBe(false);
    expect(gatesPass(gates)).toBe(false);
  });

  it('treats usefulness as the hard gate at exactly the threshold', () => {
    expect(evaluateGates(scores(THRESHOLDS.usefulness, 100, 100)).usefulness).toBe(true);
    expect(evaluateGates(scores(THRESHOLDS.usefulness - 1, 100, 100)).usefulness).toBe(false);
  });

  it('keeps usefulness the strictest of the three bars', () => {
    // Calibration intent: usefulness at the corpus median, naturalness just
    // under it, length loosest because the deterministic range is its real gate.
    expect(THRESHOLDS.usefulness).toBeGreaterThan(THRESHOLDS.naturalness);
    expect(THRESHOLDS.naturalness).toBeGreaterThanOrEqual(THRESHOLDS.length);
  });

  it('fails fact preservation on any major violation, whatever the model claimed', () => {
    expect(evaluateFactCheck({ preserved: true, violations: [], summary: '' })).toBe(true);
    expect(
      evaluateFactCheck({
        preserved: true,
        violations: [{ type: 'safety_weakened', path: 'flags[0].title', detail: 'softened', severity: 'major' }],
        summary: '',
      }),
    ).toBe(false);
    expect(evaluateFactCheck({ preserved: false, violations: [], summary: '' })).toBe(false);
  });
});

// ------------------------------------------------------------------ rewrite

describe('rewrite application', () => {
  it('parses the paths it is allowed to write and rejects the rest', () => {
    expect(parsePath('shortAnswer')).toEqual({ root: 'shortAnswer', index: null, leaf: null });
    expect(parsePath('faqs[3].answer')).toEqual({ root: 'faqs', index: 3, leaf: 'answer' });
    expect(parsePath('faqs[3]')).toBeNull();
    expect(parsePath('__proto__.polluted')).toBeNull();
  });

  it('replaces only the named field and leaves the rest of the seed alone', () => {
    const { seed, applied } = applyRevisions(sample, [
      { path: 'shortAnswer', replacement: 'Usually yes, for a short while.', rationale: 'tighter' },
    ]);
    expect(applied).toHaveLength(1);
    expect(seed.shortAnswer).toBe('Usually yes, for a short while.');
    expect(seed.faqs).toEqual(sample.faqs);
    expect(sample.shortAnswer).not.toBe('Usually yes, for a short while.');
  });

  it('refuses a path that is not an editable field, and an empty replacement', () => {
    const { applied, rejected } = applyRevisions(sample, [
      { path: 'verdict', replacement: 'safe_to_ignore', rationale: 'nope' },
      { path: 'shortAnswer', replacement: '   ', rationale: 'nope' },
    ]);
    expect(applied).toHaveLength(0);
    expect(rejected).toHaveLength(2);
    expect(rejected[0]?.reason).toMatch(/not an editable field/);
  });

  it('keeps lastReviewedAt a Date through the copy', () => {
    const { seed } = applyRevisions(sample, [
      { path: 'shortAnswer', replacement: 'Shorter answer.', rationale: 'x' },
    ]);
    if (sample.lastReviewedAt) expect(seed.lastReviewedAt).toBeInstanceOf(Date);
  });
});

// -------------------------------------------------------------- API failures

type StubHandler = (params: { system: string }) => unknown;

function stubClient(handler: StubHandler): Anthropic {
  return {
    messages: {
      parse: async (params: { system: string }) => handler(params),
    },
  } as unknown as Anthropic;
}

function message(parsed: unknown, text = JSON.stringify(parsed)) {
  return {
    stop_reason: 'end_turn',
    content: [{ type: 'text', text }],
    parsed_output: parsed,
    usage: { input_tokens: 1000, output_tokens: 500, cache_read_input_tokens: 0, cache_creation_input_tokens: 0 },
  };
}

const passingJudge = {
  usefulness: { score: 95, pass: true, issues: [] },
  naturalness: { score: 92, pass: true, issues: [], repetition_clusters: [] },
  length: { score: 94, pass: true, issues: [] },
  compression: { estimated_removable_percent: 6, explanation: 'tight already' },
  final_pass: true,
};

const failingJudge = {
  usefulness: { score: 70, pass: false, issues: [{ section: 'faqs', paths: ['faqs[0].answer'], issue: 'repeats the body', severity: 'major', suggested_fix: 'cut it' }] },
  naturalness: { score: 70, pass: false, issues: [], repetition_clusters: [] },
  length: { score: 80, pass: false, issues: [] },
  compression: { estimated_removable_percent: 30, explanation: 'verbose' },
  final_pass: false,
};

describe('API failure handling', () => {
  const originalKey = process.env.ANTHROPIC_API_KEY;

  beforeEach(() => {
    process.env.ANTHROPIC_API_KEY = 'test-key-not-used';
  });

  afterEach(() => {
    setClient(null);
    if (originalKey === undefined) delete process.env.ANTHROPIC_API_KEY;
    else process.env.ANTHROPIC_API_KEY = originalKey;
  });

  it('refuses to build a client without a key, with an actionable message', () => {
    delete process.env.ANTHROPIC_API_KEY;
    setClient(null);
    expect(() => getClient()).toThrow(MissingApiKeyError);
    try {
      getClient();
    } catch (error) {
      expect((error as Error).message).toMatch(/ANTHROPIC_API_KEY/);
      expect((error as Error).message).toMatch(/\.env\.local/);
    }
  });

  it('rejects a response that is not valid JSON', async () => {
    setClient(stubClient(() => message(null, 'Sure! Here is my review: the page looks great.')));
    await expect(
      callStructured({ stage: 'judge', system: 's', user: 'u', schema: judgeResponseSchema }),
    ).rejects.toBeInstanceOf(ContentQualityApiError);
  });

  it('rejects JSON that does not match the schema', async () => {
    setClient(stubClient(() => message({ usefulness: { score: 'excellent' } })));
    await expect(
      callStructured({ stage: 'judge', system: 's', user: 'u', schema: judgeResponseSchema }),
    ).rejects.toThrow(/did not match the expected schema/);
  });

  it('rejects a truncated response instead of scoring a partial review', async () => {
    setClient(
      stubClient(() => ({ ...message(passingJudge), stop_reason: 'max_tokens' })),
    );
    await expect(
      callStructured({ stage: 'judge', system: 's', user: 'u', schema: judgeResponseSchema }),
    ).rejects.toThrow(/max_tokens/);
  });

  it('recovers a valid object from a text block when parsed_output is absent', async () => {
    setClient(stubClient(() => ({ ...message(passingJudge), parsed_output: null })));
    const result = await callStructured({ stage: 'judge', system: 's', user: 'u', schema: judgeResponseSchema });
    expect(result.data.usefulness.score).toBe(95);
    expect(result.usage.inputTokens).toBe(1000);
    expect(result.usage.costUsd).toBeGreaterThan(0);
  });

  it('reports token totals and omits cost for an unpriced model', () => {
    const totals = totalCost([
      { model: 'claude-opus-5', stage: 'judge', inputTokens: 10, outputTokens: 5, cacheReadTokens: 0, cacheCreationTokens: 0, costUsd: 0.01 },
      { model: 'some-future-model', stage: 'rewrite', inputTokens: 10, outputTokens: 5, cacheReadTokens: 0, cacheCreationTokens: 0, costUsd: null },
    ]);
    expect(totals.inputTokens).toBe(20);
    expect(totals.costUsd).toBeNull();
  });
});

// ----------------------------------------------------------------- pipeline

describe('pipeline', () => {
  const originalKey = process.env.ANTHROPIC_API_KEY;

  beforeEach(() => {
    process.env.ANTHROPIC_API_KEY = 'test-key-not-used';
  });

  afterEach(() => {
    setClient(null);
    if (originalKey === undefined) delete process.env.ANTHROPIC_API_KEY;
    else process.env.ANTHROPIC_API_KEY = originalKey;
  });

  it('passes a page the judge clears, with one API call', async () => {
    let calls = 0;
    setClient(
      stubClient(() => {
        calls += 1;
        return message(passingJudge);
      }),
    );
    const report = await runQualityGate(sample, baseline, { mode: 'check' });
    expect(report.final).toBe('PASS');
    expect(calls).toBe(1);
    expect(report.usage.costUsd).toBeGreaterThan(0);
  });

  it('spends nothing on a structurally broken page', async () => {
    let calls = 0;
    setClient(
      stubClient(() => {
        calls += 1;
        return message(passingJudge);
      }),
    );
    const gutted: ProblemSeed = { ...sample, shortAnswer: '' };
    const report = await runQualityGate(gutted, baseline, { mode: 'check' });
    expect(report.final).toBe('BLOCKED');
    expect(calls).toBe(0);
    expect(report.usage.calls).toHaveLength(0);
  });

  it('stops after the rewrite cycle limit instead of grinding on', async () => {
    let judgeCalls = 0;
    let rewriteCalls = 0;
    let counter = 0;
    setClient(
      stubClient(({ system }) => {
        if (system.startsWith('You are the editor')) {
          judgeCalls += 1;
          return message(failingJudge);
        }
        if (system.startsWith('You are the copy editor')) {
          rewriteCalls += 1;
          counter += 1;
          return message({
            revisions: [{ path: 'faqs[0].answer', replacement: `Rewritten answer number ${counter}.`, rationale: 'cut repetition' }],
            left_alone: [],
          });
        }
        return message({ preserved: true, violations: [], summary: 'unchanged in meaning' });
      }),
    );

    const report = await runQualityGate(sample, baseline, { mode: 'fix', maxCycles: 2 });
    expect(report.final).toBe('FAILED_REVIEW');
    expect(rewriteCalls).toBe(2);
    expect(judgeCalls).toBe(3); // initial review plus one per cycle
    expect(report.blockers.length).toBeGreaterThan(0);
  });

  it('discards a rewrite that changed meaning', async () => {
    setClient(
      stubClient(({ system }) => {
        if (system.startsWith('You are the editor')) return message(failingJudge);
        if (system.startsWith('You are the copy editor')) {
          return message({
            revisions: [{ path: 'faqs[0].answer', replacement: 'It is fine to leave it indefinitely.', rationale: 'shorter' }],
            left_alone: [],
          });
        }
        return message({
          preserved: false,
          violations: [{ type: 'safety_weakened', path: 'faqs[0].answer', detail: 'removed the warning', severity: 'critical' }],
          summary: 'meaning changed',
        });
      }),
    );

    const report = await runQualityGate(sample, baseline, { mode: 'fix', maxCycles: 1 });
    expect(report.final).toBe('FACT_CHECK_FAILED');
    expect(report.factCheck?.pass).toBe(false);
  });

  it('never reports PASS when the API failed', async () => {
    setClient(
      stubClient(() => {
        throw new Error('socket hang up');
      }),
    );
    const report = await runQualityGate(sample, baseline, { mode: 'check' });
    expect(report.final).toBe('ERROR');
    expect(report.error).toMatch(/socket hang up/);
    expect(report.blockers.length).toBeGreaterThan(0);
  });

  it('applies the local thresholds even when the model says it passed', async () => {
    setClient(
      stubClient(() =>
        message({
          ...failingJudge,
          final_pass: true, // the model contradicting its own scores
        }),
      ),
    );
    const report = await runQualityGate(sample, baseline, { mode: 'check' });
    expect(report.final).toBe('FAIL');
    expect(report.cycles[0]?.judge?.modelDisagreed).toBe(true);
  });
});

// ------------------------------------------------------------------ reports

describe('report generation', () => {
  let dir: string;

  beforeEach(() => {
    dir = fs.mkdtempSync(path.join(os.tmpdir(), 'ciii-report-'));
    process.env.ANTHROPIC_API_KEY = 'test-key-not-used';
  });

  afterEach(() => {
    setClient(null);
    fs.rmSync(dir, { recursive: true, force: true });
  });

  it('writes machine-readable JSON carrying the prompt version', async () => {
    setClient(stubClient(() => message(passingJudge)));
    const report = await runQualityGate(sample, baseline, { mode: 'check' });
    const written = writeReport(report, dir);

    const onDisk = JSON.parse(fs.readFileSync(written.jsonPath, 'utf8'));
    expect(onDisk.slug).toBe(sample.slug);
    expect(onDisk.final).toBe('PASS');
    expect(onDisk.promptVersions.judge).toMatch(/^\d+\.\d+$/);
    expect(onDisk.baseline.goldSize).toBe(baseline.goldSlugs.length);
    expect(written.revisionPath).toBeNull();
  });

  it('writes proposed revisions to a separate file rather than into src/content', async () => {
    setClient(
      stubClient(({ system }) => {
        if (system.startsWith('You are the editor')) return message(failingJudge);
        if (system.startsWith('You are the copy editor')) {
          return message({
            revisions: [{ path: 'faqs[0].answer', replacement: 'A shorter, tighter answer.', rationale: 'cut repetition' }],
            left_alone: [],
          });
        }
        return message({ preserved: true, violations: [], summary: 'same meaning' });
      }),
    );

    const before = fs.readFileSync(path.join('src', 'content', 'problems', 'slow-drain.ts'), 'utf8');
    const report = await runQualityGate(sample, baseline, { mode: 'fix', maxCycles: 1 });
    const written = writeReport(report, dir);

    expect(written.revisionPath).not.toBeNull();
    const revisions = JSON.parse(fs.readFileSync(written.revisionPath!, 'utf8'));
    expect(revisions.revisions[0].path).toBe('faqs[0].answer');
    expect(revisions.revisions[0].before).not.toBe(revisions.revisions[0].after);
    // The content file is never written to by this pipeline.
    expect(fs.readFileSync(path.join('src', 'content', 'problems', 'slow-drain.ts'), 'utf8')).toBe(before);
  });

  it('renders a console report that states the outcome and the scores', async () => {
    setClient(stubClient(() => message(passingJudge)));
    const report = await runQualityGate(sample, baseline, { mode: 'check' });
    const text = renderConsole(report);
    expect(text).toContain('CONTENT QUALITY REPORT');
    expect(text).toContain('USEFULNESS');
    expect(text).toMatch(/FINAL:\s*\n?PASS/);
    expect(text).toContain('Prompts: judge v');
  });
});
