import React from 'react';
import { asset } from '../assets/asset';
import { Link } from 'react-router-dom';

const HomeBanner = () => {
  return (
    <div className="relative w-full my-12 ">
      {/* Gradient Background */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background: 'linear-gradient(0deg, #1e1e1e 0%, #002e5b 53%, #1f8abe 98%)',
        }}
      ></div>

      {/* Image */}
      <img
        src={asset.home2}
        className="absolute inset-0 w-full h-full object-cover opacity-70 -z-10"
        alt="Home Background"
      />

      {/* Text Content */}
      <div className="flex flex-col items-center justify-center min-h-[400px] px-4 text-center text-white">
        <h1 className="text-4xl md:text-5xl font-semibold">
          We're more than just a <br /> workplace. We're a family.
        </h1>
        <Link to="/register" className='bg-[#04ADE6] py-3 rounded-md px-16 my-6 text-xl text-white'>Join us</Link>
        <p>We are very happy to join our team , </p>
      </div>
    </div>
  );
};

export default HomeBanner;


