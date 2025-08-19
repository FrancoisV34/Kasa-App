import Welcome from "./pages/Homepage.jsx";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import Lodging from "./pages/Lodging.jsx";
import About from "./pages/About.jsx";
import Error from "./pages/Error.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Layout>
        {" "}
        <Routes>
          <Route path="/" element={<Welcome />} />
          <Route path="/logement/:logementId" element={<Lodging />} />
          <Route path="/a-propos" element={<About />}></Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </Layout>
    </Router>
  </React.StrictMode>
);
