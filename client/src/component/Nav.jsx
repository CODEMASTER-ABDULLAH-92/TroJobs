import React from 'react';
import { Link } from 'react-router-dom';
import { asset } from '../assets/asset';
import "@theme-toggles/react/css/Around.css";


const Nav = () => {
  return (
    <div className=" text-black  transition-colors duration-300 relative">
      <div className="overflow-hidden">
        <div className="pt-12 pb-3 flex justify-between px-[5%] items-center">
          {/* Logo */}
          <Link to="/">
            <img
              src={asset.logo}
              alt="Logo"
              className="h-12"
            />
          </Link>

          {/* Navigation Links and Buttons */}
          <ul className="flex items-center space-x-6">
            <li className="text-xl font-semibold cursor-pointer text-white">Find Jobs</li>
            <li>
            
            </li>
            <li>
              <Link to="/login" className="px-14 py-2 text-lg rounded-md bg-yellow-400 text-black hover:bg-yellow-300 transition duration-300">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nav;
