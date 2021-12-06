import { nanoid } from "nanoid";
import PropTypes from "prop-types";

import SidebarMenuItem from "./SidebarMenuItem";

import "./SidebarMenu.css";

const SidebarMenu = ({items}) => {
    
    // const elements = items.map(({id, ...props}) => <SidebarMenuItem key={id} {...props} />)

    const elements = items.map(item => <SidebarMenuItem key={item.id} {...item} />)

    // const elements = items.map(item => <SidebarMenuItem 
    //     key={item.id} text={item.text} link={item.link} />)

//     const elements = items.map(item => <li key={nanoid()} className="sidebar-menu-item">
//     <a className="sidebar-menu-link" href={item.link}>{item.text}</a>
// </li>)

//     const elements = items.map(item => <li key={item.id} className="sidebar-menu-item">
//     <a className="sidebar-menu-link" href={item.link}>{item.text}</a>
// </li>)

    return (
        <ul className="sidebar-menu">
            {elements}
            {/* <li className="sidebar-menu-item">
                <a className="sidebar-menu-link" href="#">Факультеты</a>
            </li> */}
        </ul>
    )
}

export default SidebarMenu;

SidebarMenu.defaultProps = {
    items: []
};

SidebarMenu.propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
        text: PropTypes.string.isRequired,
        link: PropTypes.string
    }).isRequired)
}