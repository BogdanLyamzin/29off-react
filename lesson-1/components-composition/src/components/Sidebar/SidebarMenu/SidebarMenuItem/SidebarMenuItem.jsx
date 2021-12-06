import PropTypes from "prop-types";

import "./SidebarMenuItem.css";

const SidebarMenuItem = ({text, link}) => {
    return (
        <li className="sidebar-menu-item">
            <a className="sidebar-menu-link" href={link}>{text}</a>
        </li>
    )
}

export default SidebarMenuItem;

SidebarMenuItem.defaultProps = {
    link: "#"
}

SidebarMenuItem.propTypes = {
    text: PropTypes.string.isRequired,
    link: PropTypes.string
}