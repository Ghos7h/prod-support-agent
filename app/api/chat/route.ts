import {
  streamText,
  UIMessage,
  convertToModelMessages,
  createUIMessageStreamResponse,
  toUIMessageStream,
} from "ai";
import { openai } from "@ai-sdk/openai";

export async function POST(req: Request) {
  const { messages }: { messages: UIMessage[] } = await req.json();

  const result = streamText({
    model: openai("gpt-6-astra"),
    messages: await convertToModelMessages(messages),
  });

  //   return result.toUIMessageStreamResponse();
  return createUIMessageStreamResponse({
    stream: toUIMessageStream({ stream: result.stream }),
  });
}
