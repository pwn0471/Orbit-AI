import {
  Bot,
  User,
  Sparkles,
} from "lucide-react";

const ChatMessage = ({
  message,
}) => {
  const isAI =
    message.sender === "ai";

  return (
    <div
      className={`
        flex gap-3 mb-6
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
            w-10 h-10
            rounded-2xl
            bg-gradient-to-r
            from-purple-600
            to-indigo-600
            flex items-center justify-center
            text-white
            flex-shrink-0
            shadow-lg shadow-purple-500/20
          "
        >
          <Bot size={20} />
        </div>
      )}

      {/* Message */}
      <div
        className={`
          max-w-[85%] md:max-w-[70%]
          rounded-3xl
          p-4 md:p-5
          border
          transition-all
          ${
            isAI
              ? "bg-[#111827] border-gray-700 text-white"
              : "bg-gradient-to-r from-purple-600 to-indigo-600 border-purple-500 text-white"
          }
        `}
      >

        {/* Header */}
        <div className="flex items-center gap-2 mb-3">

          <div
            className={`
              w-7 h-7
              rounded-full
              flex items-center justify-center
              ${
                isAI
                  ? "bg-purple-500/20 text-purple-400"
                  : "bg-white/20 text-white"
              }
            `}
          >

            {isAI ? (
              <Sparkles size={14} />
            ) : (
              <User size={14} />
            )}

          </div>

          <span className="text-sm font-medium">

            {isAI
              ? "AI Mentor"
              : "You"}

          </span>

          <span className="text-xs opacity-60">

            {message.time}

          </span>

        </div>

        {/* Content */}
        <div className="space-y-3">

          {/* Text */}
          <p className="text-sm md:text-[15px] leading-7 whitespace-pre-wrap">

            {message.text}

          </p>

          {/* Code Block */}
          {message.code && (
            <div
              className="
                bg-[#0b1220]
                border border-gray-700
                rounded-2xl
                overflow-hidden
                mt-4
              "
            >

              {/* Top */}
              <div
                className="
                  flex items-center justify-between
                  px-4 py-2
                  border-b border-gray-700
                  bg-[#111827]
                "
              >

                <span className="text-xs text-gray-400">
                  Java
                </span>

                <span className="text-xs text-purple-400">
                  Code Example
                </span>

              </div>

              {/* Code */}
              <pre
                className="
                  p-4
                  overflow-x-auto
                  text-sm
                  text-green-400
                "
              >
                <code>
                  {message.code}
                </code>
              </pre>

            </div>
          )}

          {/* Suggestion Chips */}
          {message.suggestions && (
            <div className="flex flex-wrap gap-2 pt-2">

              {message.suggestions.map(
                (item, index) => (
                  <button
                    key={index}
                    className="
                      px-3 py-2
                      rounded-full
                      bg-purple-500/10
                      border border-purple-500/20
                      text-purple-300
                      text-xs
                      hover:bg-purple-500/20
                      transition
                    "
                  >

                    {item}

                  </button>
                )
              )}

            </div>
          )}

        </div>

      </div>

      {/* User Avatar */}
      {!isAI && (
        <div
          className="
            w-10 h-10
            rounded-2xl
            bg-[#1f2937]
            border border-gray-700
            flex items-center justify-center
            text-white
            flex-shrink-0
          "
        >
          <User size={18} />
        </div>
      )}

    </div>
  );
};

export default ChatMessage;