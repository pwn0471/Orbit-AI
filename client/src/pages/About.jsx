export default function AboutUs() {
  return (
    <section
      id="about"
      className="min-h-screen py-24 bg-gradient-to-br from-gray-900 via-slate-900 to-black"
    >
      <div className="max-w-5xl mx-auto px-6">
        
        <div className="bg-white/10 backdrop-blur-xl border border-white/10 rounded-3xl shadow-2xl p-8 md:p-12 text-center">
          
          {/* LOGO */}
          <div className="flex justify-center mb-4">
            <img
              src="/logo3.png"
              alt="Orbit AI Logo"
              className="w-14 h-14 object-contain"
            />
          </div>

          {/* TITLE */}
          <h2 className="text-4xl font-bold mb-2 text-white">
            Orbit{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              AI
            </span>
          </h2>

          {/* TAGLINE */}
          <p className="text-gray-300 text-lg mb-4">
            Learn. Track. Improve.
          </p>

          {/* LINE */}
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-8 rounded-full"></div>

          {/* CONTENT */}
          <div className="text-gray-300 text-base md:text-lg space-y-6 text-left md:text-center">
            
            <p>
              <strong className="text-white">Orbit AI</strong> is a smart
              AI-powered workspace designed to help students prepare for
              placements with structure and clarity. It brings together tasks,
              DSA tracking, notes, and AI guidance — all in one place.
            </p>

            <p>
              Whether you're preparing for coding interviews or improving your
              problem-solving skills, Orbit AI helps you stay consistent,
              organized, and focused on what matters most.
            </p>

            <p>
              Track your daily progress, manage your learning journey, and get
              intelligent suggestions powered by AI to improve faster and
              smarter.
            </p>

            <p>
              Built with ❤️ using modern web technologies, this project focuses
              on clean UI, smooth experience, and real-world impact.
            </p>
          </div>

          {/* FOOTER */}
          <p className="mt-10 text-sm text-gray-400">
            Built for students 🚀
          </p>
        </div>
      </div>
    </section>
  );
}