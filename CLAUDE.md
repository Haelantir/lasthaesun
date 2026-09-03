@AGENTS.md

# The content workflow

Content is written **outside this repository** and imported mechanically. The
loop:

1. `npm run content:prompt` — regenerate `docs/content-authoring-prompt.txt`.
   It is generated from repository state (published systems, taken slugs,
   reserved slugs), so it goes stale the moment a page or a taxonomy node is
   added. Regenerate it after every import and every taxonomy change — a stale
   prompt is how a writer picks a colliding path or a system that no longer
   describes the site.
2. The writer produces a `.txt` or `.md` in the fixed field format
   (`SYSTEM:`, `SLUG:`, `SCENARIOS:` …).
3. `npm run content:import -- <file-or-directory>` — parse, validate, write.
4. `npm run typecheck && npm run lint && npm test && npm run build`
5. Seeding and deploying are separate, explicit decisions — see **Database and
   deployment** below.

If the writer answers **"이 토픽에 맞는 system이 없다"**, nothing is broken: the
prompt tells it to refuse rather than force-fit, and the topic needs a taxonomy
node that does not exist yet. Decide whether it deserves one (see **Taxonomy**)
instead of bending it into a neighbouring system.

# The compatibility section ("Can I Use It With…")

A second engine at `/use/`, answering a different question: not "may I leave
this alone?" but "do these two things go together?". It shares the design
system and the honesty rules and shares no content with the decision pages.

```
npm run content:compat                  subjects-compat.txt -> write -> verify
npm run content:compat -- --generate    stop after writing incoming-compat/
npm run content:compat -- --import      skip generation, use the drafts there
```

Write pairings into `subjects-compat.txt` however they come out — one per line,
the connective word (`in` / `on` / `with` / `plugged into` / `washed in` /
`stored in`) is what makes it parse. Indented lines beneath are angle hints, not
findings. `Can I Use X in a Y?` and `X in a Y` are read identically.

`scripts/compat-batch/run.ts` then calls the same pinned writer the decision
pages use (`CONTENT_WRITER_MODEL`, `scripts/content-batch/writer.ts`) against
`docs/compat-authoring-prompt.txt`, which carries the anti-AI-voice rules from
the authoring prompt's §2-2 plus the tics specific to this format. **Do not
write this prose yourself and do not edit what comes back** — the same rule as
imported content mode.

Differences from `content:batch`, all deliberate:

- **Every cited URL is requested before anything is written.** A compatibility
  answer rests on manufacturer guidance, and a model that skipped searching
  produces plausible URLs that 404. A dead citation fails the pairing.
- **The publish gate is different.** There is usually no government or
  regulation source for "foil in an air fryer", so the decision pages' gate does
  not apply here. Manufacturer and standards-body sources are primary instead.
  Everything else holds: no invented numbers, no guessed URLs, no fabricated
  reviewer.
- **No database.** Records are `src/content/compat/pairings/<subject>--<target>.ts`
  registered in `src/content/compat/index.ts`, rendered by
  `src/templates/CompatPage.tsx`. Nothing is seeded.

Like the other pipeline it stops at a verified working tree: no commit, no push,
no deploy.

The page unit is the ENTITY, not the pair. `/use/<entity>/` is an index of what
has been written; a pair earns `/use/<subject>/<target>/` because its answer
branches. Never build a broad compatibility table out of rows nobody sourced —
that is the failure in `docs/content-architecture.md` §4 wearing a new hat.

# Imported content mode

When you are handed completed content, you:

- **DO NOT rewrite it.** Not a sentence, not a word, not "just tightening it".
- **DO NOT research it.** The sources in the text are the sources.
- **DO NOT run the LLM judge.** No `content:quality` in this path.
- **DO NOT alter editorial prose** to make a check pass. If a check fails,
  report the failure and the exact field; the person who wrote the text fixes
  the text.

Writing content in-repo is no longer a default mode. That procedure is archived
in `docs/content-writing-mode.md` and must be asked for explicitly.

## The importer

