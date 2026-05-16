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

        gap-3
        md:gap-4

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
            md:w-9 md:h-9

            rounded-full

            overflow-hidden

            flex-shrink-0

            bg-gradient-to-r
            from-cyan-500
            to-indigo-600

            shadow-lg
            shadow-cyan-500/10
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
          max-w-[88%]
          md:max-w-[75%]

          px-4 py-3
          md:px-5 md:py-4

          rounded-3xl

          text-[14px]
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

                text-white
              `
              : `
                bg-gradient-to-r
                from-violet-600
                to-indigo-600

                text-white
              `
          }
        `}
      >

        {message.text}

      </div>

      {/* USER AVATAR */}
      {!isAI && (
        <div
          className="
            w-8 h-8
            md:w-9 md:h-9

            rounded-full

            bg-[#13203a]

            border border-[#1b2a45]

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

export default MessageBubble;