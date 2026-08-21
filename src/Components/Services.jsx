import React from "react";
import { motion } from "framer-motion";

import {
  FaCode,
  FaMobileAlt,
  FaServer,
  FaPaintBrush,
  FaRocket,
  FaDatabase,
  FaArrowRight,
} from "react-icons/fa";

const services = [
  {
    title: "MERN Development",
    icon: <FaCode />,
    description:
      "Build powerful and scalable full-stack applications using MongoDB, Express.js, React.js and Node.js with secure architecture and high performance.",
  },
  {
    title: "Backend APIs",
    icon: <FaServer />,
    description:
      "Develop secure and scalable REST APIs with authentication, authorization, database integration and reliable backend architecture.",
  },
  {
    title: "UI / UX Design",
    icon: <FaPaintBrush />,
    description:
      "Create modern, clean and engaging interfaces focused on usability, visual consistency, smooth interactions and better user experiences.",
  },
  {
    title: "Responsive Design",
    icon: <FaMobileAlt />,
    description:
      "Build responsive websites that provide a seamless experience across desktop, tablet and mobile devices with pixel-perfect layouts.",
  },
  {
    title: "Database Solutions",
    icon: <FaDatabase />,
    description:
      "Design optimized MongoDB database structures with efficient queries, clean data models, secure integration and scalable architecture.",
  },
  {
    title: "Deployment",
    icon: <FaRocket />,
    description:
      "Deploy production-ready applications using Vercel, Render and VPS servers with optimized builds, environment configuration and hosting.",
  },
];

const Services = () => {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-[#FFF7ED] py-20 md:py-24"
    >
      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-500/5 blur-[120px]" />
      <div className="pointer-events-none absolute bottom-0 left-0 h-72 w-72 rounded-full bg-purple-500/5 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl text-center"
        >
          <motion.div
            whileHover={{ scale: 1.04 }}
            className="mx-auto inline-flex items-center rounded-full border border-cyan-400/40 bg-cyan-400/5 px-5 py-2"
          >
            <span className="text-xs font-bold uppercase tracking-[4px] text-cyan-400 sm:text-sm">
              What I Offer
            </span>
          </motion.div>

          <h1 className="mt-5 text-4xl font-black leading-tight sm:text-5xl md:text-6xl">
            <span className="text-pink-500">Premium</span>{" "}
            <span className="text-cyan-400">Services</span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-slate-400 sm:text-base">
            I provide modern full-stack development services focused on
            performance, scalability, security, responsive design and premium
            user experience.
          </p>
        </motion.div>

        {/* Services Cards */}

<div className="mx-auto mt-14 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
  {services.map((service, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.6,
        delay: index * 0.08,
      }}
      whileHover={{
        scale: 1.045,
      }}
      className="group relative mx-auto w-full max-w-[335px] overflow-hidden rounded-[20px] border border-cyan-200/60 bg-gradient-to-br from-[#FFF7ED] via-[#F0FDFF] to-[#ECFEFF] px-6 py-7 text-center shadow-[0_10px_30px_rgba(15,23,42,.10)] transition-all duration-500 hover:border-cyan-400 hover:shadow-[0_18px_50px_rgba(34,211,238,.25)]"
    >

      {/* Top Gradient Line */}
      <div className="absolute left-1/2 top-0 h-[3px] w-0 -translate-x-1/2 bg-gradient-to-r from-cyan-400 via-cyan-500 to-pink-400 transition-all duration-500 group-hover:w-3/4" />

      {/* Shine Effect */}
      <div className="pointer-events-none absolute -left-32 top-0 h-full w-24 rotate-[25deg] bg-white/50 blur-xl transition-all duration-700 group-hover:left-[120%]" />

      {/* Icon */}
      <motion.div
        whileHover={{ scale: 1.12 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-50 to-cyan-100 text-[38px] text-cyan-500 shadow-[0_8px_25px_rgba(34,211,238,.22)]"
      >
        {service.icon}
      </motion.div>

      {/* Heading */}
      <h2 className="relative z-10 mt-5 text-xl font-extrabold text-slate-900">
        {service.title}
      </h2>

      {/* Description */}
      <p className="relative z-10 mx-auto mt-3 min-h-[108px] max-w-[280px] text-[14px] leading-6 text-slate-600">
        {service.description}
      </p>

      {/* Read More */}
      <motion.a
        href="#contact"
        whileHover={{ scale: 1.05 }}
        className="relative z-10 mt-5 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cyan-500 to-cyan-400 px-5 py-2.5 text-sm font-bold text-white shadow-[0_6px_20px_rgba(34,211,238,.25)] transition-all duration-300 hover:from-cyan-600 hover:to-pink-500 hover:shadow-[0_8px_25px_rgba(34,211,238,.35)]"
      >
        Read More
        <FaArrowRight className="text-xs transition-transform duration-300 group-hover:translate-x-1" />
      </motion.a>

      {/* Bottom Glow */}
      <div className="absolute -bottom-20 left-1/2 h-32 w-40 -translate-x-1/2 rounded-full bg-cyan-300/30 opacity-0 blur-3xl transition-all duration-500 group-hover:opacity-100" />

    </motion.div>
  ))}
</div>

      </div>
    </section>
  );
};

export default Services;