import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import { GoogleLogin } from "@react-oauth/google";
import { useAuth } from "../context/AuthContext";
import { jwtDecode } from "jwt-decode";

const LoginPage = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const { login } = useAuth(); // ✅ global auth
  const navigate = useNavigate(); // ✅ redirect
  

  // 🔥 NORMAL LOGIN
  const handleLogin = (e) => {
    e.preventDefault();

    const userData = {
      name: "User",
      email: loginData.email,
      picture: null,
    };

    login(userData); // ✅ store in context
    localStorage.setItem("user", JSON.stringify(userData)); // ✅ persist

    navigate("/"); // ✅ redirect
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-900 to-green-950 px-6 py-16">

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex flex-col lg:flex-row w-full max-w-5xl rounded-2xl overflow-hidden shadow-2xl border border-green-900/40 hover:shadow-green-500/20 transition-all duration-300"
      >

        {/* LEFT */}
        <div className="w-full lg:w-1/2 px-8 py-10 bg-black/70 backdrop-blur-lg">

          {/* HEADER */}
          <div className="flex flex-col items-center text-center mb-8">
            <div className="flex items-center gap-2 mb-3">
              <img src="/logo3.png" className="w-8 h-8" />
              <h1 className="text-xl font-bold text-white">Orbit AI</h1>
            </div>

            <h2 className="text-2xl font-semibold text-white">
              Welcome Back
            </h2>
            <p className="text-gray-400 text-sm">
              Sign in to your account to stay connected
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">

            {/* 🔥 GOOGLE LOGIN */}
            <div className="flex justify-center">
              <GoogleLogin
                onSuccess={(res) => {
                  const decoded = jwtDecode(res.credential);

                  const userData = {
                    name: decoded.name,
                    email: decoded.email,
                    picture: decoded.picture,
                  };

                  login(userData); // ✅ context
                  localStorage.setItem("user", JSON.stringify(userData)); // ✅ persist

                  navigate("/"); // ✅ redirect
                }}
                onError={() => console.log("Login Failed")}
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

              {/* EMAIL */}
              <div className="relative">
                <Mail className="absolute left-3 top-3.5 text-gray-400" size={18} />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full pl-10 pr-4 py-3 rounded-xl bg-black/40 border border-gray-700 text-white focus:outline-none focus:border-green-500 transition"
                  value={loginData.email}
                  onChange={(e) =>
                    setLoginData({ ...loginData, email: e.target.value })
                  }
                  required
                />
              </div>

              {/* PASSWORD */}
              <div className="relative">
                <Lock className="absolute left-3 top-3.5 text-gray-400" size={18} />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter Password"
                  className="w-full pl-10 pr-10 py-3 rounded-xl bg-black/40 border border-gray-700 text-white focus:outline-none focus:border-green-500 transition"
                  value={loginData.password}
                  onChange={(e) =>
                    setLoginData({ ...loginData, password: e.target.value })
                  }
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3 text-gray-400 hover:text-white"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>

            </div>

            {/* BUTTON */}
            <motion.button
              whileTap={{ scale: 0.97 }}
              whileHover={{ scale: 1.02 }}
              type="submit"
              className="w-full py-3 rounded-xl bg-green-500 text-black font-semibold hover:bg-green-400 transition shadow-lg"
            >
              Sign In
            </motion.button>

            {/* LINK */}
            <p className="text-center text-sm text-gray-400">
              Don’t have an account?{" "}
              <Link to="/signup" className="text-green-400 hover:underline">
                Create one
              </Link>
            </p>

          </form>
        </div>

        {/* RIGHT */}
        <div className="hidden lg:flex w-1/2 items-center justify-center bg-gradient-to-br from-green-900/40 to-black">
          <div className="text-center p-10">
            <img src="/Vc.png" className="w-72 mx-auto" />
            <h2 className="text-xl font-semibold text-white mt-6">
              Meet and connect with people across the globe
            </h2>
            <p className="text-gray-400 mt-2 text-sm">
              Start conversations, make new friends, and stay connected anytime
            </p>
          </div>
        </div>

      </motion.div>
    </div>
  );
};

export default LoginPage;