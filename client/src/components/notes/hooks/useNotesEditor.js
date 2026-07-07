import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import CharacterCount from "@tiptap/extension-character-count";

const useNotesEditor = (content ) => {
  const editor = useEditor({
    extensions: [
      StarterKit,

      Placeholder.configure({
        placeholder: "Start writing your notes...",
      }),

      CharacterCount,
    ],

    content: content || "<p></p>",

    editorProps: {
      attributes: {
        class:
          "prose prose-invert max-w-none min-h-full focus:outline-none text-gray-200",
      },
    },
  });

  return editor;
};

export default useNotesEditor;