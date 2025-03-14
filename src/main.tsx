import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "./assets/css/reset.css";
import "./assets/css/colors.css";
import "./assets/css/global.css";

import { App } from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
