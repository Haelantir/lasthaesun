// Defensive cleanup for AI answer text. The system prompt tells the model not
// to use markdown, but LLMs (especially the search-augmented one) don't always
// comply — so this is a second line of defense that runs on every answer
// before it's displayed, regardless of what the prompt achieved.

const TABLE_ROW_RE = /^\s*\|(.*)\|\s*$/;
const TABLE_SEPARATOR_RE = /^\s*\|?(\s*:?-{2,}:?\s*\|)+\s*:?-{2,}:?\s*\|?\s*$/;

function splitTableCells(row: string): string[] {
  const inner = row.trim().replace(/^\|/, "").replace(/\|$/, "");
  return inner.split("|").map((cell) => cell.trim());
}

// Converts any markdown pipe-table into one plain line per data row
// ("헤더1: 값1, 헤더2: 값2"), since seniors shouldn't have to read a grid.
export function flattenMarkdownTables(text: string): string {
  const lines = text.split("\n");
  const output: string[] = [];
  let i = 0;

  while (i < lines.length) {
    const isHeaderRow = TABLE_ROW_RE.test(lines[i]);
    const nextIsSeparator = i + 1 < lines.length && TABLE_SEPARATOR_RE.test(lines[i + 1]);

    if (isHeaderRow && nextIsSeparator) {
      const headers = splitTableCells(lines[i]);
      let j = i + 2;
      while (j < lines.length && TABLE_ROW_RE.test(lines[j])) {
        const cells = splitTableCells(lines[j]);
        const parts = headers
          .map((h, idx) => {
            const value = (cells[idx] ?? "").trim();
            if (!value) return "";
            return h ? `${h}: ${value}` : value;
          })
          .filter(Boolean);
        if (parts.length > 0) output.push(parts.join(", "));
        j++;
      }
      i = j;
    } else {
      output.push(lines[i]);
      i++;
    }
  }

  return output.join("\n");
}

// Strips leftover markdown decoration (headings, bold markers, inline code,
// horizontal rules) so stray symbols never show up as literal characters.
export function stripStrayMarkdown(text: string): string {
  return text
    .replace(/^\s{0,3}#{1,6}\s+/gm, "")
    .replace(/\*\*(.+?)\*\*/g, "$1")
    .replace(/`([^`]+)`/g, "$1")
    .replace(/^\s*[-*_]{3,}\s*$/gm, "")
    .replace(/\n{3,}/g, "\n\n");
}

export function normalizeAnswerText(text: string): string {
  return stripStrayMarkdown(flattenMarkdownTables(text)).trim();
}
