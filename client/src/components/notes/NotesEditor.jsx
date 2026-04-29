import { EditorContent } from "@tiptap/react";

const NotesEditor = ({ editor }) => {
  return (
    <div className="prose prose-invert max-w-none min-h-[400px]">

      <EditorContent editor={editor} />

    </div>
  );
};

export default NotesEditor;