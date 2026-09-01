ALTER TABLE "pairings" ADD COLUMN "content_hash" varchar(64);--> statement-breakpoint
ALTER TABLE "problems" ADD COLUMN "content_hash" varchar(64);