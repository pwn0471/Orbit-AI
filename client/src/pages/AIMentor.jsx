import { useState } from "react";

import Sidebar from "../components/aiMentor/Sidebar";
import ChatWindow from "../components/aiMentor/ChatWindow";

const AIMentor = () => {
  // Sidebar Mobile
  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  // Messages
  const [messages, setMessages] =
    useState([
      {
        id: 1,
        sender: "ai",
        text:
          "Hello Pawan 👋 I'm Orbit AI. How can I help you with placements today?",
      },
    ]);

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

      {/* Sidebar */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Chat Area */}
      <ChatWindow
        messages={messages}
        setMessages={setMessages}
        setSidebarOpen={setSidebarOpen}
      />

    </div>
  );
};

export default AIMentor;