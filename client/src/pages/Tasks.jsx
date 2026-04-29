import { useState, useEffect } from "react";
import { Plus } from "lucide-react";

import DashboardSidebar from "../components/notes/DashboardSidebar";

import TaskCard from "../components/tasks/TaskCard";
import TaskStats from "../components/tasks/TaskStats";
import TaskFilters from "../components/tasks/TaskFilters";
import AddTaskModal from "../components/tasks/AddTaskModal";

const Tasks = () => {
  const [showModal, setShowModal] =
    useState(false);

  const [mobileSidebar, setMobileSidebar] =
    useState(false);

  const [filter, setFilter] =
    useState("All");

  const [search, setSearch] =
    useState("");

  const [tasks, setTasks] = useState(() => {
    const savedTasks =
      localStorage.getItem("tasks");

    return savedTasks
      ? JSON.parse(savedTasks)
      : [
          {
            id: 1,
            title:
              "Solve Binary Search Problems",
            description:
              "Practice at least 5 medium-level binary search questions.",
            completed: false,
            priority: "High",
            category: "DSA",
            date:
              new Date().toLocaleDateString(),
            time:
              new Date().toLocaleTimeString(),
          },
        ];
  });

  // Save Tasks
  useEffect(() => {
    localStorage.setItem(
      "tasks",
      JSON.stringify(tasks)
    );
  }, [tasks]);

  // Add Task
  const addTask = (task) => {
    setTasks((prev) => [
      {
        ...task,
        id: Date.now(),
      },

      ...prev,
    ]);
  };

  // Delete Task
  const deleteTask = (id) => {
    setTasks((prev) =>
      prev.filter(
        (task) => task.id !== id
      )
    );
  };

  // Toggle Complete
  const toggleComplete = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? {
              ...task,
              completed:
                !task.completed,
            }
          : task
      )
    );
  };

  // Filters
  const filteredTasks = tasks.filter(
    (task) => {
      const matchesSearch =
        task.title
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      if (filter === "Completed") {
        return (
          task.completed &&
          matchesSearch
        );
      }

      if (filter === "Pending") {
        return (
          !task.completed &&
          matchesSearch
        );
      }

      if (filter === "High") {
        return (
          task.priority ===
            "High" && matchesSearch
        );
      }

      return matchesSearch;
    }
  );

  return (
    <div className="flex bg-[#0b1220] min-h-screen text-white">

      {/* Dashboard Sidebar */}
      <DashboardSidebar
        activePage="Tasks"
        mobileSidebar={mobileSidebar}
        setMobileSidebar={
          setMobileSidebar
        }
      />

      {/* Main */}
      <main className="flex-1 md:ml-64 pt-36 md:pt-20 px-4 md:px-6 pb-10">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-8">

          <div>

            <h1 className="text-3xl md:text-4xl font-bold">
              Tasks Workspace
            </h1>

            <p className="text-gray-400 mt-2">
              Organize your placement
              preparation efficiently.
            </p>

          </div>

          {/* Add Button */}
          <button
            onClick={() =>
              setShowModal(true)
            }
            className="
              flex items-center justify-center gap-2
              px-5 py-3
              rounded-xl
              bg-gradient-to-r
              from-purple-600
              to-indigo-600
              hover:opacity-90
              transition
              font-medium
            "
          >

            <Plus size={18} />

            Add Task

          </button>

        </div>

        {/* Stats */}
        <TaskStats tasks={tasks} />

        {/* Filters */}
        <TaskFilters
          filter={filter}
          setFilter={setFilter}
          search={search}
          setSearch={setSearch}
        />

        {/* Tasks Grid */}
        <div
          className="
            grid
            grid-cols-1
            xl:grid-cols-2
            gap-5
          "
        >

          {filteredTasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              toggleComplete={
                toggleComplete
              }
              deleteTask={deleteTask}
            />
          ))}

        </div>

        {/* Empty State */}
        {filteredTasks.length === 0 && (
          <div className="text-center py-20 text-gray-500">

            No tasks found.

          </div>
        )}

      </main>

      {/* Modal */}
      {showModal && (
        <AddTaskModal
          addTask={addTask}
          closeModal={() =>
            setShowModal(false)
          }
        />
      )}

    </div>
  );
};

export default Tasks;