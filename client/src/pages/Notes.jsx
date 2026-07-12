import { useState } from "react";

import NotesList from "../components/notes/NotesList";
import EditorSection from "../components/notes/EditorSection";
import EmptyNotesState from "../components/notes/EmptyNotesState";

import { useNotes } from "../context/NotesContext";

const Notes = () => {
  const { notes, createNote } = useNotes();

  // Mobile Notes Sidebar
  const [mobileNotesOpen, setMobileNotesOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0B1220] text-white">

      {/* Main Content */}
      <main className="pt-16 h-[calc(100vh-64px)]">

        {notes.length === 0 ? (
          <EmptyNotesState onCreate={createNote} />
        ) : (
          <div
            className="
              relative
              h-[calc(100vh-64px)]
              overflow-hidden
              lg:grid
              lg:grid-cols-[360px_1fr]
            "
          >
            {/* ================= Desktop Sidebar ================= */}
            <div className="hidden lg:block">
              <NotesList />
            </div>

            {/* ================= Mobile Sidebar ================= */}
            <div
              className={`
                fixed
                inset-y-16
                left-0
                z-40
                w-[340px]
                bg-[#0F172A]
                transform
                transition-transform
                duration-300
                lg:hidden
                ${
                  mobileNotesOpen
                    ? "translate-x-0"
                    : "-translate-x-full"
                }
              `}
            >
              <NotesList
                mobile
                closeSidebar={() => setMobileNotesOpen(false)}
              />
            </div>

            {/* Overlay */}
            {mobileNotesOpen && (
              <div
                onClick={() => setMobileNotesOpen(false)}
                className="
                  fixed
                  inset-0
                  z-30
                  bg-black/40
                  lg:hidden
                "
              />
            )}

            {/* ================= Editor ================= */}
            <EditorSection
              openSidebar={() => setMobileNotesOpen(true)}
            />

          </div>
        )}

      </main>

    </div>
  );
};

export default Notes;