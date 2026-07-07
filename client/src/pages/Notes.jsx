import { useState } from "react";

import DashboardSidebar from "../components/notes/DashboardSidebar";
import NotesList from "../components/notes/NotesList";
import EditorSection from "../components/notes/EditorSection";
import AIAssistant from "../components/notes/AIAssistant";
import { NotesProvider } from "../context/NotesContext";

const Notes = () => {
  const [mobileSidebar, setMobileSidebar] = useState(false);

  return (
    <NotesProvider>
      <div className="min-h-screen bg-[#0B1220] text-white">

        {/* Dashboard Sidebar */}
        <DashboardSidebar
          activePage="Notes"
          mobileSidebar={mobileSidebar}
          setMobileSidebar={setMobileSidebar}
        />

        {/* Main Content */}
        <main
          className="
            pt-16
            md:ml-64
            min-h-screen
          "
        >
          <div
            className="
              flex
              h-[calc(100vh-64px)]
            "
          >
            {/* Notes List */}
            <NotesList />

            {/* Editor */}
            <EditorSection />

            {/* AI Panel */}
            <AIAssistant />
          </div>
        </main>
      </div>
    </NotesProvider>
  );
};

export default Notes;