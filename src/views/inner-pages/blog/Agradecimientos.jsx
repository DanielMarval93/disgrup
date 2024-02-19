import React from "react";
import { Helmet } from "react-helmet";
import CopyRight from "../../../components/footer/copyright/CopyRight";
import Footer from "../../../components/footer/Footer";
import HeaderDefault from "../../../components/header/HeaderDefault";
import YouTubeEmbed from "../../../components/youtube/youTubeEmbed";
import PortfolioSevenMasonry from "../../../components/portfolio/PortfolioSevenMasonry";



const Ayudas = () => {
  return (
    <div className="ptf-site-wrapper animsition ptf-is--blog-grid">
      <Helmet>
        <title>Videos - Agradecimientos</title>
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
                    <span className="has-accent-1"> Agradecimientos</span>{" "}
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
                          En el canal youtube de la Fundación Disgrup, cada día
                          más personas famosas, influencers, youtubers y en
                          general relevantes en cualquier disciplina, se
                          acercan, con la motivación de agradecer de todo
                          corazón, la labor y el esfuerzo que desde la Fundación
                          estamos realizando, y así también ellos estan
                          colaborando, y ponen su «granito de arena». Todos los
                          actos de buena voluntad, nos ayudan en nuestra misión,
                          de mejorar las vidas de las personas con discapacidad.
                        </p>
                        {/* <!--Spacer--> */}
                        <div
                          className="ptf-spacer"
                          style={{
                            "--ptf-xxl": "1rem",
                            "--ptf-md": "1rem",
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                  <div className="ptf-single-post__meta">
                    <YouTubeEmbed
                      videoId="XaB7dP-b2to?si=xWTZpf6ERyT2dmfd"
                      width={760}
                      height={375}
                    />
                    <div className="col-xl-8 offset-xl-2">
                      {/* <!--Post Info--> */}
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "2.5rem", "--ptf-md": "2.5rem" }}
                      ></div>
                      {/* <!--Post Content--> */}
                      <div className="ptf-single-post__content">
                        El pizzero youtuber con más de 1 millón de suscriptores,
                        nos brinda su apoyo y agradece personalmente nuestra
                        labor para conseguir un mundo mejor para el colectivo de
                        personas con discapacidad
                      </div>
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "2.5rem", "--ptf-md": "2.5rem" }}
                      ></div>
                      <h2 className="has-accent-1">Ultimos Videos</h2>

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

export default Ayudas;
