import React from 'react';
import { asset} from '../assets/asset'; // Assuming 'asset.homeImg' points to the image file
import Nav from './Nav';
import HeroDropDown from './HeroDropDown';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className="relative min-h-[560px] newGR">
      <Nav />
      <div>
        <img
          src={asset.homeImg}
          alt="Hero background"
          className="object-cover absolute top-0 left-0 right-0 bottom-0 -z-20 w-full h-full"
        />
        <div className="absolute px-[5%] z-10 -tracking-tighter">
          <h1 className="sm:text-4xl text-xl text-balance text-white pt-4 font-semibold">
            Explore open career <br /> opportunities.
          </h1>
          <p className="text-white py-5 text-balance w-[80vh]">
            We commit to exceptional company culture and outstanding benefits
          </p>
          <div className="bg-white py-5 mb-3 px-2 rounded-md gap-4 items-center flex justify-between  relative z-10">
            <h1 className="text-black md:text-2xl text-xl font-semibold">
              Find The Job that best suits You
            </h1>
            <HeroDropDown />
            <Link to='/jobListing' className='px-6 py-2 font-light rounded-md text-xl text-[#fafafa] bg-[#04ADE6]'>Search</Link>
          </div>
          <div className='flex max-w-[800px] gap-4 py-4'>
            <div className='flex justify-between w-full items-center py-4 px-3  bg-yellow-400 text-gray-700 rounded-md'><p> Discover Recent News </p> <img  className='hover:translate-x-3 transition-all cursor-pointer' src={asset.rightArr} alt="" /></div>
            <div className='flex justify-between w-full items-center py-4 px-3  bg-yellow-400 text-gray-700 rounded-md'><p> Know Our Process </p> <img className='hover:translate-x-3 transition-all cursor-pointer'  src={asset.rightArr} alt="" /></div>
          </div>
            <p className='text-white'>Hire Us and Our Services </p>
            <p className='text-white'>Jis tera hi koi new job post ho gi all users ko email kar do ka news jobs ai hain </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;


