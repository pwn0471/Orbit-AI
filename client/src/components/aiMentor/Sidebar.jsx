import {
  MessageSquarePlus,
  Menu,
  X,
  Sparkles,
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
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          onClick={() =>
            setSidebarOpen(false)
          }
          className="
            fixed inset-0
            bg-[#020817]/80
            backdrop-blur-sm
            z-40
            lg:hidden
          "
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed lg:static

          top-[95px]
          left-4

          z-50

          h-[calc(100vh-115px)]

          w-[300px]

          bg-gradient-to-b
          from-[#081028]
          via-[#0b1730]
          to-[#0f1d3d]

          border border-[#223457]

          rounded-[28px]

          flex flex-col

          shadow-2xl
          shadow-black/20

          overflow-hidden

          transition-all duration-300

          ${
            sidebarOpen
              ? "translate-x-0"
              : "-translate-x-[120%] lg:translate-x-0"
          }
        `}
      >

        {/* Top Section */}
        <div
          className="
            px-5
            pt-6
            pb-5

            border-b border-[#223457]
          "
        >

          {/* Logo */}
          <div className="flex items-center gap-4">

            {/* Logo Box */}
            <div
              className="
                w-14 h-14

                rounded-2xl

                overflow-hidden

                bg-[#111c35]

                border border-[#223457]

                p-2

                flex items-center justify-center

                flex-shrink-0
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

            {/* Text */}
            <div>

              <h2
                className="
                  text-white
                  font-bold
                  text-xl
                  tracking-wide
                "
              >
                Orbit AI
              </h2>

              <p
                className="
                  text-sm
                  text-gray-400
                  mt-1
                "
              >
                AI Placement Mentor
              </p>

            </div>

          </div>

          {/* Close Mobile */}
          <button
            onClick={() =>
              setSidebarOpen(false)
            }
            className="
              lg:hidden

              absolute
              top-5
              right-5

              text-gray-400
            "
          >

            <X size={22} />

          </button>

        </div>

        {/* New Chat */}
        <div className="px-4 pt-5">

          <button
            className="
              w-full

              flex items-center gap-3

              px-4 py-4

              rounded-2xl

              bg-[#111c35]

              border border-[#223457]

              hover:bg-[#162544]

              text-white

              transition-all duration-300
            "
          >

            <MessageSquarePlus
              size={20}
            />

            <span
              className="
                font-medium
                text-[15px]
              "
            >
              New Chat
            </span>

          </button>

        </div>

        {/* Recent Chats */}
        <div
          className="
            flex-1
            overflow-y-auto

            px-4
            py-6
          "
        >

          {/* Heading */}
          <p
            className="
              text-xs
              font-medium
              uppercase
              tracking-wider

              text-gray-500

              px-2
              mb-4
            "
          >
            Recent Chats
          </p>

          {/* Chat List */}
          <div className="space-y-2">

            {chats.map(
              (chat, index) => (
                <button
                  key={index}
                  className="
                    w-full

                    flex items-center gap-3

                    px-3 py-3.5

                    rounded-2xl

                    text-left

                    text-gray-300

                    hover:bg-[#162544]
                    hover:text-white

                    border border-transparent
                    hover:border-[#223457]

                    transition-all duration-300
                  "
                >

                  {/* Icon */}
                  <div
                    className="
                      w-8 h-8

                      rounded-xl

                      bg-[#162544]

                      flex items-center justify-center

                      flex-shrink-0
                    "
                  >

                    <Sparkles
                      size={15}
                      className="
                        text-purple-400
                      "
                    />

                  </div>

                  {/* Text */}
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

      </aside>

      {/* Mobile Top Bar */}
      <div
        className="
          fixed top-0 left-0 right-0
          z-30

          lg:hidden

          flex items-center justify-between

          px-4 py-4

          bg-[#081028]/95
          backdrop-blur-xl

          border-b border-[#223457]
        "
      >

        {/* Menu */}
        <button
          onClick={() =>
            setSidebarOpen(true)
          }
          className="text-white"
        >

          <Menu size={24} />

        </button>

        {/* Mobile Logo */}
        <div className="flex items-center gap-3">

          <div
            className="
              w-10 h-10

              rounded-xl

              bg-[#111c35]

              border border-[#223457]

              p-1.5

              overflow-hidden
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
            "
          >
            Orbit AI
          </span>

        </div>

        <div />

      </div>
    </>
  );
};

export default Sidebar;