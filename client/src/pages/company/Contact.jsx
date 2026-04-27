const Contact = () => {
  return (
    <div className="bg-[#0b1220] text-gray-300 min-h-screen">

      {/* HERO SECTION */}
      <div className="relative h-[250px] flex items-center justify-center text-center">
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
          alt="contact"
          className="absolute w-full h-full object-cover opacity-20"
          onError={(e) => {
            e.target.src =
              "https://images.unsplash.com/photo-1506765515384-028b60a970df";
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-[#0b1220]" />

        <div className="relative z-10">
          <h1 className="text-4xl font-bold text-white">Contact Us</h1>
          <p className="text-gray-400 mt-2">
            We’d love to hear from you
          </p>
        </div>
      </div>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid lg:grid-cols-2 gap-10">

        {/* LEFT: FORM */}
        <div className="bg-[#111827]/80 backdrop-blur-lg border border-gray-700 p-6 rounded-xl shadow-lg space-y-4">

          <h2 className="text-xl font-semibold text-white">
            Feedback & Queries
          </h2>

          {/* Select */}
          <div>
            <label className="text-sm">Select Reason</label>
            <select className="w-full mt-1 p-2 rounded bg-[#0b1220] border border-gray-600">
              <option>Select an Option</option>
              <option>General Query</option>
              <option>Bug Report</option>
              <option>Feature Request</option>
            </select>
          </div>

          {/* Email */}
          <div>
            <label className="text-sm">Email Address</label>
            <input
              type="email"
              className="w-full mt-1 p-2 rounded bg-[#0b1220] border border-gray-600"
              placeholder="Enter your email"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="text-sm">Contact Number</label>
            <input
              type="text"
              className="w-full mt-1 p-2 rounded bg-[#0b1220] border border-gray-600"
              placeholder="Contact Number with Country Code"
            />
          </div>

          {/* Message */}
          <div>
            <label className="text-sm">Your Message</label>
            <textarea
              rows="4"
              className="w-full mt-1 p-2 rounded bg-[#0b1220] border border-gray-600"
              placeholder="Max 300 characters"
            />
          </div>

          {/* Button */}
          <button className="w-full bg-gradient-to-r from-purple-500 to-indigo-500 py-2 rounded text-white hover:opacity-90 transition">
            Submit
          </button>

        </div>

        {/* RIGHT: MAP + IMAGE */}
        <div className="space-y-6">

          {/* Map */}
          <div className="rounded-xl overflow-hidden border border-gray-700">
            <iframe
              title="map"
              src="https://www.google.com/maps?q=Noida&output=embed"
              className="w-full h-64"
              loading="lazy"
            ></iframe>
          </div>

          {/* Support Image */}
          <img
            src="https://images.unsplash.com/photo-1551434678-e076c223a692"
            alt="support"
            className="rounded-xl w-full h-40 object-cover"
            onError={(e) => {
              e.target.src =
                "https://images.unsplash.com/photo-1506765515384-028b60a970df";
            }}
          />
        </div>

      </div>

      {/* ADDRESS SECTION */}
      <div className="max-w-6xl mx-auto px-6 pb-12">

        <div className="bg-[#111827]/80 backdrop-blur-lg border border-gray-700 p-6 rounded-xl shadow-lg space-y-4">

          <h2 className="text-xl font-semibold text-white">
            Our Offices
          </h2>

          <div className="grid md:grid-cols-2 gap-6 text-sm">

            <div>
              <h3 className="font-semibold text-white">Head Office</h3>
              <p>Noida, Uttar Pradesh, India</p>
              <p>Email: support@placeprep.com</p>
            </div>

            <div>
              <h3 className="font-semibold text-white">Other Office</h3>
              <p>Bangalore, Karnataka, India</p>
              <p>Available for support & operations</p>
            </div>

          </div>

        </div>

      </div>

    </div>
  );
};

export default Contact;