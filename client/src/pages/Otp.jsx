import React, { useState } from 'react';
import { asset } from '../assets/asset';
import { Link, useLocation } from 'react-router-dom';

const Otp = () => {
  const location = useLocation();
  const email = location.state?.email || 'sample@gmail.com'; // Default if no email passed
  const [otp, setOtp] = useState(['', '', '', '']);

  const handleChange = (value, index) => {
    if (isNaN(value)) return; // Allow only numeric input
    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);

    // Focus next input if available
    if (value && index < otp.length - 1) {
      document.getElementById(`otp-input-${index + 1}`).focus();
    }
  };

  const handleBackspace = (value, index) => {
    if (!value && index > 0) {
      document.getElementById(`otp-input-${index - 1}`).focus();
    }
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
        <Link to="/login" className="flex items-center self-start py-4 gap-4">
          <img src={asset.leftArr} alt="Back Arrow" className="" />
          <p className="text-xl">Go Back</p>
        </Link>

        {/* Title and Subtitle */}
        <h1 className="pt-5 text-2xl md:text-4xl font-semibold text-start">
          Password Reset
        </h1>
        <p className="pt-1 text-gray-700 text-start">
          We sent a code to {email}
        </p>

        {/* OTP Inputs */}
        <div className="flex gap-4 mt-6">
          {otp.map((digit, index) => (
            <input
              key={index}
              id={`otp-input-${index}`}
              type="text"
              maxLength="1"
              value={digit}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => {
                if (e.key === 'Backspace') handleBackspace(e.target.value, index);
              }}
              className="w-12 h-12 text-center text-xl border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#04ADE6]"
            />
          ))}
        </div>

        {/* Continue Button */}
        <Link
          to="/reset"
          className="w-full outline-none text-center border-none px-4 py-3 text-lg bg-[#04ADE6] text-white tracking-tight rounded-md mt-6"
        >
          Continue
        </Link>

        {/* Footer Links */}
        <Link
          to="/forgetpassword"
          className="text-center self-center text-[#04ADE6] mt-4 cursor-pointer hover:underline"
        >
          Didn't receive the email? Click here to resend
        </Link>

        <p className="text-center self-center text-gray-700 mt-3">
          Don't have an account yet?{' '}
          <Link
            to="/register"
            className="text-[#04ADE6] cursor-pointer hover:underline"
          >
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Otp;
