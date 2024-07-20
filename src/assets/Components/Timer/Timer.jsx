import React, { useState, useEffect, useRef } from "react";

const Timer = () => {
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const intervalRef = useRef(null);

    useEffect(() => {
    document.title = `Seconds: ${seconds}`;
    }, [seconds]);

    useEffect(() => {
        if (isActive) {
        intervalRef.current = setInterval(() => setSeconds(prev => prev + 1), 1000);
        } else {
        clearInterval(intervalRef.current);
        }
        return () => clearInterval(intervalRef.current);
    }, [isActive]);

    const handleStart = () => setIsActive(true);
    const handlePause = () => setIsActive(false);
    const handleReset = () => {
    setIsActive(false);
    setSeconds(0);
  };

    return (
        <div>
        <h1>Temporizador: {seconds}</h1>
        <button onClick={handleStart}>Iniciar</button>
        <button onClick={handlePause}>Pausar</button>
        <button onClick={handleReset}>Resetear</button>
        </div>
    );
};

export default Timer;
