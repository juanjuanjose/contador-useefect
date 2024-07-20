import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ClickCounter from "./assets/Components/ClickCounter/ClickCounter";
import Timer from "./assets/Components/Timer/Timer";
import UserActive from "./assets/Components/UserActive/UsesrActive";
import DigitalClock from "./assets/Components/DigitalClock/DigitalClock";
import "./assets/Styles/Styles.css";


const App = () => {
  return (
    <Router>
      <div>
        <nav>
          <Link to="/ClickCounter">Click</Link>{" "}
          <Link to="/timer">Cronometro</Link>
          <Link to="/UserActive">User Active</Link>
          <Link to="/clock">Reloj Digital</Link>
        </nav>
        <Routes>
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
