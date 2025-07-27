import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

import Navbar from "./components/Navbar.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Navbar />
    <main className="container mx-auto px-4 py-4">
      <App />
    </main>
  </StrictMode>
);
