import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import Nav from "../component/Nav";
import Footer from "../component/Footer";
import NavCareer from "../component/NavCareer";
import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { asset } from "../assets/asset";

const JobDetails = () => {
  const jobs = useSelector((state) => state.jobApp.job);
  const { jobId } = useParams();
  const [data, setData] = useState(null);

  const fetchDataFromRedux = () => {
    const job = jobs.find((item) => item._id === jobId);
    if (job) {
      setData(job);
    }
  };

  const fetchDataFromAPI = async () => {
    try {
      const response = await fetch(`/api/jobs/${jobId}`); // Adjust API endpoint as necessary
      const job = await response.json();
      setData(job);
    } catch (error) {
      console.error("Failed to fetch job data:", error);
    }
  };

  useEffect(() => {
    if (jobs && jobs.length > 0) {
      fetchDataFromRedux();
    } else {
      fetchDataFromAPI();
    }
  }, [jobId, jobs]);

  const handleShare = () => {
    if (data) {
      const jobLink = `${window.location.origin}/job/${data._id}`;
      navigator.clipboard.writeText(jobLink);
      alert("Job link copied to clipboard!");
    }
  };

  if (!data) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <Helmet>
        <title>{data?.JobName || "Loading..."} - Job Details</title>
      </Helmet>

      {/* Header Section */}
      <div className="gr">
        <Nav />
        <div className="px-8 pb-6">
          <NavCareer
            heading="Career"
            heading1={<Link to="/">Home</Link>}
            heading2={<Link to="/jobListing">/ Careers</Link>}
            heading3={<Link to={`/jobListing/${jobId}`}>/ {data.JobName}</Link>}
          />
        </div>
      </div>

      {/* Job Details Section */}
      <div className="px-8 my-5">
        <div className="flex justify-between items-center p-4 bg-white rounded-md shadow-md">
          {/* Left Section */}
          <div>
            <h1 className="text-2xl font-bold">{data.JobName}</h1>
            <ul className="flex gap-2 justify-start items-center text-gray-700">
              <li className="px-2 py-1 bg-gray-100 rounded text-sm">{data.location}</li>
              <li className="px-2 py-1 bg-gray-100 rounded text-sm">{data.JobStatus}</li>
            </ul>
            <p className="text-sm text-gray-500">{data.date}</p>
          </div>

          {/* Right Section */}
          <div>
            <div className="flex gap-4">
              <div
                className="flex justify-center items-center w-[150px] gap-4 bg-[#E7E6E6] py-2 px-4 rounded-md cursor-pointer hover:shadow-lg transition duration-300 transform hover:scale-105"
                aria-label="Save Job"
              >
                <img src={asset.save} alt="Save Job" />
                <p>Save Job</p>
              </div>

              <div
                onClick={handleShare}
                className="flex justify-center items-center w-[150px] gap-4 bg-[#E7E6E6] py-2 px-4 rounded-md cursor-pointer hover:shadow-lg transition duration-300 transform hover:scale-105"
                aria-label="Share Job"
              >
                <img src={asset.share} alt="Share Job" />
                <p>Share</p>
              </div>
            </div>

            <button
              className="bg-[#04ADE6] text-white text-center py-3 px-4 my-2 w-[315px] rounded-md font-semibold hover:bg-[#038cb6] transition duration-300 transform hover:scale-105"
              aria-label="Apply for Job"
            >
              Apply for this job
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default JobDetails;
