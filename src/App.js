

import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from './Component09/Layout';
import Pets from './Component09/Pets';
import Services from './Component09/Services';
import Home from './Component09/Home';



function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />} />
          <Route path="Pets" element={<Pets />} />
          <Route path="Services" element={<Services />} />
          <Route path="Home" element={<Home />} />
          
        </Routes>
      </BrowserRouter>

      
    </div>
  );
}

export default App;
