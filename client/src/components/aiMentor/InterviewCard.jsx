import {
  Briefcase,
  Sparkles,
  Clock3,
  ArrowRight,
} from "lucide-react";

const InterviewCard = ({
  interviews,
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
            Mock Interviews
          </h2>

          <p className="text-sm text-gray-400 mt-1">
            AI-generated interview practice
          </p>

        </div>

        {/* Icon */}
        <div
          className="
            w-12 h-12
            rounded-2xl
            bg-purple-500/10
            border border-purple-500/20
            flex items-center justify-center
            text-purple-400
          "
        >

          <Briefcase size={22} />

        </div>

      </div>

      {/* Cards */}
      <div className="space-y-4">

        {interviews.map(
          (item, index) => (
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

                  {/* Role */}
                  <h3 className="text-white font-semibold">

                    {item.role}

                  </h3>

                  {/* Type */}
                  <p className="text-sm text-gray-400 mt-1">

                    {item.type}

                  </p>

                </div>

                {/* AI Badge */}
                <div
                  className="
                    flex items-center gap-1
                    px-3 py-1
                    rounded-full
                    bg-purple-500/10
                    border border-purple-500/20
                    text-purple-300
                    text-xs
                  "
                >

                  <Sparkles size={12} />

                  AI Generated

                </div>

              </div>

              {/* Question */}
              <div className="mt-5">

                <h4 className="text-sm text-gray-400 mb-2">

                  Sample Question

                </h4>

                <p className="text-white leading-7">

                  {item.question}

                </p>

              </div>

              {/* Footer */}
              <div className="flex flex-wrap items-center justify-between gap-4 mt-6">

                {/* Duration */}
                <div className="flex items-center gap-2 text-sm text-gray-500">

                  <Clock3 size={16} />

                  {item.duration}

                </div>

                {/* Start Button */}
                <button
                  className="
                    flex items-center gap-2
                    px-4 py-2
                    rounded-xl
                    bg-gradient-to-r
                    from-purple-600
                    to-indigo-600
                    hover:opacity-90
                    transition
                    text-sm text-white
                  "
                >

                  Start Practice

                  <ArrowRight size={16} />

                </button>

              </div>

            </div>
          )
        )}

      </div>

      {/* Empty State */}
      {interviews.length === 0 && (
        <div className="text-center py-12 text-gray-500">

          No interview suggestions available

        </div>
      )}

    </div>
  );
};

export default InterviewCard;