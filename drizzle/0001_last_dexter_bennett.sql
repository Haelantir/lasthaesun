CREATE TYPE "public"."compat_verdict" AS ENUM('yes', 'yes_with_limits', 'risky', 'no');--> statement-breakpoint
CREATE TYPE "public"."pairing_condition_kind" AS ENUM('ok', 'never');--> statement-breakpoint
CREATE TYPE "public"."pairing_relation" AS ENUM('in', 'on', 'with', 'plugged-into', 'washed-in', 'dried-in', 'stored-in');--> statement-breakpoint
CREATE TABLE "pairing_conditions" (
	"id" serial PRIMARY KEY NOT NULL,
	"pairing_id" integer NOT NULL,
	"kind" "pairing_condition_kind" NOT NULL,
	"body" text NOT NULL,
	"sort_order" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE "pairing_mechanisms" (
	"id" serial PRIMARY KEY NOT NULL,
	"pairing_id" integer NOT NULL,
	"title" varchar(160) NOT NULL,
	"body" text NOT NULL,
	"sort_order" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE "pairing_sources" (
	"id" serial PRIMARY KEY NOT NULL,
	"pairing_id" integer NOT NULL,
	"publisher" varchar(200) NOT NULL,
	"title" varchar(300) NOT NULL,
	"url" varchar(1024) NOT NULL,
	"source_type" "source_type" DEFAULT 'other' NOT NULL,
	"sort_order" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE "pairings" (
	"id" serial PRIMARY KEY NOT NULL,
	"subject_slug" varchar(128) NOT NULL,
	"subject_name" varchar(160) NOT NULL,
	"subject_kind" varchar(60) NOT NULL,
	"subject_note" varchar(200) NOT NULL,
	"relation" "pairing_relation" DEFAULT 'in' NOT NULL,
	"target_slug" varchar(128) NOT NULL,
	"target_name" varchar(160) NOT NULL,
	"target_kind" varchar(60) NOT NULL,
	"target_note" varchar(200) NOT NULL,
	"canonical_path" varchar(512) NOT NULL,
	"eyebrow" varchar(120),
	"h1" varchar(200) NOT NULL,
	"seo_title" varchar(256),
	"meta_description" varchar(512),
	"verdict" "compat_verdict",
	"short_answer" text,
	"main_risk" varchar(120),
	"damages" varchar(120),
	"alternative" varchar(160),
	"callout_label" varchar(120),
	"callout_body" text,
	"status" "content_status" DEFAULT 'draft' NOT NULL,
	"indexable" boolean DEFAULT false NOT NULL,
	"last_reviewed_at" timestamp with time zone,
	"review_scope" varchar(300),
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "pairing_conditions" ADD CONSTRAINT "pairing_conditions_pairing_id_pairings_id_fk" FOREIGN KEY ("pairing_id") REFERENCES "public"."pairings"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "pairing_mechanisms" ADD CONSTRAINT "pairing_mechanisms_pairing_id_pairings_id_fk" FOREIGN KEY ("pairing_id") REFERENCES "public"."pairings"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "pairing_sources" ADD CONSTRAINT "pairing_sources_pairing_id_pairings_id_fk" FOREIGN KEY ("pairing_id") REFERENCES "public"."pairings"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "pairing_conditions_pairing_idx" ON "pairing_conditions" USING btree ("pairing_id","kind","sort_order");--> statement-breakpoint
CREATE INDEX "pairing_mechanisms_pairing_idx" ON "pairing_mechanisms" USING btree ("pairing_id","sort_order");--> statement-breakpoint
CREATE INDEX "pairing_sources_pairing_idx" ON "pairing_sources" USING btree ("pairing_id","sort_order");--> statement-breakpoint
CREATE UNIQUE INDEX "pairings_subject_target_key" ON "pairings" USING btree ("subject_slug","target_slug");--> statement-breakpoint
CREATE UNIQUE INDEX "pairings_canonical_path_key" ON "pairings" USING btree ("canonical_path");--> statement-breakpoint
CREATE INDEX "pairings_target_idx" ON "pairings" USING btree ("target_slug","status");--> statement-breakpoint
CREATE INDEX "pairings_subject_idx" ON "pairings" USING btree ("subject_slug","status");--> statement-breakpoint
CREATE INDEX "pairings_published_idx" ON "pairings" USING btree ("status","indexable","updated_at");--> statement-breakpoint
CREATE INDEX "pairings_search_idx" ON "pairings" USING gin (to_tsvector('english', "subject_name" || ' ' || "target_name" || ' ' || "h1" || ' ' || coalesce("short_answer", '')));