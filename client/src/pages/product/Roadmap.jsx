import {
  CheckCircle2,
  Circle,
  Rocket,
  Brain,
  Video,
  BarChart3,
  Users,
  Sparkles,
} from "lucide-react";

import { motion } from "framer-motion";

const roadmap = [
  {
    phase: "Phase 1",
    title: "Core Productivity System",
    status: "completed",
    items: [
      "Authentication System",
      "Task Management",
      "AI Notes",
      "Dashboard Analytics",
    ],
    icon: Rocket,
  },
  {
    phase: "Phase 2",
    title: "AI Learning Features",
    status: "in-progress",
    items: [
      "AI Mentor Assistant",
      "Study Planner",
      "AI Suggestions",
      "Smart Recommendations",
    ],
    icon: Brain,
  },
  {
    phase: "Phase 3",
    title: "Advanced Preparation",
    status: "upcoming",
    items: [
      "Mock Interviews",
      "DSA Tracking",
      "Leaderboard System",
      "Interview Analytics",
    ],
    icon: Video,
  },
  {
    phase: "Phase 4",
    title: "Community & Collaboration",
    status: "upcoming",
    items: [
      "Study Groups",
      "Real-time Collaboration",
      "Developer Community",
      "Shared Notes",
    ],
    icon: Users,
  },
];

export default function Roadmap() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] dark:bg-slate-950">

      {/* HERO */}

      <section className="relative overflow-hidden border-b border-slate-200 dark:border-white/10">

        <div className="absolute inset-0 bg-gradient-to-br from-green-100/40 via-transparent to-emerald-100/30 dark:from-green-500/10 dark:to-emerald-500/10" />

        <div className="max-w-7xl mx-auto px-6 py-28 relative z-10 text-center">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
          >

            <div className="inline-flex items-center gap-2 bg-green-100 dark:bg-green-500/10 text-green-700 dark:text-green-400 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <Sparkles size={16} />
              Product Roadmap
            </div>

            <h1 className="text-5xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
              Building The Future Of
              <span className="text-green-600 dark:text-green-400">
                {" "}
                Placement Preparation
              </span>
            </h1>

            <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Explore upcoming features, AI systems, and long-term vision
              for the AI-Powered Placement Preparation Workspace.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ROADMAP */}

      <section className="max-w-6xl mx-auto px-6 py-24">

        <div className="space-y-10">

          {roadmap.map((item, index) => {

            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-[32px] p-10 shadow-sm hover:shadow-2xl transition-all"
              >

                <div className="flex flex-col lg:flex-row lg:items-start gap-8">

                  {/* LEFT */}

                  <div className="w-20 h-20 rounded-3xl bg-green-100 dark:bg-green-500/10 flex items-center justify-center">

                    <Icon
                      size={36}
                      className="text-green-600 dark:text-green-400"
                    />
                  </div>

                  {/* RIGHT */}

                  <div className="flex-1">

                    <div className="flex flex-wrap items-center gap-4 mb-5">

                      <span className="bg-green-100 dark:bg-green-500/10 text-green-700 dark:text-green-400 px-4 py-2 rounded-full text-sm font-semibold">
                        {item.phase}
                      </span>

                      <span
                        className={`px-4 py-2 rounded-full text-sm font-semibold ${
                          item.status === "completed"
                            ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400"
                            : item.status === "in-progress"
                            ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-500/10 dark:text-yellow-400"
                            : "bg-slate-200 text-slate-700 dark:bg-white/10 dark:text-slate-300"
                        }`}
                      >
                        {item.status}
                      </span>
                    </div>

                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                      {item.title}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">

                      {item.items.map((feature, i) => (

                        <div
                          key={i}
                          className="flex items-center gap-3 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-4"
                        >

                          {item.status === "completed" ? (
                            <CheckCircle2 className="text-green-600 dark:text-green-400" />
                          ) : (
                            <Circle className="text-slate-400" />
                          )}

                          <span className="text-slate-700 dark:text-slate-300 font-medium">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA */}

      <section className="px-6 pb-28">

        <div className="max-w-5xl mx-auto rounded-[40px] bg-gradient-to-r from-green-600 to-emerald-700 p-12 md:p-20 text-center text-white">

          <BarChart3 size={60} className="mx-auto mb-8" />

          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            More Features Coming Soon
          </h2>

          <p className="mt-6 text-lg text-green-50 max-w-2xl mx-auto">
            We are continuously building intelligent systems to improve
            placement preparation and developer productivity.
          </p>

          <button className="mt-10 bg-white text-green-700 hover:bg-slate-100 px-8 py-4 rounded-2xl font-semibold transition-all">
            Follow Progress
          </button>
        </div>
      </section>
    </div>
  );
}