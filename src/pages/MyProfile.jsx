import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { use } from 'react'
import { AppContext } from '../context/AppContext'
import { toast } from 'react-toastify'
import axios from 'axios'

const MyProfile = () => {

  const { userData, setUserData, token, backendURL, loadUserProfileData } = useContext(AppContext)

  const [isEdit, setIsEdit] = useState(false)
  const [image, setImage] = useState(false)

  const updateUserProfileData = async () => {

    try {
      if (!userData.name || userData.name.trim().length < 3) {
        return toast.error("Name must be at least 3 characters long")
      }
      if (!userData.phone || userData.phone.length < 10) {
        return toast.error("Please enter a valid phone number with at least 10 digits")
      }
      if (userData.phone.length > 10) {
        return toast.error("Phone number cannot exceed 10 digits")
      }

      const formData = new FormData()
      formData.append('name', userData.name)
      formData.append('phone', userData.phone)
      formData.append('gender', userData.gender)
      formData.append('dob', userData.dob)

      image && formData.append('image', image)

      const { data } = await axios.post(backendURL + '/api/user/update-profile', formData, { headers: { token } })

      if (data.success) {
        toast.success(data.message)
        await loadUserProfileData()
        setIsEdit(false)
        setImage(false)
      } else {
        toast.error(data.message)
      }

    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }

  }

  return userData && (
    <div className='max-w-lg flex flex-col gap-4 text-sm glass-card p-8 rounded-[2rem] mt-10 animate-fade-up'>

      {
        isEdit
          ? <label htmlFor="image">
            <div className='inline-block relative cursor-pointer'>
              <img className='h-48 rounded opacity-75' src={image ? URL.createObjectURL(image) : userData.image} alt="" />
              <img className='w-26 absolute bottom-12 right-12' src={image ? '' : assets.upload_icon} alt="" />
            </div>
            <input onChange={(e) => setImage(e.target.files[0])} type="file" id="image" hidden />
          </label>
          : <img className='w-36 rounded' src={userData.image} alt="" />

      }

      {
        isEdit
          ? <input className='bg-slate-900/50 border border-white/10 text-white rounded-lg px-4 py-2 text-2xl font-bold max-w-60 mt-4 focus:ring-1 focus:ring-indigo-500 outline-none' type="text" value={userData.name} onChange={e => setUserData(prev => ({ ...prev, name: e.target.value }))} maxLength="50" />
          : <p className='font-bold text-3xl text-white glow-text mt-4'>{userData.name}</p>
      }

      <hr className='border-white/10 my-2' />
      <div>
        <p className='text-indigo-400 font-bold uppercase tracking-wider mb-4 border-b border-white/5 pb-2'>CONTACT INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-4 mt-3 text-slate-300'>
          <p className='font-semibold text-slate-400'>Email id:</p>
          <p className='text-white'>{userData.email}</p>
          <p className='font-semibold text-slate-400'>Phone:</p>
          {
            isEdit
              ? <input className='bg-slate-900/50 border border-white/10 text-white rounded px-3 py-1 outline-none focus:border-indigo-500 max-w-52' type="tel" pattern="[0-9]{10,15}" maxLength="15" value={userData.phone} onChange={e => setUserData(prev => ({ ...prev, phone: e.target.value }))} />
              : <p className='text-blue-400'>{userData.phone}</p>
          }
        </div>
      </div>

      <div>
        <p className='text-indigo-400 font-bold uppercase tracking-wider mb-4 border-b border-white/5 pb-2 mt-6'>BASIC INFORMATION</p>
        <div className='grid grid-cols-[1fr_3fr] gap-y-4 mt-3 text-slate-300'>
          <p className='font-semibold text-slate-400'>Gender:</p>
          {
            isEdit
              ? <select className='max-w-28 bg-slate-900/50 border border-white/10 text-white rounded px-3 py-1 outline-none focus:border-indigo-500 cursor-pointer' onChange={(e) => setUserData(prev => ({ ...prev, gender: e.target.value }))}>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
              : <p className='text-white'>{userData.gender}</p>
          }
          <p className='font-semibold text-slate-400'>Birthday:</p>
          {
            isEdit
              ? <input className='max-w-36 bg-slate-900/50 border border-white/10 text-white rounded px-3 py-1 outline-none focus:border-indigo-500 cursor-pointer' type="date" onChange={(e) => setUserData(prev => ({ ...prev, dob: e.target.value }))} value={userData.dob} />
              : <p className='text-white'>{userData.dob}</p>
          }
        </div>
      </div>

      <div className='mt-8 flex gap-4'>
        {
          isEdit
            ? <button className='bg-indigo-600 hover:bg-indigo-500 text-white px-8 py-2.5 rounded-full shadow-[0_0_15px_rgba(79,70,229,0.5)] transition-all cursor-pointer font-bold' onClick={updateUserProfileData}>Save Information</button>
            : <button className='glass-card text-indigo-400 hover:bg-indigo-500 hover:text-white px-10 py-2.5 rounded-full transition-all cursor-pointer font-bold' onClick={() => setIsEdit(true)}>Edit Profile</button>
        }
      </div>

    </div>
  )
}

export default MyProfile
