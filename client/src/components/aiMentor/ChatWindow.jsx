import {
  useEffect,
  useRef,
  useState,
} from "react";

import EmptyState from "./EmptyState";
import MessageBubble from "./MessageBubble";
import ChatInput from "./ChatInput";
import TypingAnimation from "./TypingAnimation";

const ChatWindow = ({
  messages,
  setMessages,
}) => {
  const messagesEndRef =
    useRef(null);

  const [loading, setLoading] =
    useState(false);

  // Auto Scroll
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView(
      {
        behavior: "smooth",
      }
    );
  }, [messages, loading]);

  // Send Message
  const sendMessage = async (
    text
  ) => {
    const userMessage = {
      id: Date.now(),
      sender: "user",
      text,
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
    ]);

    // Typing
    setLoading(true);

    /*
      ADD GEMINI / OPENAI API HERE
    */

    // Fake Response
    setTimeout(() => {
      const aiMessage = {
        id: Date.now() + 1,
        sender: "ai",
        text:
          "This is a sample AI response. Later you will connect Gemini/OpenAI API here 🚀",
      };

      setMessages((prev) => [
        ...prev,
        aiMessage,
      ]);

      setLoading(false);
    }, 1500);
  };

  // Empty Home
  const isEmpty =
    messages.length === 1;

  return (
    <main
      className="
        flex-1

        flex flex-col

        bg-[#020b1a]

        text-white

        h-full

        relative

        overflow-hidden
      "
    >

      {/* EMPTY SCREEN */}
      {isEmpty ? (
        <EmptyState
          sendMessage={sendMessage}
        />
      ) : (
        <>
          {/* CHAT AREA */}
          <div
            className="
              flex-1

              overflow-y-auto

              px-3
              md:px-6

              pt-24
              md:pt-10

              pb-36 md:pb-40
            "
          >

            {/* Chat Container */}
            <div
              className="
                max-w-4xl
                mx-auto
              "
            >

              {/* Messages */}
              <div className="space-y-6">

                {messages.map(
                  (message) => (
                    <MessageBubble
                      key={message.id}
                      message={message}
                    />
                  )
                )}

                {/* Typing */}
                {loading && (
                  <TypingAnimation />
                )}

                <div
                  ref={messagesEndRef}
                />

              </div>

            </div>

          </div>

          {/* DESKTOP INPUT */}
          <div
            className="
              hidden md:block

              absolute bottom-0 left-0 right-0

              bg-gradient-to-t
              from-[#020b1a]
              to-transparent

              pt-10
            "
          >

            <ChatInput
              sendMessage={sendMessage}
            />

          </div>

          {/* MOBILE FLOATING INPUT */}
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
                bg-[#0d1728]

                border border-[#3a3a3f]

                rounded-full

                px-4 py-3

                flex items-center gap-3
              "
            >

              {/* Plus */}
              <button
                className="
                  text-gray-300
                  text-xl
                "
              >
                +
              </button>

              {/* Input */}
              <input
                type="text"
                placeholder="Ask Orbit AI"
                className="
                  flex-1

                  bg-transparent

                  outline-none

                  text-white

                  placeholder:text-gray-500
                "
              />

              {/* Mic */}
              <button
                className="
                  text-gray-400
                "
              >
                🎤
              </button>

              {/* Voice */}
              <button
                className="
                  w-10 h-10

                  rounded-full

                  bg-white

                  text-black

                  flex items-center justify-center
                "
              >
                ⦿
              </button>

            </div>

          </div>
        </>
      )}

    </main>
  );
};

export default ChatWindow;