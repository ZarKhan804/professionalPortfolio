import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
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

    alert("Password Updated Successfully!");

    navigate("/login");
  };

  return (
    <div
      className="
      min-h-screen
      flex
      items-center
      justify-center
      bg-slate-500
      px-4
      sm:px-6
      lg:px-8
      py-8
      "
    >
      <div
        className="
        w-full
        max-w-md
        bg-white
        rounded-2xl
        shadow-2xl
        p-5
        sm:p-6
        md:p-8
        "
      >
        <h1 className="text-2xl sm:text-3xl font-bold text-center text-cyan-600">
          Reset Password
        </h1>

        <p className="text-center text-sm sm:text-base text-gray-500 mt-2 mb-6 sm:mb-8">
          Create a new secure password
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-2 text-sm sm:text-base font-medium text-gray-700">
              New Password
            </label>

            <input
              type="password"
              name="password"
              placeholder="Enter new password"
              value={formData.password}
              onChange={handleChange}
              className="
              w-full
              border
              border-gray-300
              rounded-lg
              px-4
              py-3
              text-sm
              sm:text-base
              outline-none
              focus:border-cyan-500
              focus:ring-2
              focus:ring-cyan-200
              "
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm sm:text-base font-medium text-gray-700">
              Confirm Password
            </label>

            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm new password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className=" w-full
              border
              border-gray-300
              rounded-lg px-4
              py-3F
              text-sm
              sm:text-base
              outline-none
              focus:border-cyan-500
              focus:ring-2
              focus:ring-cyan-200
              "
              required
            />
          </div>

          <button
            type="submit"
            className="
            w-full
            bg-cyan-600
            hover:bg-cyan-700
            text-white
            py-3
            rounded-lg
            font-semibold
            text-sm
            sm:text-base
            transition
            duration-300
            "
          >
            Update Password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
