/**
 * Can I Ignore It — content database schema.
 *
 * Two rules govern this file:
 *
 * 1. TAXONOMY IS NOT URL STRUCTURE.
 *    Every node carries its own `canonicalPath`. The taxonomy chain for the first
 *    problem is `Mobility > Cars > Tires > Low Tire Pressure`, but its URL is
 *    `/cars/tires/low-tire-pressure/` — "Mobility" is a useful breadcrumb and a
 *    useful hub, but it earns no URL segment. Never derive a URL by concatenating
 *    ancestors; read `canonicalPath`.
 *
 * 2. THE DATABASE STORES SEMANTICS, NOT PRESENTATION.
 *    Columns hold stable enum values (`probably_not`, `high`, `danger`). Labels,
 *    colours and icons live in `src/lib/verdict.ts`. Rewording "PROBABLY NOT" must
 *    never require a migration, and no row may ever contain a hex colour.
 *
 * See `docs/content-architecture.md` before adding a table.
 */
import { sql } from 'drizzle-orm';
import {
  boolean,
  index,
  integer,
  pgEnum,
  pgTable,
  primaryKey,
  serial,
  text,
  timestamp,
  uniqueIndex,
  varchar,
} from 'drizzle-orm/pg-core';

/* -------------------------------------------------------------------------- */
/* Enums                                                                      */
/* -------------------------------------------------------------------------- */

/** Editorial lifecycle. Only `published` rows are publicly routable or indexable. */
export const contentStatus = pgEnum('content_status', ['draft', 'reviewed', 'published', 'archived']);

/** The four possible answers to "Can I ignore it?". */
export const verdictLevel = pgEnum('verdict_level', [
  'safe_to_ignore',
  'can_wait',
  'probably_not',
  'do_not_ignore',
]);

/** How soon this needs attention. */
export const urgencyLevel = pgEnum('urgency_level', ['low', 'medium', 'high', 'critical']);

/** How badly this can hurt someone if ignored. */
export const riskLevel = pgEnum('risk_level', ['low', 'moderate', 'high', 'severe']);

/** How hard the fix is for a non-specialist. */
export const difficultyLevel = pgEnum('difficulty_level', ['easy', 'moderate', 'hard', 'professional']);

/** Generic visual weight for timeline stages, red flags and table rows. */
export const severityLevel = pgEnum('severity_level', ['info', 'caution', 'warning', 'danger']);

/** Where a citation comes from — drives how much weight the UI gives it. */
export const sourceType = pgEnum('source_type', [
  'government',
  'regulation',
  'manufacturer',
  'standards_body',
  'industry',
  'academic',
  'other',
]);

/** Why two problems are linked. Used for anchor-text and ordering decisions. */
export const relationshipType = pgEnum('relationship_type', [
  'sibling', // same system, different problem
  'escalation', // what this becomes if ignored
  'cause', // what may be causing this
  'follow_up', // the how-to guide after the decision
  'related', // loosely related
]);

/** What kind of thing "Useful Right Now" is offering. */
export const resourceKind = pgEnum('resource_kind', ['tool', 'part', 'service', 'guide']);

/* -------------------------------------------------------------------------- */
/* Taxonomy: DOMAIN -> OBJECT -> SYSTEM -> PROBLEM                            */
/* -------------------------------------------------------------------------- */

/** Level 1. e.g. Mobility, Home, Appliances, Tech. */
export const domains = pgTable(
  'domains',
  {
    id: serial('id').primaryKey(),
    slug: varchar('slug', { length: 96 }).notNull(),
    name: varchar('name', { length: 128 }).notNull(),
    /** Own URL, independent of taxonomy depth. e.g. `/mobility/` */
    canonicalPath: varchar('canonical_path', { length: 512 }).notNull(),
    shortDescription: text('short_description'),
    /** Hub heading, e.g. "Mobility Problems: What Can You Ignore?" */
    hubHeading: varchar('hub_heading', { length: 256 }),
    seoTitle: varchar('seo_title', { length: 256 }),
    metaDescription: varchar('meta_description', { length: 512 }),
    sortOrder: integer('sort_order').notNull().default(0),
    status: contentStatus('status').notNull().default('draft'),
    /** A hub with too little content should not be fed to search engines yet. */
    indexable: boolean('indexable').notNull().default(false),
    createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    uniqueIndex('domains_slug_key').on(t.slug),
    uniqueIndex('domains_canonical_path_key').on(t.canonicalPath),
    index('domains_status_idx').on(t.status, t.sortOrder),
  ],
);

