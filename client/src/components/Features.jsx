
import React from "react";
import {
  LayoutDashboard,
  Code2,
  Brain,
  BookOpen,
  Calendar,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

/* ======================================================
   Features Data
====================================================== */

const features = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    route: "/dashboard",
    description:
      "Monitor streaks, tasks, solved problems, and overall learning progress.",
  },

  {
    name: "Study Tracker",
    icon: Code2,
    route: "/dashboard/studytracker",
    description:
      "Track coding practice, revision progress, and daily consistency.",
  },

  {
    name: "AI Mentor",
    icon: Brain,
    route: "/dashboard/aimentor",
    description:
      "Get personalized AI guidance, explanations, and instant help.",
  },

  {
    name: "Smart Notes",
    icon: BookOpen,
    route: "/dashboard/notes",
    description:
      "Write, organize, summarize, and improve notes with AI.",
  },

  {
    name: "Study Planner",
    icon: Calendar,
    route: "/dashboard/studyplan",
    description:
      "Generate personalized study plans based on your goals.",
  },
];

/* ======================================================
   Component
====================================================== */

export default function Features() {
  const navigate = useNavigate();

  return (
        <section
      id="features"
      className="relative overflow-hidden bg-[#0F172A] py-20 lg:py-28"
    >
      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute -top-44 left-0 h-[420px] w-[420px] rounded-full bg-emerald-500/10 blur-[140px]" />

        <div className="absolute bottom-0 right-0 h-[350px] w-[350px] rounded-full bg-cyan-500/10 blur-[120px]" />

      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

        {/* ================= Heading ================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >

          {/* Badge */}

          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2">

            <span className="h-2 w-2 rounded-full bg-emerald-400"></span>

            <span className="text-sm font-medium text-emerald-400">
              Powerful Features
            </span>

          </div>

          {/* Heading */}

          <h2 className="mt-8 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl">

            Everything You Need

            <br />

            <span className="text-emerald-400">
              in One Workspace.
            </span>

          </h2>

          {/* Description */}

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">

            Powerful AI-driven tools designed to help students
            stay organized, learn smarter, and achieve more
            every single day.

          </p>

        </motion.div>

        {/* ================= Feature Cards ================= */}

        <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-5">
                    {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                onClick={() => navigate(feature.route)}
                className="group cursor-pointer"
              >
                <div
                  className="
                    relative
                    h-full
                    overflow-hidden
                    rounded-3xl
                    border
                    border-slate-700
                    bg-slate-900/70
                    backdrop-blur-xl
                    p-7
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:border-emerald-500/40
                    hover:shadow-[0_20px_60px_rgba(16,185,129,0.18)]
                  "
                >
                  {/* Top Glow */}

                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-400/60 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                  {/* Icon */}

                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/10 transition-all duration-300 group-hover:scale-110 group-hover:bg-emerald-500">

                    <Icon
                      size={30}
                      className="text-emerald-400 transition-colors duration-300 group-hover:text-white"
                    />

                  </div>

                  {/* Title */}

                  <h3 className="text-xl font-semibold text-white">
                    {feature.name}
                  </h3>

                  {/* Description */}

                  <p className="mt-4 text-sm leading-7 text-slate-400">
                    {feature.description}
                  </p>

                  {/* Bottom Link */}

                  <div className="mt-8 flex items-center text-sm font-medium text-emerald-400 opacity-0 transition-all duration-300 group-hover:opacity-100">

                    Explore

                    <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>

                  </div>

                </div>

              </motion.div>
            );
          })}
        </div>
        </div>
                {/* ======================================================
                    Why Choose Orbit AI
                ====================================================== */}

        <div className="mt-28">

          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="mx-auto mb-16 max-w-3xl text-center"
          >

            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2">

              <span className="h-2 w-2 rounded-full bg-emerald-400"></span>

              <span className="text-sm font-medium text-emerald-400">
                Why Orbit AI?
              </span>

            </div>

            <h2 className="mt-8 text-4xl font-bold text-white sm:text-5xl">

              Learn Smarter,

              <span className="block text-emerald-400">
                Not Harder.
              </span>

            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">

              Orbit AI helps students stay organized, save time,
              and remain consistent with intelligent tools designed
              to simplify everyday learning.

            </p>

          </motion.div>

          {/* Cards */}

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {/* Card 1 */}

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >

              <div className="group h-full rounded-3xl border border-slate-700 bg-slate-900/70 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500/40 hover:shadow-[0_20px_60px_rgba(16,185,129,0.18)]">

                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/10 transition-all duration-300 group-hover:bg-emerald-500">

                  <Calendar
                    size={30}
                    className="text-emerald-400 group-hover:text-white"
                  />

                </div>

                <h3 className="text-2xl font-semibold text-white">
                  Smart Preparation
                </h3>

                <p className="mt-5 leading-8 text-slate-400">

                  Build a structured study routine instead of
                  learning randomly. Plan topics, organize
                  goals, and stay focused every day.

                </p>

              </div>

            </motion.div>

            {/* Card 2 */}

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >

              <div className="group h-full rounded-3xl border border-slate-700 bg-slate-900/70 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500/40 hover:shadow-[0_20px_60px_rgba(16,185,129,0.18)]">

                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/10 transition-all duration-300 group-hover:bg-emerald-500">

                  <Brain
                    size={30}
                    className="text-emerald-400 group-hover:text-white"
                  />

                </div>

                <h3 className="text-2xl font-semibold text-white">
                  Save Time
                </h3>

                <p className="mt-5 leading-8 text-slate-400">

                  AI instantly summarizes notes, explains difficult
                  concepts, and generates personalized study plans,
                  helping you focus on learning.

                </p>

              </div>

            </motion.div>

            {/* Card 3 */}

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >

              <div className="group h-full rounded-3xl border border-slate-700 bg-slate-900/70 p-8 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500/40 hover:shadow-[0_20px_60px_rgba(16,185,129,0.18)]">

                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-emerald-500/10 transition-all duration-300 group-hover:bg-emerald-500">

                  <TrendingUp
                    size={30}
                    className="text-emerald-400 group-hover:text-white"
                  />

                </div>

                <h3 className="text-2xl font-semibold text-white">
                  Stay Consistent
                </h3>

                <p className="mt-5 leading-8 text-slate-400">

                  Monitor your learning journey with progress
                  tracking, daily goals, task completion,
                  and performance insights.

                </p>

              </div>

            </motion.div>

          </div>

        </div>
              
    </section>
  );
}