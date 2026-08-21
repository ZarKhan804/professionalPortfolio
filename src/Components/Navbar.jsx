import React, { useEffect, useState } from "react";
import {
  LuSunMoon,
  LuMenu,
  LuX,
} from "react-icons/lu";
import { MdOutlineDarkMode } from "react-icons/md";

const Navbar = () => {
  const [menu, setmenu] = useState(false);
  const [scroll, setscroll] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const handlescroll = () => {
    if (window.scrollY > 50) {
      setscroll(true);
    } else {
      setscroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handlescroll);

    return () => {
      window.removeEventListener("scroll", handlescroll);
    };
  }, []);

  return (
    <>
      <div
        className={`sticky top-0 left-0 w-full z-50 transition-all duration-500 ${
          scroll
            ? "bg-black shadow-xl py-4"
            : "bg-white shadow-md py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto h-[70px] flex justify-between items-center px-5 lg:px-10">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <img
              src="/logo.jpg"
              alt="Zar Khan Logo"
              className="h-[50px] w-[50px] rounded-md object-cover"
            />

            <div>
              <h1 className="font-bold text-2xl lg:text-3xl animate-logo">
                Zar Khan
              </h1>

              <p className="text-[#27CDCF] text-sm">
                Full Stack Developer
              </p>
            </div>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-10">

            <li className="font-medium text-[#06B6D4] hover:text-cyan-400 relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-cyan-400 after:duration-300 hover:after:w-full">
              <a href="#home">Home</a>
            </li>

            <li className="font-medium text-[#06B6D4] hover:text-cyan-400 relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-cyan-400 after:duration-300 hover:after:w-full">
              <a href="#about">About</a>
            </li>

            <li className="font-medium text-[#06B6D4] hover:text-cyan-400 relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-cyan-400 after:duration-300 hover:after:w-full">
              <a href="#skills">Skills</a>
            </li>

            <li className="font-medium text-[#06B6D4] hover:text-cyan-400 relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-cyan-400 after:duration-300 hover:after:w-full">
              <a href="#services">Services</a>
            </li>

            <li className="font-medium text-[#06B6D4] hover:text-cyan-400 relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-cyan-400 after:duration-300 hover:after:w-full">
              <a href="#projects">Projects</a>
            </li>

            {/* Contact - Same Page */}
            <li className="font-medium text-[#06B6D4] hover:text-cyan-400 relative after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-cyan-400 after:duration-300 hover:after:w-full">
              <a href="#contact">Contact</a>
            </li>

          </ul>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-3">

            <button
              className="border py-3 px-4 rounded-md text-white bg-[#22D3EE] hover:scale-110 duration-300"
              onClick={() => setmenu(!menu)}
            >
              {menu ? (
                <MdOutlineDarkMode />
              ) : (
                <LuSunMoon />
              )}
            </button>

            <button className="bg-[#22D3EE] text-white px-8 py-2 rounded-md hover:scale-110 duration-300">
              Resume
            </button>

          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-3xl text-cyan-500"
            onClick={() => setMobileMenu(!mobileMenu)}
          >
            {mobileMenu ? <LuX /> : <LuMenu />}
          </button>

        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-500 ${
            mobileMenu
              ? "max-h-[500px] py-5"
              : "max-h-0"
          } bg-white shadow-lg`}
        >

          <ul className="flex flex-col items-center gap-6">

            <li>
              <a
                href="#home"
                onClick={() => setMobileMenu(false)}
              >
                Home
              </a>
            </li>

            <li>
              <a
                href="#about"
                onClick={() => setMobileMenu(false)}
              >
                About
              </a>
            </li>

            <li>
              <a
                href="#skills"
                onClick={() => setMobileMenu(false)}
              >
                Skills
              </a>
            </li>

            <li>
              <a
                href="#services"
                onClick={() => setMobileMenu(false)}
              >
                Services
              </a>
            </li>

            <li>
              <a
                href="#projects"
                onClick={() => setMobileMenu(false)}
              >
                Projects
              </a>
            </li>

            {/* Contact - Same Page */}
            <li>
              <a
                href="#contact"
                onClick={() => setMobileMenu(false)}
              >
                Contact
              </a>
            </li>

            {/* Mobile Buttons */}
            <div className="flex gap-3">

              <button
                className="border py-3 px-4 rounded-md text-white bg-[#22D3EE]"
                onClick={() => setmenu(!menu)}
              >
                {menu ? (
                  <MdOutlineDarkMode />
                ) : (
                  <LuSunMoon />
                )}
              </button>

              <button className="bg-[#22D3EE] text-white px-8 py-2 rounded-md">
                Resume
              </button>

            </div>

          </ul>

        </div>
      </div>
    </>
  );
};

export default Navbar;