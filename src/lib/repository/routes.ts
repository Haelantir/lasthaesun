import 'server-only';

import { cache } from 'react';
import { sql } from 'drizzle-orm';

import { getDb } from '@/lib/db/client';

/**
 * Path resolution.
 *
 * Because taxonomy depth and URL depth are deliberately decoupled, a request
 * path cannot be parsed to work out what kind of node it is — `/cars/tires/` is
 * a system and `/mobility/` is a domain, both one lookup away from each other.
 *
 * So every routable node's `canonical_path` is resolved in a SINGLE indexed
 * UNION query. Each branch is a unique-index probe, which is what keeps page
 * rendering O(1) whether the table holds one problem or fifty thousand.
 */

export type ResolvedRoute =
  | { kind: 'domain'; id: number }
  | { kind: 'objectCategory'; id: number }
  | { kind: 'system'; id: number }
  | { kind: 'problem'; id: number }
  | { kind: 'redirect'; to: string };

interface RouteRow {
  kind: string;
  id: number;
  redirect_to: string | null;
  /** `db.execute` requires row types to be indexable. */
  [column: string]: unknown;
}

async function resolve(path: string): Promise<ResolvedRoute | null> {
  const db = getDb();

  const { rows } = await db.execute<RouteRow>(sql`
    select 'problem' as kind, id, null::varchar as redirect_to
      from problems
     where canonical_path = ${path} and status = 'published'
    union all
    select 'system', id, null
      from systems
     where canonical_path = ${path} and status = 'published'
    union all
    select 'objectCategory', id, null
      from object_categories
     where canonical_path = ${path} and status = 'published'
    union all
    select 'domain', id, null
      from domains
     where canonical_path = ${path} and status = 'published'
    union all
    select 'redirect', a.problem_id, p.canonical_path
      from problem_aliases a
      join problems p on p.id = a.problem_id and p.status = 'published'
     where a.path = ${path}
    limit 1
  `);

  const row = rows[0];
  if (!row) return null;

  if (row.kind === 'redirect') {
    return row.redirect_to ? { kind: 'redirect', to: row.redirect_to } : null;
  }
  if (row.kind === 'problem') return { kind: 'problem', id: row.id };
  if (row.kind === 'system') return { kind: 'system', id: row.id };
  if (row.kind === 'objectCategory') return { kind: 'objectCategory', id: row.id };
  if (row.kind === 'domain') return { kind: 'domain', id: row.id };
  return null;
}

/**
 * Deduplicated per request: `generateMetadata` and the page component both
 * resolve the same path, and React's cache collapses that into one query.
 */
export const resolveRoute = cache(resolve);