/** Level 2. e.g. Cars, Motorcycles, Bicycles. Named `object_categories` because
 *  `object` is awkward in SQL and ambiguous in TypeScript. */
export const objectCategories = pgTable(
  'object_categories',
  {
    id: serial('id').primaryKey(),
    domainId: integer('domain_id')
      .notNull()
      .references(() => domains.id, { onDelete: 'restrict' }),
    slug: varchar('slug', { length: 96 }).notNull(),
    name: varchar('name', { length: 128 }).notNull(),
    /** Attributive form for prose: "Cars" -> "Car", giving "Car Problems"
     *  rather than "Cars Problems". Stored because English pluralisation is not
     *  derivable ("Glass", "Battery & Electrical"). */
    singularName: varchar('singular_name', { length: 128 }),
    /** e.g. `/cars/` — note this deliberately omits the `mobility` ancestor. */
    canonicalPath: varchar('canonical_path', { length: 512 }).notNull(),
    shortDescription: text('short_description'),
    hubHeading: varchar('hub_heading', { length: 256 }),
    seoTitle: varchar('seo_title', { length: 256 }),
    metaDescription: varchar('meta_description', { length: 512 }),
    sortOrder: integer('sort_order').notNull().default(0),
    status: contentStatus('status').notNull().default('draft'),
    indexable: boolean('indexable').notNull().default(false),
    createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    uniqueIndex('object_categories_domain_slug_key').on(t.domainId, t.slug),
    uniqueIndex('object_categories_canonical_path_key').on(t.canonicalPath),
    index('object_categories_domain_idx').on(t.domainId, t.status, t.sortOrder),
  ],
);

/** Level 3. e.g. Tires, Brakes, Engine. The level that keeps a 50,000-problem
 *  site from collapsing into one flat list under "Cars". */
export const systems = pgTable(
  'systems',
  {
    id: serial('id').primaryKey(),
    objectCategoryId: integer('object_category_id')
      .notNull()
      .references(() => objectCategories.id, { onDelete: 'restrict' }),
    slug: varchar('slug', { length: 96 }).notNull(),
    name: varchar('name', { length: 128 }).notNull(),
    /** "Tires" -> "Tire", giving "Other Tire Problems You Might Be Ignoring". */
    singularName: varchar('singular_name', { length: 128 }),
    /** e.g. `/cars/tires/` */
    canonicalPath: varchar('canonical_path', { length: 512 }).notNull(),
    shortDescription: text('short_description'),
    hubHeading: varchar('hub_heading', { length: 256 }),
    seoTitle: varchar('seo_title', { length: 256 }),
    metaDescription: varchar('meta_description', { length: 512 }),
    sortOrder: integer('sort_order').notNull().default(0),
    status: contentStatus('status').notNull().default('draft'),
    indexable: boolean('indexable').notNull().default(false),
    createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    uniqueIndex('systems_object_slug_key').on(t.objectCategoryId, t.slug),
    uniqueIndex('systems_canonical_path_key').on(t.canonicalPath),
    index('systems_object_idx').on(t.objectCategoryId, t.status, t.sortOrder),
  ],
);

/* -------------------------------------------------------------------------- */
/* Problem: the core unit of the site. One decision, one row, one URL.        */
/* -------------------------------------------------------------------------- */

