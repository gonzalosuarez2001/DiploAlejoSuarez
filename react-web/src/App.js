import React from "react";

import "./styles/app.css";

import { Home } from "./pages/Home";
import { Contacto } from "./pages/Contacto";
import { Sabores } from "./pages/Sabores";
import { Locales } from "./pages/Locales";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/Contacto" element={<Contacto />} />
          <Route exact path="/Sabores" element={<Sabores />} />
          <Route exact path="/Locales" element={<Locales />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
