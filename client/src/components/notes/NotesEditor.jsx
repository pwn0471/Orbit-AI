import { EditorContent } from "@tiptap/react";

const NotesEditor = ({ editor }) => {
  if (!editor) {
    return (
      <div className="flex h-full items-center justify-center text-gray-500">
        Loading editor...
      </div>
    );
  }

  return (
    <div className="flex-1 overflow-y-auto p-8">
      <EditorContent
        editor={editor}
        className="h-full outline-none text-gray-200"
      />
    </div>
  );
};

export default NotesEditor;