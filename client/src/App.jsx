import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";

import { useEffect } from "react";
import LandingPage from "./pages/LandingPage";
import LoginPage from "./pages/Login";
import SignUpPage from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import Notes from "./pages/Notes";
import Tasks from "./pages/Tasks";
import StudyTracker from "./pages/StudyTracker";
import AIMentor from "./pages/AIMentor";
import StudyPlan from "./pages/StudyPlan";

import About from "./pages/company/About";
import PrivacyPolicy from "./pages/company/PrivacyPolicy";
import Contact from "./pages/company/Contact";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";


function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [pathname]);

  return null;
}
// 🔥 Wrapper to access location
function AppContent() {
  const location = useLocation();

  // Hide footer on dashboard
  const hideFooter = 
  location.pathname === "/dashboard"||
   
  location.pathname === "/dashboard/notes"||
  location.pathname === "/dashboard/studytracker"||
  location.pathname === "/dashboard/aimentor"||
  location.pathname === "/dashboard/studyplan"||
  location.pathname === "/dashboard/tasks";


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
        <Route
          path="/dashboard/notes"
          element={
            <ProtectedRoute>
              <Notes />
            </ProtectedRoute>
          }
        />
        <Route
          path="/dashboard/tasks"
          element={
            <ProtectedRoute>
              <Tasks />
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard/studytracker"
          element={
            <ProtectedRoute>
              <StudyTracker/>
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard/aimentor"
          element={
            <ProtectedRoute>
              <AIMentor/>
            </ProtectedRoute>
          }
        />

        <Route
          path="/dashboard/studyplan"
          element={
            <ProtectedRoute>
              <StudyPlan/>
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
        <ScrollToTop />
        <AppContent />
      </BrowserRouter>
    </div>
  );
}

export default App;