import React from 'react'
import Nav from '../component/Nav'
import NavCareer from '../component/NavCareer'
import { Link } from 'react-router-dom'
import { asset } from '../assets/asset'
import JobPost from '../component/JobPost'
import {useSelector} from 'react-redux'
import JobFilter from '../component/JobFilter'
import Footer from '../component/Footer'
const JobListing = () => {
  const jobs = useSelector((state) => state.jobApp.job);
  return (
    <div className=''>
<div className='gr '>
<Nav/>
<div className='px-[5%] pb-10'>
<NavCareer heading={"career"} heading1={<Link to="/">Home</Link>} heading2={<Link to="/jobListing">/ Careers</Link>}/>
</div>
</div>


<div className='px-[5%] flex flex-row gap-5 overflow-scroll items-center py-10'>

  <div className="flex items-center bg-white justify-center gap-2 min-w-[290px] h-[50px] rounded-md cursor-pointer shadow-md px-3 ">
    <img src={asset.search} alt="" />
    <input  type="type" className=' -tracking-tighter pl-1 outline-none ' placeholder='Search' />
    <img src={asset.cross} alt="" />
  </div>
  <div className="flex items-center min-w-[290px] h-[50px] justify-between gap-2 rounded-md cursor-pointer bg-white shadow-md px-3 ">
   <div className='flex gap-4 items-center'>
   <img src={asset.clock} alt="" />
   <p>Full Time</p>
   </div>
    <img src={asset.cross} alt="" />
  </div>
  <div className="flex items-center bg-white shadow-md min-w-[290px] h-[50px] justify-between gap-2 rounded-md cursor-pointer px-3 ">
   <div className='flex gap-4 items-center'>
   <img src={asset.location} alt="" />
   <p>New Zealand</p>
   </div>
    <img src={asset.cross} alt="" />
  </div>
  <div className="flex items-center min-w-[290px] h-[50px] justify-between gap-2 rounded-md cursor-pointer bg-white shadow-md px-3 ">
   <div className='flex gap-4 items-center'>
   <img src={asset.remote} alt="" />
   <p>Remote</p>
   </div>
    <img src={asset.cross} alt="" />
  </div>
  
<img src={asset.blueRight} className='cursor-pointer' alt="" />
</div>

<div className='grid sm:grid-cols-[0.7fr_2fr] px-[5%] pb-24'>

<JobFilter/>

<div className='grid sm:grid-cols-2  grid-cols-1'>
{
jobs.map((item,index)=>{
  return (

<JobPost key={index} id={item._id} date={item.date} JobName={item.JobName} jobType={item.jobType} salary={item.salary} location={item.location} JobStatus={item.JobStatus} />
)
})
}
</div>

</div>

<Footer/>
    </div>
  )
}

export default JobListing
