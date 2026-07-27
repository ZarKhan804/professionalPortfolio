import React from "react";
import {
  FaRocket,
  FaCode,
  FaShieldAlt,
  FaMobileAlt,
  FaHeadset,
  FaLightbulb,
  FaArrowRight,
} from "react-icons/fa";

const list = [
  {
    icon: <FaRocket />,
    title: "Fast Performance",
    desc: "Lightning-fast websites optimized for speed and user experience.",
  },
  {
    icon: <FaCode />,
    title: "Clean Code",
    desc: "Professional and scalable code following industry best practices.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Secure Solutions",
    desc: "Advanced security techniques to keep your website protected.",
  },
  {
    icon: <FaMobileAlt />,
    title: "Responsive Design",
    desc: "Perfectly optimized for desktop, tablet and mobile devices.",
  },
  {
    icon: <FaHeadset />,
    title: "24/7 Support",
    desc: "Continuous support and maintenance whenever you need help.",
  },
  {
    icon: <FaLightbulb />,
    title: "Creative Ideas",
    desc: "Innovative digital solutions that help your business grow faster.",
  },
];

const About = () => {
  return (




    
    <section  id="about" className="bg-[#F1F3F4] py-10">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
      
        <div className="text-center">
          <span className=" px-5 py-2 rounded-md bg-cyan-100 text-cyan-600 font-semibold ">
            Why Choose Us
          </span>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-800 mt-5">
            Why Clients Trust
            <span className="text-cyan-500"> Our Services</span>
          </h2>
<p className="max-w-xl w-full mx-auto mt-6 text-gray-600 leading-7 text-base sm:text-lg px-2">
            Building the future of digital experiences through innovative
            solutions, trusted delivery, and long-term partnerships that help
            businesses grow faster.
          </p>

          <div className="w-32 h-1 bg-cyan-500 rounded-full mx-auto mt-4"></div>
        </div>

        <div className="mt-10">
        

          <div className=" flex justify-center">
         <div className="flex flex-col lg:flex-row justify-center gap-6 w-full">
              {list.slice(0, 2).map((item, index) => {
                const gradients = [
                  "from-cyan-500 via-sky-500 to-blue-600",
                  "from-teal-500 via-cyan-500 to-sky-600",
                ];

                return (
                  <div
                    key={index}
                 className="group relative overflow-hidden rounded-2xl bg-[#22D3EE] p-6 w-full lg:w-[500px] min-h-[220px] shadow-lg border border-cyan-100 transition-all duration-500 hover:scale-105 hover:-translate-y-2"
                  >
                 
                    <span
                      className={`absolute left-0 top-0 h-full w-0 bg-gradient-to-r ${gradients[index]} transition-all duration-500  group-hover:w-full`}
                    ></span>

                    <div className="relative ">
                   
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-cyan-100 flex items-center justify-center text-2xl text-cyan-600 transition-all duration-500 group-hover:bg-white group-hover:text-cyan-600 group-hover:rotate-12 group-hover:scale-110">
                        {item.icon}
                      </div>

                 
                      <h3 className="mt-1text-lg sm:text-xl font-bold text-gray-800 transition-all duration-500 group-hover:text-white">
                        {item.title}
                      </h3>

                   
                      <p className="mt-1 text-sm sm:text-base text-gray-600 leading-6 transition-all duration-500 group-hover:text-gray-100">
                        {item.desc}
                      </p>

                    
                      <button className="mt-1 flex items-center gap-2 font-semibold text-cyan-600 transition-all duration-500 group-hover:text-white">
                        Read More
                        <FaArrowRight className="transition-all duration-300 group-hover:translate-x-2" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

       
          <div className="mt-6 flex justify-center">
          <div className="flex flex-col md:flex-row justify-center gap-6 w-full">
              {list.slice(2, 4).map((item, index) => {
                const gradients = [
                  "from-yellow-600 via-teal-500 to-yellow-600",
                  "from-yellow-500 via-cyan-500 to-yellow-600",
                ];

                return (
                  <div
                    key={index}
           className="group relative overflow-hidden rounded-2xl bg-white p-5 w-full md:w-[400px] min-h-[200px] border border-cyan-100 shadow-lg transition-all duration-500 hover:scale-105 hover:-translate-y-2"
                  >
                
                    <span
                      className={`absolute left-0 top-0 h-full w-0 bg-gradient-to-r ${gradients[index]} transition-all duration-500 ease-in-out group-hover:w-full`}
                    ></span>

                    <div className="relative z-10">
                     
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-cyan-100 flex items-center justify-center text-xl text-cyan-600 transition-all duration-500 group-hover:bg-white group-hover:text-cyan-600 group-hover:rotate-12 group-hover:scale-110">
                        {item.icon}
                      </div>

                    
                      <h3 className="mt-1text-lg sm:text-xl font-bold text-gray-800 transition-all duration-500 group-hover:text-white">
                        {item.title}
                      </h3>

                    
                      <p className="mt-1 text-sm sm:text-base text-gray-600 leading-6 transition-all duration-500 group-hover:text-gray-100">
                        {item.desc}
                      </p>

                   
                      <button className="mt-1 flex items-center gap-2 text-cyan-600 font-semibold transition-all duration-500 group-hover:text-white">
                        Read More
                        <FaArrowRight className="transition-all duration-300 group-hover:translate-x-2" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
         
          <div className="mt-6 flex justify-center">
          <div className="flex flex-col lg:flex-row justify-center gap-6 w-full">
              {list.slice(4, 6).map((item, index) => {
                const gradients = [
                  "from-cyan-600 via-sky-500 to-blue-600",
                  "from-teal-500 via-cyan-500 to-blue-500",
                ];

                return (
                  <div
                    key={index}
              className="group relative overflow-hidden rounded-2xl bg-[#22D3EE] p-5 w-full lg:w-[500px] min-h-[200px] border border-cyan-100 shadow-lg transition-all duration-500 hover:scale-105 hover:-translate-y-2"
                  >
               
                    <span
                      className={`absolute left-0 top-0 h-full w-0 bg-gradient-to-r ${gradients[index]} transition-all duration-500 ease-in-out group-hover:w-full`}
                    ></span>

                    <div className="relative z-10">
                   
                      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-cyan-100 flex items-center justify-center text-xl text-cyan-600 transition-all duration-500 group-hover:bg-white group-hover:text-cyan-600 group-hover:rotate-12 group-hover:scale-110">
                        {item.icon}
                      </div>

                    
                      <h3 className="mt-3 text-lg sm:text-xl font-bold text-gray-800 transition-all duration-500 group-hover:text-white">
                        {item.title}
                      </h3>

                 
                      <p className="mt-2 text-sm sm:text-base text-gray-600 leading-6 transition-all duration-500 group-hover:text-gray-100">
                        {item.desc}
                      </p>

                      <button className="mt-1 flex items-center gap-2 text-cyan-600 font-semibold transition-all duration-500 group-hover:text-white">
                        Read More
                        <FaArrowRight className="transition-all duration-300 group-hover:translate-x-2" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
