/**
 * Loads src/content into PostgreSQL. Idempotent: re-running replaces the
 * detail rows for each problem rather than duplicating them, so `npm run db:seed`
 * is the normal way to publish a content edit.
 *
 * The publish gate runs here. A problem marked `published` that is missing an
 * editorial field aborts the seed with a readable error instead of quietly
 * shipping half a decision.
 */
import { createHash } from 'node:crypto';

import { and, eq, inArray } from 'drizzle-orm';
import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

import { PAIRINGS, pairingPath } from '../src/content/compat';
import { placementFor } from '../src/content/compat/placement';
import type { Pairing } from '../src/content/compat/types';
import { domains, objectCategories, problems as problemSeeds, systems } from '../src/content/index';
import type { ProblemSeed } from '../src/content/types';
import { publishedProblemSchema } from '../src/lib/content/schema';
import * as schema from '../src/lib/db/schema';

type Db = ReturnType<typeof drizzle<typeof schema>>;

/**
 * A fingerprint of everything the seed is about to write for one record.
 *
 * Compared against the stored hash so `updatedAt` only moves when the content
 * genuinely moved. Before this existed every seed stamped every row with the
 * current time, which told the sitemap that a hundred pages had changed
 * whenever one had — and a `lastmod` that is always today is one a crawler
 * learns to ignore.
 *
 * The whole seed record goes in, detail rows included, because scenarios and
 * sources are rewritten wholesale and a change there is a change to the page.
 */
function contentHash(record: unknown): string {
  return createHash('sha256')
    .update(JSON.stringify(record, (_key, value) => (value instanceof Date ? value.toISOString() : value)))
    .digest('hex');
}

function validate(seed: ProblemSeed): void {
  if (seed.status !== 'published') return;
  const result = publishedProblemSchema.safeParse(seed);
  if (!result.success) {
    const issues = result.error.issues.map((i) => `  - ${i.path.join('.') || '(root)'}: ${i.message}`).join('\n');
    throw new Error(`Problem "${seed.slug}" is marked published but incomplete:\n${issues}`);
  }
  if (!seed.indexable) {
    console.warn(`  ! "${seed.slug}" is published but not indexable — it will stay out of the sitemap.`);
  }
}

/**
 * Hub rows carry no `updatedAt` here on purpose.
 *
 * A hub's sitemap `lastmod` is the newest thing it lists, computed at read time
 * in `getHubAnswerCounts` — because that is when the page changed for a reader.
 * Stamping the row on every seed made every hub claim it changed whenever any
 * page anywhere did, which is how a `lastmod` stops being believed.
 */
async function seedTaxonomy(db: Db) {
  const domainIds = new Map<string, number>();
  for (const d of domains) {
    const [row] = await db
      .insert(schema.domains)
      .values({
        slug: d.slug,
        name: d.name,
        canonicalPath: d.canonicalPath,
        shortDescription: d.shortDescription,
        hubHeading: d.hubHeading,
        seoTitle: d.seoTitle,
        metaDescription: d.metaDescription,
        sortOrder: d.sortOrder,
        status: d.status,
        indexable: d.indexable,
      })
      .onConflictDoUpdate({
        target: schema.domains.slug,
        set: {
          name: d.name,
          canonicalPath: d.canonicalPath,
          shortDescription: d.shortDescription,
          hubHeading: d.hubHeading,
          seoTitle: d.seoTitle,
          metaDescription: d.metaDescription,
          sortOrder: d.sortOrder,
          status: d.status,
          indexable: d.indexable,
        },
      })
      .returning({ id: schema.domains.id });
    if (row) domainIds.set(d.slug, row.id);
  }

  const objectIds = new Map<string, number>();
  for (const o of objectCategories) {
    const domainId = domainIds.get(o.domainSlug);
    if (!domainId) throw new Error(`Object "${o.slug}" references unknown domain "${o.domainSlug}"`);
    const [row] = await db
      .insert(schema.objectCategories)
      .values({
        domainId,
        slug: o.slug,
        name: o.name,
        singularName: o.singularName ?? null,
        canonicalPath: o.canonicalPath,
        shortDescription: o.shortDescription,
        hubHeading: o.hubHeading,
        seoTitle: o.seoTitle,
        metaDescription: o.metaDescription,
        sortOrder: o.sortOrder,
        status: o.status,
        indexable: o.indexable,
      })
      .onConflictDoUpdate({
        target: [schema.objectCategories.domainId, schema.objectCategories.slug],
        set: {
          name: o.name,
          singularName: o.singularName ?? null,
          canonicalPath: o.canonicalPath,
          shortDescription: o.shortDescription,
          hubHeading: o.hubHeading,
          seoTitle: o.seoTitle,
          metaDescription: o.metaDescription,
          sortOrder: o.sortOrder,
          status: o.status,
          indexable: o.indexable,
        },
      })
      .returning({ id: schema.objectCategories.id });
    if (row) objectIds.set(o.slug, row.id);
  }

  const systemIds = new Map<string, number>();
  for (const s of systems) {
    const objectCategoryId = objectIds.get(s.objectSlug);
    if (!objectCategoryId) throw new Error(`System "${s.slug}" references unknown object "${s.objectSlug}"`);
    const [row] = await db
      .insert(schema.systems)
      .values({
        objectCategoryId,
        slug: s.slug,
        name: s.name,
        singularName: s.singularName ?? null,
        canonicalPath: s.canonicalPath,
        shortDescription: s.shortDescription,
        hubHeading: s.hubHeading,
        seoTitle: s.seoTitle,
        metaDescription: s.metaDescription,
        sortOrder: s.sortOrder,
        status: s.status,
        indexable: s.indexable,
      })
      .onConflictDoUpdate({
        target: [schema.systems.objectCategoryId, schema.systems.slug],
        set: {
          name: s.name,
          singularName: s.singularName ?? null,
          canonicalPath: s.canonicalPath,
          shortDescription: s.shortDescription,
          hubHeading: s.hubHeading,
          seoTitle: s.seoTitle,
          metaDescription: s.metaDescription,
          sortOrder: s.sortOrder,
          status: s.status,
          indexable: s.indexable,
        },
      })
      .returning({ id: schema.systems.id });
    if (row) systemIds.set(s.slug, row.id);
  }

  return { systemIds };
}

