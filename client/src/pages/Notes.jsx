import { useState } from "react";

import NotesList from "../components/notes/NotesList";
import EditorSection from "../components/notes/EditorSection";
import EmptyNotesState from "../components/notes/EmptyNotesState";

import { useNotes } from "../context/NotesContext";

const Notes = () => {
  const { notes, createNote } = useNotes();

  const [mobileNotesOpen, setMobileNotesOpen] = useState(false);

  return (
    <div className="h-screen bg-[#0B1220] text-white overflow-hidden">
      <main className="pt-16 h-full">
        {notes.length === 0 ? (
          <EmptyNotesState onCreate={createNote} />
        ) : (
          <div className="relative flex h-[calc(100vh-64px)] overflow-hidden">
            {/* ================= Desktop Sidebar ================= */}

            <div className="hidden lg:flex w-[360px] flex-shrink-0">
              <NotesList />
            </div>

            {/* ================= Mobile Sidebar ================= */}

            <div
              className={`
                fixed
                top-16
                bottom-0
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
                  top-16
                  bg-black/40
                  z-30
                  lg:hidden
                "
              />
            )}

            {/* ================= Editor ================= */}

            <div className="flex-1 min-w-0 flex overflow-hidden">
              <EditorSection
                openSidebar={() => setMobileNotesOpen(true)}
              />
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default Notes;