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
    px-6
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
      lg:grid-cols-2
      gap-10
      items-center
      "
      >
     

        <div className="text-white">
          <span
            className="
          inline-block
          px-5
          py-2
          rounded-full
          bg-white/10
          backdrop-blur-md
          border
          border-white/20
          text-sm
          "
          >
            🚀 Welcome to Zar Khan Portfolio
          </span>

          <h1
            className="
          text-5xl
          lg:text-6xl
          font-black
          mt-8
          leading-tight
          "
          >
            Verify Your
            <br />
            <span className="text-cyan-400">Account Securely</span>
          </h1>

          <p
            className="
          mt-6
          text-lg
          text-slate-300
          leading-8
          max-w-xl
          "
          >
            Enter the verification code sent to your email and continue your
            secure journey.
          </p>

          <div className="space-y-6 mt-10">
            <div className="flex items-center gap-4">
              <div
                className="
              w-12
              h-12
              rounded-xl
              bg-cyan-500
              flex
              items-center
              justify-center
              text-2xl
              "
              >
                🔐
              </div>

              <div>
                <h3 className="text-xl font-bold">Secure Verification</h3>

                <p className="text-slate-300">Your account stays protected.</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div
                className="
              w-12
              h-12
              rounded-xl
              bg-cyan-500
              flex
              items-center
              justify-center
              text-2xl
              "
              >
                ⚡
              </div>

              <div>
                <h3 className="text-xl font-bold">Quick Process</h3>

                <p className="text-slate-300">
                  Verify your identity instantly.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div
                className="
              w-12
              h-12
              rounded-xl
              bg-cyan-500
              flex
              items-center
              justify-center
              text-2xl
              "
              >
                💻
              </div>

              <div>
                <h3 className="text-xl font-bold">Modern Platform</h3>

                <p className="text-slate-300">
                  Continue building amazing projects.
                </p>
              </div>
            </div>
          </div>
        </div>

  

        <div className="flex justify-center">
          <div
            className="
          w-full
          max-w-md
          bg-white/95
          backdrop-blur-xl
          rounded-3xl
          shadow-2xl
          p-8
          "
          >
            <h1
              className="
            text-3xl
            font-black
            text-center
            text-cyan-600
            "
            >
              OTP Verification
            </h1>

            <p
              className="
            text-center
            text-gray-500
            mt-2
            mb-8
            "
            >
              Enter 6-digit OTP sent to your email
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <input
                type="text"
                maxLength={6}
                placeholder="123456"
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/\D/g, ""))}
                className="
              w-full
              p-4
              rounded-xl
              border
              text-center
              text-3xl
              tracking-[12px]
              font-bold
              outline-none
              focus:ring-2
              focus:ring-cyan-400
              "
                required
              />

              <button
                className="
              w-full
              py-3
              rounded-xl
              bg-cyan-600
              hover:bg-cyan-700
              text-white
              font-bold
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
