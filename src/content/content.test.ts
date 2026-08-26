import { describe, expect, it } from 'vitest';

import { domains, objectCategories, problems, systems } from './index';
import { asPublishedProblem, canonicalPathSchema, publishedProblemSchema } from '@/lib/content/schema';

/**
 * Content guardrails.
 *
 * These are not tests of the framework — they are the automated form of the
 * editorial rules this site is built on. If someone later adds a problem that
 * fabricates a source URL, invents a mileage figure, publishes without a
 * description, or duplicates a canonical path, this suite fails before the
 * content ever reaches a reader.
 */

const published = problems.filter((p) => p.status === 'published');
const drafts = problems.filter((p) => p.status === 'draft');

describe('taxonomy', () => {
  it('does not put a meaningless "Life" level above the domains', () => {
    // Deliberate architectural decision: every problem here is a life problem,
    // so the level would carry no information for a reader or a crawler.
    const names = domains.map((d) => d.name.toLowerCase());
    expect(names).not.toContain('life');
  });

  it('keeps the taxonomy independent of the URL', () => {
    const cars = objectCategories.find((o) => o.slug === 'cars');
    const tires = systems.find((s) => s.slug === 'tires');

    // Cars sits under the Mobility domain in the taxonomy...
    expect(cars?.domainSlug).toBe('mobility');
    // ...but "mobility" must NOT appear in the URL.
    expect(cars?.canonicalPath).toBe('/cars/');
    expect(cars?.canonicalPath).not.toContain('mobility');
    expect(tires?.canonicalPath).toBe('/cars/tires/');
  });

  it('gives every taxonomy node a unique, well-formed canonical path', () => {
    const paths = [...domains, ...objectCategories, ...systems].map((n) => n.canonicalPath);
    expect(new Set(paths).size).toBe(paths.length);
    for (const path of paths) {
      expect(canonicalPathSchema.safeParse(path).success).toBe(true);
    }
  });

  it('every object and system points at a parent that exists', () => {
    const domainSlugs = new Set(domains.map((d) => d.slug));
    const objectSlugs = new Set(objectCategories.map((o) => o.slug));
    for (const object of objectCategories) expect(domainSlugs).toContain(object.domainSlug);
    for (const system of systems) expect(objectSlugs).toContain(system.objectSlug);
  });
});

describe('publish gate', () => {
  it('every published problem passes full validation', () => {
    for (const problem of published) {
      const result = publishedProblemSchema.safeParse(problem);
      expect(result.success, `${problem.slug}: ${JSON.stringify(result.error?.issues)}`).toBe(true);
    }
  });

  it('rejects a problem that claims to be published without a verdict', () => {
    const incomplete = { ...published[0], verdict: undefined };
    expect(publishedProblemSchema.safeParse(incomplete).success).toBe(false);
    expect(asPublishedProblem(incomplete)).toBeNull();
  });

  it('allows drafts to be honestly empty rather than forcing an invented verdict', () => {
    expect(drafts.length).toBeGreaterThan(0);
    for (const draft of drafts) {
      expect(draft.verdict).toBeUndefined();
      expect(draft.shortAnswer).toBeUndefined();
      // But it must still reserve a real name and URL, so links can point at it.
      expect(draft.name.length).toBeGreaterThan(0);
      expect(canonicalPathSchema.safeParse(draft.canonicalPath).success).toBe(true);
    }
  });

  it('never marks a draft as indexable', () => {
    for (const draft of drafts) expect(draft.indexable).toBe(false);
  });
});

describe('URLs', () => {
  it('gives every problem a unique canonical path', () => {
    const paths = problems.map((p) => p.canonicalPath);
    expect(new Set(paths).size).toBe(paths.length);
  });

  it('never lets an alias collide with a real canonical path', () => {
    // An alias that shadows a canonical path would make a page unreachable.
    const canonical = new Set(problems.map((p) => p.canonicalPath));
    const aliases = problems.flatMap((p) => p.aliases ?? []);
    expect(new Set(aliases).size).toBe(aliases.length);
    for (const alias of aliases) expect(canonical.has(alias)).toBe(false);
  });

  it('routes keyword variations through aliases instead of separate pages', () => {
    // "can I drive with low tire pressure" and "how long can I drive with low
    // tire pressure" are the same problem, so they redirect rather than mint
    // near-duplicate URLs. This is the anti-keyword-permutation rule.
    const ltp = problems.find((p) => p.slug === 'low-tire-pressure');
    expect(ltp?.aliases?.length).toBeGreaterThan(0);
    for (const alias of ltp?.aliases ?? []) {
      expect(canonicalPathSchema.safeParse(alias).success).toBe(true);
    }
  });

  it('does not create a separate problem for a phrasing of an existing one', () => {
    const slugs = problems.map((p) => p.slug);
    for (const banned of [
      'can-i-drive-with-low-tire-pressure',
      'how-long-can-i-drive-with-low-tire-pressure',
      'is-low-tire-pressure-safe',
    ]) {
      expect(slugs).not.toContain(banned);
    }
  });
});

