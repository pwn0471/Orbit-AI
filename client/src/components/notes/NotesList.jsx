import { Plus, Search, SlidersHorizontal } from "lucide-react";
import NotesCard from "./NotesCard";
import { useNotes } from "../../context/NotesContext";


const filters = ["All",
  "Pinned",
  "Programming",
  "Lecture",
  "Projects",
  "Research",];

const NotesList = () => {

  const { notes ,searchQuery,setSearchQuery,createNote,
    deleteNote, togglePin,renameNote,
    selectedNoteId,  setSelectedNoteId,} = useNotes();

    const filteredNotes = notes.filter((note) => {

    const query = searchQuery.toLowerCase();

    return (
      note.title.toLowerCase().includes(query) ||
      note.topic?.toLowerCase().includes(query) ||
      note.status?.toLowerCase().includes(query)
    );

  });

  const sortedNotes = [...filteredNotes].sort((a, b) => {

    if (a.pinned !== b.pinned) {
      return Number(b.pinned) - Number(a.pinned);
    }

    return a.createdAt - b.createdAt;

  });

  const pinnedNotes = sortedNotes.filter(
    (note) => note.pinned
  );

  const normalNotes = sortedNotes.filter(
    (note) => !note.pinned
  );

  

  return (
    <aside
      className="
        hidden lg:flex
        flex-col
        w-[320px]
        border-r border-gray-800
        bg-[#0F172A]
      "
    >
      {/* Header */}
      <div className="p-6 border-b border-gray-800">

        <div className="flex items-center justify-between">

          <h1 className="text-3xl font-bold">
            Notes
          </h1>

          <button
            className="
              flex items-center gap-2
              px-4 py-2
              rounded-xl
              bg-violet-600
              hover:bg-violet-500
              transition
            "
            onClick={createNote}
          >
            <Plus size={18} />
            New Note
          </button>

        </div>

        {/* Search */}
        <div className="mt-6 flex gap-3">

          <div className="relative flex-1">

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
                pl-10
                pr-4
                py-2.5
                rounded-xl
                bg-[#111827]
                border
                border-gray-700
                outline-none
                focus:border-violet-500
              "
            />

          </div>

          <button
            className="
              w-12
              rounded-xl
              border border-gray-700
              bg-[#111827]
              hover:border-violet-500
              transition
              flex
              items-center
              justify-center
            "
          >
            <SlidersHorizontal size={18} />
          </button>

        </div>

        {/* Filters */}
        <div className="flex gap-2 mt-5 flex-wrap">

          {filters.map((filter, index) => (
            <button
              key={index}
              className={`
                px-4 py-1
                rounded-full
                text-sm
                transition
                ${
                  index === 0
                    ? "bg-violet-600 text-white"
                    : "bg-[#111827] border border-gray-700 hover:border-violet-500"
                }
              `}
            >
              {filter}
            </button>
          ))}

        </div>

      </div>

      {/* Notes */}
      <div
        className="
          flex-1
          overflow-y-auto
          p-4
        "
      >

        {/* Pinned Notes */}
        {pinnedNotes.length > 0 && (
          <>
            <div className="mb-3 flex items-center gap-2">

              <span className="text-sm font-semibold text-yellow-400">
                📌 Pinned
              </span>

              <span className="text-xs text-gray-500">
                ({pinnedNotes.length})
              </span>

            </div>

            <div className="space-y-4">

              {pinnedNotes.map((note) => (
                <NotesCard
                  key={note.id}
                  note={note}
                  active={selectedNoteId === note.id}
                  onClick={() => setSelectedNoteId(note.id)}
                  onDelete={() => deleteNote(note.id)}
                  onPin={() => togglePin(note.id)}
                  onRename={(title) => renameNote(note.id, title)}
                />
              ))}

            </div>

            <div className="my-6 border-t border-gray-800" />
          </>
        )}

        {/* All Notes */}
        <div className="mb-3 flex items-center gap-2">

          <span className="text-sm font-semibold text-gray-300">
            📝 Notes
          </span>

          <span className="text-xs text-gray-500">
            ({normalNotes.length})
          </span>

        </div>

        <div className="space-y-4">

          {normalNotes.map((note) => (
            <NotesCard
              key={note.id}
              note={note}
              active={selectedNoteId === note.id}
              onClick={() => setSelectedNoteId(note.id)}
              onDelete={() => deleteNote(note.id)}
              onPin={() => togglePin(note.id)}
              onRename={(title) => renameNote(note.id, title)}
            />
          ))}

        </div>

      </div>

    </aside>
  );
};

export default NotesList;