```
npm run content:import -- <file-or-directory> --dry-run    plan only, writes nothing
npm run content:import -- <file-or-directory>              parse, validate, write
npm run content:import:check -- <file-or-directory>        same as --dry-run
```

Flags: `--replace` to overwrite an existing problem, `--force` (with
`--replace`) to overwrite one that is currently published, `--create-taxonomy`
to create the hub records a new canonical path needs.

A directory is imported in filename order. **No Anthropic API call happens
anywhere in this path** — the importer runs with `ANTHROPIC_API_KEY` unset and
is tested that way.

What it guarantees:

- **Deterministic.** Same input, same `.ts` file, every time.
- **Atomic batches.** Every file is parsed, validated and collision-checked
  before any file is written. One bad file in ten means nothing is written.
- **Validation before writing.** Required fields, every enum, canonical path
  shape and uniqueness, alias collisions, source URLs (`null` allowed, guesses
  not), at least one government or regulation source, the editorial caps from
  `content.test.ts`, and the varchar limits from `src/lib/db/schema.ts`.
- **Overwrite protection.** An existing slug fails by default. `--replace`
  allows a draft; `--replace --force` allows a published page; the frozen Gold
  Set in `scripts/content-quality/baseline.json` is refused under every flag.
- **Taxonomy is reused, not multiplied.** Placement comes from the canonical
  path. A missing hub is an error unless `--create-taxonomy` is passed, and a
  near-duplicate name ("alarm" where "alarms" exists) is always an error asking
  a human to choose.
- **Output reads as hand-authored.** Same block comments, same key order,
  multi-paragraph prose emitted as an array `.join('\n\n')`. Once imported, a
  file is edited like any other.

The importer never seeds, commits, pushes or deploys. It stops at the working
tree.

**Input format gotcha:** list items must start with a `- ` or `* ` bullet on the
item's first key (see `docs/content-authoring-prompt.txt` §275). Without the
bullet the parser silently reads `SCENARIOS`, `SOURCES` etc. as empty and the
import fails on "is required and missing". Adding the bullets is a mechanical
format fix, not a prose edit — it is allowed. Rewriting the words is not.

# When an import fails

The importer names the field. These are the rules behind the common failures.

## Enums — exact values

Never invent a value. Labels and colours live only in `src/lib/verdict.ts`;
`whyItMatters` prose may say "high risk" in English, but the stored `safetyRisk`
must be the enum value `high`.

| Type | Values |
|---|---|
| `ContentStatus` | `draft`, `reviewed`, `published`, `archived` |
| `VerdictLevel` | `safe_to_ignore`, `can_wait`, `probably_not`, `do_not_ignore` |
| `UrgencyLevel` | `low`, `medium`, `high`, `critical` |
| `RiskLevel` | `low`, `moderate`, `high`, `severe` |
| `DifficultyLevel` | `easy`, `moderate`, `hard`, `professional` |
| `SeverityLevel` | `info`, `caution`, `warning`, `danger` |
| `SourceKind` | `government`, `regulation`, `manufacturer`, `standards_body`, `industry`, `academic`, `other` |
| `ResourceKind` | `tool`, `part`, `service`, `guide` |
| `RelationshipType` | `sibling`, `escalation`, `cause`, `follow_up`, `related` |

## The publish gate

To be `status: 'published'` a row needs all of: `name`, `h1`, `seoTitle`,
`metaDescription`, `canonicalPath`, `verdict`, `urgency`, `safetyRisk`,
`fixDifficulty`, `canIUseItLabel`, `canIUseItQuestion`, `shortAnswer`,
`whyItMatters`. Enforced in three places (importer, seed script,
`content.test.ts`).

`canonicalPath` must match `/^\/(?:[a-z0-9-]+\/)*$/` — lower-case,
slash-delimited, trailing slash — and be unique across every problem, alias and
taxonomy node.

## Honesty rules asserted against every published record

- **No invented distance/duration figures in free text.** A regex bans any
  `\d+ (miles|km|hours|minutes|...)` pattern outright, with no exception for a
  cited figure. Never restructure the regex, the test, or the field the text
  lives in to smuggle a number past it.
