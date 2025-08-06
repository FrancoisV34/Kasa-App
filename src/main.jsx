import { StrictMode } from "react";
import "./index.css";
import Accueil from "./pages/Accueil.jsx";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route path="/" element={<Accueil />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
