import React from "react";
import HeroImage from "../assets/image/profile.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";

export const Home = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          
          <FaLinkedin size={30} className="text-sky-700 hover:scale-110 duration-300" />
        </>
      ),
      href: "#",
      
    },
    {
      id: 2,
      child: (
        <>
         
          <FaGithub size={30} className="text-gray-400 hover:scale-110 duration-300" />
        </>
      ),
      href: "https://github.com/Jivan-Dahal",
    },
    {
      id: 3,
      child: (
        <>
         
          <FaInstagram size={30} className="text-red-600 hover:scale-110 duration-300" />
        </>
      ),
      href: "https://www.instagram.com/jivan_dahal__",
    },
    {
      id: 4,
      child: (
        <>
          
          <FaFacebook size={30} className="text-blue-700 hover:scale-110 duration-300" />
        </>
      ),
      href: "https://www.facebook.com/jivandahal2",
    },
    {
      id: 5,
      child: (
        <>
         
          <BsFillPersonLinesFill size={30} className="text-indigo-600 hover:scale-110 duration-300" />
        </>
      ),
      href: "https://linkdin.com",
      
    },
  ];
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black to-gray-800 pt-4  sm:pt-8"
    >
      <div className="max-w-screen-lg mx-auto mt-5 sm:mt-10 lg:mt-10 flex flex-col items-center justify-center h-full px-4 text-white md:flex-row"
       >
        <div className="flex flex-col justify-center  ">
          <h2 className="text-2xl sm:text-3xl sm:whitespace-nowrap  font-bold italic  ">
            Hello, I'm a Full Stack Developer
          </h2>
          <p className="py-4 max-w-md text-justify">
            I am committed to finding innovative solution and continuously
            experimenting to help my clients achieve their goals. I love to work
            on web application using technoligies like React,Tailwind and
            Liverwire.
          </p>
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              offset={-100}
              className="group w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer "
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300 ">
                {" "}
                <MdOutlineKeyboardArrowRight size={20} className="ml-1" />
              </span>
            </Link>
          </div>
          <div className="mt-4 mb-8 lg:hidden flex gap-4 items-center">
            <p className="font-semibold mr-1 whitespace-nowrap">Find me on:</p>
            <div className="flex space-x-3">
              {links.map(({ id, child, href }) => (
                <a
                  key={id}
                  href={href}
                  className=""
                  target="_blank"
                  rel="noreferrer"
                >
                  {child}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};
