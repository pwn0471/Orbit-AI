import { useState } from "react";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  // ✅ Simple frontend submit
  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login Data:", loginData);

    // You can later replace this with API call
    alert("Login successful (frontend only)");
  };

  return (
    <div className="h-screen flex items-center justify-center p-4 bg-base-200">
      
      <div className="flex flex-col lg:flex-row w-full max-w-5xl bg-base-100 rounded-xl shadow-xl overflow-hidden border border-base-300">

        {/* 🔥 LEFT: LOGIN FORM */}
        <div className="w-full lg:w-1/2 p-6 sm:p-10 flex flex-col justify-center">

          {/* LOGO */}
          <div className="mb-6 flex items-center gap-2">
            <img src="/logo3.png" alt="logo" className="w-8 h-8" />
            <h1 className="text-xl font-bold">Orbit AI</h1>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">

            {/* HEADING */}
            <div>
              <h2 className="text-2xl font-semibold">Welcome Back</h2>
              <p className="text-sm opacity-70">
                Sign in to your account to stay connected
              </p>
            </div>

            {/* EMAIL */}
            <div className="form-control">
              <label className="label">Email</label>
              <input
                type="email"
                placeholder="Enter your Gmail"
                className="input input-bordered w-full"
                value={loginData.email}
                onChange={(e) =>
                  setLoginData({ ...loginData, email: e.target.value })
                }
                required
              />
            </div>

            {/* PASSWORD */}
            <div className="form-control">
              <label className="label">Password</label>
              <input
                type="password"
                placeholder="Enter your Password"
                className="input input-bordered w-full"
                value={loginData.password}
                onChange={(e) =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
                required
              />
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              className="btn btn-primary w-full"
            >
              Sign In
            </button>

            {/* LINK */}
            <p className="text-center text-sm">
              Don't have an account?{" "}
              <Link to="/signup" className="text-primary hover:underline">
                Create one
              </Link>
            </p>

          </form>
        </div>

        {/* 🔥 RIGHT: IMAGE SECTION */}
        <div className="hidden lg:flex w-1/2 bg-primary/10 items-center justify-center">
          <div className="max-w-md p-8 text-center">

            <img
              src="/Vc.png"
              alt="auth"
              className="w-full max-w-sm mx-auto"
            />

            <div className="mt-6 space-y-2">
              <h2 className="text-xl font-semibold">
                Meet and connect with people across the globe
              </h2>
              <p className="opacity-70 text-sm">
                Start conversations, make new friends, and stay connected anytime
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
};

export default LoginPage;