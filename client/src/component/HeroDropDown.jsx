import React, { useState } from 'react';
import { asset } from '../assets/asset';

const HeroDropDown = () => {
  const [toggle, setToggle] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('Select Country');

  const countries = ['Pakistan', 'India', 'USA', 'Canada'];

  const handleSelect = (country) => {
    setSelectedCountry(country);
    setToggle(false);
  };

  return (
    <div className="relative text-black w-48">
      <div
        onClick={() => setToggle(!toggle)}
        className="flex items-center justify-between px-4 py-2 border border-gray-300 rounded-md cursor-pointer bg-white"
      >
        {selectedCountry}
        <span className="text-gray-500"><img className={`${toggle ? 'rotate-180':'rotate-0'}`} src={asset.down} alt="" /></span>
      </div>
      {toggle && (
        <ul className="absolute top-full left-0 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-md">
          {countries.map((country, index) => (
            <li
              key={index}
              onClick={() => handleSelect(country)}
              className="px-4 py-2 cursor-pointer hover:bg-gray-100"
            >
              {country}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default HeroDropDown;

