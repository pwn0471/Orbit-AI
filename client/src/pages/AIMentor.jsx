import { useMemo, useState } from "react";

import Sidebar from "../components/aiMentor/Sidebar";
import ChatWindow from "../components/aiMentor/ChatWindow";

const createWelcomeMessage = () => ({
  id: Date.now(),
  sender: "ai",
  text:
    "Hello Pawan 👋 I'm Orbit AI. How can I help you with placements today?",
});

const createChat = () => ({
  id: Date.now(),
  title: "New Chat",
  messages: [createWelcomeMessage()],
});

const AIMentor = () => {
  // Sidebar
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // All chats
  const [chats, setChats] = useState([
    createChat(),
  ]);

  // Active Chat
  const [activeChatId, setActiveChatId] = useState(chats[0].id);

  // Current Chat
  const activeChat = useMemo(() => {
    return chats.find(chat => chat.id === activeChatId);
  }, [chats, activeChatId]);

  // Update Messages
  const setMessages = (updater) => {
    setChats(prevChats =>
      prevChats.map(chat => {
        if (chat.id !== activeChatId) return chat;

        const newMessages =
          typeof updater === "function"
            ? updater(chat.messages)
            : updater;
         let title = chat.title;

         // auto title from first user message 
         if(title === "New Chat") {
          const firstUserMessage = newMessages.find(
            (msg) => msg.sender === "user"
          );
          
          if(firstUserMessage){
            title = firstUserMessage.text.length > 30
            ? firstUserMessage.text.slice(0,30) + "..."
            : firstUserMessage.text;
          }
         }

        return {
          ...chat,
          title,
          messages: newMessages,
        };
      })
    );
  };

  // Create New Chat
  const createNewChat = () => {
    const newChat = createChat();

    setChats(prev => [newChat, ...prev]);

    setActiveChatId(newChat.id);

    setSidebarOpen(false);
  };

  const deleteChat = (chatId)=>{
    const updatedChats = chats.filter(
    (chat) => chat.id !== chatId
  );

  if (updatedChats.length === 0) {
    const newChat = createChat();

    setChats([newChat]);
    setActiveChatId(newChat.id);

    return;
  }

  setChats(updatedChats);

  if (chatId === activeChatId) {
    setActiveChatId(updatedChats[0].id);
  }
  };

  return (
    <div
      className="
        h-[calc(100vh-80px)]
        mt-[80px]

        flex

        bg-[#020b1a]

        text-white

        overflow-hidden
      "
    >
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}

        chats={chats}
        activeChatId={activeChatId}
        setActiveChatId={setActiveChatId}

        createNewChat={createNewChat}
        deleteChat={deleteChat}
      />

      <ChatWindow
        messages={activeChat?.messages || []}
        setMessages={setMessages}
        setSidebarOpen={setSidebarOpen}
      />
    </div>
  );
};

export default AIMentor;