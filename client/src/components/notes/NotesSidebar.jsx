import { Plus, Trash2 } from "lucide-react";

const NotesSidebar = ({
  notes,
  activeNoteId,
  search,
  setSearch,
  createNote,
  switchNote,
  deleteNote,
}) => {
  return (
    <div className="w-72 bg-[#111827] border-r border-gray-700 p-4">

      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-bold">Notes</h2>

        <button
          onClick={createNote}
          className="p-2 rounded bg-purple-600 hover:bg-purple-700 transition"
        >
          <Plus size={18} />
        </button>
      </div>

      {/* Search */}
      <input
        type="text"
        placeholder="Search notes..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full mb-4 px-3 py-2 rounded-lg bg-[#0b1220] border border-gray-700 focus:border-purple-500 outline-none"
      />

      {/* Notes List */}
      <div className="space-y-2">

        {notes
          .filter((note) =>
            note.title.toLowerCase().includes(search.toLowerCase())
          )
          .map((note) => (
            <div
              key={note.id}
              onClick={() => switchNote(note)}
              className={`p-3 rounded-lg cursor-pointer transition border ${
                activeNoteId === note.id
                  ? "bg-purple-600/20 border-purple-500"
                  : "bg-[#0b1220] border-gray-700 hover:border-purple-500"
              }`}
            >

              <div className="flex items-center justify-between">

                <div>

                  <h3 className="font-medium truncate">
                    {note.title}
                  </h3>

                  {/* Tags */}
                  <div className="flex gap-1 mt-1 flex-wrap">

                    {note.tags?.map((tag, index) => (
                      <span
                        key={index}
                        className="text-[10px] px-2 py-[2px] rounded bg-purple-600/20 text-purple-300"
                      >
                        {tag}
                      </span>
                    ))}

                  </div>

                </div>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    deleteNote(note.id);
                  }}
                  className="text-red-400 hover:text-red-500"
                >
                  <Trash2 size={16} />
                </button>

              </div>

            </div>
          ))}

      </div>

    </div>
  );
};

export default NotesSidebar;