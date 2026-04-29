import {
  Flame,
  Clock3,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";

const SubjectCard = ({
  subject,
  updateProgress,
}) => {
  return (
    <div
      className="
        bg-[#111827]/80
        border border-gray-700
        rounded-2xl
        p-5
        hover:border-purple-500
        hover:shadow-lg
        hover:shadow-purple-500/10
        transition-all duration-300
      "
    >

      {/* Top */}
      <div className="flex items-start justify-between gap-4">

        <div>

          {/* Subject */}
          <h2 className="text-xl font-bold text-white">
            {subject.name}
          </h2>

          {/* Category */}
          <p className="text-sm text-gray-400 mt-1">
            {subject.category}
          </p>

        </div>

        {/* Progress Badge */}
        <div
          className="
            px-3 py-1
            rounded-full
            bg-purple-500/20
            text-purple-300
            text-sm
            border border-purple-500/20
          "
        >
          {subject.progress}%
        </div>

      </div>

      {/* Progress */}
      <div className="mt-5">

        <div className="flex justify-between text-sm mb-2">

          <span className="text-gray-400">
            Progress
          </span>

          <span className="text-white">
            {subject.completed}/
            {subject.total}
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
            className="
              h-full
              bg-gradient-to-r
              from-purple-500
              to-indigo-500
              transition-all duration-500
            "
            style={{
              width: `${subject.progress}%`,
            }}
          />

        </div>

      </div>

      {/* Stats */}
      <div
        className="
          grid grid-cols-3
          gap-3
          mt-6
        "
      >

        {/* Hours */}
        <div
          className="
            bg-[#0b1220]
            border border-gray-700
            rounded-xl
            p-3
            text-center
          "
        >

          <Clock3
            size={18}
            className="mx-auto text-cyan-400"
          />

          <h3 className="text-white font-semibold mt-2">
            {subject.hours}h
          </h3>

          <p className="text-xs text-gray-400 mt-1">
            Hours
          </p>

        </div>

        {/* Streak */}
        <div
          className="
            bg-[#0b1220]
            border border-gray-700
            rounded-xl
            p-3
            text-center
          "
        >

          <Flame
            size={18}
            className="mx-auto text-orange-400"
          />

          <h3 className="text-white font-semibold mt-2">
            {subject.streak}d
          </h3>

          <p className="text-xs text-gray-400 mt-1">
            Streak
          </p>

        </div>

        {/* Difficulty */}
        <div
          className="
            bg-[#0b1220]
            border border-gray-700
            rounded-xl
            p-3
            text-center
          "
        >

          <TrendingUp
            size={18}
            className="mx-auto text-green-400"
          />

          <h3 className="text-white font-semibold mt-2">
            {subject.level}
          </h3>

          <p className="text-xs text-gray-400 mt-1">
            Level
          </p>

        </div>

      </div>

      {/* Bottom */}
      <div className="mt-6 flex gap-3">

        {/* Complete Topic */}
        <button
          onClick={() =>
            updateProgress(subject.id)
          }
          className="
            flex-1
            flex items-center justify-center gap-2
            py-3
            rounded-xl
            bg-gradient-to-r
            from-purple-600
            to-indigo-600
            hover:opacity-90
            transition
            text-white
            font-medium
          "
        >

          <CheckCircle2 size={18} />

          Complete Topic

        </button>

      </div>

    </div>
  );
};

export default SubjectCard;