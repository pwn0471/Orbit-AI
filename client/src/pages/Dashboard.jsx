import Card from "../components/Card";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#0b1220] text-white">
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-8 space-y-8">
        {/* Header */}
        <div>
          <h1 className="text-2xl md:text-3xl font-bold">Dashboard</h1>
          <p className="text-gray-400 text-sm mt-1">
            Progress at a glance
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5">
          <Card
            title="Problems Solved"
            value="148"
            sub="+12 this week"
            color="purple"
          />

          <Card
            title="Current Streak"
            value="14d"
            sub="Best: 21 days"
            color="yellow"
          />

          <Card
            title="Tasks Done Today"
            value="5/7"
            sub="71% completion"
            color="green"
          />

          <Card
            title="Weak Topics"
            value="3"
            sub="DP · Trees · BFS"
            color="red"
          />
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
          {/* Today's AI Plan */}
          <div className="bg-[#111827]/80 backdrop-blur-lg border border-gray-700 rounded-xl p-5 shadow-lg hover:shadow-purple-500/10 transition-all">
            <div className="flex items-center justify-between mb-5">
              <h2 className="text-lg font-semibold">
                Today's AI Plan
              </h2>

              <span className="bg-gradient-to-r from-purple-500 to-indigo-500 px-3 py-1 rounded-lg text-xs md:text-sm">
                AI Generated
              </span>
            </div>

            <div className="space-y-3">
              {[
                {
                  text: "Revise Sliding Window (45 min)",
                  done: true,
                },
                {
                  text: "Solve 2 medium graph problems",
                  done: true,
                },
                {
                  text: "Read Tree traversal notes",
                  done: false,
                },
                {
                  text: "DP: Coin Change + LCS",
                  done: false,
                },
                {
                  text: "Mock: 1-hour timed session",
                  done: false,
                },
              ].map((task, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-3 p-3 rounded-xl border ${
                    task.done
                      ? "bg-green-500/10 border-green-500/20"
                      : "bg-[#0b1220] border-gray-700"
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded-full border-2 ${
                      task.done
                        ? "bg-green-500 border-green-500"
                        : "border-gray-500"
                    }`}
                  />

                  <p
                    className={`text-sm ${
                      task.done
                        ? "line-through text-gray-500"
                        : "text-gray-300"
                    }`}
                  >
                    {task.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Weekly Progress */}
          <div className="bg-[#111827]/80 backdrop-blur-lg border border-gray-700 rounded-xl p-5 shadow-lg hover:shadow-purple-500/10 transition-all">
            <h2 className="text-lg font-semibold mb-6">
              Weekly Progress
            </h2>

            <div className="flex items-end justify-between h-44">
              {[4, 6, 3, 8, 5, 7, 2].map((value, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center group"
                >
                  <div
                    className={`w-8 rounded transition-all duration-300 group-hover:scale-110 ${
                      index === 3
                        ? "bg-gradient-to-t from-purple-500 to-indigo-500"
                        : "bg-green-500"
                    }`}
                    style={{
                      height: `${value * 10}px`,
                    }}
                  />

                  <span className="text-xs mt-2 text-gray-400">
                    {["M", "T", "W", "T", "F", "S", "S"][index]}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;