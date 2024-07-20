import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { Link } from 'react-router-dom'
import './App.css';

import Home from "./assets/Components/Home/Home";
import ClickCounter from "./assets/Components/ClickCounter/ClickCounter";
import Timer from "./assets/Components/Timer/Timer";
import UserActive from "./assets/Components/Login/Login";
import DigitalClock from "./assets/Components/DigitalClock/DigitalClock";
import "./assets/Styles/styles.css";


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
          <Route path="/clickcounter" element={<ClickCounter/>} />
          <Route path="/timer" element={<Timer />} />
          <Route path="/useractive" element={<UserActive />} />
          <Route path="/clock" element={<DigitalClock />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
