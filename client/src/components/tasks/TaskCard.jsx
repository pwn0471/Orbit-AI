import {
  Calendar,
  Clock3,
  Flag,
  Trash2,
  CheckCircle2,
} from "lucide-react";

const TaskCard = ({
  task,
  toggleComplete,
  deleteTask,
}) => {
  return (
    <div
      className={`
        group p-5 rounded-2xl border transition-all duration-300
        hover:scale-[1.01]
        ${
          task.completed
            ? "bg-green-500/10 border-green-500/30"
            : "bg-[#111827]/80 border-gray-700 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/10"
        }
      `}
    >

      {/* Top */}
      <div className="flex justify-between gap-4">

        <div className="flex-1">

          <h2
            className={`
              text-lg font-semibold transition
              ${
                task.completed
                  ? "line-through text-gray-500"
                  : "text-white"
              }
            `}
          >
            {task.title}
          </h2>

          <p className="text-gray-400 text-sm mt-2 leading-relaxed">
            {task.description}
          </p>

        </div>

        <div className="flex items-start gap-2">

          <button
            onClick={() => toggleComplete(task.id)}
            className={`
              p-2 rounded-lg transition
              ${
                task.completed
                  ? "bg-green-500 text-white"
                  : "bg-[#1f2937] text-gray-400 hover:bg-green-500 hover:text-white"
              }
            `}
          >
            <CheckCircle2 size={18} />
          </button>

          <button
            onClick={() => deleteTask(task.id)}
            className="p-2 rounded-lg bg-[#1f2937] text-red-400 hover:bg-red-500 hover:text-white transition"
          >
            <Trash2 size={18} />
          </button>

        </div>

      </div>

      {/* Bottom */}
      <div className="flex flex-wrap gap-3 mt-5">

        <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#0b1220] border border-gray-700 text-xs text-gray-300">
          <Calendar size={13} />
          {task.date}
        </div>

        <div className="flex items-center gap-1 px-3 py-1 rounded-full bg-[#0b1220] border border-gray-700 text-xs text-gray-300">
          <Clock3 size={13} />
          {task.time}
        </div>

        <div
          className={`
            flex items-center gap-1 px-3 py-1 rounded-full border text-xs
            ${
              task.priority === "High"
                ? "bg-red-500/10 border-red-500/30 text-red-400"
                : task.priority === "Medium"
                ? "bg-yellow-500/10 border-yellow-500/30 text-yellow-400"
                : "bg-green-500/10 border-green-500/30 text-green-400"
            }
          `}
        >
          <Flag size={13} />
          {task.priority}
        </div>

        <div className="px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs">
          {task.category}
        </div>

      </div>

    </div>
  );
};

export default TaskCard;