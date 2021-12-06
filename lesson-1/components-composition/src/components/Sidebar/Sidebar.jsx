import SidebarMenu from "./SidebarMenu";

import "./Sidebar.css";

const Sidebar = ({menuItems})=> {
    return (
        <aside>
            <div className="sidebar-header" />
            <SidebarMenu items={menuItems} />
        </aside>
    )
}

export default Sidebar;