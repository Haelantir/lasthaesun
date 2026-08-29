import 'server-only';

import { cache } from 'react';
import { and, asc, eq } from 'drizzle-orm';
import { alias } from 'drizzle-orm/pg-core';

import { getDb } from '@/lib/db/client';
import { asPublishedProblem, type PublishedProblemFields } from '@/lib/content/schema';
import type { UrgencyLevel, VerdictLevel } from '@/lib/verdict';
import {
  actionSteps,
  consequenceSteps,
  domains,
  faqs,
  ignoreWindows,
  objectCategories,
  problems,
  problemScenarios,
  recommendedResources,
  redFlags,
  relatedProblems,
  sources,
  systems,
} from '@/lib/db/schema';

/**
 * Everything one problem page needs, assembled behind this boundary so that no
 * component ever touches Drizzle or SQL. Adding a new content block means adding
 * a table, a field here, and a component — never a query inside JSX.
 */

export interface BreadcrumbNode {
  name: string;
  path: string;
}

export interface ActionStepView {
  stepNumber: number;
  title: string;
  body: string;
  destinationLabel: string | null;
  /** Null unless the destination problem exists and is published. */
  destinationHref: string | null;
}

export interface RelatedProblemLink {
  /** Anchor text, or plain label when the target is not published yet. */
  label: string;
  /** Null until the related problem is published — the UI then renders text,
   *  never a link to a page that does not exist. */
  href: string | null;
  relationshipType: string;
}

export type ProblemRow = typeof problems.$inferSelect;

/** A problem row that has passed the publish gate: every editorial field present. */
export type PublishedProblem = ProblemRow & PublishedProblemFields;

export interface ProblemPageData {
  problem: PublishedProblem;
  /** Home > Mobility > Cars > Tires > Low Tire Pressure — taxonomy, not URL depth. */
  breadcrumbs: BreadcrumbNode[];
  /** The system hub this problem sits in, for "All Tire Problems".
   *  `label` is the attributive form ("Tire"), falling back to the plural. */
  system: { name: string; label: string; path: string };
  objectCategory: { name: string; label: string; path: string };
  scenarios: (typeof problemScenarios.$inferSelect)[];
  consequences: (typeof consequenceSteps.$inferSelect)[];
  windows: (typeof ignoreWindows.$inferSelect)[];
  actions: ActionStepView[];
  flags: (typeof redFlags.$inferSelect)[];
  questions: (typeof faqs.$inferSelect)[];
  citations: (typeof sources.$inferSelect)[];
  resources: (typeof recommendedResources.$inferSelect)[];
  related: RelatedProblemLink[];
}

/** Self-join alias: an action step may point at another problem. */
const destination = alias(problems, 'destination_problem');

