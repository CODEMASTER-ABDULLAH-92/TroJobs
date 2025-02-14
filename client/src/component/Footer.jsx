import React from 'react';
import { asset } from '../assets/asset';
import { NavLink } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom';
const Footer = () => {
  const isDark = useSelector((state) => state.jobApp.isDarkMode);
  return (
    <>
      <Helmet>
        {/* <title>Transparent BPO - Careers</title> */}
        <meta
          name="description"
          content="Explore job opportunities by service, location, setup, and employment type. Join our passionate culture and transform your career."
        />
        <meta
          name="keywords"
          content="Careers, Remote Jobs, On-site Jobs, Hybrid Jobs, Full-time, Part-time, Contractual Jobs, Job Locations, Outsourcing Solutions"
        />
      </Helmet>

      <div className="px-[5%] py-10 grid grid-cols-1 md:grid-cols-2 gap-2 lg:grid-cols-3 xl:grid-cols-[1.4fr_1fr_1fr_1fr] gap-y-8 items-start  dark:bg-[#002E5B]  bg-white dark:text-white text-black">
        <div className="flex flex-col items-start gap-5">
          <Link to='/'>
          <img src={isDark ? asset.logo : asset.newLogo} alt="Company Logo" />
          </Link>
          <h1 className="text-fafafa font-bold text-2xl leading-tight">
            Outsourcing Transformed
            <hr className="h-[3px] mt-2 w-[150px] bg-yellow-400 border-none" />
          </h1>
          <p className="text-fafafa text-sm leading-relaxed">
            Customized solutions. <br />
            Passionate culture. <br />
            Committed to your success.
          </p>
          <div className="flex gap-4 py-5">
            <img
              className="cursor-pointer w-6 h-6"
              src={asset.fy}
              alt="Facebook"
            />
            <img
              className="cursor-pointer w-6 h-6"
              src={asset.ly}
              alt="LinkedIn"
            />
            <img
              className="cursor-pointer w-6 h-6"
              src={asset.ty}
              alt="Twitter"
            />
            <img
              className="cursor-pointer w-6 h-6"
              src={asset.yy}
              alt="YouTube"
            />
          </div>
        </div>

        {/* Jobs by Service Section */}
        <div>
          <h1 className="text-fafafa font-bold text-2xl leading-tight">
            Jobs By Service
            <hr className="h-[3px] mt-2 w-[110px] bg-yellow-400 border-none" />
          </h1>
          <ul className="text-fafafa text-sm leading-relaxed mt-4 space-y-2">
            <li>
              <NavLink to="/service/inbound-voice" className="hover:underline">
                Inbound Voice
              </NavLink>
            </li>
            <li>
              <NavLink to="/service/outbound-voice" className="hover:underline">
                Outbound Voice
              </NavLink>
            </li>
            <li>
              <NavLink to="/service/multi-channel-support" className="hover:underline">
                Multi-Channel Support
              </NavLink>
            </li>
            <li>
              <NavLink to="/service/back-office-support" className="hover:underline">
                Back Office Support
              </NavLink>
            </li>
            <li>
              <NavLink to="/service/work-secure-suite" className="hover:underline">
                Work-Secure Suite
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Jobs by Location Section */}
        <div>
          <h1 className="text-fafafa font-bold text-2xl leading-tight">
            Jobs By Location
            <hr className="h-[3px] mt-2 w-[110px] bg-yellow-400 border-none" />
          </h1>
          <ul className="text-fafafa text-sm leading-relaxed mt-4 space-y-2">
            <li>
              <NavLink to="/location/corporate-headquarters" className="hover:underline">
                Corporate Headquarters
              </NavLink>
            </li>
            <li>
              <NavLink to="/location/belize" className="hover:underline">
                Belize
              </NavLink>
            </li>
            <li>
              <NavLink to="/location/jamaica" className="hover:underline">
                Jamaica
              </NavLink>
            </li>
            <li>
              <NavLink to="/location/philippines" className="hover:underline">
                Philippines
              </NavLink>
            </li>
          </ul>
        </div>

        {/* Jobs by Setup and Employment Type */}
        <div className="flex flex-col gap-5">
          {/* Jobs by Setup */}
          <div>
            <h1 className="text-fafafa font-bold text-2xl leading-tight">
              Jobs By Setup
              <hr className="h-[3px] mt-2 w-[90px] bg-yellow-400 border-none" />
            </h1>
            <ul className="text-fafafa text-sm leading-relaxed mt-4 space-y-2">
              <li>
                <NavLink to="/setup/remote" className="hover:underline">
                  Remote
                </NavLink>
              </li>
              <li>
                <NavLink to="/setup/on-site" className="hover:underline">
                  On-site
                </NavLink>
              </li>
              <li>
                <NavLink to="/setup/hybrid" className="hover:underline">
                  Hybrid
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Jobs by Employment */}
          <div>
            <h1 className="text-fafafa font-bold text-2xl leading-tight">
              Jobs By Employment
              <hr className="h-[3px] mt-2 w-[90px] bg-yellow-400 border-none" />
            </h1>
            <ul className="text-fafafa text-sm leading-relaxed mt-4 space-y-2">
              <li>
                <NavLink to="/employment/full-time" className="hover:underline">
                  Full-Time
                </NavLink>
              </li>
              <li>
                <NavLink to="/employment/part-time" className="hover:underline">
                  Part-Time
                </NavLink>
              </li>
              <li>
                <NavLink to="/employment/contractual" className="hover:underline">
                  Contractual
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className=" h-20 px-[5%] dark:bg-[#002E5B]  bg-white dark:text-white text-black">
        <hr className="h-[3px] w-full dark:bg-white bg-black" />
        <div className="flex justify-between h-20 items-center">
          <p className="text-center">&copy; Built In 2025</p>
          <ul className="gap-4 list-none sm:flex hidden">
            <li>About TBPO</li>
            <li>Privacy Policy</li>
            <li>Terms of Use</li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default Footer;