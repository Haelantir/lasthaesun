# Can I Ignore It?

**Find out what happens if you do nothing.**

A database of decisions about things people wonder whether they can safely ignore.

The core unit of this site is **not an article — it is a decision**. A visitor who
searches "can I drive with low tire pressure" is not looking for background
reading; they are standing next to a car with a choice to make. So the page gives
the verdict first and the explanation ninth.

Currently published: one fully researched decision,
[`/cars/tires/low-tire-pressure/`](http://localhost:3000/cars/tires/low-tire-pressure/).

---

## Stack

| Concern | Choice | Why |
| --- | --- | --- |
| Framework | Next.js 16 (App Router) | Server-rendered content, ISR for a large catalogue |
| Language | TypeScript (strict, `noUncheckedIndexedAccess`) | |
| UI | React 19 server components | Exactly one component hydrates |
| Database | PostgreSQL | |
| ORM | Drizzle | Typed schema, generated SQL migrations |
| Validation | Zod | Enforces the publish gate on content |
| Styling | Two plain CSS files with design tokens | ~4KB gzipped, no build-time CSS framework |
| Tests | Vitest | |

No CSS framework, no component library, no icon package, no webfont. Icons are
four inline SVGs; typography is the system UI stack.

## Local setup

```bash
# 1. A PostgreSQL to talk to (any instance will do)
docker run -d --name ciii-pg \
  -e POSTGRES_PASSWORD=postgres -e POSTGRES_USER=postgres -e POSTGRES_DB=canignoreit \
  -p 5433:5432 postgres:16-alpine

# 2. Configuration
cp .env.example .env.local

# 3. Schema and content
npm install
npm run db:migrate
npm run db:seed

# 4. Run
npm run dev            # http://localhost:3000
```

### Environment variables

| Variable | Required | Purpose |
| --- | --- | --- |
| `DATABASE_URL` | yes | PostgreSQL connection string |
| `DATABASE_SSL` | no | Set to `require` for hosted Postgres (Neon, Vercel, Supabase, RDS) |
| `NEXT_PUBLIC_SITE_URL` | yes in production | Absolute origin for canonical URLs, sitemap and JSON-LD. **No domain is hard-coded anywhere else.** |
| `NEXT_PUBLIC_ANALYTICS_ENDPOINT` | no | Leave empty and every analytics hook compiles to a no-op |

## Commands

```bash
npm run dev          # development server
npm run build        # production build (does NOT need a database)
npm start            # serve the production build
npm run lint         # eslint
npm run typecheck    # tsc --noEmit
npm test             # vitest
npm run verify       # typecheck + lint + test + build

npm run db:generate  # regenerate SQL migrations after editing the schema
npm run db:migrate   # apply pending migrations
npm run db:seed      # push src/content into the database (idempotent)
npm run db:studio    # drizzle studio
```

---

## Content architecture

### Taxonomy: DOMAIN → OBJECT → SYSTEM → PROBLEM

```
Mobility  →  Cars  →  Tires  →  Low Tire Pressure
Home      →  Plumbing → Drains → Slow Drain
Appliances → Coffee Machines → Maintenance → Descaling
```

Four levels, deliberately. Three loses the grouping that keeps a large catalogue
navigable; five starts inventing folders. There is **no `Life` level** above
Mobility — every problem on this site is a life problem, so the word would carry
no information for a reader or a crawler.

The **System** level is what stops the site collapsing. Fifty problems can sit
directly under "Cars" and remain navigable. Five hundred cannot.

### Taxonomy is not URL structure

This is the single most important architectural decision here.

| | |
| --- | --- |
| Taxonomy | `Mobility > Cars > Tires > Low Tire Pressure` |
| Breadcrumb | `Home > Mobility > Cars > Tires > Low Tire Pressure` |
| URL | `/cars/tires/low-tire-pressure/` |

`Mobility` is a useful hub and a useful breadcrumb. It is not a useful URL
segment. So **every node stores its own `canonicalPath`** and no URL is ever
derived by concatenating ancestors.

Because a path therefore cannot be parsed to work out what it points at, all
content URLs are resolved by one indexed `UNION` lookup in
`src/lib/repository/routes.ts`, served by the single catch-all route
`src/app/[...path]/page.tsx`.

### Status and indexability are different things

| Field | Meaning |
| --- | --- |
| `status` | `draft` → `reviewed` → `published` → `archived`. Only `published` rows are routable. |
| `indexable` | Whether search engines should have it. |

They are separate because a hub can be genuinely useful to a human while still
being too thin to deserve a place in search results. Today the hubs are
`published, indexable: false` — live, linkable, `noindex, follow`, and absent
from the sitemap. Flip `indexable` when a hub actually helps a searcher.

A `draft` problem is a **reserved record**: it holds the name, the question and
the URL it will occupy, and nothing that would have to be invented. It is not
routable, not in the sitemap, not in search, and renders in "Other Tire Problems"
as plain text marked *Planned*.

### The publish gate

`problems` allows its editorial columns to be null, so a draft is not forced to
carry a fabricated verdict. Completeness is enforced instead by
`publishedProblemSchema` (`src/lib/content/schema.ts`), which runs in two places:

1. **`npm run db:seed`** — aborts the seed if anything marked `published` is incomplete.
2. **The repository** — a published-but-incomplete row 404s rather than rendering a blank verdict.

### The database stores semantics, never presentation

Rows hold `probably_not`, `high`, `danger`. `src/lib/verdict.ts` is the only
place that turns those into `PROBABLY NOT`, a tone and a glyph. **No row ever
contains a hex colour, and no component ever hard-codes a label.** Rewording a
verdict is an edit to one file, not a migration.

Accessibility follows from the same rule: every toned element also carries a text
label, so meaning survives greyscale, colour-blindness and screen readers.

---

## Adding the next problem

This is the workflow the whole architecture exists to enable. Adding the site's
50,000th decision touches **no route, no component and no layout code**.

1. **Create the content file.** Copy `src/content/problems/low-tire-pressure.ts`
   as a template — it is annotated block by block.

   ```ts
   // src/content/problems/nail-in-tire.ts
   export const nailInTire: ProblemSeed = {
     systemSlug: 'tires',
     slug: 'nail-in-tire',
     canonicalPath: '/cars/tires/nail-in-tire/',
     ...
   };
   ```

   If the problem is already a reserved draft (as `nail-in-tire` is), replace that
   entry rather than adding a second one — the slug must stay unique.

2. **Register it** in `src/content/index.ts`.

3. **Research the sources first, then write to them.** Never invent a URL, a
   statistic, or a safe distance or duration. If no authoritative figure exists,
   say so on the page — see `/methodology/` and `/sources/`.

4. **Publish it**: `status: 'published'`, `indexable: true`.

5. `npm run db:seed && npm test`

The page exists at its canonical path immediately. Any related-problem link
pointing at it **lights up automatically** — `RelatedProblems` renders a link when
the target is published and plain text when it is not, so no other content file
needs editing.

### If a new system or domain is needed

Add it to `src/content/taxonomy.ts` and set `status: 'published'` once it holds
real content. Give it a `singularName` ("Tires" → "Tire") — prose like "Other
**Tire** Problems" reads from that field, and English pluralisation is not
derivable.

---

## The rule that matters most at scale

> **Scaling this site means adding problems, not keyword permutations.**

These are the *same* problem and share one page:

- can I ignore low tire pressure
- can I drive with low tire pressure
- how long can I drive with low tire pressure
- is low tire pressure safe
- can I drive with the tire pressure light on

They are served by one canonical URL. The decision table (block 5) and the FAQ
(block 10) exist precisely to absorb those phrasings. Retired or alternate paths
go in `aliases`, which 308-redirect to the canonical page — they never become
records of their own.

These are *genuinely different* problems and each gets its own page: nail in
tire, sidewall crack, tire rotation, uneven wear, old tires, wheel vibration.

The test suite enforces this (`src/content/content.test.ts`): a slug like
`how-long-can-i-drive-with-low-tire-pressure` fails the build.

---

## The problem page: twelve blocks, fixed order

Defined once in `src/templates/ProblemPage.tsx`. Do **not** reorder this into a
conventional article.

| # | Block | Source |
| --- | --- | --- |
| 1 | Breadcrumb + H1 | taxonomy + `problems.h1` |
| 2 | Verdict card + 4 metrics | `problems` |
| 3 | Check my situation | `problem_scenarios` |
| 4 | What happens if you ignore it | `consequence_steps` |
| 5 | How long can I ignore it | `ignore_windows` |
| 6 | What should I do now | `action_steps` |
| 7 | Useful right now | `recommended_resources` |
| 8 | Stop ignoring it if… | `red_flags` |
| 9 | Why it matters | `problems.why_it_matters` |
| 10 | Common questions | `faqs` |
| 11 | Sources + review | `sources` |
| 12 | Related problems + search | `related_problems` |

The answer is block 2 and the explanation is block 9. That inversion is the
product.

## SEO

| Concern | Where |
| --- | --- |
| `<title>`, description, canonical, robots | `src/lib/seo/metadata.ts`, from stored fields |
| JSON-LD | `src/lib/seo/jsonld.tsx` — WebSite, Organization, BreadcrumbList, WebPage only |
| Sitemap | `src/app/sitemap.ts`, generated from `published AND indexable` rows |
| robots.txt | `src/app/robots.ts` |

The `<title>` and the `<h1>` are different strings on purpose, both stored: the
title is written for how people search, the H1 for the brand question. A test
asserts they never match.

**No `FAQPage` structured data.** Google restricted FAQ rich results to
government and health sites, so marking it up buys nothing and adds a
maintenance surface. Block 10 is ordinary semantic HTML.

## Rendering and caching

The problem route uses ISR: `revalidate = 3600` with an empty
`generateStaticParams()`. The first request for a URL renders and caches it;
everything after is served from cache. Publishing one problem costs one render,
not a 50,000-page rebuild — and `next build` needs no database connection.

## Deployment

Requires `DATABASE_URL` and `NEXT_PUBLIC_SITE_URL`. The build succeeds without a
database; the running app needs one. Run `npm run db:migrate && npm run db:seed`
against the production database after the first deploy.
