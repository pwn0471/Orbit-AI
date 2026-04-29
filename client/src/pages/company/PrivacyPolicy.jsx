const PrivacyPolicy = () => {
  return (
    <div className="bg-[#0b1220] text-gray-300 min-h-screen">

      {/* HERO SECTION */}
      <div className="relative h-[300px] flex items-center justify-center text-center">

        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1555949963-aa79dcee981c"
          alt="privacy"
          className="absolute w-full h-full object-cover opacity-20"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-[#0b1220]" />

        {/* Content */}
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white">
            Privacy Policy
          </h1>
          <p className="text-gray-400 mt-2">
            Your data. Your control. Our responsibility.
          </p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-5xl mx-auto px-6 md:px-10 py-12 space-y-10">

        {/* INTRO CARD */}
        <Section
          title="Introduction"
          img="https://images.unsplash.com/photo-1504384308090-c894fdcc538d"
          text="Welcome to PlacePrep. We respect your privacy and are committed to protecting your personal data. This policy explains how we collect, use, and safeguard your information."
        />

        {/* DATA COLLECTION */}
        <Section
          title="Information We Collect"
          img="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
          list={[
            "Account details (name, email)",
            "Study activity (tasks, notes, progress)",
            "Usage analytics",
            "AI interactions"
          ]}
        />

        {/* USAGE */}
        <Section
          title="How We Use Data"
          img="https://images.unsplash.com/photo-1531297484001-80022131f5a1"
          list={[
            "Improve learning experience",
            "Personalize recommendations",
            "Track performance",
            "Enhance AI suggestions"
          ]}
        />

        {/* AI SECTION */}
        <Section
          title="AI Features"
          img="https://images.unsplash.com/photo-1677442136019-21780ecad995"
          text="We use AI services (OpenAI/Gemini) to provide smart suggestions. Your inputs are processed securely and not misused."
        />

        {/* SECURITY */}
        <Section
          title="Data Security"
          img="https://images.unsplash.com/photo-1550751827-4bd374c3f58b"
          text="We implement strong security practices to protect your data, but no system is 100% secure."
        />

        {/* CONTACT */}
        <div className="bg-gradient-to-r from-purple-600 to-indigo-600 p-6 rounded-xl text-center">
          <h2 className="text-xl font-semibold text-white mb-2">
            Need Help?
          </h2>
          <p className="text-gray-200">
            Contact us at <span className="font-medium">support@placeprep.com</span>
          </p>
        </div>

      </div>
    </div>
  );
};

export default PrivacyPolicy;



/* REUSABLE SECTION COMPONENT */
const Section = ({ title, text, list, img }) => {
  return (
    <div className="grid md:grid-cols-2 gap-6 items-center bg-[#111827]/70 backdrop-blur-lg border border-gray-700 p-6 rounded-xl shadow-lg hover:shadow-purple-500/10 transition">

      {/* Image */}
      <img
        src={img}
        alt={title}
        className="rounded-lg w-full h-48 object-cover"
      />

      {/* Content */}
      <div className="space-y-3">
        <h2 className="text-xl font-semibold text-white">{title}</h2>

        {text && <p>{text}</p>}

        {list && (
          <ul className="list-disc pl-5 space-y-1">
            {list.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};