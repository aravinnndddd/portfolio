import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full px-4 py-2  bg-black/90 sticky top-0 shadow lg:px-8 lg:py-3 backdrop-blur-sm backdrop-saturate-150 z-[10]">
      <div className="container flex flex-wrap items-center justify-between font-semibold mx-auto text-white ">
        {/* Logo */}
        <Link to="/">
          <a className="mr-4 block hover:cursor-none py-1.5 text-xl text-white  font-bold">
            ARAVIND.
          </a>
        </Link>

        {/* Hamburger Button */}
        <button
          onClick={toggleMenu}
          className="relative ml-auto h-10 w-10 rounded-lg text-white lg:hidden focus:outline-none"
          type="button"
        >
          <span className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              {isOpen ? (
                // X icon when open
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                // Hamburger icon when closed
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </span>
        </button>

        {/* Nav Links */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } w-full lg:flex lg:w-auto transition-all`}
        >
          <ul className="bg-white/10 p-2 rounded-lg md:bg-inherit md:flex md:flex-row md:gap-4 md:mt-4 lg:mt-0  md:items-center lg:gap-8">
            <li className="border-b-2 my-2 md:m-0 w-[15px] md:w-fit  md:border-transparent">
              <a
                href="#artworks"
                className="md:text-sm  hover:cursor-none text-lg hover:bg-white/20 p-3 rounded-[20px]  transition-all ease duration-200 "
              >
                Artworks
              </a>
            </li>

            <li className="border-b-2 my-2 md:m-0 w-[15px] md:w-fit md:border-transparent">
              <a
                href="#skills"
                className="md:text-sm text-lg hover:cursor-none hover:bg-white/20 p-3 rounded-[20px]  transition-all ease duration-200 "
              >
                Skills
              </a>
            </li>

            <li className="border-b-2 my-2 md:m-0  w-[15px] md:w-fit  md:border-transparent">
              <Link to="/projects">
                <a className=" hover:cursor-none md:text-sm text-lg hover:bg-white/20 p-3 rounded-[20px] transition-all ease duration-200 ">
                  Projects
                </a>
              </Link>
            </li>

            <li className="border-b-2 my-2 md:m-0 w-[15px] md:w-fit md:border-transparent">
              <a
                href="#contact"
                className="md:text-sm text-lg hover:cursor-none hover:bg-white/20 p-3 rounded-[20px] transition-all ease duration-200 "
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
