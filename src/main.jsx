import React from "react";
import { createRoot } from "react-dom/client";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next"
import GlowoptLandingPage from "./App.jsx";
import "./index.css";


createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <GlowoptLandingPage />
    <Analytics />
  </React.StrictMode>
);