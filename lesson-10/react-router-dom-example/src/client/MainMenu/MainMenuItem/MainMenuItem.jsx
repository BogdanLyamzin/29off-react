import {NavLink} from "react-router-dom";

import styles from "./MainMenuItem.module.css";

const MainMenuItem = ({link, text})=> {
    return (
        <li className={styles.item}>
            <NavLink exact className={styles.link} activeClassName={styles.active} to={link}>
                {text}
            </NavLink>
        </li>
    )
}

export default MainMenuItem