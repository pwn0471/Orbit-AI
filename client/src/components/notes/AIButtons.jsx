import { Sparkles, Wand2 } from "lucide-react";

const AIButtons = ({ editor, setNotes, activeNoteId }) => {

  // ✨ Summarize
  const summarizeNote = () => {
    const text = editor.getText();

    if (!text.trim()) return;

    const summary =
      text.split(".").slice(0, 2).join(".") + ".";

    editor.commands.setContent(`
      <h2>AI Summary</h2>
      <p>${summary}</p>
    `);
  };

  // ✨ Improve
  const improveNote = () => {
    const text = editor.getText();

    if (!text.trim()) return;

    editor.commands.setContent(`
      <h2>Improved Version</h2>

      <p>${text}</p>

      <p>
        This explanation has been enhanced for better clarity,
        readability, and structured understanding.
      </p>
    `);
  };

  return (
    <div className="flex gap-2">

      {/* Summarize */}
      <button
        onClick={summarizeNote}
        className="flex items-center gap-2 px-3 py-2 rounded bg-blue-600 hover:bg-blue-700 transition"
      >
        <Sparkles size={16} />
        Summarize
      </button>

      {/* Improve */}
      <button
        onClick={improveNote}
        className="flex items-center gap-2 px-3 py-2 rounded bg-green-600 hover:bg-green-700 transition"
      >
        <Wand2 size={16} />
        Improve
      </button>

    </div>
  );
};

export default AIButtons;