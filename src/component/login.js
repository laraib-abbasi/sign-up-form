import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./navbar";
import DarkMode from "./darkMode";

const Login = () => {

  const navigate = useNavigate();
  const logInButton=()=>{
    navigate("/profile")
  }
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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

    if (!formData.email) newErrors.email = "This field can not be empty";
   
    if (!formData.password) newErrors.password = "This field can not be empty";
   

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Login successful!");
    }
  };

  return (
    <div className="bg-primBg  min-h-screen flex justify-center items-center grid p-6 dark:bg-dark-primBg">
      <div className="flex justify-end">
      <DarkMode/></div>
       <h1 className="flex justify-center  items-center text-4xl font-bold text-center text-bavit dark:text-dark-bavit font-bavit mb-2 pb-0 ">BAV-IT</h1> 
      <div className="bg-formBg dark:bg-dark-formBg w-full max-w-lg p-8 rounded-3xl shadow-2xl ">
        
        <h2 className="text-lg text-center font-semibold text-primary mb-12">Log in to your account</h2>
        
        <form onSubmit={handleSubmit}>
          
{/* email */}
          <div className=" relative mb-4">
            <input
                id="email"
                type="text"
                value={formData.email}
                onChange={handleChange}
                className={`peer w-full p-3 rounded-sm border ${
                  errors.email ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-1 
                focus:ring-primary focus:border-none placeholder-transparent
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
                 peer-focus:bg-white dark:peer-focus:bg-dark-formBg
                 "
              >
                Email Address
              </label>
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div className="grid grid-cols-1  w-80 gap-4 mb-4">
            {/* Password */}
            <div className="relative"> 
            <input
                id="password"
                type="text"
                value={formData.password}
                onChange={handleChange}
                className={`peer w-full p-3 rounded-sm border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-1 focus:ring-primary focus:border-none placeholder-transparent
                bg-transparent`}
                placeholder="Password"
              />
              <label 
                 for="password" 
                 class="absolute -top-2.5 bg-white px-1 left-2 text-sm transition-all duration-200 text-gray-500 peer-focus:text-primary  peer-placeholder-shown:bg-transparent
                 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-lg peer-placeholder-shown:top-2.5
                 peer-focus:-top-2.5
                 peer-focus:text-sm
                 transition-all duration-200
                 peer-focus:bg-white
                 dark:peer-focus:bg-dark-formBg
                 "
              >
                Password
              </label>
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>
            
          </div>
          <a href="/forgotPass" className="text-secondary pb-2 hover:text-primary">Fotgot password ?</a>
          <button
            type="submit"
            onClick={logInButton}
            className="w-full bg-btnbg text-white font-bold p-3 mt-4 rounded-lg hover:bg-teal-800 focus:outline-none focus:ring-4 focus:ring-rose-400 transition duration-300"
          >
            Log In
          </button>
        </form>
      </div>
      <div className="flex  justify-center   ">
        <p className="dark:text-dark-bavit">Don't have an account? <a href="/" className="text-secondary  hover:text-primary">Sign Up</a></p>
      </div>
    </div>
  );
};

export default Login;
