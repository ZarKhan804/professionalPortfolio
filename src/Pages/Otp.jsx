import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Otp = () => {
  const navigate = useNavigate();

  const [otp, setOtp] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (otp.length !== 6) {
      alert("Please enter a valid 6-digit OTP");
      return;
    }

    console.log("OTP:", otp);

    navigate("/reset-password");
  };

  return (
    <div
      className="
      min-h-screen
      bg-cover
      bg-center
      flex
      items-center
      justify-center
      px-4
      sm:px-6
      lg:px-10
      py-10
      "
      style={{
        backgroundImage:
          "linear-gradient(rgba(15,23,42,.85),rgba(15,23,42,.9)),url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600')",
      }}
    >
      <div
        className="
        max-w-7xl
        w-full
        grid
        grid-cols-1
        lg:grid-cols-2
        gap-12
        items-center
        "
      >
       
        <div className="text-white order-2 lg:order-1">
          <span
            className="
            inline-block
            px-4
            sm:px-5
            py-2
            rounded-full
            bg-white/10
            backdrop-blur-md
            border
            border-white/20
            text-xs
            sm:text-sm
            "
          >
            🚀 Welcome to Zar Khan Portfolio
          </span>

          <h1
            className="
            text-3xl
            sm:text-4xl
            md:text-5xl
            lg:text-6xl
            font-black
            mt-6
            leading-tight
            "
          >
            Verify Your
            <br />
            <span className="text-cyan-400">
              Account Securely
            </span>
          </h1>

          <p
            className="
            mt-5
            text-base
            sm:text-lg
            text-slate-300
            leading-7
            max-w-full
            lg:max-w-xl
            "
          >
            Enter the verification code sent to your email and continue your
            secure journey.
          </p>

          <div className="space-y-6 mt-10">
            <div className="flex items-center gap-4">
              <div
                className="
                w-10
                h-10
                sm:w-12
                sm:h-12
                rounded-xl
                bg-cyan-500
                flex
                items-center
                justify-center
                text-xl
                sm:text-2xl
                "
              >
                🔐
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-bold">
                  Secure Verification
                </h3>

                <p className="text-sm sm:text-base text-slate-300">
                  Your account stays protected.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div
                className="
                w-10
                h-10
                sm:w-12
                sm:h-12
                rounded-xl
                bg-cyan-500
                flex
                items-center
                justify-center
                text-xl
                sm:text-2xl
                "
              >
                ⚡
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-bold">
                  Quick Process
                </h3>

                <p className="text-sm sm:text-base text-slate-300">
                  Verify your identity instantly.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div
                className="
                w-10
                h-10
                sm:w-12
                sm:h-12
                rounded-xl
                bg-cyan-500
                flex
                items-center
                justify-center
                text-xl
                sm:text-2xl
                "
              >
                💻
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-bold">
                  Modern Platform
                </h3>

                <p className="text-sm sm:text-base text-slate-300">
                  Continue building amazing projects.
                </p>
              </div>
            </div>
          </div>
        </div>

      
        <div className="flex justify-center order-1 lg:order-2">
          <div
            className="
            w-full
            max-w-md
            bg-white/95
            backdrop-blur-xl
            rounded-3xl
            shadow-2xl
            p-6
            sm:p-8
            "
          >
            <h1 className="text-2xl sm:text-3xl font-black text-center text-cyan-600">
              OTP Verification
            </h1>

            <p className="text-center text-gray-500 mt-2 mb-8">
              Enter 6-digit OTP sent to your email
            </p>
                        <form onSubmit={handleSubmit} className="space-y-6 mt-6">
              <input
                type="text"
                maxLength={6}
                placeholder="123456"
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                className="
                w-full
                px-4
                py-4
                rounded-xl
                border
                text-center
                text-2xl
                sm:text-3xl
                tracking-[8px]
                sm:tracking-[12px]
                font-bold
                outline-none
                focus:ring-2
                focus:ring-cyan-400
                "
                required
              />

              <button
                type="submit"
                className="
                w-full
                py-3
                rounded-xl
                bg-cyan-600
                hover:bg-cyan-700
                text-white
                font-bold
                text-base
                sm:text-lg
                duration-300
                "
              >
                Verify OTP
              </button>
            </form>

            <div
              className="
              flex
              justify-between
              items-center
              flex-wrap
              gap-3
              mt-6
              text-sm
              "
            >
              <Link
                to="/forgot-password"
                className="
                text-cyan-600
                font-bold
                hover:underline
                "
              >
                Back
              </Link>

              <button
                type="button"
                onClick={() => alert("OTP Resent Successfully")}
                className="
                text-cyan-600
                font-bold
                hover:underline
                "
              >
                Resend OTP
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Otp;