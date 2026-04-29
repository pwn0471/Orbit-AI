import { X } from "lucide-react";

import NotesHeader from "./NotesHeader";
import NoteCard from "./NoteCard";

const MobileNotesSidebar = ({
  mobileSidebar,
  setMobileSidebar,
  search,
  setSearch,
  notes,
  activeNoteId,
  createNote,
  switchNote,
  togglePinNote,
  deleteNote,
}) => {
  // Close Sidebar + Switch Note
  const handleSwitchNote = (note) => {
    switchNote(note);
    setMobileSidebar(false);
  };

  return (
    <>
      {mobileSidebar && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm md:hidden">

          {/* Sidebar */}
          <div className="w-[85%] max-w-sm h-full bg-[#111827] border-r border-gray-700 p-4 overflow-y-auto animate-slideIn">

            {/* Top */}
            <div className="flex items-center justify-between mb-6">

              <div>

                <h2 className="text-2xl font-bold text-white">
                  Notes
                </h2>

                <p className="text-sm text-gray-400 mt-1">
                  Manage your notes
                </p>

              </div>

              {/* Close */}
              <button
                onClick={() =>
                  setMobileSidebar(false)
                }
                className="
                  p-2 rounded-lg
                  bg-[#1f2937]
                  text-gray-300
                  hover:text-white
                  transition
                "
              >
                <X size={20} />
              </button>

            </div>

            {/* Header */}
            <NotesHeader
              createNote={createNote}
              notesCount={notes.length}
            />

            {/* Search */}
            <input
              type="text"
              placeholder="Search notes..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="
                w-full mb-5 px-4 py-3
                rounded-xl
                bg-[#0b1220]
                border border-gray-700
                focus:border-purple-500
                outline-none
                text-sm
              "
            />

            {/* Notes List */}
            <div className="space-y-3">

              {notes
                .sort(
                  (a, b) =>
                    b.pinned - a.pinned
                )
                .filter((note) =>
                  note.title
                    .toLowerCase()
                    .includes(
                      search.toLowerCase()
                    )
                )
                .map((note) => (
                  <NoteCard
                    key={note.id}
                    note={note}
                    activeNoteId={activeNoteId}
                    switchNote={
                      handleSwitchNote
                    }
                    togglePinNote={
                      togglePinNote
                    }
                    deleteNote={deleteNote}
                  />
                ))}

            </div>

            {/* Empty State */}
            {notes.length === 0 && (
              <div className="text-center py-16 text-gray-500 text-sm">

                No notes available

              </div>
            )}

          </div>

        </div>
      )}
    </>
  );
};

export default MobileNotesSidebar;