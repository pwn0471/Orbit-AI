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
        p-4
      "
    >
      <div
        className="
          w-full
          max-w-3xl
          rounded-2xl
          border
          border-gray-700
          bg-[#0F172A]
          shadow-2xl
          overflow-hidden
        "
      >
        {/* ================= Header ================= */}

        <div className="flex items-start justify-between border-b border-gray-800 px-4 md:px-6 py-4">
          <div>

            <h2 className="text-lg md:text-xl font-semibold text-white">
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

        <div className="max-h-[55vh] overflow-y-auto px-4 md:px-6 py-5">

          {loading ? (

            <div className="flex flex-col items-center justify-center py-16">

              <div
                className="
                  h-10
                  w-10
                  animate-spin
                  rounded-full
                  border-4
                  border-violet-500
                  border-t-transparent
                "
              />

              <p className="mt-5 text-sm text-gray-400">
                AI is generating your response...
              </p>

            </div>

          ) : (

            <div
              className="
                rounded-xl
                border
                border-gray-700
                bg-[#111827]
                p-4
                md:p-5
                whitespace-pre-wrap
                text-sm
                md:text-base
                leading-7
                text-gray-200
              "
            >
              {content}
            </div>

          )}

        </div>

        {/* ================= Footer ================= */}

        <div
          className="
            border-t
            border-gray-800
            px-4
            md:px-6
            py-4
          "
        >

          <p className="mb-4 text-sm text-gray-400">
            Review the response before replacing your note.
          </p>

          <div className="flex gap-3">

            <button
              onClick={onCopy}
              className="
                flex-1
                flex
                items-center
                justify-center
                gap-2
                rounded-xl
                border
                border-gray-700
                px-4
                py-2.5
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
                flex-1
                flex
                items-center
                justify-center
                gap-2
                rounded-xl
                bg-violet-600
                px-4
                py-2.5
                text-sm
                font-medium
                text-white
                transition
                hover:bg-violet-500
              "
            >
              <CheckCircle2 size={17} />
              Replace
            </button>

          </div>

        </div>

      </div>
    </div>
  );
};

export default AIResultModal;