import React from "react";
import ReactTooltip from "react-tooltip";
import { Link } from "react-router-dom";

const portfolioContent = [
  {
    cat: "Web + Redes",
    title: "Cathalo Box",
    date: "2023",
    routerLink: "https://www.cathalobox.com/",
    imgPopup: "work-1",
    dataId: "work-1",
  },
  {
    cat: "Web",
    title: "Dvine Models",
    date: "2022",
    routerLink: "https://www.dvinemodels.com/",
    imgPopup: "work-2",
    dataId: "work-2",
  },
  {
    cat: "Redes",
    title: "La Perla Restaurante",
    date: "2022",
    routerLink: "https://www.instagram.com/laperlaclub_bcn/",
    imgPopup: "work-3",
    dataId: "work-3",
  },
  {
    cat: "Redes",
    title: "Bocachica Mambo Beach",
    date: "2021",
    routerLink: "https://www.instagram.com/bocachicamambobeach/",
    imgPopup: "work-4",
    dataId: "work-4",
  },
  {
    cat: "Redes + Web",
    title: "Hummer BCN",
    date: "2022",
    routerLink: "https://www.instagram.com/hummerbcn/",
    imgPopup: "work-5",
    dataId: "work-5",
  },
  {
    cat: "Redes + Web",
    title: "Partybus BCN",
    date: "2022",
    routerLink: "https://www.instagram.com/partybusbcn/",
    imgPopup: "work-6",
    dataId: "work-6",
  },
  {
    cat: "Web/SEO + Ads",
    title: "Lockstocks",
    date: "2020",
    routerLink: "https://liquidacionstocks.es/",
    imgPopup: "work-7",
    dataId: "work-7",
  },
];

const PortfolioTwo = () => {
  return (
    <>
      <div className=" grid-item ">
        {/* <!--Portfolio Item--> */}
        {portfolioContent.map((val, i) => (
          <article
            className="ptf-work ptf-work--style-4"
            data-tip
            data-for={val.dataId}
            key={i}
          >
            <Link className="ptf-work__link" to={`${val.routerLink}`}></Link>
            <ReactTooltip
              id={val.dataId}
              place="right"
              type="dark"
              effect="float"
            >
              <div className="poup-link">
                <img
                  src={`assets/img/portfolio/grid/${val.imgPopup}.png`}
                  alt="popup"
                />
              </div>
            </ReactTooltip>
            <div className="ptf-work__category">{val.cat}</div>
            <h4 className="ptf-work__title">{val.title}</h4>
            <div className="ptf-work__date">{val.date}</div>
          </article>
        ))}
      </div>
      {/* End .grid-item */}
      <div></div>
      {/* End .grid-item */}
    </>
  );
};

export default PortfolioTwo;
