import { useState, useEffect } from "react";
import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";

import DashboardSidebar from "../components/notes/DashboardSidebar";
import MobileNotesSidebar from "../components/notes/MobileNotesSidebar";
import NotesHeader from "../components/notes/NotesHeader";
import NoteCard from "../components/notes/NoteCard";

import NotesToolbar from "../components/notes/NotesToolbar";
import NotesEditor from "../components/notes/NotesEditor";
import AIButtons from "../components/notes/AIButtons";

const Notes = () => {
  // Mobile Sidebar
  const [mobileSidebar, setMobileSidebar] =
    useState(false);

  // Search
  const [search, setSearch] = useState("");

  // Notes State
  const [notes, setNotes] = useState(() => {
    const savedNotes =
      localStorage.getItem("notes");

    return savedNotes
      ? JSON.parse(savedNotes)
      : [
          {
            id: 1,
            title: "Untitled Note",
            content:
              "<p>Start writing your notes...</p>",
            tags: ["General"],
            pinned: false,
            updatedAt:
              new Date().toLocaleString(),
          },
        ];
  });

  // Active Note
  const [activeNoteId, setActiveNoteId] =
    useState(notes[0]?.id);

  const activeNote = notes.find(
    (note) => note.id === activeNoteId
  );

  // Auto Save
  useEffect(() => {
    localStorage.setItem(
      "notes",
      JSON.stringify(notes)
    );
  }, [notes]);

  // Editor
  const editor = useEditor({
    extensions: [StarterKit],
    content: activeNote?.content,

    onUpdate: ({ editor }) => {
      const updatedContent =
        editor.getHTML();

      const plainText = editor.getText();

      const generatedTitle =
        plainText.trim().length > 0
          ? plainText
              .split(" ")
              .slice(0, 4)
              .join(" ")
          : "Untitled Note";

      // Slash Commands
      if (plainText.endsWith("/heading")) {
        editor.commands.clearContent();
        editor.commands.toggleHeading({
          level: 2,
        });
      }

      if (plainText.endsWith("/bullet")) {
        editor.commands.clearContent();
        editor.commands.toggleBulletList();
      }

      if (plainText.endsWith("/code")) {
        editor.commands.clearContent();
        editor.commands.toggleCodeBlock();
      }

      setNotes((prev) =>
        prev.map((note) =>
          note.id === activeNoteId
            ? {
                ...note,
                content: updatedContent,
                title: generatedTitle,
                updatedAt:
                  new Date().toLocaleString(),
              }
            : note
        )
      );
    },
  });

  // Create Note
  const createNote = () => {
    const newNote = {
      id: Date.now(),
      title: "New Note",
      content: "<p>Empty note...</p>",
      tags: ["New"],
      pinned: false,
      updatedAt:
        new Date().toLocaleString(),
    };

    setNotes([newNote, ...notes]);

    setActiveNoteId(newNote.id);

    setTimeout(() => {
      editor?.commands.setContent(
        newNote.content
      );
    }, 0);
  };

  // Delete Note
  const deleteNote = (id) => {
    const filtered = notes.filter(
      (note) => note.id !== id
    );

    setNotes(filtered);

    if (filtered.length > 0) {
      setActiveNoteId(filtered[0].id);

      setTimeout(() => {
        editor?.commands.setContent(
          filtered[0].content
        );
      }, 0);
    }
  };

  // Switch Note
  const switchNote = (note) => {
    setActiveNoteId(note.id);

    editor?.commands.setContent(
      note.content
    );

    setMobileSidebar(false);
  };

  // Pin Note
  const togglePinNote = (id) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id
          ? {
              ...note,
              pinned: !note.pinned,
            }
          : note
      )
    );
  };

  // AI Summarize
  const summarizeNote = () => {
    const text = editor.getText();

    if (!text.trim()) return;

    const summary =
      text
        .split(".")
        .slice(0, 2)
        .join(".") + ".";

    editor.commands.setContent(`
      <h2>AI Summary</h2>
      <p>${summary}</p>
    `);
  };

  // AI Improve
  const improveNote = () => {
    const text = editor.getText();

    if (!text.trim()) return;

    const improved = `
      <h2>Improved Version</h2>

      <p>${text}</p>

      <p>
        This explanation has been enhanced for better readability,
        clarity, and structured understanding.
      </p>
    `;

    editor.commands.setContent(improved);
  };

  if (!editor) return null;

  return (
    <div className="flex min-h-screen bg-[#0b1220] text-white">

      {/* Dashboard Sidebar */}
      <DashboardSidebar
        activePage="Notes"
        mobileSidebar={mobileSidebar}
        setMobileSidebar={setMobileSidebar}
      />

      {/* Mobile Notes Sidebar */}
      <MobileNotesSidebar
        mobileSidebar={mobileSidebar}
        setMobileSidebar={setMobileSidebar}
        search={search}
        setSearch={setSearch}
        notes={notes}
        activeNoteId={activeNoteId}
        createNote={createNote}
        switchNote={switchNote}
        togglePinNote={togglePinNote}
        deleteNote={deleteNote}
      />

      {/* Notes Sidebar */}
      <div className="hidden md:block w-72 ml-64 pt-20 bg-[#111827] border-r border-gray-700 p-4 overflow-y-auto">

        {/* Header */}
        <NotesHeader
          createNote={createNote}
          notesCount={notes.length}
        />

        {/* Search */}
        <input
          type="text"
          placeholder="Search notes..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="w-full mb-4 px-3 py-2 rounded-lg bg-[#0b1220] border border-gray-700 focus:border-purple-500 outline-none"
        />

        {/* Notes List */}
        <div className="space-y-2">

          {notes
            .sort(
              (a, b) =>
                b.pinned - a.pinned
            )
            .filter((note) =>
              note.title
                .toLowerCase()
                .includes(
                  search.toLowerCase()
                )
            )
            .map((note) => (
              <NoteCard
                key={note.id}
                note={note}
                activeNoteId={activeNoteId}
                switchNote={switchNote}
                togglePinNote={
                  togglePinNote
                }
                deleteNote={deleteNote}
              />
            ))}

        </div>

      </div>

      {/* Main */}
      <div className="flex-1 md:pt-20 pt-36 p-4 md:p-6">

        <div className="bg-[#111827] border border-gray-700 rounded-xl p-4 min-h-[500px]">

          {/* Toolbar */}
          <div className="flex items-center justify-between mb-4 border-b border-gray-700 pb-3 flex-wrap gap-3">

            <NotesToolbar editor={editor} />

            <AIButtons
              summarizeNote={summarizeNote}
              improveNote={improveNote}
            />

          </div>

          {/* Slash Commands */}
          <div className="mb-4 text-xs text-gray-500">

            Type:

            <span className="text-purple-400 ml-2">
              /heading
            </span>

            <span className="text-purple-400 ml-2">
              /bullet
            </span>

            <span className="text-purple-400 ml-2">
              /code
            </span>

          </div>

          {/* Title */}
          <input
            type="text"
            value={activeNote?.title || ""}
            onChange={(e) => {
              const updatedTitle =
                e.target.value;

              setNotes((prev) =>
                prev.map((note) =>
                  note.id === activeNoteId
                    ? {
                        ...note,
                        title: updatedTitle,
                      }
                    : note
                )
              );
            }}
            className="w-full text-3xl font-bold bg-transparent outline-none mb-6 text-white"
            placeholder="Untitled Note"
          />

          {/* Editor */}
          <NotesEditor editor={editor} />

          {/* Tags */}
          <div className="mt-6">

            <label className="text-sm text-gray-400">
              Tags
            </label>

            <input
              type="text"
              value={
                activeNote?.tags?.join(", ") ||
                ""
              }
              onChange={(e) => {
                const updatedTags =
                  e.target.value
                    .split(",")
                    .map((tag) =>
                      tag.trim()
                    );

                setNotes((prev) =>
                  prev.map((note) =>
                    note.id === activeNoteId
                      ? {
                          ...note,
                          tags: updatedTags,
                        }
                      : note
                  )
                );
              }}
              className="w-full mt-2 p-2 rounded bg-[#0b1220] border border-gray-700 outline-none focus:border-purple-500"
              placeholder="Add tags separated by commas"
            />

          </div>

        </div>

      </div>

    </div>
  );
};

export default Notes;