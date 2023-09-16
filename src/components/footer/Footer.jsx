import React from "react";
import { Link } from "react-router-dom";

const linkList = [
  {
    itemName: "Faqs",
    link: "/",
  },
  {
    itemName: "Term & Conditions",
    link: "/",
  },
  {
    itemName: "Privacy Policy",
    link: "/",
  },
  {
    itemName: "Help",
    link: "/",
  },
  {
    itemName: "Affiliate",
    link: "/",
  },
  {
    itemName: "Services",
    link: "/",
  },
];

const Product = [
  {
    itemName: "Works",
    link: "/",
  },
  {
    itemName: "About",
    link: "/",
  },
  {
    itemName: "News",
    link: "/",
  },
  {
    itemName: "Contact",
    link: "/",
  },
];

const Footer = () => {
  return (
    <div className="row">
      <div className="col-12 col-xl-6">
        {/* <!--Animated Block--> */}
        <div className="ptf-animated-block" data-aos="fade" data-aos-delay="0">
          <div
            className="ptf-footer-heading has-black-color"
            style={{ maxWidth: "37.5rem" }}
          >
              Impulsa tu negocio al maximo nivel.
          </div>
          <div className="ptf-footer-heading has-black-color">
            Contacta con &nbsp;
            <Link
              className="has-accent-1 text-decoration-underline"
              to="/contact"
            >
              Nosotros!
            </Link>
          </div>
          </div>
          </div>
          {/*direccion*/}
          
        <div className="col-12 col-xl-6">
          <a className="fz-40 has-black-color" href="tel:34622063782">+34 (622) 06-37-82</a>
          <br/>
          <a className="fz-40 has-black-color" href="mailto:info@icymediagency.es">
            info@icymediagency.es
          </a>
        </div>
      
    {/*<div className="col-12 col-md-6 col-xl-3">
        {/* <!--Animated Block--> 
        <div
          className="ptf-animated-block"
          data-aos="fade"
          data-aos-delay="100"
        >
          <div className="ptf-widget ptf-widget-links has-black-color">
            <h4 className="ptf-widget-title">Links</h4>
            <ul>
              {linkList.map((val, i) => (
                <li key={i}>
                  <a href={val.link}>{val.itemName}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="col-12 col-md-6 col-xl-3">
        {/* <!--Animated Block--> 
        <div
          className="ptf-animated-block"
          data-aos="fade"
          data-aos-delay="200"
        >
          <div className="ptf-widget ptf-widget-text">
            <h4 className="ptf-widget-title">Product</h4>
            <div className="ptf-widget ptf-widget-links has-black-color">
              <ul>
                {Product.map((val, i) => (
                  <li key={i}>
                    <a href={val.link}>{val.itemName}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    */}
    </div>
  );
};

export default Footer;
