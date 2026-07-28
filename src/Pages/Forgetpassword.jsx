import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
    confirmpassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.email || !form.password || !form.confirmpassword) {
      alert("Please fill all fields.");
      return;
    }

    if (form.password.length < 6) {
      alert("Password must be at least 6 characters.");
      return;
    }

    if (form.password !== form.confirmpassword) {
      alert("Passwords do not match.");
      return;
    }

    console.log(form);

    alert("OTP Sent Successfully!");

    navigate("/otp");
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
            Reset Your
            <br />
            <span className="text-cyan-400">
              Password Securely
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
            Enter your email and create a new password to continue
            securely.
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
                  Secure Recovery
                </h3>

                <p className="text-sm sm:text-base text-slate-300">
                  Protected password reset system.
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
                  Fast Verification
                </h3>

                <p className="text-sm sm:text-base text-slate-300">
                  Receive OTP instantly.
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
                  Easy Access
                </h3>

                <p className="text-sm sm:text-base text-slate-300">
                  Continue your development journey.
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
              Forgot Password
            </h1>

            <p className="text-center text-gray-500 mt-2 mb-8">
              Enter your email and create a new password
            </p>

                        <form onSubmit={handleSubmit} className="space-y-5 mt-6">
           
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                className="
                w-full
                px-4
                py-3
                rounded-xl
                border
                outline-none
                focus:ring-2
                focus:ring-cyan-400
                "
                required
              />

           
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="New Password"
                  value={form.password}
                  onChange={handleChange}
                  className="
                  w-full
                  px-4
                  py-3
                  pr-20
                  rounded-xl
                  border
                  outline-none
                  focus:ring-2
                  focus:ring-cyan-400
                  "
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="
                  absolute
                  right-4
                  top-1/2
                  -translate-y-1/2
                  text-sm
                  font-semibold
                  text-cyan-600
                  hover:text-cyan-700
                  "
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>

            
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmpassword"
                  placeholder="Confirm Password"
                  value={form.confirmpassword}
                  onChange={handleChange}
                  className="
                  w-full
                  px-4
                  py-3
                  pr-20
                  rounded-xl
                  border
                  outline-none
                  focus:ring-2
                  focus:ring-cyan-400
                  "
                  required
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                  className="
                  absolute
                  right-4
                  top-1/2
                  -translate-y-1/2
                  text-sm
                  font-semibold
                  text-cyan-600
                  hover:text-cyan-700
                  "
                >
                  {showConfirmPassword ? "Hide" : "Show"}
                </button>
              </div>

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
                Send OTP
              </button>
            </form>

            <p className="text-center mt-6 text-sm sm:text-base text-gray-600">
              Remember your password?

              <Link
                to="/login"
                className="ml-2 font-bold text-cyan-600 hover:underline"
              >
                Back to Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;