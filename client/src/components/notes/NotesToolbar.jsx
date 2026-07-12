import {
  Undo2,
  Redo2,
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Heading2,
  List,
  ListOrdered,
  Quote,
  Minus,
  Code2,
} from "lucide-react";

const toolbarGroups = [
  [
    {
      icon: Undo2,
      title: "Undo",
      action: (editor) => editor.chain().focus().undo().run(),
      active: () => false,
    },
    {
      icon: Redo2,
      title: "Redo",
      action: (editor) => editor.chain().focus().redo().run(),
      active: () => false,
    },
  ],

  [
    {
      icon: Bold,
      title: "Bold",
      action: (editor) => editor.chain().focus().toggleBold().run(),
      active: (editor) => editor.isActive("bold"),
    },
    {
      icon: Italic,
      title: "Italic",
      action: (editor) => editor.chain().focus().toggleItalic().run(),
      active: (editor) => editor.isActive("italic"),
    },
    {
      icon: Underline,
      title: "Underline",
      action: (editor) =>
        editor.chain().focus().toggleUnderline().run(),
      active: (editor) => editor.isActive("underline"),
    },
    {
      icon: Strikethrough,
      title: "Strike",
      action: (editor) => editor.chain().focus().toggleStrike().run(),
      active: (editor) => editor.isActive("strike"),
    },
  ],

  [
    {
      icon: Heading2,
      title: "Heading",
      action: (editor) =>
        editor.chain().focus().toggleHeading({ level: 2 }).run(),
      active: (editor) =>
        editor.isActive("heading", { level: 2 }),
    },
  ],

  [
    {
      icon: List,
      title: "Bullet List",
      action: (editor) =>
        editor.chain().focus().toggleBulletList().run(),
      active: (editor) => editor.isActive("bulletList"),
    },
    {
      icon: ListOrdered,
      title: "Numbered List",
      action: (editor) =>
        editor.chain().focus().toggleOrderedList().run(),
      active: (editor) => editor.isActive("orderedList"),
    },
  ],

  [
    {
      icon: Quote,
      title: "Quote",
      action: (editor) =>
        editor.chain().focus().toggleBlockquote().run(),
      active: (editor) => editor.isActive("blockquote"),
    },
    {
      icon: Code2,
      title: "Code Block",
      action: (editor) =>
        editor.chain().focus().toggleCodeBlock().run(),
      active: (editor) => editor.isActive("codeBlock"),
    },
    {
      icon: Minus,
      title: "Divider",
      action: (editor) =>
        editor.chain().focus().setHorizontalRule().run(),
      active: () => false,
    },
  ],
];

const NotesToolbar = ({ editor }) => {
  if (!editor) return null;

  return (
    <div className="flex justify-center overflow-x-auto scrollbar-hide  py-1">
      <div
        className="
          inline-flex
          min-w-max
          flex-nowrap
          items-center
          gap-0.5
          rounded-md md:rounded-lg
          border
          border-gray-700
          bg-[#111827]
          px-1 md:px:1.5
          py-1 md:py-1.5
          shadow-lg
        "
      >
        {toolbarGroups.map((group, groupIndex) => (
          <div
            key={groupIndex}
            className="flex items-center"
          >
            {group.map((button, index) => {
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
                    h-6 md:h-7
                    w-6 md:w-7
                    items-center
                    justify-center
                    rounded-lg
                    transition-all
                    duration-200
                    ${
                      isActive
                        ? "bg-violet-600 text-white shadow-sm"
                        : "text-gray-300 hover:bg-violet-600/20 hover:text-violet-300"
                    }
                  `}
                >
                  <Icon size={12} />
                </button>
              );
            })}

            {groupIndex !== toolbarGroups.length - 1 && (
              <div className="mx-0.5 md:mx-1  h-4 md:h-5 w-px bg-gray-700" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotesToolbar;