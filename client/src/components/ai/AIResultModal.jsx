import {
  X,
  Copy,
  CheckCircle2,
} from "lucide-react";

const AIResultModal = ({
  open,
  title,
  content,
  loading,
  onClose,
  onCopy,
  onReplace,
}) => {
  if (!open) return null;

  return (
    <div
      className="
        fixed
        inset-0
        z-50
        flex
        items-center
        justify-center
        bg-black/60
        backdrop-blur-sm
      "
    >
      <div
        className="
          w-full
          max-w-3xl
          mx-4
          rounded-2xl
          border
          border-gray-700
          bg-[#0F172A]
          shadow-2xl
          overflow-hidden
        "
      >
        {/* ================= Header ================= */}

        <div
          className="
            flex
            items-start
            justify-between
            border-b
            border-gray-800
            px-6
            py-5
          "
        >
          <div>

            <h2 className="text-xl font-semibold text-white">
              {title}
            </h2>

            <p className="mt-1 text-sm text-gray-400">
              AI-generated response based on your current note.
            </p>

          </div>

          <button
            onClick={onClose}
            className="
              rounded-lg
              p-2
              text-gray-400
              transition
              hover:bg-gray-800
              hover:text-white
            "
          >
            <X size={20} />
          </button>

        </div>

        {/* ================= Body ================= */}

        <div className="max-h-[450px] overflow-y-auto p-6">

          {loading ? (

            <div className="flex flex-col items-center justify-center py-20">

              <div
                className="
                  h-10
                  w-10
                  rounded-full
                  border-4
                  border-violet-500
                  border-t-transparent
                  animate-spin
                "
              />

              <p className="mt-5 text-gray-400">
                AI is generating your response...
              </p>

            </div>

          ) : (

            <div
              className="
                rounded-xl
                border
                border-gray-800
                bg-[#111827]
                p-5
                whitespace-pre-wrap
                text-gray-200
                leading-8
              "
            >
              {content}
            </div>

          )}

        </div>

        {/* ================= Footer ================= */}

        <div
          className="
            flex
            items-center
            justify-between
            border-t
            border-gray-800
            px-6
            py-4
          "
        >
          <span className="text-sm text-gray-500">
            Review the response before replacing your note.
          </span>

          <div className="flex items-center gap-3">

            <button
              onClick={onCopy}
              className="
                flex
                items-center
                gap-2
                rounded-xl
                border
                border-gray-700
                px-4
                py-2
                text-sm
                font-medium
                transition
                hover:bg-gray-800
              "
            >
              <Copy size={17} />
              Copy
            </button>

            <button
              onClick={onReplace}
              className="
                flex
                items-center
                gap-2
                rounded-xl
                bg-violet-600
                px-4
                py-2
                text-sm
                font-medium
                text-white
                transition
                hover:bg-violet-500
              "
            >
              <CheckCircle2 size={17} />
              Replace Note
            </button>

          </div>

        </div>

      </div>
    </div>
  );
};

export default AIResultModal;