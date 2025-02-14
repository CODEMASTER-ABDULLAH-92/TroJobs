import React, { useState } from 'react';
import { asset } from '../assets/asset';
import { Link, useNavigate } from 'react-router-dom';

const Reg = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [hide, setHide] = useState(false);

  // Validation Rules
  const isMinLength = password.length >= 8;
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasUppercase = /[A-Z]/.test(password);



  const handleContinue = () => {
    if (!email.trim()) {
      setError(true);
      return;
    }
    setError(false);
    navigate('/registered');
  };

  return (
    <div className="flex flex-row min-w-full w-full">
      {/* Left Section with Gradient and Background Image */}
      <div
        className="min-w-full md:block hidden md:min-w-[40%] min-h-[100vh] bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 46, 91, 0.7) 0%, rgba(91, 119, 146, 0.61) 50%, rgba(231, 230, 230, 0) 100%), url(${asset.loginImg})`,
        }}
      ></div>

      {/* Right Section */}
      <div className="flex flex-col min-h-full md:w-auto m-auto justify-start items-start w-full px-6 md:px-16">
        {/* Back to Home */}
        <Link to="/" className="flex items-center self-start py-4 gap-4">
          <img src={asset.leftArr} alt="Back Arrow"  />
          <p className="text-xl">Home</p>
        </Link>

        {/* Gear Icon */}
        <img
          src={asset.gear}
          alt="Gear"
          className="max-w-10 max-h-10 mt-4 self-start"
        />

        {/* Title and Subtitle */}
        <h1 className="pt-5 text-2xl md:text-[40px]  font-semibold text-start">
Register with us
        </h1>
        <p className="pt-1 text-gray-700 text-start">
          Explore open career opportunities
        </p>

        {/* Email Input */}
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className={`outline-none px-4 py-3 text-lg tracking-tight border w-full rounded-md mt-4 ${
            error ? 'border-red-500' : ''
          }`}
        />
        {error && (
          <p className="text-red-500 text-sm mt-2">Email is required</p>
        )}

<div className="flex items-center w-full border border-gray-300 rounded-md mt-4 px-3 py-2">
          <input
            type={hide ? 'text' : 'password'}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="flex-1 outline-none text-lg -tracking-tighter text-gray-700"
          />
          <img
            src={asset.eye}
            onClick={() => setHide(!hide)}
            alt="Show Password"
            className="w-5 h-5 cursor-pointer"
          />
        </div>
        <div className="text-gray-400 grid md:grid-cols-1 lg:grid-cols-2 py-5 gap-x-9 gap-y-2">
          <div className={`flex items-center justify-start text-xl gap-3 ${isMinLength ? 'text-green-500' : ''}`}>
            {isMinLength ? '\u2713' : '\u2717'} 8 Characters Minimum

          </div>
          <div className={`flex items-center justify-start text-xl gap-3 ${hasSpecialChar ? 'text-green-500' : ''}`}>
          {hasSpecialChar ? '\u2713' : '\u2717'} 1 Special Characters

          </div>
          <div className={`flex items-center justify-start text-xl gap-3 ${hasNumber ? 'text-green-500' : ''}`}>
          {hasNumber? '\u2713' : '\u2717'} 1 Number

          </div>
          <div className={`flex items-center justify-start text-xl gap-3 ${hasUppercase ? 'text-green-500' : ''}`}>
          {hasUppercase ? '\u2713' : '\u2717'} 1 Uppercase Characters

          </div>
        </div>
        {/* Continue Button */}
        {/* <button
          onClick={handleContinue}
          className="w-full text-center outline-none border-none px-4 py-3 text-lg bg-[#04ADE6] text-white tracking-tight rounded-md mt-4"
        >
Register
        </button> */}

        <button 
        onClick={handleContinue}
          className={`w-full outline-none text-center border-none px-4 py-3 text-lg tracking-tight rounded-md mt-4 ${
            isMinLength && hasSpecialChar && hasNumber && hasUppercase
              ? 'bg-[#04ADE6] text-white cursor-pointer'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
          disabled={
            !(
              isMinLength &&
              hasSpecialChar &&
              hasNumber &&
              hasUppercase
      
            )
          }
        >
          Reset Password
        </button>
    

        {/* Footer Links */}

        <p className="text-center self-center text-gray-700 mt-3 ">
Already ave an account? {' '}
          <Link to="/login" className="text-[#04ADE6] cursor-pointer hover:underline">
Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Reg;
