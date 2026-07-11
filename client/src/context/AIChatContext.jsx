import { createContext, useContext, useState } from "react";

const AIChatContext = createContext();

export const AIChatProvider = ({ children }) => {
  const createWelcomeMessage = () => ({
    id: Date.now(),
    sender: "ai",
    text: "Hello 👋 I'm Orbit AI. How can I help you with placements today?",
  });

  const createChat = () => ({
    id: Date.now(),
    title: "New Chat",
    messages: [createWelcomeMessage()],
    createdAt: new Date().toISOString(),
  });

  const [chats, setChats] = useState([
    createChat(),
  ]);

  const [activeChatId, setActiveChatId] = useState(chats[0].id);

  const activeChat =
    chats.find(chat => chat.id === activeChatId);

  return (
    <AIChatContext.Provider
      value={{
        chats,
        setChats,
        activeChat,
        activeChatId,
        setActiveChatId,
      }}
    >
      {children}
    </AIChatContext.Provider>
  );
};

export const useAIChat = () =>
  useContext(AIChatContext);