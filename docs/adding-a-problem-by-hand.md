# Adding a problem by hand (archived reference)

Problems are now added by the importer (`npm run content:import`), which
generates the `.ts` file and registers it. This file keeps the underlying
reference — how a URL becomes a page, the full `ProblemSeed` shape, what the SEO
layer does automatically, and the manual 9-step procedure — for the cases where
a generated file has to be read, repaired, or written by hand.

The rules that still apply to every import (enums, the publish gate, honesty
rules, the reserved-slug trap, taxonomy, database safety) live in `CLAUDE.md`.

---

## Reference implementation

`src/content/problems/low-tire-pressure.ts` is the canonical example. It is
annotated block-by-block (`/* --- Block N --- */` comments matching the
template's block order). Copy its shape, not its prose.

## How one URL becomes one page (the full trace)

1. **Content is authored** as a `ProblemSeed` object (`src/content/types.ts`)
   in `src/content/problems/<slug>.ts`.
2. **It is registered** in the `problems` array in `src/content/index.ts`.
3. **`npm run db:seed`** (`scripts/seed.ts`) reads that array and upserts rows
   into Postgres: one row in `problems` (`src/lib/db/schema.ts`), plus rows in
   `problem_scenarios`, `consequence_steps`, `ignore_windows`, `action_steps`,
   `red_flags`, `faqs`, `sources`, `recommended_resources`,
   `problem_aliases`, and `related_problems`. This is idempotent — rerunning
   it replaces a problem's detail rows rather than duplicating them.
4. **A request for `/cars/tires/low-tire-pressure/`** is caught by the single
   catch-all route `src/app/[...path]/page.tsx` — there is no per-problem
   route file, ever. It calls `resolveRoute()`
   (`src/lib/repository/routes.ts`), a single indexed SQL `UNION` over
   `problems`, `systems`, `object_categories`, `domains` and
   `problem_aliases`, keyed on `canonical_path`.
5. **The page data is loaded** by `getProblemPage()`
   (`src/lib/repository/problems.ts`), which joins the problem to its
   taxonomy ancestry and fetches every detail table in parallel. It runs the
   row through `asPublishedProblem()` (`src/lib/content/schema.ts`) — a row
   flagged `published` but missing a required field silently degrades to a
   404 rather than rendering half a verdict.
6. **It renders** through the one shared template, `src/templates/ProblemPage.tsx`,
   which composes the shared block components (below). Nothing here is
   specific to tires or cars.

The same file/repository (`src/lib/repository/taxonomy.ts`) and the same
catch-all route also serve the three hub levels (domain / object category /
system) via `src/templates/HubPage.tsx` — also shared, also never
per-category code.


## The `ProblemSeed` shape (`src/content/types.ts`)

Every field below maps 1:1 to a column on the `problems` table
(`src/lib/db/schema.ts`) unless noted. Block numbers match the comments in
`low-tire-pressure.ts` and the fixed rendering order in `ProblemPage.tsx`.

```ts
interface ProblemSeed {
  systemSlug: string;        // must match an existing systems[].slug in taxonomy.ts
  slug: string;               // unique within the system; becomes part of nothing (see canonicalPath)
  canonicalPath: string;      // e.g. '/cars/tires/nail-in-tire/' — the ONLY source of the URL
  name: string;                // plain name: breadcrumbs, hubs, related-problem links
  eyebrow?: string;            // small label above H1, e.g. 'Cars · Tires'
  h1: string;                  // the on-page question — deliberately different from seoTitle
  status: ContentStatus;       // 'draft' | 'reviewed' | 'published' | 'archived'
  indexable: boolean;          // published-but-thin pages can be linkable and still noindex

  // Everything below is optional on a draft row, REQUIRED to publish (see
  // "the publish gate" below).
  seoTitle?: string;
  metaDescription?: string;
  verdict?: VerdictLevel;
  urgency?: UrgencyLevel;
  safetyRisk?: RiskLevel;
  fixDifficulty?: DifficultyLevel;
  canIUseItQuestion?: string;   // e.g. 'Can I drive?' — defaults to 'Can I use it?'
  canIUseItLabel?: string;      // free text, e.g. 'Usually only briefly' — NOT an enum
  shortAnswer?: string;
  whyItMattersHeading?: string; // defaults to `Why Does ${name} Matter?`
  whyItMatters?: string;        // paragraphs joined with '\n\n'
  redFlagsHeading?: string;     // defaults to 'Stop and check if you notice:' — topic-appropriate wording matters ("Turn Off The Water If:" for a leak, not "Stop Driving If:")
  lastReviewedAt?: Date;
  reviewScope?: string;
  disclaimer?: string;

  aliases?: string[];           // old/alternate URLs that 308 here — see "keyword variations" below

  // Block 3 — situation checker
  scenarios?: ScenarioSeed[];   // { slug, label, shortDescription?, verdictOverride?, urgencyOverride?, resultHeadline, resultBody, recommendedAction }

  // Block 4 — ignore timeline
  consequences?: ConsequenceSeed[]; // { stageLabel, title, description?, severity, chainLabel? }
                                     // consecutive items sharing stageLabel group into one visual stage

  // Block 5 — how-long decision table
  windows?: IgnoreWindowSeed[]; // { situation, ignoreAnswer, severity, whatToDo }

  // Block 6 — what to do now
  actions?: ActionStepSeed[];   // { title, body, destinationProblemSlug?, destinationLabel? }
                                 // destinationProblemSlug must resolve to a real record (see below);
                                 // the link only renders once that destination is 'published'

  // Block 8 — red flags / stop conditions
  flags?: RedFlagSeed[];        // { title, description?, severity? }

  // Block 10 — FAQ
  faqs?: FaqSeed[];             // { question, answer }

  // Block 11 — sources
  sources?: SourceSeed[];       // { publisher, title, url: string | null, sourceType, notes? }
                                 // url is null when nothing verifiable exists — NEVER guess one

  // Block 7 — useful right now
  resources?: ResourceSeed[];   // { title, description, kind, url: string | null, affiliate }

  // Block 12 — related problems
  related?: RelatedSeed[];      // { slug, anchorText, relationshipType }
}
```


## Prerequisite: the target system must already be `status: 'published'`

`src/content/taxonomy.ts` currently has only **one published chain**:
domain `mobility` → object `cars` (`indexable: false` on both) → system
`tires`. Every other object under `mobility` (`motorcycles`, `bicycles`,
`e-bikes-and-scooters`) and every other system under `cars` (`brakes`,
`engine`, `battery-and-electrical`, `cooling`, `fluids`, `suspension`,
`steering`, `transmission`, `exhaust`, `lights`, `glass`, `body`) is
`status: 'draft'` — reserved, named, but **not routable**.

This matters because `getProblemPage()` does **not** check the ancestor
chain's status when rendering the problem itself — a published problem
under a still-draft system would render fine at its own URL, but every
breadcrumb link to its system/object/domain hub would 404, because
`resolveRoute()` only resolves hub nodes where `status = 'published'`.

**So: before adding a problem outside Tires, check whether its system row in
`taxonomy.ts` is already `published`. If it is still `draft`, publishing the
taxonomy chain is a separate, visible decision (it makes a hub page live) —
raise it explicitly rather than flipping it silently as a side effect of
adding one problem.** Adding a problem under an already-published system
(currently: only `tires`) needs no taxonomy edit at all.


## SEO — all of this is automatic once the fields above are filled in

- **`<title>` / meta description**: built by `buildPageMetadata()`
  (`src/lib/seo/metadata.ts`) straight from `seoTitle` /
  `metaDescription`. No component composes a title string.
- **Canonical URL**: `alternates.canonical` = `absoluteUrl(canonicalPath)`
  (`src/lib/site.ts`), which reads `NEXT_PUBLIC_SITE_URL` — never hard-code
  a domain.
- **`noindex`**: automatic from `indexable`. `published` + `indexable: true`
  is fully indexable; `published` + `indexable: false` is linkable but
  `noindex, follow`.
- **Breadcrumb + `BreadcrumbList` JSON-LD**: built entirely from the
  taxonomy chain (`Home → domain → object → system → problem`) in
  `getProblemPage()` and rendered by `Breadcrumbs`/`breadcrumbJsonLd`
  (`src/components/Breadcrumbs.tsx`). One new problem file needs no
  breadcrumb code — it already resolves from `systemSlug`.
- **`WebPage` JSON-LD**: `problemWebPageJsonLd()`
  (`src/lib/seo/jsonld.tsx`), built from `h1`, `metaDescription`,
  `canonicalPath`, `lastReviewedAt`, and `sources[].url` — again, all from
  content fields, zero code.
- **No `FAQPage` schema is emitted, deliberately** (see
  `docs/content-architecture.md` §6) — do not add one for a new problem.
- **Sitemap** (`src/app/sitemap.ts` → `getIndexableUrls()` in
  `src/lib/repository/taxonomy.ts`): every `published` + `indexable: true`
  row across all four tables is included automatically, with `lastModified`
  from `updatedAt`. Nothing to register by hand.
- **Hub listing**: a published problem automatically appears on its system
  hub (`getPublishedProblemsBySystem`) and its object hub
  (`getPublishedProblemsByObject`), grouped by verdict
  (`VERDICT_GROUP_HEADING` in `src/lib/verdict.ts`). No hub file is edited to
  "add" a problem to it.
- **Keyword variations → `aliases`, never a new problem.** If the new topic
  is genuinely just a different phrasing of an existing published problem
  ("how long can I drive with X" vs "can I drive with X"), it belongs in
  that problem's `aliases` array (308→ canonical), not as a new record. A
  test in `content.test.ts` asserts no alias ever collides with a real
  canonical path. A new problem record is for a genuinely different
  decision — see `docs/content-architecture.md` §4 for the worked examples.


## Procedure when the user says "새 problem page 추가: <Name>. 아래 콘텐츠 사용."

1. Confirm the target system (ask if ambiguous) and check its `status` in
   `taxonomy.ts` is `published` (today: only `tires` under `cars`). If not,
   surface that as a blocker/decision rather than silently publishing the
   taxonomy chain.
2. Check whether `<Name>`'s slug is one of the six reserved drafts in
   `planned-tire-problems.ts`. If so, plan to remove it from the `planned`
   array there.
3. Write `src/content/problems/<slug>.ts` as a `ProblemSeed`, following
   `low-tire-pressure.ts`'s block structure, using the user-supplied content
   for `h1`, `shortAnswer`, `whyItMatters`, scenarios, consequences,
   windows, actions, flags, faqs, sources, resources. Research real sources
   before writing to them — never fabricate a URL, a statistic, or a
   distance/duration figure (see honesty rules above). Set
   `status: 'published'`, `indexable: true` only once every publish-gate
   field is genuinely filled in.
4. Register it in `src/content/index.ts` (import + array entry), removing
   the reserved-draft entry per step 2 if applicable.
5. The new problem's own `related[]` may reference existing problems (the
   slug just has to exist as a record — draft or published; see
   "Cross-references" above). Do **not** add or edit `related[]` in any
   *other* content file to create a reverse link back to the new problem —
   that means editing an existing content file, which this task never does
   (see "What NEVER changes" above). Reverse/back-linking from existing
   problems is a separate, explicit content-maintenance task: only do it if
   the user asks for it directly (e.g. "기존 related links도 업데이트해줘"),
   and even then touch only that problem's `related[]` array — never its
   prose, verdict, scenarios, or FAQ.
