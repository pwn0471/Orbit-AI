import {
  Undo2,
  Redo2,
  Bold,
  Italic,
  Heading2,
  List,
  ListOrdered,
  Code2,
} from "lucide-react";

const toolbarButtons = [
  {
    icon: Undo2,
    action: (editor) => editor.chain().focus().undo().run(),
    active: () => false,
    title: "Undo",
  },
  {
    icon: Redo2,
    action: (editor) => editor.chain().focus().redo().run(),
    active: () => false,
    title: "Redo",
  },
  {
    icon: Bold,
    action: (editor) => editor.chain().focus().toggleBold().run(),
    active: (editor) => editor.isActive("bold"),
    title: "Bold",
  },
  {
    icon: Italic,
    action: (editor) => editor.chain().focus().toggleItalic().run(),
    active: (editor) => editor.isActive("italic"),
    title: "Italic",
  },
  {
    icon: Heading2,
    action: (editor) =>
      editor.chain().focus().toggleHeading({ level: 2 }).run(),
    active: (editor) => editor.isActive("heading", { level: 2 }),
    title: "Heading",
  },
  {
    icon: List,
    action: (editor) => editor.chain().focus().toggleBulletList().run(),
    active: (editor) => editor.isActive("bulletList"),
    title: "Bullet List",
  },
  {
    icon: ListOrdered,
    action: (editor) => editor.chain().focus().toggleOrderedList().run(),
    active: (editor) => editor.isActive("orderedList"),
    title: "Numbered List",
  },
  {
    icon: Code2,
    action: (editor) => editor.chain().focus().toggleCodeBlock().run(),
    active: (editor) => editor.isActive("codeBlock"),
    title: "Code Block",
  },
];

const NotesToolbar = ({ editor }) => {
  if (!editor) return null;

  return (
    <div
      className="
        inline-flex
        flex-wrap
        items-center
        gap-2
        rounded-2xl
        border
        border-gray-800
        bg-[#111827]
        p-2
      "
    >
      {toolbarButtons.map((button, index) => {
        const Icon = button.icon;
        const isActive = button.active(editor);

        return (
          <button
            key={index}
            type="button"
            title={button.title}
            onClick={() => button.action(editor)}
            className={`
              flex
              h-10
              w-10
              items-center
              justify-center
              rounded-xl
              transition-all
              duration-200
              ${
                isActive
                  ? "bg-violet-600 text-white"
                  : "text-gray-300 hover:bg-violet-600 hover:text-white"
              }
            `}
          >
            <Icon size={18} />
          </button>
        );
      })}
    </div>
  );
};

export default NotesToolbar;