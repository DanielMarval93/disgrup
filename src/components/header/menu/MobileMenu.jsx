import React from "react";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import {
  ProSidebar,
  Menu,
  MenuItem,
  SubMenu,
  SidebarContent,
} from "react-pro-sidebar";
import Social from "../../social/Social";

const menuContent = [
  {
    name: "Icy Media Agency",
    routerPath: "/home-agency",
    dropDownItems: [   {
      name: "Home",
      routerPath: "/home-agency",
    },
    {
      name: "videos",
      routerPath: "/works-masonry",
    },
    {
      name: "Noticias",
      routerPath: "/service",
    },  
    {
      name: "Ayudanos",
      routerPath: "/contact",
    },    {
      name: "Conocenos",
      routerPath: "/blog-details",
    },
    ],
  },
 
];

const MobileMenu = () => {
  return (
    <>
      <div className="ptf-offcanvas-menu__navigation">
        <ProSidebar>
          <SidebarContent>
            <Menu className="sidebar-menu_wrapper">
              {menuContent.map((item, i) => (
                <SubMenu defaultOpen='true' open="true" title={item.name} key={i}>
                  
                  {item.dropDownItems.map((val, i) => (
                    <MenuItem key={i} >
                      <Link style={{fontSize:"24px"}} to={val.routerPath}>{val.name}</Link>
                    </MenuItem>
                  ))}
                </SubMenu>
              ))}
            </Menu>
          </SidebarContent>
        </ProSidebar>
      </div>
      {/* End .ptf-offcanvas-menu__navigation */}

      <div className="ptf-offcanvas-menu__footer">

        <Social />
      </div>
      {/* End .ptf-offcanvas-menu__footer */}
    </>
  );
};

export default MobileMenu;
