

import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import About from "./pages/About";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoginPage from "./pages/Login";
import SignUpPage from "./pages/Signup";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Navbar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<About />} /> 

          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
