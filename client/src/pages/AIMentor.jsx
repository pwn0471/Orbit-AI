import { useEffect, useMemo, useState } from "react";
import Sidebar from "../components/aiMentor/Sidebar";
import ChatWindow from "../components/aiMentor/ChatWindow";
import { useAuth } from "../context/AuthContext";

const createWelcomeMessage = (userName) => ({
  id: Date.now(),
  sender: "ai",
  text: `Hello ${userName || "there"} 👋 I'm Orbit AI. How can I help you today?`,
});

const createChat = (userName) => ({
  id: Date.now(),
  title: "New Chat",
  messages: [createWelcomeMessage(userName)],
});

const AIMentor = () => {
  const { user } = useAuth();
  // Sidebar
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // All chats
  const [chats, setChats] = useState(() => {
    const savedChats = localStorage.getItem("orbit-ai-chats");

    if (savedChats) {
      return JSON.parse(savedChats);
    }

    return [createChat(user?.name)];
  });

  // Active Chat
  const [activeChatId, setActiveChatId] = useState(() => {
    const savedId = localStorage.getItem("orbit-ai-active-chat");

    return savedId || chats[0].id;
  });
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
    const newChat = createChat(user?.name);

    setChats(prev => [newChat, ...prev]);

    setActiveChatId(newChat.id);

    setSidebarOpen(false);
  };

  // delete chat

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

  // rename chat 
  const renameChat = (chatId, newTitle) => {
    if (!newTitle.trim()) return;

    setChats((prevChats) =>
      prevChats.map((chat) =>
        chat.id === chatId
          ? {
              ...chat,
              title: newTitle,
            }
          : chat
      )
    );
  };

  useEffect(() => {
    localStorage.setItem(
      "orbit-ai-chats",
      JSON.stringify(chats)
    );
  }, [chats]);

  useEffect(() => {
    localStorage.setItem(
      "orbit-ai-active-chat",
      activeChatId
    );
  }, [activeChatId]);

  useEffect(() => {
    const exists = chats.some(
      (chat) => chat.id === activeChatId
    );

    if (!exists && chats.length > 0) {
      setActiveChatId(chats[0].id);
    }
  }, [chats, activeChatId]);


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
        renameChat={renameChat}
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