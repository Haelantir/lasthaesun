import 'server-only';

import { cache } from 'react';
import { sql } from 'drizzle-orm';

import { getDb } from '@/lib/db/client';
import type { ProblemSummary } from './problems';

/**
 * Site search.
 *
 * Deliberately small: PostgreSQL full-text ranking over the same expression that
 * `problems_search_idx` indexes, so this is an index scan rather than a table
 * scan even at fifty thousand rows. It is also deliberately isolated — every
 * caller goes through `searchProblems`, so swapping in a dedicated search
 * service later touches this file and nothing else.
 *
 * Only `published` problems are ever returned.
 */

export interface SearchResult extends ProblemSummary {
  rank: number;
}

interface SearchRow {
  id: number;
  name: string;
  h1: string;
  path: string;
  verdict: ProblemSummary['verdict'];
  urgency: ProblemSummary['urgency'];
  short_answer: string;
  rank: number;
  /** `db.execute` requires row types to be indexable. */
  [column: string]: unknown;
}

const MAX_QUERY_LENGTH = 120;

/** Trim, cap and reject queries too short to mean anything. */
export function normalizeQuery(raw: string | undefined | null): string {
  return (raw ?? '').trim().slice(0, MAX_QUERY_LENGTH);
}

async function runSearch(query: string, limit = 20): Promise<SearchResult[]> {
  const q = normalizeQuery(query);
  if (q.length < 2) return [];

  const db = getDb();
  // `websearch_to_tsquery` accepts what people actually type (quoted phrases,
  // `or`, `-word`) without throwing on stray punctuation the way `to_tsquery` does.
  // Must stay character-identical to `problems_search_idx` or Postgres will not
  // use the index.
  const document = sql`to_tsvector('english', name || ' ' || h1 || ' ' || coalesce(short_answer, ''))`;
  const tsquery = sql`websearch_to_tsquery('english', ${q})`;
  // Prefix match on the name catches partial words ("tire pres") that full-text
  // ranking alone would miss.
  const prefix = `%${q.replace(/[%_\\]/g, '\\$&')}%`;

  const { rows } = await db.execute<SearchRow>(sql`
    select id, name, h1, canonical_path as path, verdict, urgency,
           coalesce(short_answer, '') as short_answer,
           greatest(
             ts_rank(${document}, ${tsquery}),
             case when name ilike ${prefix} then 0.05 else 0 end
           ) as rank
      from problems
     where status = 'published'
       and verdict is not null
       and (${document} @@ ${tsquery} or name ilike ${prefix})
     order by rank desc, name asc
     limit ${limit}
  `);

  return rows.map((row) => ({
    id: row.id,
    name: row.name,
    h1: row.h1,
    path: row.path,
    verdict: row.verdict,
    urgency: row.urgency,
    shortAnswer: row.short_answer,
    rank: Number(row.rank),
  }));
}

export const searchProblems = cache(runSearch);
