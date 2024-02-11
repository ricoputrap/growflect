CREATE TABLE IF NOT EXISTS "POST" (
	"id" serial PRIMARY KEY NOT NULL,
	"content" varchar(256) NOT NULL,
	"created_at" integer DEFAULT EXTRACT(EPOCH FROM CURRENT_TIMESTAMP) NOT NULL,
	"user_id" integer
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "POST_TAG" (
	"id" serial PRIMARY KEY NOT NULL,
	"post_id" integer NOT NULL,
	"tag_id" integer NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "TAG" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(20) NOT NULL
);
--> statement-breakpoint
CREATE TABLE IF NOT EXISTS "USER" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" varchar(256) NOT NULL,
	"username" varchar(20) NOT NULL,
	"email" varchar(256) NOT NULL,
	"bio" varchar(256),
	"profile_picture" varchar(256),
	"created_at" integer DEFAULT EXTRACT(EPOCH FROM CURRENT_TIMESTAMP) NOT NULL,
	"updated_at" integer DEFAULT EXTRACT(EPOCH FROM CURRENT_TIMESTAMP)
);
