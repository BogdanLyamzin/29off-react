import {Component} from "react";
import PropTypes from "prop-types";

import MainMenuItem from "./MainMenuItem";

import styles from "./MainMenu.module.css";

class MainMenu extends Component {

    static defaultProps = {
        items: []
    }

    state = {
        activeIndex: 0
    }

    handleClick = (index)=> {
        this.setState({activeIndex: index})
    }

    render(){
        const {items} = this.props;
        const {activeIndex} = this.state;
        const {handleClick} = this;

        const elements = items.map((item, idx) => 
        <MainMenuItem onClick={() => handleClick(idx)} key={item.id} {...item} active={idx === activeIndex} />)

        return (
            <ul className={styles.menu}>
               {elements}
            </ul>
        )
    }
}

export default MainMenu;

MainMenu.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        link: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
    }))
}