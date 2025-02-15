// import React, { useEffect, useState } from "react";
// import { Helmet } from "react-helmet";
// import { Link, useParams, useNavigate } from "react-router-dom";
// import Nav from "../component/Nav";
// import Footer from "../component/Footer";
// import NavCareer from "../component/NavCareer";
// import { asset } from "../assets/asset";
// import { useDispatch, useSelector } from "react-redux";
// import { getData } from "../redux/feacture/Jobfeacture";

// const JobDetailBox = ({ title, value }) => (
//   <div className="h-[90px] rounded-lg p-4 bg-[#04ADE6]/15">
//     <ul className="space-y-1">
//       <li className="text-[#5E6368] text-lg">{title}</li>
//       <li className="text-[#04ADE6] text-2xl font-semibold">{value}</li>
//     </ul>
//   </div>
// );

// const JobDetails = () => {
//   const { jobId } = useParams();
//   const navigate = useNavigate();
//   const [data, setData] = useState(null);
//   const [copied, setCopied] = useState(false);

//   const dispatch = useDispatch();
  
//   // ✅ Correctly select jobs and loading state
//   const { error, jobe, loading } = useSelector((state) => state.jobApp);

//   useEffect(() => {
//     dispatch(getData());
//   }, [dispatch]);
  
//   useEffect(() => {  
//     if (jobe?.length) {
//       const job = jobe.find((item) => item._id === jobId);
//       setData(job || null);
//     }
//   }, [jobId, jobe]);


//   useEffect(() => {  
//     console.log("Checking jobId:", jobId);
//     console.log("All Jobs:", jobe);
    
//     if (jobe?.length) {
//       const job = jobe.find((item) => String(item._id) === String(jobId));
//       console.log("Found Job:", job); // Check if job is found
//       setData(job || null);
//     }
//   }, [jobId, jobe]);
  
//   const handleShare = () => {
//     if (data) {
//       const jobLink = `${window.location.origin}/jobListing/${data._id}`;
//       navigator.clipboard.writeText(jobLink);
//       setCopied(true);
//       setTimeout(() => setCopied(false), 2000);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="flex items-center justify-center h-screen">
//         <p className="text-xl text-gray-500">Loading...</p>
//       </div>
//     );
//   }

//   if (!data) {
//     return (
//       <div className="flex items-center justify-center h-screen">
//         <p className="text-xl text-gray-500">Job details not found.</p>
//       </div>
//     );
//   }

//   return (
//     <div>
//       <Helmet>
//         <title>{data?.JobName || "Loading..."} - Job Details</title>
//       </Helmet>

//       <div className="gr">
//         <Nav />
//         <div className="px-8 pb-6">
//           <NavCareer
//             heading="Career"
//             heading1={<Link to="/">Home</Link>}
//             heading2={<Link to="/jobListing">/ Careers</Link>}
//             heading3={<Link to={`/jobListing/${jobId}`}>/ {data.JobName}</Link>}
//           />
//         </div>
//       </div>

//       <div className="px-8 mt-5 mb-3">
//         <div className="flex justify-between items-center p-4 bg-white rounded-md">
//           <div>
//             <h1 className="text-2xl font-bold">{data.JobName}</h1>
//             <ul className="flex gap-3 mt-2 text-gray-700">
//               <li className="px-2 py-1 bg-gray-100 rounded text-sm">{data.location}</li>
//               <li className="px-2 py-1 bg-gray-100 rounded text-sm">{data.JobStatus}</li>
//             </ul>
//             <p className="text-sm py-2 text-gray-500">{data.date}</p>
//           </div>

//           <div>
//             <div className="flex gap-4">
//               <div className="flex justify-center items-center w-[150px] gap-4 bg-[#E7E6E6] py-2 px-4 rounded-md cursor-pointer hover:shadow-lg transition duration-300 transform hover:scale-105">
//                 <img src={asset.save} alt="Save Job" />
//                 <p>Save Job</p>
//               </div>

//               <div onClick={handleShare} className="flex justify-center items-center w-[150px] gap-4 bg-[#E7E6E6] py-2 px-4 rounded-md cursor-pointer hover:shadow-lg transition duration-300 transform hover:scale-105">
//                 <img src={asset.share} alt="Share Job" />
//                 <p>Share</p>
//               </div>
//             </div>

//             {copied && <p className="text-green-500 text-sm mt-2">Copied to clipboard!</p>}

//             <button onClick={() => navigate(`/apply/${data._id}`)} className="bg-[#04ADE6] text-white py-3 px-4 my-2 w-[315px] rounded-md font-semibold hover:bg-[#038cb6] transition duration-300 transform hover:scale-105">
//               Apply for this job
//             </button>
//           </div>
//         </div>
//       </div>
//       <hr className="h-[2px] rounded-lg bg-[#E7E6E6] mx-8" />

