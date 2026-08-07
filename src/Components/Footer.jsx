import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaGithub,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaChevronRight,
} from "react-icons/fa";
import { RxLinkedinLogo } from "react-icons/rx";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      className="relative text-white overflow-hidden"
      style={{
        backgroundImage: `
        linear-gradient(rgba(6,23,48,.88),rgba(6,23,48,.92)),
        url("https://www.shutterstock.com/image-vector/header-footer-purple-violet-curve-260nw-2492464759.jpg")
      `,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-14">

          {/* Brand */}

          <motion.div
            initial={{opacity:0,y:40}}
            whileInView={{opacity:1,y:0}}
            transition={{duration:.6}}
          >

            <h2 className="text-4xl font-black">

              <span className="text-cyan-400">ZAR</span>{" "}

              <span className="text-cyan-400">KHAN</span>

            </h2>

            <div className="w-28 h-1 rounded-full bg-cyan-400 mt-5"></div>

            <p className="mt-7 text-slate-300 leading-9">

              Passionate Full Stack MERN Developer creating
              premium websites, scalable web applications,
              modern UI/UX and high performance digital
              experiences for clients worldwide.

            </p>

            <div className="flex gap-4 mt-8">

              {[
                <FaFacebookF />,
                <RxLinkedinLogo />,
                <FaInstagram />,
                <FaGithub />,
              ].map((icon,index)=>(

                <motion.a
                  key={index}
                  whileHover={{
                    y:-5,
                    scale:1.08
                  }}
                  href="#"
                  className="w-12 h-12 rounded-full bg-[#06B6D4]   border-[#06B6D4]  backdrop-blur-md flex items-center justify-center text-xl hover:bg-cyan-500 duration-300"
                >
                  {icon}
                </motion.a>

              ))}

            </div>

          </motion.div>

         {/* Quick Links */}

<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
>
  <h3 className="text-3xl font-bold">
    Quick Links
  </h3>

  <div className="w-20 h-1 rounded-full bg-cyan-400 mt-4 mb-8"></div>

  <ul className="space-y-5">

    <li>
      <a
        href="#home"
        className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 duration-300"
      >
        <FaChevronRight className="text-sm" />
        Home
      </a>
    </li>

    <li>
      <a
        href="#about"
        className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 duration-300"
      >
        <FaChevronRight className="text-sm" />
        About
      </a>
    </li>

    <li>
      <a
        href="#services"
        className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 duration-300"
      >
        <FaChevronRight className="text-sm" />
        Services
      </a>
    </li>

    <li>
      <a
        href="#projects"
        className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 duration-300"
      >
        <FaChevronRight className="text-sm" />
        Projects
      </a>
    </li>

    <li>
      <Link
        to="/contact"
        className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 duration-300"
      >
        <FaChevronRight className="text-sm" />
        Contact
      </Link>
    </li>

  </ul>
</motion.div>
                    {/* Services */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .8 }}
          >

            <h3 className="text-3xl font-bold">
              Services
            </h3>

            <div className="w-20 h-1 rounded-full bg-cyan-400 mt-4 mb-8"></div>

            <ul className="space-y-5">

              {[
                "MERN Development",
                "Frontend Development",
                "Backend APIs",
                "Responsive Design",
                "UI / UX Design",
                "Deployment",
              ].map((item, index) => (

                <li key={index}>

                  <a
                    href="#services"
                    className="flex items-center gap-3 text-slate-300 hover:text-cyan-400 duration-300"
                  >

                    <FaChevronRight className="text-sm" />

                    {item}

                  </a>

                </li>

              ))}

            </ul>

          </motion.div>

          {/* Contact */}

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: .9 }}
          >

            <h3 className="text-3xl font-bold">
              Contact Us
            </h3>

            <div className="w-20 h-1 rounded-full bg-cyan-400 mt-4 mb-8"></div>

            <div className="space-y-7">

              <div className="flex gap-4">

                <div className="text-cyan-400 text-xl mt-1">
                  <FaPhoneAlt />
                </div>

                <a
  href="tel:+923716236002"
  className="flex gap-4 items-start text-slate-300 hover:text-cyan-400 duration-300"
>


  <div>
    <h4 className="font-bold text-white">Phone</h4>
    <p>+92 371 6236002</p>
  </div>
</a>

              </div>

              <div className="flex gap-4">

                <div className="text-cyan-400 text-xl mt-1">
                  <FaEnvelope />
                </div>

                <a
  href="mailto:zaarkhan483@gmail.com"
  className="flex gap-4 items-start text-slate-300 hover:text-cyan-400 duration-300"
>


  <div>
    <h4 className="font-bold text-white">Email</h4>
    <p className="break-all">zaarkhan483@gmail.com</p>
  </div>
</a>

              </div>

              <div className="flex gap-4">

                <div className="text-cyan-400 text-xl mt-1">
                  <FaMapMarkerAlt />
                </div>

               <a
  href="https://maps.google.com/?q=Islamabad,Pakistan"
  target="_blank"
  rel="noopener noreferrer"
  className="flex gap-4 items-start text-slate-300 hover:text-cyan-400 duration-300"
>
 

  <div>
    <h4 className="font-bold text-white">Location</h4>
    <p>Islamabad, Pakistan</p>
  </div>
</a>

              </div>

            </div>

          </motion.div>

        </div>

        {/* Bottom */}

        <div className="border-t border-white/10 mt-14 pt-6">

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">

            <p className="text-slate-300 text-center md:text-left">
              © 2026 <span className="text-cyan-400 font-semibold">ZAR KHAN</span>. All Rights Reserved.
            </p>

            <p className="text-slate-400 text-center">
              Designed & Developed with
              <span className="text-pink-500 px-2">❤</span>
              by <span className="text-cyan-400 font-semibold">ZAR KHAN</span>
            </p>

          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;