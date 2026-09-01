import 'server-only';

import { cache } from 'react';
import { and, asc, eq, sql } from 'drizzle-orm';

import { getDb } from '@/lib/db/client';
import * as schema from '@/lib/db/schema';
import type { CompatVerdict, PairingRelation } from '@/lib/compat';
import { hubIsIndexable } from '@/lib/seo/hub-index';

/**
 * Reads for "Can I Use It With…".
 *
 * The compatibility twin of `problems.ts`, and deliberately the same shape:
 * every query filters on `published`, every function is request-cached, and no
 * component anywhere composes SQL. Nothing here knows what a page looks like.
 */

export interface PairingSummary {
  id: number;
  subjectSlug: string;
  subjectName: string;
  targetSlug: string;
  targetName: string;
  /** The question as the reader would search it. Carried on the summary so a
   *  listing can show it without a second query — the home page carousel splits
   *  its "Can I Use" / "Can I Plug" prefix onto its own line, exactly as it does
   *  for "Can I Ignore" on the decision side. */
  h1: string;
  path: string;
  /** How the two are combined. Carried here so an entity index can ask its
   *  question in the right words ("plug into", not "put in"). */
  relation: PairingRelation;
  verdict: CompatVerdict;
  shortAnswer: string;
}

export interface PairingPageData {
  id: number;
  subjectSlug: string;
  subjectName: string;
  subjectKind: string;
  subjectNote: string;
  relation: PairingRelation;
  targetSlug: string;
  targetName: string;
  targetKind: string;
  targetNote: string;
  canonicalPath: string;
  eyebrow: string | null;
  h1: string;
  seoTitle: string;
  metaDescription: string;
  verdict: CompatVerdict;
  shortAnswer: string;
  mainRisk: string;
  damages: string;
  alternative: string;
  calloutLabel: string;
  calloutBody: string[];
  lastReviewedAt: Date | null;
  reviewScope: string | null;
  conditionsOk: string[];
  conditionsNever: string[];
  mechanisms: { title: string; body: string }[];
  sources: { publisher: string; title: string; url: string }[];
}

const published = eq(schema.pairings.status, 'published');

function summarize(row: typeof schema.pairings.$inferSelect): PairingSummary {
  return {
    id: row.id,
    subjectSlug: row.subjectSlug,
    subjectName: row.subjectName,
    targetSlug: row.targetSlug,
    targetName: row.targetName,
    h1: row.h1,
    path: row.canonicalPath,
    relation: row.relation as PairingRelation,
    verdict: row.verdict as CompatVerdict,
    shortAnswer: row.shortAnswer ?? '',
  };
}

/** Every published pairing, oldest first — the order they were authored in. */
async function listAll(): Promise<PairingSummary[]> {
  const rows = await getDb()
    .select()
    .from(schema.pairings)
    .where(published)
    .orderBy(asc(schema.pairings.id));
  return rows.map(summarize);
}

/** Same target, e.g. everything written about an air fryer. */
async function listByTarget(targetSlug: string): Promise<PairingSummary[]> {
  const rows = await getDb()
    .select()
    .from(schema.pairings)
    .where(and(published, eq(schema.pairings.targetSlug, targetSlug)))
    .orderBy(asc(schema.pairings.id));
  return rows.map(summarize);
}

/** Same subject, e.g. everywhere Pyrex has an answer. */
async function listBySubject(subjectSlug: string): Promise<PairingSummary[]> {
  const rows = await getDb()
    .select()
    .from(schema.pairings)
    .where(and(published, eq(schema.pairings.subjectSlug, subjectSlug)))
    .orderBy(asc(schema.pairings.id));
  return rows.map(summarize);
}

/**
 * A random sample for the home page carousel.
 *
 * `order by random()` is honest at this table size and stops being so at a
 * hundred thousand rows, which this will never have. The same call on the
 * decision side is `getFeaturedProblems`.
 */
