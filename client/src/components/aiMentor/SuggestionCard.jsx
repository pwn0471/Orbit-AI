import {
  Sparkles,
  ArrowRight,
  BookOpen,
  Brain,
  Target,
} from "lucide-react";

const SuggestionCard = ({
  title,
  description,
  type,
  action,
}) => {
  // Icon Types
  const icons = {
    study: (
      <BookOpen size={20} />
    ),

    ai: (
      <Sparkles size={20} />
    ),

    weak: (
      <Brain size={20} />
    ),

    target: (
      <Target size={20} />
    ),
  };

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

        {/* Left */}
        <div
          className="
            w-12 h-12
            rounded-2xl
            bg-purple-500/10
            border border-purple-500/20
            flex items-center justify-center
            text-purple-400
            flex-shrink-0
          "
        >

          {icons[type]}

        </div>

        {/* Badge */}
        <div
          className="
            px-3 py-1
            rounded-full
            bg-green-500/10
            border border-green-500/20
            text-green-400
            text-xs
          "
        >

          AI Suggested

        </div>

      </div>

      {/* Content */}
      <div className="mt-5">

        <h2 className="text-lg font-semibold text-white">

          {title}

        </h2>

        <p className="text-sm text-gray-400 leading-6 mt-2">

          {description}

        </p>

      </div>

      {/* Bottom */}
      <button
        className="
          mt-6
          flex items-center gap-2
          text-sm text-purple-400
          hover:text-purple-300
          transition
        "
      >

        {action}

        <ArrowRight size={16} />

      </button>

    </div>
  );
};

export default SuggestionCard;