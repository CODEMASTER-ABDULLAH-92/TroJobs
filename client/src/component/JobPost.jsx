import React, { useState } from 'react';
import { asset } from '../assets/asset';
import {Link} from 'react-router-dom'
const truncateText = (text, limit) => {
  const words = text.split(' ');
  if (words.length > limit) {
    return `${words.slice(0, limit).join(' ')}...`;
  }
  return text;
};
const JobPost = ({JobName,jobType,salary,location,JobStatus,id,date}) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  const description = `Lorem ipsum dolor sit amet, 
  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti explicabo at culpa eius ipsa voluptate possimus dicta aut provident maxime aliquam eligendi reprehenderit maiores, ut quas aperiam eum, recusandae voluptas assumenda harum. Velit soluta, optio deleniti et explicabo ea quasi.`;
  const [saveImg,setSaveImg] = useState(true);
  
  return (
    <Link to={`/jobListing/${id}`}>
    <div className="p-4">

      <div className="border-2 border-gray-300 rounded-lg p-6 bg-white hover:shadow-custom-blue  transition-shadow duration-300">
        {/* Job Details */}
        <div className="flex flex-col gap-4">
          {/* Heading with Save Icon */}
          <div className="flex justify-between items-center">
            <h1 className="font-bold text-xl md:text-2xl text-gray-800">
              {/* Contact Center Agent */}
{JobName}
            </h1>
            <img
            onClick={()=>setSaveImg(!saveImg)}
  src={saveImg ? asset.save : asset.saveYellow}
  alt="Save Icon"
  className="object-contain cursor-pointer hover:scale-110 transition-transform duration-200 overflow-hidden"
/>

          </div>

          <div className="text-gray-500 flex flex-wrap gap-2 md:gap-4">
            <span className="px-2 py-1 bg-gray-100 rounded text-sm">{JobStatus}</span>
            <span className="px-2 py-1 bg-gray-100 rounded text-sm">{location}</span>
            <span className="px-2 py-1 bg-gray-100 rounded text-sm">{jobType}</span>
          </div>

          {/* Job Description */}
          <p className="text-gray-600 text-sm md:text-base">
            {showFullDescription
              ? description
              : truncateText(description, 20)}
            {!showFullDescription && (
              <button
                onClick={() => setShowFullDescription(true)}
                className="text-blue-500 hover:underline ml-2"
              >
                Read More
              </button>
            )}
          </p>

          <div className="flex justify-between items-center">
            <p className="font-semibold text-xl text-gray-700">
              ${salary} <span className="text-sm font-light text-gray-500">/month</span>
            </p>
            <p className="text-gray-500 text-sm">{date}</p>
          </div>
          <div className="flex justify-between items-center gap-4">
            <button className="w-1/2 text-sm md:text-base py-2 border-2 border-gray-300 text-gray-600 rounded-md hover:bg-gray-100 transition-all duration-300">
              View
            </button>
            <button
              className="w-1/2 text-sm md:text-base py-2 border-2 border-blue-500 text-blue-500 bg-blue-50 rounded-md hover:bg-blue-500 hover:text-white transition-all duration-300">
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
    </Link>

  );
};

export default JobPost;
