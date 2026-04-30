import { useEffect, useState } from "react";

import DashboardSidebar from "../components/notes/DashboardSidebar";

import ChatSidebar from "../components/aiMentor/ChatSidebar";
import ChatMessage from "../components/aiMentor/ChatMessage";
import ChatInput from "../components/aiMentor/ChatInput";
import SuggestionCard from "../components/aiMentor/SuggestionCard";
import MentorStats from "../components/aiMentor/MentorStats";
import WeakTopicsCard from "../components/aiMentor/WeakTopicsCard";
import InterviewCard from "../components/aiMentor/InterviewCard";

const AIMentor = () => {
  // Mobile Sidebar
  const [mobileSidebar, setMobileSidebar] =
    useState(false);

  // Search
  const [search, setSearch] = useState("");

  // Input
  const [input, setInput] = useState("");

  // Chats
  const [chats, setChats] = useState(() => {
    const savedChats =
      localStorage.getItem("mentor-chats");

    return savedChats
      ? JSON.parse(savedChats)
      : [
          {
            id: 1,
            title:
              "Binary Search Explanation",
            preview:
              "Explain Binary Search in simple terms...",
            topic: "DSA",
            time: "2m ago",
          },
          {
            id: 2,
            title:
              "DBMS Transactions",
            preview:
              "What is ACID property in DBMS?",
            topic: "DBMS",
            time: "1h ago",
          },
        ];
  });

  // Messages
  const [messages, setMessages] = useState(
    () => {
      const savedMessages =
        localStorage.getItem(
          "mentor-messages"
        );

      return savedMessages
        ? JSON.parse(savedMessages)
        : [
            {
              id: 1,
              sender: "ai",
              text: "Hello 👋 I’m your AI Mentor. Ask me anything about placements, DSA, DBMS, OS, CN, React, or interview preparation.",
              time: "Now",
              suggestions: [
                "Explain Binary Search",
                "Mock Interview",
                "DBMS Normalization",
              ],
            },
          ];
    }
  );

  // Active Chat
  const [activeChat, setActiveChat] =
    useState(chats[0]);

  // Save LocalStorage
  useEffect(() => {
    localStorage.setItem(
      "mentor-chats",
      JSON.stringify(chats)
    );
  }, [chats]);

  useEffect(() => {
    localStorage.setItem(
      "mentor-messages",
      JSON.stringify(messages)
    );
  }, [messages]);

  // Create New Chat
  const createNewChat = () => {
    const newChat = {
      id: Date.now(),
      title: "New AI Conversation",
      preview: "Start chatting...",
      topic: "AI Mentor",
      time: "Now",
    };

    setChats((prev) => [
      newChat,
      ...prev,
    ]);

    setActiveChat(newChat);

    setMessages([
      {
        id: Date.now(),
        sender: "ai",
        text: "New AI mentor session started 🚀",
        time: "Now",
      },
    ]);
  };

  // AI Response Generator
  const generateAIResponse = (
    question
  ) => {
    const lower =
      question.toLowerCase();

    // DSA
    if (
      lower.includes("binary search")
    ) {
      return {
        text: "Binary Search is an efficient searching algorithm used on sorted arrays. It works by repeatedly dividing the search space into half.",
        code: `public int binarySearch(int[] arr, int target){
    int start = 0;
    int end = arr.length - 1;

    while(start <= end){
        int mid = start + (end - start)/2;

        if(arr[mid] == target){
            return mid;
        }

        if(arr[mid] < target){
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }

    return -1;
}`,
        suggestions: [
          "Time Complexity?",
          "Recursive Binary Search",
          "Binary Search Problems",
        ],
      };
    }

    // DBMS
    if (
      lower.includes("dbms")
    ) {
      return {
        text: "DBMS (Database Management System) is software used to store, manage, and retrieve data efficiently. Key concepts include normalization, indexing, transactions, and SQL.",
        suggestions: [
          "Normalization",
          "ACID Properties",
          "SQL Joins",
        ],
      };
    }

    // OS
    if (
      lower.includes("os") ||
      lower.includes("deadlock")
    ) {
      return {
        text: "Deadlock occurs when multiple processes wait indefinitely for resources held by each other. Common conditions include mutual exclusion, hold & wait, no preemption, and circular wait.",
        suggestions: [
          "Deadlock Prevention",
          "Banker's Algorithm",
          "CPU Scheduling",
        ],
      };
    }

    // CN
    if (
      lower.includes("cn") ||
      lower.includes("network")
    ) {
      return {
        text: "Computer Networks enable communication between devices. Important topics include OSI Model, TCP/IP, Routing, HTTP, DNS, and Protocols.",
        suggestions: [
          "OSI Model",
          "TCP vs UDP",
          "HTTP Methods",
        ],
      };
    }

    // React
    if (
      lower.includes("react")
    ) {
      return {
        text: "React is a JavaScript library used for building interactive user interfaces using reusable components and state management.",
        suggestions: [
          "React Hooks",
          "useEffect",
          "React Projects",
        ],
      };
    }

    // Interview
    if (
      lower.includes("interview")
    ) {
      return {
        text: "For placement interviews, focus on DSA, DBMS, OS, CN, projects, communication skills, and mock interview practice consistently.",
        suggestions: [
          "HR Questions",
          "Technical Round",
          "Mock Coding",
        ],
      };
    }

    // Default
    return {
      text: "I can help you with DSA, DBMS, OS, CN, React, interview preparation, study plans, and placement guidance 🚀",
      suggestions: [
        "Ask DSA Question",
        "Study Plan",
        "Mock Interview",
      ],
    };
  };

  // Send Message
  const sendMessage = () => {
    if (!input.trim()) return;

    // User Message
    const userMessage = {
      id: Date.now(),
      sender: "user",
      text: input,
      time: "Now",
    };

    // AI Response
    const aiData =
      generateAIResponse(input);

    const aiMessage = {
      id: Date.now() + 1,
      sender: "ai",
      text: aiData.text,
      code: aiData.code,
      suggestions:
        aiData.suggestions,
      time: "Now",
    };

    setMessages((prev) => [
      ...prev,
      userMessage,
      aiMessage,
    ]);

    setInput("");
  };

  // Weak Topics
  const weakTopics = [
    {
      name: "Dynamic Programming",
      reason:
        "Low accuracy in DP-based problems detected.",
      priority: "High",
      confidence: 35,
    },
    {
      name: "DBMS Normalization",
      reason:
        "Revision frequency is low in database concepts.",
      priority: "Medium",
      confidence: 60,
    },
  ];

  // Interviews
  const interviews = [
    {
      role: "Frontend Developer",
      type: "Technical Round",
      question:
        "Explain the difference between useEffect and useLayoutEffect in React.",
      duration: "45 mins",
    },
    {
      role: "SDE Intern",
      type: "DSA Interview",
      question:
        "How would you detect a cycle in a linked list?",
      duration: "1 hour",
    },
  ];

  return (
    <div className="flex min-h-screen bg-[#0b1220] text-white">

      {/* Sidebar */}
      <DashboardSidebar
        activePage="AI Mentor"
        mobileSidebar={
          mobileSidebar
        }
        setMobileSidebar={
          setMobileSidebar
        }
      />

      {/* Chat Sidebar */}
      <ChatSidebar
        chats={chats}
        activeChat={activeChat}
        setActiveChat={setActiveChat}
        search={search}
        setSearch={setSearch}
        createNewChat={
          createNewChat
        }
      />

      {/* Mobile Sidebar */}
      {mobileSidebar && (
        <div className="fixed inset-0 z-50 bg-black/70 md:hidden">

          <div className="w-72 h-full bg-[#111827] border-r border-gray-700 p-4 overflow-y-auto">

            {/* Header */}
            <div className="flex items-start justify-between mb-6">

              <div>

                <h2 className="text-2xl font-bold">
                  AI Mentor
                </h2>

                <p className="text-sm text-gray-400 mt-1">
                  AI placement assistant
                </p>

              </div>

              {/* Close */}
              <button
                onClick={() =>
                  setMobileSidebar(
                    false
                  )
                }
                className="
                  p-2 rounded-lg
                  bg-[#0b1220]
                  border border-gray-700
                  text-gray-400
                "
              >
                ✕
              </button>

            </div>

            {/* Search */}
            <input
              type="text"
              placeholder="Search chats..."
              value={search}
              onChange={(e) =>
                setSearch(
                  e.target.value
                )
              }
              className="
                w-full
                mb-5
                px-4 py-3
                rounded-xl
                bg-[#0b1220]
                border border-gray-700
                outline-none
                focus:border-purple-500
              "
            />

            {/* Chats */}
            <div className="space-y-3">

              {chats
                .filter((chat) =>
                  chat.title
                    .toLowerCase()
                    .includes(
                      search.toLowerCase()
                    )
                )
                .map((chat) => (
                  <button
                    key={chat.id}
                    onClick={() => {
                      setActiveChat(
                        chat
                      );

                      setMobileSidebar(
                        false
                      );
                    }}
                    className={`
                      w-full
                      p-4
                      rounded-2xl
                      border
                      text-left
                      transition
                      ${
                        activeChat?.id ===
                        chat.id
                          ? "bg-purple-600/20 border-purple-500"
                          : "bg-[#0b1220] border-gray-700"
                      }
                    `}
                  >

                    <h3 className="font-semibold">
                      {chat.title}
                    </h3>

                    <p className="text-xs text-gray-400 mt-2">
                      {chat.preview}
                    </p>

                  </button>
                ))}

            </div>

          </div>

        </div>
      )}

      {/* Main */}
      <main className="flex-1 pt-36 md:pt-20 px-4 md:px-6 pb-10">

        {/* Header */}
        <div className="mb-8">

          <h1 className="text-3xl md:text-4xl font-bold">
            AI Mentor
          </h1>

          <p className="text-gray-400 mt-2">
            Personalized AI guidance
            for placement preparation.
          </p>

        </div>

        {/* Stats */}
        <MentorStats
          totalQuestions={
            messages.length
          }
          weakTopics={2}
          sessions={8}
          readiness={72}
        />

        {/* Main Grid */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">

          {/* Chat Section */}
          <div className="xl:col-span-2">

            {/* Chat Box */}
            <div
              className="
                bg-[#111827]/80
                border border-gray-700
                rounded-3xl
                p-4 md:p-6
                min-h-[650px]
                flex flex-col
              "
            >

              {/* Messages */}
              <div className="flex-1 overflow-y-auto pr-1">

                {messages.map(
                  (message) => (
                    <ChatMessage
                      key={message.id}
                      message={message}
                    />
                  )
                )}

              </div>

              {/* Input */}
              <ChatInput
                input={input}
                setInput={setInput}
                sendMessage={
                  sendMessage
                }
              />

            </div>

          </div>

          {/* Right Section */}
          <div className="space-y-6">

            {/* Suggestions */}
            <div className="grid gap-4">

              <SuggestionCard
                type="study"
                title="Revise Graph Algorithms"
                description="AI detected lower confidence in graph traversal and shortest path problems."
                action="Start Revision"
              />

              <SuggestionCard
                type="target"
                title="Mock Interview Practice"
                description="Practice technical interviews to improve communication and problem-solving."
                action="Begin Practice"
              />

            </div>

            {/* Weak Topics */}
            <WeakTopicsCard
              weakTopics={
                weakTopics
              }
            />

            {/* Interviews */}
            <InterviewCard
              interviews={interviews}
            />

          </div>

        </div>

      </main>

    </div>
  );
};

export default AIMentor;