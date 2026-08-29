@AGENTS.md

# Adding a new problem page

This section is the contract for adding the site's next decision. It was
written by tracing the actual code path for `/cars/tires/low-tire-pressure/`
— every file, field and enum named below is verified against the current
source, not assumed. If the code and this document ever disagree, the code
wins and this document is stale.

**The one rule that matters: adding a problem is a data change, not a code
change.** You add one `.ts` content file and register it in one array. You do
not create a route, a page component, a CSS file, or touch anything under
`src/lib/repository/`, `src/lib/db/`, `src/templates/`, or `src/components/`.
If you find yourself about to edit one of those to "make room" for the new
problem, stop — the data model already has room, and the fix is almost always
a missing field on the content file, not a missing feature in the template.

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

## Enums — exact values (`src/lib/db/schema.ts`, mirrored in `src/lib/content/schema.ts`)

Never invent a new value. If a new one is genuinely needed it is a migration
(`npm run db:generate` + `npm run db:migrate`) and a `src/lib/verdict.ts`
presentation entry — almost never required for "just add a problem".

| Type | Values |
|---|---|
| `ContentStatus` | `draft`, `reviewed`, `published`, `archived` |
| `VerdictLevel` | `safe_to_ignore`, `can_wait`, `probably_not`, `do_not_ignore` |
| `UrgencyLevel` | `low`, `medium`, `high`, `critical` |
| `RiskLevel` | `low`, `moderate`, `high`, `severe` |
| `DifficultyLevel` | `easy`, `moderate`, `hard`, `professional` |
| `SeverityLevel` (timeline/red-flags/table rows) | `info`, `caution`, `warning`, `danger` |
| `SourceKind` | `government`, `regulation`, `manufacturer`, `standards_body`, `industry`, `academic`, `other` |
| `ResourceKind` | `tool`, `part`, `service`, `guide` |
| `RelationshipType` | `sibling`, `escalation`, `cause`, `follow_up`, `related` |

Labels, colours and icon shapes for these enums live **only** in
`src/lib/verdict.ts`. Never hard-code a label or a hex colour in content or a
component — `whyItMatters` prose can say "high risk" in English, but the
stored `safetyRisk` field must be the enum value `high`, not a string.

## The publish gate (`src/lib/content/schema.ts` → `publishedProblemSchema`)

A row may sit as `status: 'draft'` indefinitely with almost everything null
— that is intentional (see `planned-tire-problems.ts`). To set
`status: 'published'`, these fields are **required** and enforced in three
places (seed script, repository, and `content.test.ts`), so an incomplete
"published" row fails loudly before it ever reaches a reader:

`name`, `h1`, `seoTitle`, `metaDescription`, `canonicalPath`, `verdict`,
`urgency`, `safetyRisk`, `fixDifficulty`, `canIUseItLabel`,
`canIUseItQuestion`, `shortAnswer`, `whyItMatters`.

`canonicalPath` must match `/^\/(?:[a-z0-9-]+\/)*$/` — lower-case,
slash-delimited, trailing slash, no exceptions.

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

## Registering the new file — and the reserved-slug trap

Add the import and the record to the `problems` array in
`src/content/index.ts`. Order in that array matters for seeding:
`scripts/seed.ts` upserts by `[systemId, slug]`, last write wins.

Six tire-system slugs are already reserved as bare drafts in
`src/content/problems/planned-tire-problems.ts`: `nail-in-tire`,
`tpms-warning-light`, `cracked-tire-sidewall`, `tire-rotation`,
`uneven-tire-wear`, `wheel-vibration`. **If the new problem is one of these:**
remove its entry from the `planned` array in that file and give it its own
full content file instead (same pattern as `low-tire-pressure.ts`). Do NOT
leave the bare draft entry in `planned-tire-problems.ts` while also adding a
full record with the same slug elsewhere in the `problems` array —
`plannedTireProblems` is spread after `lowTirePressure` in `index.ts`
(`[lowTirePressure, ...plannedTireProblems]`), so if the full record is
registered before it in the array, the later bare draft silently overwrites
it back to an empty draft on the next seed.

