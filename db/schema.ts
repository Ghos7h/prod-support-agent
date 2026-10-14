import { sql } from "drizzle-orm";
import { text, sqliteTable } from "drizzle-orm/sqlite-core";

export const errorKnowledgeTable = sqliteTable("error_knowledge_table", {
  id: text("id").primaryKey(),
  errorKeyword: text("error_keyword").notNull(),
  rootCause: text("root_cause").notNull(),
  resolution: text("resolution").notNull(),
  runbookUrl: text("runbook_url"),
});