describe('SEO fields', () => {
  it('keeps the H1 and the <title> different, on purpose', () => {
    for (const problem of published) {
      expect(problem.seoTitle).not.toBe(problem.h1);
    }
  });

  it('gives every published page a unique title and description', () => {
    const titles = published.map((p) => p.seoTitle);
    const descriptions = published.map((p) => p.metaDescription);
    expect(new Set(titles).size).toBe(titles.length);
    expect(new Set(descriptions).size).toBe(descriptions.length);
  });

  it('keeps metadata within the lengths search engines actually display', () => {
    for (const problem of published) {
      expect(problem.seoTitle!.length).toBeLessThanOrEqual(75);
      expect(problem.metaDescription!.length).toBeLessThanOrEqual(170);
    }
  });
});

describe('safety and honesty rules', () => {
  it('never fabricates a source URL', () => {
    for (const problem of published) {
      for (const source of problem.sources ?? []) {
        // Null is always allowed. A non-null URL must be a real absolute https URL.
        if (source.url === null) continue;
        expect(source.url).toMatch(/^https:\/\//);
        expect(source.url).not.toMatch(/example\.(com|org|test)/);
      }
    }
  });

  it('cites at least one government or regulatory source on a safety topic', () => {
    for (const problem of published) {
      const authoritative = (problem.sources ?? []).filter(
        (s) => s.sourceType === 'government' || s.sourceType === 'regulation',
      );
      expect(authoritative.length).toBeGreaterThan(0);
    }
  });

  it('names no reviewer that does not exist', () => {
    for (const problem of published) {
      // reviewScope describes what was reviewed. It must not smuggle in a
      // fabricated human credential.
      expect(problem.reviewScope ?? '').not.toMatch(/reviewed by|ASE-certified|\bDr\.|technician\b/i);
    }
  });

  it('invents no safe driving distance or duration', () => {
    // The single most dangerous thing this page could do is answer "how long can
    // I drive on it?" with a number. Scan all free text for one.
    const distancePattern =
      /\b\d+(\.\d+)?\s*(miles|mile|km|kilometres|kilometers|hours|hour|minutes|mins)\b/i;

    for (const problem of published) {
      const freeText = [
        problem.shortAnswer,
        problem.whyItMatters,
        ...(problem.scenarios ?? []).flatMap((s) => [s.resultBody, s.recommendedAction]),
        ...(problem.windows ?? []).map((w) => w.whatToDo),
        ...(problem.actions ?? []).map((a) => a.body),
        ...(problem.faqs ?? []).map((f) => f.answer),
      ].filter(Boolean) as string[];

      for (const text of freeText) {
        expect(text, `unsupported distance/duration claim: "${text}"`).not.toMatch(distancePattern);
      }
    }
  });

  it('points at the vehicle placard rather than the tire sidewall maximum', () => {
    const ltp = problems.find((p) => p.slug === 'low-tire-pressure');
    const allText = JSON.stringify(ltp);
    expect(allText).toMatch(/placard/i);
    expect(allText).toMatch(/owner’s manual|owner's manual/i);
  });
});

describe('page structure', () => {
  it('gives the published problem every one of the twelve blocks', () => {
    const ltp = problems.find((p) => p.slug === 'low-tire-pressure')!;
    expect(ltp.scenarios).toHaveLength(6);
    expect(ltp.consequences?.length).toBeGreaterThan(0);
    expect(ltp.windows).toHaveLength(6);
    expect(ltp.actions).toHaveLength(3);
    expect(ltp.flags).toHaveLength(5);
    expect(ltp.faqs).toHaveLength(6);
    expect(ltp.sources?.length).toBeGreaterThan(0);
    expect(ltp.resources).toHaveLength(2);
    expect(ltp.related?.length).toBeGreaterThan(0);
  });

  it('builds a causal chain of at least three linked stages', () => {
    const ltp = problems.find((p) => p.slug === 'low-tire-pressure')!;
    const chain = (ltp.consequences ?? []).map((c) => c.chainLabel).filter(Boolean);
    expect(chain.length).toBeGreaterThanOrEqual(3);
  });

  it('ends the consequence chain on the most severe outcome', () => {
    const ltp = problems.find((p) => p.slug === 'low-tire-pressure')!;
    expect(ltp.consequences?.at(-1)?.severity).toBe('danger');
  });

  it('gives every scenario a headline and a next action', () => {
    for (const problem of published) {
      for (const scenario of problem.scenarios ?? []) {
        expect(scenario.resultHeadline.trim()).not.toBe('');
        expect(scenario.recommendedAction.trim()).not.toBe('');
      }
    }
  });

  it('ships no affiliate link and no fabricated purchase URL', () => {
    for (const problem of published) {
      for (const resource of problem.resources ?? []) {
        expect(resource.affiliate).toBe(false);
        expect(resource.url).toBeNull();
      }
    }
  });
});

describe('related problems', () => {
  it('only links to problems that actually exist as records', () => {
    const slugs = new Set(problems.map((p) => p.slug));
    for (const problem of problems) {
      for (const related of problem.related ?? []) {
        expect(slugs, `unknown related problem "${related.slug}"`).toContain(related.slug);
      }
    }
  });

  it('writes meaningful anchor text rather than "click here"', () => {
    for (const problem of problems) {
      for (const related of problem.related ?? []) {
        expect(related.anchorText.length).toBeGreaterThan(10);
        expect(related.anchorText.toLowerCase()).not.toMatch(/click here|read more|learn more/);
      }
    }
  });
});
