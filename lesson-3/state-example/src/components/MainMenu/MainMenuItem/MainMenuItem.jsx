import PropTypes from "prop-types";

import styles from "./MainMenuItem.module.css";

const MainMenuItem = ({link, text, active, onClick}) => {
    const fullClassName = active ? `${styles.link} ${styles.active}` : styles.link;
    return (
        <li>
            <a onClick={onClick} href={link} className={fullClassName}>{text}</a>
        </li>
    )
}

export default MainMenuItem;

MainMenuItem.propTypes = {
    link: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}