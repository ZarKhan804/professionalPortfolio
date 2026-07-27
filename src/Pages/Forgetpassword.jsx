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
      px-6
      "
      style={{
        backgroundImage:
          "linear-gradient(rgba(15,23,42,.85),rgba(15,23,42,.9)),url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1600')",
      }}
    >
      <div className="max-w-7xl w-full grid lg:grid-cols-2 gap-10 items-center">
        {/* Left Side */}
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
            Reset Your
            <br />
            <span className="text-cyan-400">Password Securely</span>
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
            Enter your email and create a new password to continue securely.
          </p>

          <div className="space-y-6 mt-10">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-500 flex items-center justify-center text-2xl">
                🔐
              </div>

              <div>
                <h3 className="text-xl font-bold">Secure Recovery</h3>
                <p className="text-slate-300">
                  Protected password reset system.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-500 flex items-center justify-center text-2xl">
                ⚡
              </div>

              <div>
                <h3 className="text-xl font-bold">Fast Verification</h3>
                <p className="text-slate-300">Receive OTP instantly.</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-cyan-500 flex items-center justify-center text-2xl">
                💻
              </div>

              <div>
                <h3 className="text-xl font-bold">Easy Access</h3>
                <p className="text-slate-300">
                  Continue your development journey.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
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
            <h1 className="text-3xl font-black text-center text-cyan-600">
              Forgot Password
            </h1>

            <p className="text-center text-gray-500 mt-2 mb-8">
              Enter your email and create a new password
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Email */}
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={form.email}
                onChange={handleChange}
                className="w-full p-3 rounded-xl border outline-none focus:ring-2 focus:ring-cyan-400"
                required
              />

              {/* Password */}
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="New Password"
                  value={form.password}
                  onChange={handleChange}
                  className="w-full p-3 rounded-xl border outline-none focus:ring-2 focus:ring-cyan-400"
                  required
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-3 text-sm text-cyan-600 font-semibold"
                >
                  {showPassword ? "Show" : "Hide"}
                </button>
              </div>

              {/* Confirm Password */}
              <div className="relative">
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmpassword"
                  placeholder="Confirm Password"
                  value={form.confirmpassword}
                  onChange={handleChange}
                  className="w-full p-3 rounded-xl border outline-none focus:ring-2 focus:ring-cyan-400"
                  required
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowConfirmPassword(!showConfirmPassword)
                  }
                  className="absolute right-4 top-3 text-sm text-cyan-600 font-semibold"
                >
                  {showConfirmPassword ? "Show" : "Hide"}
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
                duration-300
                "
              >
                Send OTP
              </button>
            </form>

            <p className="text-center mt-6 text-gray-600">
              Remember your password?
              <Link
                to="/login"
                className="text-cyan-600 font-bold ml-2 hover:underline"
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