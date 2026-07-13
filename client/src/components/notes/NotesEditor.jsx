import { EditorContent } from "@tiptap/react";

const NotesEditor = ({ editor }) => {
  if (!editor) {
    return (
      <div
        className="
          flex
          flex-1
          items-center
          justify-center
          bg-[#0B1220]
          text-gray-500
        "
      >
        Loading editor...
      </div>
    );
  }

  return (
    <div
      className="
        flex-1
        overflow-hidden
        bg-[#0B1220]
        px-4
        py-4
        md:px-8
        md:py-6
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-5xl
          min-h-full
          rounded-2xl
          border
          border-gray-800
          bg-[#111827]
          p-5
          md:p-8
          transition-all
          duration-200
          focus-within:border-violet-500
          focus-within:shadow-lg
          focus-within:shadow-violet-500/10
        "
      >
        <EditorContent
          editor={editor}
          className="
            h-full
            text-gray-200
            outline-none
          "
        />
      </div>
    </div>
  );
};

export default NotesEditor;