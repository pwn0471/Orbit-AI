import {
  Code2,
  Brain,
  Briefcase,
  SendHorizonal,
  Plus,
  Mic,
} from "lucide-react";

import {
  useState,
} from "react";

const EmptyState = ({
  sendMessage,
}) => {
  const [input, setInput] =
    useState("");

  const suggestions = [
    {
      icon: <Code2 size={16} />,
      text: "DSA Help",
    },

    {
      icon: <Brain size={16} />,
      text: "Study Plan",
    },

    {
      icon: <Briefcase size={16} />,
      text: "Mock Interview",
    },
  ];

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
        flex-1

        flex flex-col

        bg-[#020b1a]

        relative

        overflow-hidden
      "
    >

      {/* DESKTOP CENTER */}
      <div
        className="
          hidden md:flex

          flex-1

          flex-col
          items-center
          justify-center

          px-4
        "
      >

        {/* Greeting */}
        <h1
          className="
            text-5xl

            font-semibold

            text-white

            text-center

            mb-10
          "
        >
          Good to see you.
        </h1>

        {/* Desktop Search */}
        <div
          className="
            w-full
            max-w-4xl

            bg-[#0d1728]

            border border-[#1b2a45]

            rounded-full

            px-5 py-4

            flex items-center gap-3

            shadow-2xl
            shadow-black/10
          "
        >

          {/* Input */}
          <input
            type="text"
            value={input}
            onChange={(e) =>
              setInput(e.target.value)
            }
            onKeyDown={handleKeyDown}
            placeholder="Ask anything"
            className="
              flex-1

              bg-transparent

              outline-none

              text-white
              text-lg

              placeholder:text-gray-500
            "
          />

          {/* Send */}
          <button
            onClick={handleSend}
            disabled={!input.trim()}
            className={`
              w-12 h-12

              rounded-full

              flex items-center justify-center

              transition-all duration-300

              ${
                input.trim()
                  ? `
                    bg-gradient-to-r
                    from-violet-600
                    to-indigo-600

                    text-white
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

        {/* Desktop Quick Actions */}
        <div
          className="
            flex flex-wrap
            items-center
            justify-center

            gap-3

            mt-6
          "
        >

          {suggestions.map(
            (item, index) => (
              <button
                key={index}
                onClick={() =>
                  sendMessage(item.text)
                }
                className="
                  flex items-center gap-2

                  px-5 py-3

                  rounded-full

                  bg-[#07111f]

                  border border-[#1b2a45]

                  text-gray-300
                  text-sm

                  hover:bg-[#13203a]
                  hover:text-white

                  transition-all duration-300
                "
              >

                {item.icon}

                {item.text}

              </button>
            )
          )}

        </div>

      </div>

      {/* MOBILE VIEW */}
      <div
        className="
          md:hidden

          flex-1

          flex flex-col justify-end

          px-6
          pb-36
          pt-28
        "
      >

        {/* Mobile Quick Actions */}
        <div className="space-y-8">

          {suggestions.map(
            (item, index) => (
              <button
                key={index}
                onClick={() =>
                  sendMessage(item.text)
                }
                className="
                  w-full

                  flex items-center gap-4

                  text-left

                  text-white
                "
              >

                {/* Icon */}
                <div
                  className="
                    text-gray-300
                  "
                >
                  {item.icon}
                </div>

                {/* Text */}
                <span
                  className="
                    text-2xl
                    font-medium
                  "
                >
                  {item.text}
                </span>

              </button>
            )
          )}

        </div>

      </div>

      {/* MOBILE BOTTOM INPUT */}
      <div
        className="
          md:hidden

          absolute bottom-0 left-0 right-0

          px-4
          pb-5
        "
      >

        <div
          className="
            bg-[#1c1c20]

            border border-[#3a3a3f]

            rounded-full

             h-[60px]
             pl-4
             pr-2


            flex items-center gap-3
            
          "
        >

          {/* Plus */}
          <button
            className="
              text-gray-300
              flex-shrink-0
            "
          >

            <Plus size={22} />

          </button>

          {/* Input */}
          <input
            type="text"
            value={input}
            onChange={(e) =>
              setInput(e.target.value)
            }
            onKeyDown={handleKeyDown}
            placeholder="Ask Orbit AI"
            className="
              flex-1

              bg-transparent

              outline-none

              text-white
              text-[17px]

              placeholder:text-gray-500
            "
          />

          
          

          {/* Send */}
          <button
            onClick={handleSend}
            disabled={!input.trim()}
            className={`
               min-w-[42px]
               h-[42px]

              rounded-full

              flex items-center justify-center
              

              transition-all duration-300
              hover:scale-105
              active:scale-95

              ${
                input.trim()
                  ? `
                    bg-white
                    text-black
                    hover:bg-gray-200
                  `
                  : `
                    bg-[#2c2c31]
                    text-gray-500
                  `
              }
            `}
          >

            <SendHorizonal
              size={17}
            />

          </button>

        </div>

      </div>

    </div>
  );
};

export default EmptyState;