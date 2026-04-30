import {
  Clock3,
  CheckCircle2,
  Circle,
  Flag,
  Trash2,
} from "lucide-react";

const PlanCard = ({
  plan,
  toggleComplete,
  deletePlan,
}) => {
  return (
    <div
      className={`
        bg-[#111827]/80
        border rounded-2xl
        p-5
        transition-all duration-300
        hover:shadow-lg hover:shadow-purple-500/10
        ${
          plan.completed
            ? "border-green-500/30"
            : "border-gray-700 hover:border-purple-500"
        }
      `}
    >

      {/* Top */}
      <div className="flex items-start justify-between gap-4">

        {/* Left */}
        <div className="flex-1">

          {/* Title */}
          <div className="flex items-center gap-3">

            <button
              onClick={() =>
                toggleComplete(
                  plan.id
                )
              }
              className="transition"
            >

              {plan.completed ? (
                <CheckCircle2
                  size={22}
                  className="text-green-400"
                />
              ) : (
                <Circle
                  size={22}
                  className="text-gray-500 hover:text-purple-400"
                />
              )}

            </button>

            <h2
              className={`
                text-lg md:text-xl
                font-semibold
                ${
                  plan.completed
                    ? "line-through text-gray-500"
                    : "text-white"
                }
              `}
            >

              {plan.title}

            </h2>

          </div>

          {/* Description */}
          <p className="text-sm text-gray-400 leading-6 mt-4">

            {plan.description}

          </p>

        </div>

        {/* Delete */}
        <button
          onClick={() =>
            deletePlan(plan.id)
          }
          className="
            p-2 rounded-lg
            bg-[#0b1220]
            border border-gray-700
            text-red-400
            hover:border-red-500
            transition
          "
        >

          <Trash2 size={16} />

        </button>

      </div>

      {/* Bottom */}
      <div className="flex flex-wrap items-center gap-3 mt-6">

        {/* Hours */}
        <div
          className="
            flex items-center gap-2
            px-3 py-2
            rounded-xl
            bg-[#0b1220]
            border border-gray-700
            text-sm text-gray-300
          "
        >

          <Clock3
            size={16}
            className="text-cyan-400"
          />

          {plan.hours} Hours

        </div>

        {/* Category */}
        <div
          className="
            px-3 py-2
            rounded-xl
            bg-purple-500/10
            border border-purple-500/20
            text-purple-300
            text-sm
          "
        >

          {plan.category}

        </div>

        {/* Priority */}
        <div
          className={`
            flex items-center gap-2
            px-3 py-2
            rounded-xl
            text-sm
            border
            ${
              plan.priority ===
              "High"
                ? "bg-red-500/10 border-red-500/20 text-red-400"
                : plan.priority ===
                  "Medium"
                ? "bg-yellow-500/10 border-yellow-500/20 text-yellow-400"
                : "bg-green-500/10 border-green-500/20 text-green-400"
            }
          `}
        >

          <Flag size={14} />

          {plan.priority}

        </div>

      </div>

    </div>
  );
};

export default PlanCard;