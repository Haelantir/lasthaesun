import type { Presentation } from '@/lib/verdict';
import { ToneIcon } from './ToneIcon';

/**
 * A toned label. The text is the message; the tone and the icon are redundant
 * reinforcement, so this stays readable in greyscale and to a screen reader.
 */
export function Badge({ presentation, prefix }: { presentation: Presentation; prefix?: string }) {
  return (
    <span className="badge" data-tone={presentation.tone}>
      <ToneIcon glyph={presentation.glyph} className="badge__glyph" />
      {prefix ? <span className="sr-only">{prefix}: </span> : null}
      {presentation.label}
    </span>
  );
}
