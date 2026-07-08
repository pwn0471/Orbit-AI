import {
  Pencil,
  Pin,
  Trash2,
} from "lucide-react";

const NoteCardMenu = ({
  open,
  onRename,
  onPin,
  onDelete,
  onClose,
  pinned,
}) => {
  if (!open) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 z-40"
        onClick={onClose}
      />

      {/* Menu */}
      <div
        className="
          absolute
          right-0
          top-10
          z-50
          w-44
          rounded-lg
          border
          border-gray-700
          bg-[#111827]
          shadow-2xl
          shadow-black/40
          overflow-hidden
          animate-in
          origin-top-right
        "
      >
        <button
          onClick={onRename}
          className="
            w-full
            px-3
            py-2.5
            flex
            items-center
            gap-2
            text-[13px]
            hover:bg-[#1f2937]
            transition
          "
        >
          <Pencil size={17} />
          Rename
        </button>

        <button
          onClick={onPin}
          className="
           w-full
            px-3
            py-2.5
            flex
            items-center
            gap-2
            text-[13px]
            hover:bg-[#1f2937]
            transition
          "
        >
          <Pin size={17} />
          {pinned ? "Unpin Note" : "Pin Note"}
        </button>

        <div className="border-t border-gray-700" />

        <button
          onClick={onDelete}
          className="
            w-full
            px-3
            py-2.5
            flex
            items-center
            gap-2
            text-[13px]
            text-red-400
            hover:bg-red-500/10
            transition
          "
        >
          <Trash2 size={17} />
          Delete
        </button>
      </div>
    </>
  );
};

export default NoteCardMenu;