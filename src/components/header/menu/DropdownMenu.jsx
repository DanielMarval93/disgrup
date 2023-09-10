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
    name: "Blog",
    activeClass: "",
    menuClass: "",
    dropDownItems: [
      {
        name: "Blog Grid",
        routerPath: "/blog-grid",
      },
      {
        name: "Blog Masonry",
        routerPath: "/blog-masonry",
      },
      {
        name: "Blog Sidebar",
        routerPath: "/blog-sidebar",
      },
      {
        name: "Blog Details",
        routerPath: "/blog-details",
      },
      {
        name: "Blog Details Sidebar",
        routerPath: "/blog-details-sidebar",
      },
    ],
  },
  {
    name: "Pages",
    activeClass: "",
    menuClass: "two-columns",
    dropDownItems: [
      {
        name: "About Us",
        routerPath: "/about-us",
      },
      {
        name: "About Me",
        routerPath: "/about-me",
      },
      {
        name: "Services",
        routerPath: "/service",
      },
      {
        name: "Service Details",
        routerPath: "/service-details",
      },
      {
        name: "Pricing",
        routerPath: "/pricing",
      },
      {
        name: "Team",
        routerPath: "/team",
      },
      {
        name: "FAQ",
        routerPath: "/faq",
      },
      {
        name: "Contact",
        routerPath: "/contact",
      },
      {
        name: "Page 404",
        routerPath: "/404",
      },
      {
        name: "Coming Soon",
        routerPath: "/coming-soon",
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
