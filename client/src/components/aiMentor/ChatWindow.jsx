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

    // Typing Start
    setLoading(true);

    /*
      ADD GEMINI / OPENAI API HERE
    */

    // Fake AI Response
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

  return (
    <main
      className="
        flex-1

        flex flex-col

        bg-[#020b1a]

        text-white

        h-screen

        pt-[60px]
        lg:pt-0
      "
    >

      {/* Messages Area */}
      <div
        className="
          flex-1
          overflow-y-auto
        "
      >

        {/* Empty State */}
        {messages.length === 1 && (
          <EmptyState />
        )}

        {/* Chat Container */}
        <div
          className="
            max-w-5xl
            mx-auto

            px-4
            md:px-6

            py-10
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

            <div ref={messagesEndRef} />

          </div>

        </div>

      </div>

      {/* Input Area */}
      <div
        className="
          border-t border-[#1b2a45]

          bg-[#020b1a]

          backdrop-blur-xl
        "
      >

        <ChatInput
          sendMessage={sendMessage}
        />

      </div>

    </main>
  );
};

export default ChatWindow;