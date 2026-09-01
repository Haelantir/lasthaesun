import { ToneIcon } from '@/components/ui/ToneIcon';
import { compatPresentation, type CompatVerdict } from '@/lib/compat';

/**
 * Compact verdict chip for listings, the compatibility twin of `VerdictChip`.
 *
 * It cannot reuse `Badge`: that takes a `Presentation` from verdict.ts, and a
 * compatibility verdict is a different scale with a gloss and no emoji. Same
 * `.badge` markup, so the two read identically wherever they sit side by side.
 */
export function CompatChip({ verdict }: { verdict: CompatVerdict }) {
  const v = compatPresentation(verdict);
  return (
    <span className="badge" data-tone={v.tone}>
      <ToneIcon glyph={v.glyph} className="badge__glyph" />
      <span className="sr-only">Verdict: </span>
      {v.label}
    </span>
  );
}
