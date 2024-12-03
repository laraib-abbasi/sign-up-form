import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import DarkMode from "./darkMode";


const Form = () => {
  const navigate=useNavigate();
  const signUpButton=()=>{
    navigate("/login")
  }
  
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};
    const nameVal = /^[a-zA-Z\s]+$/;

    if (!formData.firstName) {
      newErrors.firstName = "First name is required.";
    } else if (!nameVal.test(formData.firstName)) {
      newErrors.firstName = "First name cannot contain numbers or special characters.";
    }

    if (!formData.lastName) {
      newErrors.lastName = "Last name is required.";
    } else if (!nameVal.test(formData.lastName)) {
      newErrors.lastName = "Last name cannot contain numbers or special characters.";
    }

    if (!formData.lastName) newErrors.lastName = "Last name is required.";
    if (!formData.email.includes("@")) newErrors.email = "Invalid email address.";
    if (formData.password.length < 6) newErrors.password = "Password must be at least 6 characters.";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Signup successful!");
    }
  };

  return (


    <div className="bg-primBg min-h-screen flex justify-center items-center grid p-6 dark:bg-slate-950 ">
      {/* <h1 className="flex justify-center  items-center text-4xl font-bold text-center text-[#001F3F] mb-2 pb-0 ">BAV-IT</h1> */}
      <div className="bg-white w-full max-w-lg p-8 rounded-3xl shadow-2xl dark:bg-slate-800 ">
        
        <h2 className="text-lg text-center font-semibold text-primary mb-1  ">Create New Account</h2>
        <h1 className="text-center text-gray-500 text-sm mt-0 pt-0 mb-8">Get your free BAV-IT account now </h1>
        <form onSubmit={handleSubmit}>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            {/* first name */}
            <div className="relative">
            <input
                id="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                className={`peer w-full p-3 rounded-sm border ${
                  errors.firstName ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-1 focus:ring-primary focus:border-none placeholder-transparent
                bg-transparent`}
                placeholder="First Name"
              />
              <label 
                 for="firstName" 
                 class="absolute -top-2.5   px-1 left-2 text-sm transition-all duration-200 text-gray-500 peer-focus:text-primary  peer-placeholder-shown:bg-transparent
                 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-lg peer-placeholder-shown:top-2.5
                 peer-focus:-top-2.5
                 peer-focus:text-sm
                 transition-all duration-200
                 peer-focus:bg-white
                 "
              >
                First Name
              </label>

              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
              )}
            </div>

           { /*last name*/}
            <div className="relative">
              <input
                id="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleChange}
                className={`peer w-full p-3 rounded-sm border ${
                  errors.lastName ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-1 focus:ring-primary focus:border-none placeholder-transparent
                bg-transparent`}
                placeholder="Last name"
              />
              <label 
                 for="lastName" 
                 class="absolute -top-2.5 bg-white px-1 left-2 text-sm transition-all duration-200 text-gray-500 peer-focus:text-primary  peer-placeholder-shown:bg-transparent
                 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-lg peer-placeholder-shown:top-2.5
                 peer-focus:-top-2.5
                 peer-focus:text-sm
                 transition-all duration-200
                 peer-focus:bg-white
                 "
              >
                Last Name
              </label>
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
              )}
            </div>
          </div>
{/* email */}
          <div className=" relative mb-4">
            <input
                id="email"
                type="text"
                value={formData.email}
                onChange={handleChange}
                className={`peer w-full p-3 rounded-sm border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-1 focus:ring-primary focus:border-none placeholder-transparent
                bg-transparent`}
                placeholder="Email Address"
              />
              <label 
                 for="email" 
                 class="absolute -top-2.5 bg-white px-1 left-2 text-sm transition-all duration-200 text-gray-500 peer-focus:text-primary  peer-placeholder-shown:bg-transparent
                 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-lg peer-placeholder-shown:top-2.5
                 peer-focus:-top-2.5
                 peer-focus:text-sm
                 transition-all duration-200
                 peer-focus:bg-white
                 "
              >
                Email Address
              </label>
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            {/* Password */}
            <div className="relative"> 
            <input
                id="password"
                type="text"
                value={formData.password}
                onChange={handleChange}
                className={`peer w-full p-3 rounded-sm border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-1 focus:ring-primary  focus:border-none placeholder-transparent
                bg-transparent`}
                placeholder="Password"
              />
              <label 
                 for="password" 
                 class="absolute -top-2.5 bg-white px-1 left-2 text-sm transition-all duration-200 text-gray-500 peer-focus:text-primary   peer-placeholder-shown:bg-transparent
                 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-lg peer-placeholder-shown:top-2.5
                 peer-focus:-top-2.5
                 peer-focus:text-sm
                 transition-all duration-200
                 peer-focus:bg-white
                 "
              >
                Password
              </label>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>
            {/* confirmPassword */}
            <div className="relative">
            <input
                id="confirmPassword"
                type="text"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`peer w-full p-3 rounded-sm border ${
                  errors.confirmPassword ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-1 focus:ring-primary  focus:border-none placeholder-transparent bg-transparent`}
                placeholder=".."
              />
              <label 
                 for="confirmPassword" 
                 class="absolute -top-2.5 bg-white px-1 left-2 text-sm transition-all duration-200 text-gray-500 peer-focus:text-primary   peer-placeholder-shown:bg-transparent
                 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-lg peer-placeholder-shown:top-2.5
                 peer-focus:-top-2.5
                 peer-focus:text-sm
                 transition-all duration-200
                 peer-focus:bg-white
                 "
              >
                Confirm Password
              </label>
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword}
                </p>
              )}
            </div>
          </div>
          <button
            type="submit"
            onClick={signUpButton}
            className="w-full bg-btnbg text-white font-bold p-3 rounded-lg hover:bg-teal-800 focus:outline-none focus:ring-4 focus:ring-rose-400 transition duration-300"
          >
            Sign Up
          </button>
        </form>
      </div>
      <div className="flex items-start justify-center h-20">
        <p className="dark:text-slate-300">Already have an account? <a href="/login" className="text-secondary">Login</a></p>
      </div>
    </div>
  );
};

export default Form;
