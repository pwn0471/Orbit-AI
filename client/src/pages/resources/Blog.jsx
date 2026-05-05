import {
  CalendarDays,
  ArrowRight,
  Sparkles,
  Clock3,
} from "lucide-react";

import { motion } from "framer-motion";

const blogs = [
  {
    title: "How To Crack Product-Based Companies in 2026",
    category: "Placements",
    readTime: "5 min read",
    date: "May 10, 2026",
  },
  {
    title: "Best DSA Roadmap For Placements",
    category: "DSA",
    readTime: "7 min read",
    date: "May 12, 2026",
  },
  {
    title: "Building AI SaaS Projects Using MERN",
    category: "Development",
    readTime: "8 min read",
    date: "May 15, 2026",
  },
  {
    title: "How AI Can Improve Student Productivity",
    category: "AI",
    readTime: "6 min read",
    date: "May 17, 2026",
  },
];

export default function Blog() {
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
              <Sparkles size={16} />
              Blog & Insights
            </div>

            <h1 className="text-5xl md:text-5xl font-bold leading-tight tracking-tight text-slate-900">
              Insights For
              <span className="text-green-600"> Smarter Preparation</span>
            </h1>

            <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-600 leading-relaxed">
              Discover placement strategies, AI workflows, development guides,
              and productivity systems used by modern developers.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FEATURED BLOG */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[40px] bg-gradient-to-r from-green-600 to-emerald-700 p-10 md:p-16 text-white shadow-2xl"
        >

          <div className="max-w-3xl">

            <span className="bg-white/20 px-4 py-2 rounded-full text-sm font-semibold">
              Featured Article
            </span>

            <h2 className="mt-6 text-4xl md:text-6xl font-bold leading-tight">
              Build Startup-Level AI Projects That Stand Out
            </h2>

            <p className="mt-6 text-lg text-green-50 leading-relaxed">
              Learn how to transform normal college projects into scalable,
              portfolio-worthy SaaS platforms using AI integrations and
              modern system design.
            </p>

            <button className="mt-10 bg-white text-green-700 hover:bg-slate-100 px-8 py-4 rounded-2xl font-semibold flex items-center gap-2 transition-all hover:gap-3">

              Read Article

              <ArrowRight size={18} />
            </button>
          </div>
        </motion.div>
      </section>

      {/* BLOG CARDS */}

      <section className="max-w-7xl mx-auto px-6 pb-24">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {blogs.map((blog, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white border border-slate-200 rounded-[32px] overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
            >

              {/* IMAGE AREA */}

              <div className="h-64 bg-gradient-to-br from-green-400 to-emerald-700 relative overflow-hidden">

                <div className="absolute inset-0 bg-black/10" />

                <div className="absolute bottom-6 left-6">

                  <span className="bg-white/20 backdrop-blur-lg text-white px-4 py-2 rounded-full text-sm font-semibold">
                    {blog.category}
                  </span>
                </div>
              </div>

              {/* CONTENT */}

              <div className="p-8">

                <div className="flex items-center gap-6 text-slate-500 text-sm mb-5">

                  <div className="flex items-center gap-2">
                    <CalendarDays size={16} />
                    {blog.date}
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock3 size={16} />
                    {blog.readTime}
                  </div>
                </div>

                <h2 className="text-3xl font-bold text-slate-900 leading-snug group-hover:text-green-600 transition-all">

                  {blog.title}
                </h2>

                <p className="mt-5 text-slate-600 leading-relaxed">
                  Learn actionable insights, strategies, and modern workflows
                  designed for ambitious developers and placement aspirants.
                </p>

                <button className="mt-8 flex items-center gap-2 text-green-600 font-semibold transition-all group-hover:gap-3">

                  Read More

                  <ArrowRight size={18} />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* NEWSLETTER */}

      <section className="px-6 pb-28">

        <div className="max-w-5xl mx-auto bg-white border border-slate-200 rounded-[40px] p-10 md:p-16 shadow-sm text-center">

          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
            Stay Updated With AI & Placement Trends
          </h2>

          <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
            Get the latest articles, AI workflows, coding strategies,
            and placement insights directly in your inbox.
          </p>

          <div className="mt-10 flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">

            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 border border-slate-300 rounded-2xl px-6 py-4 outline-none focus:border-green-500"
            />

            <button className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-2xl font-semibold transition-all">

              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}