import { ToneIcon } from '@/components/ui/ToneIcon';
import { severityGlyph, severityTone, type SeverityLevel } from '@/lib/verdict';

/**
 * BLOCK 4 — "What happens if you ignore it?"
 *
 * A cause-and-effect timeline, built from semantic HTML and CSS. Deliberately
 * not an image: this is some of the most valuable text on the page, and text in
 * a PNG is invisible to search, to screen readers and to anyone who zooms.
 *
 * Consecutive steps sharing a `stageLabel` are grouped into one stage, which is
 * how a single stage ("KEEP IGNORING IT") can hold several outcomes.
 */

export interface ConsequenceItem {
  stageLabel: string;
  title: string;
  description: string | null;
  severity: SeverityLevel;
  chainLabel: string | null;
}

interface Stage {
  label: string;
  severity: SeverityLevel;
  items: ConsequenceItem[];
}

function groupIntoStages(steps: ConsequenceItem[]): Stage[] {
  const stages: Stage[] = [];
  for (const step of steps) {
    const current = stages.at(-1);
    if (current && current.label === step.stageLabel) {
      current.items.push(step);
      // A stage takes the weight of its most severe member.
      if (rank(step.severity) > rank(current.severity)) current.severity = step.severity;
    } else {
      stages.push({ label: step.stageLabel, severity: step.severity, items: [step] });
    }
  }
  return stages;
}

const ORDER: Record<SeverityLevel, number> = { info: 0, caution: 1, warning: 2, danger: 3 };
const rank = (s: SeverityLevel) => ORDER[s];

export function IgnoreTimeline({ steps }: { steps: ConsequenceItem[] }) {
  if (steps.length === 0) return null;

  const stages = groupIntoStages(steps);
  const chain = steps.map((s) => s.chainLabel).filter((label): label is string => Boolean(label));

  return (
    <>
      <ol className="timeline">
        {stages.map((stage) => (
          <li className="stage" key={stage.label} data-tone={severityTone(stage.severity)}>
            <div className="stage__rail" aria-hidden="true">
              <span className="stage__dot" />
              <span className="stage__line" />
            </div>
            <div className="stage__body">
              <p className="stage__label">{stage.label}</p>
              <ul className="stage__items">
                {stage.items.map((item) => (
                  <li key={item.title} data-tone={severityTone(item.severity)}>
                    <p className="stage__title">{item.title}</p>
                    {item.description ? <p className="stage__desc">{item.description}</p> : null}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ol>

      {chain.length > 1 ? (
        <>
          <h3 className="sr-only">In short</h3>
          <ol className="chain">
            {chain.map((label, index) => {
              const severity = steps.find((s) => s.chainLabel === label)?.severity ?? 'info';
              return (
                <li className="chain__node" key={label} data-tone={severityTone(severity)}>
                  {index > 0 ? (
                    <span className="chain__arrow" aria-hidden="true">
                      →
                    </span>
                  ) : null}
                  <ToneIcon glyph={severityGlyph(severity)} size={16} />
                  {label}
                </li>
              );
            })}
          </ol>
        </>
      ) : null}
    </>
  );
}
