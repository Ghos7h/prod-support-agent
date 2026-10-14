import { db } from "@/db/db";
import {
  streamText,
  UIMessage,
  convertToModelMessages,
  createUIMessageStreamResponse,
  toUIMessageStream,
  tool,
  stepCountIs,
} from "ai";
import { openai } from "@ai-sdk/openai";
import z from "zod";

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const SYSTEM_PROMPT = `You are a Production Support Assistant.

Time: ${new Date().toLocaleString("sv-SE")}

Tools:
1. schema tool - call this tool to get the database schema which will help you write sql query
2. db tool: query knowledge base.

Rules:
- SELECT only.
- No data modifications.
- Query using db tool.
- Answer from database results.
- Hide SQL unless requested.
- Always use the schema provided by the schema tool

Return:
Issue Summary
Root Cause
Resolution
Notes

If no matching record exists, state that and suggest next steps.`;

  const result = streamText({
    model: openai("gpt-6-astra"),
    messages: await convertToModelMessages(messages),
    system: SYSTEM_PROMPT,
    stopWhen: stepCountIs(5),
    tools: {
      schema: tool({
        description: "Call this tool to get database schema information",
        inputSchema: z.object({}),
        execute: async () => {
          console.log("Inside Schema tool");
          return `CREATE TABLE error_knowledge_table (
            id text PRIMARY KEY NOT NULL,
            error_keyword text NOT NULL,
            root_cause text NOT NULL,
            resolution text NOT NULL,
            runbook_url text
          );`;
        },
      }),
      db: tool({
        description: "Call this tool to query a database",
        inputSchema: z.object({
          query: z.string().describe("The SQL query to be ran"),
        }),
        execute: async ({ query }) => {
          console.log("Query: ", query);
          // make sure validate or sanitize the query
          return db.run(query);
          // return "";
        },
      }),
    },
  });

  //   return result.toUIMessageStreamResponse();
  return createUIMessageStreamResponse({
    stream: toUIMessageStream({ stream: result.stream }),
  });
}
