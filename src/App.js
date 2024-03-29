import React from "react";
import "./app.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Covid from "./pages/covid/covid";

import Mainsectiontwo from "./pages/mainsectiontwo/Mainsectiontwo";
import About from "./pages/about/About";
import Sidebar from "./pages/sidebar/Sidebar";
import Home from "./pages/home/Home";
import Monkeypox from "./pages/Monkeypox/Monkeypox";
export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/Covid" element={<Covid />} />
          <Route path="/Monkeypox" element={<Monkeypox />} />
          <Route path="/Mainsectiontwo" element={<Mainsectiontwo />} />
          <Route path="/About" element={<About />} />
          <Route path="/Sidebar" element={<Sidebar />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}
