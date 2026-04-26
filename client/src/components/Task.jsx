import { FaCheckCircle } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";

const Task = ({ text, done }) => {
  return (
    <div
      className={`flex items-center gap-3 p-3 rounded-lg transition-all duration-300 hover:scale-[1.02] ${
        done
          ? "bg-green-900/30 border border-green-500/20"
          : "bg-[#0b1220] border border-gray-700"
      }`}
    >
      {done ? (
        <FaCheckCircle className="text-green-400" />
      ) : (
        <FiArrowRight className="text-gray-400" />
      )}

      <span className={done ? "text-green-400 text-sm" : "text-gray-300 text-sm"}>
        {text}
      </span>
    </div>
  );
};

export default Task;