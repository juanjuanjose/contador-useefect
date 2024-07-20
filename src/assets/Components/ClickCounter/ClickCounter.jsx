import { useState, useEffect } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);
    const incrementCount = () => {
    setCount(count + 1);
    };



    return (
        <>
            <div>
                <h1>Número de clics: {count}</h1>
                <button onClick={incrementCount}>Haz clic</button>
            </div>
        </>
    );
};

export default Counter;
