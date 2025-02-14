
import React, { useState } from 'react';
import { asset } from '../assets/asset';
import { Link } from 'react-router-dom';

const Password = () => {

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
      

        {/* Gear Icon */}
        <img
          src={asset.gear}
          alt="Gear"
          className="max-w-10 max-h-10 mt-4 self-start"
        />

        {/* Title and Subtitle */}
        <h1 className="pt-5 text-2xl md:text-4xl font-semibold text-start">
All one!
        </h1>
        <p className="pt-1 text-gray-700 text-start">
        Your password has been reset. You're now ready to <br /> access your account with the updated credentials.
        </p>

 


        {/* Login Button */}
        <Link to="/login" className="w-full outline-none text-center border-none px-4 py-3 text-lg bg-[#04ADE6] text-white tracking-tight rounded-md mt-4">
        Go Back to Login
        </Link>
        <Link to="/" className="w-full outline-none text-center px-4 py-3 text-lg border-2 text-gray-500  -tracking-tight rounded-md mt-4">
        Go to Homepage
        </Link>
      </div>
    </div>
  );
};

export default Password;

