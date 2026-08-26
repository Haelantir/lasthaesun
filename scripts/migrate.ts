/**
 * Applies every pending SQL migration in ./drizzle to DATABASE_URL.
 * Run with `npm run db:migrate`.
 */
import { drizzle } from 'drizzle-orm/node-postgres';
import { migrate } from 'drizzle-orm/node-postgres/migrator';
import { Pool } from 'pg';

async function main() {
  const connectionString = process.env.DATABASE_URL;
  if (!connectionString) {
    throw new Error('DATABASE_URL is not set. Copy .env.example to .env.local first.');
  }

  const pool = new Pool({
    connectionString,
    ssl: process.env.DATABASE_SSL === 'require' ? { rejectUnauthorized: false } : undefined,
  });

  try {
    await migrate(drizzle(pool), { migrationsFolder: './drizzle' });
    console.log('✓ migrations applied');
  } finally {
    await pool.end();
  }
}

main().catch((error) => {
  console.error('✗ migration failed');
  console.error(error);
  process.exit(1);
});