export const problems = pgTable(
  'problems',
  {
    id: serial('id').primaryKey(),
    systemId: integer('system_id')
      .notNull()
      .references(() => systems.id, { onDelete: 'restrict' }),
    slug: varchar('slug', { length: 128 }).notNull(),
    /** e.g. `/cars/tires/low-tire-pressure/`. The single source of truth for this
     *  problem's URL — see the file header. */
    canonicalPath: varchar('canonical_path', { length: 512 }).notNull(),

    /** Plain name used in breadcrumbs, hubs and related-problem lists. */
    name: varchar('name', { length: 160 }).notNull(),
    /** Small label above the H1, e.g. "Cars · Tires". */
    eyebrow: varchar('eyebrow', { length: 120 }),
    /** The on-page question. Deliberately different from `seoTitle`. */
    h1: varchar('h1', { length: 200 }).notNull(),

    /* The editorial payload below is NULLABLE on purpose.
     *
     * A `draft` row is a *reserved* problem: it holds the name, the question and
     * the URL it will occupy, so the related-problems graph can point at it and
     * light it up automatically the day it is published. It must NOT be forced to
     * carry an invented verdict just to satisfy a NOT NULL constraint.
     *
     * Completeness is instead enforced at the publish boundary by
     * `publishedProblemSchema` (src/lib/content/schema.ts), which the seed script
     * and the repository both run. Published rows are therefore guaranteed
     * complete; drafts are allowed to be honestly empty. */

    /** The <title>, written for how people actually search. */
    seoTitle: varchar('seo_title', { length: 256 }),
    metaDescription: varchar('meta_description', { length: 512 }),

    /** The answer, before any situation is selected. */
    verdict: verdictLevel('verdict'),
    urgency: urgencyLevel('urgency'),
    safetyRisk: riskLevel('safety_risk'),
    fixDifficulty: difficultyLevel('fix_difficulty'),
    /** Free-text answer to the "Can I drive?"-style first metric, because the
     *  honest answer ("usually only briefly") is not an enum. */
    canIUseItLabel: varchar('can_i_use_it_label', { length: 120 }),
    /** Which question the first metric is answering, e.g. "Can I drive?". */
    canIUseItQuestion: varchar('can_i_use_it_question', { length: 120 }).notNull().default('Can I use it?'),

    /** Two or three sentences directly under the verdict. */
    shortAnswer: text('short_answer'),
    /** Block 9 — why the verdict is what it is. Markdown-free paragraphs. */
    whyItMatters: text('why_it_matters'),
    /** Block 8 heading. Stored because the right wording is domain-specific:
     *  "Stop Driving If You Notice:" for a car, "Turn Off The Water If:" for a
     *  leak. The template must not assume the problem is automotive. */
    redFlagsHeading: varchar('red_flags_heading', { length: 200 }),
    /** Optional lead paragraph for block 9. */
    whyItMattersHeading: varchar('why_it_matters_heading', { length: 200 }),

    status: contentStatus('status').notNull().default('draft'),
    indexable: boolean('indexable').notNull().default(false),
    /** Shown as "Last reviewed: August 2026". */
    lastReviewedAt: timestamp('last_reviewed_at', { withTimezone: true }),
    /** Shown as "Reviewed for: safety / automotive guidance". */
    reviewScope: varchar('review_scope', { length: 200 }),
    /** Topic-appropriate disclaimer. Kept per-problem so a plumbing page does not
     *  inherit automotive legal wording. */
    disclaimer: text('disclaimer'),

    createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    uniqueIndex('problems_system_slug_key').on(t.systemId, t.slug),
    // The hot path: one indexed lookup renders one page, at any table size.
    uniqueIndex('problems_canonical_path_key').on(t.canonicalPath),
    // Hub listings: "published problems in this system, by verdict".
    index('problems_system_status_idx').on(t.systemId, t.status, t.verdict),
    // Sitemap generation.
    index('problems_published_idx').on(t.status, t.indexable, t.updatedAt),
    // Site search. An expression index over the same tsvector the search query
    // builds, so `searchProblems` stays an index scan as the table grows.
    index('problems_search_idx').using(
      'gin',
      sql`to_tsvector('english', ${t.name} || ' ' || ${t.h1} || ' ' || coalesce(${t.shortAnswer}, ''))`,
    ),
  ],
);

/**
 * Retired or alternate paths that must 308 to a problem's canonical path.
 * This is how the site absorbs keyword variations WITHOUT minting duplicate
 * pages: "/cars/tires/driving-with-low-tire-pressure/" redirects here rather
 * than becoming its own thin record.
 */
