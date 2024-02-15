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
        <title>Videos - Ayudas</title>
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
                  Nuestras<span className="has-accent-1"> ayudas</span>{" "}
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
                        En la Fundación Disgrup ayudamos a personas con
                        discapacidad con grados diversos. Las ayudas que
                        proporcionamos son totalmente adaptadas a cada persona,
                        estudiando su caso y analizando de que mejor forma
                        podemos ayudarle, siempre intentando que la ayuda sea
                        efectiva y mejore sustancialemente su situación personal
                        y su día a día.
                      </p>
                      {/* <!--Spacer--> */}
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "2.5rem", "--ptf-md": "2.5rem" }}
                      ></div>
                    </div>
                  </div>
                </div>
                <div className="ptf-single-post__meta">
                  <YouTubeEmbed
                    videoId="12RBdsn4TSo?si=p3nNHQlMXBkZuEp6"
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
                      En la Fundación Disgrup ayudamos a personas con
                      Discapacidad, en este caso ayudamos a Bayane y su família.
                    </div>

                    
                    <PortfolioSevenMasonry/>
                  </div>
                </div>
              </div>
            </header>

            {/* <!--Post Media--> */}
            <div className="ptf-single-post__media">
              <div
                className="container-xxl"
                style={{ position: "relative", width: "100%", height: "auto" }}
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
      </div>  </div>
  );
};

export default Ayudas;
