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
      className="relative py-24 bg-[#F5F6F6] overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full bg-cyan-300/20 blur-[160px]" />

      <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full bg-cyan-400/20 blur-[160px]" />

      {/* IMPORTANT: Is div ko yahan close mat karo */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">

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
            className="inline-flex items-center px-6 py-3 rounded-full border border-cyan-400 bg-cyan-50 shadow-lg"
          >
            <span className="uppercase tracking-[5px] font-bold text-cyan-600">
              Featured Work
            </span>
          </motion.div>

          <h1 className="mt-8 text-6xl lg:text-7xl font-black text-slate-900">
            Latest Projects
          </h1>

          <p className="mt-6 max-w-3xl mx-auto text-slate-600 text-xl leading-9">
            Premium full stack applications crafted with performance,
            creativity and modern technologies.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-10 mt-20">
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
                y: -15,
                scale: 1.03,
                rotateX: 5,
                rotateY: -5,
              }}
              className="group relative overflow-hidden rounded-[30px] bg-white border border-cyan-200 shadow-xl hover:shadow-[0_25px_80px_rgba(34,211,238,.30)] transition-all duration-700"
            >
              {/* Animated Border */}
              <motion.div
                animate={{
                  backgroundPosition: [
                    "0% 50%",
                    "100% 50%",
                    "0% 50%",
                  ],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 rounded-[30px]"
                style={{
                  background:
                    "linear-gradient(135deg,#22D3EE,#67E8F9,#A5F3FC,#22D3EE)",
                  backgroundSize: "300% 300%",
                  padding: "2px",
                }}
              >
                <div className="w-full h-full rounded-[28px] bg-white" />
              </motion.div>

              <div className="relative z-10">
                {/* Image */}
                <div className="overflow-hidden h-60">
                  <motion.img
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="p-7">
                  <span className="inline-block px-4 py-2 rounded-full bg-cyan-100 text-cyan-600 text-sm font-semibold">
                    {project.category}
                  </span>

                  <h2 className="mt-5 text-3xl font-bold text-slate-900">
                    {project.title}
                  </h2>

                  <p className="mt-4 text-slate-600 leading-7">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex gap-3 mt-6 flex-wrap">
                    {project.tech.map((icon, i) => (
                      <motion.div
                        key={i}
                        whileHover={{
                          rotate: 360,
                          scale: 1.2,
                        }}
                        transition={{ duration: 0.5 }}
                        className="w-11 h-11 rounded-xl bg-cyan-50 text-cyan-600 flex items-center justify-center text-xl shadow-md"
                      >
                        {icon}
                      </motion.div>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-4 mt-8">
                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      href={project.live}
                      className="flex-1 py-3 rounded-xl bg-cyan-500 text-white flex items-center justify-center gap-2 font-semibold"
                    >
                      Live Demo
                      <FaExternalLinkAlt />
                    </motion.a>

                    <motion.a
                      whileHover={{ scale: 1.05 }}
                      href={project.github}
                      className="w-14 rounded-xl border border-cyan-300 bg-white flex items-center justify-center text-cyan-600"
                    >
                      <FaGithub />
                    </motion.a>
                  </div>
                </div>

                {/* Glow */}
                <div className="absolute -right-20 -bottom-20 w-56 h-56 rounded-full bg-cyan-300/20 blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-700" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Project;