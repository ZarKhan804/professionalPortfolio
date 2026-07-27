import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);
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
            Build Your
            <br />
            <span className="text-cyan-400">Future With Us</span>
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
            Login to access premium web development resources, modern projects,
            learning materials and powerful tools to grow your skills.
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
                ⚡
              </div>

              <div>
                <h3 className="text-xl font-bold">Lightning Fast</h3>

                <p className="text-slate-300">High performance applications.</p>
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
                🔒
              </div>

              <div>
                <h3 className="text-xl font-bold">Secure Login</h3>

                <p className="text-slate-300">
                  Safe and protected authentication.
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
                <h3 className="text-xl font-bold">Premium Projects</h3>

                <p className="text-slate-300">Build modern real-world apps.</p>
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
              Welcome Back
            </h1>

            <p
              className="
            text-center
            text-gray-500
            mt-2
            mb-8
            "
            >
              Login to continue
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="
              w-full
              p-3
              rounded-xl
              border
              outline-none
              focus:ring-2
              focus:ring-cyan-400
              "
                required
              />

              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={handleChange}
                className="
              w-full
              p-3
              rounded-xl
              border
              outline-none
              focus:ring-2
              focus:ring-cyan-400
              "
                required
              />

              <div className="flex justify-between items-center text-sm">
                <label className="flex items-center gap-2 text-gray-600">
                  <input
                    type="checkbox"
                    name="rememberMe"
                    checked={formData.rememberMe}
                    onChange={handleChange}
                    className="accent-cyan-600"
                  />
                  Remember Me
                </label>

                <Link
                  to="/forgot-password"
                  
                  className="text-cyan-600 font-bold hover:underline"
                >
                  Forgot Password?
                </Link>
              </div>

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
                Login
              </button>
            </form>

            <p className="text-center mt-6 text-gray-600">
              Don't have an account?
              <Link to="/register" className="text-cyan-600 font-bold ml-2">
                Register
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
