import { CheckCircle2, Sparkles, Lightbulb, Wand2,Menu} from "lucide-react";
import { useEffect, useRef,useState } from "react";

import { useNotes } from "../../context/NotesContext";
import AIResultModal from "../ai/AIResultModal";
import NotesEditor from "./NotesEditor";
import NotesToolbar from "./NotesToolbar";
import CategoryDropdown from "./CategoryDropdown";
import useNotesEditor from "./hooks/useNotesEditor";

const EditorSection = ({openSidebar}) => {
  const {
    selectedNote,
    setNotes,
    updateCategory,
    updateTitle,
  } = useNotes();

  // Create ONE editor instance
  const editor = useNotesEditor(selectedNote?.content);

  

  // AI Modal State
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [aiTitle, setAiTitle] = useState("");

  const [aiContent, setAiContent] = useState("");

  const lastNoteId = useRef(null);

  // ================= AI Buttons =================

  const handleSummarize = () => {
    setAiTitle("Summary");

    setAiContent(
      "This is a dummy summary.\n\nGemini response will appear here later."
    );

    setIsModalOpen(true);
  };

  const handleExplain = () => {
    setAiTitle("Explanation");

    setAiContent(
      "This is a dummy explanation.\n\nGemini response will appear here later."
    );

    setIsModalOpen(true);
  };

  const handleImprove = () => {
    setAiTitle("Improved Note");

    setAiContent(
      "This is a dummy improved version.\n\nGemini response will appear here later."
    );

    setIsModalOpen(true);
  };

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

      <div className="border-b border-gray-800 px-4 md:px-8 py-4">

        {/* Mobile Menu */}
        <div className="mb-2 flex items-center lg:hidden">

          <button
            onClick={openSidebar}
            className="
              rounded-xl
              p-2
              hover:bg-[#1F2937]
              transition
            "
          >
            <Menu size={22} />
          </button>

        </div>

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
            text-2xl
            md:text-3xl
            font-bold
            text-white
            outline-none
            placeholder:text-gray-500
          "
        />

        <div className="flex justify-between items-center mt-4">

          {/* Left */}
          <div className="mt-4">

            <CategoryDropdown
              value={selectedNote?.category || "General"}
              onChange={(category) =>
                updateCategory(selectedNote.id, category)
              }
            />

          </div>

          {/* Right */}
          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3 self-center -translate-y-5">

            

            <button
              onClick={handleSummarize}
              className="
                flex
                items-center
                justify-center
                gap-2
                h-10
                px-5
                rounded-xl
                bg-blue-600
                text-white
                text-sm
                font-semibold
                transition-all
                duration-300
                hover:bg-blue-500
                hover:-translate-y-0.5
                hover:shadow-lg
                hover:shadow-blue-500/30
                active:scale-95
              "
            >
              <Sparkles size={17} />
              Summarize
            </button>

            <button
              onClick={handleExplain}
              className="
                flex
                items-center
                justify-center
                gap-2
                h-10
                px-5
                rounded-xl
                bg-violet-600
                text-white
                text-sm
                font-semibold
                transition-all
                duration-300
                hover:bg-violet-500
                hover:-translate-y-0.5
                hover:shadow-lg
                hover:shadow-violet-500/30
                active:scale-95
              "
            >
              <Lightbulb size={17} />
              Explain
            </button>

            <button
              onClick={handleImprove}
              className="
                flex
                items-center
                justify-center
                gap-2
                h-10
                px-5
                rounded-xl
                bg-emerald-600
                text-white
                text-sm
                font-semibold
                transition-all
                duration-300
                hover:bg-emerald-500
                hover:-translate-y-0.5
                hover:shadow-lg
                hover:shadow-emerald-500/30
                active:scale-95
              "
            >
              <Wand2 size={17} />
              Improve
            </button>

          </div>

          

        </div>

            {/* Mobile Buttons */}

            <div className=" mt-3
              flex
              gap-2
              overflow-x-auto
              whitespace-nowrap
              scrollbar-hide
              pb-2
              md:hidden"
            >

              <button
                onClick={handleSummarize}
                className="
                  flex
                  shrink-0
                  items-center
                  gap-1
                  rounded-lg
                  bg-blue-600
                  px-3
                  py-2
                  text-xs
                  font-medium
                  whitespace-nowrap
                "
              >
                <Sparkles size={12} className="inline mr-2" />
                Summarize
              </button>

              <button
                onClick={handleExplain}
                className="flex
                  shrink-0
                  items-center
                  gap-1
                  rounded-lg
                  bg-blue-600
                  px-3
                  py-2
                  text-xs
                  font-medium
                  whitespace-nowrap"
              >
                <Lightbulb size={12} className="inline mr-2" />
                Explain
              </button>

              <button
                onClick={handleImprove}
                className="flex
                  shrink-0
                  items-center
                  gap-1
                  rounded-lg
                  bg-blue-600
                  px-3
                  py-2
                  text-xs
                  font-medium
                  whitespace-nowrap
                "
              >
                <Wand2 size={12} className="inline mr-2" />
                Improve
              </button>

            </div>

      </div>

      {/* ================= Toolbar ================= */}

      <div className="border-b border-gray-800 px-4 md:px-8 py-4">

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
          h-14
          border-t
          border-gray-800
          px-4 md:px-8
          text-sm
          text-gray-400
          bg-[#0B1220]
          flex-shrink-0
        "
      >
        <span>
          {editor.storage.characterCount.words()} Words
        </span>

        <div className="flex items-center gap-2 text-emerald-400">

          <CheckCircle2 size={16} />

          <span>Auto Saved</span>

        </div>
      </div>

      <AIResultModal
        open={isModalOpen}
        title={aiTitle}
        content={aiContent}
        loading={false}
        onClose={() => setIsModalOpen(false)}
        onCopy={() => navigator.clipboard.writeText(aiContent)}
        onReplace={() => {
          console.log("Replace note later");
          setIsModalOpen(false);
        }}
      />

    </section>
  );
};

export default EditorSection;