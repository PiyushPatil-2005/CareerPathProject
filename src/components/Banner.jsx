import React from 'react'
import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom';

const Banner = () => {
  
  const navigate = useNavigate();

  return (
    <div className='flex glass-card bg-transparent rounded-[2.5rem] px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10 overflow-hidden relative animate-fade-up delay-200'>
      <div className='absolute inset-0 bg-gradient-to-r from-indigo-900/40 to-transparent pointer-events-none' />
      {/* {} */}

      <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5'>
        <div className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-white glow-text'>
          <p>Book Appointment</p>
          <p className='mt-4 '>With 100+ Trusted Mentors</p>
        </div>
        <button onClick={()=>{navigate('/login'); scrollTo(0, 0)}} className='bg-indigo-600 text-sm sm:text-base text-white px-8 py-3 rounded-full mt-6 font-medium shadow-lg hover:shadow-indigo-500/50 hover:scale-105 transition-all cursor-pointer'>Create Account</button>
      </div>

      {/* {} */}

      <div className='hidden md:block md:w-1/2 lg:w-[370px] relative'>
        <img className='w-full absolute bottom-0 right-0 max-w-md' src={assets.appointment_img} alt="" />
      </div>
    </div>
  )
}

export default Banner