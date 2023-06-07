import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import "./assets/styles/reset.css";
import "./assets/styles/default.css";
import "./assets/styles/font.css";
import "./assets/styles/grid.css";
import "./assets/styles/custom.css";
import App from "./App.jsx";
import "./index.css";
import "./assets/styles/responsive.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
