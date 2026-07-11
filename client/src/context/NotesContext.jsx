import { createContext, useContext, useState ,useEffect,} from "react";

const NotesContext = createContext();



export const NotesProvider = ({ children }) => {
  const [notes, setNotes] = useState(() => {

    // local storage 
    const savedNotes = localStorage.getItem("orbit-notes");

    return savedNotes
      ? JSON.parse(savedNotes)
      : [];
  });

  const [selectedNoteId, setSelectedNoteId] = useState(() => {
    
    //local storage 
    const savedNotes = localStorage.getItem("orbit-notes"); 

    if (!savedNotes) return null;

    const parsed = JSON.parse(savedNotes);

    return parsed.length ? parsed[0].id : null;
  });

  // search 
  const [searchQuery, setSearchQuery] = useState("");

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
    const now = new Date();
    const newNote = {
      id: Date.now(),
      title: "New Note",
      content: "<p></p>",
      category: "General",
      status: "Draft",
      pinned: false,
      updatedAt: now.toISOString(),
      createdAt: now.toISOString(),
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

  // ==========================
  // Pin / Unpin Note
  // ==========================
  const togglePin = (id) => {
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

  // ==========================
  // Rename Note
  // ==========================
  const renameNote = (id, newTitle) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id
          ? {
              ...note,
              title: newTitle.trim() || "New Note",
               updatedAt: new Date().toISOString(),
            }
          : note
      )
    );
  };


  const updateTitle = (id, title) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id
          ? {
              ...note,
              title: title.trim() || "New Note",
              updatedAt: new Date().toISOString(),
            }
          : note
      )
    );
  };


  // updataes function
  const updateCategory = (id, category) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id
          ? {
              ...note,
              category,
              updatedAt: new Date().toISOString(),
            }
          : note
      )
    );
  };

  return (
    <NotesContext.Provider
      value={{
        notes,
        setNotes,
        updateCategory,

        togglePin,
        renameNote,
        updateTitle,

        selectedNote,
        selectedNoteId,
        setSelectedNoteId,

        createNote,
        deleteNote,

        searchQuery,
        setSearchQuery,
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