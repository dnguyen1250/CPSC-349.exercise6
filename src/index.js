import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./App.css";
import "./calculator.css";

import App from "./App";
import Calculator from "./calculator";

const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
    <Calculator />
  </StrictMode>
);
