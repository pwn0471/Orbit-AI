import {
  BookOpen,
  Flame,
  Clock3,
  Trophy,
} from "lucide-react";

const StudyStats = ({
  subjects,
  totalHours,
}) => {
  // Total Subjects
  const totalSubjects = subjects.length;

  // Completed Topics
  const completedTopics =
    subjects.reduce(
      (acc, curr) =>
        acc + curr.completed,
      0
    );

  // Total Topics
  const totalTopics = subjects.reduce(
    (acc, curr) => acc + curr.total,
    0
  );

  // Average Progress
  const avgProgress =
    totalSubjects > 0
      ? Math.round(
          subjects.reduce(
            (acc, curr) =>
              acc + curr.progress,
            0
          ) / totalSubjects
        )
      : 0;

  // Highest Streak
  const highestStreak = Math.max(
    ...subjects.map(
      (subject) => subject.streak
    )
  );

  const stats = [
    {
      title: "Subjects",
      value: totalSubjects,
      icon: <BookOpen size={20} />,
      color:
        "from-purple-500 to-indigo-500",
    },
    {
      title: "Study Hours",
      value: `${totalHours}h`,
      icon: <Clock3 size={20} />,
      color:
        "from-cyan-500 to-blue-500",
    },
    {
      title: "Current Streak",
      value: `${highestStreak}d`,
      icon: <Flame size={20} />,
      color:
        "from-orange-500 to-red-500",
    },
    {
      title: "Completion",
      value: `${avgProgress}%`,
      icon: <Trophy size={20} />,
      color:
        "from-green-500 to-emerald-500",
    },
  ];

  return (
    <div
      className="
        grid
        grid-cols-1
        sm:grid-cols-2
        xl:grid-cols-4
        gap-4
        mb-6
      "
    >

      {stats.map((item, index) => (
        <div
          key={index}
          className="
            bg-[#111827]/80
            border border-gray-700
            rounded-2xl
            p-5
            hover:border-purple-500
            hover:shadow-lg
            hover:shadow-purple-500/10
            transition-all
          "
        >

          {/* Top */}
          <div className="flex items-center justify-between">

            <div
              className={`
                w-12 h-12
                rounded-xl
                bg-gradient-to-r
                ${item.color}
                flex items-center justify-center
                text-white
              `}
            >
              {item.icon}
            </div>

            <span className="text-xs text-gray-500">
              Analytics
            </span>

          </div>

          {/* Value */}
          <h2 className="text-3xl font-bold text-white mt-5">
            {item.value}
          </h2>

          {/* Label */}
          <p className="text-sm text-gray-400 mt-1">
            {item.title}
          </p>

        </div>
      ))}

      {/* Extra Progress Card */}
      <div
        className="
          col-span-1 sm:col-span-2 xl:col-span-4
          bg-[#111827]/80
          border border-gray-700
          rounded-2xl
          p-5
        "
      >

        <div className="flex items-center justify-between mb-4">

          <h2 className="text-lg font-semibold text-white">
            Overall Progress
          </h2>

          <span className="text-sm text-purple-400">
            {completedTopics}/{totalTopics} Topics Completed
          </span>

        </div>

        {/* Progress Bar */}
        <div
          className="
            w-full
            h-4
            rounded-full
            bg-[#1f2937]
            overflow-hidden
          "
        >

          <div
            className="
              h-full
              bg-gradient-to-r
              from-purple-500
              to-indigo-500
              transition-all
              duration-500
            "
            style={{
              width: `${avgProgress}%`,
            }}
          />

        </div>

      </div>

    </div>
  );
};

export default StudyStats;