import React from "react";

export const Contact = () => {
  return (
    <div
      name="contact"
      className="min-h-screen w-full bg-gradient-to-b from-black to-gray-800 text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me</p>
        </div>
        <div className="flex justify-center items-center">
            <form action="" className="flex flex-col w-full md:w-1/2">
                <input type="text" name="name" placeholder="Enter your name" required className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" />
                <input type="email" name="email" id="email" placeholder="Enter your email" required className=" my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" />
                <textarea name="message" id="message" placeholder="Enter your message here" rows={10} required className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"></textarea>
                <button disabled className="text-white bg-gradient-to-b from-cyan-500 to-blue-600 px-4 p-2 rounded-md font-semibold my-8 mx-auto hover:scale-110 duration-300">Let's talk</button>
            </form>
        </div>
      </div>
    </div>
  );
};
