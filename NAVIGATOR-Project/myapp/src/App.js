import React from 'react';
import {  Route, Routes, Link } from 'react-router-dom';
import Home from './Component/Home';
import About from './Component/About';
import Local from './Component/Local';

function App() {
  return (
      <div>
        {/* Navigation Links */}
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/local">Local</Link></li>
          </ul>
        </nav>

        {/* Route Definitions */}
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/local" element={<Local/>} />
        </Routes>
      </div>
  );
}

export default App;
