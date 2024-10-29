import React from "react";
import TravelAgency from "../assets/portfolio/travel_agency.png";
import Cafe from "../assets/portfolio/cafe.png";
import Ecommerce from "../assets/portfolio/Capture.JPG";
import ImageCompressor from "../assets/portfolio/image.png";
import BloodBank from "../assets/portfolio/bloodapp.jpg";
import PortfolioWeb from "../assets/portfolio/portfolioweb.png";

export const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: TravelAgency,
      title: "Travel Agency",
    },
    {
      id: 2,
      src: Cafe,
      title: "Cafe",
    },
    {
      id: 3,
      src: Ecommerce,
      title: "Ecommerce",
    },
    {
      id: 4,
      src: BloodBank,
      title: "Blood Donation App",
    },
    {
      id: 5,
      src: ImageCompressor,
      title: "Image Compressor App",
    },
    {
      id: 6,
      src: PortfolioWeb,
      title: "Portfolio Website",
    },
  ];
  return (
    <div
      name="portfolio"
      className="min-h-screen  w-full bg-gradient-to-b from-black to-gray-800 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-4">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0 ">
          {portfolios.map(({ id, src, title }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg ">
              <div className="w-full h-[200px]  flex items-center justify-center">
                <img
                  src={src}
                  alt=""
                  className="object-contain w-full h-full hover:scale-105 duration-200"
                />
                
              </div>
              <div>
              <p className="text-center italic font-semibold text-gray-400">{title}</p>
              </div>

              <div className="flex justify-center items-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
