import { useEffect } from "react";
import { createPortal } from "react-dom";

import styles from "./Modal.module.css";

const modalRoot = document.getElementById("modal-root");

const Modal = ({ closeModal, children }) => {

    useEffect(() => {
        window.addEventListener("keydown", close);

        return () => window.removeEventListener("keydown", close);
    }, []);

    const close = (e) => {
        if (e.code === "Escape") {
            return closeModal()
        }
        const { currentTarget, target } = e;
        if (currentTarget === target) {
            closeModal()
        }
    }

    return createPortal((
        <div className={styles.overlay} onClick={close}>
            <div className={styles.modal}>
                <span className={styles.close} onClick={close}>X</span>
                {children}
            </div>
        </div>
    ), modalRoot)
}

export default Modal;
