import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Nav from '../component/Nav';
import NavCareer from '../component/NavCareer';
import JobPost from '../component/JobPost';
import JobFilter from '../component/JobFilter';
import Footer from '../component/Footer';
import { asset } from '../assets/asset';

const JobListing = () => {
  // Get job data from Redux store
  const { jobe } = useSelector((state) => state.jobApp);

  console.log("Raw jobe data:", jobe);
  console.log("Type of jobe:", typeof jobe);
  console.log("Is jobe an array?", Array.isArray(jobe));

  // Extract the `post` array safely
  const jobsArray = Array.isArray(jobe?.post) ? jobe.post : [];

  return (
    <div>
      {/* Navigation Section */}
      <div className='gr'>
        <Nav />
        <div className='px-[5%] pb-10'>
          <NavCareer 
            heading="Career" 
            heading1={<Link to="/">Home</Link>} 
            heading2={<Link to="/jobListing">/ Careers</Link>} 
          />
        </div>
      </div>

      {/* Filter & Search Section */}
      <div className='px-[5%] flex flex-row gap-5 overflow-scroll items-center py-10'>
        <div className="flex items-center bg-white justify-center gap-2 min-w-[290px] h-[50px] rounded-md cursor-pointer shadow-md px-3">
          <img src={asset.search} alt="search-icon" />
          <input type="text" className='-tracking-tighter pl-1 outline-none' placeholder='Search' />
          <img src={asset.cross} alt="clear-search" />
        </div>

        <div className="flex items-center min-w-[290px] h-[50px] justify-between gap-2 rounded-md cursor-pointer bg-white shadow-md px-3">
          <div className='flex gap-4 items-center'>
            <img src={asset.clock} alt="clock-icon" />
            <p>Full Time</p>
          </div>
          <img src={asset.cross} alt="clear-filter" />
        </div>

        <div className="flex items-center bg-white shadow-md min-w-[290px] h-[50px] justify-between gap-2 rounded-md cursor-pointer px-3">
          <div className='flex gap-4 items-center'>
            <img src={asset.location} alt="location-icon" />
            <p>New Zealand</p>
          </div>
          <img src={asset.cross} alt="clear-filter" />
        </div>

        <div className="flex items-center min-w-[290px] h-[50px] justify-between gap-2 rounded-md cursor-pointer bg-white shadow-md px-3">
          <div className='flex gap-4 items-center'>
            <img src={asset.remote} alt="remote-icon" />
            <p>Remote</p>
          </div>
          <img src={asset.cross} alt="clear-filter" />
        </div>

        <img src={asset.blueRight} className='cursor-pointer' alt="next-icon" />
      </div>

      {/* Job Listings & Filter */}
      <div className='grid sm:grid-cols-[0.7fr_2fr] px-[5%] pb-24'>
        <JobFilter />

        {/* Job Cards */}
        <div className='grid sm:grid-cols-2 grid-cols-1'>
          {jobsArray.length > 0 ? (
            jobsArray.map((item) => (
              <JobPost
                key={item._id}
                id={item._id}
                date={item.date}
                JobName={item.JobName}
                jobType={item.jobType}
                salary={item.salary}
                location={item.location}
                JobStatus={item.JobStatus}
              />
            ))
          ) : (
            <p className="text-gray-500">No jobs available</p>
          )}
        </div>
      </div>

      <Footer />
    </div>
  )
}

export default JobListing;
