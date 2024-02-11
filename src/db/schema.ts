import { sql } from "drizzle-orm";
import { integer, pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const USER = pgTable('USER', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 256 }).notNull(),
  username: varchar('username', { length: 20 }).notNull(),
  email: varchar('email', { length: 256 }).notNull(),
  bio: varchar('bio', { length: 256 }),
  profile_picture: varchar('profile_picture', { length: 256 }),
  created_at: integer('created_at').default(sql`EXTRACT(EPOCH FROM CURRENT_TIMESTAMP)`).notNull(),
  updated_at: integer('updated_at').default(sql`EXTRACT(EPOCH FROM CURRENT_TIMESTAMP)`)
});

export const POST = pgTable('POST', {
  id: serial('id').primaryKey(),
  content: varchar('content', { length: 256 }).notNull(),
  created_at: integer('created_at').default(sql`EXTRACT(EPOCH FROM CURRENT_TIMESTAMP)`).notNull(),
  user_id: integer('user_id')
});

export const TAG = pgTable('TAG', {
  id: serial('id').primaryKey(),
  name: varchar('name', { length: 20 }).notNull(),
});

export const POST_TAG = pgTable('POST_TAG', {
  id: serial('id').primaryKey(),
  post_id: integer('post_id').notNull(),
  tag_id: integer('tag_id').notNull()
})