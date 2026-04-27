import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/Login";
import SignUpPage from "./pages/Signup";
import Dashboard from "./pages/Dashboard";

import About from "./pages/company/About";
import PrivacyPolicy from "./pages/company/PrivacyPolicy";
import Contact from "./pages/company/Contact";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";

// 🔥 Wrapper to access location
function AppContent() {
  const location = useLocation();

  // Hide footer on dashboard
  const hideFooter = location.pathname === "/dashboard";

  return (
    <>
      {/* Navbar stays */}
      <Navbar />

      <Routes>
        {/* PUBLIC ROUTES */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />

        {/* PROTECTED ROUTE */}
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
      </Routes>

      {/* ✅ Footer conditionally rendered */}
      {!hideFooter && <Footer />}
    </>
  );
}

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <AppContent />
      </BrowserRouter>
    </div>
  );
}

export default App;