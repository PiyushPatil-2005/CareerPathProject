import React, { use, useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext';

const TopMentors = () => {

  const navigate = useNavigate();
  const { mentors } = useContext(AppContext);

  return (
    <div className='flex flex-col items-center gap-4 my-16 text-slate-200 md:mx-10 animate-fade-up delay-100'>
      <h1 className='text-3xl font-bold glow-text text-white'>Top Mentors to Book</h1>
      <p className='sm:w-1/3 text-center text-slate-400'> Simply browse through our extensive list of trusted Mentors.</p>
      <div className='w-full grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-6 pt-5 px-3 sm:px-0'>
        {mentors.slice(0, 10).map((item, index)=>(
            <div onClick={()=>navigate(`/appointment/${item._id}`)} className='glass-card rounded-2xl overflow-hidden cursor-pointer hover:-translate-y-2 transition-all duration-300 group'>
               <div className="relative overflow-hidden h-48 bg-slate-800/50 border-b border-white/5">
                 <img className='w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100' src={item.image} alt="" />
               </div>
               <div className='p-5'>
                <div className={`flex items-center gap-2 text-xs font-semibold tracking-wider uppercase mb-2 ${item.available ? 'text-emerald-400' : 'text-slate-500' } `}>
                    <p className={`w-2 h-2 ${item.available ? 'bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.8)]' : 'bg-slate-500' } rounded-full`}></p><p>{item.available ? 'Available' : 'Not Available' }</p>
                </div>
                <p className='text-white text-lg font-bold group-hover:text-indigo-400 transition-colors'>{item.name}</p>
                <p className='text-slate-400 text-sm'>{item.speciality}</p>
               </div>
            </div>
        ))}
      </div>
      <button onClick={()=>{navigate('/mentors'); scrollTo(0, 0)}} className='glass-card px-12 py-3 rounded-full mt-10 text-slate-300 hover:text-white cursor-pointer font-medium hover:border-indigo-500/50 hover:shadow-indigo-500/20'>more</button>
    </div>
  )
}

export default TopMentors
