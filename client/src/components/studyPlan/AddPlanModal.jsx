import { useState } from "react";

import {
  X,
  Plus,
} from "lucide-react";

const AddPlanModal = ({
  addPlan,
  closeModal,
}) => {
  const [form, setForm] =
    useState({
      title: "",
      description: "",
      category: "DSA",
      priority: "Medium",
      hours: 1,
    });

  // Handle Change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]:
        e.target.value,
    });
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (
      !form.title.trim() ||
      !form.description.trim()
    ) {
      return;
    }

    addPlan({
      ...form,
      id: Date.now(),
      completed: false,
      hours: Number(form.hours),
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
        p-4
      "
    >

      {/* Modal */}
      <div
        className="
          w-full max-w-2xl
          bg-[#111827]
          border border-gray-700
          rounded-3xl
          p-6 md:p-8
          relative
          overflow-hidden
        "
      >

        {/* Glow */}
        <div
          className="
            absolute
            top-0 right-0
            w-60 h-60
            bg-purple-600/10
            blur-3xl
            rounded-full
          "
        />

        {/* Header */}
        <div className="relative z-10 flex items-start justify-between mb-8">

          <div>

            <h2 className="text-2xl md:text-3xl font-bold text-white">

              Create Study Plan

            </h2>

            <p className="text-gray-400 mt-2">

              Organize your daily
              placement preparation.

            </p>

          </div>

          {/* Close */}
          <button
            onClick={closeModal}
            className="
              p-2 rounded-xl
              bg-[#0b1220]
              border border-gray-700
              text-gray-400
              hover:text-white
              transition
            "
          >

            <X size={20} />

          </button>

        </div>

        {/* Form */}
        <form
          onSubmit={handleSubmit}
          className="relative z-10 space-y-6"
        >

          {/* Title */}
          <div>

            <label className="block text-sm text-gray-400 mb-2">

              Study Topic

            </label>

            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              placeholder="e.g. Graph Algorithms"
              className="
                w-full
                px-4 py-3
                rounded-2xl
                bg-[#0b1220]
                border border-gray-700
                text-white
                outline-none
                focus:border-purple-500
                transition
              "
            />

          </div>

          {/* Description */}
          <div>

            <label className="block text-sm text-gray-400 mb-2">

              Description

            </label>

            <textarea
              rows={4}
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="What will you study today?"
              className="
                w-full
                px-4 py-3
                rounded-2xl
                bg-[#0b1220]
                border border-gray-700
                text-white
                outline-none
                resize-none
                focus:border-purple-500
                transition
              "
            />

          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            {/* Category */}
            <div>

              <label className="block text-sm text-gray-400 mb-2">

                Category

              </label>

              <select
                name="category"
                value={form.category}
                onChange={handleChange}
                className="
                  w-full
                  px-4 py-3
                  rounded-2xl
                  bg-[#0b1220]
                  border border-gray-700
                  text-white
                  outline-none
                  focus:border-purple-500
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

              </select>

            </div>

            {/* Priority */}
            <div>

              <label className="block text-sm text-gray-400 mb-2">

                Priority

              </label>

              <select
                name="priority"
                value={form.priority}
                onChange={handleChange}
                className="
                  w-full
                  px-4 py-3
                  rounded-2xl
                  bg-[#0b1220]
                  border border-gray-700
                  text-white
                  outline-none
                  focus:border-purple-500
                "
              >

                <option>
                  High
                </option>

                <option>
                  Medium
                </option>

                <option>
                  Low
                </option>

              </select>

            </div>

            {/* Hours */}
            <div>

              <label className="block text-sm text-gray-400 mb-2">

                Study Hours

              </label>

              <input
                type="number"
                min="1"
                name="hours"
                value={form.hours}
                onChange={handleChange}
                className="
                  w-full
                  px-4 py-3
                  rounded-2xl
                  bg-[#0b1220]
                  border border-gray-700
                  text-white
                  outline-none
                  focus:border-purple-500
                "
              />

            </div>

          </div>

          {/* Button */}
          <button
            type="submit"
            className="
              w-full
              flex items-center justify-center gap-2
              px-5 py-4
              rounded-2xl
              bg-gradient-to-r
              from-purple-600
              to-indigo-600
              hover:opacity-90
              transition
              font-medium
            "
          >

            <Plus size={18} />

            Add Study Plan

          </button>

        </form>

      </div>

    </div>
  );
};

export default AddPlanModal;