import { useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";
import CharacterCount from "@tiptap/extension-character-count";

const useNotesEditor = (content) => {
  const editor = useEditor({
    extensions: [
      StarterKit,

      Placeholder.configure({
        placeholder:
          "Start writing your notes...\n\nOrganize your ideas, lectures, assignments, projects or study material here.",
      }),

      CharacterCount,
    ],

    content: content || "<p></p>",

    editorProps: {
      attributes: {
        class: [
          "prose",
          "prose-invert",
          "max-w-none",
          "min-h-full",
          "focus:outline-none",

          "text-gray-200",
          "text-[16px]",
          "md:text-[17px]",
          "leading-8",

          "prose-p:my-3",

          "prose-headings:text-white",
          "prose-headings:font-bold",
          "prose-headings:tracking-tight",

          "prose-h1:text-4xl",
          "prose-h2:text-3xl",
          "prose-h3:text-2xl",

          "prose-strong:text-white",

          "prose-ul:my-3",
          "prose-ol:my-3",
          "prose-li:my-1",

          "prose-blockquote:border-violet-500",
          "prose-blockquote:text-gray-300",

          "prose-code:text-violet-300",
          "prose-code:bg-[#1F2937]",
          "prose-code:px-1.5",
          "prose-code:py-0.5",
          "prose-code:rounded",

          "prose-pre:bg-[#111827]",
          "prose-pre:border",
          "prose-pre:border-gray-700",
          "prose-pre:rounded-xl",

          "selection:bg-violet-600",
          "selection:text-white",

          "caret-violet-500",
        ].join(" "),
      },
    },
  });

  return editor;
};

export default useNotesEditor;