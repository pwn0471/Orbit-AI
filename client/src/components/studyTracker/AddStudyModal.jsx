import { useState } from "react";

import { X } from "lucide-react";

const AddStudyModal = ({
  addSubject,
  closeModal,
}) => {
  const [form, setForm] = useState({
    name: "",
    category: "DSA",
    total: "",
    hours: "",
    level: "Medium",
  });

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      !form.name.trim() ||
      !form.total ||
      !form.hours
    )
      return;

    addSubject({
      ...form,
      id: Date.now(),
      total: Number(form.total),
      hours: Number(form.hours),
      progress: 0,
      completed: 0,
      streak: 1,
    });

    closeModal();
  };

  return (
    <div
      className="
        fixed inset-0 z-50
        bg-black/70
        backdrop-blur-sm
        flex items-center justify-center
        px-4
      "
    >

      {/* Modal */}
      <div
        className="
          w-full max-w-lg
          bg-[#111827]
          border border-gray-700
          rounded-3xl
          p-6
          animate-in fade-in zoom-in
        "
      >

        {/* Header */}
        <div className="flex items-center justify-between mb-6">

          <div>

            <h2 className="text-2xl font-bold text-white">
              Add Study Subject
            </h2>

            <p className="text-sm text-gray-400 mt-1">
              Track your placement preparation
            </p>

          </div>

          {/* Close */}
          <button
            onClick={closeModal}
            className="
              p-2 rounded-lg
              bg-[#0b1220]
              border border-gray-700
              text-gray-400
              hover:text-white
              transition
            "
          >
            <X size={18} />
          </button>

        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          {/* Subject Name */}
          <div>

            <label className="text-sm text-gray-300 mb-2 block">
              Subject Name
            </label>

            <input
              type="text"
              placeholder="Enter subject name"
              value={form.name}
              onChange={(e) =>
                setForm({
                  ...form,
                  name: e.target.value,
                })
              }
              className="
                w-full
                bg-[#0b1220]
                border border-gray-700
                rounded-xl
                px-4 py-3
                outline-none
                focus:border-purple-500
                transition
              "
            />

          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            {/* Category */}
            <div>

              <label className="text-sm text-gray-300 mb-2 block">
                Category
              </label>

              <select
                value={form.category}
                onChange={(e) =>
                  setForm({
                    ...form,
                    category:
                      e.target.value,
                  })
                }
                className="
                  w-full
                  bg-[#0b1220]
                  border border-gray-700
                  rounded-xl
                  px-4 py-3
                  outline-none
                  focus:border-purple-500
                  transition
                "
              >

                <option>
                  DSA
                </option>

                <option>
                  DBMS
                </option>

                <option>
                  OS
                </option>

                <option>
                  CN
                </option>

                <option>
                  React
                </option>

                <option>
                  Aptitude
                </option>

              </select>

            </div>

            {/* Difficulty */}
            <div>

              <label className="text-sm text-gray-300 mb-2 block">
                Difficulty
              </label>

              <select
                value={form.level}
                onChange={(e) =>
                  setForm({
                    ...form,
                    level:
                      e.target.value,
                  })
                }
                className="
                  w-full
                  bg-[#0b1220]
                  border border-gray-700
                  rounded-xl
                  px-4 py-3
                  outline-none
                  focus:border-purple-500
                  transition
                "
              >

                <option>
                  Easy
                </option>

                <option>
                  Medium
                </option>

                <option>
                  Hard
                </option>

              </select>

            </div>

          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            {/* Topics */}
            <div>

              <label className="text-sm text-gray-300 mb-2 block">
                Total Topics
              </label>

              <input
                type="number"
                placeholder="Ex: 20"
                value={form.total}
                onChange={(e) =>
                  setForm({
                    ...form,
                    total:
                      e.target.value,
                  })
                }
                className="
                  w-full
                  bg-[#0b1220]
                  border border-gray-700
                  rounded-xl
                  px-4 py-3
                  outline-none
                  focus:border-purple-500
                  transition
                "
              />

            </div>

            {/* Hours */}
            <div>

              <label className="text-sm text-gray-300 mb-2 block">
                Study Hours
              </label>

              <input
                type="number"
                placeholder="Ex: 12"
                value={form.hours}
                onChange={(e) =>
                  setForm({
                    ...form,
                    hours:
                      e.target.value,
                  })
                }
                className="
                  w-full
                  bg-[#0b1220]
                  border border-gray-700
                  rounded-xl
                  px-4 py-3
                  outline-none
                  focus:border-purple-500
                  transition
                "
              />

            </div>

          </div>

          {/* Button */}
          <button
            type="submit"
            className="
              w-full
              py-3
              rounded-xl
              bg-gradient-to-r
              from-purple-600
              to-indigo-600
              hover:opacity-90
              transition
              text-white
              font-medium
            "
          >

            Add Subject

          </button>

        </form>

      </div>

    </div>
  );
};

export default AddStudyModal;