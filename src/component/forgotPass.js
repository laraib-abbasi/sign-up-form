import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const ForgotPass = () => {
  const navigate = useNavigate();
  const resetButton=()=>{
    navigate("/login")
  }
  
  const [formData, setFormData] = useState({
    newPassword: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const validateForm = () => {
    
    const newErrors = {};

    if (!formData.newPassword) newErrors.newPassword = "This field can not be empty";
   
    if (!formData.confirmPassword) newErrors.password = "This field can not be empty";
   

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
    <div className="bg-[#f5f5f5] min-h-screen flex justify-center items-center grid p-6 dark:bg-slate-950 ">
      <div className="bg-white w-full max-w-lg p-8 rounded-3xl shadow-2xl dark:bg-slate-800 ">
        
        <h2 className="text-lg text-center font-semibold text-primary mb-12">Reset your password</h2>
        
        <form onSubmit={handleSubmit}>
          
{/* newPassword */}
          <div className=" relative mb-4">
            <input
                id="newPassword"
                type="text"
                value={formData.newPassword}
                onChange={handleChange}
                className={`peer w-full p-3 rounded-sm border ${
                  errors.newPassword ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-1 
                focus:ring-primary focus:border-none placeholder-transparent
                bg-transparent`}
                placeholder="newPassword"
              />
              <label 
                 for="newPassword" 
                 class="absolute -top-2.5 bg-white px-1 left-2 text-sm transition-all duration-200 text-gray-500 peer-focus:text-primary  peer-placeholder-shown:bg-transparent
                 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-lg peer-placeholder-shown:top-2.5
                 peer-focus:-top-2.5
                 peer-focus:text-sm
                 transition-all duration-200
                 peer-focus:bg-white
                 "
              >
                New Password 
              </label>
            {errors.newPassword && (
              <p className="text-red-500 text-sm mt-1">{errors.newPassword}</p>
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
                 "
              >
                Confirm Password
              </label>
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">{errors.confirmPassword}</p>
              )}
            </div>
            
          </div>
          
          <button
            type="submit"
            onClick={resetButton}
            className="w-full bg-btnbg text-white font-bold p-3 mt-4 rounded-lg hover:bg-teal-800 focus:outline-none focus:ring-4 focus:ring-rose-400 transition duration-300"
          >
           Reset Password
          </button>
        </form>
      </div>
      <div className="flex  justify-center   ">
        
      </div>
    </div>
  );
};

export default ForgotPass