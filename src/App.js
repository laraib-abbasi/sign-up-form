import React, { useState } from "react";

const Form = () => {
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

    if (!formData.firstName) newErrors.firstName = "First name is required.";
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
    <div className="bg-gradient-to-b from-rose-400 to-pink-200 min-h-screen flex justify-center items-center p-6">
      <div className="bg-gradient-to-b from-rose-200 to-gray-50 w-full max-w-lg p-8 rounded-3xl shadow-2xl ">
        <h1 className="text-4xl font-bold text-center text-rose-900 mb-6">BAV-IT</h1>
        <h2 className="text-2xl text-center font-semibold text-rose-700 mb-8">Create a New Account</h2>
        <form onSubmit={handleSubmit}>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div>
              <input
                id="firstName"
                type="text"
                value={formData.firstName}
                onChange={handleChange}
                className={`w-full p-3 rounded-lg border ${
                  errors.firstName ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-rose-400`}
                placeholder="First Name"
              />
              {errors.firstName && (
                <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
              )}
            </div>
            <div>
              <input
                id="lastName"
                type="text"
                value={formData.lastName}
                onChange={handleChange}
                className={`w-full p-3 rounded-lg border ${
                  errors.lastName ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-rose-400`}
                placeholder="Last Name"
              />
              {errors.lastName && (
                <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
              )}
            </div>
          </div>
          <div className="mb-4">
            <input
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-3 rounded-lg border ${
                errors.email ? "border-red-500" : "border-gray-300"
              } focus:outline-none focus:ring-2 focus:ring-rose-400`}
              placeholder="Email Address"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <div className="grid sm:grid-cols-2 gap-4 mb-4">
            <div>
              <input
                id="password"
                type="password"
                value={formData.password}
                onChange={handleChange}
                className={`w-full p-3 rounded-lg border ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-rose-400`}
                placeholder="New Password"
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">{errors.password}</p>
              )}
            </div>
            <div>
              <input
                id="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                className={`w-full p-3 rounded-lg border ${
                  errors.confirmPassword ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-rose-400`}
                placeholder="Confirm Password"
              />
              {errors.confirmPassword && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.confirmPassword}
                </p>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-rose-700 text-white font-semibold p-3 rounded-lg hover:bg-rose-800 focus:outline-none focus:ring-4 focus:ring-rose-400 transition duration-300"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;