async function loadProblemPage(id: number): Promise<ProblemPageData | null> {
  const db = getDb();

  // One join for the problem and its whole ancestry.
  const [head] = await db
    .select({
      problem: problems,
      systemName: systems.name,
      systemLabel: systems.singularName,
      systemPath: systems.canonicalPath,
      objectName: objectCategories.name,
      objectLabel: objectCategories.singularName,
      objectPath: objectCategories.canonicalPath,
      domainName: domains.name,
      domainPath: domains.canonicalPath,
    })
    .from(problems)
    .innerJoin(systems, eq(systems.id, problems.systemId))
    .innerJoin(objectCategories, eq(objectCategories.id, systems.objectCategoryId))
    .innerJoin(domains, eq(domains.id, objectCategories.domainId))
    .where(and(eq(problems.id, id), eq(problems.status, 'published')))
    .limit(1);

  if (!head) return null;

  // A row can be flagged published and still be missing an editorial field. Fail
  // to a 404 rather than rendering a page with a blank verdict.
  const problem = asPublishedProblem(head.problem);
  if (!problem) return null;

  const [scenarios, consequences, windows, actionRows, flags, questions, citations, resources, relatedRows] =
    await Promise.all([
      db.select().from(problemScenarios).where(eq(problemScenarios.problemId, id)).orderBy(asc(problemScenarios.sortOrder)),
      db.select().from(consequenceSteps).where(eq(consequenceSteps.problemId, id)).orderBy(asc(consequenceSteps.sortOrder)),
      db.select().from(ignoreWindows).where(eq(ignoreWindows.problemId, id)).orderBy(asc(ignoreWindows.sortOrder)),
      // Left-joined against its destination so "want the full walkthrough?"
      // resolves to a real href only when that problem is published.
      db
        .select({
          stepNumber: actionSteps.stepNumber,
          title: actionSteps.title,
          body: actionSteps.body,
          destinationLabel: actionSteps.destinationLabel,
          destinationPath: destination.canonicalPath,
          destinationStatus: destination.status,
        })
        .from(actionSteps)
        .leftJoin(destination, eq(destination.id, actionSteps.destinationProblemId))
        .where(eq(actionSteps.problemId, id))
        .orderBy(asc(actionSteps.sortOrder)),
      db.select().from(redFlags).where(eq(redFlags.problemId, id)).orderBy(asc(redFlags.sortOrder)),
      db.select().from(faqs).where(eq(faqs.problemId, id)).orderBy(asc(faqs.sortOrder)),
      db.select().from(sources).where(eq(sources.problemId, id)).orderBy(asc(sources.sortOrder)),
      db
        .select()
        .from(recommendedResources)
        .where(and(eq(recommendedResources.problemId, id), eq(recommendedResources.status, 'published')))
        .orderBy(asc(recommendedResources.sortOrder)),
      db
        .select({
          anchorText: relatedProblems.anchorText,
          relationshipType: relatedProblems.relationshipType,
          targetName: problems.name,
          targetH1: problems.h1,
          targetPath: problems.canonicalPath,
          targetStatus: problems.status,
        })
        .from(relatedProblems)
        .innerJoin(problems, eq(problems.id, relatedProblems.relatedProblemId))
        .where(eq(relatedProblems.sourceProblemId, id))
        .orderBy(asc(relatedProblems.sortOrder)),
    ]);

  const actions: ActionStepView[] = actionRows.map((row) => ({
    stepNumber: row.stepNumber,
    title: row.title,
    body: row.body,
    destinationLabel: row.destinationLabel,
    destinationHref: row.destinationStatus === 'published' ? row.destinationPath : null,
  }));

  const related: RelatedProblemLink[] = relatedRows.map((row) => ({
    label: row.anchorText ?? row.targetH1 ?? row.targetName,
    // A link only exists once the destination is genuinely published.
    href: row.targetStatus === 'published' ? row.targetPath : null,
    relationshipType: row.relationshipType,
  }));

  return {
    problem,
    breadcrumbs: [
      { name: 'Home', path: '/' },
      { name: head.domainName, path: head.domainPath },
      { name: head.objectName, path: head.objectPath },
      { name: head.systemName, path: head.systemPath },
      { name: problem.name, path: problem.canonicalPath },
    ],
    system: {
      name: head.systemName,
      label: head.systemLabel ?? head.systemName,
      path: head.systemPath,
    },
    objectCategory: {
      name: head.objectName,
      label: head.objectLabel ?? head.objectName,
      path: head.objectPath,
    },
    scenarios,
    consequences,
    windows,
    actions,
    flags,
    questions,
    citations,
    resources,
    related,
  };
}

export const getProblemPage = cache(loadProblemPage);

/** Lightweight row used by hub listings, search results and the home page. */
export interface ProblemSummary {
  id: number;
  name: string;
  h1: string;
  path: string;
  verdict: VerdictLevel;
  urgency: UrgencyLevel;
  shortAnswer: string;
}

const SUMMARY_COLUMNS = {
  id: problems.id,
  name: problems.name,
  h1: problems.h1,
  path: problems.canonicalPath,
  verdict: problems.verdict,
  urgency: problems.urgency,
  shortAnswer: problems.shortAnswer,
} as const;

interface SummaryRow {
  id: number;
  name: string;
  h1: string;
  path: string;
  verdict: VerdictLevel | null;
  urgency: UrgencyLevel | null;
  shortAnswer: string | null;
}

/**
 * A listing can only show a verdict it actually has. A row still missing one is
 * skipped rather than rendered as a blank chip — the same publish-gate rule the
 * problem page applies, at listing scale.
 */
export function toSummaries(rows: SummaryRow[]): ProblemSummary[] {
  const out: ProblemSummary[] = [];
  for (const row of rows) {
    if (!row.verdict || !row.urgency) continue;
    out.push({
      id: row.id,
      name: row.name,
      h1: row.h1,
      path: row.path,
      verdict: row.verdict,
      urgency: row.urgency,
      shortAnswer: row.shortAnswer ?? '',
    });
  }
  return out;
}

/** Published problems inside one system, for the system hub. */
export const getPublishedProblemsBySystem = cache(async (systemId: number): Promise<ProblemSummary[]> => {
  const db = getDb();
  const rows = await db
    .select(SUMMARY_COLUMNS)
    .from(problems)
    .where(and(eq(problems.systemId, systemId), eq(problems.status, 'published')))
    .orderBy(asc(problems.name));
  return toSummaries(rows);
});

