import React, { useRef, useState } from "react";
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
  SiTypescript,
  SiNextdotjs,
} from "react-icons/si";

const skills = [
  {
    name: "React",
    icon: <FaReact />,
    color: "#61DBFB",
    value: 95,
  },
  {
    name: "Next.js App Router",
    icon: <SiNextdotjs />,
    color: "#FFFFFF",
    value: 90,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript />,
    color: "#3178C6",
    value: 92,
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
  const [activeSkill, setActiveSkill] = useState("React");

  const cardRefs = useRef({});

  const handleSkillClick = (skill) => {
    setActiveSkill(skill);

    cardRefs.current[skill]?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  };

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-white via-cyan-50 to-white"
    >
      <div className="max-w-[1600px] mx-auto px-6">

        {/* Heading */}
        <div className="text-center">

          <h1 className="text-6xl font-bold text-cyan-500">
            Portfolio Skills
          </h1>

          <p className="mt-5 text-2xl text-[#22D3EE]">
            Browse portfolio skills designs for inspiration
          </p>

          {/* Skill Buttons */}
          <div className="mt-12 flex justify-center flex-wrap gap-4">

            {skills.map((skill, index) => (

              <motion.button
                key={index}
                onClick={() => handleSkillClick(skill.name)}
                whileHover={{ scale: 1.08, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className={`px-7 py-3 rounded-xl text-lg font-semibold transition-all duration-300 border shadow-lg

                ${
                  activeSkill === skill.name
                    ? "bg-cyan-500 text-white border-cyan-500"
                    : "bg-white text-[#0B1120] border-cyan-200 hover:bg-cyan-500 hover:text-white"
                }`}
              >
                {skill.name}
              </motion.button>

            ))}

          </div>

        </div>

        {/* Skill Cards */}
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">

          {skills.map((skill, index) => (

            <motion.div
              key={index}
              ref={(el) => (cardRefs.current[skill.name] = el)}

              initial={{
                opacity: 0,
                y: 80,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              viewport={{
                once: true,
              }}

              transition={{
                duration: 0.8,
                delay: index * 0.08,
              }}

              whileHover={{
                scale: 1.05,
                rotateX: 10,
                rotateY: -10,
              }}

              animate={
                activeSkill === skill.name
                  ? {
                      scale: 1.08,
                      y: -10,
                    }
                  : {
                      scale: 1,
                      y: 0,
                    }
              }

              className={`relative overflow-hidden rounded-3xl p-8 group shadow-2xl transition-all duration-500

              ${
                activeSkill === skill.name
                  ? "bg-[#071221] border-2 border-cyan-400 shadow-cyan-400/50"
                  : "bg-[#0B1120] border border-cyan-400/20"
              }`}
            >

              {/* Glow Effect */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 duration-500"
                style={{
                  background: `radial-gradient(circle at center, ${skill.color}33, transparent 70%)`,
                }}
              />

              {/* Active Badge */}
              {activeSkill === skill.name && (
                <div className="absolute top-4 right-4 bg-cyan-500 text-white text-xs px-3 py-1 rounded-full">
                  Active
                </div>
              )}

              {/* Circular Progress */}
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
                    strokeLinecap="square"
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

                {/* Skill Icon */}
                <motion.div
                  className="absolute top-14 text-6xl"
                  style={{
                    color: skill.color,
                  }}

                  animate={
                    activeSkill === skill.name
                      ? {
                          scale: [1, 1.15, 1],
                          rotate: [0, 8, -8, 0],
                        }
                      : {}
                  }

                  transition={{
                    duration: 1.2,
                    repeat:
                      activeSkill === skill.name
                        ? Infinity
                        : 0,
                  }}
                >
                  {skill.icon}
                </motion.div>

              </div>

              {/* Skill Name */}
              <h2 className="mt-6 text-center text-white text-2xl font-bold">
                {skill.name}
              </h2>

              {/* Percentage */}
              <p
                className="mt-3 text-center text-xl font-semibold"
                style={{
                  color: skill.color,
                }}
              >
                {skill.value}%
              </p>

              {/* Progress Bar */}
              <div className="mt-6 h-2 w-full rounded-full bg-slate-700 overflow-hidden">

                <motion.div
                  initial={{
                    width: 0,
                  }}

                  whileInView={{
                    width: `${skill.value}%`,
                  }}

                  transition={{
                    duration: 1.5,
                  }}

                  className="h-full rounded-full"

                  style={{
                    background: skill.color,
                  }}
                />

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Skill;