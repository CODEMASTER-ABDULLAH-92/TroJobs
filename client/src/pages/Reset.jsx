import React, { useState } from 'react';
import { asset } from '../assets/asset';
import { Link, useNavigate } from 'react-router-dom';

const Reset = () => {
  const navigate = useNavigate();
  const handlenavidgate = ()=>{
    navigate('/done')
  }
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [hide, setHide] = useState(false);
  const [confrimHide, setconfrimHide] = useState(false);

  // Validation Rules
  const isMinLength = password.length >= 8;
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
  const hasNumber = /\d/.test(password);
  const hasUppercase = /[A-Z]/.test(password);
  const passwordsMatch = password && password === confirmPassword;

  return (
    <div className="flex flex-row min-w-full min-h-dvh w-full">
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
          <img src={asset.leftArr} alt="Back Arrow" />
          <p className="text-xl">Back To Login</p>
        </Link>

        {/* Gear Icon */}
        <img
          src={asset.gear}
          alt="Gear"
          className="max-w-10 max-h-10 mt-4 self-start"
        />

        {/* Title and Subtitle */}
        <h1 className="pt-5 text-2xl md:text-4xl font-semibold text-start">
          Set New Password
        </h1>

        {/* Password Input */}
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

        {/* Password Requirements */}
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

        {/* Confirm Password Input */}
        <div className="flex items-center w-full border border-gray-300 rounded-md mt-4 px-3 py-2">
          <input
            type={confrimHide ? 'text' : 'password'}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            className="flex-1 outline-none text-lg tracking-tight text-gray-700"
          />
          <img
            src={asset.eye}
onClick={()=>setconfrimHide(!confrimHide)}
            alt="Show Password"
            className="w-5 h-5 cursor-pointer"
          />
        </div>

        {/* Password Match Feedback */}
        {password && confirmPassword && (
          <p
            className={`mt-2 text-lg ${
              passwordsMatch ? 'text-green-500' : 'text-red-500'
            }`}
          >
            {passwordsMatch ? 'Passwords match' : 'Passwords do not match'}
          </p>
        )}

        {/* Reset Password Button */}
        <button onClick={handlenavidgate}
          className={`w-full outline-none text-center border-none px-4 py-3 text-lg tracking-tight rounded-md mt-4 ${
            isMinLength && hasSpecialChar && hasNumber && hasUppercase && passwordsMatch
              ? 'bg-[#04ADE6] text-white cursor-pointer'
              : 'bg-gray-300 text-gray-500 cursor-not-allowed'
          }`}
          disabled={
            !(
              isMinLength &&
              hasSpecialChar &&
              hasNumber &&
              hasUppercase &&
              passwordsMatch
            )
          }
        >
          Reset Password
        </button>

        {/* Footer Links */}
        <p className="text-center self-center text-gray-700 mt-3">
          Don't have an account yet?{' '}
          <Link to="/register" className="text-[#04ADE6] cursor-pointer hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Reset;
