import { Component } from "react";
import PropTypes from "prop-types";

import styles from "./ReverseButton.module.css";

class ReverseButton extends Component {
    state = {
        active: false,
        index: 0
    }

    handleClick = ()=> {
        this.setState(state => {
            return {
                active: !state.active
            }
        })
    }

    render(){
        const {active} = this.state;
        const {handleClick} = this;
        console.log(this.state)
        const fullClassName = active ? styles.activeBtn : styles.btn;
        return (
            <button onClick={handleClick} className={fullClassName}>Тест</button>
        )
    }
}

export default ReverseButton;

ReverseButton.propTypes = {
    firstText: PropTypes.string.isRequired,
    secondText: PropTypes.string.isRequired
}
