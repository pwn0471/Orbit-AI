import {
  BookOpen,
  CheckCircle2,
  Clock3,
  Target,
} from "lucide-react";

const PlanStats = ({
  plans,
}) => {
  // Total Plans
  const totalPlans =
    plans.length;

  // Completed
  const completedPlans =
    plans.filter(
      (plan) => plan.completed
    ).length;

  // Total Hours
  const totalHours =
    plans.reduce(
      (acc, curr) =>
        acc + Number(curr.hours),
      0
    );

  // Productivity
  const productivity =
    totalPlans > 0
      ? Math.round(
          (completedPlans /
            totalPlans) *
            100
        )
      : 0;

  const stats = [
    {
      title: "Today's Plans",
      value: totalPlans,
      icon: (
        <BookOpen size={20} />
      ),
      color:
        "from-purple-500 to-indigo-500",
    },

    {
      title: "Completed",
      value: completedPlans,
      icon: (
        <CheckCircle2 size={20} />
      ),
      color:
        "from-green-500 to-emerald-500",
    },

    {
      title: "Study Hours",
      value: `${totalHours}h`,
      icon: (
        <Clock3 size={20} />
      ),
      color:
        "from-cyan-500 to-blue-500",
    },

    {
      title: "Productivity",
      value: `${productivity}%`,
      icon: (
        <Target size={20} />
      ),
      color:
        "from-orange-500 to-red-500",
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

              Daily Stats

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

export default PlanStats;