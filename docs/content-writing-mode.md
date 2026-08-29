# Writing content in-repo (archived — not the default mode)

This is the batch content-writing procedure that was in `CLAUDE.md` until
content authoring moved out of the repository. It is no longer a default mode:
content now arrives as finished text and is imported mechanically
(`npm run content:import`), and the LLM judge is not part of that path.

Follow this file only when the user explicitly asks for content to be written
in-repo. Everything in it still describes the real scripts and thresholds; only
its status changed.

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

