import { useState } from "react";

import {
  SendHorizonal,
} from "lucide-react";

const FloatingChatInput = ({
  sendMessage,
}) => {
  const [input, setInput] =
    useState("");

  // Send
  const handleSend = () => {
    if (!input.trim()) return;

    sendMessage(input);

    setInput("");
  };

  // Enter Send
  const handleKeyDown = (e) => {
    if (
      e.key === "Enter" &&
      !e.shiftKey
    ) {
      e.preventDefault();

      handleSend();
    }
  };

  return (
    <div
      className="
        border-t border-gray-700
        p-3
        bg-[#111827]
      "
    >

      <div
        className="
          flex items-center gap-3
          bg-[#1f2937]
          rounded-2xl
          px-4 py-2
        "
      >

        {/* Input */}
        <textarea
          rows={1}
          value={input}
          onChange={(e) =>
            setInput(e.target.value)
          }
          onKeyDown={handleKeyDown}
          placeholder="Ask Orbit AI..."
          className="
            flex-1
            bg-transparent
            outline-none
            resize-none
            text-sm text-white
            placeholder:text-gray-400
            max-h-28
          "
        />

        {/* Send */}
        <button
          onClick={handleSend}
          disabled={!input.trim()}
          className={`
            w-10 h-10
            rounded-full
            flex items-center justify-center
            transition-all
            ${
              input.trim()
                ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:scale-105"
                : "bg-[#374151] text-gray-500"
            }
          `}
        >

          <SendHorizonal
            size={18}
          />

        </button>

      </div>

    </div>
  );
};

export default FloatingChatInput;