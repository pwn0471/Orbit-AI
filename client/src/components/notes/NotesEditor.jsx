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
        overflow-y-auto
        bg-[#0B1220]
      "
    >
      <EditorContent
        editor={editor}
        className="
          min-h-full
          px-8
          py-8
          text-gray-200
          outline-none
        "
      />
    </div>
  );
};

export default NotesEditor;