export const problemAliases = pgTable(
  'problem_aliases',
  {
    id: serial('id').primaryKey(),
    problemId: integer('problem_id')
      .notNull()
      .references(() => problems.id, { onDelete: 'cascade' }),
    path: varchar('path', { length: 512 }).notNull(),
    createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    uniqueIndex('problem_aliases_path_key').on(t.path),
    index('problem_aliases_problem_idx').on(t.problemId),
  ],
);

/* -------------------------------------------------------------------------- */
/* Problem detail tables                                                      */
/* -------------------------------------------------------------------------- */

/** Block 3 — the "Check my situation" options. Each can override the verdict. */
export const problemScenarios = pgTable(
  'problem_scenarios',
  {
    id: serial('id').primaryKey(),
    problemId: integer('problem_id')
      .notNull()
      .references(() => problems.id, { onDelete: 'cascade' }),
    slug: varchar('slug', { length: 96 }).notNull(),
    /** The option the user clicks, e.g. "The light just came on". */
    label: varchar('label', { length: 200 }).notNull(),
    /** Optional clarifier under the option label. */
    shortDescription: varchar('short_description', { length: 300 }),
    /** Null means "keep the problem's default verdict". */
    verdictOverride: verdictLevel('verdict_override'),
    urgencyOverride: urgencyLevel('urgency_override'),
    /** Situation-specific headline, e.g. "CHECK IT SOON". Not every result maps
     *  onto one of the four global verdict labels, so this is stored text. */
    resultHeadline: varchar('result_headline', { length: 160 }).notNull(),
    resultBody: text('result_body').notNull(),
    recommendedAction: varchar('recommended_action', { length: 300 }).notNull(),
    sortOrder: integer('sort_order').notNull().default(0),
  },
  (t) => [
    uniqueIndex('problem_scenarios_problem_slug_key').on(t.problemId, t.slug),
    index('problem_scenarios_problem_idx').on(t.problemId, t.sortOrder),
  ],
);

/** Block 4 — the ignore chain: low pressure -> flex -> heat -> failure. */
export const consequenceSteps = pgTable(
  'consequence_steps',
  {
    id: serial('id').primaryKey(),
    problemId: integer('problem_id')
      .notNull()
      .references(() => problems.id, { onDelete: 'cascade' }),
    /** Time marker, e.g. "RIGHT NOW", "KEEP DRIVING", "WORST CASE". */
    stageLabel: varchar('stage_label', { length: 120 }).notNull(),
    title: varchar('title', { length: 200 }).notNull(),
    description: text('description'),
    severity: severityLevel('severity').notNull().default('info'),
    /** Short node text for the compact causal chain (LOW PRESSURE -> MORE FLEX -> ...). */
    chainLabel: varchar('chain_label', { length: 80 }),
    sortOrder: integer('sort_order').notNull().default(0),
  },
  (t) => [index('consequence_steps_problem_idx').on(t.problemId, t.sortOrder)],
);

/** Block 5 — the "How long can I ignore it?" decision table. */
export const ignoreWindows = pgTable(
  'ignore_windows',
  {
    id: serial('id').primaryKey(),
    problemId: integer('problem_id')
      .notNull()
      .references(() => problems.id, { onDelete: 'cascade' }),
    situation: varchar('situation', { length: 200 }).notNull(),
    /** The middle column, e.g. "Briefly" / "No". Text, never colour alone. */
    ignoreAnswer: varchar('ignore_answer', { length: 80 }).notNull(),
    severity: severityLevel('severity').notNull().default('warning'),
    whatToDo: varchar('what_to_do', { length: 300 }).notNull(),
    sortOrder: integer('sort_order').notNull().default(0),
  },
  (t) => [index('ignore_windows_problem_idx').on(t.problemId, t.sortOrder)],
);

/** Block 6 — the three things to do now. */
export const actionSteps = pgTable(
  'action_steps',
  {
    id: serial('id').primaryKey(),
    problemId: integer('problem_id')
      .notNull()
      .references(() => problems.id, { onDelete: 'cascade' }),
    stepNumber: integer('step_number').notNull(),
    title: varchar('title', { length: 200 }).notNull(),
    body: text('body').notNull(),
    /** "Want the full walkthrough? How to inflate a car tire ->" once that
     *  problem exists and is published. Null until then. */
    destinationProblemId: integer('destination_problem_id'),
    destinationLabel: varchar('destination_label', { length: 200 }),
    sortOrder: integer('sort_order').notNull().default(0),
  },
  (t) => [index('action_steps_problem_idx').on(t.problemId, t.sortOrder)],
);