async function seedProblemRow(db: Db, seed: ProblemSeed, systemId: number): Promise<number> {
  const hash = contentHash(seed);
  const [existing] = await db
    .select({ id: schema.problems.id, contentHash: schema.problems.contentHash })
    .from(schema.problems)
    .where(and(eq(schema.problems.systemId, systemId), eq(schema.problems.slug, seed.slug)))
    .limit(1);
  const changed = !existing || existing.contentHash !== hash;

  const values = {
    systemId,
    slug: seed.slug,
    canonicalPath: seed.canonicalPath,
    name: seed.name,
    eyebrow: seed.eyebrow ?? null,
    h1: seed.h1,
    seoTitle: seed.seoTitle ?? null,
    metaDescription: seed.metaDescription ?? null,
    verdict: seed.verdict ?? null,
    urgency: seed.urgency ?? null,
    safetyRisk: seed.safetyRisk ?? null,
    fixDifficulty: seed.fixDifficulty ?? null,
    canIUseItQuestion: seed.canIUseItQuestion ?? 'Can I use it?',
    canIUseItLabel: seed.canIUseItLabel ?? null,
    shortAnswer: seed.shortAnswer ?? null,
    whyItMattersHeading: seed.whyItMattersHeading ?? null,
    whyItMatters: seed.whyItMatters ?? null,
    redFlagsHeading: seed.redFlagsHeading ?? null,
    status: seed.status,
    indexable: seed.indexable,
    lastReviewedAt: seed.lastReviewedAt ?? null,
    reviewScope: seed.reviewScope ?? null,
    disclaimer: seed.disclaimer ?? null,
    contentHash: hash,
  };

  const [row] = await db
    .insert(schema.problems)
    .values(values)
    .onConflictDoUpdate({
      target: [schema.problems.systemId, schema.problems.slug],
      // `updatedAt` is the sitemap's lastmod. It moves only when the content did.
      set: changed ? { ...values, updatedAt: new Date() } : values,
    })
    .returning({ id: schema.problems.id });

  if (!row) throw new Error(`Failed to upsert problem "${seed.slug}"`);
  return row.id;
}

