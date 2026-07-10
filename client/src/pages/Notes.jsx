import { useState } from "react";

import DashboardSidebar from "../components/notes/DashboardSidebar";
import NotesList from "../components/notes/NotesList";
import EditorSection from "../components/notes/EditorSection";
import AIAssistant from "../components/notes/AIAssistant";
import { useNotes} from "../context/NotesContext";
import EmptyNotesState from "../components/notes/EmptyNotesState";

const Notes = () => {
  const [mobileSidebar, setMobileSidebar] = useState(false);
  const { notes, createNote } = useNotes();

  return (
    
      <div className="min-h-screen bg-[#0B1220] text-white">

        {/* Dashboard Sidebar */}
        <DashboardSidebar
          activePage="Notes"
          mobileSidebar={mobileSidebar}
          setMobileSidebar={setMobileSidebar}
        />

        {/* Main Content */}
        <main className="pt-16 md:ml-64 h-[calc(100vh-64px)]">

          {notes.length === 0 ? (

            <EmptyNotesState
              onCreate={createNote}
            />

          ) : (

            <div className="flex h-[calc(100vh-64px)]">

              <NotesList />

              <EditorSection />

              <AIAssistant />

            </div>

          )}

        </main>
      </div>
    
  );
};

export default Notes;