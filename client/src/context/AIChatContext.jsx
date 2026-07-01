import { createContext, useContext, useState } from "react";

const AIChatContext = createContext();

export const AIChatProvider = ({ children }) => {
  const [chats, setChats] = useState([
    {
      id: Date.now(),
      title: "New Chat",
      messages: [
        {
          id: 1,
          sender: "ai",
          text: "Hello Pawan 👋 I'm Orbit AI. How can I help you today?",
        },
      ],
    },
  ]);

  const [currentChatId, setCurrentChatId] = useState(chats[0].id);

  // Current Chat
  const currentChat = chats.find(
    (chat) => chat.id === currentChatId
  );

  // Create New Chat
  const createNewChat = () => {
    const newChat = {
      id: Date.now(),
      title: "New Chat",
      messages: [
        {
          id: 1,
          sender: "ai",
          text: "Hello Pawan 👋 I'm Orbit AI. How can I help you today?",
        },
      ],
    };

    setChats((prev) => [newChat, ...prev]);
    setCurrentChatId(newChat.id);
  };

  // Update Messages
  const updateMessages = (messages) => {
    setChats((prev) =>
      prev.map((chat) =>
        chat.id === currentChatId
          ? {
              ...chat,
              messages,
            }
          : chat
      )
    );
  };

  return (
    <AIChatContext.Provider
      value={{
        chats,
        currentChat,
        currentChatId,
        setCurrentChatId,
        createNewChat,
        updateMessages,
      }}
    >
      {children}
    </AIChatContext.Provider>
  );
};

export const useAIChat = () => useContext(AIChatContext);