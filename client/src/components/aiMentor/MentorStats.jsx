import {
  MessageSquare,
  Brain,
  Flame,
  Trophy,
} from "lucide-react";

const MentorStats = ({
  totalQuestions,
  weakTopics,
  sessions,
  readiness,
}) => {
  const stats = [
    {
      title: "Questions Asked",
      value: totalQuestions,
      icon: (
        <MessageSquare size={20} />
      ),
      color:
        "from-purple-500 to-indigo-500",
    },

    {
      title: "Weak Topics",
      value: weakTopics,
      icon: <Brain size={20} />,
      color:
        "from-red-500 to-orange-500",
    },

    {
      title: "AI Sessions",
      value: sessions,
      icon: <Flame size={20} />,
      color:
        "from-cyan-500 to-blue-500",
    },

    {
      title: "Readiness",
      value: `${readiness}%`,
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

    </div>
  );
};

export default MentorStats;