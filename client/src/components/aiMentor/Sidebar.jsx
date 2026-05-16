import {
  MessageSquarePlus,
  Menu,
  Sparkles,
  Search,
  X,
} from "lucide-react";

const Sidebar = ({
  sidebarOpen,
  setSidebarOpen,
}) => {
  // Dummy Chats
  const chats = [
    "Binary Search",
    "DBMS Transactions",
    "React Hooks",
    "OS Deadlock",
    "CN Protocols",
  ];

  return (
    <>
      {/* MOBILE OVERLAY */}
      {sidebarOpen && (
        <div
          onClick={() =>
            setSidebarOpen(false)
          }
          className="
            fixed inset-0

            bg-black/60
            backdrop-blur-sm

            z-40

            lg:hidden
          "
        />
      )}

      {/* SIDEBAR */}
      <aside
        className={`
          fixed

          top-0 left-0

          z-50

          h-screen

          w-[280px]

          bg-[#07111f]

          border-r border-[#1b2a45]

          flex flex-col

          transition-all duration-300

          ${
            sidebarOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }

          lg:translate-x-0
          lg:top-[80px]
          lg:h-[calc(100vh-80px)]
        `}
      >

        {/* MOBILE TOP */}
        <div
          className="
            lg:hidden

            flex items-center justify-between

            px-5 py-5

            border-b border-[#1b2a45]
          "
        >

          {/* Logo */}
          <div className="flex items-center gap-3">

            <div
              className="
                w-10 h-10

                rounded-xl

                overflow-hidden

                bg-[#0d1728]

                border border-[#1b2a45]

                p-1.5
              "
            >

              <img
                src="/logo2.png"
                alt="Orbit AI"
                className="
                  w-full
                  h-full
                  object-contain
                "
              />

            </div>

            <span
              className="
                text-white
                font-semibold
                text-lg
              "
            >
              Orbit AI
            </span>

          </div>

          {/* Close */}
          <button
            onClick={() =>
              setSidebarOpen(false)
            }
            className="
              text-gray-400
            "
          >

            <X size={24} />

          </button>

        </div>

        {/* DESKTOP TOP */}
        <div
          className="
            hidden lg:block

            p-3 space-y-2
          "
        >

          {/* Logo */}
          <div
            className="
              flex items-center gap-3

              px-3 py-2
            "
          >

            <div
              className="
                w-10 h-10

                rounded-xl

                overflow-hidden

                bg-[#0d1728]

                border border-[#1b2a45]

                p-1.5
              "
            >

              <img
                src="/logo2.png"
                alt="Orbit AI"
                className="
                  w-full
                  h-full
                  object-contain
                "
              />

            </div>

            <span
              className="
                text-white
                font-semibold
                text-[15px]
              "
            >
              Orbit AI
            </span>

          </div>

        </div>

        {/* ACTIONS */}
        <div
          className="
            px-3
            pt-2
            space-y-2
          "
        >

          {/* New Chat */}
          <button
            className="
              w-full

              flex items-center gap-3

              px-3 py-3

              rounded-xl

              text-gray-200

              hover:bg-[#13203a]

              transition-all duration-300
            "
          >

            <MessageSquarePlus
              size={18}
            />

            <span className="text-sm">
              New chat
            </span>

          </button>

          {/* Search */}
          <button
            className="
              w-full

              flex items-center gap-3

              px-3 py-3

              rounded-xl

              text-gray-400

              hover:bg-[#13203a]

              transition-all duration-300
            "
          >

            <Search size={18} />

            <span className="text-sm">
              Search chats
            </span>

          </button>

        </div>

        {/* RECENTS */}
        <div
          className="
            flex-1

            overflow-y-auto

            px-2
            py-5
          "
        >

          {/* Heading */}
          <p
            className="
              text-[11px]
              uppercase

              tracking-wider

              text-gray-500

              px-3
              mb-3
            "
          >
            Recent
          </p>

          {/* Chats */}
          <div className="space-y-1">

            {chats.map(
              (chat, index) => (
                <button
                  key={index}
                  className="
                    w-full

                    flex items-center gap-3

                    px-3 py-3

                    rounded-xl

                    text-left

                    text-gray-300

                    hover:bg-[#13203a]
                    hover:text-white

                    transition-all duration-300
                  "
                >

                  <Sparkles
                    size={15}
                    className="
                      text-violet-400
                      flex-shrink-0
                    "
                  />

                  <span
                    className="
                      truncate
                      text-sm
                    "
                  >
                    {chat}
                  </span>

                </button>
              )
            )}

          </div>

        </div>

        {/* BOTTOM */}
        <div
          className="
            p-3

            border-t border-[#1b2a45]
          "
        >

          <button
            className="
              w-full

              flex items-center gap-3

              px-3 py-2.5

              rounded-xl

              hover:bg-[#13203a]

              transition-all duration-300
            "
          >

            {/* Avatar */}
            <div
              className="
                w-9 h-9

                rounded-full

                bg-[#13203a]

                flex items-center justify-center

                text-sm
                text-white
              "
            >
              P
            </div>

            {/* User */}
            <div className="text-left">

              <p
                className="
                  text-sm
                  text-white
                "
              >
                Personal
              </p>

              <p
                className="
                  text-xs
                  text-gray-500
                "
              >
                Orbit Workspace
              </p>

            </div>

          </button>

        </div>

      </aside>

      {/* MOBILE TOP BAR */}
      <div
        className="
          fixed top-0 left-0 right-0

          z-30

          lg:hidden

          flex items-center justify-between

          px-4 py-5

          bg-[#020b1a]
        "
      >

        {/* Menu */}
        <button
          onClick={() =>
            setSidebarOpen(true)
          }
          className="
            w-12 h-12

            rounded-full

            bg-[#0d1728]

            border border-[#1b2a45]

            flex items-center justify-center

            text-white
          "
        >

          <Menu size={22} />

        </button>

        {/* Right Button */}
        <button
          className="
            w-12 h-12

            rounded-full

            bg-[#0d1728]

            border border-[#1b2a45]

            text-white

            text-sm
            font-medium
          "
        >
          P
        </button>

      </div>
    </>
  );
};

export default Sidebar;