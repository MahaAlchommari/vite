import React from "react";
import "./App.css";
import Home from "./Pages/Home";
import About from "./Pages/About";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Packages from "./Pages/Packages";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Packages" element={<Packages />} />
      </Routes>
    </Router>
  );
}

export default App;
