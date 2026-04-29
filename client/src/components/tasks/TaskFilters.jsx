const TaskFilters = ({
  filter,
  setFilter,
  search,
  setSearch,
}) => {
  const filters = [
    "All",
    "Completed",
    "Pending",
    "High",
  ];

  return (
    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4 mb-6">

      {/* Search */}
      <input
        type="text"
        placeholder="Search tasks..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full lg:w-80 px-4 py-3 rounded-xl bg-[#111827] border border-gray-700 outline-none focus:border-purple-500"
      />

      {/* Filters */}
      <div className="flex flex-wrap gap-3">

        {filters.map((item) => (
          <button
            key={item}
            onClick={() => setFilter(item)}
            className={`
              px-4 py-2 rounded-xl transition
              ${
                filter === item
                  ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
                  : "bg-[#111827] border border-gray-700 text-gray-300 hover:border-purple-500"
              }
            `}
          >
            {item}
          </button>
        ))}

      </div>

    </div>
  );
};

export default TaskFilters;