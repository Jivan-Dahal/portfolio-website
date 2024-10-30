import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link, Events, scrollSpy } from "react-scroll";

const NavBar = () => {
  const [nav, setNav] = useState(false);
  const [activeLink, setActiveLink] = useState("home");

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
      offset: -100,
    },
    {
      id: 3,
      link: "portfolio",
      offset: -100,
    },
    {
      id: 4,
      link: "experience",
      offset: -100,
    },
    {
      id: 5,
      link: "contact",
      offset: -100,
    },
  ];
  // Set up scroll events to detect the active section
  useEffect(() => {
    Events.scrollEvent.register("begin", function () {
      console.log("begin", arguments);
    });

    Events.scrollEvent.register("end", function () {
      console.log("end", arguments);
    });

    scrollSpy.update();

    return () => {
      Events.scrollEvent.remove("begin");
      Events.scrollEvent.remove("end");
    };
  }, []);
  return (
    <nav className="flex justify-between items-center px-4 w-full h-20 text-white bg-black fixed">
      <div>
        <h1 className="text-5xl font-medium ml-2 font-signature">
          Jivan Dahal
        </h1>
      </div>
      <ul className="hidden md:flex">
        {links.map(({ id, link, offset }) => (
          <li
            key={id}
            className={`px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105 duration-200 ${
              activeLink === link ? "text-blue-500 font-bold" : ""
            }`}
          >
            <Link
              to={link}
              smooth
              duration={500}
              offset={offset}
              spy
              onSetActive={() => setActiveLink(link)}
            >
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 flex md:hidden z-10 text-gray-500"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-[50vh] bg-gradient-to-b text-gray-500 from-black to-gray-800">
          {links.map(({ id, link, offset }) => (
            <li
              key={id}
              className={`px-4 py-4 text-2xl cursor-pointer capitalize text-gray-500 hover:scale-105 duration-200 ${
                activeLink === link ? "text-blue-500 font-bold" : ""
              }`}
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
                offset={offset}
                spy
                onSetActive={() => setActiveLink(link)}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};
export default NavBar;
