import {
  useState,
  useRef,
  useEffect,
} from "react";

import {
  SendHorizonal,
} from "lucide-react";

const ChatInput = ({
  sendMessage,
}) => {
  const [input, setInput] =
    useState("");

  const textareaRef =
    useRef(null);

  // Auto Resize
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height =
        "auto";

      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [input]);

  // Send
  const handleSend = () => {
    if (!input.trim()) return;

    sendMessage(input);

    setInput("");

    if (textareaRef.current) {
      textareaRef.current.style.height =
        "auto";
    }
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
        sticky
        bottom-0

        w-full

        bg-[#081028]/95
        backdrop-blur-xl

        border-t border-[#223457]
      "
    >

      <div
        className="
          max-w-4xl
          mx-auto

          px-4
          md:px-6

          py-4
        "
      >

        {/* Input Container */}
        <div
          className="
            flex items-end gap-3

            bg-[#111c35]

            border border-[#223457]

            rounded-3xl

            px-4 py-3

            shadow-lg
            shadow-black/10
          "
        >

          {/* Textarea */}
          <textarea
            ref={textareaRef}
            rows={1}
            value={input}
            onChange={(e) =>
              setInput(e.target.value)
            }
            onKeyDown={handleKeyDown}
            placeholder="Message Orbit AI..."
            className="
              flex-1

              bg-transparent

              outline-none

              resize-none

              text-white
              text-sm
              md:text-[15px]

              leading-6

              placeholder:text-gray-400

              max-h-40
              overflow-y-auto
            "
          />

          {/* Send */}
          <button
            onClick={handleSend}
            disabled={!input.trim()}
            className={`
              w-11 h-11

              rounded-full

              flex items-center justify-center

              transition-all

              flex-shrink-0

              ${
                input.trim()
                  ? `
                    bg-gradient-to-r
                    from-purple-500
                    to-indigo-500

                    text-white

                    hover:scale-105
                  `
                  : `
                    bg-[#162544]
                    text-gray-500
                    cursor-not-allowed
                  `
              }
            `}
          >

            <SendHorizonal
              size={18}
            />

          </button>

        </div>

        {/* Bottom Text */}
        <p
          className="
            text-center
            text-xs
            text-gray-400

            mt-3
          "
        >
          Orbit AI can make mistakes. Verify important information.
        </p>

      </div>

    </div>
  );
};

export default ChatInput;