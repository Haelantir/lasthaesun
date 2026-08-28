import { ToneIcon } from '@/components/ui/ToneIcon';

/**
 * BLOCK 8 — "Stop ignoring it if...".
 *
 * The one block allowed to shout. It uses the danger tone, a heavier border and
 * a larger heading — but the wording alone still carries the message, so it
 * works in greyscale, and the octagon glyph differs in shape from every other
 * icon on the page.
 */

export interface RedFlagItem {
  title: string;
  description: string | null;
}

export function RedFlagPanel({ heading, flags }: { heading: string; flags: RedFlagItem[] }) {
  if (flags.length === 0) return null;

  return (
    <section className="red-flags" aria-labelledby="red-flags-heading">
      <h2 className="red-flags__heading" id="red-flags-heading">
        <ToneIcon glyph="stop" size={26} />
        {heading}
      </h2>
      <ul className="red-flags__list">
        {flags.map((flag) => (
          <li className="red-flags__item" key={flag.title}>
            {flag.title}
            {flag.description ? <span className="red-flags__desc">{flag.description}</span> : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
