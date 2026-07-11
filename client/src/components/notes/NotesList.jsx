import { Plus, Search } from "lucide-react";
import NotesCard from "./NotesCard";
import { useNotes } from "../../context/NotesContext";

const NotesList = () => {
  const {
    notes,
    searchQuery,
    setSearchQuery,
    createNote,
    deleteNote,
    togglePin,
    renameNote,
    selectedNoteId,
    setSelectedNoteId,
  } = useNotes();

  // Filter Notes
  const filteredNotes = notes.filter((note) => {
    const query = searchQuery.toLowerCase();

    return (
      note.title.toLowerCase().includes(query) ||
      note.category?.toLowerCase().includes(query)
    );
  });

  // Sort Notes
  const sortedNotes = [...filteredNotes].sort((a, b) => {
    if (a.pinned !== b.pinned) {
      return Number(b.pinned) - Number(a.pinned);
    }

    return (
      new Date(b.updatedAt).getTime() -
      new Date(a.updatedAt).getTime()
    );
  });

  const pinnedNotes = sortedNotes.filter((note) => note.pinned);

  const normalNotes = sortedNotes.filter((note) => !note.pinned);

  return (
    <aside
      className="
        hidden
        lg:flex
        flex-col
        w-[360px]
        border-r
        border-gray-800
        bg-[#0F172A]
      "
    >
      {/* Header */}
      <div className="border-b border-gray-800 px-6 py-5">

        <div className="flex items-start justify-between">

          <div>

            <h1 className="text-3xl font-bold">
              Notes
            </h1>

            <p className="mt-1 text-sm text-gray-400">
              {notes.length} {notes.length === 1 ? "Note" : "Notes"}
            </p>

          </div>

          <button
            onClick={createNote}
            className="
              flex
              items-center
              gap-2
              rounded-xl
              bg-violet-600
              px-4
              py-2
              text-sm
              font-medium
              transition
              hover:bg-violet-500
            "
          >
            <Plus size={18} />
            New
          </button>

        </div>

        {/* Search */}

        <div className="mt-5">

          <div className="relative">

            <Search
              size={18}
              className="
                absolute
                left-3
                top-1/2
                -translate-y-1/2
                text-gray-400
              "
            />

            <input
              type="text"
              value={searchQuery}
              onChange={(e) =>
                setSearchQuery(e.target.value)
              }
              placeholder="Search notes..."
              className="
                w-full
                rounded-2xl
                border
                border-gray-700
                bg-[#111827]
                py-2.5
                pl-10
                pr-4
                text-sm
                placeholder:text-gray-500
                outline-none
                transition
                focus:border-violet-500
                focus:ring-2
                focus:ring-violet-500/20
              "
            />

          </div>

        </div>

      </div>

      {/* Notes List */}

      <div
        className="
          flex-1
          overflow-y-auto
          p-4
        "
      >
        {/* Pinned */}

        {pinnedNotes.length > 0 && (
          <>
            <div className="mb-2 flex items-center gap-2 px-1">

              <span className="text-sm font-semibold text-yellow-400">
                📌 Pinned
              </span>

              <span className="text-xs text-gray-500">
                • {pinnedNotes.length}
              </span>

            </div>

            <div className="space-y-3">

              {pinnedNotes.map((note) => (
                <NotesCard
                  key={note.id}
                  note={note}
                  active={selectedNoteId === note.id}
                  onClick={() =>
                    setSelectedNoteId(note.id)
                  }
                  onDelete={() =>
                    deleteNote(note.id)
                  }
                  onPin={() =>
                    togglePin(note.id)
                  }
                  onRename={(title) =>
                    renameNote(note.id, title)
                  }
                />
              ))}

            </div>

            <div className="my-4 border-t border-gray-800" />
          </>
        )}

        {/* Notes */}

        <div className="mb-2 flex items-center gap-2 px-1">

          <span className="text-sm font-semibold text-gray-300">
            📝 Notes
          </span>

          <span className="text-xs text-gray-500">
            • {normalNotes.length}
          </span>

        </div>

        {normalNotes.length > 0 ? (
          <div className="space-y-3">

            {normalNotes.map((note) => (
              <NotesCard
                key={note.id}
                note={note}
                active={selectedNoteId === note.id}
                onClick={() =>
                  setSelectedNoteId(note.id)
                }
                onDelete={() =>
                  deleteNote(note.id)
                }
                onPin={() =>
                  togglePin(note.id)
                }
                onRename={(title) =>
                  renameNote(note.id, title)
                }
              />
            ))}

          </div>
        ) : (
          <div className="mt-16 text-center">

            <p className="text-sm text-gray-500">
              No notes found.
            </p>

          </div>
        )}

      </div>

    </aside>
  );
};

export default NotesList;