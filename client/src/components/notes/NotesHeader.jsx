const NotesHeader = ({
  createNote,
  notesCount,
}) => {
  return (
    <div className="flex items-center justify-between gap-4 mb-5">

      {/* Left */}
      <div>

        <h2 className="text-xl md:text-2xl font-bold text-white">
          Notes
        </h2>

        <p className="text-xs md:text-sm text-gray-400 mt-1">
          {notesCount} Notes Available
        </p>

      </div>

      {/* Right */}
      <button
        onClick={createNote}
        className="
          flex items-center justify-center
          w-10 h-10 md:w-auto md:h-auto
          md:px-4 md:py-2
          rounded-lg
          bg-gradient-to-r from-purple-600 to-indigo-600
          hover:opacity-90
          transition
          text-white
          font-medium
          shadow-lg shadow-purple-500/10
        "
      >

        {/* Mobile */}
        <span className="md:hidden text-xl">
          +
        </span>

        {/* Desktop */}
        <span className="hidden md:block">
          + New Note
        </span>

      </button>

    </div>
  );
};

export default NotesHeader;