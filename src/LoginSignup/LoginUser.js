import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import HeroSection from "./HeroSectionUser";
import Toast, { ToastContainerWrapper } from "./Helper/ToastNotify"; // Import Toast and ToastContainerWrapper


import homeIcon from "./icons8-home-24.png";

const LoginFormUser = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const filteredFormData = Object.keys(formData)
      .filter((key) => key) // Remove keys that are empty strings
      .reduce((obj, key) => {
        obj[key] = formData[key];
        return obj;
      }, {});

    console.log(filteredFormData);

    try {
      const respo = await axios.post(
        // "http://localhost:3001/admin/login",
        "http://localhost:3001/user/login",
        filteredFormData
      );
      console.log(respo);
      Toast.success("User Logged In Successfully"); // Replace alert with Toast
      navigate("/");
    } catch (e) {
      Toast.error("Error logging in"); // Replace alert with Toast
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <div className="flex min-h-screen">
      <HeroSection />
      <div className="w-1/2 bg-center flex items-center justify-center bg-white">
        <div className="w-full max-w-md p-8 bg-white">
          <NavLink to="/" className="text-gray-600 mb-8">
            <div
              style={{
                display: "flex",
                // alignItems: "left",
                // justifyContent: "center",
                height: "auto",
              }}
            >
              <img
                src={homeIcon}
                alt="Home Icon"
                style={{ width: "auto", height: "auto" }}
              />
            </div>
          </NavLink>
          <h2 className="text-3xl font-semibold mb-4 text-black">
            Ready to Dive Back In?
          </h2>
          <p className="text-gray-600 mb-8">
            Enter your credentials to pick up right where you left off.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="email"
              >
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                onChange={handleChange}
                value={formData.email}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
                placeholder="Email"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-sm font-medium text-gray-700"
                htmlFor="password"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                onChange={handleChange}
                value={formData.password}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
                placeholder="Password"
              />
            </div>
            <div className="flex items-center justify-between mb-6">
              <div className="text-sm text-indigo-600 hover:text-indigo-500">
                Forgot Password?
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-black text-white py-2 rounded-md"
            >
              Log in
            </button>
          </form>
          <p className="mt-6 text-center text-gray-600 text-sm">
            Don't have an account?
            <NavLink
              to="/signupUser"
              className="text-indigo-600 hover:text-indigo-500"
            >
              Sign up for free
            </NavLink>
          </p>
        </div>
      </div>
      <ToastContainerWrapper />
    </div>
  );
};

export default LoginFormUser;
