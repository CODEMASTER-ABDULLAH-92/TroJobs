import React from 'react';
import { asset } from '../assets/asset';

const locations = [
  {
    name: 'Australia',
    jobs: '140 jobs',
    image: asset.au,
    arrow: asset.arrWhite,
  },
  {
    name: 'United States',
    jobs: '200 jobs',
    image: asset.nz, // Replace with the correct image
    arrow: asset.arrWhite,
  },
  {
    name: 'Canada',
    jobs: '120 jobs',
    image: asset.canada, // Replace with the correct image
    arrow: asset.arrWhite,
  },
  {
    name: 'Philippines',
    jobs: '120 jobs',
    image: asset.philippines, // Replace with the correct image
    arrow: asset.arrWhite,
  },
];

const Location = () => {
  return (
    <section className="px-[5%] py-10 my-20 relative">
      {/* Header Section */}
      <div className="flex justify-between items-center text-[24px] font-semibold tracking-tight text-gray-700">
        <h1>Our Locations</h1>
        <div className="flex items-center gap-3 cursor-pointer hover:underline">
          View All Locations <img src={asset.rightArr} alt="arrow" />
        </div>
      </div>

      {/* Locations Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
        {locations.map((location, index) => (
          <article key={index} className="relative">
            {/* Background Image */}
            <img src={location.image} className="w-full  object-cover rounded-2xl " alt={location.name} />

            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col justify-end p-6 rounded-md">
              <h2 className="text-2xl font-semibold text-white">{location.name}</h2>
              <p className="text-xl font-light text-white">{location.jobs}</p>
              <img src={location.arrow} className="mt-2 w-5 relative left-60 bottom-11" alt="arrow" />
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Location;

