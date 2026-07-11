import { FileText, Sparkles } from "lucide-react";

const EmptyNotesState = ({ onCreate }) => {
  return (
    <div className="
            flex
            h-[calc(100vh-64px)]
            w-full
            items-center
            justify-center
            bg-[#0B1220]
            px-6
        "
        >

      <div className="max-w-lg text-center">

        {/* Icon */}
        <div
          className="
            mx-auto
            flex
            h-20
            w-20
            items-center
            justify-center
            rounded-3xl
            bg-violet-500/10
            border
            border-violet-500/20
          "
        >
          <FileText
            size={40}
            className="text-violet-400"
          />
        </div>

        {/* Heading */}
        <h2 className="mt-8 text-3xl font-bold text-white">
          Welcome to Orbit Notes
        </h2>

        {/* Description */}
        <p className="mt-4 text-gray-400 leading-7">
          Capture your lectures, study notes, ideas,
            projects and research in one organized workspace.
        </p>

        <div
          className="
            mt-4
            inline-flex
            items-center
            gap-2
            rounded-full
            border
            border-violet-500/20
            bg-violet-500/10
            px-4
            py-2
            text-sm
            text-violet-300
          "
        >
          <Sparkles size={16} />
          AI can summarize, explain, improve and organize your notes.
        </div>

        {/* Button */}
        <button
          onClick={onCreate}
          className="
            mt-10
            rounded-xl
            bg-violet-600
            px-6
            py-3
            font-semibold
            text-white
            transition
            hover:bg-violet-500
          "
        >
          + Create First Note
        </button>

      </div>

    </div>
  );
};

export default EmptyNotesState;