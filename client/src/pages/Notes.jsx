import NotesList from "../components/notes/NotesList";
import EditorSection from "../components/notes/EditorSection";
import AIAssistant from "../components/notes/AIAssistant";
import EmptyNotesState from "../components/notes/EmptyNotesState";

import { useNotes } from "../context/NotesContext";

const Notes = () => {
  const { notes, createNote } = useNotes();

  return (
    <div className="min-h-screen bg-[#0B1220] text-white">

      {/* Main Content */}
      <main className="pt-16 h-[calc(100vh-64px)]">

        {notes.length === 0 ? (

          <EmptyNotesState
            onCreate={createNote}
          />

        ) : (

          <div
            className="
              flex
              h-full
              max-w-[1900px]
              mx-auto
            "
          >

            {/* Notes Sidebar */}
            <NotesList />

            {/* Editor */}
            <EditorSection />

            {/* AI Assistant */}
            <AIAssistant />

          </div>

        )}

      </main>

    </div>
  );
};

export default Notes;