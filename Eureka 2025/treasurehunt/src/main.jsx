import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import ProtectedPage from "./ProtectedPage";
import FinalPage from "./FinalPage";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/protected" element={<ProtectedPage />} />
        <Route path="/final" element={<FinalPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);

