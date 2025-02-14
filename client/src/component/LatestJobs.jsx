import React from 'react';
import { useSelector } from 'react-redux';
import { asset } from '../assets/asset';
import { Link } from 'react-router-dom';

const LatestJobs = () => {
    const jobs = useSelector((state) => state.jobApp.job);
    return (
        <div className='py-16 px-[5%]'>
            <div className='flex justify-between items-center text-[24px] font-semibold tracking-tight text-gray-700'>
                <h1>Latest Featured Jobs</h1>
                <Link to="/jobListing" className='flex items-center gap-3 cursor-pointer hover:underline'>
                    Explore More <img src={asset.rightArr} alt="arrow"  />
                </Link>
            </div>

            <div className='grid md:grid-cols-2 grid-cols-1 lg:grid-cols-3 gap-8 py-12'>
                {
                    jobs.map((item, index) => (
                        <div key={index} className='border border-gray-300 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300'>
                            <img 
                                src={item.Img} 
                                alt="Job" 
                                className='w-full h-40 object-cover'
                            />
                            <div className='p-4'>
                                <h1 className='text-2xl font-semibold text-gray-800 mb-2'>{item.JobName}</h1>
                                <p className='text-gray-600 text-sm mb-4'>{item.smallDescription}</p>
                                <div className='flex items-center gap-2 text-gray-700 text-sm mb-2'>
                                    <img src={item.clockImg} alt="clock" className='w-5 h-5' />
                                    {item.jobType}
                                </div>
                                <div className='flex items-center gap-2 text-gray-700 text-sm'>
                                    <img src={item.locationImg} alt="location" className='w-5 h-5' />
                                    {item.location}
                                </div>
                                <button className='py-3 text-xl w-[100%] my-4  m-auto font-semibold text-white bg-[#04ADE6] rounded-lg hover:bg-[#039CC1] transition-colors'>Apply Now</button>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default LatestJobs;

