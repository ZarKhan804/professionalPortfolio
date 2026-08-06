import React from "react";

import { GiSpookyHouse } from "react-icons/gi";
import { MdWifiCalling1 } from "react-icons/md";
import { FiSend } from "react-icons/fi";
import { MdOutlineMarkEmailUnread } from "react-icons/md";
import { MdLocalPhone } from "react-icons/md";
import { ImLocation2 } from "react-icons/im";

const HeroSection = () => {
  return (
   <>
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
    py-20
    lg:py-0
  "
>
  <div
    className="
      max-w-7xl
      mx-auto
      w-full
      px-5
      sm:px-6
      lg:px-8
      grid
      grid-cols-1
      lg:grid-cols-3
      gap-12
      items-center
    "
  >
    {/* LEFT CONTENT */}

    <div className="text-center lg:text-left order-2 lg:order-1">
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
          text-sm
          sm:text-base
        "
      >
        🚀 MERN Stack Developer
      </span>

      <h1
        className="
          mt-6
          text-4xl
          sm:text-5xl
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
          text-base
          sm:text-lg
          leading-7
          max-w-xl
          mx-auto
          lg:mx-0
        "
      >
        Creating high-performance websites and applications with modern
        UI/UX, React, Node.js and MongoDB.
      </p>

      {/* Buttons */}

      <div
        className="
          flex
          flex-col
          sm:flex-row
          gap-4
          mt-8
          justify-center
          lg:justify-start
        "
      >
        <a
          href="tel:+923716236002"
          className="
            flex
            justify-center
            items-center
            gap-3
            px-6
            py-3
            rounded-xl
            bg-cyan-500
            hover:bg-cyan-600
            font-bold
            text-base
            sm:text-lg
            hover:scale-105
            duration-300
          "
        >
          <MdWifiCalling1 className="text-2xl" />
          Free Call
        </a>

        <button
          className="
            flex
            justify-center
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
            text-base
            sm:text-lg
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
    order-1
    lg:order-2
    mb-8
    lg:mb-0
  "
>
  <div
    className="
      absolute
      w-56
      h-56
      sm:w-72
      sm:h-72
      bg-cyan-400
      blur-[100px]
      sm:blur-[120px]
      opacity-40
    "
  ></div>

  <div className="relative">
 <div
  className="
    absolute
    -top-12
    sm:-top-14
    lg:-top-12
    left-1/2
    -translate-x-1/2
    lg:left-auto
    lg:translate-x-0
    lg:right-16
    bg-cyan-500
    px-4
    sm:px-6
    lg:px-8
    py-2
    rounded-xl
    flex
    items-center
    gap-2
    font-bold
    text-sm
    sm:text-base
    hover:scale-110
    duration-300
    transition-all
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
        w-[240px]
        sm:w-[300px]
        lg:w-[280px]
        h-[340px]
        sm:h-[420px]
        lg:h-[450px]
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
    w-full
    max-w-md
    mx-auto
    lg:mx-0
    order-3
  "
>
  <h2
    className="
      text-2xl
      sm:text-3xl
      font-black
      text-center
      lg:text-left
    "
  >
    Ready To Build?
  </h2>

  <p
    className="
      text-slate-300
      mt-2
      mb-6
      text-center
      lg:text-left
      text-sm
      sm:text-base
    "
  >
    Let's turn your idea into reality.
  </p>

  <div className="space-y-4">
    {/* Email */}

    <a
      href="mailto:zaarkhan483@gmail.com"
      className="
        flex
        items-center
        gap-4
        bg-cyan-500
        p-4
        rounded-2xl
        hover:bg-cyan-600
        duration-300
        break-all
      "
    >
      <MdOutlineMarkEmailUnread className="text-3xl flex-shrink-0" />

      <div className="min-w-0">
        <p className="font-bold">Email</p>
        <p className="text-sm truncate sm:whitespace-normal">
          zaarkhan483@gmail.com
        </p>
      </div>
    </a>

    {/* Phone */}

    <a
      href="tel:+923716236002"
      className="
        flex
        items-center
        gap-4
        bg-cyan-500
        p-4
        rounded-2xl
        hover:bg-cyan-600
        duration-300
      "
    >
      <MdLocalPhone className="text-3xl flex-shrink-0" />

      <div>
        <p className="font-bold">Phone</p>
        <p className="text-sm">+92 371 6236002</p>
      </div>
    </a>

    {/* Location */}

    <a
      href="https://www.google.com/maps/search/?api=1&query=Islamabad+Pakistan"
      target="_blank"
      rel="noopener noreferrer"
      className="
        flex
        items-center
        gap-4
        bg-cyan-500
        p-4
        rounded-2xl
        hover:bg-cyan-600
        duration-300
      "
    >
      <ImLocation2 className="text-3xl flex-shrink-0" />

      <div>
        <p className="font-bold">Location</p>
        <p className="text-sm">Islamabad, Pakistan</p>
      </div>
    </a>
  </div>
</div>
      </div>
    </section>
 

   </>
  )
};

export default HeroSection;
