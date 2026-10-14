CREATE TABLE `error_knowledge_table` (
	`id` text PRIMARY KEY NOT NULL,
	`error_keyword` text NOT NULL,
	`root_cause` text NOT NULL,
	`resolution` text NOT NULL,
	`runbook_url` text
);
