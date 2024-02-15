import React from "react";
import { Link } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Masonry from "react-masonry-css";
import YouTubeEmbed from "../youtube/youTubeEmbed";

const breakpointColumnsObj = {
  default: 2,
  1100: 2,
  768: 2,
  500: 1,
};

const portfolioMenu = ["1", "2", "3"];

const portfolioContent = [
  {
    tabContent: [
      {
        img: "work-1",
        meta: "Diseño Web",
        title: "Cathalo Box",
        route: "https://www.cathalobox.com/",
      },
      {
        img: "work-2",
        meta: "Diseño Web",
        title: "Dvine Models",
        route: "https://www.dvinemodels.com/",
      },
      {
        img: "work-3",
        meta: "Redes",
        title: "La Perla Restaurante",
        route: "https://www.instagram.com/laperlaclub_bcn/",
      },
      {
        img: "work-4",
        meta: "Redes",
        title: "Bocachica Mambo Beach",
        route: "https://www.instagram.com/bocachicamambobeach/",
      },
      {
        img: "work-5",
        meta: "Redes, Web",
        title: "Hummer BCN",
        route: "https://www.instagram.com/hummerbcn/",
      },
      {
        img: "work-6",
        meta: "Redes, Web",
        title: "Partybus BCN",
        route: "https://www.instagram.com/partybusbcn/",
      },
    ],
  },
  {
    tabContent: [
      {
        img: "work-1",
        meta: "Diseño Web",
        title: "Cathalo Box",
        route: "https://www.cathalobox.com/",
      },
      {
        img: "work-2",
        meta: "Diseño Web",
        title: "Dvine Models",
        route: "https://www.dvinemodels.com/",
      },
      {
        img: "work-5",
        meta: "Diseño Web",
        title: "Hummer BCN",
        route: "https://www.hummerbcn.com/",
      },
      {
        img: "work-6",
        meta: "Diseño Web",
        title: "Partybus BCN",
        route: "https://partybusbcn.com/",
      },
    ],
  },
  {
    tabContent: [
      {
        img: "work-3",
        meta: "Redes",
        title: "La Perla Restaurante",
        route: "https://www.instagram.com/laperlaclub_bcn//",
      },
      {
        img: "work-4",
        meta: "Redes",
        title: "Bocachica Mambo Beach",
        route: "https://www.instagram.com/bocachicamambobeach/",
      },
      {
        img: "work-5",
        meta: "Diseño Web",
        title: "Hummer BCN",
        route: "https://www.instagram.com/hummerbcn/",
      },
      {
        img: "work-6",
        meta: "Diseño Web",
        title: "Partybus BCN",
        route: "https://www.instagram.com/partybusbcn/",
      },
    ],
  },
];

const PortfolioSevenMasonry = () => {
  return (
    <>
      <Tabs>
        {/* <!--Animated Block--> */}

        {/* <!--Spacer--> */}
        <div
          className="ptf-spacer"
          style={{ "--ptf-xxl": "6.25rem", "--ptf-md": "3.125rem" }}
        ></div>

        {portfolioContent.map((item, i) => (
          <TabPanel key={i}>
            {/* {/* <!--Animated Block--> */}

            <div
              className="ptf-animated-block"
              data-aos="fade"
              data-aos-delay="0"
            >
              <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid ptf-isotope-grid portfolio-isotope"
                columnClassName="my-masonry-grid_column"
              >
                {item.tabContent.map((singleItem, i) => (
                  <article className="ptf-work ptf-work--style-1" key={i}>
                    <div className="ptf-work__media">
                      <Link
                        className="ptf-work__link"
                        to={singleItem.route}
                      ></Link>
                    <YouTubeEmbed
                      videoId="XaB7dP-b2to?si=xWTZpf6ERyT2dmfd"
                      width={560}
                      height={315}
                    />
                    </div>
                    <div className="ptf-work__meta">
                      <div className="ptf-work__category">
                        {singleItem.meta}
                      </div>
                      <h4 className="ptf-work__title ">
                        <Link to={singleItem.route}>{singleItem.title}</Link>
                      </h4>
                    </div>
                  </article>
                ))}
                {/* End .col */}
              </Masonry>
            </div>

            {/* End portfolio */}
          </TabPanel>
        ))}
                <div className="ptf-animated-block" data-aos="fade" data-aos-delay="0">
          <TabList className="ptf-filters ptf-filters--style-1">
            {portfolioMenu.map((item, i) => (
              <Tab className="filter-item " key={i}>
                {item}
              </Tab>
            ))}
          </TabList>
        </div>
      </Tabs>
    </>
  );
};

export default PortfolioSevenMasonry;
