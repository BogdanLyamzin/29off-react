import { Component } from "react";
import {createPortal} from "react-dom";

import styles from "./Modal.module.css";

const modalRoot = document.getElementById("modal-root");

class Modal extends Component {

    componentDidMount(){
        window.addEventListener("keydown", this.close)
    }

    componentWillUnmount(){
        window.removeEventListener("keydown", this.close)
    }

    close = (e)=> {
        if(e.code === "Escape"){
            return this.props.closeModal()
        }
        const {currentTarget, target} = e;
        if(currentTarget === target) {
           this.props.closeModal()
        }
    }

    render() {
        const {children} = this.props;
        const {close} = this;
        return createPortal((
                <div className={styles.overlay} onClick={close}>
                <div className={styles.modal}>
                    <span className={styles.close} onClick={close}>X</span>
                    {children}
                </div>
            </div>
            ), modalRoot)
    }
}

export default Modal;
