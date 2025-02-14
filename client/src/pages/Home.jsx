import React from 'react'
import Hero from '../component/Hero'
import Footer from '../component/Footer'
import LatestJobs from '../component/LatestJobs'
import HomeBanner from '../component/HomeBanner'
import OurTeam from '../component/OurTeam'
import Location from '../component/Location'

const Home = () => {
  return (
    <div>
      <Hero/>
      <LatestJobs/>
      <HomeBanner/>
      <OurTeam/>
      <Location/>
      <Footer/>
    </div>
  )
}

export default Home