/** Block 8 — "Stop driving if you notice:". */
export const redFlags = pgTable(
  'red_flags',
  {
    id: serial('id').primaryKey(),
    problemId: integer('problem_id')
      .notNull()
      .references(() => problems.id, { onDelete: 'cascade' }),
    title: varchar('title', { length: 200 }).notNull(),
    description: varchar('description', { length: 400 }),
    severity: severityLevel('severity').notNull().default('danger'),
    sortOrder: integer('sort_order').notNull().default(0),
  },
  (t) => [index('red_flags_problem_idx').on(t.problemId, t.sortOrder)],
);

/** Block 10 — long-tail sub-intents that belong on THIS page, not their own. */
export const faqs = pgTable(
  'faqs',
  {
    id: serial('id').primaryKey(),
    problemId: integer('problem_id')
      .notNull()
      .references(() => problems.id, { onDelete: 'cascade' }),
    question: varchar('question', { length: 300 }).notNull(),
    answer: text('answer').notNull(),
    sortOrder: integer('sort_order').notNull().default(0),
  },
  (t) => [index('faqs_problem_idx').on(t.problemId, t.sortOrder)],
);

/** Block 11 — citations. `url` is nullable on purpose: an unverifiable source is
 *  listed without a link rather than given a fabricated one. */
export const sources = pgTable(
  'sources',
  {
    id: serial('id').primaryKey(),
    problemId: integer('problem_id')
      .notNull()
      .references(() => problems.id, { onDelete: 'cascade' }),
    publisher: varchar('publisher', { length: 200 }).notNull(),
    title: varchar('title', { length: 300 }).notNull(),
    url: varchar('url', { length: 1024 }),
    sourceType: sourceType('source_type').notNull().default('other'),
    notes: varchar('notes', { length: 400 }),
    sortOrder: integer('sort_order').notNull().default(0),
  },
  (t) => [index('sources_problem_idx').on(t.problemId, t.sortOrder)],
);

/** Block 12 — the related-problem graph. A row may point at a problem that is
 *  still `draft`; the UI renders those as plain text, never as a dead link. */
export const relatedProblems = pgTable(
  'related_problems',
  {
    sourceProblemId: integer('source_problem_id')
      .notNull()
      .references(() => problems.id, { onDelete: 'cascade' }),
    relatedProblemId: integer('related_problem_id')
      .notNull()
      .references(() => problems.id, { onDelete: 'cascade' }),
    relationshipType: relationshipType('relationship_type').notNull().default('sibling'),
    /** Anchor text, e.g. "Can I ignore a nail in my tire?". Meaningful anchors
     *  matter for internal linking, so they are authored rather than generated. */
    anchorText: varchar('anchor_text', { length: 200 }),
    sortOrder: integer('sort_order').notNull().default(0),
  },
  (t) => [
    primaryKey({ columns: [t.sourceProblemId, t.relatedProblemId] }),
    index('related_problems_source_idx').on(t.sourceProblemId, t.sortOrder),
  ],
);

/** Block 7 — "Useful Right Now". Monetisation-ready, monetisation-free.
 *  `url` null renders the card as information with no outbound link. */
export const recommendedResources = pgTable(
  'recommended_resources',
  {
    id: serial('id').primaryKey(),
    problemId: integer('problem_id')
      .notNull()
      .references(() => problems.id, { onDelete: 'cascade' }),
    title: varchar('title', { length: 200 }).notNull(),
    description: varchar('description', { length: 500 }).notNull(),
    kind: resourceKind('kind').notNull().default('tool'),
    /** Null today. An affiliate URL dropped in here later changes the page with
     *  no layout code touched. */
    url: varchar('url', { length: 1024 }),
    affiliate: boolean('affiliate').notNull().default(false),
    sortOrder: integer('sort_order').notNull().default(0),
    status: contentStatus('status').notNull().default('published'),
  },
  (t) => [index('recommended_resources_problem_idx').on(t.problemId, t.sortOrder)],
);

