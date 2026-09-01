import Link from 'next/link';

import { compatPresentation, type CompatVerdict } from '@/lib/compat';

/**
 * One half of the pairing, swappable while the other half stays put.
 *
 * Two of these sit on every pairing page. Under the subject card it swaps the
 * subject (foil → parchment → Pyrex, all still in an air fryer); under the
 * target card it swaps the target (Pyrex in an air fryer → in an oven → in a
 * microwave). Between them the reader can walk the whole grid without going
 * back to a hub: from a-b to a-c, and from a-c to e-c.
 *
 * Built on <details>, not <select>, and that is the whole design decision.
 * docs/content-architecture.md §8 commits the site to exactly one client
 * component (SituationChecker); a <select> that navigates on change needs an
 * onChange handler and would make this the second. <details> is native, needs
 * no JavaScript, is keyboard- and screen-reader-correct for free, and the
 * disclosure pattern is already in the design system — block 5 of every problem
 * page is a <details>. Choosing an option is following a link, so it navigates
 * on the same click a <select> would have needed a script for.
 *
 * Renders nothing when there is only one option, which is the honest state for
 * a subject or a target that has been written about exactly once.
 */
export interface SwitcherOption {
  slug: string;
  name: string;
  href: string;
  verdict: CompatVerdict;
}

export function PairingSwitcher({
  hint,
  options,
  currentSlug,
}: {
  /** One line naming what the list is, e.g. "What else can go in an oven?". */
  hint: string;
  options: SwitcherOption[];
  currentSlug: string;
}) {
  if (options.length < 2) return null;

  return (
    <details className="swap">
      <summary className="swap__summary">
        <span>Something else&hellip;</span>
        <span className="swap__chevron" aria-hidden="true" />
      </summary>

      <div className="swap__panel">
        <p className="swap__hint">{hint}</p>
        <ul className="swap__list">
          {options.map((option) => {
            const v = compatPresentation(option.verdict);
            const isCurrent = option.slug === currentSlug;

            return (
              <li key={option.slug}>
                {isCurrent ? (
                  <span className="swap__option swap__option--current" aria-current="page">
                    <span className="swap__option-name">{option.name}</span>
                    <span className="swap__option-verdict" data-tone={v.tone}>
                      {v.label}
                    </span>
                  </span>
                ) : (
                  <Link className="swap__option" href={option.href}>
                    <span className="swap__option-name">{option.name}</span>
                    <span className="swap__option-verdict" data-tone={v.tone}>
                      {v.label}
                    </span>
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </details>
  );
}
