import { useEffect, useState } from "react";

import { Plus } from "lucide-react";

import DashboardSidebar from "../components/notes/DashboardSidebar";

import PlanStats from "../components/studyPlan/PlanStats";
import PlanCard from "../components/studyPlan/PlanCard";
import DailyFocusCard from "../components/studyPlan/DailyFocusCard";
import AddPlanModal from "../components/studyPlan/AddPlanModal";

const StudyPlan = () => {
  // Mobile Sidebar
  const [mobileSidebar, setMobileSidebar] =
    useState(false);

  // Modal
  const [showModal, setShowModal] =
    useState(false);

  // Plans
  const [plans, setPlans] = useState(
    () => {
      const savedPlans =
        localStorage.getItem(
          "study-plans"
        );

      return savedPlans
        ? JSON.parse(savedPlans)
        : [
            {
              id: 1,
              title:
                "Arrays & Sliding Window",
              description:
                "Revise sliding window concepts and solve 5 medium-level problems.",
              category: "DSA",
              priority: "High",
              hours: 2,
              completed: false,
            },

            {
              id: 2,
              title:
                "DBMS Normalization",
              description:
                "Study 1NF, 2NF, 3NF with examples and practice SQL normalization questions.",
              category: "DBMS",
              priority: "Medium",
              hours: 1,
              completed: true,
            },

            {
              id: 3,
              title:
                "OS CPU Scheduling",
              description:
                "Revise FCFS, SJF, Round Robin scheduling algorithms.",
              category: "OS",
              priority: "Low",
              hours: 1,
              completed: false,
            },
          ];
    }
  );

  // Save LocalStorage
  useEffect(() => {
    localStorage.setItem(
      "study-plans",
      JSON.stringify(plans)
    );
  }, [plans]);

  // Add Plan
  const addPlan = (plan) => {
    setPlans((prev) => [
      plan,
      ...prev,
    ]);
  };

  // Delete Plan
  const deletePlan = (id) => {
    setPlans((prev) =>
      prev.filter(
        (plan) => plan.id !== id
      )
    );
  };

  // Toggle Complete
  const toggleComplete = (id) => {
    setPlans((prev) =>
      prev.map((plan) =>
        plan.id === id
          ? {
              ...plan,
              completed:
                !plan.completed,
            }
          : plan
      )
    );
  };

  // Completed Count
  const completedPlans =
    plans.filter(
      (plan) => plan.completed
    ).length;

  return (
    <div className="flex min-h-screen bg-[#0b1220] text-white">

      {/* Sidebar */}
      <DashboardSidebar
        activePage="Study Plan"
        mobileSidebar={mobileSidebar}
        setMobileSidebar={setMobileSidebar}
      />

      {/* Main */}
      <main className="flex-1 md:ml-64 pt-36 md:pt-20 px-4 md:px-6 pb-10">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-8">

          <div>

            <h1 className="text-3xl md:text-4xl font-bold">

              Study Planner

            </h1>

            <p className="text-gray-400 mt-2">

              Organize your placement preparation roadmap efficiently.

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

            Add Plan

          </button>

        </div>

        {/* Focus Card */}
        <DailyFocusCard
          completedPlans={
            completedPlans
          }
          totalPlans={plans.length}
        />

        {/* Stats */}
        <PlanStats plans={plans} />

        {/* Plans Grid */}
        <div
          className="
            grid
            grid-cols-1
            xl:grid-cols-2
            gap-5
          "
        >

          {plans.map((plan) => (
            <PlanCard
              key={plan.id}
              plan={plan}
              toggleComplete={
                toggleComplete
              }
              deletePlan={
                deletePlan
              }
            />
          ))}

        </div>

        {/* Empty */}
        {plans.length === 0 && (
          <div className="text-center py-20 text-gray-500">

            No study plans available.

          </div>
        )}

      </main>

      {/* Modal */}
      {showModal && (
        <AddPlanModal
          addPlan={addPlan}
          closeModal={() =>
            setShowModal(false)
          }
        />
      )}

    </div>
  );
};

export default StudyPlan;