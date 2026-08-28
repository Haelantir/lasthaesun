'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import { VerdictChip } from '@/components/problem/VerdictCard';
import type { ProblemSummary } from '@/lib/repository/problems';

const CARD_WIDTH_PX = 240;
const CARD_GAP_PX = 20;
const SPEED_PX_PER_SEC = 26; // tuned by eye: not a blur, not a slideshow
const CARD_COUNT = 10;

/** Every h1 on the site is phrased "Can I Ignore X?" — that shared prefix
 *  gets its own line so the card reads as a two-part question instead of a
 *  wrapped sentence. Falls back to the whole title if a future h1 doesn't
 *  follow the convention. */
const CAN_I_IGNORE_PREFIX = 'Can I Ignore ';

function splitTitle(h1: string): { prefix: string | null; rest: string } {
  if (h1.startsWith(CAN_I_IGNORE_PREFIX)) {
    return { prefix: 'Can I Ignore', rest: h1.slice(CAN_I_IGNORE_PREFIX.length) };
  }
  return { prefix: null, rest: h1 };
}

function shuffled<T>(items: T[]): T[] {
  const copy = [...items];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = copy[i]!;
    copy[i] = copy[j]!;
    copy[j] = temp;
  }
  return copy;
}

/**
 * A continuously-scrolling row of decisions, re-shuffled every time someone
 * opens the site.
 *
 * The home page is ISR-cached (`revalidate = 3600` in page.tsx), so a
 * server-computed shuffle would be baked into the static HTML and handed out
 * identically to every visitor for up to an hour. Instead this starts from
 * the deterministic, unshuffled order — identical on server and first
 * client render, so hydration never mismatches — and re-rolls in an effect
 * that only runs on the client, after mount. That is the point where "every
 * time you open the site" actually lives, independent of the page cache.
 */
export function DecisionsCarousel({ problems }: { problems: ProblemSummary[] }) {
  const [picked, setPicked] = useState(() => problems.slice(0, CARD_COUNT));

  useEffect(() => {
    // Deliberate escape hatch: this exists specifically to make the client's
    // first post-hydration render diverge from the server's, which is what
    // "randomised every time you open the site" requires when the page
    // itself is ISR-cached. Not a data sync — a one-time reroll.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPicked(shuffled(problems).slice(0, CARD_COUNT));
    // Deliberately mount-only: this is "once per page load", not "once per
    // time the `problems` prop happens to get a new reference".
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (picked.length === 0) return null;

  const duration = Math.max(14, (picked.length * (CARD_WIDTH_PX + CARD_GAP_PX)) / SPEED_PX_PER_SEC);

  return (
    <div className="decisions-marquee">
      <div className="decisions-marquee__track" style={{ animationDuration: `${duration}s` }}>
        <DecisionCardGroup problems={picked} />
        {/* A visual duplicate so the scroll can loop seamlessly at -50%.
            Hidden from assistive tech and out of tab order — it is the same
            content, not additional content. */}
        <DecisionCardGroup problems={picked} ariaHidden />
      </div>
    </div>
  );
}

function DecisionCardGroup({ problems, ariaHidden }: { problems: ProblemSummary[]; ariaHidden?: boolean }) {
  return (
    // `inert` (not used here) would also block pointer clicks, not just
    // keyboard focus and screen readers — and half of every scroll cycle,
    // the cards actually sitting in the viewport are this "duplicate" copy.
    // So: aria-hidden to keep screen readers from announcing it twice, plus
    // tabIndex={-1} per link to keep it out of Tab order, but mouse clicks
    // still work on whichever copy happens to be on screen.
    <ul className="decisions-marquee__group" aria-hidden={ariaHidden}>
      {problems.map((problem, index) => {
        const { prefix, rest } = splitTitle(problem.h1);
        return (
          <li key={`${problem.id}-${ariaHidden ? 'dup' : 'real'}-${index}`}>
            <Link className="decision-card" href={problem.path} tabIndex={ariaHidden ? -1 : undefined}>
              <span className="decision-card__title">
                {prefix ? (
                  <>
                    <span className="decision-card__title-prefix">{prefix}</span>
                    <br />
                  </>
                ) : null}
                <span className="decision-card__title-rest">{rest}</span>
              </span>
              <VerdictChip verdict={problem.verdict} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
