'use client';

import Link from 'next/link';
import { useEffect, useRef, useState, type MouseEvent as ReactMouseEvent, type PointerEvent as ReactPointerEvent } from 'react';

import { ToneIcon } from '@/components/ui/ToneIcon';
import { verdictPresentation } from '@/lib/verdict';
import type { ProblemSummary } from '@/lib/repository/problems';

const SPEED_PX_PER_SEC = 26; // tuned by eye: not a blur, not a slideshow
const CARD_COUNT = 20;
// A drag shorter than this is treated as a click-through to the card, not a swipe.
const DRAG_CLICK_THRESHOLD_PX = 6;

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
 * opens the site, and draggable — mouse or touch — so someone who wants a
 * card that's already scrolled past doesn't have to wait for the loop.
 *
 * The home page is ISR-cached (`revalidate = 3600` in page.tsx), so a
 * server-computed shuffle would be baked into the static HTML and handed out
 * identically to every visitor for up to an hour. Instead this starts from
 * the deterministic, unshuffled order — identical on server and first
 * client render, so hydration never mismatches — and re-rolls in an effect
 * that only runs on the client, after mount. That is the point where "every
 * time you open the site" actually lives, independent of the page cache.
 *
 * The scroll position is driven from a rAF loop rather than a CSS
 * `animation`, because a CSS animation can't be handed off to and back from
 * a pointer drag mid-flight without a jump. The loop just advances (or, if a
 * pointer is down, doesn't advance) a single `offsetRef` and paints it as a
 * `transform`; dragging reduces to "let the pointer move that same number."
 */
export function DecisionsCarousel({ problems }: { problems: ProblemSummary[] }) {
  const [picked, setPicked] = useState(() => problems.slice(0, CARD_COUNT));
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const groupWidthRef = useRef(0);
  const pausedRef = useRef(false);
  const draggingRef = useRef(false);
  const pointerStartXRef = useRef(0);
  const dragStartOffsetRef = useRef(0);
  const dragDistanceRef = useRef(0);
  const suppressClickRef = useRef(false);

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

  // The two rendered groups are identical, so half the track's rendered
  // width is exactly one loop — measured rather than computed from card
  // constants, so it stays correct if the card size ever changes per
  // breakpoint.
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const measure = () => {
      groupWidthRef.current = track.scrollWidth / 2;
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [picked]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = now - last;
      last = now;
      const width = groupWidthRef.current;
      if (width > 0) {
        if (!draggingRef.current && !pausedRef.current) {
          offsetRef.current -= (SPEED_PX_PER_SEC * dt) / 1000;
        }
        // Wrap into (-width, 0] so the loop is seamless in either direction.
        offsetRef.current = ((offsetRef.current % width) + width) % width;
        if (offsetRef.current > 0) offsetRef.current -= width;
        track.style.transform = `translateX(${offsetRef.current}px)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  const pause = () => {
    pausedRef.current = true;
  };
  const resume = () => {
    pausedRef.current = false;
  };

  const handlePointerDown = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (event.pointerType === 'mouse' && event.button !== 0) return;
    draggingRef.current = true;
    dragDistanceRef.current = 0;
    pointerStartXRef.current = event.clientX;
    dragStartOffsetRef.current = offsetRef.current;
    trackRef.current?.classList.add('is-dragging');
    try {
      event.currentTarget.setPointerCapture(event.pointerId);
    } catch {
      // Pointer capture can throw if the pointer already went away — the
      // drag still works via the move/up handlers, just without capture.
    }
  };

  const handlePointerMove = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    const delta = event.clientX - pointerStartXRef.current;
    dragDistanceRef.current = Math.max(dragDistanceRef.current, Math.abs(delta));
    offsetRef.current = dragStartOffsetRef.current + delta;
  };

  const endDrag = (event: ReactPointerEvent<HTMLDivElement>) => {
    if (!draggingRef.current) return;
    draggingRef.current = false;
    trackRef.current?.classList.remove('is-dragging');
    if (dragDistanceRef.current > DRAG_CLICK_THRESHOLD_PX) {
      // The pointer moved enough that this was a swipe, not a tap — swallow
      // the click a link would otherwise fire on release.
      suppressClickRef.current = true;
    }
    try {
      event.currentTarget.releasePointerCapture(event.pointerId);
    } catch {
      // Already released (e.g. pointercancel) — nothing to clean up.
    }
  };

  const handleClickCapture = (event: ReactMouseEvent<HTMLDivElement>) => {
    if (!suppressClickRef.current) return;
    event.preventDefault();
    event.stopPropagation();
    suppressClickRef.current = false;
  };

  if (picked.length === 0) return null;

  return (
    <div className="decisions-marquee">
      <div
        ref={trackRef}
        className="decisions-marquee__track"
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        onClickCapture={handleClickCapture}
        onMouseEnter={pause}
        onMouseLeave={resume}
        onFocus={pause}
        onBlur={resume}
      >
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
        const v = verdictPresentation(problem.verdict);
        return (
          <li key={`${problem.id}-${ariaHidden ? 'dup' : 'real'}-${index}`}>
            <Link
              className="decision-card"
              href={problem.path}
              tabIndex={ariaHidden ? -1 : undefined}
              draggable={false}
            >
              <span className="decision-card__title">
                {prefix ? (
                  <>
                    <span className="decision-card__title-prefix">{prefix}</span>
                    <br />
                  </>
                ) : null}
                <span className="decision-card__title-rest">{rest}</span>
              </span>
              {/* Its own band, not the small inline VerdictChip badge used
                  elsewhere (hub listings, search results) — this card reads
                  as a two-row question/verdict table, so the verdict needs
                  to span the full card width, not those other contexts. */}
              <span className="decision-card__verdict" data-tone={v.tone}>
                <ToneIcon glyph={v.glyph} className="decision-card__verdict-glyph" />
                {v.label}
              </span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