## Cross-references: `related[].slug` and `actions[].destinationProblemSlug`

`scripts/seed.ts` **throws and aborts the whole seed** if either points at a
slug with no matching record anywhere in `problems` (draft or published) —
this is what "never fabricate a related link" is enforced by, mechanically.
It is safe to point at a slug that is still `draft`: `RelatedProblems.tsx`
and `ActionSteps` (via `destinationHref` in
`src/lib/repository/problems.ts`) automatically render it as **plain text**
("Planned") instead of a link, and it lights up as a real link the moment
that target's `status` flips to `published` — no code or content-file change
needed at that point. `related[].anchorText` must be genuine anchor text
(the test `content.test.ts` rejects anything ≤10 characters or matching
"click here" / "read more" / "learn more").

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

## Content honesty rules that are mechanically enforced by `content.test.ts`

These aren't style guidance — they're asserted in code against every
`published` record, so a violation fails the test suite, not just a review:

- **No invented distance/duration figures anywhere in free text**
  (`shortAnswer`, `whyItMatters`, `scenarios[].resultBody`,
  `scenarios[].recommendedAction`, `windows[].whatToDo`, `actions[].body`,
  `faqs[].answer`). A regex bans any `\d+ (miles|km|hours|minutes|...)`
  pattern outright — there is no "but I have a source" exception in the
  regex, so don't phrase a cited figure as a driving distance/duration even
  if the source backs it. If there is no honest number, say so in prose.
- **`sources[].url`** is either `null` or a real `https://` URL — never a
  plausible-looking guess, never an `example.com`/`.org`/`.test` domain.
- **At least one `sourceType: 'government'` or `'regulation'` source** is
  required on every published problem.
- **`reviewScope`** may not claim a fabricated reviewer credential (matches
  against `/reviewed by|ASE-certified|\bDr\.|technician\b/i` are rejected).
- **`resources[].affiliate` must be `false` and `resources[].url` must be
  `null`** for now — the monetisation fields exist but the site currently
  ships none (`docs/content-architecture.md` §6). Do not add an affiliate
  link to a new problem unless the user explicitly asks to turn
  monetisation on.
- **`seoTitle` and `metaDescription` must be unique across every published
  problem**, `seoTitle ≠ h1`, `seoTitle` ≤ 75 characters, `metaDescription`
  ≤ 170 characters.
- **`canonicalPath` must be unique across every problem, alias, and every
  taxonomy node.**

## What NEVER changes when "just adding a problem"

- `src/templates/ProblemPage.tsx`, `src/templates/HubPage.tsx`
- Any file under `src/components/problem/`, `src/components/ui/`,
  `src/components/site/`, `src/components/Breadcrumbs.tsx`,
  `src/components/ProblemSearch.tsx`
- `src/app/[...path]/page.tsx`, `src/app/sitemap.ts`, `src/app/robots.ts`
- `src/lib/repository/*.ts`, `src/lib/seo/*.ts`, `src/lib/verdict.ts`,
  `src/lib/site.ts`
- `src/lib/db/schema.ts`, `src/lib/content/schema.ts` (unless the task is
  explicitly "add a new field/enum value", which is a schema change +
  migration, a different and larger task than adding a problem)
- `src/app/globals.css`, `src/app/problem.css`
- Any **existing** `src/content/problems/*.ts` file other than
  `planned-tire-problems.ts` for the reserved-slug case above, and never its
  prose — do not "improve" `low-tire-pressure.ts` or any other
  already-published content while adding an unrelated problem.

If completing the request seems to require touching one of these, stop and
say so rather than editing it — the request has likely drifted from "add a
problem" into "change the template/schema", which needs the user's explicit
sign-off first.

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

---

