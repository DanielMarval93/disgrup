import React from "react";
import { Helmet } from "react-helmet";
import CopyRight from "../../../components/footer/copyright/CopyRight";
import Footer from "../../../components/footer/Footer";
import HeaderDefault from "../../../components/header/HeaderDefault";
import YouTubeEmbed from "../../../components/youtube/youTubeEmbed";
import PortfolioSevenMasonry from "../../../components/portfolio/PortfolioSevenMasonry";

const Ejercicios = () => {
  return (
    <div className="ptf-site-wrapper animsition ptf-is--blog-grid">
      <Helmet>
        <title>Videos - Ejercicios</title>
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
                    Ejercicios Cognitivos
                  </h1>
                  <h1>
                    {" "}
                    <span className="has-accent-1">con Guille</span>
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
                          por ello, que en nuestra sección de vídeos «Ejercicios
                          cognitivos con Guille», que encontrarás en nuestro
                          canal youtube, te proponemos una serie de ejercicios
                          de estimulación cognitiva, con diferentes propuestas
                          muy entretenidas y hasta divertidas. Ralizando estos
                          ejerciocios de forma regular, estarás en plena forma.
                          Atrévete!!
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
                      videoId="ZKbz7tRC_2w?si=2lTON9y56idxeXNr"
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
                      <div className="ptf-single-post__content">
                        Os traemos un nuevo vídeo y sección sobre ejercicios
                        cognitivos, para que podáis mejorar vuestras capacidades
                        y habilidades, en esta ocasión sobre la Atención, estar
                        atentos para encontrar las diferencias porque el tiempo
                        corre!!
                      </div>

                      <PortfolioSevenMasonry />
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

export default Ejercicios;
