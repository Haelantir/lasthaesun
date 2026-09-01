import 'server-only';

import { cache } from 'react';
import { and, asc, count, eq } from 'drizzle-orm';

import { getDb } from '@/lib/db/client';
import { domains, objectCategories, pairings, problems, systems } from '@/lib/db/schema';
import { hubIsIndexable } from '@/lib/seo/hub-index';

/** Hub data for the three taxonomy levels above a problem. */

export interface HubNode {
  id: number;
  name: string;
  path: string;
  shortDescription: string | null;
  /** Published problems reachable beneath this node. Zero means "do not link". */
  problemCount: number;
}

export interface DomainHubData {
  domain: typeof domains.$inferSelect;
  breadcrumbs: { name: string; path: string }[];
  children: HubNode[];
  /** Named but unbuilt children, listed as plain text without a URL. */
  planned: string[];
}

export interface ObjectHubData {
  objectCategory: typeof objectCategories.$inferSelect;
  domain: typeof domains.$inferSelect;
  breadcrumbs: { name: string; path: string }[];
  children: HubNode[];
  planned: string[];
}

export interface SystemHubData {
  system: typeof systems.$inferSelect;
  objectCategory: typeof objectCategories.$inferSelect;
  domain: typeof domains.$inferSelect;
  breadcrumbs: { name: string; path: string }[];
}

/**
 * Problem counts per system, aggregated in the database rather than by loading
 * problems into memory. This is the query that later powers "Tires — 37 problems".
 *
 * It filters by the parent object rather than by a list of system ids, which
 * keeps it a single indexed query with no array parameter, and returns a row for
 * every system — including the ones with a count of zero, which the hub needs in
 * order to render them as plain text instead of links.
 */
const publishedCountsByObject = cache(async (objectCategoryId: number) => {
  const db = getDb();
  const rows = await db
    .select({ systemId: systems.id, total: count(problems.id) })
    .from(systems)
    .leftJoin(problems, and(eq(problems.systemId, systems.id), eq(problems.status, 'published')))
    .where(eq(systems.objectCategoryId, objectCategoryId))
    .groupBy(systems.id);
  return new Map(rows.map((r) => [r.systemId, Number(r.total)]));
});

export const getDomainHub = cache(async (id: number): Promise<DomainHubData | null> => {
  const db = getDb();
  const [domain] = await db.select().from(domains).where(eq(domains.id, id)).limit(1);
  if (!domain) return null;

  const objects = await db
    .select()
    .from(objectCategories)
    .where(and(eq(objectCategories.domainId, id), eq(objectCategories.status, 'published')))
    .orderBy(asc(objectCategories.sortOrder), asc(objectCategories.name));

  const children = await Promise.all(
    objects.map(async (object) => ({
      id: object.id,
      name: object.name,
      path: object.canonicalPath,
      shortDescription: object.shortDescription,
      problemCount: await countProblemsUnderObject(object.id),
    })),
  );

  const planned = await db
    .select({ name: objectCategories.name })
    .from(objectCategories)
    .where(and(eq(objectCategories.domainId, id), eq(objectCategories.status, 'draft')))
    .orderBy(asc(objectCategories.sortOrder), asc(objectCategories.name));

  return {
    domain,
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: domain.name, path: domain.canonicalPath },
    ],
    children,
    planned: planned.map((p) => p.name),
  };
});

async function countProblemsUnderObject(objectCategoryId: number): Promise<number> {
  const db = getDb();
  const [row] = await db
    .select({ total: count() })
    .from(problems)
    .innerJoin(systems, eq(systems.id, problems.systemId))
    .where(and(eq(systems.objectCategoryId, objectCategoryId), eq(problems.status, 'published')));
  return Number(row?.total ?? 0);
}

export const getObjectHub = cache(async (id: number): Promise<ObjectHubData | null> => {
  const db = getDb();
  const [row] = await db
    .select({ objectCategory: objectCategories, domain: domains })
    .from(objectCategories)
    .innerJoin(domains, eq(domains.id, objectCategories.domainId))
    .where(eq(objectCategories.id, id))
    .limit(1);
  if (!row) return null;

  const systemRows = await db
    .select()
    .from(systems)
    .where(and(eq(systems.objectCategoryId, id), eq(systems.status, 'published')))
    .orderBy(asc(systems.sortOrder), asc(systems.name));

  const counts = await publishedCountsByObject(id);

  const children: HubNode[] = systemRows.map((system) => ({
    id: system.id,
    name: system.name,
    path: system.canonicalPath,
    shortDescription: system.shortDescription,
    problemCount: counts.get(system.id) ?? 0,
  }));

  // Systems that exist in the taxonomy but hold no published content yet are
  // shown as plain text so the hub stays honest about the site's real size.
  const planned = await db
    .select({ name: systems.name })
    .from(systems)
    .where(and(eq(systems.objectCategoryId, id), eq(systems.status, 'draft')))
    .orderBy(asc(systems.sortOrder), asc(systems.name));

  return {
    objectCategory: row.objectCategory,
    domain: row.domain,
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: row.domain.name, path: row.domain.canonicalPath },
      { name: row.objectCategory.name, path: row.objectCategory.canonicalPath },
    ],
    children,
    planned: planned.map((p) => p.name),
  };
});