6. Run the checks that never touch the database, in order: `npm run
   typecheck`, `npm run lint`, `npm test`, `npm run build`. All four are
   safe to run regardless of what `DATABASE_URL` currently points at.
7. **Before running `npm run db:seed`**, read `.env.local` and identify what
   `DATABASE_URL` currently targets:
   - **Local/dev** (e.g. `localhost`): safe to run `npm run db:seed` — go
     ahead. (It doubles as the content validator: it aborts loudly on an
     incomplete published row.)
   - **Production** (a hosted DB — e.g. a Neon/Vercel-provisioned host):
     do **not** run `npm run db:seed` unless the user has explicitly asked
     for a production seed/publish in this conversation. "Add a new problem
     page" is not, by itself, authorization to mutate the production
     database.
   - **Unclear** (missing `.env.local`, ambiguous host, more than one
     candidate env file): do not run the seed. Stop and tell the user
     exactly what `DATABASE_URL` currently resolves to, and ask which
     target they want.
8. Regression-check (once seeding — local, or explicitly-approved
   production — has actually run): confirm `content.test.ts` still passes
   in full (including its `low-tire-pressure`-specific assertions — you did
   not touch that file, so they should be untouched), and spot-check that
   `/cars/tires/low-tire-pressure/` still resolves — a broken shared
   template or repository query would show up there first, even though this
   task never intentionally touches those files.
9. Mention deployment: pushing to `main` auto-deploys via Vercel, but that
   only ships code — the new problem's content reaches readers only once
   `npm run db:seed` has actually been run against whichever `DATABASE_URL`
   serves that deployment, per step 7.

