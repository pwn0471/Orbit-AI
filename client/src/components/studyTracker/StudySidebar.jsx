import { Search } from "lucide-react";

const StudySidebar = ({
  subjects,
  activeSubject,
  setActiveSubject,
  search,
  setSearch,
}) => {
  return (
    <div
      className="
        hidden md:block
        w-72
        ml-64
        pt-20
        bg-[#111827]
        border-r border-gray-700
        p-4
        overflow-y-auto
      "
    >

      {/* Header */}
      <div className="mb-6">

        <h2 className="text-2xl font-bold text-white">
          Prep Tracker
        </h2>

        <p className="text-sm text-gray-400 mt-1">
          Track your placement preparation
        </p>

      </div>

      {/* Search */}
      <div className="relative mb-6">

        <Search
          size={18}
          className="
            absolute left-3 top-1/2
            -translate-y-1/2
            text-gray-500
          "
        />

        <input
          type="text"
          placeholder="Search subject..."
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          className="
            w-full
            bg-[#0b1220]
            border border-gray-700
            rounded-xl
            py-3 pl-10 pr-4
            text-sm
            outline-none
            focus:border-purple-500
            transition
          "
        />

      </div>

      {/* Subject List */}
      <div className="space-y-3">

        {subjects
          .filter((subject) =>
            subject.name
              .toLowerCase()
              .includes(search.toLowerCase())
          )
          .map((subject) => (
            <button
              key={subject.id}
              onClick={() =>
                setActiveSubject(subject)
              }
              className={`
                w-full
                p-4
                rounded-2xl
                border
                transition-all
                text-left
                hover:scale-[1.01]
                ${
                  activeSubject?.id ===
                  subject.id
                    ? "bg-purple-600/20 border-purple-500 shadow-lg shadow-purple-500/10"
                    : "bg-[#0b1220] border-gray-700 hover:border-purple-500"
                }
              `}
            >

              {/* Top */}
              <div className="flex items-center justify-between">

                <h3 className="font-semibold text-white">
                  {subject.name}
                </h3>

                <span
                  className="
                    text-xs
                    px-2 py-1
                    rounded-full
                    bg-purple-500/20
                    text-purple-300
                  "
                >
                  {subject.progress}%
                </span>

              </div>

              {/* Progress */}
              <div
                className="
                  w-full
                  h-2
                  bg-[#1f2937]
                  rounded-full
                  mt-4
                  overflow-hidden
                "
              >

                <div
                  className="
                    h-full
                    bg-gradient-to-r
                    from-purple-500
                    to-indigo-500
                  "
                  style={{
                    width: `${subject.progress}%`,
                  }}
                />

              </div>

              {/* Bottom */}
              <div className="flex justify-between mt-3 text-xs text-gray-400">

                <span>
                  {subject.completed}/
                  {subject.total} Completed
                </span>

                <span>
                  {subject.streak}d streak
                </span>

              </div>

            </button>
          ))}

      </div>

    </div>
  );
};

export default StudySidebar;