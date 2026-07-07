import {
  Pin,
  MoreVertical,
  BookOpen,
  Code2,
  Database,
  Monitor,
  Network,
} from "lucide-react";

const topicIcons = {
  Java: BookOpen,
  DSA: Code2,
  DBMS: Database,
  OS: Monitor,
  CN: Network,
};

const statusColors = {
  Revised:
    "bg-emerald-500/15 text-emerald-400 border border-emerald-500/20",

  "Need Revision":
    "bg-amber-500/15 text-amber-400 border border-amber-500/20",
};

const NoteCard = ({ note  ,active, onClick,onDelete,}) => {
  const Icon = topicIcons[note.topic] || BookOpen;

  return (
    <div
      onClick={onClick}
      className={`
        group
        rounded-2xl
        border
        p-4
        transition-all
        duration-300
        cursor-pointer
        ${
          active
            ? "border-violet-500 bg-violet-500/10"
            : "border-gray-800 bg-[#111827]"
        }
        hover:border-violet-500
        hover:-translate-y-0.5
      `}
    >
      {/* Top */}

      <div className="flex justify-between items-start">

        <div className="flex items-center gap-2">

          <div
            className="
              w-9
              h-9
              rounded-xl
              bg-violet-500/10
              flex
              items-center
              justify-center
            "
          >
            <Icon
              size={20}
              className="text-violet-400"
            />
          </div>

          <div>

            <h3
              className="
                font-semibold
                text-sm
                leading-snug
                group-hover:text-violet-300
                transition
              "
            >
              {note.title}
            </h3>

          </div>

        </div>

        <div className="flex items-center gap-2">

          {note.pinned && (
            <Pin
              size={15}
              className="text-yellow-400"
            />
          )}

          <button
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="
              opacity-0
              group-hover:opacity-100
              transition-all
              duration-200

              w-8
              h-8

              rounded-lg

              flex
              items-center
              justify-center

              hover:bg-[#1f2937]
              hover:text-violet-400
            "
          >
            <MoreVertical size={17} />
          </button>

        </div>

      </div>

      {/* Topic */}

      <div className="flex gap-2 mt-3 flex-wrap">

        <span
          className="
            px-2.5
            py-1
            rounded-full
            bg-violet-500/10
            text-violet-300
            text-xs
          "
        >
          {note.topic}
        </span>

        <span
          className="
            px-3
            py-1
            rounded-full
            bg-slate-700/40
            text-gray-300
            text-xs
          "
        >
          {note.difficulty}
        </span>

      </div>

      {/* Bottom */}

      <div className="flex justify-between items-center mt-3">

        <span
          className={`
            px-3
            py-1
            rounded-full
            text-xs
            ${statusColors[note.status]}
          `}
        >
          {note.status}
        </span>

        <span
          className="
            text-xs
            text-gray-500
          "
        >
          {note.updatedAt}
        </span>

      </div>

    </div>
  );
};

export default NoteCard;