import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Reg from './pages/Reg'
import Password from './pages/Password'
import ForgetPassword from './pages/ForgetPassword'
import Otp from './pages/Otp'
import Reset from './pages/Reset'
import AllDone from './pages/AllDone'
import RegistrationDone from './pages/RegistrationDone'
import JobListing from './pages/JobListing'
import JobDetails from './pages/JobDetails'
import CreateJob from './pages/CreateJob'
const App = () => {
  return (
    <div className=''>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/password' element={<Password/>}/>
        <Route path='/forgetpassword' element={<ForgetPassword/>}/>
        <Route path='/otp' element={<Otp/> }/>
        <Route path='/reset' element={<Reset/> }/>
        <Route path='/done' element={<AllDone/> }/>
        <Route path='/registered' element={<RegistrationDone/> }/>
        <Route path='/register' element={<Reg/>}/>
        <Route path='/jobListing/:jobId' element={<JobDetails/>}/>
        <Route path='/jobListing' element={<JobListing/>}/>
        <Route path='/CreateJob' element={<CreateJob/>}/>
      </Routes>
    </div>
  )
}
export default App
