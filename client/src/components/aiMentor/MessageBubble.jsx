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

            bg-gradient-to-r
            from-cyan-500
            via-blue-500
            to-indigo-600

            shadow-lg
            shadow-cyan-500/20
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

          ${
            isAI
              ? `
                bg-[#0f1b38]

                border border-[#243456]

                text-white
              `
              : `
                bg-gradient-to-r
                from-cyan-600
                via-blue-600
                to-indigo-600

                text-white
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

            bg-[#132041]

            border border-[#243456]

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