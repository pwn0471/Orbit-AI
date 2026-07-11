import {
  Sparkles,
  Lightbulb,
  GraduationCap,
  Send,
} from "lucide-react";

const actions = [
  {
    icon: Sparkles,
    title: "Summarize",
    description: "Generate a short summary",
  },
  {
    icon: Lightbulb,
    title: "Explain Simpler",
    description: "Make this easier to understand",
  },
  {
    icon: GraduationCap,
    title: "Create Flashcards",
    description: "Generate placement questions",
  },
];

const AIAssistant = () => {
  return (
    <aside className="hidden xl:flex w-[280px] flex-col border-l border-gray-800 bg-[#0F172A]">

      {/* Header */}
      <div className="border-b border-gray-800 px-5 py-5">
        <h2 className="text-xl font-bold text-white">
          🤖 AI Assistant
        </h2>

        <p className="mt-1 text-sm text-gray-400">
          Your personal learning companion
        </p>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto px-5 py-5">

        {/* Ask AI */}
        <div className="mb-6">
          <label className="mb-2 block text-sm font-medium text-gray-300">
            Ask AI
          </label>

          <div className="relative">
            <input
              type="text"
              placeholder="Ask AI about this note..."
              className="
                w-full
                rounded-xl
                border border-gray-700
                bg-[#111827]
                py-3
                pl-4
                pr-12
                text-sm
                text-white
                placeholder:text-gray-500
                outline-none
                transition
                focus:border-violet-500
              "
            />

            <button
              type="button"
              className="
                absolute
                right-2
                top-1/2
                flex
                h-9
                w-9
                -translate-y-1/2
                items-center
                justify-center
                rounded-lg
                bg-violet-600
                transition
                hover:bg-violet-500
              "
            >
              <Send size={16} />
            </button>
          </div>
        </div>

        {/* Suggestion Card */}
        <div className="mb-6 rounded-2xl border border-gray-800 bg-[#111827] p-4">
          <h3 className="font-semibold text-white">
            AI Suggestions
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-400">
            Use AI to summarize, explain,
            improve or organize your notes.
          </p>
        </div>

        {/* Quick Actions */}
        <div>
          <h4 className="mb-3 text-xs font-semibold uppercase tracking-wider text-gray-500">
            Quick Actions
          </h4>

          <div className="space-y-3">

            {actions.map((item) => {
              const Icon = item.icon;

              return (
                <button
                  key={item.title}
                  type="button"
                  className="
                    group
                    flex
                    w-full
                    items-start
                    gap-3
                    rounded-xl
                    border border-gray-800
                    bg-[#111827]
                    p-3
                    text-left
                    transition-all
                    duration-200
                    hover:-translate-y-0.5
                    hover:border-violet-500
                    hover:bg-[#1A2333]
                  "
                >
                  <div
                    className="
                      flex
                      h-10
                      w-10
                      items-center
                      justify-center
                      rounded-lg
                      bg-violet-500/10
                      text-violet-400
                      transition
                      group-hover:bg-violet-500
                      group-hover:text-white
                    "
                  >
                    <Icon size={18} />
                  </div>

                  <div className="flex-1">
                    <p className="font-medium text-white">
                      {item.title}
                    </p>

                    <p className="mt-1 text-xs text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </button>
              );
            })}

          </div>
        </div>
      </div>
    </aside>
  );
};

export default AIAssistant;