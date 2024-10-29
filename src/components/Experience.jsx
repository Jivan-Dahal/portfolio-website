import React from "react";
import html from "../assets/experience/html.png";
import css from "../assets/experience/css.png";
import js from "../assets/experience/js.png";
import wordpress from "../assets/experience/wordpress.png";
import tailwind from "../assets/experience/tailwind.png";
import laravel from "../assets/experience/Laravel.png";
import react from "../assets/experience/react.png";
import GitHub from "../assets/experience/github.png";
import android from "../assets/experience/android.png";

export const Experience = () => {
  const tools = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src:js,
      title: "JAVASCRIPT",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: react,
      title: "REACT",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: laravel,
      title: "LARAVEL",
      style: "shadow-red-500",
    },
    {
      id: 6,
      src: tailwind,
      title: "TAILWIND",
      style: "shadow-sky-400",
    },
    {
      id: 7,
      src: GitHub,
      title: "GitHub",
      style: "shadow-gray-400",
    },
    {
      id: 8,
      src: wordpress,
      title: "WordPress",
      style: "shadow-cyan-400",
    },
    {
      id: 8,
      src: android,
      title: "Android Studio",
      style: "shadow-blue-400",
    },
  ];
  return (
    <div
      name="experience"
      className="min-h-screen w-full bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Experience
          </p>
          <p className="py-6">These are the technology I've worked with </p>
        </div>

        <div className="w-full grid sm:grid-cols-2 md:grid-cols-3 gap-8 text-center px-12 sm:px-0 ">
          {tools.map(({ id, src , title, style }) => (
            <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}>
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
