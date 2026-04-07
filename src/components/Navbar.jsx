import React, { use, useState } from "react";
import { assets } from "../assets/assets";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

const Navbar = () => {
  const navigate = useNavigate();

  const { token, setToken, userData } = useContext(AppContext)
  const [showMenu, setShowMenu] = useState(false)

  const logout = () => {
    setToken(false)
    localStorage.removeItem('token')
  }

  return (
    <div className='sticky top-0 z-50 glass-nav border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.3)] flex items-center justify-between py-4 px-6 md:px-12 mb-8 transition-all duration-300'>
      <img onClick={()=>navigate('/')} className='w-44 h-auto cursor-pointer hover:opacity-90 transition-opacity' src={assets.logo} alt="Logo" />
      <ul className='hidden md:flex items-center gap-8 font-semibold text-[13px] text-slate-300 tracking-[0.1em]'>
        <NavLink to='/' className={({isActive}) => isActive ? "text-indigo-400 border-b-2 border-indigo-400 pb-1 transition-all" : "hover:text-white transition-colors duration-300 pb-1 border-b-2 border-transparent"}>
            <li>HOME</li>
        </NavLink>
        <NavLink to='/mentors' className={({isActive}) => isActive ? "text-indigo-400 border-b-2 border-indigo-400 pb-1 transition-all" : "hover:text-white transition-colors duration-300 pb-1 border-b-2 border-transparent"}>
            <li>ALL MENTORS</li>
        </NavLink>
        <NavLink to='/about' className={({isActive}) => isActive ? "text-indigo-400 border-b-2 border-indigo-400 pb-1 transition-all" : "hover:text-white transition-colors duration-300 pb-1 border-b-2 border-transparent"}>
            <li>ABOUT</li>
        </NavLink>
        <NavLink to='/contact' className={({isActive}) => isActive ? "text-indigo-400 border-b-2 border-indigo-400 pb-1 transition-all" : "hover:text-white transition-colors duration-300 pb-1 border-b-2 border-transparent"}>
            <li>CONTACT</li>
        </NavLink>
      </ul>
      <div className='flex items-center gap-4'>
        {
          token && userData
          ? <div className="flex items-center gap-3 cursor-pointer group relative">
            <div className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center border-2 border-white/10 shadow-lg overflow-hidden group-hover:border-indigo-500/50 transition-colors">
              <img className="w-full h-full object-cover mix-blend-darken" src={userData.image} alt="User Profile" />
            </div>
            <img className="w-3 opacity-60 invert group-hover:opacity-100 transition-opacity" src={assets.dropdown_icon} alt="" />
            <div className="absolute top-0 right-0 pt-16 text-sm font-semibold text-slate-300 z-20 hidden group-hover:block">
              <div className="min-w-48 glass-card border border-white/10 shadow-2xl mt-2 flex flex-col gap-4 p-5 rounded-2xl">
                <p onClick={()=>navigate('my-profile')} className="hover:text-white cursor-pointer transition-colors">My Profile</p>
                <p onClick={()=>navigate('my-appointments')} className="hover:text-white cursor-pointer transition-colors">My Appointments</p>
                <p onClick={logout} className="hover:text-red-400 cursor-pointer transition-colors">Logout</p>
              </div>
            </div>
          </div>
          : <button onClick={()=>navigate('/login')} className='bg-indigo-600 text-white px-8 py-3 rounded-full font-medium shadow-md hover:bg-indigo-700 hover:shadow-lg transition-all hidden md:block'>Create Account</button>
        }
        <img onClick={()=>setShowMenu(true)} className="w-6 md:hidden " src={assets.menu_icon} alt="" />
        {/* Mobile Menu */}
        <div className={` ${showMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden right-0 top-0 bottom-0 z-20 overflow-hidden bg-slate-950 transition-all`}>
          <div className="flex item-center justify-between px-5 py-6">
            <img className="w-36" src={assets.logo} alt="" />
            <img className="w-7" onClick={()=> setShowMenu(false)} src={assets.cross_icon} alt="" />
          </div>
          <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-[18px] font-medium">
            <NavLink onClick={()=>setShowMenu(false)} to='/'><p className="px-4 py-2 rounded inline-block">HOME</p ></NavLink>
            <NavLink onClick={()=>setShowMenu(false)} to='/mentors'><p className="px-4 py-2 rounded inline-block">ALL MENTORS</p></NavLink>
            <NavLink onClick={()=>setShowMenu(false)} to='/about'><p className="px-4 py-2 rounded inline-block">ABOUT</p></NavLink>
            <NavLink onClick={()=>setShowMenu(false)} to='/contact'><p className="px-4 py-2 rounded inline-block">CONTACT</p></NavLink>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Navbar