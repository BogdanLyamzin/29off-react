import { useState, useEffect } from "react";

const Timer = () => {
    const [value, setValue] = useState(0);
    const [timerId, setTimerId] = useState(null);

    useEffect(()=> {
        return () => clearInterval(timerId);
    }, []);

    console.log(value);
    const start = () => {
        const id = setInterval(() => {
            setValue(prevState => {
                return prevState + 1
            });
        }, 1000);
        setTimerId(id);
    }

    const stop = () => clearInterval(timerId);

    const reset = () => {
        stop();
        setValue(0);
    }

    return (
        <div>
            <button onClick={start}>Start</button>
            <button onClick={stop}>Stop</button>
            <button onClick={reset}>Reset</button>
            <div>{value}</div>
        </div>
    )
}

export default Timer;