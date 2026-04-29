import { Pin } from "lucide-react";

const NoteCard = ({
  note,
  activeNoteId,
  switchNote,
  togglePinNote,
  deleteNote,
}) => {
  return (
    <div
      onClick={() => switchNote(note)}
      className={`
        p-3 rounded-xl cursor-pointer transition-all duration-300 border
        hover:scale-[1.01]
        ${
          activeNoteId === note.id
            ? "bg-purple-600/20 border-purple-500 shadow-lg shadow-purple-500/10"
            : "bg-[#0b1220] border-gray-700 hover:border-purple-500"
        }
      `}
    >

      {/* Top */}
      <div className="flex items-start justify-between gap-3">

        {/* Left */}
        <div className="flex-1 min-w-0">

          {/* Title */}
          <div className="flex items-center gap-2">

            {note.pinned && (
              <Pin
                size={14}
                className="text-yellow-400 flex-shrink-0"
              />
            )}

            <h3 className="font-medium text-sm md:text-base truncate text-white">
              {note.title}
            </h3>

          </div>

          {/* Timestamp */}
          <p className="text-[10px] md:text-xs text-gray-500 mt-1">
            {note.updatedAt}
          </p>

          {/* Tags */}
          <div className="flex gap-1 mt-2 flex-wrap">

            {note.tags?.map((tag, index) => (
              <span
                key={index}
                className="
                  text-[10px]
                  px-2 py-[2px]
                  rounded-full
                  bg-purple-600/20
                  text-purple-300
                  border border-purple-500/20
                "
              >
                {tag}
              </span>
            ))}

          </div>

        </div>

        {/* Right */}
        <div className="flex items-center gap-2 flex-shrink-0">

          {/* Pin */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              togglePinNote(note.id);
            }}
            className={`
              transition
              ${
                note.pinned
                  ? "text-yellow-400"
                  : "text-gray-500 hover:text-yellow-400"
              }
            `}
          >
            <Pin size={15} />
          </button>

          {/* Delete */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              deleteNote(note.id);
            }}
            className="
              text-red-400
              hover:text-red-500
              transition
            "
          >
            ✕
          </button>

        </div>

      </div>

    </div>
  );
};

export default NoteCard;