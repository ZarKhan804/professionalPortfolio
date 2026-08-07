import React, { useRef } from "react";
import { motion } from "framer-motion";

import { Canvas } from "@react-three/fiber";
import { Float, Text3D, Center } from "@react-three/drei";

import {
  FaCode,
  FaMobileAlt,
  FaServer,
  FaPaintBrush,
  FaRocket,
  FaDatabase,
} from "react-icons/fa";
const services = [
  {
    title: "MERN Development",
    icon: <FaCode />,
    color: "#22D3EE",
    description:
      "Scalable MERN applications engineered for performance and security.",
  },
  {
    title: "Backend APIs",
    icon: <FaServer />,
    color: "#22D3EE",
    description: "REST APIs, JWT Authentication, Database & Cloud Integration.",
  },
  {
    title: "UI / UX Design",
    icon: <FaPaintBrush />,
    color: "#22D3EE",
    description: "Modern premium interfaces with smooth user experience.",
  },
  {
    title: "Responsive Design",
    icon: <FaMobileAlt />,
    color: "#22D3EE",
    description: "Pixel-perfect layouts for Desktop, Tablet & Mobile.",
  },
  {
    title: "Database",
    icon: <FaDatabase />,
    color: "#22D3EE",
    description: "Optimized MongoDB architecture with high-speed queries.",
  },
  {
    title: "Deployment",
    icon: <FaRocket />,
    color: "#22D3EE",
    description: "Deploy applications on Vercel, Render and VPS servers.",
  },
];
const Services = () => {
  return (
    <section id="services" className="py-24 bg-[#FEFEFE]">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="inline-flex items-center px-5 py-2.5 rounded-full
    border-2 border-cyan-400 bg-cyan-50
    shadow-[0_0_20px_rgba(34,211,238,.25)]
    hover:shadow-[0_0_35px_rgba(34,211,238,.45)]
    hover:bg-cyan-100 duration-500 cursor-pointer"
          >
            <span className="text-cyan-600 font-bold uppercase tracking-[4px] text-sm">
              What I Offer
            </span>
          </motion.div>

          <h1 className="mt-6 text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
            <span className="text-pink-500">Premium</span>

            <span className="text-cyan-500"> Services</span>
          </h1>

          <p className="mt-5 max-w-2xl mx-auto text-lg leading-8 text-slate-600">
            I build fast, scalable and visually stunning web applications using
            modern technologies with a strong focus on performance, user
            experience and clean architecture.
          </p>
        </motion.div>

        {/* Cards */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.12,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="
        group
        relative
        overflow-hidden
        rounded-[20px]
        border
        border-cyan-200
        bg-white
        p-6
        min-h-[250px]
       
        shadow-lg
        hover:shadow-[0_18px_45px_rgba(34,211,238,.20)]
        transition-all
        duration-500
      "
            >
              {/* Hover Glow */}

              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 duration-500"
                style={{
                  background:
                    "radial-gradient(circle,#67E8F955,transparent 70%)",
                }}
              />

              {/* Top Border */}

              <div className="absolute top-0 left-0 w-full h-[4px] bg-gradient-to-r from-cyan-400 via-cyan-300 to-cyan-500" />

              {/* Icon */}

              <div
                className="relative z-10 w-14 h-14 rounded-xl flex items-center justify-center text-2xl"
                style={{
                  background: "#ECFEFF",
                  color: "#06B6D4",
                  boxShadow: "0 8px 25px rgba(34,211,238,.25)",
                }}
              >
                {service.icon}
              </div>

              {/* Title */}

              <h2 className="relative z-10 mt-5 text-xl font-bold text-slate-900">
                {service.title}
              </h2>

              {/* Description */}

              <p className="relative z-10 mt-3 text-[15px] leading-6 text-slate-600">
                {service.description}
              </p>

              {/* Bottom Animation */}

              <motion.div
                className="absolute bottom-0 left-0 h-[3px] bg-cyan-500"
                initial={{ width: 0 }}
                whileHover={{ width: "100%" }}
              />

              {/* Glow Circle */}

              <div className="absolute -right-20 -bottom-20 w-40 h-40 rounded-full bg-cyan-100 blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
