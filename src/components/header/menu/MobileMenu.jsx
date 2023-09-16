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
    name: "Home",
    routerPath: "/home-agency",
    dropDownItems: [
    ],
  },
  {
    name: "Portafolio",
    dropDownItems: [

    ],
  },
  {
    name: "Contacto",
    dropDownItems: [
    ],
  },

  {
    name: "Servicios",
    dropDownItems: [
      {
        name: "Home Agency",
        routerPath: "/home-agency",
      },
      {
        name: "Home Minimal",
        routerPath: "/home-minimal",
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
                <SubMenu title={item.name} key={i}>
                  {item.dropDownItems.map((val, i) => (
                    <MenuItem key={i}>
                      <Link to={val.routerPath}>{val.name}</Link>
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