/** Detail rows are owned wholly by the content file, so they are replaced. */
async function seedProblemDetails(db: Db, seed: ProblemSeed, problemId: number) {
  await Promise.all([
    db.delete(schema.problemScenarios).where(eq(schema.problemScenarios.problemId, problemId)),
    db.delete(schema.consequenceSteps).where(eq(schema.consequenceSteps.problemId, problemId)),
    db.delete(schema.ignoreWindows).where(eq(schema.ignoreWindows.problemId, problemId)),
    db.delete(schema.actionSteps).where(eq(schema.actionSteps.problemId, problemId)),
    db.delete(schema.redFlags).where(eq(schema.redFlags.problemId, problemId)),
    db.delete(schema.faqs).where(eq(schema.faqs.problemId, problemId)),
    db.delete(schema.sources).where(eq(schema.sources.problemId, problemId)),
    db.delete(schema.recommendedResources).where(eq(schema.recommendedResources.problemId, problemId)),
    db.delete(schema.problemAliases).where(eq(schema.problemAliases.problemId, problemId)),
  ]);

  if (seed.scenarios?.length) {
    await db.insert(schema.problemScenarios).values(
      seed.scenarios.map((s, i) => ({
        problemId,
        slug: s.slug,
        label: s.label,
        shortDescription: s.shortDescription ?? null,
        verdictOverride: s.verdictOverride ?? null,
        urgencyOverride: s.urgencyOverride ?? null,
        resultHeadline: s.resultHeadline,
        resultBody: s.resultBody,
        recommendedAction: s.recommendedAction,
        sortOrder: i,
      })),
    );
  }

  if (seed.consequences?.length) {
    await db.insert(schema.consequenceSteps).values(
      seed.consequences.map((c, i) => ({
        problemId,
        stageLabel: c.stageLabel,
        title: c.title,
        description: c.description ?? null,
        severity: c.severity,
        chainLabel: c.chainLabel ?? null,
        sortOrder: i,
      })),
    );
  }

  if (seed.windows?.length) {
    await db.insert(schema.ignoreWindows).values(
      seed.windows.map((w, i) => ({
        problemId,
        situation: w.situation,
        ignoreAnswer: w.ignoreAnswer,
        severity: w.severity,
        whatToDo: w.whatToDo,
        sortOrder: i,
      })),
    );
  }

  if (seed.actions?.length) {
    await db.insert(schema.actionSteps).values(
      seed.actions.map((a, i) => ({
        problemId,
        stepNumber: i + 1,
        title: a.title,
        body: a.body,
        destinationLabel: a.destinationLabel ?? null,
        sortOrder: i,
      })),
    );
  }

  if (seed.flags?.length) {
    await db.insert(schema.redFlags).values(
      seed.flags.map((f, i) => ({
        problemId,
        title: f.title,
        description: f.description ?? null,
        severity: f.severity ?? ('danger' as const),
        sortOrder: i,
      })),
    );
  }

  if (seed.faqs?.length) {
    await db
      .insert(schema.faqs)
      .values(seed.faqs.map((f, i) => ({ problemId, question: f.question, answer: f.answer, sortOrder: i })));
  }

  if (seed.sources?.length) {
    await db.insert(schema.sources).values(
      seed.sources.map((s, i) => ({
        problemId,
        publisher: s.publisher,
        title: s.title,
        url: s.url,
        sourceType: s.sourceType,
        notes: s.notes ?? null,
        sortOrder: i,
      })),
    );
  }

  if (seed.resources?.length) {
    await db.insert(schema.recommendedResources).values(
      seed.resources.map((r, i) => ({
        problemId,
        title: r.title,
        description: r.description,
        kind: r.kind,
        url: r.url,
        affiliate: r.affiliate,
        sortOrder: i,
        status: 'published' as const,
      })),
    );
  }

  if (seed.aliases?.length) {
    await db.insert(schema.problemAliases).values(seed.aliases.map((path) => ({ problemId, path })));
  }
}

/** Runs after all problems exist, so edges can point at any of them. */
async function seedRelationships(db: Db, idBySlug: Map<string, number>) {
  const sourceIds = [...idBySlug.values()];
  if (sourceIds.length) {
    await db.delete(schema.relatedProblems).where(inArray(schema.relatedProblems.sourceProblemId, sourceIds));
  }

  for (const seed of problemSeeds) {
    if (!seed.related?.length) continue;
    const sourceId = idBySlug.get(seed.slug);
    if (!sourceId) continue;

    const rows = seed.related.map((r, i) => {
      const relatedId = idBySlug.get(r.slug);
      if (!relatedId) throw new Error(`"${seed.slug}" links to unknown problem "${r.slug}"`);
      return {
        sourceProblemId: sourceId,
        relatedProblemId: relatedId,
        relationshipType: r.relationshipType,
        anchorText: r.anchorText,
        sortOrder: i,
      };
    });
    await db.insert(schema.relatedProblems).values(rows);
  }

  // Wire up "want the full walkthrough?" links, now that every problem has an id.
  for (const seed of problemSeeds) {
    const problemId = idBySlug.get(seed.slug);
    if (!problemId || !seed.actions?.length) continue;

    for (const [index, action] of seed.actions.entries()) {
      if (!action.destinationProblemSlug) continue;
      const destinationId = idBySlug.get(action.destinationProblemSlug);
      if (!destinationId) {
        throw new Error(`"${seed.slug}" step ${index + 1} links to unknown problem "${action.destinationProblemSlug}"`);
      }
      await db
        .update(schema.actionSteps)
        .set({ destinationProblemId: destinationId })
        .where(and(eq(schema.actionSteps.problemId, problemId), eq(schema.actionSteps.stepNumber, index + 1)));
    }
  }
}

