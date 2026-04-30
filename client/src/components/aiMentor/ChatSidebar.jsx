import {
  MessageSquare,
  Search,
  Plus,
  Sparkles,
} from "lucide-react";

const ChatSidebar = ({
  chats,
  activeChat,
  setActiveChat,
  search,
  setSearch,
  createNewChat,
}) => {
  return (
    <div
      className="
        hidden md:block
        w-72
        ml-64
        pt-20
        bg-[#111827]
        border-r border-gray-700
        p-4
        overflow-y-auto
      "
    >

      {/* Header */}
      <div className="flex items-center justify-between mb-6">

        <div>

          <h2 className="text-2xl font-bold text-white">
            AI Mentor
          </h2>

          <p className="text-sm text-gray-400 mt-1">
            Your placement preparation assistant
          </p>

        </div>

        {/* New Chat */}
        <button
          onClick={createNewChat}
          className="
            p-3 rounded-xl
            bg-gradient-to-r
            from-purple-600
            to-indigo-600
            hover:opacity-90
            transition
          "
        >

          <Plus size={18} />

        </button>

      </div>

      {/* Search */}
      <div className="relative mb-6">

        <Search
          size={18}
          className="
            absolute left-3 top-1/2
            -translate-y-1/2
            text-gray-500
          "
        />

        <input
          type="text"
          placeholder="Search chats..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="
            w-full
            bg-[#0b1220]
            border border-gray-700
            rounded-xl
            py-3 pl-10 pr-4
            text-sm
            outline-none
            focus:border-purple-500
            transition
          "
        />

      </div>

      {/* Quick Suggestions */}
      <div className="mb-6">

        <h3 className="text-sm text-gray-400 mb-3">
          Quick Topics
        </h3>

        <div className="flex flex-wrap gap-2">

          {[
            "DSA",
            "DBMS",
            "OS",
            "CN",
            "React",
            "Interview",
          ].map((topic, index) => (
            <button
              key={index}
              className="
                px-3 py-1.5
                rounded-full
                bg-purple-500/10
                border border-purple-500/20
                text-purple-300
                text-xs
                hover:bg-purple-500/20
                transition
              "
            >

              {topic}

            </button>
          ))}

        </div>

      </div>

      {/* Chat List */}
      <div className="space-y-3">

        {chats
          .filter((chat) =>
            chat.title
              .toLowerCase()
              .includes(search.toLowerCase())
          )
          .map((chat) => (
            <button
              key={chat.id}
              onClick={() =>
                setActiveChat(chat)
              }
              className={`
                w-full
                p-4
                rounded-2xl
                border
                text-left
                transition-all
                hover:scale-[1.01]
                ${
                  activeChat?.id ===
                  chat.id
                    ? "bg-purple-600/20 border-purple-500 shadow-lg shadow-purple-500/10"
                    : "bg-[#0b1220] border-gray-700 hover:border-purple-500"
                }
              `}
            >

              {/* Top */}
              <div className="flex items-start justify-between gap-3">

                <div className="flex items-start gap-3">

                  <div
                    className="
                      w-10 h-10
                      rounded-xl
                      bg-purple-500/20
                      flex items-center justify-center
                      text-purple-400
                      flex-shrink-0
                    "
                  >
                    <MessageSquare size={18} />
                  </div>

                  <div>

                    <h3 className="font-semibold text-white line-clamp-1">
                      {chat.title}
                    </h3>

                    <p className="text-xs text-gray-400 mt-1 line-clamp-2">
                      {chat.preview}
                    </p>

                  </div>

                </div>

                <Sparkles
                  size={16}
                  className="text-purple-400"
                />

              </div>

              {/* Footer */}
              <div className="mt-4 flex items-center justify-between text-xs text-gray-500">

                <span>
                  {chat.topic}
                </span>

                <span>
                  {chat.time}
                </span>

              </div>

            </button>
          ))}

      </div>

    </div>
  );
};

export default ChatSidebar;