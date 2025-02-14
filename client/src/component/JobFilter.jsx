import React, { useState } from 'react';
import { asset } from '../assets/asset';

const JobFilter = () => {
  const [hide1, setHide1] = useState(false);
  const [hide2, setHide2] = useState(false);
  const [hide3, setHide3] = useState(false);

  // State for checkboxes
  const [checkedStates, setCheckedStates] = useState({
    all: false,
    permanent: false,
    temporary: false,
    freelance: false,
    remote: false,
    usa: false,
    canada: false,
    india: false,
    germany: false,
    alllocations:false
  });

  // Handler for checkbox toggle
  const handleCheckboxChange = (type) => {
    setCheckedStates((prevState) => ({
      ...prevState,
      [type]: !prevState[type],
    }));
  };

  return (
    <div className="p-4 border-2 border-gray-300">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="font-semibold text-xl">Filters</h1>
        <button
          className="px-4 py-2 rounded-md bg-[#FAFAFA] text-xl text-[#04ADE6] hover:bg-[#04ADE6]/10 transition"
          onClick={() =>
            setCheckedStates({
              all: false,
              permanent: false,
              temporary: false,
              freelance: false,
              remote: false,
              usa: false,
              canada: false,
              india: false,
              germany: false,
              alllocations:false
            })
          }
        >
          Reset
        </button>
      </div>

      {/* Job Type */}
      <div className="py-4 px-4 rounded-md">
        <div
          className="flex justify-between items-center cursor-pointer pb-3"
          onClick={() => setHide1(!hide1)}
        >
          <h1 className="font-semibold text-xl hover:text-[#04ADE6] transition">
            Job Type
          </h1>
          <img
            src={asset.down}
            className={`h-6 w-6 transform transition-transform ${
              hide1 ? 'rotate-180' : 'rotate-0'
            }`}
            alt="Toggle Icon"
          />
        </div>
        <div className={`${hide1 ? 'flex' : 'hidden'} flex-col gap-3`}>
          <div className="flex items-center gap-4">
            <input
              type="checkbox"
              id="all"
              checked={checkedStates.all}
              onChange={() => handleCheckboxChange('all')}
              className="h-5 w-5 border-gray-300 rounded-md cursor-pointer"
            />
            <label
              htmlFor="all"
              className={`text-lg cursor-pointer hover:text-[#04ADE6] transition ${
                checkedStates.all ? 'font-bold text-black' : 'text-gray-600'
              }`}
            >
              All Jobs (500)
            </label>
          </div>
          <div className="flex items-center gap-4">
            <input
              type="checkbox"
              id="permanent"
              checked={checkedStates.permanent}
              onChange={() => handleCheckboxChange('permanent')}
              className="h-5 w-5 border-gray-300 rounded-md cursor-pointer"
            />
            <label
              htmlFor="permanent"
              className={`text-lg cursor-pointer hover:text-[#04ADE6] transition ${
                checkedStates.permanent ? 'font-bold text-black' : 'text-gray-600'
              }`}
            >
              Permanent (340)
            </label>
          </div>
          <div className="flex items-center gap-4">
            <input
              type="checkbox"
              id="temporary"
              checked={checkedStates.temporary}
              onChange={() => handleCheckboxChange('temporary')}
              className="h-5 w-5 border-gray-300 rounded-md cursor-pointer"
            />
            <label
              htmlFor="temporary"
              className={`text-lg cursor-pointer hover:text-[#04ADE6] transition ${
                checkedStates.temporary ? 'font-bold text-black' : 'text-gray-600'
              }`}
            >
              Temporary (20)
            </label>
          </div>
          <div className="flex items-center gap-4">
            <input
              type="checkbox"
              id="freelance"
              checked={checkedStates.freelance}
              onChange={() => handleCheckboxChange('freelance')}
              className="h-5 w-5 border-gray-300 rounded-md cursor-pointer"
            />
            <label
              htmlFor="freelance"
              className={`text-lg cursor-pointer hover:text-[#04ADE6] transition ${
                checkedStates.freelance ? 'font-bold text-black' : 'text-gray-600'
              }`}
            >
              Freelance (100)
            </label>
          </div>
          <div className="flex items-center gap-4">
            <input
              type="checkbox"
              id="remote"
              checked={checkedStates.remote}
              onChange={() => handleCheckboxChange('remote')}
              className="h-5 w-5 border-gray-300 rounded-md cursor-pointer"
            />
            <label
              htmlFor="remote"
              className={`text-lg cursor-pointer hover:text-[#04ADE6] transition ${
                checkedStates.remote ? 'font-bold text-black' : 'text-gray-600'
              }`}
            >
              Remote (150)
            </label>
          </div>
        </div>
      </div>
<hr className='h-[3px] bg-gray-500 rounded-lg' />
      {/* Job Locations */}
      <div className="py-4 px-4 rounded-md">
        <div
          className="flex justify-between items-center cursor-pointer pb-3"
          onClick={() => setHide2(!hide2)}
        >
          <h1 className="font-semibold text-xl hover:text-[#04ADE6] transition">
            Job Locations
          </h1>
          <img
            src={asset.down}
            className={`h-6 w-6 transform transition-transform ${
              hide2 ? 'rotate-180' : 'rotate-0'
            }`}
            alt="Toggle Icon"
          />
        </div>
        <div className={`${hide2 ? 'flex' : 'hidden'} flex-col gap-3`}>
          <div className="flex items-center gap-4">
            <input
              type="checkbox"
              id="usa"
              checked={checkedStates.usa}
              onChange={() => handleCheckboxChange('usa')}
              className="h-5 w-5 border-gray-300 rounded-md cursor-pointer"
            />
            <label
              htmlFor="usa"
              className={`text-lg cursor-pointer hover:text-[#04ADE6] transition ${
                checkedStates.usa ? 'font-bold text-black' : 'text-gray-600'
              }`}
            >
              USA (200)
            </label>
          </div>
          <div className="flex items-center gap-4">
            <input
              type="checkbox"
              id="canada"
              checked={checkedStates.canada}
              onChange={() => handleCheckboxChange('canada')}
              className="h-5 w-5 border-gray-300 rounded-md cursor-pointer"
            />
            <label
              htmlFor="canada"
              className={`text-lg cursor-pointer hover:text-[#04ADE6] transition ${
                checkedStates.canada ? 'font-bold text-black' : 'text-gray-600'
              }`}
            >
              Canada (100)
            </label>
          </div>
          <div className="flex items-center gap-4">
            <input
              type="checkbox"
              id="india"
              checked={checkedStates.india}
              onChange={() => handleCheckboxChange('india')}
              className="h-5 w-5 border-gray-300 rounded-md cursor-pointer"
            />
            <label
              htmlFor="india"
              className={`text-lg cursor-pointer hover:text-[#04ADE6] transition ${
                checkedStates.india ? 'font-bold text-black' : 'text-gray-600'
              }`}
            >
              India (150)
            </label>
          </div>
          <div className="flex items-center gap-4">
            <input
              type="checkbox"
              id="germany"
              checked={checkedStates.germany}
              onChange={() => handleCheckboxChange('germany')}
              className="h-5 w-5 border-gray-300 rounded-md cursor-pointer"
            />
            <label
              htmlFor="germany"
              className={`text-lg cursor-pointer hover:text-[#04ADE6] transition ${
                checkedStates.germany ? 'font-bold text-black' : 'text-gray-600'
              }`}
            >
              Germany (50)
            </label>
          </div>
          <div className="flex items-center gap-4">
            <input
              type="checkbox"
              id="alllocations"
              checked={checkedStates.alllocations}
              onChange={() => handleCheckboxChange('alllocations')}
              className="h-5 w-5 border-gray-300 rounded-md cursor-pointer"
            />
            <label
              htmlFor="alllocations"
              className={`text-lg cursor-pointer hover:text-[#04ADE6] transition ${
                checkedStates.alllocations ? 'font-bold text-black' : 'text-gray-600'
              }`}
            >
              Explore All Locations (50)
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobFilter;