/**
 * "Can I Use It With…" records.
 *
 * Idempotent the same way the problems are: the row is upserted on its
 * (subject, target) pair and its child rows are deleted and rewritten, so a
 * re-seed publishes an edit rather than duplicating anything.
 *
 * Every pairing is `published` and `indexable`. There is no draft state on this
 * side — the compat pipeline refuses to write a record whose citations do not
 * resolve, so a pairing that exists is a pairing that is finished. Their hubs
 * are what stays out of the index, exactly as the taxonomy hubs do.
 */
async function seedPairings(db: Db) {
  // Resolved once: placement is keyed on the target, and nine targets share
  // fifty-six pairings.
  const domainIds = new Map(
    (await db.select({ id: schema.domains.id, slug: schema.domains.slug }).from(schema.domains)).map(
      (r) => [r.slug, r.id] as const,
    ),
  );
  const objectIds = new Map(
    (
      await db
        .select({ id: schema.objectCategories.id, slug: schema.objectCategories.slug })
        .from(schema.objectCategories)
    ).map((r) => [r.slug, r.id] as const),
  );

  for (const pairing of PAIRINGS) {
    const hash = contentHash(pairing);
    const [existing] = await db
      .select({ contentHash: schema.pairings.contentHash })
      .from(schema.pairings)
      .where(
        and(
          eq(schema.pairings.subjectSlug, pairing.subjectSlug),
          eq(schema.pairings.targetSlug, pairing.targetSlug),
        ),
      )
      .limit(1);
    const changed = !existing || existing.contentHash !== hash;

    const placement = placementFor(pairing.targetSlug);
    if (!placement) {
      throw new Error(
        `No taxonomy placement for target "${pairing.targetSlug}".
` +
          '  Add it to src/content/compat/placement.ts — a pairing is not placed by guess.',
      );
    }
    const domainId = domainIds.get(placement.domain);
    if (!domainId) throw new Error(`Placement for "${pairing.targetSlug}" names unknown domain "${placement.domain}"`);
    const objectCategoryId = placement.object ? objectIds.get(placement.object) : null;
    if (placement.object && !objectCategoryId) {
      throw new Error(`Placement for "${pairing.targetSlug}" names unknown object "${placement.object}"`);
    }

    const [row] = await db
      .insert(schema.pairings)
      .values({
        subjectSlug: pairing.subjectSlug,
        subjectName: pairing.subjectName,
        subjectKind: pairing.subjectKind,
        subjectNote: pairing.subjectNote,
        relation: pairing.relation,
        targetSlug: pairing.targetSlug,
        targetName: pairing.targetName,
        targetKind: pairing.targetKind,
        targetNote: pairing.targetNote,
        canonicalPath: pairingPath(pairing),
        domainId,
        objectCategoryId: objectCategoryId ?? null,
        eyebrow: pairing.eyebrow,
        h1: pairing.h1,
        seoTitle: pairing.seoTitle,
        metaDescription: pairing.metaDescription,
        verdict: pairing.verdict,
        shortAnswer: pairing.shortAnswer,
        mainRisk: pairing.mainRisk,
        damages: pairing.damages,
        alternative: pairing.alternative,
        calloutLabel: pairing.calloutLabel,
        calloutBody: pairing.calloutBody.join('\n\n'),
        status: 'published',
        indexable: true,
        lastReviewedAt: pairing.reviewedAt,
        reviewScope: pairing.reviewScope,
        contentHash: hash,
      })
      .onConflictDoUpdate({
        target: [schema.pairings.subjectSlug, schema.pairings.targetSlug],
        set: {
          subjectName: pairing.subjectName,
          subjectKind: pairing.subjectKind,
          subjectNote: pairing.subjectNote,
          relation: pairing.relation,
          targetName: pairing.targetName,
          targetKind: pairing.targetKind,
          targetNote: pairing.targetNote,
          canonicalPath: pairingPath(pairing),
          domainId,
          objectCategoryId: objectCategoryId ?? null,
          eyebrow: pairing.eyebrow,
          h1: pairing.h1,
          seoTitle: pairing.seoTitle,
          metaDescription: pairing.metaDescription,
          verdict: pairing.verdict,
          shortAnswer: pairing.shortAnswer,
          mainRisk: pairing.mainRisk,
          damages: pairing.damages,
          alternative: pairing.alternative,
          calloutLabel: pairing.calloutLabel,
          calloutBody: pairing.calloutBody.join('\n\n'),
          status: 'published',
          indexable: true,
          lastReviewedAt: pairing.reviewedAt,
          reviewScope: pairing.reviewScope,
          contentHash: hash,
          // Same rule as the problems: lastmod moves only when the content did.
          ...(changed ? { updatedAt: new Date() } : {}),
        },
      })
      .returning({ id: schema.pairings.id });

    const id = row!.id;

    await db.delete(schema.pairingConditions).where(eq(schema.pairingConditions.pairingId, id));
    await db.delete(schema.pairingMechanisms).where(eq(schema.pairingMechanisms.pairingId, id));
    await db.delete(schema.pairingSources).where(eq(schema.pairingSources.pairingId, id));

    const conditions = [
      ...pairing.conditionsOk.map((body, i) => ({ pairingId: id, kind: 'ok' as const, body, sortOrder: i })),
      ...pairing.conditionsNever.map((body, i) => ({ pairingId: id, kind: 'never' as const, body, sortOrder: i })),
    ];
    if (conditions.length > 0) await db.insert(schema.pairingConditions).values(conditions);

    if (pairing.mechanisms.length > 0) {
      await db.insert(schema.pairingMechanisms).values(
        pairing.mechanisms.map((m, i) => ({ pairingId: id, title: m.title, body: m.body, sortOrder: i })),
      );
    }

    if (pairing.sources.length > 0) {
      await db.insert(schema.pairingSources).values(
        pairing.sources.map((s, i) => ({
          pairingId: id,
          publisher: s.publisher,
          title: s.title,
          url: s.url,
          sourceType: s.kind,
          sortOrder: i,
        })),
      );
    }
  }
}

