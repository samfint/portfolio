import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Navbar from "./components/Navbar.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <div className="min-h-screen w-full bg-[#020617] relative">
      <div
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `radial-gradient(circle 500px at 50% 300px, rgba(16,185,129,0.35), transparent)`,
        }}
      />
      <div className="relative z-10">
        <Navbar />
        <App />
      </div>
    </div>
  </StrictMode>
);
