import { createContext, useContext, useState ,useEffect,} from "react";
import initialNotes from "../data/NotesData";

const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("orbit-notes");

    return savedNotes
      ? JSON.parse(savedNotes)
      : initialNotes;
  });

  const [selectedNoteId, setSelectedNoteId] = useState(() => {
    const savedNotes = localStorage.getItem("orbit-notes");

    if (savedNotes) {
      const parsed = JSON.parse(savedNotes);
      return parsed[0]?.id || null;
    }

    return initialNotes[0]?.id || null;
  });

  const selectedNote =
    notes.find((note) => note.id === selectedNoteId) || null;
      useEffect(() => {
    localStorage.setItem(
      "orbit-notes",
      JSON.stringify(notes)
    );
  }, [notes]);

  // ==========================
  // Create New Note
  // ==========================
  const createNote = () => {
    const newNote = {
      id: Date.now(),
      title: "Untitled Note",
      content: "<p></p>",
      topic: "General",
      difficulty: "Easy",
      status: "New",
      pinned: false,
      updatedAt: "Just now",
    };

    setNotes((prev) => [newNote, ...prev]);

    setSelectedNoteId(newNote.id);
  };

  
  // Delete Note
  const deleteNote = (id) => {
    setNotes((prev) => {
      const updatedNotes = prev.filter((note) => note.id !== id);

      // If the deleted note was selected,
      // automatically select the first remaining note.
      if (selectedNoteId === id) {
        setSelectedNoteId(
          updatedNotes.length ? updatedNotes[0].id : null
        );
      }

      return updatedNotes;
    });
  };

  return (
    <NotesContext.Provider
      value={{
        notes,
        setNotes,

        selectedNote,
        selectedNoteId,
        setSelectedNoteId,

        createNote,
        deleteNote,
      }}
    >
      {children}
    </NotesContext.Provider>
  );
};

export const useNotes = () => {
  const context = useContext(NotesContext);

  if (!context) {
    throw new Error(
      "useNotes must be used inside NotesProvider"
    );
  }

  return context;
};