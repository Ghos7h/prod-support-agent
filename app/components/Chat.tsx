"use client";

import { useChat } from "@ai-sdk/react";
import { useState } from "react";

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
          {message.role === "user" ? "User: " : "AI: "}
          {message.parts.map((part, i) => {
            switch (part.type) {
              case "text":
                return <div key={`${message.id}-${i}`}>{part.text}</div>;
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
