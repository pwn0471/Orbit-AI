import {
  useEffect,
  useRef,
  useState,
} from "react";

import FloatingMessage from "./FloatingMessage";
import FloatingChatInput from "./FloatingChatInput";
import TypingAnimation from "./TypingAnimation";

const FloatingAIPanel = ({
  isOpen,
  setIsOpen,
  messages,
  setMessages,
}) => {
  const messagesEndRef =
    useRef(null);

  const panelRef =
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
  }, [messages]);

  // Close Outside Click
  useEffect(() => {
    const handleClickOutside = (
      event
    ) => {
      if (
        panelRef.current &&
        !panelRef.current.contains(
          event.target
        )
      ) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener(
        "mousedown",
        handleClickOutside
      );
    }

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, [isOpen, setIsOpen]);

  // Send Message
  // Send Message
  const sendMessage = async (
    text
  ) => {
    // User Message
    const userMessage = {
      id: Date.now(),
      sender: "user",
      text,
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
    ]);

    // Start Typing
    setLoading(true);

    /*
      ADD GEMINI / OPENAI API HERE
    */

    // Fake Delay
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  // Close Panel
  if (!isOpen) return null;

  return (
    <div
      ref={panelRef}
      className="
        fixed
        z-50

        bottom-20
        right-3

        sm:bottom-28
        sm:right-6

        w-[95vw]
        sm:w-[360px]

        h-[82vh]
        sm:h-[580px]

        bg-[#0b1220]/95
        backdrop-blur-xl

        border border-gray-700

        rounded-3xl

        shadow-2xl
        shadow-black/50

        overflow-hidden

        flex flex-col
      "
    >

      {/* Header */}
      <div
        className="
          flex items-center gap-3

          px-4 py-4
          sm:px-5

          border-b border-gray-700

          bg-[#111827]/90
        "
      >

        {/* Logo */}
        <div
          className="
            w-10 h-10
            rounded-2xl

            overflow-hidden

            flex items-center justify-center

            bg-gradient-to-r
            from-purple-500
            via-pink-500
            to-indigo-500

            flex-shrink-0
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

        {/* Text */}
        <div>

          <h2
            className="
              font-semibold
              text-white
              text-sm
              sm:text-base
            "
          >
            Orbit AI
          </h2>

          <p
            className="
              text-xs
              text-gray-400
            "
          >
            Ask anything
          </p>

        </div>

      </div>

      {/* Messages */}
      <div
        className="
          flex-1
          overflow-y-auto

          p-3
          sm:p-4
        "
      >

        {messages.map(
          (message) => (
            <FloatingMessage
              key={message.id}
              message={message}
            />
          )
        )}

        {loading && (
          <TypingAnimation />
        )}

        <div ref={messagesEndRef} />

      </div>

      {/* Input */}
      <FloatingChatInput
        sendMessage={
          sendMessage
        }
      />

    </div>
  );
};

export default FloatingAIPanel;