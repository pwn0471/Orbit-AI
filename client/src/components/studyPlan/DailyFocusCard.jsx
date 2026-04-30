import {
  Target,
  Flame,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const DailyFocusCard = ({
  completedPlans,
  totalPlans,
}) => {
  // Progress %
  const progress =
    totalPlans > 0
      ? Math.round(
          (completedPlans /
            totalPlans) *
            100
        )
      : 0;

  return (
    <div
      className="
        bg-[#111827]/80
        border border-gray-700
        rounded-3xl
        p-6
        mb-6
        overflow-hidden
        relative
      "
    >

      {/* Glow */}
      <div
        className="
          absolute
          top-0 right-0
          w-52 h-52
          bg-purple-600/10
          blur-3xl
          rounded-full
        "
      />

      {/* Top */}
      <div className="relative z-10 flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">

        {/* Left */}
        <div>

          {/* Badge */}
          <div
            className="
              inline-flex items-center gap-2
              px-4 py-2
              rounded-full
              bg-purple-500/10
              border border-purple-500/20
              text-purple-300
              text-sm
            "
          >

            <Sparkles size={16} />

            AI Daily Focus

          </div>

          {/* Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-white mt-5">

            Stay Consistent 🚀

          </h2>

          {/* Description */}
          <p className="text-gray-400 leading-7 mt-3 max-w-2xl">

            Focus on completing your
            planned sessions today.
            Consistency matters more
            than intensity during
            placement preparation.

          </p>

        </div>

        {/* Right */}
        <div className="flex flex-wrap gap-4">

          {/* Completed */}
          <div
            className="
              min-w-[130px]
              bg-[#0b1220]
              border border-gray-700
              rounded-2xl
              p-4
            "
          >

            <div className="flex items-center gap-2 text-green-400">

              <Target size={18} />

              <span className="text-sm">
                Completed
              </span>

            </div>

            <h3 className="text-3xl font-bold text-white mt-3">

              {completedPlans}

            </h3>

          </div>

          {/* Progress */}
          <div
            className="
              min-w-[130px]
              bg-[#0b1220]
              border border-gray-700
              rounded-2xl
              p-4
            "
          >

            <div className="flex items-center gap-2 text-purple-400">

              <TrendingUp size={18} />

              <span className="text-sm">
                Progress
              </span>

            </div>

            <h3 className="text-3xl font-bold text-white mt-3">

              {progress}%

            </h3>

          </div>

          {/* Streak */}
          <div
            className="
              min-w-[130px]
              bg-[#0b1220]
              border border-gray-700
              rounded-2xl
              p-4
            "
          >

            <div className="flex items-center gap-2 text-orange-400">

              <Flame size={18} />

              <span className="text-sm">
                Streak
              </span>

            </div>

            <h3 className="text-3xl font-bold text-white mt-3">

              14d

            </h3>

          </div>

        </div>

      </div>

      {/* Progress Bar */}
      <div className="relative z-10 mt-8">

        <div className="flex items-center justify-between mb-3 text-sm">

          <span className="text-gray-400">
            Daily Completion
          </span>

          <span className="text-white">
            {completedPlans}/
            {totalPlans}
          </span>

        </div>

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
              transition-all duration-500
            "
            style={{
              width: `${progress}%`,
            }}
          />

        </div>

      </div>

    </div>
  );
};

export default DailyFocusCard;