/* -------------------------------------------------------------------------- */
/* Can I Use It With… — compatibility pairings                                */
/* -------------------------------------------------------------------------- */

/**
 * A second content type, not a second site.
 *
 * The decision pages answer "may I leave this alone?"; these answer "do these
 * two things go together?". Different question, different verdict scale, so a
 * separate table rather than a nullable column bolted onto `problems`.
 *
 * They live here for the same three reasons the problems do: site search is one
 * indexed full-text query and cannot see a TypeScript file; the sitemap reads
 * one source; and pages render on demand rather than being pre-built, so
 * publishing a pairing costs one render instead of a rebuild.
 *
 * There is no taxonomy above a pairing. Its URL is `/use/<subject>/<target>/`
 * and its grouping is the target itself, which is why nothing here references
 * `systems`.
 */

/** The compatibility answer. Deliberately not `verdictLevel`: "DON'T IGNORE" is
 *  meaningless for a pairing, and one enum serving two questions would make both
 *  harder to reword. Labels live in `src/lib/compat.ts`. */
export const compatVerdict = pgEnum('compat_verdict', ['yes', 'yes_with_limits', 'risky', 'no']);

/** How the two halves meet. `washed-in` / `dried-in` / `stored-in` all render as
 *  "in"; the distinction is what the appliance DOES to the thing, which decides
 *  the question's wording and the mechanisms worth explaining.
 *
 *  Hyphenated to match `PairingRelation` in `src/lib/compat.ts` exactly. One
 *  spelling across the content files, the pipeline, the template and the column
 *  beats a conversion layer nobody remembers is there. */
export const pairingRelation = pgEnum('pairing_relation', [
  'in',
  'on',
  'with',
  'plugged-into',
  'washed-in',
  'dried-in',
  'stored-in',
]);

/** Which column of the conditions panel a row belongs to. */
export const pairingConditionKind = pgEnum('pairing_condition_kind', ['ok', 'never']);

export const pairings = pgTable(
  'pairings',
  {
    id: serial('id').primaryKey(),

    /** Left half. `subject_slug` is a URL segment, not a foreign key: an entity
     *  is whatever has been written about, and giving it a table before it has
     *  attributes of its own would be a taxonomy nobody needs yet. */
    subjectSlug: varchar('subject_slug', { length: 128 }).notNull(),
    subjectName: varchar('subject_name', { length: 160 }).notNull(),
    subjectKind: varchar('subject_kind', { length: 60 }).notNull(),
    subjectNote: varchar('subject_note', { length: 200 }).notNull(),

    relation: pairingRelation('relation').notNull().default('in'),

    /** Right half. */
    targetSlug: varchar('target_slug', { length: 128 }).notNull(),
    targetName: varchar('target_name', { length: 160 }).notNull(),
    targetKind: varchar('target_kind', { length: 60 }).notNull(),
    targetNote: varchar('target_note', { length: 200 }).notNull(),

    /** `/use/<subject>/<target>/`. The single source of truth for the URL. */
    canonicalPath: varchar('canonical_path', { length: 512 }).notNull(),

    /* Where this sits in the site's taxonomy, so a hub can show everything it
     * knows about a subject rather than only the half phrased as a decision.
     *
     * Placement is keyed on the TARGET, in `src/content/compat/placement.ts` —
     * a question about foil in an oven is a question about the oven. It does
     * NOT give the pairing its URL: `/use/…` stays flat, exactly as taxonomy
     * and URL are independent on the decision side.
     *
     * `objectCategoryId` is nullable because not every target has an object
     * node — there is no "air fryers" category, and minting one to hold eight
     * pairings would be taxonomy inflation. Those still place at domain level. */
    domainId: integer('domain_id').references(() => domains.id, { onDelete: 'set null' }),
    objectCategoryId: integer('object_category_id').references(() => objectCategories.id, {
      onDelete: 'set null',
    }),

    eyebrow: varchar('eyebrow', { length: 120 }),
    h1: varchar('h1', { length: 200 }).notNull(),
    seoTitle: varchar('seo_title', { length: 256 }),
    metaDescription: varchar('meta_description', { length: 512 }),

    verdict: compatVerdict('verdict'),
    shortAnswer: text('short_answer'),

    /** The three decision metrics beside the verdict. Free text, because the
     *  honest answer ("only under conditions", "coating damage") is not an enum. */
    mainRisk: varchar('main_risk', { length: 120 }),
    damages: varchar('damages', { length: 120 }),
    alternative: varchar('alternative', { length: 160 }),

    calloutLabel: varchar('callout_label', { length: 120 }),
    /** Paragraphs joined by a blank line, as `problems.why_it_matters` is. */
    calloutBody: text('callout_body'),

    status: contentStatus('status').notNull().default('draft'),
    indexable: boolean('indexable').notNull().default(false),
    lastReviewedAt: timestamp('last_reviewed_at', { withTimezone: true }),
    reviewScope: varchar('review_scope', { length: 300 }),

    createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
    updatedAt: timestamp('updated_at', { withTimezone: true }).notNull().defaultNow(),
  },
  (t) => [
    uniqueIndex('pairings_subject_target_key').on(t.subjectSlug, t.targetSlug),
    // The hot path: one indexed lookup renders one page.
    uniqueIndex('pairings_canonical_path_key').on(t.canonicalPath),
    // The /use/ listing and the target-side switcher.
    index('pairings_target_idx').on(t.targetSlug, t.status),
    // The subject dossier and the subject-side switcher.
    index('pairings_subject_idx').on(t.subjectSlug, t.status),
    // Sitemap generation.
    index('pairings_published_idx').on(t.status, t.indexable, t.updatedAt),
    // Hub listings: "published pairings filed under this domain / object".
    index('pairings_domain_idx').on(t.domainId, t.status),
    index('pairings_object_idx').on(t.objectCategoryId, t.status),
    // Site search. Must stay character-for-character identical to the tsvector
    // `searchPairings` builds, or it silently becomes a sequential scan.
    index('pairings_search_idx').using(
      'gin',
      sql`to_tsvector('english', ${t.subjectName} || ' ' || ${t.targetName} || ' ' || ${t.h1} || ' ' || coalesce(${t.shortAnswer}, ''))`,
    ),
  ],
);

