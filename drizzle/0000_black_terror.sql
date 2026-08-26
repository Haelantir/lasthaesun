CREATE TYPE "public"."content_status" AS ENUM('draft', 'reviewed', 'published', 'archived');--> statement-breakpoint
CREATE TYPE "public"."difficulty_level" AS ENUM('easy', 'moderate', 'hard', 'professional');--> statement-breakpoint
CREATE TYPE "public"."relationship_type" AS ENUM('sibling', 'escalation', 'cause', 'follow_up', 'related');--> statement-breakpoint
CREATE TYPE "public"."resource_kind" AS ENUM('tool', 'part', 'service', 'guide');--> statement-breakpoint
CREATE TYPE "public"."risk_level" AS ENUM('low', 'moderate', 'high', 'severe');--> statement-breakpoint
CREATE TYPE "public"."severity_level" AS ENUM('info', 'caution', 'warning', 'danger');--> statement-breakpoint
CREATE TYPE "public"."source_type" AS ENUM('government', 'regulation', 'manufacturer', 'standards_body', 'industry', 'academic', 'other');--> statement-breakpoint
CREATE TYPE "public"."urgency_level" AS ENUM('low', 'medium', 'high', 'critical');--> statement-breakpoint
CREATE TYPE "public"."verdict_level" AS ENUM('safe_to_ignore', 'can_wait', 'probably_not', 'do_not_ignore');--> statement-breakpoint
CREATE TABLE "action_steps" (
	"id" serial PRIMARY KEY NOT NULL,
	"problem_id" integer NOT NULL,
	"step_number" integer NOT NULL,
	"title" varchar(200) NOT NULL,
	"body" text NOT NULL,
	"destination_problem_id" integer,
	"destination_label" varchar(200),
	"sort_order" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE "consequence_steps" (
	"id" serial PRIMARY KEY NOT NULL,
	"problem_id" integer NOT NULL,
	"stage_label" varchar(120) NOT NULL,
	"title" varchar(200) NOT NULL,
	"description" text,
	"severity" "severity_level" DEFAULT 'info' NOT NULL,
	"chain_label" varchar(80),
	"sort_order" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE "domains" (
	"id" serial PRIMARY KEY NOT NULL,
	"slug" varchar(96) NOT NULL,
	"name" varchar(128) NOT NULL,
	"canonical_path" varchar(512) NOT NULL,
	"short_description" text,
	"hub_heading" varchar(256),
	"seo_title" varchar(256),
	"meta_description" varchar(512),
	"sort_order" integer DEFAULT 0 NOT NULL,
	"status" "content_status" DEFAULT 'draft' NOT NULL,
	"indexable" boolean DEFAULT false NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "faqs" (
	"id" serial PRIMARY KEY NOT NULL,
	"problem_id" integer NOT NULL,
	"question" varchar(300) NOT NULL,
	"answer" text NOT NULL,
	"sort_order" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE "ignore_windows" (
	"id" serial PRIMARY KEY NOT NULL,
	"problem_id" integer NOT NULL,
	"situation" varchar(200) NOT NULL,
	"ignore_answer" varchar(80) NOT NULL,
	"severity" "severity_level" DEFAULT 'warning' NOT NULL,
	"what_to_do" varchar(300) NOT NULL,
	"sort_order" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE "object_categories" (
	"id" serial PRIMARY KEY NOT NULL,
	"domain_id" integer NOT NULL,
	"slug" varchar(96) NOT NULL,
	"name" varchar(128) NOT NULL,
	"singular_name" varchar(128),
	"canonical_path" varchar(512) NOT NULL,
	"short_description" text,
	"hub_heading" varchar(256),
	"seo_title" varchar(256),
	"meta_description" varchar(512),
	"sort_order" integer DEFAULT 0 NOT NULL,
	"status" "content_status" DEFAULT 'draft' NOT NULL,
	"indexable" boolean DEFAULT false NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "problem_aliases" (
	"id" serial PRIMARY KEY NOT NULL,
	"problem_id" integer NOT NULL,
	"path" varchar(512) NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "problem_scenarios" (
	"id" serial PRIMARY KEY NOT NULL,
	"problem_id" integer NOT NULL,
	"slug" varchar(96) NOT NULL,
	"label" varchar(200) NOT NULL,
	"short_description" varchar(300),
	"verdict_override" "verdict_level",
	"urgency_override" "urgency_level",
	"result_headline" varchar(160) NOT NULL,
	"result_body" text NOT NULL,
	"recommended_action" varchar(300) NOT NULL,
	"sort_order" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE "problems" (
	"id" serial PRIMARY KEY NOT NULL,
	"system_id" integer NOT NULL,
	"slug" varchar(128) NOT NULL,
	"canonical_path" varchar(512) NOT NULL,
	"name" varchar(160) NOT NULL,
	"eyebrow" varchar(120),
	"h1" varchar(200) NOT NULL,
	"seo_title" varchar(256),
	"meta_description" varchar(512),
	"verdict" "verdict_level",
	"urgency" "urgency_level",
	"safety_risk" "risk_level",
	"fix_difficulty" "difficulty_level",
	"can_i_use_it_label" varchar(120),
	"can_i_use_it_question" varchar(120) DEFAULT 'Can I use it?' NOT NULL,
	"short_answer" text,
	"why_it_matters" text,
	"red_flags_heading" varchar(200),
	"why_it_matters_heading" varchar(200),
	"status" "content_status" DEFAULT 'draft' NOT NULL,
	"indexable" boolean DEFAULT false NOT NULL,
	"last_reviewed_at" timestamp with time zone,
	"review_scope" varchar(200),
	"disclaimer" text,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
CREATE TABLE "recommended_resources" (
	"id" serial PRIMARY KEY NOT NULL,
	"problem_id" integer NOT NULL,
	"title" varchar(200) NOT NULL,
	"description" varchar(500) NOT NULL,
	"kind" "resource_kind" DEFAULT 'tool' NOT NULL,
	"url" varchar(1024),
	"affiliate" boolean DEFAULT false NOT NULL,
	"sort_order" integer DEFAULT 0 NOT NULL,
	"status" "content_status" DEFAULT 'published' NOT NULL
);
--> statement-breakpoint
CREATE TABLE "red_flags" (
	"id" serial PRIMARY KEY NOT NULL,
	"problem_id" integer NOT NULL,
	"title" varchar(200) NOT NULL,
	"description" varchar(400),
	"severity" "severity_level" DEFAULT 'danger' NOT NULL,
	"sort_order" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE "related_problems" (
	"source_problem_id" integer NOT NULL,
	"related_problem_id" integer NOT NULL,
	"relationship_type" "relationship_type" DEFAULT 'sibling' NOT NULL,
	"anchor_text" varchar(200),
	"sort_order" integer DEFAULT 0 NOT NULL,
	CONSTRAINT "related_problems_source_problem_id_related_problem_id_pk" PRIMARY KEY("source_problem_id","related_problem_id")
);
--> statement-breakpoint
CREATE TABLE "sources" (
	"id" serial PRIMARY KEY NOT NULL,
	"problem_id" integer NOT NULL,
	"publisher" varchar(200) NOT NULL,
	"title" varchar(300) NOT NULL,
	"url" varchar(1024),
	"source_type" "source_type" DEFAULT 'other' NOT NULL,
	"notes" varchar(400),
	"sort_order" integer DEFAULT 0 NOT NULL
);
--> statement-breakpoint
CREATE TABLE "systems" (
	"id" serial PRIMARY KEY NOT NULL,
	"object_category_id" integer NOT NULL,
	"slug" varchar(96) NOT NULL,
	"name" varchar(128) NOT NULL,
	"singular_name" varchar(128),
	"canonical_path" varchar(512) NOT NULL,
	"short_description" text,
	"hub_heading" varchar(256),
	"seo_title" varchar(256),
	"meta_description" varchar(512),
	"sort_order" integer DEFAULT 0 NOT NULL,
	"status" "content_status" DEFAULT 'draft' NOT NULL,
	"indexable" boolean DEFAULT false NOT NULL,
	"created_at" timestamp with time zone DEFAULT now() NOT NULL,
	"updated_at" timestamp with time zone DEFAULT now() NOT NULL
);
--> statement-breakpoint
ALTER TABLE "action_steps" ADD CONSTRAINT "action_steps_problem_id_problems_id_fk" FOREIGN KEY ("problem_id") REFERENCES "public"."problems"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "consequence_steps" ADD CONSTRAINT "consequence_steps_problem_id_problems_id_fk" FOREIGN KEY ("problem_id") REFERENCES "public"."problems"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "faqs" ADD CONSTRAINT "faqs_problem_id_problems_id_fk" FOREIGN KEY ("problem_id") REFERENCES "public"."problems"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "ignore_windows" ADD CONSTRAINT "ignore_windows_problem_id_problems_id_fk" FOREIGN KEY ("problem_id") REFERENCES "public"."problems"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "object_categories" ADD CONSTRAINT "object_categories_domain_id_domains_id_fk" FOREIGN KEY ("domain_id") REFERENCES "public"."domains"("id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "problem_aliases" ADD CONSTRAINT "problem_aliases_problem_id_problems_id_fk" FOREIGN KEY ("problem_id") REFERENCES "public"."problems"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "problem_scenarios" ADD CONSTRAINT "problem_scenarios_problem_id_problems_id_fk" FOREIGN KEY ("problem_id") REFERENCES "public"."problems"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "problems" ADD CONSTRAINT "problems_system_id_systems_id_fk" FOREIGN KEY ("system_id") REFERENCES "public"."systems"("id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "recommended_resources" ADD CONSTRAINT "recommended_resources_problem_id_problems_id_fk" FOREIGN KEY ("problem_id") REFERENCES "public"."problems"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "red_flags" ADD CONSTRAINT "red_flags_problem_id_problems_id_fk" FOREIGN KEY ("problem_id") REFERENCES "public"."problems"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "related_problems" ADD CONSTRAINT "related_problems_source_problem_id_problems_id_fk" FOREIGN KEY ("source_problem_id") REFERENCES "public"."problems"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "related_problems" ADD CONSTRAINT "related_problems_related_problem_id_problems_id_fk" FOREIGN KEY ("related_problem_id") REFERENCES "public"."problems"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "sources" ADD CONSTRAINT "sources_problem_id_problems_id_fk" FOREIGN KEY ("problem_id") REFERENCES "public"."problems"("id") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "systems" ADD CONSTRAINT "systems_object_category_id_object_categories_id_fk" FOREIGN KEY ("object_category_id") REFERENCES "public"."object_categories"("id") ON DELETE restrict ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "action_steps_problem_idx" ON "action_steps" USING btree ("problem_id","sort_order");--> statement-breakpoint
CREATE INDEX "consequence_steps_problem_idx" ON "consequence_steps" USING btree ("problem_id","sort_order");--> statement-breakpoint
CREATE UNIQUE INDEX "domains_slug_key" ON "domains" USING btree ("slug");--> statement-breakpoint
CREATE UNIQUE INDEX "domains_canonical_path_key" ON "domains" USING btree ("canonical_path");--> statement-breakpoint
CREATE INDEX "domains_status_idx" ON "domains" USING btree ("status","sort_order");--> statement-breakpoint
CREATE INDEX "faqs_problem_idx" ON "faqs" USING btree ("problem_id","sort_order");--> statement-breakpoint
CREATE INDEX "ignore_windows_problem_idx" ON "ignore_windows" USING btree ("problem_id","sort_order");--> statement-breakpoint
CREATE UNIQUE INDEX "object_categories_domain_slug_key" ON "object_categories" USING btree ("domain_id","slug");--> statement-breakpoint
CREATE UNIQUE INDEX "object_categories_canonical_path_key" ON "object_categories" USING btree ("canonical_path");--> statement-breakpoint
CREATE INDEX "object_categories_domain_idx" ON "object_categories" USING btree ("domain_id","status","sort_order");--> statement-breakpoint
CREATE UNIQUE INDEX "problem_aliases_path_key" ON "problem_aliases" USING btree ("path");--> statement-breakpoint
CREATE INDEX "problem_aliases_problem_idx" ON "problem_aliases" USING btree ("problem_id");--> statement-breakpoint
CREATE UNIQUE INDEX "problem_scenarios_problem_slug_key" ON "problem_scenarios" USING btree ("problem_id","slug");--> statement-breakpoint
CREATE INDEX "problem_scenarios_problem_idx" ON "problem_scenarios" USING btree ("problem_id","sort_order");--> statement-breakpoint
CREATE UNIQUE INDEX "problems_system_slug_key" ON "problems" USING btree ("system_id","slug");--> statement-breakpoint
CREATE UNIQUE INDEX "problems_canonical_path_key" ON "problems" USING btree ("canonical_path");--> statement-breakpoint
CREATE INDEX "problems_system_status_idx" ON "problems" USING btree ("system_id","status","verdict");--> statement-breakpoint
CREATE INDEX "problems_published_idx" ON "problems" USING btree ("status","indexable","updated_at");--> statement-breakpoint
CREATE INDEX "problems_search_idx" ON "problems" USING gin (to_tsvector('english', "name" || ' ' || "h1" || ' ' || coalesce("short_answer", '')));--> statement-breakpoint
CREATE INDEX "recommended_resources_problem_idx" ON "recommended_resources" USING btree ("problem_id","sort_order");--> statement-breakpoint
CREATE INDEX "red_flags_problem_idx" ON "red_flags" USING btree ("problem_id","sort_order");--> statement-breakpoint
CREATE INDEX "related_problems_source_idx" ON "related_problems" USING btree ("source_problem_id","sort_order");--> statement-breakpoint
CREATE INDEX "sources_problem_idx" ON "sources" USING btree ("problem_id","sort_order");--> statement-breakpoint
CREATE UNIQUE INDEX "systems_object_slug_key" ON "systems" USING btree ("object_category_id","slug");--> statement-breakpoint
CREATE UNIQUE INDEX "systems_canonical_path_key" ON "systems" USING btree ("canonical_path");--> statement-breakpoint
CREATE INDEX "systems_object_idx" ON "systems" USING btree ("object_category_id","status","sort_order");