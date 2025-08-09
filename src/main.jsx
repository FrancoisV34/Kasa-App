import Welcome from "./pages/Homepage.jsx";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Lodging from "./pages/Lodging.jsx";
import About from "./pages/About.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Welcome />
            </Layout>
          }
        />
        <Route
          path="/logement/:logementId"
          element={
            <Layout>
              <Lodging />
            </Layout>
          }
        />
        <Route
          path="/a-propos"
          element={
            <Layout>
              <About />
            </Layout>
          }
        ></Route>
      </Routes>
    </Router>
  </React.StrictMode>
);
