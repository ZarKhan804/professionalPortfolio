import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

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
            text-xs
            sm:text-sm
            border
            border-white/20
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
            Build Your
            <br />
            <span className="text-cyan-400">Future With Us</span>
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
            Create your account and unlock premium web development resources,
            modern projects, exclusive learning materials and powerful tools.
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
                ⚡
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-bold">
                  Lightning Fast
                </h3>

                <p className="text-sm sm:text-base text-slate-300">
                  Optimized performance and modern UI.
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
                🔒
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-bold">
                  Secure Platform
                </h3>

                <p className="text-sm sm:text-base text-slate-300">
                  Protected authentication system.
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
                  Professional Projects
                </h3>

                <p className="text-sm sm:text-base text-slate-300">
                  Build real-world applications.
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
            <h1
              className="
              text-2xl
              sm:text-3xl
              font-black
              text-center
              text-cyan-600
              "
            >
              Create Account
            </h1>

            <p className="text-center text-gray-500 mt-2">
              Register to continue
            </p>

                        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
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

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
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

              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
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

              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
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
                Register
              </button>
            </form>

            <p className="text-center mt-6 text-sm sm:text-base text-gray-600">
              Already have an account?
              <Link
                to="/login"
                className="text-cyan-600 font-bold ml-2 hover:underline"
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;