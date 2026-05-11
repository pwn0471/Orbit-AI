import {Bot,User} from "lucide-react";

const FloatingMessage = ({
  message,
}) => {
  const isAI =
    message.sender === "ai";

  return (
    <div
      className={`
        flex gap-3 mb-4
        ${
          isAI
            ? "justify-start": "justify-end"
        }
      `}
    >

      {/* AI Avatar */}
      {isAI && (
        <div
          className="
            w-8 h-8 rounded-full bg-gradient-to-r from-purple-600
             to-indigo-600 flex items-center justify-center text-white flex-shrink-0"
        >
          <Bot size={16} />
        </div>
      )}

      {/* Message */}
      <div
        className={`
          max-w-[80%] px-4 py-3rounded-2xl text-sm leading-6break-words
          ${
            isAI
              ? "bg-[#1f2937] text-white"
              : "bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
          }
        `}
      >

        {message.text}

      </div>

      {/* User Avatar */}
      {!isAI && (
        <div
          className="
            w-8 h-8 rounded-full bg-[#374151]
            flex items-center justify-center text-white flex-shrink-0
          "
        >
          <User size={16} />
        </div>
      )}

    </div>
  );
};

export default FloatingMessage;