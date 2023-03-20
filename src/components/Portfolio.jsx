import React from "react";
import Chilly from "../assets/Chilly.png";
import ChillyDetail from "../assets/ChillyDetail.png";
import Chillyhome from "../assets/Chillyhome.png";
import DataWebNav from "../assets/data-web-nav.png";
import DataWebCentrally from "../assets/data-web-centrally.png"
import DataWebPlan from "../assets/data-web-plan.png"

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: Chilly,
      link: "https://chilly-production.up.railway.app/",
      link2: "https://github.com/Maxycarp89/PF-Chilly",
    },
    {
      id: 2,
      src: ChillyDetail,
      link: "https://chilly-production.up.railway.app/",
      link2: "https://github.com/Maxycarp89/PF-Chilly",
    },
    {
      id: 3,
      src: Chillyhome,
      link: "https://chilly-production.up.railway.app/",
      link2: "https://github.com/Maxycarp89/PF-Chilly",
    },
    {
      id: 4,
      src: DataWebNav,
      link: "https://dataanalyticsweb.netlify.app/",
      link2: "https://github.com/Maxycarp89/DATA-WEB",
    },
    {
      id: 5,
      src: DataWebCentrally,
      link: "https://dataanalyticsweb.netlify.app/",
      link2: "https://github.com/Maxycarp89/DATA-WEB",
    },
    {
      id: 6,
      src: DataWebPlan,
      link: "https://dataanalyticsweb.netlify.app/",
      link2: "https://github.com/Maxycarp89/DATA-WEB",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 p-12 sm:px-0">
          {portfolios.map(({ id, src,link,link2 }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href={link} target ='_blank' rel="noreferrer" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </a>
                <a href= {link2} target ='_blank' rel="noreferrer" className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>  );
};

export default Portfolio;
