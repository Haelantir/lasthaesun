import type { ReactNode } from "react";
import type { DisplayMessage } from "../types";
import { normalizeAnswerText } from "../lib/textFormat";

interface MessageBubbleProps {
  message: DisplayMessage;
}

// Matches markdown-style links ([label](url)) and bare URLs so both render as
// a small pill button instead of a long raw address that would overflow.
const LINK_RE = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)|(https?:\/\/[^\s]+)/g;
const TRAILING_PUNCTUATION_RE = /[),.!?;:'"”’」]+$/;

function pillLabel(url: string): string {
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "링크";
  }
}

function LinkPill({ href, label }: { href: string; label?: string }) {
  return (
    <a className="link-pill" href={href} target="_blank" rel="noopener noreferrer">
      {label ?? pillLabel(href)}
      <span aria-hidden="true"> ↗</span>
    </a>
  );
}

function renderLineWithLinks(line: string, keyPrefix: string) {
  const nodes: ReactNode[] = [];
  let lastIndex = 0;
  let linkIndex = 0;
  LINK_RE.lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = LINK_RE.exec(line))) {
    if (match.index > lastIndex) {
      nodes.push(line.slice(lastIndex, match.index));
    }

    if (match[1] && match[2]) {
      nodes.push(<LinkPill key={`${keyPrefix}-link-${linkIndex++}`} href={match[2]} label={match[1]} />);
    } else if (match[3]) {
      let url = match[3];
      let trailing = "";
      const trailingMatch = url.match(TRAILING_PUNCTUATION_RE);
      if (trailingMatch) {
        trailing = trailingMatch[0];
        url = url.slice(0, -trailing.length);
      }
      nodes.push(<LinkPill key={`${keyPrefix}-link-${linkIndex++}`} href={url} />);
      if (trailing) nodes.push(trailing);
    }

    lastIndex = LINK_RE.lastIndex;
  }

  if (lastIndex < line.length) {
    nodes.push(line.slice(lastIndex));
  }

  return nodes;
}

function AnswerParagraphs({ text }: { text: string }) {
  const normalized = normalizeAnswerText(text);
  const paragraphs = normalized.split(/\n{2,}/).filter(Boolean);
  return (
    <>
      {paragraphs.map((p, i) => (
        <p key={i}>
          {p.split("\n").map((line, j, arr) => (
            <span key={j}>
              {renderLineWithLinks(line, `${i}-${j}`)}
              {j < arr.length - 1 && <br />}
            </span>
          ))}
        </p>
      ))}
    </>
  );
}

export function MessageBubble({ message }: MessageBubbleProps) {
  if (message.role === "user") {
    return (
      <div className="message-row message-row-user">
        <div className="bubble bubble-user">{message.content}</div>
      </div>
    );
  }

  const isClarify = message.kind === "clarify";
  const isError = message.kind === "error";

  return (
    <div className="message-row message-row-assistant">
      <div
        className={
          "bubble bubble-assistant" +
          (isClarify ? " bubble-clarify" : "") +
          (isError ? " bubble-error" : "")
        }
      >
        <AnswerParagraphs text={message.content} />
      </div>

      {message.tip && (
        <div className="tip-box">
          <span className="tip-label">도움말</span>
          <p>{renderLineWithLinks(normalizeAnswerText(message.tip), "tip")}</p>
        </div>
      )}
    </div>
  );
}
