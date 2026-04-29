import {
  LayoutDashboard,
  CheckSquare,
  FileText,
  Bot,
  BarChart3,
  BookOpen,
  Code2,
} from "lucide-react";

import { Link } from "react-router-dom";

const TasksSidebar = () => {
  return (
    <aside className="hidden md:flex flex-col w-64 h-[calc(100vh-64px)] fixed left-0 top-16 bg-[#111827]/90 backdrop-blur-lg border-r border-gray-700 p-5">

      {/* Logo */}
      <div className="flex items-center gap-3 mb-8">

        <img
          src="/logo3.png"
          alt="logo"
          className="w-10 h-10"
        />

        <h1 className="text-lg font-bold text-white">
          PlacePrep
        </h1>

      </div>

      {/* Nav */}
      <nav className="flex flex-col gap-2 text-sm">

        <Link to="/dashboard">
          <SidebarItem
            icon={<LayoutDashboard size={18} />}
            text="Dashboard"
          />
        </Link>

        <SidebarItem
          icon={<Code2 size={18} />}
          text="Study Tracker"
        />

        <Link to="/dashboard/tasks">
          <SidebarItem
            icon={<CheckSquare size={18} />}
            text="Tasks"
            active
          />
        </Link>

        <Link to="/dashboard/notes">
          <SidebarItem
            icon={<FileText size={18} />}
            text="Notes"
          />
        </Link>

        <SidebarItem
          icon={<Bot size={18} />}
          text="AI Mentor"
        />

        <SidebarItem
          icon={<BarChart3 size={18} />}
          text="Progress"
        />

        <SidebarItem
          icon={<BookOpen size={18} />}
          text="Study Plan"
        />

      </nav>

    </aside>
  );
};

export default TasksSidebar;

const SidebarItem = ({
  icon,
  text,
  active,
}) => {
  return (
    <div
      className={`
        flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-all
        ${
          active
            ? "bg-gradient-to-r from-purple-500 to-indigo-500 text-white"
            : "text-gray-300 hover:bg-[#1f2937] hover:text-white"
        }
      `}
    >
      {icon}
      <span>{text}</span>
    </div>
  );
};