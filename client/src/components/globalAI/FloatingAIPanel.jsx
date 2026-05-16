import {
  useEffect,
  useRef,
  useState,
} from "react";

import FloatingMessage from "./FloatingMessage";
import FloatingChatInput from "./FloatingChatInput";
import TypingAnimation from "./TypingAnimation";
import { chatWithAI } from "../../apis/api";

const FloatingAIPanel = ({
  isOpen,
  setIsOpen,
  messages,
  setMessages,
}) => {
  const messagesEndRef = useRef(null);

  const panelRef = useRef(null);

  const [loading, setLoading] = useState(false);

  // Auto Scroll to Latest Message
  useEffect(() => {
    const container =
      messagesEndRef.current;

    if (container) {
      container.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }
  }, [messages, loading, isOpen]);

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

  // Clear Messages When Closed
  useEffect(() => {
      if (!isOpen) {
      setMessages([]);
    } 
  }, [isOpen, setMessages]);

  // Send Message
  const sendMessage = async (text) => {

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

  setLoading(true);

  try {

    const response =
      await chatWithAI({
        message: text,
      });

    const aiMessage = {
      id: Date.now() + 1,
      sender: "ai",
      text: response.data.reply,
    };
    console.log(response.data);

    setMessages((prev) => [
      ...prev,
      aiMessage,
    ]);

  } catch (error) {

    const errorMessage = {
      id: Date.now() + 1,
      sender: "ai",
      text: "Something went wrong.",
    };

    setMessages((prev) => [
      ...prev,
      errorMessage,
    ]);

    console.error(error);

  } finally {
    setLoading(false);
  }
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
        {messages.length === 0 && (
          <div
            className="
              h-full

              flex
              items-center
              justify-center

              text-center

              px-6
            "
          >

          <h2
            className="
              text-2xl
              sm:text-3xl

              font-semibold

              text-white/95

              leading-relaxed
            "
          >
            How can I help you today?
          </h2>

        </div>
      )}

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

        <div ref={messagesEndRef}
        className="h-1"
        />

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