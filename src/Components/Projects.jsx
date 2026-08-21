import React from "react";
import { motion } from "framer-motion";

import {
  FaGithub,
  FaExternalLinkAlt,
  FaReact,
  FaNodeJs,
} from "react-icons/fa";

import {
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiJavascript,
} from "react-icons/si";

const projects = [
  {
    title: "Modern E-Commerce",
    category: "Full Stack",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=1200",
    description:
      "Premium shopping experience with authentication, payments and dashboard.",
    tech: [
      <FaReact key="1" />,
      <FaNodeJs key="2" />,
      <SiExpress key="3" />,
      <SiMongodb key="4" />,
      <SiTailwindcss key="5" />,
    ],
    github: "#",
    live: "#",
  },

  {
    title: "AI Portfolio",
    category: "Frontend",
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1200",
    description:
      "Luxury animated portfolio with immersive interactions and premium UI.",
    tech: [
      <FaReact key="1" />,
      <SiJavascript key="2" />,
      <SiTailwindcss key="3" />,
    ],
    github: "#",
    live: "#",
  },

  {
    title: "Admin Dashboard",
    category: "MERN",
    image:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1200",
    description:
      "Analytics dashboard with authentication, charts and role management.",
    tech: [
      <FaReact key="1" />,
      <FaNodeJs key="2" />,
      <SiExpress key="3" />,
      <SiMongodb key="4" />,
    ],
    github: "#",
    live: "#",
  },
];

const Project = () => {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-[#FFF7ED] py-24"
    >

      {/* Main Container */}
      <div className="relative z-10 mx-auto max-w-7xl px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center rounded-full border border-cyan-400 bg-cyan-50 px-6 py-3 shadow-lg"
          >
            <span className="font-bold uppercase tracking-[5px] text-cyan-600">
              Featured Work
            </span>
          </motion.div>

          <h1 className="mt-8 text-6xl font-black text-slate-900 lg:text-6xl">
            Latest Projects
          </h1>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-9 text-slate-600">
            Premium full stack applications crafted with performance,
            creativity and modern technologies.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-16 flex flex-wrap justify-center gap-5">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -12,
                scale: 1.02,
                rotateX: 5,
                rotateY: -5,
              }}
              className="group relative w-[360px] flex-shrink-0 overflow-hidden rounded-[24px] border border-cyan-200 bg-white shadow-xl transition-all duration-700 hover:shadow-[0_20px_60px_rgba(34,211,238,.25)]"
            >

              {/* Animated Border */}
              <motion.div
                animate={{
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 rounded-[24px]"
                style={{
                  background:
                    "linear-gradient(135deg,#22D3EE,#67E8F9,#A5F3FC,#22D3EE)",
                  backgroundSize: "300% 300%",
                  padding: "2px",
                }}
              />

              <div className="relative z-10 rounded-[22px] bg-white">

                {/* Image */}
                <div className="h-48 overflow-hidden rounded-t-[22px]">
                  <motion.img
                    whileHover={{ scale: 1.08 }}
                    transition={{ duration: 0.6 }}
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-5">

                  <span className="inline-block rounded-md bg-cyan-100 px-3 py-1.5 text-xs font-semibold text-cyan-600">
                    {project.category}
                  </span>

                  <h2 className="mt-4 text-2xl font-bold text-slate-900">
                    {project.title}
                  </h2>

                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="mt-5 flex flex-wrap gap-2">
                    {project.tech.map((icon, i) => (
                      <motion.div
                        key={i}
                        whileHover={{
                          rotate: 360,
                          scale: 1.15,
                        }}
                        transition={{ duration: 0.5 }}
                        className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-50 text-lg text-cyan-600 shadow-md"
                      >
                        {icon}
                      </motion.div>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="mt-6 flex gap-3">

                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      href={project.live}
                      className="flex flex-1 items-center justify-center gap-2 rounded-lg bg-cyan-500 py-2.5 text-sm font-semibold text-white"
                    >
                      Live Demo
                      <FaExternalLinkAlt />
                    </motion.a>

                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      href={project.github}
                      className="flex w-11 items-center justify-center rounded-lg border border-cyan-300 bg-white text-cyan-600"
                    >
                      <FaGithub />
                    </motion.a>

                  </div>
                </div>

                {/* Card Hover Glow */}
                <div className="absolute -bottom-16 -right-16 h-40 w-40 rounded-full bg-cyan-300/20 opacity-0 blur-3xl transition-all duration-700 group-hover:opacity-100" />

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Project;