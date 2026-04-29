import { useState } from "react";
import { X } from "lucide-react";

const AddTaskModal = ({
  addTask,
  closeModal,
}) => {
  const [form, setForm] = useState({
    title: "",
    description: "",
    priority: "Medium",
    category: "DSA",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.title.trim()) return;

    addTask({
      ...form,
      completed: false,
      date: new Date().toLocaleDateString(),
      time: new Date().toLocaleTimeString(),
    });

    closeModal();
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center px-4">

      <div className="w-full max-w-lg bg-[#111827] border border-gray-700 rounded-2xl p-6">

        {/* Header */}
        <div className="flex justify-between items-center mb-6">

          <h2 className="text-2xl font-bold text-white">
            Create New Task
          </h2>

          <button
            onClick={closeModal}
            className="text-gray-400 hover:text-white"
          >
            <X size={22} />
          </button>

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <input
            type="text"
            placeholder="Task title"
            value={form.title}
            onChange={(e) =>
              setForm({
                ...form,
                title: e.target.value,
              })
            }
            className="w-full p-3 rounded-xl bg-[#0b1220] border border-gray-700 outline-none focus:border-purple-500"
          />

          <textarea
            rows="4"
            placeholder="Task description"
            value={form.description}
            onChange={(e) =>
              setForm({
                ...form,
                description: e.target.value,
              })
            }
            className="w-full p-3 rounded-xl bg-[#0b1220] border border-gray-700 outline-none focus:border-purple-500"
          />

          <div className="grid grid-cols-2 gap-4">

            <select
              value={form.priority}
              onChange={(e) =>
                setForm({
                  ...form,
                  priority: e.target.value,
                })
              }
              className="p-3 rounded-xl bg-[#0b1220] border border-gray-700"
            >
              <option>High</option>
              <option>Medium</option>
              <option>Low</option>
            </select>

            <select
              value={form.category}
              onChange={(e) =>
                setForm({
                  ...form,
                  category: e.target.value,
                })
              }
              className="p-3 rounded-xl bg-[#0b1220] border border-gray-700"
            >
              <option>DSA</option>
              <option>React</option>
              <option>DBMS</option>
              <option>Revision</option>
              <option>Interview</option>
            </select>

          </div>

          <button
            type="submit"
            className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 hover:opacity-90 transition font-semibold"
          >
            Create Task
          </button>

        </form>

      </div>

    </div>
  );
};

export default AddTaskModal;