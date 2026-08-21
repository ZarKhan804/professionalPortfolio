import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaGithub,
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

  // Perfect circle calculation
  const radius = 68;
  const circumference = 2 * Math.PI * radius;

  return (
    <section
      id="skills"
      className="py-20 bg-[#FFF7ED]"
    >
      <div className="max-w-[1600px] mx-auto px-6">

        {/* ================= HEADING ================= */}
        <div className="text-center">

          <h1 className="text-6xl font-bold text-cyan-500">
            Portfolio Skills
          </h1>

          <p className="mt-5 text-2xl text-[#22D3EE]">
            Browse portfolio skills designs for inspiration
          </p>

          {/* ================= SKILL BUTTONS ================= */}
          <div className="mt-12 flex justify-center flex-wrap gap-4">

            {skills.map((skill, index) => (
              <motion.button
                key={index}
                onClick={() => handleSkillClick(skill.name)}

                whileHover={{
                  scale: 1.08,
                  y: -5,
                }}

                whileTap={{
                  scale: 0.95,
                }}

                className={`px-7 py-3 rounded-xl text-lg font-semibold transition-all duration-300 border shadow-lg ${
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

        {/* ================= SKILL CARDS ================= */}
        <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">

          {skills.map((skill, index) => (
            <motion.div
              key={index}

              ref={(el) => {
                cardRefs.current[skill.name] = el;
              }}

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
                y: -12,
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

              className={`relative overflow-hidden rounded-3xl p-8 group shadow-2xl transition-all duration-500 ${
                activeSkill === skill.name
                  ? "bg-[#071221] border-2 border-cyan-400 shadow-cyan-400/50"
                  : "bg-[#0B1120] border border-cyan-400/20"
              }`}
            >

              {/* ================= GLOW EFFECT ================= */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at center, ${skill.color}33, transparent 70%)`,
                }}
              />

              {/* ================= ACTIVE BADGE ================= */}
              {activeSkill === skill.name && (
                <div className="absolute top-4 right-4 bg-cyan-500 text-white text-xs px-3 py-1 rounded-full">
                  Active
                </div>
              )}

              {/* ================= CIRCLE ================= */}
              <div className="relative flex justify-center items-center">

                <svg
                  width="170"
                  height="170"
                  viewBox="0 0 170 170"
                  className="block"
                >

                  {/* Background Circle */}
                  <circle
                    cx="85"
                    cy="85"
                    r={radius}
                    stroke="#1E293B"
                    strokeWidth="10"
                    fill="none"
                  />

                  {/* Progress Circle */}
                  <motion.circle
                    cx="85"
                    cy="85"
                    r={radius}
                    stroke={skill.color}
                    strokeWidth="10"
                    fill="none"
                    strokeLinecap="round"

                    strokeDasharray={circumference}

                    initial={{
                      strokeDashoffset: circumference,
                    }}

                    whileInView={{
                      strokeDashoffset:
                        circumference -
                        (circumference * skill.value) / 100,
                    }}

                    viewport={{
                      once: true,
                    }}

                    transition={{
                      duration: 2,
                      ease: "easeOut",
                    }}

                    style={{
                      transform: "rotate(-90deg)",
                      transformOrigin: "85px 85px",
                    }}
                  />

                </svg>

                {/* ================= PERFECTLY CENTERED ICON ================= */}
                <div
                  className="
                    absolute
                    left-1/2
                    top-1/2
                    -translate-x-1/2
                    -translate-y-1/2
                    w-20
                    h-20
                    flex
                    items-center
                    justify-center
                    z-10
                  "
                >

                  <motion.div
                    className="flex items-center justify-center text-6xl leading-none"

                    style={{
                      color: skill.color,
                    }}

                    animate={
                      activeSkill === skill.name
                        ? {
                            scale: [1, 1.12, 1],
                          }
                        : {
                            scale: 1,
                          }
                    }

                    transition={{
                      duration: 1.2,
                      repeat:
                        activeSkill === skill.name
                          ? Infinity
                          : 0,
                      ease: "easeInOut",
                    }}
                  >
                    {skill.icon}
                  </motion.div>

                </div>

              </div>

              {/* ================= SKILL NAME ================= */}
              <h2 className="mt-6 text-center text-white text-2xl font-bold">
                {skill.name}
              </h2>

              {/* ================= PERCENTAGE ================= */}
              <p
                className="mt-3 text-center text-xl font-semibold"
                style={{
                  color: skill.color,
                }}
              >
                {skill.value}%
              </p>

              {/* ================= PROGRESS BAR ================= */}
              <div className="mt-6 h-2 w-full rounded-full bg-slate-700 overflow-hidden">

                <motion.div
                  initial={{
                    width: 0,
                  }}

                  whileInView={{
                    width: `${skill.value}%`,
                  }}

                  viewport={{
                    once: true,
                  }}

                  transition={{
                    duration: 1.5,
                    ease: "easeOut",
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