/** The two-column "fine to do / never do" panel. */
export const pairingConditions = pgTable(
  'pairing_conditions',
  {
    id: serial('id').primaryKey(),
    pairingId: integer('pairing_id')
      .notNull()
      .references(() => pairings.id, { onDelete: 'cascade' }),
    kind: pairingConditionKind('kind').notNull(),
    body: text('body').notNull(),
    sortOrder: integer('sort_order').notNull().default(0),
  },
  (t) => [index('pairing_conditions_pairing_idx').on(t.pairingId, t.kind, t.sortOrder)],
);

/** Why the conditions exist — one physical mechanism per row. */
export const pairingMechanisms = pgTable(
  'pairing_mechanisms',
  {
    id: serial('id').primaryKey(),
    pairingId: integer('pairing_id')
      .notNull()
      .references(() => pairings.id, { onDelete: 'cascade' }),
    title: varchar('title', { length: 160 }).notNull(),
    body: text('body').notNull(),
    sortOrder: integer('sort_order').notNull().default(0),
  },
  (t) => [index('pairing_mechanisms_pairing_idx').on(t.pairingId, t.sortOrder)],
);

/** Citations. `url` is NOT NULL here, unlike `sources.url`: a compatibility
 *  claim rests on a document a reader can open, and the pipeline refuses to
 *  write a pairing whose citations do not resolve. */
export const pairingSources = pgTable(
  'pairing_sources',
  {
    id: serial('id').primaryKey(),
    pairingId: integer('pairing_id')
      .notNull()
      .references(() => pairings.id, { onDelete: 'cascade' }),
    publisher: varchar('publisher', { length: 200 }).notNull(),
    title: varchar('title', { length: 300 }).notNull(),
    url: varchar('url', { length: 1024 }).notNull(),
    sourceType: sourceType('source_type').notNull().default('other'),
    sortOrder: integer('sort_order').notNull().default(0),
  },
  (t) => [index('pairing_sources_pairing_idx').on(t.pairingId, t.sortOrder)],
);
