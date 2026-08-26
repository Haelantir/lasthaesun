import { ToneIcon } from '@/components/ui/ToneIcon';
import { severityGlyph, severityTone, type SeverityLevel } from '@/lib/verdict';

/**
 * BLOCK 5 — "How long can I ignore it?"
 *
 * A real <table> with a real <caption> and row headers, because it is real
 * tabular data and screen readers navigate it as such.
 *
 * This block is also the SEO consolidation point. "Can I drive with low tire
 * pressure", "how long can I drive with it", "is it safe", "can I drive with
 * the light on" are four phrasings of one question, and they are answered by
 * six rows on one canonical page rather than by four thin pages competing with
 * each other.
 */

export interface IgnoreWindowRow {
  situation: string;
  ignoreAnswer: string;
  severity: SeverityLevel;
  whatToDo: string;
}

export function IgnoreDecisionTable({ rows, caption }: { rows: IgnoreWindowRow[]; caption: string }) {
  if (rows.length === 0) return null;

  return (
    <div className="table-scroll">
      {/*
       * Below 40rem the CSS restacks each row into a card, because the useful
       * column ("What to do") would otherwise sit off the right edge behind a
       * sideways scroll — on the block people came to the page for.
       *
       * Restacking with `display: block` drops native table semantics in several
       * browsers, so the roles below are stated explicitly to preserve them. This
       * is the one case where duplicating native roles is the correct fix rather
       * than redundant noise.
       */}
      <table className="decision-table" role="table">
        <caption>{caption}</caption>
        <thead role="rowgroup">
          <tr role="row">
            <th role="columnheader" scope="col">
              Situation
            </th>
            <th role="columnheader" scope="col">
              Ignore it?
            </th>
            <th role="columnheader" scope="col">
              What to do
            </th>
          </tr>
        </thead>
        <tbody role="rowgroup">
          {rows.map((row) => {
            const tone = severityTone(row.severity);
            return (
              <tr role="row" key={row.situation}>
                <th role="rowheader" scope="row" data-label="Situation">
                  {row.situation}
                </th>
                {/* The answer is a word first. The tone and icon only reinforce it. */}
                <td role="cell" className="decision-table__answer" data-label="Ignore it?" data-tone={tone}>
                  <span className="badge" data-tone={tone}>
                    <ToneIcon glyph={severityGlyph(row.severity)} size={16} className="badge__glyph" />
                    {row.ignoreAnswer}
                  </span>
                </td>
                <td role="cell" data-label="What to do">
                  {row.whatToDo}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
