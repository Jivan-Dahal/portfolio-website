import React from "react";

export const Footer = () => {
  return (
    <div className="bg-gradient-to-b from-black to-gray-800 text-white">
      <footer
        className="  "
        id="footer"
      >
        <div className="px-6 mx-auto py-8">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="footer-col">
              <h4 className="text-white text-xl font-merriweather font-bold">
                About <span className="text-primary">Us</span>
              </h4>
              <p className=" text-justify font-inter mt-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit .
                Tempora id veniam aliquid eos necessitatibus sequi...
                <a href="#home" className="text-primary hover:text-white">
                  see more..
                </a>
              </p>
            </div>
            <div className="footer-col">
              <h4 className="text-white text-xl font-merriweather font-bold">
                Useful <span className="text-primary">Links</span>
              </h4>
              <ul className="mt-2 font-semibold font-inter">
                <li>
                  <a
                    href="#home"
                    className="text-white hover:text-gray-300 block  hover:bg-gray-700  "
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#service"
                    className="text-white hover:text-gray-300 block  py-1 hover:bg-gray-700  "
                  >
                    Service
                  </a>
                </li>
                <li>
                  <a
                    href="#project"
                    className="text-white hover:text-gray-300 block  py-1 hover:bg-gray-700  "
                  >
                    Project
                  </a>
                </li>
                <li>
                  <a
                    href="#review"
                    className="text-white hover:text-gray-300 block py-1 hover:bg-gray-700 "
                  >
                    Review
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-white hover:text-gray-300 block py-1 hover:bg-gray-700 "
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4 className="text-white text-xl font-merriweather font-bold">
                Important <span className="text-primary">Links</span>
              </h4>
              <ul className="mt-2 font-semibold font-inter">
                <li>
                  <a
                    href="#"
                    className=" text-white hover:text-gray-300 block   hover:bg-gray-700  "
                  >
                    Privacy & Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-gray-300 block py-1  hover:bg-gray-700  "
                  >
                    Terms & Condition
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-white hover:text-gray-300 block py-1 hover:bg-gray-700  "
                  >
                    Home
                  </a>
                </li>
              </ul>
            </div>
            <div className="footer-col">
              <h4 className="text-white text-xl font-merriweather font-bold">
                Follow <span className="text-primary">Us</span>
              </h4>
              <div className="social-links mt-2 flex flex-wrap gap-2">
                <a href="https://www.facebook.com">
                  <i className="w-8 h-8 bx bxl-facebook-circle bx-md text-gray-300 hover:text-white"></i>
                </a>
                <a href="https://www.instagram.com">
                  <i className="w-8 h-8 bx bxl-instagram bx-md text-gray-300 hover:text-white"></i>
                </a>
                <a href="https://www.github.com">
                  <i className="w-8 h-8 bx bxl-github bx-md text-gray-300 hover:text-white"></i>
                </a>
              </div>
              <div className="mt-4">
                <p className="text-gray-500 pb-4">Join Our Newsletter</p>
                <form
                  action="#"
                  className="flex flex-col sm:flex-row flex-wrap text-white"
                >
                  <input
                    className="bg-[#2B2E3C] w-full sm:w-2/3 p-2 focus:border-yellow-500 rounded-lg"
                    type="email"
                    placeholder="email@example.com"
                  />
                  <input
                    type="submit"
                    value="Subscribe"
                    className="bg-primary text-white p-2 w-full sm:w-auto rounded-lg mt-2 sm:mt-0"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-slate-700 text-white font-merriweather font-semibold">
          <div className="md:text-left text-center container mx-auto py-4 px-6">
            <p className="mb-0 text-center">
              &copy;
              <span className="inline-block md:ml-1">Copyright</span>
              <span className="inline-block md:ml-1">Jivan Dahal</span>
              <script>document.write(new Date().getFullYear());</script>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};