//       <div className="py-6 px-8 w-full flex gap-4 items-start">
//         <div className="w-[75%]">
//           <div className="grid grid-cols-3 gap-4">
//             <JobDetailBox title="Job Type" value={data.jobType} />
//             <JobDetailBox title="Job SetUp" value={data.JobStatus} />
//             <JobDetailBox title="Salary Offer" value={`${data.salary} / month`}/>
//           </div>
//           <h1 className="text-2xl font-semibold pt-4 ">Job Description</h1>
//           <p className="text-[#1E1E1E]">{data.description}</p>
//         </div>

//         <div className="w-[25%]"></div>
//       </div>

//       <Footer />
//     </div>
//   );
// };

// export default JobDetails;



import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Link, useParams, useNavigate } from "react-router-dom";
import Nav from "../component/Nav";
import Footer from "../component/Footer";
import NavCareer from "../component/NavCareer";
import { asset } from "../assets/asset";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "../redux/feacture/Jobfeacture";

const JobDetailBox = ({ title, value }) => (
  <div className="h-[90px] rounded-lg p-4 bg-[#04ADE6]/15">
    <ul className="space-y-1">
      <li className="text-[#5E6368] text-lg">{title}</li>
      <li className="text-[#04ADE6] text-2xl font-semibold">{value}</li>
    </ul>
  </div>
);

const JobDetails = () => {
  const { jobId } = useParams();
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const [copied, setCopied] = useState(false);

  const dispatch = useDispatch();
  
  // ✅ Correctly select jobs and loading state
  const { error, jobe, loading } = useSelector((state) => state.jobApp);

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  useEffect(() => {  
    console.log("Checking jobId:", jobId);
    console.log("All Jobs:", jobe);
    
    // ✅ Ensure jobe is an object and contains a `post` array
    if (jobe?.post && Array.isArray(jobe.post)) {
      const job = jobe.post.find((item) => String(item._id) === String(jobId));
      console.log("Found Job:", job); // Debugging log
      setData(job || null);
    }
  }, [jobId, jobe]);
  
  const handleShare = () => {
    if (data) {
      const jobLink = `${window.location.origin}/jobListing/${data._id}`;
      navigator.clipboard.writeText(jobLink);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl text-gray-500">Loading...</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-xl text-gray-500">Job details not found.</p>
      </div>
    );
  }

  return (
    <div>
      <Helmet>
        <title>{data?.JobName || "Loading..."} - Job Details</title>
      </Helmet>

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

      <div className="px-8 mt-5 mb-3">
        <div className="flex justify-between items-center p-4 bg-white rounded-md">
          <div>
            <h1 className="text-2xl font-bold">{data.JobName}</h1>
            <ul className="flex gap-3 mt-2 text-gray-700">
              <li className="px-2 py-1 bg-gray-100 rounded text-sm">{data.location}</li>
              <li className="px-2 py-1 bg-gray-100 rounded text-sm">{data.JobStatus}</li>
            </ul>
            <p className="text-sm py-2 text-gray-500">{data.date}</p>
          </div>

          <div>
            <div className="flex gap-4">
              <div className="flex justify-center items-center w-[150px] gap-4 bg-[#E7E6E6] py-2 px-4 rounded-md cursor-pointer hover:shadow-lg transition duration-300 transform hover:scale-105">
                <img src={asset.save} alt="Save Job" />
                <p>Save Job</p>
              </div>

              <div onClick={handleShare} className="flex justify-center items-center w-[150px] gap-4 bg-[#E7E6E6] py-2 px-4 rounded-md cursor-pointer hover:shadow-lg transition duration-300 transform hover:scale-105">
                <img src={asset.share} alt="Share Job" />
                <p>Share</p>
              </div>
            </div>

            {copied && <p className="text-green-500 text-sm mt-2">Copied to clipboard!</p>}

            <button onClick={() => navigate(`/apply/${data._id}`)} className="bg-[#04ADE6] text-white py-3 px-4 my-2 w-[315px] rounded-md font-semibold hover:bg-[#038cb6] transition duration-300 transform hover:scale-105">
              Apply for this job
            </button>
          </div>
        </div>
      </div>
      <hr className="h-[2px] rounded-lg bg-[#E7E6E6] mx-8" />

      <div className="py-6 px-8 w-full flex gap-4 items-start">
        <div className="w-[75%]">
          <div className="grid grid-cols-3 gap-4">
            <JobDetailBox title="Job Type" value={data.jobType} />
            <JobDetailBox title="Job SetUp" value={data.JobStatus} />
            <JobDetailBox title="Salary Offer" value={`${data.salary} / month`}/>
          </div>
          <h1 className="text-2xl font-semibold pt-4 ">Job Description</h1>
          <p className="text-[#1E1E1E]">{data.content}</p>
          console.log();
          
        </div>

        <div className="w-[25%]"></div>
      </div>

      <Footer />
    </div>
  );
};

export default JobDetails;
