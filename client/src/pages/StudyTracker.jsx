import { useEffect, useState } from "react";

import { Plus } from "lucide-react";

import DashboardSidebar from "../components/notes/DashboardSidebar";

import StudySidebar from "../components/studyTracker/StudySidebar";
import StudyStats from "../components/studyTracker/StudyStats";
import SubjectCard from "../components/studyTracker/SubjectCard";
import DailyLogCard from "../components/studyTracker/DailyLogCard";
import AddStudyModal from "../components/studyTracker/AddStudyModal";
import ProgressChart from "../components/studyTracker/ProgressChart";

const StudyTracker = () => {
  // Mobile Sidebar
  const [mobileSidebar, setMobileSidebar] =
    useState(false);

  // Modal
  const [showModal, setShowModal] =
    useState(false);

  // Search
  const [search, setSearch] = useState("");

  // Subjects
  const [subjects, setSubjects] = useState(
    () => {
      const savedSubjects =
        localStorage.getItem(
          "study-subjects"
        );

      return savedSubjects
        ? JSON.parse(savedSubjects)
        : [
            {
              id: 1,
              name: "Data Structures",
              category: "DSA",
              progress: 65,
              completed: 13,
              total: 20,
              hours: 42,
              streak: 8,
              level: "Medium",
            },
            {
              id: 2,
              name: "DBMS",
              category: "Database",
              progress: 45,
              completed: 9,
              total: 20,
              hours: 21,
              streak: 5,
              level: "Easy",
            },
            {
              id: 3,
              name: "Operating System",
              category: "OS",
              progress: 30,
              completed: 6,
              total: 20,
              hours: 15,
              streak: 3,
              level: "Hard",
            },
          ];
    }
  );

  // Active Subject
  const [activeSubject, setActiveSubject] =
    useState(subjects[0]);

  // Logs
  const [logs, setLogs] = useState(() => {
    const savedLogs =
      localStorage.getItem("study-logs");

    return savedLogs
      ? JSON.parse(savedLogs)
      : [
          {
            id: 1,
            title:
              "Completed Binary Search Problems",
            subject: "DSA",
            time: "2h ago",
            type: "Practice",
          },
          {
            id: 2,
            title:
              "Revised DBMS Normalization",
            subject: "DBMS",
            time: "5h ago",
            type: "Revision",
          },
        ];
  });

  // Weekly Progress
  const weeklyProgress = [
    { day: "Mon", hours: 2 },
    { day: "Tue", hours: 4 },
    { day: "Wed", hours: 3 },
    { day: "Thu", hours: 5 },
    { day: "Fri", hours: 6 },
    { day: "Sat", hours: 4 },
    { day: "Sun", hours: 7 },
  ];

  // Save LocalStorage
  useEffect(() => {
    localStorage.setItem(
      "study-subjects",
      JSON.stringify(subjects)
    );
  }, [subjects]);

  useEffect(() => {
    localStorage.setItem(
      "study-logs",
      JSON.stringify(logs)
    );
  }, [logs]);

  // Add Subject
  const addSubject = (subject) => {
  setSubjects((prev) => [
    {
      ...subject,

      // Ensure numbers
      total: Number(subject.total),
      hours: Number(subject.hours),

      progress: 0,
      completed: 0,
      streak: 1,
    },

    ...prev,
  ]);

  // Optional:
  setActiveSubject(subject);
  };
  // Update Progress
  const updateProgress = (id) => {
    setSubjects((prev) =>
      prev.map((subject) => {
        if (subject.id === id) {
          const updatedCompleted =
            subject.completed + 1;

          const updatedProgress =
            Math.min(
              Math.round(
                (updatedCompleted /
                  subject.total) *
                  100
              ),
              100
            );

          // Add Log
          setLogs((prevLogs) => [
            {
              id: Date.now(),
              title: `Completed topic in ${subject.name}`,
              subject: subject.category,
              time: "Just now",
              type: "Study",
            },
            ...prevLogs,
          ]);

          return {
            ...subject,
            completed:
              updatedCompleted >
              subject.total
                ? subject.total
                : updatedCompleted,
            progress: updatedProgress,
            streak: subject.streak + 1,
          };
        }

        return subject;
      })
    );
  };

  // Total Hours
  const totalHours = subjects.reduce(
    (acc, curr) =>
      acc + Number(curr.hours),
    0
  );

  return (
    <div className="flex min-h-screen bg-[#0b1220] text-white">

      {/* Dashboard Sidebar */}
      <DashboardSidebar
        activePage="Study Tracker"
        mobileSidebar={mobileSidebar}
        setMobileSidebar={setMobileSidebar}
      />

      {/* Desktop Sidebar */}
      <StudySidebar
        subjects={subjects}
        activeSubject={activeSubject}
        setActiveSubject={setActiveSubject}
        search={search}
        setSearch={setSearch}
      />

      {/* Mobile Sidebar */}
      {mobileSidebar && (
        <div className="fixed inset-0 z-50 bg-black/70 md:hidden">

          <div className="w-72 h-full bg-[#111827] border-r border-gray-700 p-4 overflow-y-auto">

            {/* Header */}
            <div className="flex items-start justify-between mb-6">

  <div>

    <h2 className="text-2xl font-bold">
      Prep Tracker
    </h2>

    <p className="text-sm text-gray-400 mt-1">
      Track your placement prep
    </p>

  </div>

  {/* Close Button */}
  <button
    onClick={() =>
      setMobileSidebar(false)
    }
    className="
      p-2 rounded-lg
      bg-[#0b1220]
      border border-gray-700
      text-gray-400
      hover:text-white
      transition
    "
  >

    ✕

  </button>

</div>

            {/* Search */}
            <input
              type="text"
              placeholder="Search subject..."
              value={search}
              onChange={(e) =>
                setSearch(e.target.value)
              }
              className="
                w-full
                mb-5
                px-4 py-3
                rounded-xl
                bg-[#0b1220]
                border border-gray-700
                outline-none
                focus:border-purple-500
              "
            />

            {/* Subjects */}
            <div className="space-y-3">

              {subjects
                .filter((subject) =>
                  subject.name
                    .toLowerCase()
                    .includes(
                      search.toLowerCase()
                    )
                )
                .map((subject) => (
                  <button
                    key={subject.id}
                    onClick={() => {
                      setActiveSubject(
                        subject
                      );

                      setMobileSidebar(
                        false
                      );
                    }}
                    className={`
                      w-full
                      p-4
                      rounded-2xl
                      border
                      text-left
                      transition
                      ${
                        activeSubject?.id ===
                        subject.id
                          ? "bg-purple-600/20 border-purple-500"
                          : "bg-[#0b1220] border-gray-700"
                      }
                    `}
                  >

                    <div className="flex items-center justify-between">

                      <h3 className="font-semibold">
                        {subject.name}
                      </h3>

                      <span className="text-xs text-purple-300">
                        {
                          subject.progress
                        }
                        %
                      </span>

                    </div>

                  </button>
                ))}

            </div>

          </div>

        </div>
      )}

      {/* Main */}
      <main className="flex-1 md:ml-0 pt-36 md:pt-20 p-4 md:p-6">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-5 mb-8">

          <div>

            <h1 className="text-3xl md:text-4xl font-bold">
              Prep Tracker
            </h1>

            <p className="text-gray-400 mt-2">
              Track your placement
              preparation progress efficiently.
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

            Add Subject

          </button>

        </div>

        {/* Stats */}
        <StudyStats
          subjects={subjects}
          totalHours={totalHours}
        />

        {/* Subject Cards */}
        <div
          className="
            grid
            grid-cols-1
            xl:grid-cols-2
            gap-5
            mb-6
          "
        >

          {subjects
            .filter((subject) =>
              subject.name
                .toLowerCase()
                .includes(
                  search.toLowerCase()
                )
            )
            .map((subject) => (
              <SubjectCard
                key={subject.id}
                subject={subject}
                updateProgress={
                  updateProgress
                }
              />
            ))}

        </div>

        {/* Bottom Section */}
        <div
          className="
            grid
            grid-cols-1
            xl:grid-cols-2
            gap-6
          "
        >

          {/* Logs */}
          <DailyLogCard logs={logs} />

          {/* Chart */}
          <ProgressChart
            weeklyProgress={
              weeklyProgress
            }
          />

        </div>

      </main>

      {/* Modal */}
      {showModal && (
        <AddStudyModal
          addSubject={addSubject}
          closeModal={() =>
            setShowModal(false)
          }
        />
      )}

    </div>
  );
};

export default StudyTracker;