import React from 'react'
import { asset } from '../assets/asset'
const OurTeam = () => {
  return (
    <div className='px-[5%] py-24 border-b-2'>
       <div className='flex justify-between items-center text-[24px] font-semibold tracking-tight text-gray-700'>
                <h1>Latest Featured Jobs</h1>
                <div className='flex items-center gap-3 cursor-pointer hover:underline'>
                    Explore More <img src={asset.rightArr} alt="arrow"  />
                </div>
            </div>
<div className='my-10 grid sm:grid-cols-2 md:grid-cols-3 -tracking-tighter'>
<img src={asset.home3} alt="" />
<div className='flex flex-col gap-4'>
<div>
    <h1 className='text-2xl text-[#04ADE6] font-semibold'>Engineering & Tech</h1>
    <p className='text-gray-600 cursor-pointer'>Lorem ipsum dolor sit afacilis quibusdam placeat eum enim illum deserunt ullam architecto distinctio nemo quia, voluptatibus dignissimos consectetur praesentium ratione sed eugiat iusto voluptates minus impedit.</p>
</div>
<div>
    <h1 className='text-2xl text-[#04ADE6] font-semibold'>Sales,Service & Support</h1>
    <p className='text-gray-600 cursor-pointer'>Lorem ipsum dolor sit afacilis quibusdam placeat eum enim illum deserunt ullam architecto distinctio nemo quia, voluptatibus dignissimos consectetur praesentium ratione sed eugiat iusto voluptates minus impedit.</p>
</div>
</div>
<div className='flex flex-col gap-4'>
<div>
    <h1 className='text-2xl text-[#04ADE6] font-semibold'>People</h1>
    <p className='text-gray-600 cursor-pointer'>Lorem ipsum dolor sit afacilis quibusdam placeat eum enim illum deserunt ullam architecto distinctio nemo quia, voluptatibus dignissimos consectetur praesentium ratione sed eugiat iusto voluptates minus impedit.</p>
</div>
<div>
    <h1 className='text-2xl text-[#04ADE6] font-semibold'>Marketing TroJob</h1>
    <p className='text-gray-600 cursor-pointer'>Lorem ipsum dolor sit afacilis quibusdam placeat eum enim illum deserunt ullam architecto distinctio nemo quia, voluptatibus dignissimos consectetur praesentium ratione sed eugiat iusto voluptates minus impedit.</p>
</div>
</div>
</div>
    </div>
  )
}

export default OurTeam
