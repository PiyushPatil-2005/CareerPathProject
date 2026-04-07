import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row flex-wrap bg-slate-900/50 border border-white/5 rounded-[2.5rem] shadow-2xl px-6 md:px-10 lg:px-20 overflow-hidden relative animate-fade-up'>
      <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-900/20 to-transparent pointer-events-none' />
      {/* {} */}

      <div className='md:w-1/2 flex flex-col items-start justify-center gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px]'>
        <p className='text-3xl md:text-4xl lg:text-5xl text-white font-bold leading-tight md:leading-tight lg:leading-tight glow-text'>
            Book Counselling <br /> With Trusted Mentors
        </p>
        <div className='flex flex-col md:flex-row items-center gap-3 text-slate-300 text-sm font-light'>
            <img className='w-28' src={assets.group_profiles} alt="" />
            <p>Simply Browse through our extensive list of trusted mentors, <br className='hidden sm:block' /> schedule your counselling session hassle-free</p>
        </div>
        <a href="#speciality" className='flex items-center gap-2 bg-indigo-600 px-8 py-3 rounded-full text-white text-sm font-medium shadow-lg hover:shadow-indigo-500/50 m-auto md:m-0 hover:scale-105 transition-all duration-300'>
            Book appointment <img className='w-3' src={assets.arrow_icon} alt="" />
        </a>
      </div>

      {/* {} */}

      <div className='md:w-1/2 relative'>
        <img className='w-full md:absolute top-30 left-10 h-auto rounded-lg' src={assets.header_img} alt="" />
      </div>
    </div>
  )
}

export default Header
