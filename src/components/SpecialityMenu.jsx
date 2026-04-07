import React from 'react'
import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
  return (
    <div className='flex flex-col items-center gap-4 py-16 animate-fade-up' id='speciality'>
      <p className='text-xs font-bold tracking-[0.16em] text-indigo-400 uppercase'>
        Browse by Domain
      </p>
      
      <h2 className='text-3xl md:text-4xl font-bold text-white glow-text text-center'>
        Find by Speciality
      </h2>
      
      <p className='text-sm md:text-base text-slate-400 text-center max-w-md leading-relaxed mb-4'>
        Browse our extensive list of trusted mentors and schedule
        your counselling session hassle-free.
      </p>

      <div className='flex sm:justify-center gap-5 pt-5 w-full overflow-x-auto px-4 pb-8 hide-scrollbar'>
        {specialityData.map((item, index) => (
          <Link
            onClick={() => scrollTo(0, 0)}
            key={index}
            to={`/mentors/${item.speciality}`}
            className='flex-shrink-0 group'
          >
            <div 
              className='flex flex-col items-center justify-center gap-3 p-5 w-32 rounded-2xl bg-slate-50 border border-slate-200 shadow-[0_4px_15px_rgba(0,0,0,0.3)] hover:shadow-[0_12px_32px_rgba(95,111,255,0.4)] hover:border-indigo-400 hover:-translate-y-2 hover:bg-gradient-to-br hover:from-white hover:to-indigo-50 transition-all duration-300 relative overflow-hidden'
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className='absolute inset-0 bg-indigo-500/5 opacity-0 group-hover:opacity-100 transition-opacity' />
              <img
                className='w-14 h-14 object-contain mix-blend-darken relative z-10 transition-transform duration-300 group-hover:scale-110'
                src={item.image}
                alt={item.speciality}
              />
              <p className='text-sm font-bold text-slate-700 text-center leading-tight group-hover:text-indigo-600 transition-colors relative z-10'>
                {item.speciality}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default SpecialityMenu