# AUTONOMOUS CONTENT MODE

Everything above still applies. This section does not replace it — it layers on
top of it and describes the **batch mode** used when the user supplies only
topics or H1s and expects research, classification, writing, editing,
fact-checking and implementation to happen without further input.

## Trigger

Any input that is a bare list of topics or H1 questions, with no SYSTEM, SLUG,
VERDICT, SCENARIOS, FAQ or SOURCES supplied. Typically:

```
새 problem pages 추가:
- Can I Ignore a Slow Drain?
- Can I Ignore a Toilet That Keeps Running?
```

In this mode the user is **not** going to answer clarifying questions about
taxonomy, verdict or wording. Decide, write, verify, report. Ask only if a
topic cannot be honestly resolved at all — and even then, skip that one topic
and keep going (see "Failure behaviour").

The single-topic procedure at the end of the previous section ("새 problem page
추가: <Name>. 아래 콘텐츠 사용.") stays exactly as written and is used whenever
the user *does* hand over the content.

## 1. Source of truth — the code, not this document

The repository as it stands right now is the source of truth:
`src/content/taxonomy.ts`, `src/content/problems/`, `src/content/index.ts`,
`src/lib/content/schema.ts`, `src/lib/db/schema.ts`, and
`src/content/content.test.ts`.

**Time-stamped claims in the section above are stale and must not be trusted.**
In particular, "Prerequisite: the target system must already be
`status: 'published'`" describes a moment when only `mobility → cars → tires`
was published. That is no longer true — several domains, object categories and
systems are live now. The *rule* in that section still holds (a problem under a
draft ancestor renders but its breadcrumbs 404); only its inventory is out of
date. Read `taxonomy.ts` every batch instead of quoting it from memory.

Every `status: 'published'` problem in `src/content/problems/` is the
**gold-standard corpus**. New pages are measured against it.

## 2. Bootstrap once per batch, then reuse

Before topic 1, read once and keep in working memory for the whole batch:

- the full `taxonomy.ts` (domains, object categories, systems — slug, path, status)
- the `problems` array in `index.ts` (every existing slug, published and draft)
- `content.test.ts` (the enforced rules, in full)
- two or three of the most recently added published problem files, end to end,
  for voice and shape

Do not re-scan the repository per topic. Per topic, the only lookups needed are
duplicate checks against the slug list already in memory.

## 3. Quality baseline — measured, not guessed

Measured across the current published corpus (word counts of visible prose).
Use it as the band a new page should land in, not as a quota:

| Field | Range | Median |
|---|---|---|
| Total visible prose (words) | 1,170–1,920 | ~1,500 |
| `shortAnswer` | 32–71 | ~46 |
| `whyItMatters` | 57–146 words, 2–3 paragraphs | ~100 words, 2 paragraphs |
| `scenarios[]` | 6–12 | 8–10 |
| `scenarios[].resultBody` | 18–46 | ~24 |
| `consequences[]` | 5–6 | 5 |
| `consequences[].description` | 13–23 | ~17 |
| `windows[]` | 6–8 | 7 |
| `actions[]` | 3–6 | 4–5 |
| `actions[].body` | 19–38 | ~31 |
| `flags[]` | 5–8 | 6 |
| `faqs[]` | 4–10 | 10 |
| `faqs[].answer` | 18–38 | ~27 |
| `sources[]` | 3–8 | 6 |
| `resources[]` | 0–6 | 4 |
| `related[]` | 0–6 | 5 |
| `seoTitle` (chars) | 54–74 | ~63 (hard cap 75) |
| `metaDescription` (chars) | 139–160 | ~148 (hard cap 170) |

The newer pages sit at the upper end (≈1,600–1,900 words, 10 scenarios, 10
FAQs, 6+ sources). Match the newer end for a topic with real decision branches;
a genuinely simple topic may sit lower. A page that lands at half the median,
or well past the top of the range, is wrong and must be re-edited — never
padded to reach a number, never trimmed below what the topic honestly needs.

**Never inflate for SEO.** Length comes from real decision branches, not from
restating the verdict in more places.

## 4. Taxonomy auto-classification

Decide taxonomy per topic, independently. Input order carries no meaning.

1. **Reuse an existing system** whenever the topic sits naturally under one.
   This is the default and covers most topics.
2. **Create a new node** only when no existing one fits without distortion. A
   new system must be able to hold several future problems — never mint a
   system for one page.
3. **Never duplicate a near-identical category.** Check every existing slug and
   name first.
4. **Never create a problem that is a keyword variation** of an existing one.
   Same decision, different phrasing → an `aliases[]` entry on the existing
   problem (an edit to that file's `aliases` array only, allowed under §11), not
   a new record. A genuinely different decision → a new record.
5. If the topic already exists as a **draft** record (there are many reserved
   drafts in the `planned-*.ts` files), that is the slug to build out — remove
   it from that file's `planned` array and give it its own full content file,
   per the reserved-slug trap above.

Creating and publishing new taxonomy nodes **is allowed in this mode** without
asking, unlike the single-page procedure. When doing it:

- URL rules are authored, not derived. A domain slug need not match its path
  (`tech` → `/technology/`), and a level can be omitted from the URL entirely
  (`cars` sits under `mobility` but its path is `/cars/`). Follow the shape of
  the sibling nodes already in `taxonomy.ts`.
- A problem's `canonicalPath` is its system's `canonicalPath` + `slug` + `/`.
- A newly published hub needs `hubHeading`, `seoTitle`, `metaDescription`,
  `shortDescription`, `sortOrder`, `status: 'published'`, `indexable: false`.
  Hubs stay `indexable: false` until they hold enough pages to be worth ranking.
- Publish the **whole ancestor chain** (domain → object → system), or the new
  page's breadcrumbs will 404.
- When creating a new system, also add a `planned-<system>-problems.ts` file of
  reserved drafts (name + h1 + path only, `status: 'draft'`, `indexable: false`,
  and **no** verdict or `shortAnswer` — `content.test.ts` asserts drafts stay
  empty) so `related[]` has real targets to point at. Register it in `index.ts`.

## 5. Research before writing

Research first. Never write prose and then look for something to back it.

Source priority: government / regulation → standards body → manufacturer
documentation → academic or recognised industry authority → other credible
material.

- Verify every URL actually resolves before writing it. Unverified → `url: null`.
  A plausible-looking guess is a defect, not a shortcut.
- At least one `sourceType: 'government'` or `'regulation'` source per published
  problem — enforced by the test suite.
- Never invent a number: distance, duration, temperature, pressure, cost, or
  safety threshold.
- `content.test.ts` bans `\d+ (miles|hours|minutes|km|…)` in all free text with
  **no exception for cited figures**. If a real sourced figure would trip the
  regex, write the sentence without the number. Never restructure the regex, the
  test, or the field the text lives in to smuggle a number past it.
- Never bend the verdict to fit whichever sources happened to turn up. If the
  evidence does not support a clean answer, say so in the prose or skip the topic.

## 6. Verdict decision

Do not derive `verdict` / `urgency` / `safetyRisk` / `fixDifficulty` from how
the topic *sounds*. Derive them from what the research showed about the common
real-world case. Only the enum values defined in `src/lib/db/schema.ts` exist.

- The base verdict represents the **typical** situation.
- Where the answer genuinely changes by situation, that belongs in
  `scenarios[].verdictOverride` / `urgencyOverride` — not in a hedged base verdict.
- Safety topics do not get an optimistic reading.
- Low-risk nuisances do not get dramatised. `safe_to_ignore` is a real, usable
  verdict and several published pages carry it.

## 7. Write like this site's editor, not like an assistant

Plain, direct American English for someone reading fast on a phone. Match the
edited voice of the current published pages.

Avoid:

- re-explaining the same conclusion from scratch in several sections
- repeating the full red-flag list inside every FAQ
- every sentence being a self-contained mini-explanation
- the thesis → explanation → restated-conclusion shape
- defensive throat-clearing
- technical-manual or insurance-policy register
- transition sentences that carry no information
- explaining something the reader obviously already knows
- a summarising sentence at the end of every section

Specifically avoid these habitual constructions:

`rather than` · `What matters…` · `The key…` · `The point is…` ·
`The useful distinction…` · `by itself` · `different situation` ·
`different problem` · `different branch` · `There is no honest…` ·
`Do not invent…` · `assuming…` · `deserves diagnosis…` · `not X but Y` ·
`X does not mean Y` · `The danger comes from X, not Y`

This is not a banned-word list to be defeated with synonyms. If the sentence
carries nothing, delete it. If it carries something, rewrite it shorter and more
directly. Short is not automatically better — a natural, memorable line in the
voice of the existing pages is welcome. One idea per sentence.

## 8. Section discipline

Each block does its own job and nothing else.

- **shortAnswer** — the verdict, understandable in a few seconds. Usually 1–2
  sentences.
- **scenarios** — only situations that actually change the answer. No two
  scenarios that are the same situation reworded.
- **consequences** — the causal progression of ignoring it. Do not restate the
  same risk at every stage. Keep at least three `chainLabel` nodes and end on the
  most severe step (`severity: 'danger'` on the last one, as the corpus does).
- **windows** — the "how long can this wait" table. No invented numbers.
- **actions** — what to do now. Not a tutorial.
- **flags** — the stop-and-act conditions, gathered in one place.
  `redFlagsHeading` must be topic-appropriate wording ("Turn Off The Water If:",
  not "Stop Driving If:").
- **whyItMatters** — only the explanation needed to make the verdict make sense.
  Usually two short paragraphs. Not a chemistry lecture.
- **faqs** — questions a searcher would really type. Not a restatement of the
  body. Most answers 1–2 sentences.
- **sources** — evidence, not commentary.
- **related** — genuine next steps and neighbours only.

Also keep the corpus conventions: `eyebrow` as the taxonomy trail
(`Cars · Tires`), `whyItMattersHeading` as a question, a `seoTitle` that is its
own search-facing line and never equal to `h1` (about two thirds of the corpus
ends it with `| Can I Ignore It`; the rest drop the suffix to stay under 75
characters, which is fine), `indexable: true` on a published page, a real
`lastReviewedAt`, a
`reviewScope` naming what was checked against which bodies (with no fabricated
human credential), `resources[]` always `affiliate: false` and `url: null`, and
a file-top comment explaining the page's core distinction.

## 9. Anti-AI editorial pass (mandatory, before the file is finalised)

Run this as a separate pass over the finished draft. It adds no facts. Check:

1. Is the same fact explained three or more times?
2. Does a section re-explain a warning the previous section already gave?
3. Can any sentence be deleted with no loss of meaning? Delete it.
4. Has an FAQ answer turned into a mini-essay?
5. Is `whyItMatters` longer than it needs to be?
6. Are there abstract AI-style contrast sentences?
7. Is there phrasing no person explaining this problem would actually use?
8. Is any sentence so over-helpful it reads mechanical?
9. Is anything said long that could be said short?
10. Does the length deviate from the corpus band in §3?

Cut aggressively while keeping every necessary fact. This is editing, not
paraphrasing to dodge detection.

## 10. Fact-check pass (mandatory, after the editorial pass)

- Does the verdict contradict any cited source?
- Is anything manufacturer-specific presented as a universal rule?
- Is a safety-relevant condition missing?
- Is there any unverified number left in the text?
- Does every non-null source URL exist?
- Does each source actually support the claim it sits behind?
- Is any statement more confident than the evidence?

Editing for voice must never weaken a safety meaning. If the editorial pass made
a warning softer, put the strength back.

## 11. Per-topic loop

Process topics strictly in the order given, one at a time, finishing each
completely before starting the next. Never leave several pages half-written.

For each topic: **A** duplicate/alias check → **B** taxonomy decision →
**C** research → **D** verdict decision → **E** draft → **F** editorial pass
(§9) → **G** fact-check pass (§10) → **H** write the `ProblemSeed` file →
**I** register in `index.ts` (plus taxonomy / `planned-*` file if needed) →
**J** the content quality gate (§16) → **K** minimal per-topic validation.

Passes F and G are your own editing. Step J is the independent one: a separate
Claude API review that has not read your drafting reasoning and cannot be talked
round by it. Both stay — the editorial passes are what make the draft good, the
gate is what proves it.

Per-topic validation is the cheap check only — e.g. `npx vitest run src/content`
— not the full gate.

Never edit the prose, verdict, scenarios, or FAQ of an existing published problem
in this mode. Two edits to existing content files are allowed — this narrowly
overrides step 5 of the single-page procedure, which requires the user to ask
for reverse links first:

- adding a reverse `related[]` entry on an existing problem where the link is
  clearly useful — **that array only**;
- adding an `aliases[]` entry when a requested topic turns out to be a keyword
  variation of an existing page.

## 12. Testing

Run the full gate **once**, after the whole batch:

```
npm run typecheck
npm run lint
npm test
npm run build
```

Fix what fails and re-run. **Never delete, weaken, or work around a validation
rule to make a test pass** — the test is the editorial standard, so a failure
means the content is wrong. That includes the quality gate's thresholds and its
frozen baseline (§16).

While drafting, `npm run content:quality:deterministic` costs nothing and needs
no API key — use it freely. The full gate is per finished page, not per edit.

## 13. Database and deployment

The DB safety rules in step 7 of the single-page procedure remain in force.
Authority to generate content is **not** authority to mutate a database.

`DATABASE_URL` in `.env.local` currently points at a hosted Neon instance —
treat it as **production**. Re-read it each batch rather than trusting this line.

- Seed production only when the user explicitly says so in that request
  ("배포까지 해", "publish까지 해", "production seed까지 해").
- Never seed per page. One seed after every page is written and the full gate
  passes.
- Same for push and deploy: once, at the end of the batch.

## 14. Failure behaviour

If a topic cannot be sourced honestly, or its taxonomy or verdict cannot be
decided in good faith, do not invent content to publish it. Leave it as a draft
record or skip it, note it in the final report, and continue with the next topic.
One bad topic never stops the batch.

## 15. Final report

Do not narrate the work in chat while doing it, and never print the generated
content or the diff. Apply everything to files. At the end, report only:

```
<Topic>
→ taxonomy: <domain / object / system>
→ verdict: <verdict, urgency>
→ quality gate: <usefulness/naturalness/length, PASS or FAILED_REVIEW>
→ created | draft | skipped
→ <one line, only if there was a blocker>
```

Then the result of each of the four checks, one line each.

## 16. The content quality gate (`scripts/content-quality/`)

A page written in this mode is reviewed by a Claude API call from inside the
repository before it can be published. The gate does not read your drafting
reasoning, so it cannot be persuaded by it — which is the whole point of having
it separate from passes F and G.

### The Gold Set is frozen

`scripts/content-quality/baseline.json` holds the twenty hand-edited pages that
were published when the gate was built, plus the statistics derived from them.
Generated pages are measured against that fixed set forever. It does **not**
absorb new pages: if it recomputed itself over whatever is published today,
every generated page would shift the definition of normal and the standard would
drift toward whatever the model happens to produce. `npm run content:baseline`
reports drift; re-freezing needs `-- --write --force` and is a decision to
change the standard, not a maintenance chore.

### Commands

```
npm run content:baseline                  inspect the frozen Gold Set
npm run content:quality:deterministic     counting checks only — no API key, no cost
npm run content:quality -- <slug>         deterministic + Claude review
npm run content:quality:all               every published non-gold page
npm run content:quality:fix -- <slug>     review, rewrite failed fields, re-review, verify facts
```

Environment: `ANTHROPIC_API_KEY` (in `.env.local`, gitignored — never in
source, never in a commit, never printed). `CONTENT_JUDGE_MODEL`,
`CONTENT_REWRITE_MODEL` and `CONTENT_FACT_CHECK_MODEL` pick the model per stage;
names only are listed in `.env.example`.

### What is counted and what is judged

**Deterministic** (free, runs first, can stop a page before a token is spent):
section and total length against the Gold Set percentiles, section balance,
AI-tell and hedge density, abstract-noun density, sentence length, repeated
5-grams, near-duplicate sentence pairs. It fails a page only on values the
editor has never shipped, and blocks entirely on a missing block or a page at
half or double the corpus median.

**Claude API** (the editorial judgement): usefulness, naturalness, length
consistency, semantic repetition clusters, and a compression estimate. Then, in
`fix` mode, a targeted rewrite of only the faulted fields, a re-review, and a
fact-preservation comparison of before against after.

### The gates

`usefulness >= 90`, `naturalness >= 85`, `length >= 80`, each independently —
scores are never averaged, and the thresholds are applied locally rather than
trusting the model's own `final_pass`. Usefulness is the hard gate, set at the
Gold Set median so new content has to match the site's own pages.

Length is the loosest of the three deliberately: its real bound is the
deterministic comparison against the frozen percentiles, which is a measurement,
while the judge's length score is a second opinion that still leans toward
scoring verbosity. Compression is diagnostic only — the Gold Set itself measures
10-14%, so "some of this could be cut" is normal for good pages here.

**A page that does not pass is not published.** Leave it `status: 'draft'` and
report it as FAILED_REVIEW. Do not lower a threshold, do not edit the baseline,
and do not publish anyway because the failure looked stylistic.

The gate fails closed: a timeout, a refusal, a malformed response or a
fact-check violation all end as a non-pass. An unfinished review is never a pass.

### Calibration (judge prompt v1.1, measured 2026-08-29)

The thresholds are not invented — they come from running the judge over five
representative Gold Set pages. Full record, including the numbers and the
reasoning, is in `scripts/content-quality/CALIBRATION.md`.

Under v1.1 the Gold Set medians are **90 / 87 / 86** with a 12% compression
estimate, and four or five of the five sampled pages clear each bar. A generated
page scoring in the high 80s is therefore close to the corpus, not far from it.

The first version of the prompt failed all five (medians 81 / 76 / 84) and
scored length in the low 70s on pages the deterministic checker passes with zero
findings. **The lesson is the procedure, not the numbers:** when the judge fails
the hand-edited corpus, the prompt is the first suspect, not the corpus and not
the thresholds. Lowering a bar to fit a miscalibrated judge would have locked in
the wrong standard permanently.

Two standing rules:

- Never re-tune a threshold to make a specific page pass. Re-calibrate against
  the Gold Set sample, record it in `CALIBRATION.md` with a prompt version, and
  bump the prompt version if the rubric itself changed.
- The judge's findings on a Gold Set page are editorial opinion about existing
  published content. Do not act on them — this mode never edits published prose.

### Rewrites are proposals, not writes

`fix` mode never writes to `src/content`. It produces
`reports/content-quality/<slug>.revised.json` with field-level replacements,
which you apply to the content file yourself after reading them. A rewrite that
changed meaning is reported as FACT_CHECK_FAILED and must be discarded, not
applied selectively.

### Cost

Roughly $0.18 per review at Opus pricing (~9K in / 5K out tokens). Run the
deterministic check while drafting, and the full gate once the page is finished.
Never run the gate per edit, and never send the repository or the Gold Set prose
in full — the judge gets user-visible content, baseline statistics and two short
excerpts, and that is deliberate.
