import { Search } from "lucide-react";
import { useNotes } from "../../context/NotesContext";

const NotesSearch = () => {
  const {
    searchQuery,
    setSearchQuery,
  } = useNotes();

  return (
    <div className="relative">

      <Search
        size={18}
        className="
          absolute
          left-4
          top-1/2
          -translate-y-1/2
          text-gray-500
        "
      />

      <input
        type="text"
        value={searchQuery}
        onChange={(e) =>
          setSearchQuery(e.target.value)
        }
        placeholder="Search notes..."
        className="
          w-full
          rounded-xl
          border
          border-gray-800
          bg-[#111827]
          py-3
          pl-11
          pr-4
          text-sm
          outline-none
          transition
          focus:border-violet-500
        "
      />

    </div>
  );
};

export default NotesSearch;