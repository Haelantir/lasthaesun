import { Badge } from '@/components/ui/Badge';
import { ToneIcon } from '@/components/ui/ToneIcon';
import {
  difficultyPresentation,
  riskPresentation,
  urgencyPresentation,
  verdictPresentation,
  type DifficultyLevel,
  type RiskLevel,
  type UrgencyLevel,
  type VerdictLevel,
} from '@/lib/verdict';

/**
 * BLOCK 2 — the answer.
 *
 * This is the first thing below the H1 and the reason the site exists: the
 * verdict, the two-sentence justification, four decision metrics, and one link
 * into the situation checker. No advertising, no introduction, no image.
 */
export function VerdictCard({
  verdict,
  shortAnswer,
  metrics,
  checkerHref,
}: {
  verdict: VerdictLevel;
  shortAnswer: string;
  metrics: {
    canIUseItQuestion: string;
    canIUseItLabel: string;
    urgency: UrgencyLevel;
    safetyRisk: RiskLevel;
    fixDifficulty: DifficultyLevel;
  };
  checkerHref: string;
}) {
  const v = verdictPresentation(verdict);
  const urgency = urgencyPresentation(metrics.urgency);
  const risk = riskPresentation(metrics.safetyRisk);
  const difficulty = difficultyPresentation(metrics.fixDifficulty);

  return (
    <section className="verdict" data-tone={v.tone} aria-labelledby="verdict-label">
      <p className="verdict__label" id="verdict-label">
        <ToneIcon glyph={v.glyph} className="verdict__glyph" />
        {v.label}
      </p>
      <p className="verdict__gloss">{v.gloss}</p>

      <p className="verdict__answer">{shortAnswer}</p>

      <h2 className="sr-only">Decision summary</h2>
      <ul className="metrics">
        {/* The first metric is free text: the honest answer to "can I drive?" is
            "usually only briefly", which is not an enum value. */}
        <li className="metric" data-tone={v.tone}>
          <span className="metric__label">{metrics.canIUseItQuestion}</span>
          <span className="metric__value">
            <ToneIcon glyph={v.glyph} className="metric__glyph" />
            {metrics.canIUseItLabel}
          </span>
        </li>
        <Metric label="Urgency" presentation={urgency} />
        <Metric label="Safety risk" presentation={risk} />
        <Metric label="Fix difficulty" presentation={difficulty} />
      </ul>

      <p className="verdict__cta">
        <a className="button" href={checkerHref}>
          Check my situation
          <span aria-hidden="true">↓</span>
        </a>
      </p>
    </section>
  );
}

function Metric({
  label,
  presentation,
}: {
  label: string;
  presentation: ReturnType<typeof urgencyPresentation>;
}) {
  return (
    <li className="metric" data-tone={presentation.tone}>
      <span className="metric__label">{label}</span>
      <span className="metric__value">
        <ToneIcon glyph={presentation.glyph} className="metric__glyph" />
        {presentation.label}
      </span>
    </li>
  );
}

/** Compact verdict chip used by hub listings and search results. */
export function VerdictChip({ verdict }: { verdict: VerdictLevel }) {
  return <Badge presentation={verdictPresentation(verdict)} prefix="Verdict" />;
}
