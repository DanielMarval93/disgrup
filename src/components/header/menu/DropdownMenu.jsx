import React from "react";
import { Link } from "react-router-dom";

const menuContent = [
  {
    name: "Home",
    activeClass: "sf-with-ul",
    routerPath: "/home-agency",
    menuClass: "current-menu-item",
    dropDownItems: [
    ],
  },
  {
    name: "Portfolio",
    activeClass: "",
    menuClass: "",
    routerPath: "/works-masonry",
    dropDownItems: [
    ],
  },
  {
    name: "Contact",
    activeClass: "",
    menuClass: "",
    routerPath: "/contact",
    dropDownItems: [
    ],
  },
  {
    name: "About us",
    activeClass: "",
    menuClass: "two-columns",
    routerPath: "/about-us",
    dropDownItems: [
    ],
  },
  {
    name: "Services",
    activeClass: "",
    menuClass: "",
    routerPath: "/service",
    dropDownItems: [
      {
        name: "Service Details",
        routerPath: "/service-details",
      },
      {
        name: "Service Details",
        routerPath: "/service-details",
      },
            {
        name: "Service Details",
        routerPath: "/service-details",
      },
      {
        name: "Service Details",
        routerPath: "/service-details",
      },
      {
        name: "Service Details",
        routerPath: "/service-details",
      },
    ],
  },
];

const DropdownMenu = () => {
  return (
    <ul className="sf-menu">
      {menuContent.map((item, i) => (
        <li className={`menu-item-has-children ${item.menuClass}`} key={i}>
          <Link to={item.routerPath}>
            <span>{item.name}</span>
          </Link>
{/* Conditionally render the dropdown only if there are items */}
{item.dropDownItems.length > 0 && (
            <ul className="sub-menu mega">
              {item.dropDownItems.map((val, j) => (
                <li key={j}>
                  <Link to={val.routerPath}>
                    {" "}
                    <span>{val.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default DropdownMenu;
