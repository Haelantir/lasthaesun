# Content architecture

Notes for anyone extending this site. The README covers setup and the workflow
for adding a problem; this covers the reasoning, so the decisions survive contact
with a future contributor who did not make them.

---

## 1. The unit is a decision, not an article

A conventional maintenance article opens with background, explains the mechanism,
lists risks, gives advice, and closes with an FAQ. Almost nobody searching has a
background question. They have a decision to make, usually right now, often
standing next to the thing.

So the page order is inverted: **verdict at block 2, explanation at block 9.**

This is also the site's defence against being summarised away. An article that
Google can compress into an AI overview has nothing left to offer. A verdict plus
a situation checker plus a consequence chain plus a decision table plus a related
problem graph gives someone a reason to arrive even after they have read a
summary.

**Do not** reorder the twelve blocks into article shape. **Do not** add an SEO
introduction above the verdict. **Do not** put advertising above the verdict.

---

## 2. Roughly 70% of the template is data

Which is the point. One thousand pages should be one thousand *records*, not one
thousand designs.

The practical test for any change: **could the next problem be added with only a
content file?** If a change to `ProblemPage.tsx` would be needed to publish a
plumbing problem, the change belongs in the data model instead.

Two examples of this rule being applied during the first build:

- The block 8 heading was hard-coded as `"Stop Driving If You Notice:"`. Correct
  for a car, nonsense for a slow drain. It became `problems.red_flags_heading`.
- Prose read `"Other ${system.name} Problems"`, which produced "Other Tires
  Problems". English pluralisation is not derivable, so `systems.singular_name`
  stores the attributive form.

---

## 3. Taxonomy vs URL

Store `canonicalPath` on every routable node. Never build a URL by joining
ancestors.

```
taxonomy:   Mobility > Cars > Tires > Low Tire Pressure
breadcrumb: Home > Mobility > Cars > Tires > Low Tire Pressure
url:        /cars/tires/low-tire-pressure/
```

A URL is an address, not an org chart. `Mobility` earns a hub and a breadcrumb
because both help someone orient; it does not earn a path segment, because
nobody's understanding of the page improves by carrying it around.

The cost of this freedom is that a path cannot be parsed to determine what it
points at. That cost is paid once, in `src/lib/repository/routes.ts`: a single
`UNION` of four unique-index probes. It is O(1) at any table size.

---

## 4. Problem expansion, not keyword expansion

The failure mode that kills programmatic sites is minting a page per search
phrasing. It produces thousands of near-duplicates competing with each other, and
it is exactly what "scaled content abuse" describes.

**One problem = one canonical page.**

| Same problem (one page) | Different problems (a page each) |
| --- | --- |
| can I ignore low tire pressure | low tire pressure |
| can I drive with low tire pressure | nail in tire |
| how long can I drive with low tire pressure | cracked sidewall |
| is low tire pressure safe | tire rotation |
| can I drive with the tire pressure light on | uneven wear |

The consolidation happens *inside* the page:

- **Block 5**, the decision table, answers "how long", "is it safe" and "when do
  I stop" in six rows.
- **Block 10**, common questions, absorbs the remaining long-tail phrasings.
- **`aliases`** 308-redirect alternate paths to the canonical one.

The useful question when proposing a new page is not *"do people search this
differently?"* but *"does this have a different answer?"* A nail in the tire has
a different answer. "How long can I drive on it" does not — it is a row in a
table on a page that already exists.

`src/content/content.test.ts` enforces this. A slug that is a phrasing of an
existing problem fails the suite.

---

## 5. Honesty rules

These are not editorial preferences. On a safety topic they are the product.

**Never invent a number.** No safe distances, durations, or thresholds. The most
common question on this page is "how long can I drive on it", and the most common
answer elsewhere is a fabricated one. Where an authoritative figure exists (the
TPMS 25% threshold; the 0.6% fuel-economy effect), cite it. Where none exists,
say there is no honest number and explain what to judge instead. A test scans all
free text for unsupported distance and duration claims.

**Never invent a URL.** `sources.url` is nullable for exactly this reason. A
source with no verifiable public address is listed without a link and marked as
such. Every URL currently in the repository was opened and checked.

**Never invent a reviewer.** Pages state when they were reviewed and what the
review covered. No fabricated names, no fabricated credentials. A test asserts
`reviewScope` carries no human credential.

**Never fake scale.** No placeholder pages, no dummy counts, no six related links
that 404. If one problem is published, the site says one problem is published.
Draft records exist so the related-problem graph is real, and they render as
plain text until they are genuinely finished.

---

## 6. Monetisation

The intended flow is **Problem → Decision → Solution → Product**, in that order.
Block 7 sits immediately after the action steps, which is where intent is
highest: the reader has just been told to check a pressure and add air.

The data model is monetisation-ready and the site is monetisation-free.
`recommended_resources` already has `url`, `affiliate` and `status`; both current
rows have `url: null` and render as informational cards with no outbound link.
Adding real destinations later is a content change — `UsefulResources.tsx` does
not change.

What must not happen: advertising above the verdict, interstitials, pop-ups, fake
sale badges, countdown timers. The verdict comes before the money, always.

---

## 7. Accessibility invariants

- **Colour is never the only signal.** Every toned element carries a text label.
  `src/lib/verdict.ts` cannot return a presentation without one, and a test
  asserts it.
- **Glyph shapes differ per tone** (tick / clock / triangle / octagon), so icons
  still distinguish states in greyscale.
- **Native controls.** The situation checker is a `fieldset` of radios. Arrow
  keys, space, label association and screen-reader grouping come free and
  correct.
- **The decision table restacks** below 40rem rather than scrolling sideways, and
  states its ARIA roles explicitly because `display: block` discards native table
  semantics.

---

## 8. Performance

- One client component on the whole site: `SituationChecker`. Everything else is
  server-rendered.
- No CSS framework, no component library, no icon package. CSS is ~4KB
  gzipped; icons are four inline SVGs.
- One deliberate webfont: Atkinson Hyperlegible Next, loaded via
  `next/font/google` in `src/app/layout.tsx`. It is self-hosted at build
  time (no request to fonts.googleapis.com) and loaded as a single variable
  file (`weight: 'variable'`) covering the whole 200–800 range, so it costs
  one font request for every weight the site uses rather than one per
  static weight. It exists because it is designed for readers with low
  vision — directly on-mission for a site whose whole product is a safety
  verdict — and the system-UI stack remains the fallback in `--font-sans`
  (`globals.css`) if the font ever fails to load.
- Site search is one indexed Postgres full-text query. `problems_search_idx` is a
  GIN index over exactly the expression the query builds — **if you change one,
  change the other character for character**, or it silently becomes a table
  scan.
- ISR rather than build-time generation of every page, so publishing one problem
  does not rebuild the catalogue.
