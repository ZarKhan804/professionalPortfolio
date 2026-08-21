import React from "react";
import { GiSpookyHouse } from "react-icons/gi";
import {
  MdWifiCalling1,
  MdOutlineMarkEmailUnread,
  MdLocalPhone,
} from "react-icons/md";
import { FiSend } from "react-icons/fi";
import { ImLocation2 } from "react-icons/im";

const HeroSection = () => {
  return (
    <>
      <section className="min-h-screen bg-[#FFF7ED] text-white flex items-center py-20 lg:py-0">
        <div className="max-w-7xl mx-auto w-full px-5 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          {/* LEFT CONTENT */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-cyan-400/10 border border-cyan-400/30 text-cyan-300 text-sm sm:text-base">
              🚀 MERN Stack Developer
            </span>

            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-black leading-tight text-gray-700">
              We Build <br />
              <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                Digital Products
              </span>
              <br />
              That Scale
            </h1>

            <p className="mt-6 text-base sm:text-lg leading-7 max-w-xl mx-auto lg:mx-0 text-black">
              Creating high-performance websites and applications with modern
              UI/UX, React, Node.js and MongoDB.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center lg:justify-start">
              <a
                href="tel:+923716236002"
                className="flex justify-center items-center gap-3 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-600 font-bold text-base sm:text-lg hover:scale-105 duration-300"
              >
                <MdWifiCalling1 className="text-2xl" />
                Free Call
              </a>

              <button className="flex justify-center items-center gap-3 px-6 py-3 rounded-xl border border-cyan-400 bg-white/10 backdrop-blur-md hover:bg-cyan-400 hover:text-black text-black font-bold text-base sm:text-lg duration-300">
                <FiSend className="text-xl text-gray-700" />
                Proposal
              </button>
            </div>
          </div>

          {/* CENTER IMAGE */}
          <div className="flex justify-center relative order-1 lg:order-2 mb-8 lg:mb-0">
            <div className="absolute w-56 h-56 sm:w-72 sm:h-72 bg-cyan-400 blur-[100px] sm:blur-[120px] opacity-40"></div>

            <div className="relative">
              <div className="absolute -top-14 sm:-top-14 lg:-top-12 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:right-16 bg-cyan-500 px-4 sm:px-6 lg:px-8 py-2 rounded-xl flex items-center gap-2 font-bold text-sm sm:text-base hover:scale-110 duration-300 transition-all shadow-xl">
                <GiSpookyHouse />
                Portfolio
              </div>

              <img
                src="/img.jpg"
                alt="developer"
                className="w-[240px] sm:w-[300px] lg:w-[280px] h-[340px] sm:h-[420px] lg:h-[450px] object-cover rounded-3xl border border-white/20 shadow-2xl hover:scale-105 duration-500"
              />
            </div>
          </div>

          {/* RIGHT CONTACT */}
          <div className="bg-cyan-500 backdrop-blur-xl mt-16 border border-cyan-300/40 rounded-3xl p-4 sm:p-5 w-full max-w-md mx-auto lg:mx-0 order-3 shadow-2xl shadow-cyan-500/20 hover:shadow-cyan-500/40 transition-all duration-500">
            {/* Heading */}
            <div className="mb-5">
              <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-gray-800">
                Ready To Build?
              </h2>

              <p className="mt-1.5 text-sm sm:text-base font-medium text-gray-700 leading-relaxed">
                Let's turn your idea into reality.
              </p>

              <div className="mt-3 h-1 w-12 rounded-full bg-white/80"></div>
            </div>

            <div className="space-y-3.5">
              {/* Email */}
              <a
                href="mailto:zaarkhan483@gmail.com"
                className="group flex items-center gap-3 p-3.5 rounded-2xl bg-white/90 border border-white/50 shadow-lg shadow-cyan-700/10 hover:bg-white hover:-translate-y-1 hover:shadow-xl transition-all duration-300 break-all"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-cyan-500 flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <MdOutlineMarkEmailUnread className="text-xl text-white group-hover:scale-110 transition-transform duration-300" />
                </div>

                <div className="min-w-0">
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-500 group-hover:text-cyan-600 transition-colors duration-300">
                    Email
                  </p>

                  <p className="mt-0.5 text-sm sm:text-base font-semibold text-gray-800 truncate sm:whitespace-normal group-hover:text-cyan-700 transition-colors duration-300">
                    zaarkhan483@gmail.com
                  </p>
                </div>
              </a>

              {/* Phone */}
              <a
                href="tel:+923716236002"
                className="group flex items-center gap-3 p-3.5 rounded-2xl bg-white/90 border border-white/50 shadow-lg shadow-cyan-700/10 hover:bg-white hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-cyan-500 flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <MdLocalPhone className="text-xl text-white group-hover:scale-110 transition-transform duration-300" />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-500 group-hover:text-cyan-600 transition-colors duration-300">
                    Phone
                  </p>

                  <p className="mt-0.5 text-sm sm:text-base font-semibold text-gray-800 group-hover:text-cyan-700 transition-colors duration-300">
                    +92 371 6236002
                  </p>
                </div>
              </a>

              {/* Location */}
              <a
                href="https://www.google.com/maps/search/?api=1&query=Islamabad+Pakistan"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-3 p-3.5 rounded-2xl bg-white/90 border border-white/50 shadow-lg shadow-cyan-700/10 hover:bg-white hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-cyan-500 flex items-center justify-center shadow-md group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  <ImLocation2 className="text-xl text-white group-hover:scale-110 transition-transform duration-300" />
                </div>

                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-500 group-hover:text-cyan-600 transition-colors duration-300">
                    Location
                  </p>

                  <p className="mt-0.5 text-sm sm:text-base font-semibold text-gray-800 group-hover:text-cyan-700 transition-colors duration-300">
                    Islamabad, Pakistan
                  </p>
                </div>
              </a>
            </div>

            {/* Bottom Badge */}
            <div className="mt-4 flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl bg-white/20 border border-white/30">
              <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>

              <span className="text-xs font-bold text-gray-800">
                Available for New Projects
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
