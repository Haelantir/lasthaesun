import type { CompatVerdict, PairingRelation } from '@/lib/compat';
import type { SourceKind } from '@/lib/db/types';

/**
 * The authoring format for "Can I Use It With…" records.
 *
 * Deliberately shaped like `src/content/types.ts`: one record per file, all of
 * them registered in `index.ts`, so `npm run content:compat` can append a
 * pairing the same mechanical way `content:import` appends a problem — and so a
 * new pairing is a reviewable diff rather than a hand edit inside a large array.
 */

export interface CompatSource {
  publisher: string;
  title: string;
  /** Verified to return 200 before the record is written. Never guessed. */
  url: string;
  kind: SourceKind;
}

export interface CompatMechanism {
  title: string;
  body: string;
}

export interface Pairing {
  /** URL segments. The canonical path is `/use/<subjectSlug>/<targetSlug>/`. */
  subjectSlug: string;
  subjectName: string;
  subjectKind: string;
  subjectNote: string;

  relation: PairingRelation;

  targetSlug: string;
  targetName: string;
  targetKind: string;
  targetNote: string;

  eyebrow: string;
  h1: string;
  seoTitle: string;
  metaDescription: string;

  verdict: CompatVerdict;
  shortAnswer: string;

  /** Free text, not an enum: the honest answer is rarely one of four words. */
  mainRisk: string;
  damages: string;
  alternative: string;

  conditionsOk: string[];
  conditionsNever: string[];
  mechanisms: CompatMechanism[];

  calloutLabel: string;
  calloutBody: string[];

  sources: CompatSource[];
  reviewedAt: Date;
  reviewScope: string;
}
