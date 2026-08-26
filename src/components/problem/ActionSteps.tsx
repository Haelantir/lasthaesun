import Link from 'next/link';

/**
 * BLOCK 6 — "What should I do now?"
 *
 * An ordered list, because the steps are ordered. Kept short on purpose: this
 * page exists to help someone decide and act, and the full how-to belongs on
 * its own page. `href` is populated only when that destination problem actually
 * exists and is published.
 */

export interface ActionStepItem {
  stepNumber: number;
  title: string;
  body: string;
  destinationLabel: string | null;
  destinationHref: string | null;
}

export function ActionSteps({ steps }: { steps: ActionStepItem[] }) {
  if (steps.length === 0) return null;

  return (
    <ol className="steps">
      {steps.map((step) => (
        <li className="step" key={step.stepNumber}>
          <span className="step__number" aria-hidden="true" />
          <div>
            <h3 className="step__title">
              <span className="sr-only">Step {step.stepNumber}: </span>
              {step.title}
            </h3>
            <p>{step.body}</p>
            {step.destinationHref && step.destinationLabel ? (
              <Link className="step__link" href={step.destinationHref}>
                Want the full walkthrough? {step.destinationLabel} →
              </Link>
            ) : null}
          </div>
        </li>
      ))}
    </ol>
  );
}
