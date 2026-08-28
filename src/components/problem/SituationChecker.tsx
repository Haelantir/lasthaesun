'use client';

import { useId, useState } from 'react';

import { ToneIcon } from '@/components/ui/ToneIcon';
import { track } from '@/lib/analytics';
import { verdictPresentation, type UrgencyLevel, type VerdictLevel } from '@/lib/verdict';

/**
 * BLOCK 3 — "How bad is it?"
 *
 * The one genuinely interactive component on the page, and the only thing that
 * hydrates. Everything else is server-rendered HTML.
 *
 * Design notes that are requirements, not preferences:
 *
 * - Native radios in a fieldset. Arrow keys, space, labels and screen-reader
 *   grouping all come free and correct; a div-with-onClick would have to
 *   re-implement all of it, worse.
 * - EVERY result panel is rendered into the server HTML and merely hidden. The
 *   scenario text is therefore real page content for a crawler and for
 *   find-in-page, not something conjured on click.
 * - No network request. Six known outcomes are already on the page, so choosing
 *   one is instant by construction.
 */

export interface ScenarioOption {
  slug: string;
  label: string;
  shortDescription: string | null;
  verdictOverride: VerdictLevel | null;
  urgencyOverride: UrgencyLevel | null;
  resultHeadline: string;
  resultBody: string;
  recommendedAction: string;
}

export function SituationChecker({
  scenarios,
  defaultVerdict,
  problemSlug,
}: {
  scenarios: ScenarioOption[];
  defaultVerdict: VerdictLevel;
  problemSlug: string;
}) {
  const [selected, setSelected] = useState<string | null>(null);
  const groupId = useId();

  if (scenarios.length === 0) return null;

  function choose(slug: string) {
    setSelected(slug);
    track('scenario_selected', { problem: problemSlug, scenario: slug });
  }

  return (
    <div className="checker">
      <fieldset className="checker__options">
        <legend className="checker__legend">Which of these matches what you are seeing?</legend>

        {scenarios.map((scenario) => {
          const inputId = `${groupId}-${scenario.slug}`;
          return (
            <label className="option" key={scenario.slug} htmlFor={inputId}>
              <input
                type="radio"
                id={inputId}
                name={`${groupId}-situation`}
                value={scenario.slug}
                checked={selected === scenario.slug}
                onChange={() => choose(scenario.slug)}
              />
              <span className="option__text">
                <span className="option__label">{scenario.label}</span>
                {scenario.shortDescription ? (
                  <span className="option__hint">{scenario.shortDescription}</span>
                ) : null}
              </span>
            </label>
          );
        })}
      </fieldset>

      {/* Announced when a choice changes the answer. Polite, so it never
          interrupts what the user is already reading. */}
      <div aria-live="polite">
        {selected === null ? (
          <p className="checker__fallback" id={`${groupId}-prompt`}>
            Picking a match above updates this from the general verdict:{' '}
            <strong>{verdictPresentation(defaultVerdict).label}</strong>.
          </p>
        ) : null}

        {scenarios.map((scenario) => {
          const tone = verdictPresentation(scenario.verdictOverride ?? defaultVerdict);
          const isActive = selected === scenario.slug;
          return (
            <div
              className="result"
              data-tone={tone.tone}
              key={scenario.slug}
              hidden={!isActive}
              // Rendered always, revealed on selection: real HTML for crawlers,
              // instant for people.
            >
              <p className="result__headline">
                <ToneIcon glyph={tone.glyph} />
                {scenario.resultHeadline}
              </p>
              <p className="result__body">{scenario.resultBody}</p>
              <p className="result__action">
                <span className="result__action-label">Do this</span>
                <span>{scenario.recommendedAction}</span>
              </p>
            </div>
          );
        })}

        {selected !== null ? (
          <button type="button" className="result__reset" onClick={() => setSelected(null)}>
            Clear my situation
          </button>
        ) : null}
      </div>

      <noscript>
        <p className="checker__fallback">
          This selector needs JavaScript. The same information is in the{' '}
          <a href="#how-long">How Long Can I Ignore It?</a> table below.
        </p>
      </noscript>
    </div>
  );
}
