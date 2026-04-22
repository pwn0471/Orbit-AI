import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Lock, User, Eye, EyeOff } from "lucide-react";
import { GoogleLogin } from "@react-oauth/google";

const SignUpPage = () => {
  const [signupData, setSignupData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleSignup = (e) => {
    e.preventDefault();
    console.log(signupData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-green-950 px-6 py-16">

      {/* 🔥 CARD WITH GLOW + ANIMATION */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col lg:flex-row w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl border border-green-900/40 hover:shadow-green-500/20 hover:shadow-2xl transition-all duration-300"
      >

        {/* LEFT SIDE */}
        <div className="w-full lg:w-1/2 px-8 py-10 bg-black/70 backdrop-blur-lg">

          

          <form onSubmit={handleSignup} className="space-y-6">

            <div className="flex flex-col items-center text-center mb-8">
              <div className="flex items-center gap-2 mb-3">
                <img src="/logo3.png" className="w-8 h-8" />
                <h1 className="text-xl font-bold text-white">Orbit AI</h1>
              </div>

              <h2 className="text-2xl font-semibold text-white">
                Create an Account
              </h2>
              <p className="text-gray-400 text-sm">
                Start your AI productivity journey
              </p>
            </div>

            {/* GOOGLE BUTTON */}
            <div className="flex justify-center">
              <GoogleLogin
                onSuccess={(credentialResponse) => {
                  console.log("Google Success:", credentialResponse);

                  const token = credentialResponse.credential;

                  // TEMP (frontend only)
                  localStorage.setItem("googleUser", token);

                  alert("Google Sign Up Successful 🚀");
                }}
                onError={() => {
                  console.log("Google Login Failed");
                }}
              />
            </div>

            {/* DIVIDER */}
            <div className="flex items-center gap-3">
              <div className="flex-1 h-px bg-gray-700"></div>
              <span className="text-gray-400 text-sm">OR</span>
              <div className="flex-1 h-px bg-gray-700"></div>
            </div>

            {/* INPUTS */}
            <div className="space-y-4">

              {/* NAME */}
              <div className="relative">
                <User className="absolute left-3 top-3.5 text-gray-400" size={18} />
                <input
                  type="text"
                  placeholder="Full Name"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-black/40 border border-gray-700 text-white focus:outline-none focus:border-green-500 transition"
                  value={signupData.fullName}
                  onChange={(e) =>
                    setSignupData({ ...signupData, fullName: e.target.value })
                  }
                />
              </div>

              {/* EMAIL */}
              <div className="relative">
                <Mail className="absolute left-3 top-3.5 text-gray-400" size={18} />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-black/40 border border-gray-700 text-white focus:outline-none focus:border-green-500 transition"
                  value={signupData.email}
                  onChange={(e) =>
                    setSignupData({ ...signupData, email: e.target.value })
                  }
                />
              </div>

              {/* PASSWORD */}
              <div className="relative">
                <Lock className="absolute left-3 top-3.5 text-gray-400" size={18} />
                
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Create Password"
                  className="w-full pl-10 pr-10 py-3 rounded-xl bg-black/40 border border-gray-700 text-white focus:outline-none focus:border-green-500 transition"
                  value={signupData.password}
                  onChange={(e) =>
                    setSignupData({ ...signupData, password: e.target.value })
                  }
                />

                {/* SHOW / HIDE */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-400 hover:text-white"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

              <p className="text-xs text-gray-400">
                Password must be at least 6 characters
              </p>

              {/* TERMS */}
              <label className="flex items-center gap-2 text-sm text-gray-400">
                <input type="checkbox" className="accent-green-500" required />
                I agree to terms & privacy policy
              </label>
            </div>

            {/* BUTTON */}
            <motion.button
              whileTap={{ scale: 0.97 }}
              whileHover={{ scale: 1.02 }}
              type="submit"
              className="w-full py-3 rounded-xl bg-green-500 text-black font-semibold hover:bg-green-400 transition shadow-lg"
            >
              Create Account
            </motion.button>

            {/* LOGIN */}
            <p className="text-center text-sm text-gray-400">
              Already have an account?{" "}
              <Link to="/login" className="text-green-400 hover:underline">
                Sign in
              </Link>
            </p>

          </form>
        </div>

        {/* RIGHT SIDE */}
        <div className="hidden lg:flex w-1/2 items-center justify-center bg-gradient-to-br from-green-900/40 to-black">
          <div className="text-center p-10">
            <img
              src="/Vc.png"
              className="w-72 mx-auto drop-shadow-xl"
            />
            <h2 className="text-xl font-semibold text-white mt-6">
              Connect with people worldwide
            </h2>
            <p className="text-gray-400 mt-2 text-sm">
              Collaborate, chat, and grow with AI-powered tools
            </p>
          </div>
        </div>

      </motion.div>
    </div>
  );
};

export default SignUpPage;