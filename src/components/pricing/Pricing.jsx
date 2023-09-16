import React from "react";
import { Link } from "react-router-dom";

const pricingContent = [
  {
    planName: "PRESS KIT",
    price: "250",
    priceDuration: "Desde",
    pirceDescriptions: "10% taxed will include after make price",
    pricingFeatures: ["Presenta tu propuesta musical de manera adecuada. Cautiva y convence para que apuesten por ti. Cierra acuerdos de patrocinio y publicidad, muestra una marca sólida a las agencias de management y booking, y seduce con tu perfil y tu presentación"  ],
    badge: "",
    badgeClass: "",
    delayAnimation: "0",
  },
  {
    planName: "GASTROBOMBA",
    price: "69",
    priceDuration: "Desde",
    pirceDescriptions: "10% taxed will include after make price",
    pricingFeatures: [
      "Full Design & Development",
      "Installation",
      "Support Lifetime",
    ],
    badge: "Popular",
    badgeClass: "badge",
    delayAnimation: "100",
  },
  {
    planName: "SOCIAL MEDIA MANAGER",
    price: "99",
    priceDuration: "Desde",
    pirceDescriptions: "10% taxed will include after make price",
    pricingFeatures: [
      "Full Design & Development",
      "Installation",
      "Support Lifetime",
      "SEO/Marketing Include",
    ],
    badge: "",
    badgeClass: "",
    delayAnimation: "200",
  },{
    planName: "WEB + POSICIONAMIENTO SEO",
    price: "99",
    priceDuration: "Desde",
    pirceDescriptions: "10% taxed will include after make price",
    pricingFeatures: [
      "Full Design & Development",
      "Installation",
      "Support Lifetime",
      "SEO/Marketing Include",
    ],
    badge: "",
    badgeClass: "",
    delayAnimation: "0",
  },
  
];

const Pricing = () => {
  return (
    <>
      {pricingContent.map((val, i) => (
        <div className="col-xl-6 col-lg-6" key={i} style={{marginTop: "20px"}}>
          {/* <!--Animated Block--> */}
          <div
            className="ptf-animated-block h-100"
            data-aos="fade"
            data-aos-delay={val.delayAnimation}
          >
            {/* <!--Pricing Table--> */}
            <div className="ptf-pricing-table h-100">
              <div className={val.badgeClass}>{val.badge}</div>
              <div className="ptf-pricing-table__header">
                <h4 className="ptf-pricing-table__title">{val.planName}</h4>
              </div>
              <div className="ptf-pricing-table__price">
                <span className="period">{val.priceDuration} </span>
                <span className="currency">€</span>
                <span className="price">{val.price}</span>
              </div>
              <div className="ptf-pricing-table__description">
            
              </div>
              <div className="ptf-pricing-table__content">
                <ul>
                  {val.pricingFeatures.map((feature, i) => (
                    <li key={i}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="ptf-pricing-table__action">
                {/* <!--Button--> */}
                <Link
                  className="ptf-btn ptf-btn--primary ptf-btn--block"
                  to="/contact"
                >
                  Start My Project Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Pricing;
