import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Route, Routes } from "react-router";
import ProfileUI from "./app/profile/Profile.tsx";
import { init } from "@plausible-analytics/tracker";

if (import.meta.env.VITE_PLAUSIBLE_URL && import.meta.env.VITE_SITE_URL) {
  init({
    domain: import.meta.env.VITE_SITE_URL,
    endpoint: `https://${import.meta.env.VITE_PLAUSIBLE_URL}/api/event`,
  });
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/app/profile" element={<ProfileUI />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
