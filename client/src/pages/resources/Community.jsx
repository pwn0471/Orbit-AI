import {
  Users,
  MessageSquare,
  Trophy,
  Sparkles,
  ArrowRight,
  
  Send,
  Globe,
} from "lucide-react";

import {  FaGithub } from "react-icons/fa";

import { motion } from "framer-motion";

const communities = [
  {
    title: "Developer Discussions",
    description:
      "Connect with developers, discuss projects, DSA, AI tools, and placement strategies.",
    icon: MessageSquare,
  },
  {
    title: "Leaderboard System",
    description:
      "Compete with students through streaks, consistency, and coding challenges.",
    icon: Trophy,
  },
  {
    title: "AI Study Groups",
    description:
      "Join collaborative AI-powered study rooms and preparation communities.",
    icon: Sparkles,
  },
  {
    title: "Open Source Community",
    description:
      "Contribute to projects, improve your GitHub profile, and learn from others.",
    icon: FaGithub,
  },
];

export default function Community() {
  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">

      {/* HERO SECTION */}

      <section className="relative overflow-hidden border-b border-white/10">

        {/* BACKGROUND EFFECTS */}

        <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 via-transparent to-emerald-500/20" />

        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-green-500/20 blur-3xl rounded-full" />

        <div className="max-w-7xl mx-auto px-6 py-28 relative z-10">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >

            <div className="inline-flex items-center gap-2 bg-white/10 border border-white/10 text-green-400 px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-lg">

              <Users size={16} />

              Community
            </div>

            <h1 className="text-5xl md:text-5xl font-bold leading-tight tracking-tight">
              Build Together.
              <span className="text-green-400"> Grow Together.</span>
            </h1>

            <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-300 leading-relaxed">
              Join ambitious developers, placement aspirants, and AI enthusiasts
              building the future together.
            </p>

            {/* BUTTONS */}

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">

              <button className="bg-green-500 hover:bg-green-600 text-black px-8 py-4 rounded-2xl font-semibold flex items-center gap-2 transition-all hover:gap-3">

                Join Community

                <ArrowRight size={18} />
              </button>

              <button className="border border-white/10 hover:border-green-400 bg-white/5 hover:bg-white/10 px-8 py-4 rounded-2xl font-semibold transition-all">

                Explore Discussions
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* COMMUNITY CARDS */}

      <section className="max-w-7xl mx-auto px-6 py-24">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {communities.map((item, index) => {

            const Icon = item.icon;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur-xl p-10 hover:border-green-400 transition-all duration-300 hover:-translate-y-2"
              >

                {/* GLOW EFFECT */}

                <div className="absolute inset-0 bg-gradient-to-br from-green-500/0 via-green-500/0 to-green-500/10 opacity-0 group-hover:opacity-100 transition-all duration-500" />

                <div className="relative z-10">

                  <div className="w-16 h-16 rounded-2xl bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-8 group-hover:bg-green-500 transition-all">

                    <Icon
                      size={30}
                      className="text-green-400 group-hover:text-black transition-all"
                    />
                  </div>

                  <h2 className="text-3xl font-bold mb-5">
                    {item.title}
                  </h2>

                  <p className="text-slate-300 leading-relaxed text-lg">
                    {item.description}
                  </p>

                  <button className="mt-8 flex items-center gap-2 text-green-400 font-semibold group-hover:gap-3 transition-all">

                    Learn More

                    <ArrowRight size={18} />
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* STATS SECTION */}

      <section className="px-6 pb-24">

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">

          <div className="bg-white/5 border border-white/10 rounded-[30px] p-10 backdrop-blur-xl text-center">

            <h2 className="text-5xl font-bold text-green-400">
              10K+
            </h2>

            <p className="mt-4 text-slate-300 text-lg">
              Active Students
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-[30px] p-10 backdrop-blur-xl text-center">

            <h2 className="text-5xl font-bold text-green-400">
              500+
            </h2>

            <p className="mt-4 text-slate-300 text-lg">
              Daily Discussions
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-[30px] p-10 backdrop-blur-xl text-center">

            <h2 className="text-5xl font-bold text-green-400">
              50+
            </h2>

            <p className="mt-4 text-slate-300 text-lg">
              AI Study Groups
            </p>
          </div>
        </div>
      </section>

      {/* CTA SECTION */}

      <section className="px-6 pb-28">

        <div className="max-w-6xl mx-auto rounded-[40px] border border-green-500/20 bg-gradient-to-r from-green-500/10 to-emerald-500/10 backdrop-blur-2xl p-12 md:p-20 text-center">

          <div className="w-20 h-20 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mx-auto mb-8">

            <Globe className="text-green-400" size={40} />
          </div>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Become Part Of The Future
          </h2>

          <p className="mt-6 text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Collaborate with ambitious students, developers, and creators
            building modern AI-powered careers.
          </p>

          {/* INPUT */}

          <div className="mt-10 flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">

            <div className="flex-1 flex items-center gap-3 bg-white/5 border border-white/10 rounded-2xl px-5">

              <Send className="text-slate-400" size={18} />

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-transparent outline-none py-4 text-white placeholder:text-slate-400"
              />
            </div>

            <button className="bg-green-500 hover:bg-green-600 text-black px-8 py-4 rounded-2xl font-semibold transition-all">

              Join Now
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}