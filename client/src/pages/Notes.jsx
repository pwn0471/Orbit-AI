import { useState, useEffect } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import {
  Bold,
  Italic,
  List,
  Heading2,
  Code2,
  Plus,
  Trash2,
} from "lucide-react";

const Notes = () => {
  // 🔍 Search state
  const [search, setSearch] = useState("");

  // 🧠 Notes state with localStorage
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");

    return savedNotes
      ? JSON.parse(savedNotes)
      : [
          {
            id: 1,
            title: "Untitled Note",
            content: "<p>Start writing your notes...</p>",
            tags: ["General"],
          },
        ];
  });

  const [activeNoteId, setActiveNoteId] = useState(notes[0]?.id);

  // 🎯 Active note
  const activeNote = notes.find((note) => note.id === activeNoteId);

  // 💾 Auto-save
  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  // ✍️ Editor
  const editor = useEditor({
    extensions: [StarterKit],
    content: activeNote?.content,

    onUpdate: ({ editor }) => {
      const updatedContent = editor.getHTML();

      setNotes((prev) =>
        prev.map((note) =>
          note.id === activeNoteId
            ? { ...note, content: updatedContent }
            : note
        )
      );
    },
  });

  // ➕ Create Note
  const createNote = () => {
    const newNote = {
      id: Date.now(),
      title: "New Note",
      content: "<p>Empty note...</p>",
      tags: ["New"],
    };

    setNotes([newNote, ...notes]);
    setActiveNoteId(newNote.id);

    setTimeout(() => {
      editor?.commands.setContent(newNote.content);
    }, 0);
  };

  // ❌ Delete Note
  const deleteNote = (id) => {
    const filtered = notes.filter((note) => note.id !== id);
    setNotes(filtered);

    if (filtered.length > 0) {
      setActiveNoteId(filtered[0].id);

      setTimeout(() => {
        editor?.commands.setContent(filtered[0].content);
      }, 0);
    }
  };

  // 🔁 Switch Note
  const switchNote = (note) => {
    setActiveNoteId(note.id);
    editor?.commands.setContent(note.content);
  };

  if (!editor) return null;

  return (
    <div className="flex min-h-screen bg-[#0b1220] text-white pt-20">

      {/* 🔥 Sidebar */}
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

        {/* 🔍 Search */}
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

                    {/* 🏷 Tags */}
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

      {/* 🔥 Editor */}
      <div className="flex-1 p-6">

        <div className="bg-[#111827] border border-gray-700 rounded-xl p-4 min-h-[500px]">

          {/* Toolbar */}
          <div className="flex gap-2 mb-4 border-b border-gray-700 pb-3 flex-wrap">

            <button
              onClick={() => editor.chain().focus().toggleBold().run()}
              className={`p-2 rounded ${
                editor.isActive("bold")
                  ? "bg-purple-600"
                  : "bg-[#1e293b]"
              }`}
            >
              <Bold size={18} />
            </button>

            <button
              onClick={() => editor.chain().focus().toggleItalic().run()}
              className={`p-2 rounded ${
                editor.isActive("italic")
                  ? "bg-purple-600"
                  : "bg-[#1e293b]"
              }`}
            >
              <Italic size={18} />
            </button>

            <button
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 2 }).run()
              }
              className={`p-2 rounded ${
                editor.isActive("heading", { level: 2 })
                  ? "bg-purple-600"
                  : "bg-[#1e293b]"
              }`}
            >
              <Heading2 size={18} />
            </button>

            <button
              onClick={() => editor.chain().focus().toggleBulletList().run()}
              className={`p-2 rounded ${
                editor.isActive("bulletList")
                  ? "bg-purple-600"
                  : "bg-[#1e293b]"
              }`}
            >
              <List size={18} />
            </button>

            <button
              onClick={() => editor.chain().focus().toggleCodeBlock().run()}
              className={`p-2 rounded ${
                editor.isActive("codeBlock")
                  ? "bg-purple-600"
                  : "bg-[#1e293b]"
              }`}
            >
              <Code2 size={18} />
            </button>

          </div>

          {/* Editor */}
          <div className="prose prose-invert max-w-none min-h-[400px]">
            <EditorContent editor={editor} />
          </div>

        </div>

      </div>

    </div>
  );
};

export default Notes;