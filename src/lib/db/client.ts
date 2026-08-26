import 'server-only';

import { drizzle } from 'drizzle-orm/node-postgres';
import { Pool } from 'pg';

import * as schema from './schema';

/**
 * A single pooled connection, reused across hot reloads in development so that
 * `next dev` does not open a new pool on every file save.
 */
const globalForDb = globalThis as unknown as { __ciiiPool?: Pool };

export class DatabaseNotConfiguredError extends Error {
  constructor() {
    super('DATABASE_URL is not set. Copy .env.example to .env.local and point it at a PostgreSQL database.');
    this.name = 'DatabaseNotConfiguredError';
  }
}

function createPool(): Pool {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) throw new DatabaseNotConfiguredError();

  return new Pool({
    connectionString,
    // Hosted Postgres (Neon, Vercel, Supabase, RDS) needs TLS; local Docker does not.
    ssl: process.env.DATABASE_SSL === 'require' ? { rejectUnauthorized: false } : undefined,
    max: 10,
    idleTimeoutMillis: 30_000,
    connectionTimeoutMillis: 10_000,
  });
}

function getPool(): Pool {
  globalForDb.__ciiiPool ??= createPool();
  return globalForDb.__ciiiPool;
}

export function getDb() {
  return drizzle(getPool(), { schema });
}

export type Database = ReturnType<typeof getDb>;
export { schema };
