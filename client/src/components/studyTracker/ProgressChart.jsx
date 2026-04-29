import {
  TrendingUp,
  CalendarDays,
} from "lucide-react";

const ProgressChart = ({
  weeklyProgress,
}) => {
  // Highest value
  const maxValue = Math.max(
    ...weeklyProgress.map(
      (item) => item.hours
    ),
    1
  );

  return (
    <div
      className="
        bg-[#111827]/80
        border border-gray-700
        rounded-2xl
        p-5
      "
    >

      {/* Header */}
      <div className="flex items-center justify-between mb-6">

        <div>

          <h2 className="text-xl font-bold text-white">
            Weekly Progress
          </h2>

          <p className="text-sm text-gray-400 mt-1">
            Your study consistency this week
          </p>

        </div>

        <div
          className="
            w-11 h-11
            rounded-xl
            bg-purple-500/20
            flex items-center justify-center
            text-purple-400
          "
        >
          <TrendingUp size={20} />
        </div>

      </div>

      {/* Chart */}
      <div
        className="
          flex items-end justify-between
          gap-3
          h-64
          mt-10
        "
      >

        {weeklyProgress.map(
          (item, index) => {
            // Height %
            const height =
              (item.hours / maxValue) * 100;

            return (
              <div
                key={index}
                className="
                  flex-1
                  flex flex-col items-center
                  group
                "
              >

                {/* Hours */}
                <span className="text-xs text-gray-400 mb-2">

                  {item.hours}h

                </span>

                {/* Bar */}
                <div
                  className="
                    relative
                    w-full
                    rounded-t-2xl
                    bg-gradient-to-t
                    from-purple-600
                    to-indigo-500
                    transition-all duration-500
                    hover:scale-105
                    shadow-lg shadow-purple-500/10
                  "
                  style={{
                    height: `${height}%`,
                    minHeight: "25px",
                  }}
                >

                  {/* Glow */}
                  <div
                    className="
                      absolute inset-0
                      rounded-t-2xl
                      opacity-0
                      group-hover:opacity-100
                      transition
                      bg-white/10
                    "
                  />

                </div>

                {/* Day */}
                <div className="mt-3 flex items-center gap-1 text-gray-400 text-xs">

                  <CalendarDays size={12} />

                  {item.day}

                </div>

              </div>
            );
          }
        )}

      </div>

      {/* Footer */}
      <div
        className="
          mt-8
          flex flex-col sm:flex-row
          gap-4 sm:items-center sm:justify-between
          text-sm
        "
      >

        <div className="text-gray-400">

          Total Weekly Hours:
          <span className="text-white font-semibold ml-2">

            {weeklyProgress.reduce(
              (acc, curr) =>
                acc + curr.hours,
              0
            )}h

          </span>

        </div>

        <div
          className="
            px-3 py-1
            rounded-full
            bg-green-500/20
            text-green-400
            border border-green-500/20
            w-fit
          "
        >

          Consistency Improving 🚀

        </div>

      </div>

    </div>
  );
};

export default ProgressChart;