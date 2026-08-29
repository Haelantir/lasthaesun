# Judge calibration record

Why this file exists: a score is only meaningful next to the standard that
produced it. When the judge prompt changes, the numbers below stop being
comparable, so each calibration run is recorded against a prompt version.

---

## 2026-08-29 — judge prompt v1.0 → v1.1

### Sample

Five Gold Set pages chosen to spread across length, safety risk, verdict and
domain — not the whole corpus, to keep the run cheap.

| Page | Words | Verdict | Safety risk | Why it was picked |
|---|---|---|---|---|
| `low-tire-pressure` | 1223 | probably_not | high | shortest page in the corpus |
| `water-dripping-from-exhaust` | 1468 | safe_to_ignore | low | normal phenomenon, low risk |
| `oil-leak` | 1611 | probably_not | moderate | median length |
| `freezer-burn` | 1726 | safe_to_ignore | low | long, low risk, non-vehicle domain |
| `warm-electrical-outlet` | 1978 | do_not_ignore | high | longest, highest risk |

Judge only. No rewrite, no content edits.

### v1.0 — the prompt was wrong, not the corpus

| Page | Usefulness | Naturalness | Length | Compression | Unnecessary clusters |
|---|---|---|---|---|---|
| low-tire-pressure | 77 | 83 | 72 | 20% | 4 of 5 |
| water-dripping-from-exhaust | 81 | 74 | 86 | 22% | 3 of 5 |
| oil-leak | 88 | 88 | 94 | 8% | 2 of 5 |
| freezer-burn | 83 | 76 | 84 | 20% | 3 of 5 |
| warm-electrical-outlet | 81 | 72 | 70 | 27% | 3 of 6 |
| **median** | **81** | **76** | **84** | **20%** | 3 |

0 of 5 passed. (`slow-drain`, judged separately under v1.0, scored 77 / 78 / 87
at 22% — consistent with this.)

Lowering the thresholds to fit these numbers would have been the wrong move. The
scores were wrong, for three reasons visible in the judge's own written findings:

1. **No anchor for what a score means.** Nothing told the judge that the pages it
   was reading *are* the standard, so "I can suggest improvements" collapsed into
   "this is failing". Every finding it raised was a legitimate improvement; none
   of them described a reader hitting a wall.
2. **Length was scored as verbosity.** `warm-electrical-outlet` scored 70 and
   `low-tire-pressure` 72 on pages the deterministic checker passes with **zero**
   findings against the frozen percentiles. The dimension was duplicating the
   compression estimate instead of measuring consistency with the corpus.
3. **Coverage gaps were deducted from usefulness** ("the freed space should go to
   what is genuinely missing"), which is the completeness reward the rubric
   elsewhere forbids.

A fourth, smaller effect: repetition clusters were inflated by counting the page
template doing its job. Every page here restates its pivot condition in the
situation checker, the decision table and the red flags, because each block is
entered by a different reader at a different moment.

### v1.1 changes

- Added a scoring-band definition anchored to the corpus: the supplied Gold Set
  excerpts are stated to be the 90-95 band, and 90 is defined as
  production-ready rather than near-flawless. Explicit instruction not to deduct
  for improvements one can imagine, only for defects a reader would hit.
- Rewrote the LENGTH rubric to measure consistency with the Gold Set range, with
  wordiness explicitly assigned to naturalness and compression instead. The
  deterministic length verdict is now passed into the prompt, so an in-range page
  with no findings starts at 90+.
- Added: a question the page never raises is not a hole in it.
- Sharpened the repetition rule — the pivot condition appearing across blocks is
  the format working; an FAQ replaying a scenario is not.
- Added a self-check before returning: a score in the 70s is a claim that a
  reader would hit several real problems, so verify the issues actually say that.

### v1.1 — same five pages, same content

| Page | Usefulness | Naturalness | Length | Compression | Unnecessary clusters |
|---|---|---|---|---|---|
| low-tire-pressure | 87 | 89 | 78 | 12% | 2 of 4 |
| water-dripping-from-exhaust | 90 | 87 | 86 | 12% | 1 of 4 |
| oil-leak | 93 | 90 | 94 | 10% | 1 of 5 |
| freezer-burn | 91 | 87 | 92 | 12% | 2 of 5 |
| warm-electrical-outlet | 90 | 87 | 81 | 14% | 2 of 6 |
| **median** | **90** | **87** | **86** | **12%** | 2 |
| **mean** | **90.2** | **88.0** | **86.2** | **12%** | |
| **min** | **87** | **87** | **78** | **10%** | |

### Thresholds adopted

| Dimension | Threshold | Gold median | Gold min | Gold pages passing |
|---|---|---|---|---|
| Usefulness | **90** | 90 | 87 | 4 of 5 |
| Naturalness | **85** | 87 | 87 | 5 of 5 |
| Length | **80** | 86 | 78 | 4 of 5 |
| Compression | diagnostic only (15% reference) | 12% | 10% | — |

Reasoning:

- **Usefulness stays at 90** and remains the strongest gate. It sits exactly at
  the corpus median, so new content has to match the site's own pages. The one
  Gold Set page below it (`low-tire-pressure`, 87) is the corpus's shortest, with
  four FAQs against a median of ten — a weakness the deterministic checker also
  warns about. One page of five falling short of the median is the threshold
  working, not the corpus failing.
- **Naturalness stays at 85**, two points under the Gold Set minimum. Raising it
  to the observed 87 would put the entire corpus exactly on the line, and judge
  scores move a few points run to run; that would make pass/fail a coin toss.
- **Length drops from 85 to 80.** Its hard bound is the deterministic comparison
  against the frozen percentiles, which is a measurement rather than an opinion;
  the judge's score is a second view on proportion and still leans toward
  scoring verbosity even after v1.1. At 85 two of five Gold Set pages would fail
  on a dimension their measurements pass cleanly.
- **Compression stays diagnostic.** The Gold Set's own range is 10-14%, so
  "some of this could be cut" is normal for good pages here and is not evidence
  of a defect. `CONTENT_COMPRESSION_ENFORCE=true` can turn it into a gate later.

No Gold Set content was edited. Total API cost for the calibration: **$1.58**
(10 judge calls, ~$0.16 each).
