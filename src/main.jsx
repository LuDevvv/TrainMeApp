import { HashRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import AppRouter from "./routes/index";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <AppRouter />
    </HashRouter>
  </React.StrictMode>
);
