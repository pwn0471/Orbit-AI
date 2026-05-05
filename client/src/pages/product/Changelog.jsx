import {
  Sparkles,
  Rocket,
  Brain,
  CheckCircle2,
} from "lucide-react";

import { motion } from "framer-motion";

const updates = [
  {
    version: "v1.0.0",
    date: "May 2026",
    title: "Initial Platform Launch",
    features: [
      "Authentication System",
      "Dashboard UI",
      "Task Management",
      "Responsive Design",
    ],
  },
  {
    version: "v1.1.0",
    date: "June 2026",
    title: "AI Notes System",
    features: [
      "AI Summarization",
      "Smart Notes",
      "Improved Editor",
      "AI Explanations",
    ],
  },
  {
    version: "v1.2.0",
    date: "July 2026",
    title: "Study Planner Release",
    features: [
      "AI Study Planner",
      "Roadmap Generator",
      "Weakness Analysis",
      "Daily Recommendations",
    ],
  },
];

export default function Changelog() {
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

              Product Updates
            </div>

            <h1 className="text-5xl md:text-5xl font-bold text-slate-900 dark:text-white leading-tight">
              Track Every
              <span className="text-green-600 dark:text-green-400">
                {" "}
                Platform Improvement
              </span>
            </h1>

            <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              Explore product updates, AI enhancements, new features,
              and improvements shipped to the platform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* TIMELINE */}

      <section className="max-w-5xl mx-auto px-6 py-24">

        <div className="relative border-l border-slate-300 dark:border-white/10 ml-4 space-y-16">

          {updates.map((update, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-12"
            >

              {/* DOT */}

              <div className="absolute -left-[18px] top-2 w-9 h-9 rounded-full bg-green-600 flex items-center justify-center shadow-lg">

                <Rocket size={18} className="text-white" />
              </div>

              {/* CARD */}

              <div className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-[32px] p-10 shadow-sm hover:shadow-2xl transition-all">

                <div className="flex flex-wrap items-center gap-4 mb-6">

                  <span className="bg-green-100 dark:bg-green-500/10 text-green-700 dark:text-green-400 px-4 py-2 rounded-full text-sm font-semibold">
                    {update.version}
                  </span>

                  <span className="text-slate-500 dark:text-slate-400">
                    {update.date}
                  </span>
                </div>

                <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                  {update.title}
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">

                  {update.features.map((feature, i) => (

                    <div
                      key={i}
                      className="flex items-center gap-3 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-4"
                    >

                      <CheckCircle2 className="text-green-600 dark:text-green-400" />

                      <span className="text-slate-700 dark:text-slate-300 font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}

      <section className="px-6 pb-28">

        <div className="max-w-5xl mx-auto rounded-[40px] border border-green-500/20 bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-xl p-12 md:p-20 text-center">

          <Brain size={60} className="mx-auto mb-8 text-green-500" />

          <h2 className="text-4xl md:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
            Constantly Improving With AI
          </h2>

          <p className="mt-6 text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            New intelligent features, workflows, and productivity systems
            are continuously being added to the platform.
          </p>

          <button className="mt-10 bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all">
            View Latest Updates
          </button>
        </div>
      </section>
    </div>
  );
}