import {
  Code2,
  Database,
  Brain,
  Briefcase,
} from "lucide-react";

const EmptyState = () => {
  const suggestions = [
    {
      icon: <Code2 size={18} />,
      title:
        "Explain Binary Search",
    },

    {
      icon: <Database size={18} />,
      title:
        "DBMS Normalization",
    },

    {
      icon: <Brain size={18} />,
      title:
        "OS Deadlock",
    },

    {
      icon: <Briefcase size={18} />,
      title:
        "Placement Interview Tips",
    },
  ];

  return (
    <div
      className="
        flex flex-col items-center justify-center

        min-h-[75vh]

        px-4
        text-center
      "
    >

      {/* Logo */}
      <div
        className="
          w-20 h-20

          rounded-3xl

          overflow-hidden

          bg-[#0d1728]

          border border-[#1b2a45]

          shadow-xl
          shadow-black/20

          p-3
        "
      >

        <img
          src="/logo2.png"
          alt="Orbit AI"
          className="
            w-full
            h-full
            object-contain
          "
        />

      </div>

      {/* Heading */}
      <h1
        className="
          text-3xl
          md:text-5xl

          font-bold

          text-white

          mt-8
        "
      >
        How can I help you today?
      </h1>

      {/* Subtitle */}
      <p
        className="
          text-gray-400

          text-sm
          md:text-base

          mt-4

          max-w-2xl
          leading-7
        "
      >
        Ask Orbit AI anything about DSA,
        DBMS, OS, React, interviews,
        projects, or placement preparation.
      </p>

      {/* Suggestions */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2

          gap-4

          w-full
          max-w-3xl

          mt-10
        "
      >

        {suggestions.map(
          (item, index) => (
            <button
              key={index}
              className="
                text-left

                p-5

                rounded-2xl

                bg-[#0d1728]

                border border-[#1b2a45]

                hover:bg-[#13203a]
                hover:border-violet-500/20

                transition-all duration-300

                shadow-md
                shadow-black/10
              "
            >

              {/* Icon */}
              <div
                className="
                  w-10 h-10

                  rounded-xl

                  bg-violet-500/10

                  flex items-center justify-center

                  text-violet-400
                "
              >

                {item.icon}

              </div>

              {/* Title */}
              <h3
                className="
                  text-white
                  font-medium

                  mt-4
                "
              >
                {item.title}
              </h3>

            </button>
          )
        )}

      </div>

    </div>
  );
};

export default EmptyState;