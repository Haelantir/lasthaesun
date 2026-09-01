import Link from 'next/link';

import { compatPresentation, type CompatVerdict } from '@/lib/compat';

/**
 * Swap the subject while the target stays fixed: foil → parchment → Pyrex, all
 * still "in an air fryer".
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
 * It sits under the subject card rather than between the two, because the
 * target is the fixed half of the pairing and the reader is being offered a
 * different left-hand side, not a different question.
 */
export function PairingSwitcher({
  targetName,
  options,
  currentSubjectSlug,
}: {
  targetName: string;
  options: { subjectSlug: string; subjectName: string; href: string; verdict: CompatVerdict }[];
  currentSubjectSlug: string;
}) {
  if (options.length < 2) return null;

  return (
    <details className="swap">
      <summary className="swap__summary">
        <span>Something else&hellip;</span>
        <span className="swap__chevron" aria-hidden="true" />
      </summary>

      <div className="swap__panel">
        <p className="swap__hint">
          What else can go in {/^[aeiou]/i.test(targetName) ? 'an' : 'a'}{' '}
          {targetName.toLowerCase()}?
        </p>
        <ul className="swap__list">
          {options.map((option) => {
            const v = compatPresentation(option.verdict);
            const isCurrent = option.subjectSlug === currentSubjectSlug;

            return (
              <li key={option.subjectSlug}>
                {isCurrent ? (
                  <span className="swap__option swap__option--current" aria-current="page">
                    <span className="swap__option-name">{option.subjectName}</span>
                    <span className="swap__option-verdict" data-tone={v.tone}>
                      {v.label}
                    </span>
                  </span>
                ) : (
                  <Link className="swap__option" href={option.href}>
                    <span className="swap__option-name">{option.subjectName}</span>
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
