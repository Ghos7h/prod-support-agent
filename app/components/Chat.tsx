"use client";

import { useChat } from "@ai-sdk/react";
import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function Chat() {
  const [input, setInput] = useState("");
  const { messages, sendMessage } = useChat();
  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      <div className="flex flex-col items-center justify-center text-center mt-20 mb-10">
        <div className="text-5xl mb-4">🤖</div>

        <h1 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100">
          How can I help you today?
        </h1>

        <p className="mt-2 text-sm text-zinc-500 max-w-xs">
          Ask any question, troubleshoot an issue, or explore ideas.
        </p>

        <div className="flex flex-wrap justify-center gap-2 mt-6">
          <div className="px-3 py-2 text-sm rounded-lg border border-zinc-200 dark:border-zinc-700">
            Debug an error
          </div>
        </div>
      </div>
      {messages.map((message) => (
        <div key={message.id} className="whitespace-pre-wrap">
          <div className="font-bold mb-2">
            {message.role === "user" ? (
              <span className="text-3xl">🙋🏻</span>
            ) : (
              <span className="text-3xl">🤖</span>
            )}
          </div>
          {message.parts.map((part, i: number) => {
            const typedPart = part as {
              type: string;
              text?: string;
              input?: { query?: string };
              state: string;
              output?: { rows?: unknown[] };
            };
            switch (typedPart.type) {
              case "text":
                return (
                  <div
                    key={`${message.id}-${i}`}
                    className="prose prose-sm max-w-none dark:prose-invert"
                  >
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {typedPart.text}
                    </ReactMarkdown>
                  </div>
                );
              case "tool-db":
                return (
                  <div
                    key={`${message.id}-${i}`}
                    className="my-2 p-3 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-200 dark:border-blue-800"
                  >
                    <div className="font-semibold text-blue-700 dark:text-blue-300 mb-1">
                      🔍 Database Query
                    </div>
                    {typedPart.input?.query && (
                      <pre className="text-xs bg-white dark:bg-zinc-900 p-2 rounded mb-2 overflow-x-auto">
                        {typedPart.input?.query}
                      </pre>
                    )}
                    {typedPart.state === "output-available" &&
                      typedPart.output && (
                        <div className="text-sm text-green-700 dark:text-green-300">
                          ✅ Returned {typedPart.output.rows?.length || 0} rows
                        </div>
                      )}
                  </div>
                  /*  <pre key={`${message.id}-${i}`}>
                    {JSON.stringify(part, null, 2)}
                  </pre> */
                );

              case "tool-schema":
                return (
                  <div
                    key={`${message.id}-${i}`}
                    className="my-2 p-3 bg-blue-50 dark:bg-blue-900/20 rounded border border-blue-200 dark:border-blue-800"
                  >
                    <div className="font-semibold text-blue-700 dark:text-blue-300 mb-1">
                      🗒️ Schema Tool
                    </div>
                    {typedPart.state === "output-available" && (
                      <div className="text-sm text-green-700 dark:text-green-300 py-2">
                        ✅ Schema Loaded
                      </div>
                    )}
                  </div>
                );
              case "step-start":
                return (
                  <div
                    key={`${message.id}-${i}`}
                    className="text-sm text-gray-500 dark:text-gray-400 my-4"
                  >
                    🔄 Processing...
                  </div>
                );
              case "reasoning":
                return null;
              default:
                return null;
            }
          })}
        </div>
      ))}

      <form
        onSubmit={(e) => {
          e.preventDefault();
          sendMessage({ text: input });
          setInput("");
        }}
      >
        <input
          className="fixed dark:bg-zinc-900 bottom-0 w-full max-w-md p-2 mb-8 border border-zinc-300 dark:border-zinc-800 rounded shadow-xl"
          value={input}
          placeholder="Say something..."
          onChange={(e) => setInput(e.currentTarget.value)}
        />
      </form>
    </div>
  );
}
