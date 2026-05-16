import {
  User,
} from "lucide-react";

const MessageBubble = ({
  message,
}) => {
  const isAI =
    message.sender === "ai";

  return (
    <div
      className={`
        flex
        gap-4

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
            w-9 h-9
            rounded-full

            overflow-hidden

            flex-shrink-0

            bg-[#0d1728]

            border border-[#1b2a45]

            shadow-lg
            shadow-black/20
          "
        >

          <img
            src="/logo2.png"
            alt="Orbit AI"
            className="
              w-full
              h-full
              object-cover
            "
          />

        </div>
      )}

      {/* Message */}
      <div
        className={`
          max-w-[90%]
          md:max-w-[75%]

          px-4 py-3
          md:px-5 md:py-4

          rounded-3xl

          text-sm
          md:text-[15px]

          leading-7

          whitespace-pre-wrap
          break-words

          shadow-lg
          shadow-black/10

          transition-all duration-300

          ${
            isAI
              ? `
                bg-[#0d1728]

                border border-[#1b2a45]

                text-gray-100
              `
              : `
                bg-gradient-to-r
                from-violet-600
                to-indigo-600

                text-white

                border border-violet-500/20
              `
          }
        `}
      >

        {message.text}

      </div>

      {/* User Avatar */}
      {!isAI && (
        <div
          className="
            w-9 h-9
            rounded-full

            bg-[#0d1728]

            border border-[#1b2a45]

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

export default MessageBubble;