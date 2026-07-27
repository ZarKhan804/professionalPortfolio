import React from "react";

import { GiSpookyHouse } from "react-icons/gi";
import { MdWifiCalling1 } from "react-icons/md";
import { FiSend } from "react-icons/fi";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";

const HeroSection = () => {
  return (
    <section
      className="
    min-h-screen
    bg-gradient-to-br
    from-slate-900
    via-[#111827]
    to-cyan-950
    text-white
    flex
    items-center
    "
    >
      <div
        className="
      max-w-7xl
      mx-auto
      px-6
      grid
      lg:grid-cols-3
      gap-10
      items-center
      "
      >
        {/* LEFT CONTENT */}

        <div className="lg:col-span-1">
          <span
            className="
          inline-flex
          items-center
          gap-2
          px-5
          py-2
          rounded-full
          bg-cyan-400/10
          border
          border-cyan-400/30
          text-cyan-300
          "
          >
            🚀 MERN Stack Developer
          </span>

          <h1
            className="
          mt-8
          text-5xl
          lg:text-6xl
          font-black
          leading-tight
          "
          >
            We Build
            <br />
            <span
              className="
            bg-gradient-to-r
            from-cyan-400
            to-blue-500
            bg-clip-text
            text-transparent
            "
            >
              Digital Products
            </span>
            <br />
            That Scale
          </h1>

          <p
            className="
          mt-6
          text-slate-300
          text-lg
          leading-8
          "
          >
            Creating high-performance websites and applications with modern
            UI/UX, React, Node.js and MongoDB.
          </p>

          {/* Buttons */}

          <div className="flex flex-wrap gap-4 mt-8">
            <button
              className="
            flex
            items-center
            gap-3
            px-6
            py-3
            rounded-xl
            bg-cyan-500
            hover:bg-cyan-600
            font-bold
            text-lg
            hover:scale-105
            duration-300
            "
            >
              <MdWifiCalling1 className="text-2xl" />
              Free Call
            </button>

            <button
              className="
            flex
            items-center
            gap-3
            px-6
            py-3
            rounded-xl
            border
            border-cyan-400
            bg-white/10
            backdrop-blur-md
            hover:bg-cyan-400
            hover:text-black
            font-bold
            text-lg
            duration-300
            "
            >
              <FiSend className="text-xl" />
              Proposal
            </button>
          </div>
        </div>

        {/* CENTER IMAGE */}

        <div
          className="
        flex
        justify-center
        relative
        "
        >
          <div
            className="
          absolute
          w-72
          h-72
          bg-cyan-400
          blur-[120px]
          opacity-40
          "
          ></div>

          <div className="relative">
            <div
              className="
            absolute
            -top-5
            -right-5
            bg-cyan-500
            px-5
            py-2
            rounded-full
            flex
            items-center
            gap-2
            font-bold
            shadow-xl
            "
            >
              <GiSpookyHouse />
              Portfolio
            </div>

            <img
              src="/img.jpg"
              alt="developer"
              className="
            w-[280px]
            h-[450px]
            object-cover
            rounded-3xl
            border
            border-white/20
            shadow-2xl
            hover:scale-105
            duration-500
            "
            />
          </div>
        </div>

        {/* RIGHT CONTACT */}

        <div
          className="
        bg-white/10
        backdrop-blur-xl
        border
        border-white/20
        rounded-3xl
        p-6
        "
        >
          <h2
            className="
          text-2xl
          font-black
          "
          >
            Ready To Build?
          </h2>

          <p
            className="
          text-slate-300
          mt-2
          mb-6
          "
          >
            Let's turn your idea into reality.
          </p>

          <div
            className="
          space-y-4
          "
          >
            <div
              className="
            flex
            gap-4
            items-center
            bg-cyan-500
            p-4
            rounded-2xl
            "
            >
              <MdOutlineMarkEmailUnread className="text-3xl" />

              <div>
                <p className="font-bold">Email</p>

                <p className="text-sm">zaarkhan483@gmail.com</p>
              </div>
            </div>

            <div
              className="
            flex
            gap-4
            items-center
            bg-cyan-500
            p-4
            rounded-2xl
            "
            >
              <MdLocalPhone className="text-3xl" />

              <div>
                <p className="font-bold">Phone</p>

                <p className="text-sm">+92 3716236002</p>
              </div>
            </div>

            <div
              className="
            flex
            gap-4
            items-center
            bg-cyan-500
            p-4
            rounded-2xl
            "
            >
              <ImLocation2 className="text-3xl" />

              <div>
                <p className="font-bold">Location</p>

                <p className="text-sm">Islamabad Pakistan</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
