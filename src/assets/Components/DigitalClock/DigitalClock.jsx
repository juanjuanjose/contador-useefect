import React, { useState, useEffect } from "react";

const DigitalClock = () => {
  const [time, setTime] = useState(() => new Date().toLocaleTimeString());

  useEffect(() => {
    const updateClock = () => setTime(new Date().toLocaleTimeString());
    const intervalId = setInterval(updateClock, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="clock">
      <h1>Reloj digital</h1>
      <h2>{time}</h2>
    </div>
  );
};

export default DigitalClock;
