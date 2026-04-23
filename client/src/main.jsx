import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AuthProvider } from "./context/AuthContext"; 
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="254333794264-6vda1hhimhoi3r12hs1ufrtkvgvgqv7i.apps.googleusercontent.com">
      
      
      <AuthProvider>
        <App />
      </AuthProvider>

    </GoogleOAuthProvider>
  </StrictMode>
);