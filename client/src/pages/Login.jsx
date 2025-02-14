import React, { useState } from 'react';
import { asset } from '../assets/asset';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState(false);
  const navigate = useNavigate();

  const handleContinue = () => {
    if (!email.trim()) {
      setError(true);
      return;
    }
    setError(false);
    navigate('/password');
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
        <h1 className="pt-5 text-2xl md:text-4xl font-semibold text-start">
          Login to your account
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

        {/* Continue Button */}
        <button
          onClick={handleContinue}
          className="w-full text-center outline-none border-none px-4 py-3 text-lg bg-[#04ADE6] text-white tracking-tight rounded-md mt-4"
        >
          Continue with email
        </button>

        {/* Divider */}
        <div className="w-full flex items-center py-5">
          <hr className="h-[2px] w-full bg-gray-400" />
          <p className="px-3 text-gray-600 bg-white">OR</p>
          <hr className="h-[2px] w-full bg-gray-400" />
        </div>

        {/* Social Login Options */}
        <div className="flex flex-col gap-4 w-full">
          {[
            { icon: asset.appleIcon, label: 'Continue with Apple' },
            { icon: asset.faceBook, label: 'Continue with Facebook' },
            { icon: asset.googleIcon, label: 'Continue with Google' },
          ].map(({ icon, label }, idx) => (
            <div
              key={idx}
              className="border border-gray-300 rounded-md px-4 py-3 flex items-center gap-3 justify-center hover:shadow-md transition-shadow duration-200"
            >
              <img src={icon} alt={`${label} Icon`} className="w-6 h-6" />
              <p className="text-gray-800">{label}</p>
            </div>
          ))}
        </div>

        {/* Footer Links */}
        <Link to="/forgetpassword" className="text-center self-center text-[#04ADE6] mt-4 cursor-pointer hover:underline">
          Can't sign in
        </Link>

        <p className="text-center self-center text-gray-700 mt-3 ">
          Don't have an account yet?{' '}
          <Link to="/register" className="text-[#04ADE6] cursor-pointer hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
