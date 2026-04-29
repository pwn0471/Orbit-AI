import { Link } from "react-router-dom";

import {
  LayoutDashboard,
  Code2,
  CheckSquare,
  FileText,
  Bot,
  
  BookOpen,
  Menu,
  X,
} from "lucide-react";

const DashboardSidebar = ({
  activePage = "Dashboard",
  mobileSidebar,
  setMobileSidebar,
}) => {
  return (
    <>
      {/* =========================
          DESKTOP SIDEBAR
      ========================== */}
      <aside className="hidden md:flex flex-col w-64 h-[calc(100vh-64px)] fixed left-0 top-16 bg-[#111827]/90 backdrop-blur-lg border-r border-gray-700 p-5 z-40">

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

        {/* Navigation */}
        <nav className="flex flex-col gap-2 text-sm">

          <SidebarItem
            icon={<LayoutDashboard size={18} />}
            text="Dashboard"
            to="/dashboard"
            active={activePage === "Dashboard"}
          />

          <SidebarItem
            icon={<Code2 size={18} />}
            text="Study Tracker"
            active={activePage === "Study Tracker"}
          />

          <SidebarItem
            icon={<CheckSquare size={18} />}
            text="Tasks"
            to="/dashboard/tasks"
            active={activePage === "Tasks"}
          />

          <SidebarItem
            icon={<FileText size={18} />}
            text="Notes"
            to="/dashboard/notes"
            active={activePage === "Notes"}
          />

          <SidebarItem
            icon={<Bot size={18} />}
            text="AI Mentor"
            active={activePage === "AI Mentor"}
          />

          

          <SidebarItem
            icon={<BookOpen size={18} />}
            text="Study Plan"
            active={activePage === "Study Plan"}
          />

        </nav>

      </aside>

      {/* =========================
          MOBILE TOPBAR
      ========================== */}
      <div className="md:hidden fixed top-16 left-0 right-0 z-40 bg-[#111827]/95 backdrop-blur-lg border-b border-gray-700 px-4 py-3 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-2">

          <img
            src="/logo3.png"
            alt="logo"
            className="w-8 h-8"
          />

          <h2 className="font-bold text-white">
            PlacePrep
          </h2>

        </div>

        {/* Menu Button */}
        <button
            onClick={() =>
                setMobileSidebar(true)
            }
            className="
                px-3 py-2 rounded-lg
                bg-[#1f2937]
                text-sm text-gray-300
                hover:bg-[#2a3441]
                transition
            "
        >       

        {activePage}

     </button>

      </div>

      {/* =========================
          MOBILE SIDEBAR
      ========================== */}
      {mobileSidebar && (
        <div className="fixed inset-0 z-50 bg-black/70 md:hidden">

          <div className="w-72 h-full bg-[#111827] border-r border-gray-700 p-5 overflow-y-auto">

            {/* Top */}
            <div className="flex items-center justify-between mb-8">

              <div className="flex items-center gap-3">

                <img
                  src="/logo3.png"
                  alt="logo"
                  className="w-10 h-10"
                />

                <h1 className="text-lg font-bold text-white">
                  PlacePrep
                </h1>

              </div>

              <button
                onClick={() =>
                  setMobileSidebar(false)
                }
                className="text-gray-400 hover:text-white"
              >
                <X size={22} />
              </button>

            </div>

            {/* Navigation */}
            <nav className="flex flex-col gap-2 text-sm">

              <SidebarItem
                icon={
                  <LayoutDashboard size={18} />
                }
                text="Dashboard"
                to="/dashboard"
                active={
                  activePage === "Dashboard"
                }
              />

              <SidebarItem
                icon={<Code2 size={18} />}
                text="Study Tracker"
                active={
                  activePage === "Study Tracker"
                }
              />

              <SidebarItem
                icon={
                  <CheckSquare size={18} />
                }
                text="Tasks"
                to="/dashboard/tasks"
                active={
                  activePage === "Tasks"
                }
              />

              <SidebarItem
                icon={<FileText size={18} />}
                text="Notes"
                to="/dashboard/notes"
                active={
                  activePage === "Notes"
                }
              />

              <SidebarItem
                icon={<Bot size={18} />}
                text="AI Mentor"
                active={
                  activePage === "AI Mentor"
                }
              />

              

              <SidebarItem
                icon={<BookOpen size={18} />}
                text="Study Plan"
                active={
                  activePage === "Study Plan"
                }
              />

            </nav>

          </div>

        </div>
      )}
    </>
  );
};

export default DashboardSidebar;

/* =========================
   SIDEBAR ITEM
========================= */

const SidebarItem = ({
  icon,
  text,
  to,
  active,
}) => {
  const content = (
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

  return to ? (
    <Link to={to}>{content}</Link>
  ) : (
    content
  );
};