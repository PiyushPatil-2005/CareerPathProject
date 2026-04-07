import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='md:mx-10'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm'>

        {/* { Left Section } */}

        <div>
          <img className='mb-5 w-40' src={assets.logo} alt="" />
          <p className='w-full md:w-2/3 text-slate-400 leading-6'>Career Path – Learn • Share • Grow. <br /> 
              Empowering the next generation of students <br /> and communities.  
              Join us in shaping the future.  
           </p>
        </div>

        {/* { Center Section } */}

        <div>
          <p className='text-xl font-medium mb-5 text-white'>COMPANY</p>
          <ul className='flex flex-col gap-2 text-slate-400'>
            <li>Home</li>
            <li>About</li>
            <li>Contact Us</li>
            <li>Privacy Policy</li>
          </ul>
        </div>

        {/* { Right Section } */}

        <div>
          <p className='text-xl font-medium mb-5 text-white'>GET IN TOUCH</p>
          <ul className='flex flex-col gap-2 text-slate-400'>
            <li>+91 6739506032</li>
            <li>careerpath@gmail.com</li>
          </ul>
        </div>
      </div>
      {/* { Copy right text } */}
      <div>
        <hr className='border-white/10' />
        <p className='py-5 text-center text-slate-400'>Copyright 2025@ Career Path - All Right Reserved</p>
      </div>
    </div>
  )
}

export default Footer