/** A pairing whose citations do not resolve should never have been written, so
 *  the only thing left to check here is that the record is structurally whole. */
function validatePairing(pairing: Pairing): void {
  const missing = (['h1', 'seoTitle', 'metaDescription', 'verdict', 'shortAnswer'] as const).filter(
    (field) => !pairing[field],
  );
  if (missing.length > 0) {
    throw new Error(`Pairing "${pairingPath(pairing)}" is missing: ${missing.join(', ')}`);
  }
  if (pairing.sources.length === 0) {
    throw new Error(`Pairing "${pairingPath(pairing)}" has no sources`);
  }
}

async function main() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) throw new Error('DATABASE_URL is not set. Copy .env.example to .env.local first.');

  console.log('Validating content…');
  problemSeeds.forEach(validate);
  console.log(`  ✓ ${problemSeeds.length} problem records validated`);
  PAIRINGS.forEach(validatePairing);
  console.log(`  ✓ ${PAIRINGS.length} pairing records validated`);

  const pool = new Pool({
    connectionString,
    ssl: process.env.DATABASE_SSL === 'require' ? { rejectUnauthorized: false } : undefined,
  });
  const db = drizzle(pool, { schema });

  try {
    console.log('Seeding taxonomy…');
    const { systemIds } = await seedTaxonomy(db);
    console.log(`  ✓ ${domains.length} domains, ${objectCategories.length} objects, ${systems.length} systems`);

    console.log('Seeding problems…');
    const idBySlug = new Map<string, number>();
    for (const seed of problemSeeds) {
      const systemId = systemIds.get(seed.systemSlug);
      if (!systemId) throw new Error(`Problem "${seed.slug}" references unknown system "${seed.systemSlug}"`);
      const problemId = await seedProblemRow(db, seed, systemId);
      idBySlug.set(seed.slug, problemId);
      await seedProblemDetails(db, seed, problemId);
    }
    const published = problemSeeds.filter((p) => p.status === 'published').length;
    console.log(`  ✓ ${problemSeeds.length} problems (${published} published, ${problemSeeds.length - published} draft)`);

    await seedRelationships(db, idBySlug);
    console.log('  ✓ relationships linked');

    console.log('Seeding pairings…');
    await seedPairings(db);
    console.log(`  ✓ ${PAIRINGS.length} pairings`);

    console.log('\n✓ seed complete');
  } finally {
    await pool.end();
  }
}

main().catch((error) => {
  console.error('\n✗ seed failed\n');
  console.error(error instanceof Error ? error.message : error);
  process.exit(1);
});
