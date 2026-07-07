import {
  Undo2,
  Redo2,
  Bold,
  Italic,
  Heading2,
  List,
  Code2,
  Clock3,
} from "lucide-react";

const EditorSection = () => {
  return (
    <section className="flex-1 flex flex-col bg-[#0B1220]">

      {/* Header */}
      <div className="border-b border-gray-800 px-8 py-6">

        {/* Title */}
        <input
          type="text"
          defaultValue="Java Collections Framework"
          className="
            w-full
            bg-transparent
            text-3xl
            font-bold
            outline-none
            placeholder:text-gray-500
          "
        />

        {/* Metadata */}
        <div className="flex flex-wrap gap-3 mt-5">

          <span className="px-2.5 py-1 rounded-full bg-violet-500/10 text-violet-300 text-sm">
            Java
          </span>

          <span className="px-2.5 py-1 rounded-full bg-slate-700 text-gray-300 text-sm">
            Intermediate
          </span>

          <span className="px-2.5 py-1 rounded-full bg-yellow-500/10 text-yellow-300 text-sm">
            ★★★★★
          </span>

          <span className="px-2.5 py-1 rounded-full bg-orange-500/10 text-orange-300 text-sm">
            Need Revision
          </span>

        </div>

      </div>

      {/* Toolbar */}
      <div className="border-b border-gray-800 px-8 py-3">

        <div className="flex items-center gap-2 flex-wrap">

          {[
            Undo2,
            Redo2,
            Bold,
            Italic,
            Heading2,
            List,
            Code2,
          ].map((Icon, index) => (
            <button
              key={index}
              className="
                w-10
                h-10
                rounded-xl
                bg-[#111827]
                hover:bg-violet-600
                transition
                flex
                items-center
                justify-center
              "
            >
              <Icon size={18} />
            </button>
          ))}

        </div>

      </div>

      {/* Editor */}
      <div className="flex-1 overflow-y-auto px-8 py-8">

        <div
          className="
            min-h-full
            text-gray-300
            leading-8
            text-lg
          "
          contentEditable
          suppressContentEditableWarning
        >
          Start writing your notes...
        </div>

      </div>

      {/* Footer */}
      <div className="border-t border-gray-800 px-8 py-4 flex items-center justify-between text-sm text-gray-400">

        <span>
          248 Words
        </span>

        <div className="flex items-center gap-2">

          <Clock3 size={16} />

          <span>2 min read</span>

        </div>

      </div>

    </section>
  );
};

export default EditorSection;