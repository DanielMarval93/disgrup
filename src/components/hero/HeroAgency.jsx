import React, { useState } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import ModalVideo from "react-modal-video";

const HeroAgency = () => {
  const [isOpen, setOpen] = useState(false);

  const settings = {
    dots: true,
    arrow: true,
    infinite: true,
    fade: true,
    speed: 1200,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    // adaptiveHeight: true,
  };
  return (
    <>
      <Slider {...settings}>

      <div className="ptf-showcase-image image-3">
          <div className="ptf-showcase-slide">
            <div className="container">
              <h1 className="fz-100 fz-80--sm lh-1 has-white-color">
              <span className="has-accent-1">Derrítete</span> con <br />
                Nosotros
              </h1>

              
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "3.125rem" }}
              ></div>
              <p
                className="fz-24 has-white-color"
                style={{ maxWidth: "34.375rem" }}
              >
                Creamos experiencias digitales únicas
              </p>


 
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "3.625rem" }}
              ></div>

              <div className="d-flex justify-content-center">
                {/* <!--Button--> */}
                <Link className="ptf-btn ptf-btn--primary" to="/contact" target="_self">
                
                  Ayudanos
                
                </Link>
                {/* <!--Button--> */}
                <Link
                  className="ptf-btn ptf-btn--secondary"
                  to="/service"
                  style={{ marginLeft: "2rem" }}
                >
                  Conocenos
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* End .ptf-showcase-image */}

        <div className="ptf-showcase-image image-2">
          <div className="ptf-showcase-slide">
            <div className="container">
              <h1 className="fz-100 fz-90--lg lh-1 has-white-color text-center">
                All you need <br />
                is <span className="has-accent-1">Icy Agency</span> 
              </h1>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "2.125rem" }}
              ></div>
              <p
                className="fz-24 has-white-color text-center"
                style={{ maxWidth: "34.375rem", margin: "0 auto" }}
              >
                Rompe el hielo y Contáctanos
              </p>
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "3.625rem" }}
              ></div>
              <div className="d-flex justify-content-center">

                {/* <!--Button--> */}
                <Link className="ptf-btn ptf-btn--primary" to="/contact" target="_self">
                
                  Ayudanos
                
                </Link>
                {/* <!--Button--> */}
              </div>
            </div>
          </div>
        </div>
        {/* End .ptf-showcase-image */}

        <div className="ptf-showcase-image image-1">
          <div className="ptf-showcase-slide">
            <div className="container">
              <h1 className="fz-100 fz-100--sm lh-1 has-white-color text-center">
              Te Dejaremos
              <br/>
              <span className="has-accent-3"> helado</span> 
              </h1>

              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "2.125rem" }}
              ></div>

              <p
                className="fz-24 has-white-color text-center"
                style={{ maxWidth: "34.375rem", margin: "0 auto" }}
              >
                Contáctanos sin compromiso, no mordemos
              </p>

              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "3.625rem" }}
              ></div>
              <div className="d-flex">
                {/* <!--Button--> */}
                <Link className="ptf-btn ptf-btn--primary" to="/contact" target="_self">
                
                  Contáctanos
                
                </Link>
                {/* <!--Video Button--> 
                <div
                  className="ptf-video-button"
                  onClick={() => setOpen(true)}
                  style={{
                    "--ptf-title-color": "var(--ptf-color-white)",
                    marginLeft: "2rem",
                  }}
                >
                  <a href="/" rel="nofollow">
                    <i className="lnil lnil-play"></i>
                  </a>
                  <div className="ptf-video-button__title">
                    View our <br />
                    story
                  </div>
                </div>
              */}

              </div>
            </div>
          </div>
        </div>
        {/* End .ptf-showcase-image */}
      </Slider>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="1gyTUHP6ne8"
        onClose={() => setOpen(false)}
      />
      {/* End Youtube Modal video */}
    </>
  );
};

export default HeroAgency;
