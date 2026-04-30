import {
  SendHorizonal,
  Sparkles,
} from "lucide-react";

const ChatInput = ({
  input,
  setInput,
  sendMessage,
}) => {
  // Enter Send
  const handleKeyDown = (e) => {
    if (
      e.key === "Enter" &&
      !e.shiftKey
    ) {
      e.preventDefault();

      sendMessage();
    }
  };

  // Suggestions
  const suggestions = [
    "Explain Binary Search",
    "DBMS Normalization",
    "OS Deadlock",
    "CN Protocols",
    "React Hooks",
    "Mock Interview",
  ];

  return (
    <div
      className="
        sticky bottom-0
        pt-4
        bg-gradient-to-t
        from-[#0b1220]
        to-transparent
      "
    >

      {/* Suggestions */}
      <div className="flex gap-2 overflow-x-auto pb-3 scrollbar-hide">

        {suggestions.map(
          (item, index) => (
            <button
              key={index}
              onClick={() =>
                setInput(item)
              }
              className="
                flex items-center gap-2
                px-4 py-2
                rounded-full
                whitespace-nowrap
                bg-[#111827]
                border border-gray-700
                text-sm text-gray-300
                hover:border-purple-500
                hover:text-white
                transition
              "
            >

              <Sparkles
                size={14}
                className="text-purple-400"
              />

              {item}

            </button>
          )
        )}

      </div>

      {/* Input Box */}
      <div
        className="
          bg-[#111827]
          border border-gray-700
          rounded-3xl
          p-3 md:p-4
          shadow-xl shadow-black/20
        "
      >

        <div className="flex items-end gap-3">

          {/* Textarea */}
          <textarea
            value={input}
            onChange={(e) =>
              setInput(e.target.value)
            }
            onKeyDown={handleKeyDown}
            rows={1}
            placeholder="Ask AI Mentor anything about placements..."
            className="
              flex-1
              resize-none
              bg-transparent
              outline-none
              text-white
              placeholder:text-gray-500
              text-sm md:text-base
              max-h-40
              overflow-y-auto
            "
          />

          {/* Send */}
          <button
            onClick={sendMessage}
            disabled={!input.trim()}
            className={`
              w-12 h-12
              rounded-2xl
              flex items-center justify-center
              transition-all
              ${
                input.trim()
                  ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white hover:scale-105"
                  : "bg-[#1f2937] text-gray-500 cursor-not-allowed"
              }
            `}
          >

            <SendHorizonal size={20} />

          </button>

        </div>

      </div>

    </div>
  );
};

export default ChatInput;