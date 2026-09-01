ALTER TABLE "pairings" ADD COLUMN "domain_id" integer;--> statement-breakpoint
ALTER TABLE "pairings" ADD COLUMN "object_category_id" integer;--> statement-breakpoint
ALTER TABLE "pairings" ADD CONSTRAINT "pairings_domain_id_domains_id_fk" FOREIGN KEY ("domain_id") REFERENCES "public"."domains"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "pairings" ADD CONSTRAINT "pairings_object_category_id_object_categories_id_fk" FOREIGN KEY ("object_category_id") REFERENCES "public"."object_categories"("id") ON DELETE set null ON UPDATE no action;--> statement-breakpoint
CREATE INDEX "pairings_domain_idx" ON "pairings" USING btree ("domain_id","status");--> statement-breakpoint
CREATE INDEX "pairings_object_idx" ON "pairings" USING btree ("object_category_id","status");