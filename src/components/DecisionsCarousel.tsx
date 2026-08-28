'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

import { VerdictChip } from '@/components/problem/VerdictCard';
import type { ProblemSummary } from '@/lib/repository/problems';

/**
 * Per-problem illustrations, by convention at `public/problems/<slug>.png`.
 * A published problem with no entry here just doesn't appear in the
 * carousel — no broken image request, no generic placeholder standing in
 * for art that doesn't exist yet.
 */
const ILLUSTRATED_SLUGS = new Set([
  'low-tire-pressure',
  'nail-in-tire',
  'water-dripping-from-exhaust',
  'high-rpm-after-cold-start',
  'check-engine-light',
  'squeaky-brakes',
  'tpms-warning-light',
  'oil-leak',
  'white-smoke-from-exhaust',
  'small-windshield-chip',
]);

const CARD_WIDTH_PX = 240;
const CARD_GAP_PX = 20;
const SPEED_PX_PER_SEC = 26; // tuned by eye: not a blur, not a slideshow

function slugFromPath(path: string): string {
  const segments = path.split('/').filter(Boolean);
  return segments[segments.length - 1] ?? '';
}

function withIllustration(problems: ProblemSummary[]): ProblemSummary[] {
  return problems.filter((p) => ILLUSTRATED_SLUGS.has(slugFromPath(p.path)));
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
  const [picked, setPicked] = useState(() => withIllustration(problems).slice(0, 10));

  useEffect(() => {
    // Deliberate escape hatch: this exists specifically to make the client's
    // first post-hydration render diverge from the server's, which is what
    // "randomised every time you open the site" requires when the page
    // itself is ISR-cached. Not a data sync — a one-time reroll.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPicked(shuffled(withIllustration(problems)).slice(0, 10));
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
        const slug = slugFromPath(problem.path);
        return (
          <li key={`${problem.id}-${ariaHidden ? 'dup' : 'real'}-${index}`}>
            <Link className="decision-card" href={problem.path} tabIndex={ariaHidden ? -1 : undefined}>
              <span className="decision-card__image">
                <Image src={`/problems/${slug}.png`} alt="" width={600} height={450} sizes="240px" />
              </span>
              <span className="decision-card__title">{problem.h1}</span>
              <VerdictChip verdict={problem.verdict} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
