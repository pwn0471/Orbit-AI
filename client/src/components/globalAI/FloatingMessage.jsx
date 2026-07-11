import {
  Bot,
  User,
} from "lucide-react";

import ReactMarkdown
from "react-markdown";

const FloatingMessage = ({
  message,
}) => {
  const isAI =
    message.sender === "ai";

  return (
    <div
      className={`
        flex gap-3 mb-5

        ${
          isAI
            ? "justify-start"
            : "justify-end"
        }
      `}
    >

      {/* AI Avatar */}
      {isAI && (
        <div
          className="
            w-8 h-8

            rounded-full

            bg-gradient-to-r
            from-purple-600
            to-indigo-600

            flex items-center justify-center

            text-white

            flex-shrink-0
          "
        >

          <Bot size={16} />

        </div>
      )}

      {/* Message */}
      <div
        className={`
          max-w-[85%]

          px-4 py-3

          rounded-2xl

          text-sm
          leading-7

          overflow-hidden
          break-words
          whitespace-pre-wrap

          ${
            isAI
              ? `
                bg-[#111c35]
                border border-[#223457]
                text-white
              `
              : `
                bg-gradient-to-r
                from-purple-600
                to-indigo-600

                text-white
              `
          }
        `}
      >

        {isAI ? (
          <div
            className="
              prose
              prose-invert

              max-w-none

              prose-p:my-1
              prose-headings:my-2
              prose-li:my-1

              prose-ul:my-1
              prose-ol:my-1

              prose-strong:text-white

              prose-code:text-purple-300

              prose-pre:bg-[#0b1730]
              prose-pre:border
              prose-pre:border-[#223457]

              overflow-hidden

              break-words
            "
          >

            <ReactMarkdown
              components={{
                code({
                  inline,
                  children,
                }) {
                  return inline ? (
                    <code
                      className="
                        bg-[#162544]
                        px-1.5 py-1
                        rounded-md
                        text-purple-300
                        break-words
                      "
                    >
                      {children}
                    </code>
                  ) : (
                    <pre
                      className="
                        bg-[#0b1730]

                        p-4

                        rounded-xl

                        overflow-x-auto

                        border border-[#223457]

                        whitespace-pre-wrap
                        break-words
                      "
                    >
                      <code>
                        {children}
                      </code>
                    </pre>
                  );
                },
              }}
            >
              {message.text}
            </ReactMarkdown>

          </div>
        ) : (
          <p className="whitespace-pre-wrap">
            {message.text}
          </p>
        )}

      </div>

      {/* User Avatar */}
      {!isAI && (
        <div
          className="
            w-8 h-8

            rounded-full

            bg-[#162544]

            border border-[#223457]

            flex items-center justify-center

            text-white

            flex-shrink-0
          "
        >

          <User size={16} />

        </div>
      )}

    </div>
  );
};

export default FloatingMessage;