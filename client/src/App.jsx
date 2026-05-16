import { BrowserRouter,Routes,Route,useLocation} from "react-router-dom";

import {  useEffect, useState } from "react";


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

import Documentation from "./pages/resources/Documentation";
import Tutorials from "./pages/resources/Tutorials";
import Blog from "./pages/resources/Blog";
import Community from "./pages/resources/Community";

import Roadmap from "./pages/product/Roadmap";
import Changelog from "./pages/product/Changelog";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProtectedRoute from "./components/ProtectedRoute";

import FloatingAIButton from "./components/globalAI/FloatingAIButton";

import FloatingAIPanel from "./components/globalAI/FloatingAIPanel";

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

  // Floating AI
  const [isOpen, setIsOpen] =
    useState(false);

  const [messages, setMessages] =
    useState(() => {
      const savedMessages =
        localStorage.getItem(
          "floating-ai-messages"
        );

      return savedMessages
        ? JSON.parse(savedMessages)
        : [
            {
              id: 1,
              sender: "ai",
              text:
                "Hello 👋 I’m Orbit AI. Ask me anything about placements, DSA, DBMS, React, or interview preparation.",
            },
          ];
    });

  const hideGlobalAI =
    location.pathname === "/dashboard/aimentor";

  // Hide footer on dashboard
  const hideFooter = 
  location.pathname === "/dashboard"||
   
  location.pathname === "/dashboard/notes"||
  location.pathname === "/dashboard/studytracker"||
  location.pathname === "/dashboard/aimentor"||
  location.pathname === "/dashboard/studyplan"||
  location.pathname === "/dashboard/tasks";

  // Save Floating AI Messages
useEffect(() => {
  localStorage.setItem(
    "floating-ai-messages",
    JSON.stringify(messages)
  );
}, [messages]);


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
        <Route path="/documentation" element={<Documentation />} />
        <Route path="/tutorials" element={<Tutorials />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/communtiy" element={<Community />} />
        <Route path="/roadmap" element={<Roadmap />} />
        <Route path="/changelog" element={<Changelog />} />
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

      {/* Footer */}
      {!hideFooter && <Footer />}

      {/* Global Floating AI */}
      {!hideGlobalAI && (
        <>
          {/* Floating AI Panel */}
          <FloatingAIPanel
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            messages={messages}
            setMessages={setMessages}
          />

          {/* Floating AI Button */}
          <FloatingAIButton
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          />
        </>
      )}
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