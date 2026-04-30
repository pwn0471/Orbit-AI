import Card from "../components/Card";


import { Link } from "react-router-dom";

// Icons
import {
  LayoutDashboard,
  Code2,
  CheckSquare,
  FileText,
  Bot,
  BarChart3,
  BookOpen,
} from "lucide-react";

// Logo (put in public folder)


const Dashboard = () => {
  return (
    <div className="flex bg-[#0b1220] text-white min-h-screen">

      {/* Sidebar */}
      <aside className="hidden md:flex flex-col w-64 h-[calc(100vh-64px)] fixed left-0 top-16 bg-[#111827]/90 backdrop-blur-lg border-r border-gray-700 p-5">

        {/* Logo */}
        <div className="flex items-center gap-3 mb-8">
          <img src="/logo3.png" alt="logo" className="w-10 h-10" />
          <h1 className="text-lg font-bold">PlacePrep</h1>
        </div>

        {/* Menu */}
        <nav className="flex flex-col gap-2 text-sm">

          <SidebarItem icon={<LayoutDashboard size={18} />} text="Dashboard" active />

          <Link to="/dashboard/studytracker">
            <SidebarItem
              icon={<Code2 size={18} />}
              text="Study Tracker"
            />
          </Link>
          
          <Link to="/dashboard/tasks">
            <SidebarItem
              icon={<CheckSquare size={18} />}
              text="Tasks"
            />
          </Link>

          <Link to="/dashboard/notes">
            <SidebarItem
              icon={<FileText size={18} />}
              text="Notes"
            />
          </Link>

          <Link to="/dashboard/aimentor">
            <SidebarItem
              icon={<Bot size={18} />}
              text="AI Mentor"
            />
          </Link>

          
          
          <SidebarItem icon={<BookOpen size={18} />} text="Study Plan" />
          <Link to="/dashboard/studyplan">
            <SidebarItem
              icon={<BookOpen size={18} />}
              text="Study Plan"
            />
          </Link>

        </nav>
      </aside>

      {/* Main */}
      <main className="flex-1 md:ml-64 p-4 md:p-6 space-y-6 mt-16">

        {/* Header */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">Dashboard</h1>
          <p className="text-gray-400 text-sm">Progress at a glance</p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">

          <Card title="Problems Solved" value="148" sub="+12 this week" color="purple" />
          <Card title="Current Streak" value="14d" sub="Best: 21 days" color="yellow" />
          <Card title="Tasks Done Today" value="5/7" sub="71% completion" color="green" />
          <Card title="Weak Topics" value="3" sub="DP · Trees · BFS" color="red" />
          

        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

          {/* AI Plan */}
          <div className="bg-[#111827]/80 backdrop-blur-lg border border-gray-700 p-5 rounded-xl shadow-lg hover:shadow-purple-500/10 transition">

            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Today's AI Plan</h2>
              <span className="bg-gradient-to-r from-purple-500 to-indigo-500 px-3 py-1 rounded text-sm">
                AI Generated
              </span>
            </div>

            <div className="space-y-3">
              <div className="space-y-3">

  {[
    {
      text: "Revise Sliding Window (45 min)",
      done: true,
    },
    {
      text: "Solve 2 medium graph problems",
      done: true,
    },
    {
      text: "Read Tree traversal notes",
      done: false,
    },
    {
      text: "DP: Coin Change + LCS",
      done: false,
    },
    {
      text: "Mock: 1-hour timed session",
      done: false,
    },
  ].map((task, index) => (
    <div
      key={index}
      className={`
        flex items-center gap-3 p-3 rounded-xl border
        ${
          task.done
            ? "bg-green-500/10 border-green-500/20"
            : "bg-[#0b1220] border-gray-700"
        }
      `}
    >

      <div
        className={`
          w-4 h-4 rounded-full border-2
          ${
            task.done
              ? "bg-green-500 border-green-500"
              : "border-gray-500"
          }
        `}
      />

      <p
        className={`
          text-sm
          ${
            task.done
              ? "line-through text-gray-500"
              : "text-gray-300"
          }
        `}
      >
        {task.text}
      </p>

    </div>
  ))}

</div>
            </div>

          </div>

          {/* Weekly Progress */}
          <div className="bg-[#111827]/80 backdrop-blur-lg border border-gray-700 p-5 rounded-xl shadow-lg hover:shadow-purple-500/10 transition">

            <h2 className="text-lg font-semibold mb-4">Weekly Progress</h2>

            <div className="flex items-end justify-between h-40">
              {[4, 6, 3, 8, 5, 7, 2].map((val, i) => (
                <div key={i} className="flex flex-col items-center group">

                  <div
                    className={`w-8 rounded transition-all duration-300 group-hover:scale-110 ${
                      i === 3
                        ? "bg-gradient-to-t from-purple-500 to-indigo-500"
                        : "bg-green-500"
                    }`}
                    style={{ height: `${val * 10}px` }}
                  ></div>

                  <span className="text-xs mt-2 text-gray-400">
                    {["M", "T", "W", "T", "F", "S", "S"][i]}
                  </span>

                </div>
              ))}
            </div>

          </div>

        </div>
      </main>
    </div>
  );
};

export default Dashboard;


/* Sidebar Item Component */
const SidebarItem = ({ icon, text, active }) => {
  return (
    <div
      className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-all ${
        active
          ? "bg-gradient-to-r from-purple-500 to-indigo-500 text-white"
          : "text-gray-300 hover:bg-[#1f2937] hover:text-white"
      }`}
    >
      {icon}
      <span>{text}</span>
    </div>
  );
};