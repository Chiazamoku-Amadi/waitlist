import { sql } from "drizzle-orm";
import { check, integer, sqliteTable, text } from "drizzle-orm/sqlite-core";

export const subscribers = sqliteTable(
  "subscribers",
  {
    id: integer("id").primaryKey(),
    email: text("email").notNull().unique(),
    createdAt: integer("created_at", { mode: "timestamp" })
      .notNull()
      .default(new Date()),
    updatedAt: integer("updated_at", { mode: "timestamp" })
      .notNull()
      .default(new Date()),
    trafficSource: text("traffic_source"),
    device: text("device"),
    emailVerified: integer("email_verified", { mode: "timestamp" }),
    unsubscribed: integer("unsubscribed", { mode: "timestamp" }),
    confirmationToken: text("confirmation_token"),
  },
  (table) => [check("email", sql`${table.email} LIKE "%@%.%"`)],
);

export type NewSubscriber = typeof subscribers.$inferInsert;
