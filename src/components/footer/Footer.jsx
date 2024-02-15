import React from "react";




/*const linkList = [
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

const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
   
};*/



const Footer = () => {
  return (
    <div className="row">
<div className="col-12 col-lg-7">
        {/* <!--Animated Block--> */}
        <div className="ptf-animated-block" data-aos="fade" data-aos-delay="0">
          <div className="ptf-widget ptf-widget-contacts has-black-color">
            <ul>
              <li>
                <span className="has-accent-1">Contacto:</span>
                <p > Calle Aragón 61, 3º 2ª, 08015 Barcelona (Spain)</p>
                <span></span>
                <p >info@Disgrup.org </p>
                <span></span>
                <p >+34 932 265 050 </p>
                <span></span>
                <p>CIF: G65195430</p>
              </li>
            </ul>
          </div>
        </div>
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

<div className="col-12 col-lg-5">
        {/* <!--Animated Block--> */}
        <div
          className="ptf-animated-block"
          data-aos="fade"
          data-aos-delay="100"
        >
          <div className="ptf-widget ptf-widget-contacts has-black-color">
          <ul>   
          <li>
                <span className="has-accent-1">Legal:</span>
                <p > Aviso legal</p>
                <span></span>
                <p >Política de cookies</p>
                <span></span>
                <p >Política de privacidad</p>
                <span></span>
                <p>Política de devoluciones y reembolsos</p>
              </li>
          </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
