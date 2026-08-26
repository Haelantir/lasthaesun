/**
 * BLOCK 11 — sources and review metadata.
 *
 * Two honesty rules are enforced here rather than left to an author's judgement:
 *
 * 1. A source with no verified URL is listed WITHOUT a link, and says so. It is
 *    never given a plausible-looking guess.
 * 2. There is no named reviewer, because there is no named reviewer. The page
 *    states what review actually happened and nothing more. Inventing
 *    "Reviewed by John Smith, ASE-Certified Technician" would be the single
 *    most damaging thing this site could do to its own credibility.
 */

export interface SourceItem {
  publisher: string;
  title: string;
  url: string | null;
  notes: string | null;
}

export function SourceList({
  sources,
  lastReviewedAt,
  reviewScope,
  disclaimer,
}: {
  sources: SourceItem[];
  lastReviewedAt: Date | null;
  reviewScope: string | null;
  disclaimer: string | null;
}) {
  const reviewed = lastReviewedAt
    ? new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric', timeZone: 'UTC' }).format(
        lastReviewedAt,
      )
    : null;

  return (
    <>
      {sources.length > 0 ? (
        <ul className="sources">
          {sources.map((source) => (
            <li className="card" key={`${source.publisher}-${source.title}`}>
              <p className="source__publisher">{source.publisher}</p>
              <p className="source__title">
                {source.url ? (
                  <a href={source.url} rel="noopener">
                    {source.title}
                  </a>
                ) : (
                  <>
                    {source.title} <span className="source__nolink">— no public link</span>
                  </>
                )}
              </p>
              {source.notes ? <p className="source__notes">{source.notes}</p> : null}
            </li>
          ))}
        </ul>
      ) : null}

      {reviewed || reviewScope ? (
        <dl className="review-meta">
          {reviewed ? (
            <div>
              <dt>Last reviewed:</dt>
              <dd>
                <time dateTime={lastReviewedAt?.toISOString().slice(0, 10)}>{reviewed}</time>
              </dd>
            </div>
          ) : null}
          {reviewScope ? (
            <div>
              <dt>Reviewed for:</dt>
              <dd>{reviewScope}</dd>
            </div>
          ) : null}
        </dl>
      ) : null}

      {disclaimer ? <p className="disclaimer">{disclaimer}</p> : null}
    </>
  );
}