- **`sources[].url`** is either `null` or a real `https://` URL — never a guess,
  never an `example.com` domain.
- **At least one `government` or `regulation` source** per published problem.
- **`reviewScope`** may not claim a fabricated reviewer credential.
- **`resources[].affiliate` must be `false` and `resources[].url` must be
  `null`** — the site ships no monetisation yet.
- **`seoTitle` and `metaDescription` unique across published problems**;
  `seoTitle` ≠ `h1`, ≤ 75 chars; `metaDescription` ≤ 170 chars.
- **`related[].anchorText`** must be genuine anchor text (>10 chars, not "click
  here" / "read more" / "learn more").

## Cross-references

`related[].slug` and `actions[].destinationProblemSlug` must resolve to a record
that exists somewhere in `problems` — draft or published. The seed script
**throws and aborts the whole seed** otherwise, and `content.test.ts` fails with
`unknown related problem "..."`. Pointing at a draft is fine: it renders as
plain text ("Planned") and becomes a link the moment that target is published,
with no code or content change.

# Taxonomy

`src/content/taxonomy.ts` is DOMAIN → OBJECT → SYSTEM. Read it rather than
trusting any list written down elsewhere.

**A problem under a still-draft ancestor renders at its own URL but every
breadcrumb link 404s**, because `resolveRoute()` only resolves hub nodes where
`status = 'published'`. So publishing a problem means its whole ancestor chain
must already be published.

When a topic genuinely needs a new node:

- **Reuse before creating.** Only mint a system that can hold several future
  problems — never one for a single page.
- **Check for near-duplicates** across the whole file first ("alarm" vs
  "alarms").
- **System slugs must be globally unique.** `scripts/seed.ts` resolves
  `systemSlug` through a single flat `Map`, so a slug reused under a different
  object silently collides. Generic names already taken include `noises`,
  `drainage`, `frost-and-ice`, `jams-and-clogs`, `gas-burners`.
- **URL rules are authored, not derived.** A domain slug need not match its path
  (`tech` → `/technology/`), and a level can be omitted entirely (`cars` sits
  under `mobility` but its path is `/cars/`). Follow the sibling nodes.
- A problem's `canonicalPath` is its system's `canonicalPath` + `slug` + `/`.
- A newly published hub needs `hubHeading`, `seoTitle`, `metaDescription`,
  `shortDescription`, `sortOrder`, `status: 'published'`, `indexable: false`.
  Hubs stay `indexable: false` until they hold enough pages to be worth ranking.
- `singularName` renders as "Other **{label}** Problems You Might Be Ignoring"
  and "All **{label}** Problems" — pick a word that reads in those sentences.
- **Publish the whole ancestor chain** (domain → object → system).
- **Add a `planned-<system>-problems.ts`** of reserved drafts (name + h1 + path
  only, `status: 'draft'`, `indexable: false`, and **no** verdict or
  `shortAnswer` — `content.test.ts` asserts drafts stay empty) and register it
  in `index.ts`, so `related[]` has real targets to point at.
- Regenerate the authoring prompt afterwards (`npm run content:prompt`).

## The reserved-slug trap

Many topics already exist as bare drafts in the `planned-*.ts` files. When a
real page is imported for one of them, **remove its entry from that file's
`planned` array.** Order in the `problems` array of `src/content/index.ts`
decides the winner: `scripts/seed.ts` upserts by `[systemId, slug]`, last write
wins, and the `...planned*` spreads sit at the end — so a leftover bare draft
silently overwrites the real page back to an empty draft on the next seed.

# Keyword variations are aliases, not new problems

If a topic is the same decision in different words ("how long can I drive with
X" vs "can I drive with X"), it belongs in the existing problem's `aliases[]`
array (308 → canonical), not as a new record. A test asserts no alias ever
collides with a real canonical path. A new record is for a genuinely different
decision — worked examples in `docs/content-architecture.md` §4.

Adding an `aliases[]` entry to an existing content file is allowed. Editing that
file's prose, verdict, scenarios or FAQ is not.

# What never changes

Adding or importing a problem is a data change. Do not edit:

- `src/templates/*`, `src/components/**`
- `src/app/[...path]/page.tsx`, `src/app/sitemap.ts`, `src/app/robots.ts`
- `src/lib/repository/*`, `src/lib/seo/*`, `src/lib/verdict.ts`, `src/lib/site.ts`
- `src/lib/db/schema.ts`, `src/lib/content/schema.ts`
- `src/app/globals.css`, `src/app/problem.css`
- the prose of any existing content file

If the task seems to require one of these, stop and say so — it has drifted from
"add content" into "change the template/schema", which needs explicit sign-off.

# Database and deployment

**Authority to import content is not authority to mutate a database.**

`DATABASE_URL` in `.env.local` points at a hosted Neon instance — treat it as
**production**. Re-read it each time rather than trusting this line.

- Seed production only when the user explicitly says so in that request
  ("배포까지 해", "publish까지 해", "production seed까지 해").
- Never seed per page. One seed after the batch is imported and the checks pass.
- Same for push and deploy: once, at the end.
- If `DATABASE_URL` is missing, ambiguous, or there is more than one candidate
  env file: do not seed. Say exactly what it resolves to and ask.

Pushing to `main` auto-deploys via Vercel, but that only ships code — content
reaches readers only once the seed has run against whichever `DATABASE_URL`
serves that deployment.

## Warming the cache after a deploy

```
npm run warm                        walk every url, then prove it went warm
npm run warm -- --limit=20          smoke test
npm run warm -- --concurrency=8     faster, heavier on Neon
```

`.github/workflows/warm.yml` runs this automatically on Vercel's
`deployment_status` event, so in normal use nobody types it. Run it by hand
after a seed if you want the new pages warm before the next deploy, or from the
Actions tab.

Both dynamic routes return `[]` from `generateStaticParams()`, so nothing is
rendered at build time and a page is first rendered when someone asks for it.
That first request pays the render plus its Neon round-trip — measured at
670-940ms against 40-95ms once cached. On a site with no traffic yet the
someone is Googlebot, which throttles crawl rate against what it measures. That
is what drove the crawl-stats average from 141ms to 313ms over the first week
while the page count grew, with 260 HTML fetches against 303 URLs.

**What is cold is new pages, not every page after every deploy.** The first full
run found `MISS 194 / STALE 62 / HIT 138` about two hours after a deploy — far
too many warm entries for a cache that had just been emptied, so the ISR store
evidently survives a deployment to a useful degree. The 194 were pages nothing
had ever requested since they were published. Treat a warm as owed to new
content rather than to every push. If a code-only deploy ever reports hundreds
of MISSes, that assumption was wrong and this paragraph needs rewriting.

`WARM_ORIGIN` names the target — `.env.local` locally, set inline in the
workflow for CI, because a public origin is not a secret. It is separate from
`NEXT_PUBLIC_SITE_URL` because that one is `localhost:3000` for `next dev`; the
warmer refuses to run against localhost rather than silently doing nothing.

The run exits non-zero if any URL answers anything but 200, so it doubles as a
link check over the sitemap plus every hub linked from `/`, `/browse/` and
`/use/`. `/search/` is excluded — it is `force-dynamic` and has no cache entry
to fill.

# The quality pipeline

`scripts/content-quality/` (judge, rewrite, fact-check, `CALIBRATION.md`) is
intact and independent, but **not part of the import path**. Run it only when
asked:

```
npm run content:quality:deterministic     counting checks only — no API key, no cost
npm run content:quality -- <slug>         deterministic + Claude review (~$0.18)
```

Never lower a threshold, edit `baseline.json`, or publish a page that did not
pass. Details and calibration history: `docs/content-writing-mode.md` §16.

# Further reference

- `docs/adding-a-problem-by-hand.md` — how a URL becomes a page, the full
  `ProblemSeed` shape, what the SEO layer does automatically, and the manual
  procedure for writing a `.ts` file by hand.
- `docs/content-writing-mode.md` — the archived in-repo writing mode and the
  quality gate in full.
- `docs/content-architecture.md` — the editorial architecture (§4 new record vs
  alias, §6 what the site deliberately does not do).
