import {
  AlertTriangle,
  TrendingUp,
  Brain,
} from "lucide-react";

const WeakTopicsCard = ({
  weakTopics,
}) => {
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
            Weak Topics
          </h2>

          <p className="text-sm text-gray-400 mt-1">
            AI detected improvement areas
          </p>

        </div>

        {/* Icon */}
        <div
          className="
            w-12 h-12
            rounded-2xl
            bg-red-500/10
            border border-red-500/20
            flex items-center justify-center
            text-red-400
          "
        >

          <Brain size={22} />

        </div>

      </div>

      {/* Topics */}
      <div className="space-y-4">

        {weakTopics.map(
          (topic, index) => (
            <div
              key={index}
              className="
                bg-[#0b1220]
                border border-gray-700
                rounded-2xl
                p-4
                hover:border-purple-500
                transition-all
              "
            >

              {/* Top */}
              <div className="flex items-start justify-between gap-3">

                <div>

                  <h3 className="text-white font-semibold">

                    {topic.name}

                  </h3>

                  <p className="text-sm text-gray-400 mt-1 leading-6">

                    {topic.reason}

                  </p>

                </div>

                {/* Priority */}
                <div
                  className={`
                    px-3 py-1
                    rounded-full
                    text-xs
                    border
                    ${
                      topic.priority ===
                      "High"
                        ? "bg-red-500/10 border-red-500/20 text-red-400"
                        : topic.priority ===
                          "Medium"
                        ? "bg-yellow-500/10 border-yellow-500/20 text-yellow-400"
                        : "bg-green-500/10 border-green-500/20 text-green-400"
                    }
                  `}
                >

                  {topic.priority}

                </div>

              </div>

              {/* Progress */}
              <div className="mt-5">

                <div className="flex items-center justify-between text-sm mb-2">

                  <span className="text-gray-400">
                    Confidence
                  </span>

                  <span className="text-white">
                    {topic.confidence}%
                  </span>

                </div>

                <div
                  className="
                    w-full
                    h-3
                    rounded-full
                    bg-[#1f2937]
                    overflow-hidden
                  "
                >

                  <div
                    className={`
                      h-full
                      transition-all duration-500
                      ${
                        topic.priority ===
                        "High"
                          ? "bg-gradient-to-r from-red-500 to-orange-500"
                          : topic.priority ===
                            "Medium"
                          ? "bg-gradient-to-r from-yellow-500 to-amber-500"
                          : "bg-gradient-to-r from-green-500 to-emerald-500"
                      }
                    `}
                    style={{
                      width: `${topic.confidence}%`,
                    }}
                  />

                </div>

              </div>

              {/* Footer */}
              <div className="flex flex-wrap items-center gap-3 mt-5">

                {/* Action */}
                <button
                  className="
                    flex items-center gap-2
                    px-4 py-2
                    rounded-xl
                    bg-purple-500/10
                    border border-purple-500/20
                    text-purple-300
                    text-sm
                    hover:bg-purple-500/20
                    transition
                  "
                >

                  <TrendingUp size={16} />

                  Improve Topic

                </button>

                {/* Warning */}
                <div className="flex items-center gap-2 text-xs text-gray-500">

                  <AlertTriangle size={14} />

                  Focus Recommended

                </div>

              </div>

            </div>
          )
        )}

      </div>

      {/* Empty State */}
      {weakTopics.length === 0 && (
        <div className="text-center py-12 text-gray-500">

          No weak topics detected 🎉

        </div>
      )}

    </div>
  );
};

export default WeakTopicsCard;