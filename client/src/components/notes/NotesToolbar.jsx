import {
  Bold,
  Italic,
  List,
  Heading2,
  Code2,
} from "lucide-react";

const NotesToolbar = ({ editor }) => {
  return (
    <div className="flex gap-2 flex-wrap">

      {/* Bold */}
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={`p-2 rounded ${
          editor.isActive("bold")
            ? "bg-purple-600"
            : "bg-[#1e293b]"
        }`}
      >
        <Bold size={18} />
      </button>

      {/* Italic */}
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={`p-2 rounded ${
          editor.isActive("italic")
            ? "bg-purple-600"
            : "bg-[#1e293b]"
        }`}
      >
        <Italic size={18} />
      </button>

      {/* Heading */}
      <button
        onClick={() =>
          editor.chain().focus().toggleHeading({ level: 2 }).run()
        }
        className={`p-2 rounded ${
          editor.isActive("heading", { level: 2 })
            ? "bg-purple-600"
            : "bg-[#1e293b]"
        }`}
      >
        <Heading2 size={18} />
      </button>

      {/* Bullet List */}
      <button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        className={`p-2 rounded ${
          editor.isActive("bulletList")
            ? "bg-purple-600"
            : "bg-[#1e293b]"
        }`}
      >
        <List size={18} />
      </button>

      {/* Code Block */}
      <button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        className={`p-2 rounded ${
          editor.isActive("codeBlock")
            ? "bg-purple-600"
            : "bg-[#1e293b]"
        }`}
      >
        <Code2 size={18} />
      </button>

    </div>
  );
};

export default NotesToolbar;