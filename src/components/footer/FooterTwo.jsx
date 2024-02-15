import React from "react";
//import FooterList from "../list/FooterList";

const FooterTwo = () => {
  return (
    <div className="row">
      <div className="col-12 col-lg-7">
        {/* <!--Animated Block--> */}
        <div className="ptf-animated-block" data-aos="fade" data-aos-delay="0">
          <div className="ptf-widget ptf-widget-contacts has-white-color">
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
      {/* End .col */}

      

      <div className="col-12 col-lg-5">
        {/* <!--Animated Block--> */}
        <div
          className="ptf-animated-block"
          data-aos="fade"
          data-aos-delay="100"
        >
          <div className="ptf-widget ptf-widget-contacts has-white-color">
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

export default FooterTwo;
