import { Plus, Search, SlidersHorizontal } from "lucide-react";
import NotesCard from "./NotesCard";

const dummyNotes = [
  {
    id: 1,
    title: "Java Collections Framework",
    topic: "Java",
    difficulty: "Intermediate",
    status: "Need Revision",
    updatedAt: "Updated 2h ago",
    pinned: true,
  },
  {
    id: 2,
    title: "Two Pointer Technique",
    topic: "DSA",
    difficulty: "Medium",
    status: "Revised",
    updatedAt: "Updated Yesterday",
    pinned: false,
  },
  {
    id: 3,
    title: "SQL Joins Cheatsheet",
    topic: "DBMS",
    difficulty: "Easy",
    status: "Revised",
    updatedAt: "Updated 2 days ago",
    pinned: false,
  },
  {
    id: 4,
    title: "Operating System - Processes",
    topic: "OS",
    difficulty: "Hard",
    status: "Need Revision",
    updatedAt: "Updated 2 days ago",
    pinned: false,
  },
];

const filters = ["All", "Pinned", "Java", "DSA", "DBMS"];

const NotesList = () => {
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
              placeholder="Search notes..."
              className="
                w-full
                pl-10
                pr-4
                py-2.5
                rounded-xl
                bg-[#111827]
                border border-gray-700
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
          space-y-4
        "
      >
        {dummyNotes.map((note) => (
          <NotesCard
            key={note.id}
            note={note}
          />
        ))}
      </div>

    </aside>
  );
};

export default NotesList;