import {
  Search,
  BookOpen,
  Brain,
  Code2,
  Database,
  Shield,
  Rocket,
  ArrowRight,
} from "lucide-react";

import { motion } from "framer-motion";

const docs = [
  {
    title: "Getting Started",
    description:
      "Setup your AI workspace and begin your placement preparation journey.",
    icon: Rocket,
  },
  {
    title: "AI Notes System",
    description:
      "Understand AI summarization, note improvement, and smart explanations.",
    icon: Brain,
  },
  {
    title: "Task Management",
    description:
      "Track DSA, revision, projects, and interview preparation efficiently.",
    icon: BookOpen,
  },
  {
    title: "Authentication",
    description:
      "Secure JWT authentication and protected routes architecture.",
    icon: Shield,
  },
  {
    title: "Database Structure",
    description:
      "Learn MongoDB schema design and scalable backend architecture.",
    icon: Database,
  },
  {
    title: "API Integration",
    description:
      "Integrate OpenAI and Gemini APIs for intelligent automation.",
    icon: Code2,
  },
];

export default function Documentation() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900">
      
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
              <BookOpen size={16} />
              Documentation
            </div>

            <h1 className="text-5xl md:text-5xl font-bold leading-tight tracking-tight">
              Build Faster With
              <span className="text-green-600"> Smart Docs</span>
            </h1>

            <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-600 leading-relaxed">
              Everything you need to understand the architecture, features,
              AI integrations, and workflows of your AI-Powered Placement
              Preparation Workspace.
            </p>

            {/* SEARCH BAR */}

            <div className="mt-10 max-w-2xl mx-auto">
              <div className="bg-white border border-slate-200 rounded-2xl px-5 py-4 flex items-center gap-3 shadow-sm hover:shadow-lg transition-all">

                <Search className="text-slate-400" size={20} />

                <input
                  type="text"
                  placeholder="Search documentation..."
                  className="w-full outline-none bg-transparent text-slate-700 placeholder:text-slate-400"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MAIN SECTION */}

      <section className="max-w-7xl mx-auto px-6 py-20">

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">

          {/* SIDEBAR */}

          <div className="lg:sticky lg:top-24 h-fit">

            <div className="bg-white rounded-3xl border border-slate-200 p-6 shadow-sm">

              <h3 className="text-lg font-bold mb-6">
                Quick Navigation
              </h3>

              <div className="space-y-4">

                {docs.map((item, index) => (
                  <button
                    key={index}
                    className="w-full text-left px-4 py-3 rounded-xl hover:bg-green-50 hover:text-green-600 transition-all text-slate-600 font-medium"
                  >
                    {item.title}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* CONTENT */}

          <div className="lg:col-span-3">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

              {docs.map((doc, index) => {

                const Icon = doc.icon;

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group bg-white rounded-3xl border border-slate-200 p-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-300"
                  >

                    <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center mb-6 group-hover:bg-green-600 transition-all">

                      <Icon
                        size={28}
                        className="text-green-600 group-hover:text-white transition-all"
                      />
                    </div>

                    <h2 className="text-2xl font-bold mb-4">
                      {doc.title}
                    </h2>

                    <p className="text-slate-600 leading-relaxed mb-6">
                      {doc.description}
                    </p>

                    <button className="flex items-center gap-2 text-green-600 font-semibold group-hover:gap-3 transition-all">
                      Read Documentation
                      <ArrowRight size={18} />
                    </button>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}

      <section className="px-6 pb-24">

        <div className="max-w-6xl mx-auto bg-gradient-to-r from-green-600 to-emerald-700 rounded-[40px] p-12 md:p-20 text-center text-white shadow-2xl">

          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Ready To Build Smarter?
          </h2>

          <p className="mt-6 text-lg text-green-50 max-w-2xl mx-auto">
            Explore AI-powered productivity workflows, scalable architecture,
            and placement-focused intelligent systems.
          </p>

          <button className="mt-10 bg-white text-green-700 hover:bg-slate-100 px-8 py-4 rounded-2xl font-semibold text-lg transition-all">
            Explore More Docs
          </button>
        </div>
      </section>
    </div>
  );
}