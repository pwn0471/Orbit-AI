import { useState, useRef,useEffect} from "react";

import { SendHorizonal} from "lucide-react";

const ChatInput = ({sendMessage}) => {
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
        w-full

        bg-[#020b1a]

        px-4
        md:px-6

        pb-6
        pt-3
      "
    >

      <div
        className="
          max-w-4xl
          mx-auto
        "
      >

        {/* Input Wrapper */}
        <div
          className="
            bg-[#0d1728]

            border border-[#1b2a45]

            rounded-[30px]

            px-5 py-4

            flex items-end gap-3

            shadow-2xl
            shadow-black/10

            transition-all duration-300

            focus-within:border-violet-500/30
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
            placeholder="Ask Orbit AI anything..."
            className="
              flex-1

              bg-transparent

              outline-none

              resize-none

              text-white
              text-[15px]

              leading-7

              placeholder:text-gray-500

              max-h-40
              overflow-y-auto
            "
          />

          {/* Send Button */}
          <button
            onClick={handleSend}
            disabled={!input.trim()}
            className={`
              w-11 h-11

              rounded-full

              flex items-center justify-center

              transition-all duration-300

              flex-shrink-0

              ${
                input.trim()
                  ? `
                    bg-gradient-to-r
                    from-violet-600
                    to-indigo-600

                    text-white

                    hover:scale-105
                    hover:shadow-lg
                    hover:shadow-violet-500/20
                  `
                  : `
                    bg-[#13203a]

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
            text-gray-500

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