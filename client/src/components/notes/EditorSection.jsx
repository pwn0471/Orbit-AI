import { CheckCircle2 } from "lucide-react";
import { useEffect, useRef } from "react";

import { useNotes } from "../../context/NotesContext";

import NotesEditor from "./NotesEditor";
import NotesToolbar from "./NotesToolbar";
import CategoryDropdown from "./CategoryDropdown";
import useNotesEditor from "./hooks/useNotesEditor";

const EditorSection = () => {
  const {
    selectedNote,
    setNotes,
    updateCategory,
    updateTitle,
  } = useNotes();

  // Create ONE editor instance
  const editor = useNotesEditor(selectedNote?.content);

  const lastNoteId = useRef(null);

  // Update editor only when selected note changes
  useEffect(() => {
    if (!editor || !selectedNote) return;

    if (lastNoteId.current !== selectedNote.id) {
      editor.commands.setContent(
        selectedNote.content || "<p></p>"
      );

      lastNoteId.current = selectedNote.id;
    }
  }, [editor, selectedNote]);

  // Auto Save
  useEffect(() => {
    if (!editor || !selectedNote) return;

    const updateHandler = () => {
      const html = editor.getHTML();

      setNotes((prev) =>
        prev.map((note) =>
          note.id === selectedNote.id
            ? {
                ...note,
                content: html,
                updatedAt: new Date().toISOString(),
              }
            : note
        )
      );
    };

    editor.on("update", updateHandler);

    return () => {
      editor.off("update", updateHandler);
    };
  }, [editor, selectedNote, setNotes]);

  if (!editor) {
    return (
      <div className="flex flex-1 items-center justify-center bg-[#0B1220] text-gray-400">
        Loading editor...
      </div>
    );
  }

  return (
    <section className="flex flex-1 flex-col overflow-hidden bg-[#0B1220]">

      {/* ================= Header ================= */}

      <div className="border-b border-gray-800 px-8 py-6">

        <input
          type="text"
          value={selectedNote?.title || ""}
          onChange={(e) =>
            updateTitle(
              selectedNote.id,
              e.target.value
            )
          }
          className="
            w-full
            bg-transparent
            text-3xl
            font-bold
            text-white
            outline-none
            placeholder:text-gray-500
          "
        />

        <div className="mt-5">

          <CategoryDropdown
            value={selectedNote?.category || "General"}
            onChange={(category) =>
              updateCategory(
                selectedNote.id,
                category
              )
            }
          />

        </div>

      </div>

      {/* ================= Toolbar ================= */}

      <div className="border-b border-gray-800 px-8 py-4">

        <NotesToolbar editor={editor} />

      </div>

      {/* ================= Editor ================= */}

      <NotesEditor editor={editor} />

      {/* ================= Footer ================= */}

      <div
        className="
          flex
          items-center
          justify-between
          border-t
          border-gray-800
          px-8
          py-4
          text-sm
        "
      >

        {/* Word Count */}

        <span className="text-gray-400">
          {editor.storage.characterCount.words()} Words
        </span>

        {/* Auto Saved */}

        <div className="flex items-center gap-2 text-emerald-400">

          <CheckCircle2 size={16} />

          <span>Auto Saved</span>

        </div>

      </div>

    </section>
  );
};

export default EditorSection;