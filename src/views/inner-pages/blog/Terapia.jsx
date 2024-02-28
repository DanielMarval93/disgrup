import React from "react";
import { Helmet } from "react-helmet";
import CopyRight from "../../../components/footer/copyright/CopyRight";
import Footer from "../../../components/footer/Footer";
import HeaderDefault from "../../../components/header/HeaderDefault";
import YouTubeEmbed from "../../../components/youtube/youTubeEmbed";
import PortfolioAgradecimientos from "../../../components/portfolio/PortfolioAgradecimientos";

const Terapia = () => {
  return (
    <div className="ptf-site-wrapper animsition ptf-is--blog-grid">
      <Helmet>
        <title>Moonex - Bog Post Details</title>
      </Helmet>
      {/* End Page SEO Content */}
      <div className="ptf-site-wrapper__inner">
        <HeaderDefault />
        {/* End  HeaderHomeDefault */}

        <div className="main">
          <div
            className="ptf-animated-block"
            data-aos="fade"
            data-aos-delay="0"
          >
            <article className="ptf-single-post">
              {/* <!--Post Header--> */}
              <header className="ptf-single-post__header ptf-single-post__header--style-1">
                <div className="container-xxl">
                  <h1 className="ptf-single-post__title">
                    Terapia Ocupacional
                  </h1>
                  <h1>
                    {" "}
                    <span className="has-accent-1">con Candi</span>
                  </h1>
                  <div className="row">
                    <div className="col-xl-8 offset-xl-2">
                      <div className="ptf-single-post__content">
                        {/* <!--Spacer--> */}
                        <div
                          className="ptf-spacer"
                          style={{ "--ptf-xxl": "2rem", "--ptf-md": "2.5rem" }}
                        ></div>
                        <p>
                          En la Fundación Disgrup nos preocupamos por la salud
                          mental y física de todo el colectivo de personas con
                          discapacidad, pero también de cualquier persona. Es
                          por ello, que en nuestra sección de vídeos «Terapia
                          ocupacional con Candi», que encontrarás en nuestro
                          canal youtube, te proponemos una serie de ejercicios
                          de Terapia ocupacional, para que puedas realizar en
                          casa o en cualquier lugar.
                        </p>
                        {/* <!--Spacer--> */}
                        <div
                          className="ptf-spacer"
                          style={{
                            "--ptf-xxl": "2.5rem",
                            "--ptf-md": "2.5rem",
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="ptf-single-post__meta">
                    <YouTubeEmbed
                      videoId="qiMeao6QX4E?si=wrH6hwzVBS69Xbm4"
                      width={960}
                      height={455}
                    />
                    <div className="col-xl-8 offset-xl-2">
                      {/* <!--Post Info--> */}
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "2.5rem", "--ptf-md": "2.5rem" }}
                      ></div>
                      {/* <!--Post Excerpt--> */}
                      <div className="ptf-single-post__excerpt">
                        ▶ Nuestra compañera Candi nos trae un nuevo
                        "Challenge", el nº 10 en Terapia Ocupacional.
                      </div>

                      <PortfolioAgradecimientos />
                    </div>
                  </div>
                </div>
              </header>

              {/* <!--Post Media--> */}
              <div className="ptf-single-post__media">
                <div
                  className="container-xxl"
                  style={{
                    position: "relative",
                    width: "100%",
                    height: "auto",
                  }}
                ></div>
              </div>
            </article>
          </div>
        </div>
        {/* End .main */}

        {/* <!--Footer--> */}
        <footer className="ptf-footer ptf-footer--style-1">
          <div className="container-xxl">
            <div className="ptf-footer__top has-black-color">
              <Footer />
            </div>
            <div className="ptf-footer__bottom">
              <CopyRight />
            </div>
          </div>
        </footer>
      </div>{" "}
    </div>
  );
};

export default Terapia;
