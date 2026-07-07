import { Clock3 } from "lucide-react";
import { useEffect } from "react";

import NotesEditor from "./NotesEditor";
import NotesToolbar from "./NotesToolbar";
import useNotesEditor from "./hooks/useNotesEditor";
import { useNotes } from "../../context/NotesContext";
import { useRef } from "react";

const EditorSection = () => {
  const { selectedNote ,setNotes,} = useNotes();
  // Create ONE editor instance
  const editor = useNotesEditor(selectedNote?.content);

  

  const lastNoteId = useRef(null);

  useEffect(() => {
    if (!editor || !selectedNote) return;

    // Only update the editor when the selected note changes
    if (lastNoteId.current !== selectedNote.id) {
      editor.commands.setContent(selectedNote.content || "<p></p>");
      lastNoteId.current = selectedNote.id;
    }
  }, [editor, selectedNote]);

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


  // Wait until editor is initialized
  if (!editor) {
    return (
      <div className="flex-1 flex items-center justify-center bg-[#0B1220] text-gray-400">
        Loading editor...
      </div>
    );
  }

  return (
    <section className="flex flex-1 flex-col bg-[#0B1220] overflow-hidden">

      {/* ================= Header ================= */}
      <div className="border-b border-gray-800 px-8 py-6">

        <input
          type="text"
          value={selectedNote?.title || ""}
          readOnly
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

        <div className="mt-5 flex flex-wrap gap-2">

          <span className="rounded-full bg-violet-500/10 px-3 py-1 text-sm text-violet-300">
            {selectedNote?.topic}
          </span>

          <span className="rounded-full bg-slate-700 px-3 py-1 text-sm text-gray-300">
            {selectedNote?.difficulty}
          </span>

          <span className="rounded-full bg-orange-500/10 px-3 py-1 text-sm text-orange-300">
            {selectedNote?.status}
          </span>

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
          text-gray-400
        "
      >

        <span>
          {editor.storage.characterCount.words()} Words
        </span>

        <div className="flex items-center gap-2">

          <Clock3 size={16} />

          <span>
            {Math.max(
              1,
              Math.ceil(editor.storage.characterCount.words() / 200)
            )}{" "}
            min read
          </span>

        </div>

      </div>

    </section>
  );
};

export default EditorSection;