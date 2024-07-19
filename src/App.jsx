import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import './App.css'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './App.css';
import Home from  '.';
import ClickCounter from  '.';
import Timer from  '.';
import UserActive from  '.';
import DigitalClock from '.';


   
const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/counter">Contador</Link>{" "}
          <Link to="/timer">Cronometro</Link>
          <Link to="/login">Login</Link>
          <Link to="/clock">Reloj</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/timer" element={<Timer />} />
          <Route path="/login" element={<Login />} />
          <Route path="/clock" element={<DigitalClock />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
