import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const { user, logout } = useAuth();



  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 120;
      const sections = ["features", "how-it-works", "ai-section", "pricing"];

      sections.forEach((section) => {
        const el = document.getElementById(section);
        if (!el) return;

        const top = el.offsetTop;
        const height = el.offsetHeight;

        if (scrollPosition >= top && scrollPosition < top + height) {
          setActiveSection(section);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
      return;
    }

    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 flex items-center justify-between py-4">

        {/* LEFT SECTION */}
        <div
          onClick={() => {
            if (user && window.innerWidth < 768) {
              navigate("/dashboard"); // mobile avatar click
            } else {
              navigate("/");
            }
          }}
          className="flex items-center gap-2 cursor-pointer"
        >
          {/* DESKTOP LOGO */}
          <div className="hidden md:flex items-center gap-2">
            <img src="/logo3.png" alt="Orbit AI" className="h-9 w-auto" />
            <h2 className="text-lg font-bold text-gray-900">
              Orbit{" "}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                AI
              </span>
            </h2>
          </div>

          {/* MOBILE AVATAR */}
          <div className="md:hidden">
            {user ? (
              <img
                src={
                  user?.picture ||
                  `https://ui-avatars.com/api/?name=${user?.name || "User"}`
                }
                referrerPolicy="no-referrer"
                alt="user"
                className="w-9 h-9 rounded-full border object-cover cursor-pointer 
                transition-all duration-300 hover:scale-110 hover:ring-2 hover:ring-blue-400"
              />
            ) : (
              <img
                src="/logo3.png"
                alt="logo"
                className="h-9 w-auto"
              />
            )}
          </div>
        </div>

        {/* CENTER */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          <button onClick={() => scrollToSection("features")} className={`${activeSection === "features" ? "text-black" : "text-gray-500 hover:text-black"}`}>
            Home
          </button>

          <button onClick={() => scrollToSection("how-it-works")} className={`${activeSection === "how-it-works" ? "text-black" : "text-gray-500 hover:text-black"}`}>
            How It Works
          </button>

          <button onClick={() => scrollToSection("ai-section")} className={`${activeSection === "ai-section" ? "text-black" : "text-gray-500 hover:text-black"}`}>
            AI Section
          </button>

          <button onClick={() => scrollToSection("pricing")} className={`${activeSection === "pricing" ? "text-black" : "text-gray-500 hover:text-black"}`}>
            Pricing
          </button>
        </div>

        {/* RIGHT: DESKTOP AUTH */}
        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-3">
              <img
                onClick={() => navigate("/dashboard")}
                src={
                  user?.picture ||
                  `https://ui-avatars.com/api/?name=${user?.name || "User"}`
                }
                referrerPolicy="no-referrer"
                className="w-9 h-9 rounded-full border object-cover cursor-pointer
                transition-all duration-300 hover:scale-110 hover:ring-2 hover:ring-blue-400 hover:shadow-md"
              />

              <span className="text-sm font-medium text-gray-800 hidden md:block">
                {user.name}
              </span>

              <button
                onClick={() => {
                  logout();
                  localStorage.removeItem("user");
                  navigate("/login");
                }}
                className="bg-black text-white px-3 py-2 rounded-lg text-sm"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="bg-black text-white px-4 py-2 rounded-lg text-sm"
            >
              Log in
            </button>
          )}
        </div>

        {/* MOBILE BUTTON (UNCHANGED) */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="md:hidden bg-white border-t px-6 py-6 space-y-4">

          <button onClick={() => scrollToSection("features")} className="block w-full text-left text-gray-600 hover:text-black">
            Features
          </button>

          <button onClick={() => scrollToSection("how-it-works")} className="block w-full text-left text-gray-600 hover:text-black">
            How It Works
          </button>

          <button onClick={() => scrollToSection("ai-section")} className="block w-full text-left text-gray-600 hover:text-black">
            AI Section
          </button>

          <button onClick={() => scrollToSection("pricing")} className="block w-full text-left text-gray-600 hover:text-black">
            Pricing
          </button>

          {/* MOBILE AUTH (UNCHANGED) */}
          {user ? (
            <button
              onClick={() => {
                logout();
                localStorage.removeItem("user");
                navigate("/login");
              }}
              className="w-full bg-black text-white py-2 rounded-lg"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => navigate("/login")}
              className="w-full bg-black text-white py-2 rounded-lg"
            >
              Log in
            </button>
          )}

        </div>
      )}
    </nav>
  );
}