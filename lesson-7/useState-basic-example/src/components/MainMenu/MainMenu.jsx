import { useState } from "react";
import PropTypes from "prop-types";

import MainMenuItem from "./MainMenuItem";

import styles from "./MainMenu.module.css";

const MainMenu = ({ items }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleClick = (index) =>{
        if(index !== activeIndex) {
            setActiveIndex(index);
        }
    } 
    
    const elements = items.map((item, idx) =>
        <MainMenuItem onClick={() => handleClick(idx)} key={item.id} {...item} active={idx === activeIndex} />)

    return (
        <ul className={styles.menu}>
            {elements}
        </ul>
    )

}

export default MainMenu;

MainMenu.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    }))
}