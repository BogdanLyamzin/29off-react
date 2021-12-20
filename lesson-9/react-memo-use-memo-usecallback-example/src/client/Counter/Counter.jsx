import {useState, useMemo} from "react";

const calc = (value) => {
    console.log("calc");
    return value ** 2;
}

const Counter = ()=> {
    const [count, setCount] = useState(0);
    const [active, setActive] = useState(false);

    const increaseCount = ()=> {
        setCount(prevState => prevState + 1);
    }

    const toggleActive = ()=> {
        setActive(prevState => !prevState)
    }

    const result = useMemo(()=>calc(count), [count]);
    // const result = calc(count);

    const style = {color: active ? "red": ""}

    return (
        <div>
            <h2 style={style} onClick={toggleActive}>Counter</h2>
            <div>{result}</div>
            <button onClick={increaseCount}>Увеличить</button>
        </div>
    )
}

export default Counter;