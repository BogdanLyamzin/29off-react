import { Component } from "react";

/*
1. Создать функцию Старт.
2. Повесить ее как обработчик на кнопку Start.
3. Создать функцию Стоп
4. Повесить функцию Стоп на кнопку Stop.
*/

class Timer extends Component {
    state = {
        value: 0,
        timerId: null
    }
    componentDidMount(){
        document.addEventListener("keydown", this.onEscape)
    }
    componentWillUnmount(){
        document.removeEventListener("keydown", this.onEscape)
        this.stop();
    }

    onEscape = (e)=>{
        if(e.code === "ESC"){
            this.stop()
        }
    }

    start = ()=> {
        const id = setInterval(()=>{
            console.log("timer")
            this.setState(({value}) => {
                
                return {
                    value: value + 1
                }
            })
        }, 1000);
        this.setState({timerId: id});
    }

    stop = ()=> {
        const {timerId} = this.state;
        clearInterval(timerId);
    }

    reset = () => {
        this.stop();
        this.setState({value: 0})
    }

    render(){
        const {value} = this.state;
        const {start, stop, reset} = this;

        return (
            <div>
                <button onClick={start}>Start</button>
                <button onClick={stop}>Stop</button>
                <button onClick={reset}>Reset</button>
                <div>{value}</div>
            </div>
        )
    }
}

export default Timer;