export const getSystemHub = cache(async (id: number): Promise<SystemHubData | null> => {
  const db = getDb();
  const [row] = await db
    .select({ system: systems, objectCategory: objectCategories, domain: domains })
    .from(systems)
    .innerJoin(objectCategories, eq(objectCategories.id, systems.objectCategoryId))
    .innerJoin(domains, eq(domains.id, objectCategories.domainId))
    .where(eq(systems.id, id))
    .limit(1);
  if (!row) return null;

  return {
    system: row.system,
    objectCategory: row.objectCategory,
    domain: row.domain,
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: row.domain.name, path: row.domain.canonicalPath },
      { name: row.objectCategory.name, path: row.objectCategory.canonicalPath },
      { name: row.system.name, path: row.system.canonicalPath },
    ],
  };
});

/** Top-level browse list for the home page and footer. */
export const getPublishedDomains = cache(async () => {
  const db = getDb();
  return db
    .select()
    .from(domains)
    .where(eq(domains.status, 'published'))
    .orderBy(asc(domains.sortOrder), asc(domains.name));
});

/**
 * How many answers each hub holds — published problems below it, plus any
 * compatibility pairings filed against it.
 *
 * This is what decides whether a hub is indexable (see
 * `src/lib/seo/hub-index.ts`). Counted rather than stored, because a flag would
 * have to be remembered every time content lands and would be wrong the moment
 * somebody forgot.
 */
export const getHubAnswerCounts = cache(async () => {
  const db = getDb();
  const publishedProblem = eq(problems.status, 'published');
  const publishedPairing = eq(pairings.status, 'published');

  const [systemRows, objectProblems, objectPairings, domainProblems, domainPairings] =
    await Promise.all([
      db
        .select({ id: systems.id, total: count(problems.id) })
        .from(systems)
        .leftJoin(problems, and(eq(problems.systemId, systems.id), publishedProblem))
        .groupBy(systems.id),
      db
        .select({ id: objectCategories.id, total: count(problems.id) })
        .from(objectCategories)
        .leftJoin(systems, eq(systems.objectCategoryId, objectCategories.id))
        .leftJoin(problems, and(eq(problems.systemId, systems.id), publishedProblem))
        .groupBy(objectCategories.id),
      db
        .select({ id: pairings.objectCategoryId, total: count(pairings.id) })
        .from(pairings)
        .where(publishedPairing)
        .groupBy(pairings.objectCategoryId),
      db
        .select({ id: domains.id, total: count(problems.id) })
        .from(domains)
        .leftJoin(objectCategories, eq(objectCategories.domainId, domains.id))
        .leftJoin(systems, eq(systems.objectCategoryId, objectCategories.id))
        .leftJoin(problems, and(eq(problems.systemId, systems.id), publishedProblem))
        .groupBy(domains.id),
      db
        .select({ id: pairings.domainId, total: count(pairings.id) })
        .from(pairings)
        .where(publishedPairing)
        .groupBy(pairings.domainId),
    ]);

  const add = (map: Map<number, number>, id: number | null, n: number) => {
    if (id === null) return;
    map.set(id, (map.get(id) ?? 0) + n);
  };

  const bySystem = new Map<number, number>();
  for (const r of systemRows) add(bySystem, r.id, Number(r.total));

  const byObject = new Map<number, number>();
  for (const r of objectProblems) add(byObject, r.id, Number(r.total));
  for (const r of objectPairings) add(byObject, r.id, Number(r.total));

  const byDomain = new Map<number, number>();
  for (const r of domainProblems) add(byDomain, r.id, Number(r.total));
  for (const r of domainPairings) add(byDomain, r.id, Number(r.total));

  return { bySystem, byObject, byDomain };
});

/**
 * Everything that belongs in the sitemap.
 *
 * Problems obey their stored `indexable` flag, which is an authored decision.
 * Hubs obey the answer-count threshold instead: for them the count IS the
 * decision, and a hub that has grown past it should not have to wait for
 * somebody to remember to flip a column.
 */
export const getIndexableUrls = cache(async () => {
  const db = getDb();
  const counts = await getHubAnswerCounts();

  const [domainRows, objectRows, systemRows, problemRows] = await Promise.all([
    db
      .select({ id: domains.id, path: domains.canonicalPath, updatedAt: domains.updatedAt })
      .from(domains)
      .where(eq(domains.status, 'published')),
    db
      .select({
        id: objectCategories.id,
        path: objectCategories.canonicalPath,
        updatedAt: objectCategories.updatedAt,
      })
      .from(objectCategories)
      .where(eq(objectCategories.status, 'published')),
    db
      .select({ id: systems.id, path: systems.canonicalPath, updatedAt: systems.updatedAt })
      .from(systems)
      .where(eq(systems.status, 'published')),
    db
      .select({ path: problems.canonicalPath, updatedAt: problems.updatedAt })
      .from(problems)
      .where(and(eq(problems.status, 'published'), eq(problems.indexable, true))),
  ]);

  const keep = <T extends { id: number }>(rows: T[], counts: Map<number, number>) =>
    rows.filter((row) => hubIsIndexable(counts.get(row.id) ?? 0)).map(({ id: _id, ...rest }) => rest);

  return {
    domains: keep(domainRows, counts.byDomain),
    objectCategories: keep(objectRows, counts.byObject),
    systems: keep(systemRows, counts.bySystem),
    problems: problemRows,
  };
});
