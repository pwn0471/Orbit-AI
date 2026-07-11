import { useState, useRef, useEffect } from "react";
import { formatRelativeTime } from "../../utils/formatRelativeTime";
import NoteCardMenu from "./NoteCardMenu";

import {
  Pin,
  MoreVertical,
  BookOpen,
  Code2,
  Database,
  Monitor,
  Network,
  CalendarDays,
  Clock3,
} from "lucide-react";

const categoryIcons = {
  Java: BookOpen,
  DSA: Code2,
  DBMS: Database,
  OS: Monitor,
  CN: Network,
};

const NoteCard = ({
  note,
  active,
  onClick,
  onDelete,
  onPin,
  onRename,
}) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [editing, setEditing] = useState(false);
  const [title, setTitle] = useState(note.title);

  const inputRef = useRef(null);

  const Icon = categoryIcons[note.category] || BookOpen;

  const createdDate = new Date(note.createdAt).toLocaleDateString(
    "en-IN",
    {
      day: "numeric",
      month: "short",
      year: "numeric",
    }
  );

  const updatedTime = formatRelativeTime(note.updatedAt);

  useEffect(() => {
    setTitle(note.title);
  }, [note.title]);

  useEffect(() => {
    if (editing) {
      inputRef.current?.focus();
      inputRef.current?.select();
    }
  }, [editing]);

  return (
    <div
      onClick={onClick}
      className={`
        relative
        group
        rounded-2xl
        border
        p-3.5
        cursor-pointer
        transition-all
        duration-300
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
      <div className="flex items-start justify-between">

        <div className="flex items-center gap-3">

          <div
            className="
              w-9
              h-9
              rounded-xl
              bg-violet-500/10
              flex
              items-center
              justify-center
              flex-shrink-0
            "
          >
            <Icon
              size={18}
              className="text-violet-400"
            />
          </div>

          <div>

            {editing ? (
              <input
                ref={inputRef}
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                onClick={(e) => e.stopPropagation()}
                onBlur={() => {
                  onRename(title);
                  setEditing(false);
                }}
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    onRename(title);
                    setEditing(false);
                  }

                  if (e.key === "Escape") {
                    setTitle(note.title);
                    setEditing(false);
                  }
                }}
                className="
                  bg-transparent
                  border-b
                  border-violet-500
                  outline-none
                  text-sm
                  font-semibold
                "
              />
            ) : (
              <h3
                className="
                  text-base
                  font-semibold
                  text-white
                  transition
                  group-hover:text-violet-300
                "
              >
                {note.title}
              </h3>
            )}

          </div>

        </div>

        <div className="flex items-center gap-2">

          {note.pinned && (
            <Pin
              size={14}
              className="text-yellow-400"
            />
          )}

          <button
            onClick={(e) => {
              e.stopPropagation();
              setMenuOpen((prev) => !prev);
            }}
            className="
              opacity-0
              group-hover:opacity-100
              transition
              duration-200
              w-7
              h-7
              rounded-lg
              flex
              items-center
              justify-center
              hover:bg-[#1f2937]
              hover:text-violet-400
            "
          >
            <MoreVertical size={16} />
          </button>

        </div>

      </div>

      {/* Category */}
      <div className="mt-3">

        <span
          className="
            inline-flex
            items-center
            gap-1.5
            rounded-full
            border
            border-violet-500/30
            bg-transparent
            px-2.5
            py-1
            text-xs
            font-medium
            text-violet-300
          "
        >
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400" />

          {note.category}
        </span>

      </div>

      {/* Footer */}
      <div className="mt-3 flex items-center justify-between">

        <div
          className="
            flex
            items-center
            gap-1
            text-xs
            text-gray-500
          "
        >
          <CalendarDays size={13} />

          <span>{createdDate}</span>
        </div>

        <div
          className="
            flex
            items-center
            gap-1
            text-xs
            text-gray-500
          "
        >
          <Clock3 size={13} />

          <span>{updatedTime}</span>
        </div>

      </div>

      <NoteCardMenu
        open={menuOpen}
        pinned={note.pinned}
        onClose={() => setMenuOpen(false)}
        onRename={() => {
          setMenuOpen(false);
          setEditing(true);
        }}
        onPin={() => {
          setMenuOpen(false);
          onPin?.();
        }}
        onDelete={() => {
          setMenuOpen(false);
          onDelete?.();
        }}
      />
    </div>
  );
};

export default NoteCard;