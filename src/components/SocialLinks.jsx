import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

import { BsFillPersonLinesFill } from "react-icons/bs";

export const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          Linkedin
          <FaLinkedin size={30} className="text-sky-800" />
        </>
      ),
      href: "#",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Github
          <FaGithub size={30} className="text-gray-800" />
        </>
      ),
      href: "https://github.com/Jivan-Dahal",
    },
    {
      id: 3,
      child: (
        <>
          Instagram
          <FaInstagram size={30} className="text-red-600" />
        </>
      ),
      href: "https://www.instagram.com/jivan_dahal__",
    },
    {
      id: 4,
      child: (
        <>
          Facebook
          <FaFacebook size={30} className="text-blue-800" />
        </>
      ),
      href: "https://www.facebook.com/jivandahal2",
    },
    {
      id: 5,
      child: (
        <>
          Resume
          <BsFillPersonLinesFill size={30} className="text-gray-700" />
        </>
      ),
      href: "#",
      style: "rounded-br-md",
    },
  ];

  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({id, child, href, style}) => (
          <li key={id} className={"flex justify-between items-center w-40 h-14 px-4 bg-gray-500 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300" + " " + style}>
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              target='_blank'
              rel='noreferrer'
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
