import React from "react";

import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaWhatsapp,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { IoLogoTiktok } from "react-icons/io5";
import { RxLinkedinLogo } from "react-icons/rx";


const Footer = () => {
  return (
    <footer
  className="relative text-white pt-16 bg-cover bg-center"
  style={{
    backgroundImage:
      "linear-gradient(rgba(15,23,42,0.92), rgba(15,23,42,0.95)), url('https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1600')",
  }}
>


  <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-4 md:grid-cols-2 gap-10">


    {/* Brand */}

    <div>


      <div className="flex items-center gap-3">


        <div className="w-14 h-14 rounded-full bg-gradient-to-r from-cyan-400 to-purple-600 flex items-center justify-center text-3xl font-black text-white shadow-lg shadow-cyan-500/30">
          Z
        </div>


        <h2 className="text-3xl font-black">

          <span className="text-cyan-400">
            ZAR
          </span>

          <span className="text-pink-500">
            KHAN
          </span>

        </h2>


      </div>



      <p className="text-slate-300 mt-5 leading-7">
        Full MERN Stack Developer creating modern,
        scalable and high performance web applications
        with beautiful UI/UX.
      </p>



      {/* Social Icons */}

      <div className="flex gap-3 mt-6">


        <a className="w-11 h-11 rounded-full bg-white text-blue-600 flex items-center justify-center hover:bg-blue-600 hover:text-white hover:-translate-y-1 duration-300">
          <FaFacebook/>
        </a>


        <a className="w-11 h-11 rounded-full bg-white text-blue-700 flex items-center justify-center hover:bg-blue-700 hover:text-white hover:-translate-y-1 duration-300">
          <RxLinkedinLogo/>
        </a>


        <a className="w-11 h-11 rounded-full bg-white text-pink-500 flex items-center justify-center hover:bg-pink-500 hover:text-white hover:-translate-y-1 duration-300">
          <FaInstagram/>
        </a>


        <a className="w-11 h-11 rounded-full bg-white text-black flex items-center justify-center hover:bg-black hover:text-white hover:-translate-y-1 duration-300">
          <IoLogoTiktok/>
        </a>


        <a className="w-11 h-11 rounded-full bg-white text-red-500 flex items-center justify-center hover:bg-red-500 hover:text-white hover:-translate-y-1 duration-300">
          <FaYoutube/>
        </a>


      </div>


    </div>





    {/* Navigation */}

    <div>


      <h3 className="text-xl font-bold text-cyan-400 mb-6">
        Navigation
      </h3>


      <ul className="space-y-4 text-slate-300">

        <li className="hover:text-cyan-400 duration-300">
          Home
        </li>

        <li className="hover:text-cyan-400 duration-300">
          About
        </li>

        <li className="hover:text-cyan-400 duration-300">
          Services
        </li>

        <li className="hover:text-cyan-400 duration-300">
          Projects
        </li>

        <li className="hover:text-cyan-400 duration-300">
          Contact
        </li>

      </ul>


    </div>





    {/* Contact */}

    <div>


      <h3 className="text-xl font-bold text-pink-500 mb-6">
        Contact
      </h3>


      <div className="space-y-5 text-slate-300">


        <p className="flex gap-3 items-center">
          <FaEnvelope className="text-cyan-400"/>
          zaarkhan483@gmail.com
        </p>



        <p className="flex gap-3 items-center">
          <FaPhone className="text-cyan-400"/>
          +92 3716236002
        </p>



        <p className="flex gap-3 items-center">
          <FaMapMarkerAlt className="text-cyan-400"/>
          Islamabad Pakistan
        </p>



        <a
          href="https://wa.me/923716236002"
          target="_blank"
          className="flex items-center gap-3 text-green-400 hover:text-green-300 duration-300"
        >
          <FaWhatsapp/>
          Chat on WhatsApp
        </a>


      </div>


    </div>






    {/* Google Map */}

    <div>


      <h3 className="text-xl font-bold text-cyan-400 mb-6">
        Location
      </h3>



      <iframe
        title="Google Map"
        className="w-full h-[220px] rounded-2xl border border-cyan-400/30 shadow-xl"
        src="https://www.google.com/maps?q=Islamabad+Pakistan&output=embed"
        loading="lazy"
      ></iframe>


    </div>



  </div>





  {/* Bottom */}

  <div className="border-t border-white/10 mt-12 py-6 text-center text-slate-300">

    © 2026 Zar Khan | MERN Stack Developer

  </div>


</footer>
  );
};


export default Footer;