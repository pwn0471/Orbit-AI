import React from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  PlayCircle,
 Bot,
  NotebookPen,
  CalendarCheck,
} from "lucide-react";

/* ===========================================================
   Animation Variants
=========================================================== */

const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
    },
  },
};

const fadeRight = {
  hidden: {
    opacity: 0,
    x: 50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.9,
    },
  },
};

/* ===========================================================
   Browser Window Component
=========================================================== */

const BrowserWindow = ({ image, className = "" }) => {
  return (
    <motion.div
      whileHover={{
        y: -5,
        scale: 1.01,
      }}
      transition={{
        duration: 0.25,
      }}
      className={`overflow-hidden rounded-3xl border border-slate-700 bg-[#111827] shadow-[0_40px_80px_rgba(0,0,0,0.45)] ${className}`}
    >
      <div className="flex items-center justify-between border-b border-slate-700 bg-[#1E293B] px-5 py-3">

        <div className="flex gap-2">
          <span className="h-3 w-3 rounded-full bg-red-500"></span>
          <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
          <span className="h-3 w-3 rounded-full bg-green-500"></span>
        </div>

        <div className="rounded-lg bg-slate-800 px-4 py-1 text-xs text-slate-400">
          orbit-ai.app
        </div>

        <div className="w-14"></div>

      </div>

      <img
        src={image}
        alt="Orbit AI"
        className="w-full object-cover"
      />
    </motion.div>
  );
};

/* ===========================================================
   Floating Browser
=========================================================== */

const FloatingBrowser = ({
  image,
  icon,
  title,
  subtitle,
  className,
  duration = 5,
}) => {
  return (
    <motion.div
      animate={{
        y: [0, -12, 0],
      }}
      transition={{
        duration,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className={`absolute hidden lg:block ${className}`}
    >
      <div className="w-72 overflow-hidden rounded-2xl border border-slate-700 bg-[#111827]/95 backdrop-blur-xl shadow-2xl">

        <div className="flex items-center justify-between border-b border-slate-700 bg-[#1E293B] px-4 py-2">

          <div className="flex gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500"></span>
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-500"></span>
            <span className="h-2.5 w-2.5 rounded-full bg-green-500"></span>
          </div>

          <div className="flex items-center gap-2 text-xs text-slate-300">
            {icon}
            {title}
          </div>

        </div>

        <img
          src={image}
          alt={title}
          className="h-40 w-full object-cover"
        />

        <div className="border-t border-slate-700 bg-slate-900 px-4 py-3">

          <h4 className="font-semibold text-white">
            {title}
          </h4>

          <p className="mt-1 text-xs text-slate-400">
            {subtitle}
          </p>

        </div>

      </div>
    </motion.div>
  );
};

/* ===========================================================
   Hero Component
=========================================================== */

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#0F172A] text-white pt-16 pb-16 lg:pt-32 lg:pb-20"
    >
      {/* Background Glow */}

      <div className="absolute inset-0 overflow-hidden">

        <div className="absolute -top-40 right-10 h-[500px] w-[500px] rounded-full bg-emerald-500/10 blur-[150px]" />

        <div className="absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[130px]" />

      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">

        <div className="grid items-center gap-12 lg:gap-20 lg:grid-cols-2">

          {/* =====================================================
                            LEFT
          ====================================================== */}

          <motion.div
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
            className="order-2 lg:order-1"
          >

            {/* Badge */}

            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2">

              <span className="h-2 w-2 rounded-full bg-emerald-400"></span>

              <span className="text-sm font-medium text-emerald-400">

                AI-Powered Learning Workspace

              </span>

            </div>

            {/* Heading */}

            <h1 className="mt-8 text-5xl font-bold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">

              Learn.

              <br />

              Build.

              <br />

              <span className="text-emerald-400">

                Achieve More.

              </span>

            </h1>

            {/* Description */}

            <p className="mt-8 max-w-xl text-lg leading-8 text-slate-400">

              Organize your study materials, manage tasks,
              track progress, write smarter notes, and get
              personalized AI guidance—all inside one modern
              learning workspace.

            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-4">

              <button
                className="group inline-flex h-12 sm:h-14 items-center justify-center gap-2 rounded-xl bg-emerald-500 px-6 sm:px-8 text-sm sm:text-base font-semibold text-white shadow-lg shadow-emerald-500/20 transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-600 hover:shadow-emerald-500/40 active:scale-95"
              >
                Get Started

                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </button>

              

            </div>

          </motion.div>

          {/* =====================================================
                            RIGHT
          ====================================================== */}

          <motion.div
            variants={fadeRight}
            initial="hidden"
            animate="visible"
            className="relative order-1 flex justify-center lg:order-2"
          >

            {/* Main Dashboard */}

            <BrowserWindow
              image="/screenshot/dashboard.png"
              className="w-full max-w-[700px] mx-auto"
            />

            {/* AI Mentor */}

            <FloatingBrowser
              image="/screenshot/aimentor.png"
              icon={<Bot size={14} />}
              title="AI Mentor"
              subtitle="Ask questions and learn faster"
              duration={4}
              className="-top-8 -left-12"
            />

            {/* Smart Notes */}

            <FloatingBrowser
              image="/screenshot/notes.png"
              icon={<NotebookPen size={14} />}
              title="Smart Notes"
              subtitle="Organize everything beautifully"
              duration={5}
              className="-bottom-10 -left-16"
            />

            {/* Study Tracker */}

            <FloatingBrowser
              image="/screenshot/study tracker.png"
              icon={<CalendarCheck size={14} />}
              title="Study Tracker"
              subtitle="Track your daily progress"
              duration={6}
              className="bottom-16 -right-16"
            />
            {/* Mobile Feature Preview */}

            

          </motion.div>

        </div>

      </div>

      {/* Bottom Fade */}

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#0F172A] to-transparent"></div>

    </section>
  );
}