async function listFeatured(limit = 40): Promise<PairingSummary[]> {
  const rows = await getDb()
    .select()
    .from(schema.pairings)
    .where(published)
    .orderBy(sql`random()`)
    .limit(limit);
  return rows.map(summarize);
}

/** One page, with every child row it renders. Null when nothing is published there. */
async function getPage(subjectSlug: string, targetSlug: string): Promise<PairingPageData | null> {
  const db = getDb();

  const [row] = await db
    .select()
    .from(schema.pairings)
    .where(
      and(
        published,
        eq(schema.pairings.subjectSlug, subjectSlug),
        eq(schema.pairings.targetSlug, targetSlug),
      ),
    )
    .limit(1);

  if (!row || !row.verdict) return null;

  const [conditions, mechanisms, sources] = await Promise.all([
    db
      .select()
      .from(schema.pairingConditions)
      .where(eq(schema.pairingConditions.pairingId, row.id))
      .orderBy(asc(schema.pairingConditions.sortOrder)),
    db
      .select()
      .from(schema.pairingMechanisms)
      .where(eq(schema.pairingMechanisms.pairingId, row.id))
      .orderBy(asc(schema.pairingMechanisms.sortOrder)),
    db
      .select()
      .from(schema.pairingSources)
      .where(eq(schema.pairingSources.pairingId, row.id))
      .orderBy(asc(schema.pairingSources.sortOrder)),
  ]);

  return {
    id: row.id,
    subjectSlug: row.subjectSlug,
    subjectName: row.subjectName,
    subjectKind: row.subjectKind,
    subjectNote: row.subjectNote,
    relation: row.relation as PairingRelation,
    targetSlug: row.targetSlug,
    targetName: row.targetName,
    targetKind: row.targetKind,
    targetNote: row.targetNote,
    canonicalPath: row.canonicalPath,
    eyebrow: row.eyebrow,
    h1: row.h1,
    seoTitle: row.seoTitle ?? row.h1,
    metaDescription: row.metaDescription ?? '',
    verdict: row.verdict as CompatVerdict,
    shortAnswer: row.shortAnswer ?? '',
    mainRisk: row.mainRisk ?? '',
    damages: row.damages ?? '',
    alternative: row.alternative ?? '',
    calloutLabel: row.calloutLabel ?? '',
    calloutBody: (row.calloutBody ?? '').split('\n\n').filter(Boolean),
    lastReviewedAt: row.lastReviewedAt,
    reviewScope: row.reviewScope,
    conditionsOk: conditions.filter((c) => c.kind === 'ok').map((c) => c.body),
    conditionsNever: conditions.filter((c) => c.kind === 'never').map((c) => c.body),
    mechanisms: mechanisms.map((m) => ({ title: m.title, body: m.body })),
    sources: sources.map((s) => ({ publisher: s.publisher, title: s.title, url: s.url })),
  };
}

/** Subject and target names for one entity slug, whichever side it appears on. */
async function getEntity(slug: string): Promise<{
  slug: string;
  name: string;
  kind: string;
  note: string;
  asSubject: PairingSummary[];
  asTarget: PairingSummary[];
} | null> {
  const [asSubject, asTarget] = await Promise.all([listBySubject(slug), listByTarget(slug)]);
  if (asSubject.length === 0 && asTarget.length === 0) return null;

  const db = getDb();
  // Whichever side it appears on carries its name, kind and note.
  const [row] = asSubject.length
    ? await db
        .select({
          name: schema.pairings.subjectName,
          kind: schema.pairings.subjectKind,
          note: schema.pairings.subjectNote,
        })
        .from(schema.pairings)
        .where(and(published, eq(schema.pairings.subjectSlug, slug)))
        .limit(1)
    : await db
        .select({
          name: schema.pairings.targetName,
          kind: schema.pairings.targetKind,
          note: schema.pairings.targetNote,
        })
        .from(schema.pairings)
        .where(and(published, eq(schema.pairings.targetSlug, slug)))
        .limit(1);

  if (!row) return null;
  return { slug, name: row.name, kind: row.kind, note: row.note, asSubject, asTarget };
}


