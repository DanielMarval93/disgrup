import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
// import CounterTwo from "../../components/counter/CounterTwo";//
import CopyRightTwo from "../../components/footer/copyright/CopyRightTwo";
import FooterTwo from "../../components/footer/FooterTwo";
import HeaderAgency from "../../components/header/HeaderAgency";
import HeroAgency from "../../components/hero/HeroAgency";
import PortfolioTwo from "../../components/portfolio/PortfolioTwo";
//import Team from "../../components/team/Team";
//import TestimonialTwo from "../../components/testimonial/TestimonialTwo";//
import YouTubeEmbed from "../../components/youtube/youTubeEmbed";

import ListOne from "../../components/list/ListOne";
import ListTwo from "../../components/list/ListTwo";
import ListThree from "../../components/list/ListThree";
import ListFour from "../../components/list/ListFour";
import ListFive from "../../components/list/ListFive";
import ListSix from "../../components/list/ListSix";

import CookieConsent from "react-cookie-consent";


const HomeAgency = () => {
  return (
    <div className="ptf-site-wrapper animsition ptf-is--home-agency">

      <Helmet>
        <title>Fundacion Disgrup</title>
      </Helmet>
      {/* End Page SEO Content */}

      <CookieConsent
        location="bottom"
        buttonText="I agree"
        cookieName="myAppCookieConsent"
        style={{ background: "#2B373B" }}
        buttonStyle={{ color: "#4e503b", fontSize: "13px" }}
        expires={150}
      >
        This website uses cookies to enhance the user experience.
      </CookieConsent>


      <div className="ptf-site-wrapper__inner">
        <HeaderAgency />
        {/* End Header Agency */}

        <div className="ptf-main">
          <div className="ptf-page ptf-page--home-agency">
            {/*=============================================
          Start Our Hero Section howcase 3
          ============================================== */}
            <div className="ptf-showcase-3 swiper-container">
              <div className="swiper-wrapper">
                <HeroAgency />
              </div>
            </div>

            {/*=============================================
          Start Call to Counter section
          ============================================== */}
            <section>
              <div
                className="row align-items-center has-accent-1-background"
                style={{ "--bs-gutter-y": "2rem" }}
              >
                <div className="col-12">
                  {/* <!--Animated Block--> */}
                  <div
                    className="ptf-animated-block"
                    data-aos="fade"
                    data-aos-delay="0"
                  >
                    <div>
                      {/* <!--Divider--> */}
                      <div className="ptf-divider"></div>
                      
                      <div className="align-items-center">
                        <img
                          style={{ maxWidth: "150px" }}
                          alt="aef"
                          src="https://identitatcorporativa.gencat.cat/web/.content/Documentacio/descarregues/identificacio/BN/idb_c_blanc.png"
                        />
                        <img
                          style={{ maxWidth: "150px" }}
                          alt="aef"
                          src="https://ccfundacions.cat/wp-content/uploads/2019/05/logo-white.png"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                {/* End .col */}
                {/* <CounterTwo />*/}
              </div>
            </section>

            <section>
              {/* <!--Divider--> */}
              <div className="ptf-divider"></div>
            </section>
            {/* End .ptf-devider */}

            <section className="ptf-custom--3993 jarallax">
              <div className="container">
                <div className="row">
                  <div className="col-lg-5 offset-lg-7">
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "8.125rem", "--ptf-lg": "0" }}
                    ></div>
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <h6 className="fz-36 has-accent-1 text-uppercase">
                        Quienes Somos
                      </h6>
                      {/* <!--Spacer--> */}
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "1.875rem" }}
                      ></div>
                      <h3
                        className="has-black-color"
                        style={{ maxWidth: "30rem" }}
                      >
                        Tenemos las soluciones confiables que tu negocio
                        necesita.{" "}
                      </h3>
                      {/* <!--Spacer--> */}
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "5rem", "--ptf-md": "2.5rem" }}
                      ></div>
                      <p
                        className="fz-18 has-black-color"
                        style={{ maxWidth: "30rem" }}
                      >
                        En Icy Media Agency, somos un equipo de expertos en
                        marketing digital apasionados por obtener los mayores
                        resultados para nuestros clientes, y por ayudar a las
                        marcas a crecer y cumplir sus metas y objetivos.
                      </p>
                      <p
                        className="fz-18 has-black-color"
                        style={{ maxWidth: "30rem" }}
                      >
                        Nuestro lema, ser innovadores, rápidos y eficaces. Es
                        por eso que siempre estamos actualizados con las últimas
                        tendencias y tecnologías. Utilizamos nuestros
                        conocimientos y experiencia para desarrollar estrategias
                        de vanguardia y proyectos únicos, destacando por encima
                        de la competencia.
                      </p>
                    </div>
                    {/* <!--Spacer--> */}
                    <div
                      className="ptf-spacer"
                      style={{ "--ptf-xxl": "8.125rem", "--ptf-lg": "0" }}
                    ></div>
                  </div>
                </div>
              </div>
            </section>
            {/* End  Advertising Banner */}



            <section>

              <div className="container">
                <div className="row ">
                  <div className="col-xl-7 ">
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <h3 className="has-accent-1">ULTIMOS VIDEOS</h3>
                      <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "2.125rem", "--ptf-md": "4.0625rem" }}
              ></div>
                      <div>
                        <YouTubeEmbed
                          videoId="uRINHRkbhqY?si=SD8zmGBTUAo_-Mpb"
                          width={560}
                          height={315}
                        />

                        <YouTubeEmbed
                          videoId="12RBdsn4TSo?si=JXu68wX9Fezu-3Mz"
                          width={560}
                          height={315}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-5 d-none d-xl-block">
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="100"
                    >
                                    <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "5.125rem", "--ptf-md": "4.0625rem" }}
              ></div>
                      <img
                        alt="Donacion bizum"
                        src="https://i.imgur.com/7mG5f1v.jpeg"

                        style={{}}


                      />
                      <div className="has-black-color fz-90 lh-1 text-end"></div>
                    </div>
                  </div>
                </div>
              </div>

            </section>
            {/* End  Advertising Big Title */}

            

            {/*============================================}=
        Service Section
      ============================================== */}
            <section>
              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
              <div className="container">
                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <h2 className="h1 large-heading has-accent-1 important!">Disgrup ayuda a</h2>
                </div>
                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "4.375rem", "--ptf-md": "2.1875rem" }}
                ></div>
                <div
                  className="row"
                  style={{
                    "--bs-gutter-x": "10.625rem",
                    "--bs-gutter-y": " 5.3125rem",
                  }}
                >
                  <div className="col-12 col-md-6">
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="0"
                    >
                      <h2>Branding</h2>
                      {/* <!--Spacer--> */}
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "1.5625rem" }}
                      ></div>
                      {/* <!--Divider--> */}
                      <div
                        className="ptf-divider"
                        style={{ backgroundColor: "white" }}
                      ></div>
                      {/* <!--Spacer--> */}
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "3.125rem" }}
                      ></div>
                      {/* <!--Services List--> */}
                      <ListOne />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="100"
                    >
                      <h2>Paid Media</h2>
                      {/* <!--Spacer--> */}
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "1.5625rem" }}
                      ></div>
                      {/* <!--Divider--> */}
                      <div
                        className="ptf-divider"
                        style={{ backgroundColor: "white" }}
                      ></div>
                      {/* <!--Spacer--> */}
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "3.125rem" }}
                      ></div>
                      {/* <!--Services List--> */}
                      <ListTwo />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="100"
                    >
                      <h2>Marketing de Contenidos</h2>
                      {/* <!--Spacer--> */}
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "1.5625rem" }}
                      ></div>
                      {/* <!--Divider--> */}
                      <div
                        className="ptf-divider"
                        style={{ backgroundColor: "white" }}
                      ></div>
                      {/* <!--Spacer--> */}
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "3.125rem" }}
                      ></div>
                      {/* <!--Services List--> */}
                      <ListThree />
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="100"
                    >
                      <h2>Marketing en Redes Sociales</h2>
                      {/* <!--Spacer--> */}
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "1.5625rem" }}
                      ></div>
                      {/* <!--Divider--> */}
                      <div
                        className="ptf-divider"
                        style={{ backgroundColor: "white" }}
                      ></div>
                      {/* <!--Spacer--> */}
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "3.125rem" }}
                      ></div>
                      {/* <!--Services List--> */}
                      <ListFour />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="100"
                    >
                      <h2>SEO</h2>
                      {/* <!--Spacer--> */}
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "1.5625rem" }}
                      ></div>
                      {/* <!--Divider--> */}
                      <div
                        className="ptf-divider"
                        style={{ backgroundColor: "white" }}
                      ></div>
                      {/* <!--Spacer--> */}
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "3.125rem" }}
                      ></div>
                      {/* <!--Services List--> */}
                      <ListFive />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    {/* <!--Animated Block--> */}
                    <div
                      className="ptf-animated-block"
                      data-aos="fade"
                      data-aos-delay="100"
                    >
                      <h2>Desarrollo Web</h2>
                      {/* <!--Spacer--> */}
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "1.5625rem" }}
                      ></div>
                      {/* <!--Divider--> */}
                      <div
                        className="ptf-divider"
                        style={{ backgroundColor: "white" }}
                      ></div>
                      {/* <!--Spacer--> */}
                      <div
                        className="ptf-spacer"
                        style={{ "--ptf-xxl": "3.125rem" }}
                      ></div>
                      {/* <!--Services List--> */}
                      <ListSix />
                    </div>
                  </div>
                </div>
              </div>

              {/* <!--Spacer--> */}
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
            </section>

            {/*=============================================
          Start Latest Works section
          ============================================== */}
            <section>
              <div className="container">
                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <h2 className="h1 large-heading has-accent-1 d-inline-flex">
                    Ultimas Noticias
                  </h2>
                  <Link
                    className="ptf-link-with-arrow fz-18 text-uppercase d-none d-lg-inline-flex"
                    to="/blog-grid"
                    style={{ marginLeft: "5.625rem" }}
                  >
                    + Noticias{" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      style={{ height: "1em" }}
                      viewBox="0 0 17 17"
                    >
                      <path d="M16 .997V10h-1V2.703L4.683 13l-.707-.708L14.291 1.997H6.975v-1H16z" />
                    </svg>
                  </Link>
                </div>
                {/* End .ptf-animated-block */}

                {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "2.25rem" }}
                ></div>

                {/* <!--Animated Block--> */}
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >

                <div className="row ptf-custom--3991 jarallax">
                  <div className="ptf-isotope-grid col-lg-7">
                    <PortfolioTwo />
                  </div>
                                  {/* <!--Spacer--> */}
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "4.25rem" }}
                ></div>
                  {/* End .ptf-isotope-grid */}
                  </div>
                  </div>
                  </div>
            </section>

            {/*=============================================
          Start Our Crew/Team section
          ============================================== 
            <section className="ptf-custom--1569">
              {/* <!--Spacer--> 
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "8.75rem", "--ptf-md": "4.375rem" }}
              ></div>
              <div className="container">
                {/* <!--Animated Block--> 
                <div
                  className="ptf-animated-block"
                  data-aos="fade"
                  data-aos-delay="0"
                >
                  <h2 className="h1 large-heading has-accent-1">Nuestro Equipo</h2>
                </div>
                {/* <!--Spacer--> 
                <div
                  className="ptf-spacer"
                  style={{ "--ptf-xxl": "5.625rem", "--ptf-md": "2.8125rem" }}
                ></div>
              </div>
              <div className="container">
                <div className="ptf-team-member-grid ptf-team-member-grid--4-columns">
                  <Team />
                </div>
              </div>
              {/* <!--Spacer--> 
              <div
                className="ptf-spacer"
                style={{ "--ptf-xxl": "10rem", "--ptf-md": "5rem" }}
              ></div>
            </section>

          */}

  

            {/*=============================================
          Start Footer section
          ============================================== */}
            <footer className="ptf-footer ptf-footer--style-3">
              <div className="container">
                <div className="row">
                  <div className="col-xl-10 offset-xl-2">
                    <div className="ptf-footer__top">
                      <FooterTwo />
                    </div>
                    {/* End .ptf-footer__top */}

                    <div className="ptf-footer__bottom">
                      <CopyRightTwo />
                    </div>
                    {/* End .ptf-footer__bottom */}
                  </div>
                </div>
              </div>
            </footer>
          </div>
          {/* End .ptf-page */}
        </div>
        {/* End .ptf-main */}
      </div>
      {/* End .ptf-site-wrapper__inner */}
    </div>
  );
};

export default HomeAgency;