/**
 * Published problems anywhere beneath one object category, for object-level hubs.
 * Joins down through `systems` rather than taking a list of system ids, so this
 * stays one indexed query no matter how many systems the object grows.
 */
export const getPublishedProblemsByObject = cache(
  async (objectCategoryId: number): Promise<ProblemSummary[]> => {
    const db = getDb();
    const rows = await db
      .select(SUMMARY_COLUMNS)
      .from(problems)
      .innerJoin(systems, eq(systems.id, problems.systemId))
      .where(and(eq(systems.objectCategoryId, objectCategoryId), eq(problems.status, 'published')))
      .orderBy(asc(problems.name));
    return toSummaries(rows);
  },
);

/** Featured decisions for the home page. */
export const getFeaturedProblems = cache(async (limit = 6): Promise<ProblemSummary[]> => {
  const db = getDb();
  const rows = await db
    .select(SUMMARY_COLUMNS)
    .from(problems)
    .where(eq(problems.status, 'published'))
    .orderBy(asc(problems.name))
    .limit(limit);
  return toSummaries(rows);
});

/* -------------------------------------------------------------------------- */
/* Browse                                                                     */
/* -------------------------------------------------------------------------- */

/** One leaf category and everything published inside it. */
export interface BrowseCategory {
  systemId: number;
  /** "Cars" — the object category this system belongs to. */
  objectName: string;
  objectPath: string;
  /** "Tires" */
  systemName: string;
  systemPath: string;
  problems: ProblemSummary[];
}

export interface BrowseDomain {
  domainId: number;
  name: string;
  path: string;
  shortDescription: string | null;
  categories: BrowseCategory[];
  total: number;
}

/**
 * The whole published catalogue, grouped domain -> object -> system.
 *
 * One query rather than a walk down the taxonomy: the browse page wants every
 * published problem at once, and issuing a query per system would scale with
 * the size of the site for a page whose entire job is to show all of it.
 *
 * Categories with nothing published in them are absent by construction, because
 * the join starts from problems. A browse page listing empty shelves would be
 * the link dump the hubs deliberately avoid being.
 */
export const getBrowseTree = cache(async (): Promise<BrowseDomain[]> => {
  const db = getDb();
  const rows = await db
    .select({
      ...SUMMARY_COLUMNS,
      systemId: systems.id,
      systemName: systems.name,
      systemPath: systems.canonicalPath,
      systemSort: systems.sortOrder,
      objectId: objectCategories.id,
      objectName: objectCategories.name,
      objectPath: objectCategories.canonicalPath,
      objectSort: objectCategories.sortOrder,
      domainId: domains.id,
      domainName: domains.name,
      domainPath: domains.canonicalPath,
      domainDescription: domains.shortDescription,
      domainSort: domains.sortOrder,
    })
    .from(problems)
    .innerJoin(systems, eq(systems.id, problems.systemId))
    .innerJoin(objectCategories, eq(objectCategories.id, systems.objectCategoryId))
    .innerJoin(domains, eq(domains.id, objectCategories.domainId))
    .where(eq(problems.status, 'published'))
    .orderBy(
      asc(domains.sortOrder),
      asc(domains.name),
      asc(objectCategories.sortOrder),
      asc(objectCategories.name),
      asc(systems.sortOrder),
      asc(systems.name),
      asc(problems.name),
    );

  const byDomain = new Map<number, BrowseDomain>();
  const byCategory = new Map<string, BrowseCategory>();

  for (const row of rows) {
    const [summary] = toSummaries([row]);
    if (!summary) continue; // no verdict yet — same publish gate the hubs apply

    let domain = byDomain.get(row.domainId);
    if (!domain) {
      domain = {
        domainId: row.domainId,
        name: row.domainName,
        path: row.domainPath,
        shortDescription: row.domainDescription,
        categories: [],
        total: 0,
      };
      byDomain.set(row.domainId, domain);
    }

    const key = `${row.domainId}:${row.systemId}`;
    let category = byCategory.get(key);
    if (!category) {
      category = {
        systemId: row.systemId,
        objectName: row.objectName,
        objectPath: row.objectPath,
        systemName: row.systemName,
        systemPath: row.systemPath,
        problems: [],
      };
      byCategory.set(key, category);
      domain.categories.push(category);
    }

    category.problems.push(summary);
    domain.total += 1;
  }

  return [...byDomain.values()];
});
