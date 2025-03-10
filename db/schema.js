import { timestamp } from "drizzle-orm/gel-core";
import { integer, pgTable, varchar, text } from "drizzle-orm/pg-core";

export const todosTable = pgTable("todo", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  todo: text().notNull(),
  createdAt: timestamp("create_at").defaultNow(),
  updatedAt: timestamp("updated_at").defaultNow(),
});
