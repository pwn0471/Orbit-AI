const TaskStats = ({ tasks }) => {
  const completed = tasks.filter((t) => t.completed).length;
  const pending = tasks.length - completed;

  const completionRate =
    tasks.length > 0
      ? Math.round((completed / tasks.length) * 100)
      : 0;

  const stats = [
    {
      title: "Total Tasks",
      value: tasks.length,
      color: "text-purple-400",
    },
    {
      title: "Completed",
      value: completed,
      color: "text-green-400",
    },
    {
      title: "Pending",
      value: pending,
      color: "text-yellow-400",
    },
    {
      title: "Completion",
      value: `${completionRate}%`,
      color: "text-indigo-400",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">

      {stats.map((item, index) => (
        <div
          key={index}
          className="bg-[#111827]/80 border border-gray-700 rounded-2xl p-5 hover:border-purple-500 transition"
        >

          <h3 className="text-sm text-gray-400">
            {item.title}
          </h3>

          <p className={`text-3xl font-bold mt-2 ${item.color}`}>
            {item.value}
          </p>

        </div>
      ))}

    </div>
  );
};

export default TaskStats;