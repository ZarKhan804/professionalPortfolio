import React from "react";
import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";

const skills = [
  {
    name: "React",
    icon: <FaReact />,
    color: "#61DBFB",
    value: 95,
  },
  {
    name: "Node JS",
    icon: <FaNodeJs />,
    color: "#68A063",
    value: 92,
  },
  {
    name: "MongoDB",
    icon: <SiMongodb />,
    color: "#13AA52",
    value: 94,
  },
  {
    name: "Express",
    icon: <SiExpress />,
    color: "#FFFFFF",
    value: 90,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript />,
    color: "#F7DF1E",
    value: 96,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss />,
    color: "#38BDF8",
    value: 95,
  },
  {
    name: "Git",
    icon: <FaGitAlt />,
    color: "#F1502F",
    value: 91,
  },
  {
    name: "GitHub",
    icon: <FaGithub />,
    color: "#FFFFFF",
    value: 93,
  },
  {
    name: "HTML5",
    icon: <FaHtml5 />,
    color: "#FF5722",
    value: 98,
  },
  {
    name: "CSS3",
    icon: <FaCss3Alt />,
    color: "#2196F3",
    value: 97,
  },
];

const Skill = () => {
  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-white via-cyan-50 to-white"
    >
      <div className="max-w-[1600px] mx-auto px-6">

       
        <div className="text-center">

          <h1 className="text-6xl font-bold text-cyan-500">
            Portfolio Skills
          </h1>

          <p className="mt-5 text-2xl text-[#22D3EE]">
            Browse portfolio skills designs for inspiration
          </p>

          <div className="mt-8 flex justify-center items-center gap-4 flex-wrap">

            <span className="text-2xl text-gray-500">
              Related:
            </span>

            {[
              "Personal",
              "Agency",
              "Skill",
              "Catalogue",
              "Responsive",
              "Photography",
            ].map((item, index) => (
              <motion.span
                key={index}
                whileHover={{
                  scale: 1.08,
                  y: -5,
                }}
                className="w-[140px] h-[50px]
                border border-cyan-300
                rounded-xl
                bg-white
                shadow-lg
                flex items-center justify-center
                text-lg
                font-medium
                text-[#0B0F2A]
                hover:bg-cyan-500
                hover:text-white
                duration-300
                cursor-pointer"
              >
                {item}
              </motion.span>
            ))}

          </div>

        </div>

        <div className="mt-10 flex justify-center gap-5 flex-wrap">

          {[
            "Discover",
            "Animation",
            "Branding",
            "Illustration",
            "Mobile",
            "Print",
            "Product Design",
          ].map((item, index) => (
            <motion.span
              key={index}
              whileHover={{
                scale: 1.08,
                y: -5,
              }}
              className="px-8 py-3 rounded-lg
              bg-[#0B1120]
              text-white
              text-lg
              shadow-xl
              hover:bg-cyan-500
              duration-300
              cursor-pointer"
            >
              {item}
            </motion.span>
          ))}

        </div>

        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">

  {skills.map((skill, index) => (
    <motion.div
      key={index}
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay: index * 0.1,
      }}
      whileHover={{
        scale: 1.06,
        rotateX: 12,
        rotateY: -12,
      }}
      className="relative overflow-hidden rounded-3xl bg-[#0B1120] border border-cyan-400/20 p-8 group shadow-2xl"
    >
   
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 duration-500"
        style={{
          background: `radial-gradient(circle at center, ${skill.color}33, transparent 70%)`,
        }}
      />

   
      <div className="relative flex justify-center">

        <svg width="170" height="170">

          <circle
            cx="85"
            cy="85"
            r="68"
            stroke="#1E293B"
            strokeWidth="10"
            fill="none"
          />

          <motion.circle
            cx="85"
            cy="85"
            r="68"
            stroke={skill.color}
            strokeWidth="10"
            fill="none"
            strokeLinecap="round"
            strokeDasharray="427"
            initial={{
              strokeDashoffset: 427,
            }}
            whileInView={{
              strokeDashoffset:
                427 - (427 * skill.value) / 100,
            }}
            transition={{
              duration: 2,
            }}
            style={{
              transform: "rotate(-90deg)",
              transformOrigin: "50% 50%",
            }}
          />

        </svg>


        <div
          className="absolute top-14 text-6xl"
          style={{
            color: skill.color,
          }}
        >
          {skill.icon}
        </div>

      </div>

      <h2 className="mt-6 text-center text-white text-2xl font-bold">
        {skill.name}
      </h2>

    
      <p
        className="text-center mt-3 text-xl font-semibold"
        style={{
          color: skill.color,
        }}
      >
        {skill.value}%
      </p>

    </motion.div>
  ))}

</div>
      </div>
    </section>
  );
};

export default Skill;