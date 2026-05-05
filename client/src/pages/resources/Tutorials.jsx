import {
  PlayCircle,
  Clock3,
  ArrowRight,
  BookOpen,
  Brain,
  Code2,
  Trophy,
} from "lucide-react";

import { motion } from "framer-motion";

const tutorials = [
  {
    title: "Build Your AI Dashboard",
    duration: "15 mins",
    level: "Beginner",
    icon: Code2,
  },
  {
    title: "Master AI Notes System",
    duration: "12 mins",
    level: "Intermediate",
    icon: Brain,
  },
  {
    title: "Track DSA Progress Efficiently",
    duration: "18 mins",
    level: "Beginner",
    icon: Trophy,
  },
  {
    title: "Create Smart Study Plans",
    duration: "20 mins",
    level: "Advanced",
    icon: BookOpen,
  },
];

export default function Tutorials() {
  return (
    <div className="min-h-screen bg-[#F8FAFC]">

      {/* HERO SECTION */}

      <section className="relative overflow-hidden border-b border-slate-200">

        <div className="absolute inset-0 bg-gradient-to-br from-green-100/40 via-transparent to-emerald-100/30" />

        <div className="max-w-7xl mx-auto px-6 py-28 relative z-10">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >

            <div className="inline-flex items-center gap-2 bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-semibold mb-6">
              <PlayCircle size={16} />
              Tutorials
            </div>

            <h1 className="text-5xl md:text-5xl font-bold leading-tight tracking-tight text-slate-900">
              Learn Faster With
              <span className="text-green-600"> Interactive Tutorials</span>
            </h1>

            <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-600 leading-relaxed">
              Step-by-step guides designed to help students master AI-powered
              placement preparation workflows efficiently.
            </p>
          </motion.div>
        </div>
      </section>

      {/* TUTORIALS SECTION */}

      <section className="max-w-6xl mx-auto px-6 py-20">

        <div className="space-y-8">

          {tutorials.map((tutorial, index) => {

            const Icon = tutorial.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group bg-white border border-slate-200 rounded-[30px] p-8 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >

                <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">

                  {/* LEFT */}

                  <div className="flex items-start gap-6">

                    <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center group-hover:bg-green-600 transition-all">

                      <Icon
                        className="text-green-600 group-hover:text-white transition-all"
                        size={30}
                      />
                    </div>

                    <div>

                      <div className="flex items-center gap-3 mb-3">

                        <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-semibold">
                          {tutorial.level}
                        </span>

                        <div className="flex items-center gap-2 text-slate-500 text-sm">
                          <Clock3 size={16} />
                          {tutorial.duration}
                        </div>
                      </div>

                      <h2 className="text-2xl md:text-3xl font-bold text-slate-900">
                        {tutorial.title}
                      </h2>

                      <p className="mt-4 text-slate-600 leading-relaxed max-w-2xl">
                        Learn practical implementation, architecture decisions,
                        and workflow optimization using real-world AI-powered
                        productivity systems.
                      </p>
                    </div>
                  </div>

                  {/* RIGHT */}

                  <div>

                    <button className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-7 py-4 rounded-2xl font-semibold transition-all group-hover:gap-3">

                      Watch Tutorial

                      <ArrowRight size={18} />
                    </button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* FEATURE SECTION */}

      <section className="px-6 pb-24">

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">

            <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center mb-6">
              <PlayCircle className="text-green-600" />
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Video Tutorials
            </h3>

            <p className="text-slate-600 leading-relaxed">
              High-quality walkthroughs explaining every major feature and workflow.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">

            <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center mb-6">
              <Brain className="text-green-600" />
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              AI Learning
            </h3>

            <p className="text-slate-600 leading-relaxed">
              Understand how AI features work behind the scenes with practical examples.
            </p>
          </div>

          <div className="bg-white rounded-3xl border border-slate-200 p-8 shadow-sm">

            <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center mb-6">
              <Trophy className="text-green-600" />
            </div>

            <h3 className="text-2xl font-bold text-slate-900 mb-4">
              Placement Success
            </h3>

            <p className="text-slate-600 leading-relaxed">
              Learn proven preparation systems used by successful candidates.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}