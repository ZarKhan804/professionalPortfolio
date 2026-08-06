import React, { useState, useEffect } from "react";
import { FaFacebook } from "react-icons/fa";
import { RxLinkedinLogo } from "react-icons/rx";
import { FaInstagram } from "react-icons/fa";
import { IoLogoTiktok } from "react-icons/io5";
import { FaYoutubeSquare } from "react-icons/fa";

const Marquee = () => {
  const [showFirst, setShowFirst] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowFirst((prev) => !prev);
    }, 9000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-[#cfd5e0] py-3">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row items-center justify-between gap-4">

        {/* Desktop Left Marquee */}
        <div className="hidden lg:block w-full lg:w-1/3">
          <marquee
            scrollAmount="10"
            className="text-sm sm:text-base font-bold text-[#22D3EE]"
          >
            HTML5 &nbsp;&nbsp;&nbsp;&nbsp;
            CSS3 &nbsp;&nbsp;&nbsp;&nbsp;
            JavaScript (ES6+) &nbsp;&nbsp;&nbsp;&nbsp;
            React.js &nbsp;&nbsp;&nbsp;&nbsp;
            Git & GitHub
          </marquee>
        </div>

        {/* Mobile Sequential Marquee */}
        <div className="block lg:hidden w-full">
          {showFirst ? (
            <marquee
              scrollAmount="10"
              className="text-sm font-bold text-[#22D3EE]"
            >
              HTML5 &nbsp;&nbsp;&nbsp;&nbsp;
              CSS3 &nbsp;&nbsp;&nbsp;&nbsp;
              JavaScript (ES6+) &nbsp;&nbsp;&nbsp;&nbsp;
              React.js &nbsp;&nbsp;&nbsp;&nbsp;
              Git & GitHub
            </marquee>
          ) : (
            <marquee
              scrollAmount="10"
              className="text-sm font-bold text-[#22D3EE]"
            >
              Node.js &nbsp;&nbsp;&nbsp;&nbsp;
              Express.js &nbsp;&nbsp;&nbsp;&nbsp;
              MongoDB &nbsp;&nbsp;&nbsp;&nbsp;
              Mongoose &nbsp;&nbsp;&nbsp;&nbsp;
              REST API Development
            </marquee>
          )}
        </div>

        {/* Social Icons */}
        <div className="flex flex-wrap justify-center gap-4">
                    <a
            href="https://www.facebook.com/share/1Q4LPHunQt/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-blue-500 border hover:bg-blue-500 hover:text-white transition duration-300 hover:scale-110"
          >
            <FaFacebook size={20} />
          </a>

          <a
            href="https://www.linkedin.com/in/zar-khan-429256411?utm_source=share_via&utm_content=profile&utm_medium=member_android"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-blue-500 border hover:bg-blue-500 hover:text-white transition duration-300 hover:scale-110"
          >
            <RxLinkedinLogo size={20} />
          </a>

          <a
            href="https://www.instagram.com/adswithzaar?igsh=MW9mdnhxYXA4Z2t0aA=="
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-red-500 border hover:bg-red-500 hover:text-white transition duration-300 hover:scale-110"
          >
            <FaInstagram size={20} />
          </a>

          <a
            href="https://www.tiktok.com/@zarkhan8042?_r=1&_t=ZN-981bA6HEUys"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-black border hover:bg-black hover:text-white transition duration-300 hover:scale-110"
          >
            <IoLogoTiktok size={20} />
          </a>

          <a
            href="https://youtube.com/@zar-khan804?si=ZYQF_XUMAzc8hnjE"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-red-500 border hover:bg-red-500 hover:text-white transition duration-300 hover:scale-110"
          >
            <FaYoutubeSquare size={20} />
          </a>
        </div>

        {/* Desktop Right Marquee */}
        <div className="hidden lg:block w-full lg:w-1/3">
          <marquee
            direction="left"
            scrollAmount="10"
            className="text-sm sm:text-base font-bold text-[#22D3EE]"
          >
            Node.js &nbsp;&nbsp;&nbsp;&nbsp;
            Express.js &nbsp;&nbsp;&nbsp;&nbsp;
            MongoDB &nbsp;&nbsp;&nbsp;&nbsp;
            Mongoose &nbsp;&nbsp;&nbsp;&nbsp;
            REST API Development
          </marquee>
        </div>

      </div>
    </div>
  );
};

export default Marquee;