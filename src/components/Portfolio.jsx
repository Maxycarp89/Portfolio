import React from "react";
import Chilly from "../assets/Chilly.png";
import ChillyDetail from "../assets/ChillyDetail.png";
import Chillyhome from "../assets/Chillyhome.png";
import ChillyStore from "../assets/ChillyStore.png";

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: Chilly,
    },
    {
      id: 2,
      src: ChillyDetail,
    },
    {
      id: 3,
      src: Chillyhome,
    },
    {
      id: 4,
      src: ChillyStore,
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

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <a href="https://chilly-production.up.railway.app/" target ='_blank' className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </a>
                <a href="https://github.com/Maxycarp89/PF-Chilly" target ='_blank'  className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
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
