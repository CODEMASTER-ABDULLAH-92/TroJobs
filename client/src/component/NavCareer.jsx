import React from 'react'

const NavCareer = ({heading,heading1,heading2,heading3}) => {
  return (
    <div>
      <nav className="">
      <h1 className='font-semibold text-[40px] dark:text-white text-black'>{heading}</h1>
      <ul className='flex gap-2 '>
        <li className='text-[16px] breadcrumb-item text-white font-light'>{heading1}</li>
        <li className='text-[16px] breadcrumb-item text-white font-light'> {heading2}</li>
        <li className='text-[16px] breadcrumb-item text-white font-light'> {heading3}</li>
      </ul>
      </nav>
    </div>
  )
}

export default NavCareer