/**
 * Everything filed under one taxonomy node.
 *
 * A hub asks "what does this site know about appliances?", and the answer is
 * both content types. Placement lives on the pairing (see
 * `src/content/compat/placement.ts`) precisely so this can be one indexed query
 * rather than a join through a hierarchy pairings do not belong to.
 */
async function listByDomain(domainId: number): Promise<PairingSummary[]> {
  const rows = await getDb()
    .select()
    .from(schema.pairings)
    .where(and(published, eq(schema.pairings.domainId, domainId)))
    .orderBy(asc(schema.pairings.targetName), asc(schema.pairings.id));
  return rows.map(summarize);
}

async function listByObject(objectCategoryId: number): Promise<PairingSummary[]> {
  const rows = await getDb()
    .select()
    .from(schema.pairings)
    .where(and(published, eq(schema.pairings.objectCategoryId, objectCategoryId)))
    .orderBy(asc(schema.pairings.targetName), asc(schema.pairings.id));
  return rows.map(summarize);
}

/** Published pairings with the domain they are filed under, for /browse/. */
async function listWithDomain(): Promise<(PairingSummary & { domainId: number | null })[]> {
  const rows = await getDb()
    .select()
    .from(schema.pairings)
    .where(published)
    .orderBy(asc(schema.pairings.targetName), asc(schema.pairings.id));
  return rows.map((row) => ({ ...summarize(row), domainId: row.domainId }));
}

/**
 * Entity index pages that have earned a place in the sitemap.
 *
 * `/use/<entity>/` is a hub like any other, so it obeys the same threshold
 * (`hubIsIndexable`) the taxonomy hubs do, counted over published pairings on
 * either side. It was previously judged only at render time, which meant the
 * page said `index, follow` while the sitemap never mentioned it — the sort of
 * split that happens whenever two places decide the same thing separately.
 *
 * `updatedAt` is the newest pairing listed, for the same reason the taxonomy
 * hubs use their newest child: that is when the page actually changed.
 */
async function listIndexableEntities(): Promise<{ path: string; updatedAt: Date }[]> {
  const rows = await getDb()
    .select({
      subjectSlug: schema.pairings.subjectSlug,
      targetSlug: schema.pairings.targetSlug,
      updatedAt: schema.pairings.updatedAt,
    })
    .from(schema.pairings)
    .where(published);

  const seen = new Map<string, { total: number; updatedAt: Date }>();
  const note = (slug: string, updatedAt: Date) => {
    const current = seen.get(slug);
    if (!current) seen.set(slug, { total: 1, updatedAt });
    else {
      current.total += 1;
      if (updatedAt > current.updatedAt) current.updatedAt = updatedAt;
    }
  };

  for (const row of rows) {
    note(row.subjectSlug, row.updatedAt);
    note(row.targetSlug, row.updatedAt);
  }

  return [...seen.entries()]
    .filter(([, entity]) => hubIsIndexable(entity.total))
    .map(([slug, entity]) => ({ path: `/use/${slug}/`, updatedAt: entity.updatedAt }));
}

/** Published and indexable pairings, for the sitemap. */
async function listIndexable(): Promise<{ path: string; updatedAt: Date }[]> {
  const rows = await getDb()
    .select({ path: schema.pairings.canonicalPath, updatedAt: schema.pairings.updatedAt })
    .from(schema.pairings)
    .where(and(published, eq(schema.pairings.indexable, true)));
  return rows;
}

export const getAllPairings = cache(listAll);
export const getPairingsByDomain = cache(listByDomain);
export const getPairingsByObject = cache(listByObject);
export const getPairingsWithDomain = cache(listWithDomain);
export const getPairingsByTarget = cache(listByTarget);
export const getPairingsBySubject = cache(listBySubject);
export const getFeaturedPairings = cache(listFeatured);
export const getPairingPage = cache(getPage);
export const getPairingEntity = cache(getEntity);
export const getIndexablePairings = cache(listIndexable);
export const getIndexableEntities = cache(listIndexableEntities);
