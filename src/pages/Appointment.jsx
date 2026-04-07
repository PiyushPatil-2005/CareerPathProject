import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { assets } from '../assets/assets'
import RelatedMentors from '../components/RelatedMentors'
import { toast } from 'react-toastify'
import axios from 'axios'

const Appointment = () => {

  const { mentorId } = useParams()
  const { mentors, currencySymbol, backendURL, token, getMentorsData } = useContext(AppContext)

  const daysOfWeek = ['SUN','MON','TUE','WED','THU','FRI','SAT']

  const navigate = useNavigate()

  const [mentorInfo,setMentorInfo] = useState(null)
  const [mentorSlots,setMentorSlots] = useState([])
  const [slotIndex,setSlotIndex] = useState(0)
  const [slotTime,setSlotTime] = useState('')

  const [selectedSession,setSelectedSession] = useState(null)

  const [announcements,setAnnouncements] = useState([])

  const fetchMentorInfo = async () => {
    const mentorInfo = mentors.find(mentor => mentor._id === mentorId)
    setMentorInfo(mentorInfo)
  }

  const getAnnouncements = async () => {
    try {

      const {data} = await axios.get(
        backendURL + `/api/user/mentor-announcements/${mentorId}`
      )

      if(data.success){
        setAnnouncements(data.announcements)
      }

    } catch (error) {
      console.log(error)
    }
  }

  const getAvailableSlots = async () => {

    setMentorSlots([])

    let today = new Date()

    for(let i=0;i<7;i++){

      let currentDate = new Date(today)
      currentDate.setDate(today.getDate()+i)

      let endTime = new Date()
      endTime.setDate(today.getDate()+i)
      endTime.setHours(21,0,0,0)

      if(today.getDate() === currentDate.getDate()){
        currentDate.setHours(currentDate.getHours()>10 ? currentDate.getHours()+1 : 10)
        currentDate.setMinutes(currentDate.getMinutes()>30 ? 30 : 0)
      }else{
        currentDate.setHours(10)
        currentDate.setMinutes(0)
      }

      let timeSlots=[]

      while(currentDate < endTime){

        let formattedTime = currentDate.toLocaleTimeString([],{hour:'2-digit',minute:'2-digit'})

        let day=currentDate.getDate()
        let month=currentDate.getMonth()+1
        let year=currentDate.getFullYear()

        const slotDate = day+"_"+month+"_"+year

        const isSlotAvailable = mentorInfo.slots_booked[slotDate] &&
        mentorInfo.slots_booked[slotDate].includes(formattedTime)
        ? false : true

        if(isSlotAvailable){
          timeSlots.push({
            datetime:new Date(currentDate),
            time:formattedTime
          })
        }

        currentDate.setMinutes(currentDate.getMinutes()+30)
      }

      setMentorSlots(prev => ([...prev,timeSlots]))
    }
  }

  const bookAppointment = async () => {

    if(!token){
      toast.warn('Login to book appointment')
      return navigate('/login')
    }

    if(!slotTime){
      toast.warn('Please select a time slot')
      return
    }

    if(!selectedSession){
      toast.warn('Please select a session type')
      return
    }

    try {

      const date = mentorSlots[slotIndex][0].datetime

      let day=date.getDate()
      let month=date.getMonth()+1
      let year=date.getFullYear()

      const slotDate = day+"_"+month+"_"+year

      const {data} = await axios.post(
        backendURL+'/api/user/payment-razorpay',
        { mentorId, session:selectedSession },
        { headers:{token} }
      )

      if(!data.success){
        toast.error(data.message)
        return
      }

      const order = data.order

      const options = {
        key: import.meta.env.VITE_RAZORPAY_KEY_ID,
        amount: order.amount,
        currency: order.currency,
        name:'Mentorship Session Payment',
        description:'Career Path Session Payment',
        order_id:order.id,

        handler: async function(){

          try {

            const bookRes = await axios.post(
              backendURL+'/api/user/book-appointment',
              {
                mentorId,
                slotDate,
                slotTime,
                session:selectedSession
              },
              { headers:{token} }
            )

            if(bookRes.data.success){
              toast.success("Payment Successful & Appointment Booked")
              getMentorsData()
              navigate('/my-appointments')
            }else{
              toast.error(bookRes.data.message)
            }

          } catch (error) {
            console.log(error)
            toast.error(error.message)
          }
        }
      }

      const rzp = new window.Razorpay(options)
      rzp.open()

    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  useEffect(()=>{
    fetchMentorInfo()
  },[mentors,mentorId])

  useEffect(()=>{
    if(mentorInfo){
      getAvailableSlots()
      if(mentorInfo.sessions?.length){
        setSelectedSession(mentorInfo.sessions[0])
      }
    }
  },[mentorInfo])

  useEffect(()=>{
    if(mentorId){
      getAnnouncements()
    }
  },[mentorId])

  return mentorInfo && (
    <div className='px-4 sm:px-8 md:px-12'>

      {/* Mentor Details */}

      <div className='flex flex-col sm:flex-row gap-6'>

        <div className="sm:max-w-96">
          <img
            className="bg-indigo-100 w-full h-[420px] object-cover rounded-3xl shadow-xl shadow-indigo-100/50 transition-transform duration-500 hover:scale-[1.02]"
            src={mentorInfo.image}
            alt={mentorInfo.name}
          />
        </div>

        <div className='glass-card flex-1 rounded-[2rem] p-8 lg:p-10 relative'>

          <p className='flex items-center gap-3 text-3xl md:text-4xl font-bold text-white glow-text'>
            {mentorInfo.name}
            <img className='w-6 md:w-8' src={assets.verified_icon} alt="" />
          </p>

          <div className='flex flex-wrap items-center gap-3 text-base mt-2 text-slate-300'>
            <p className='font-medium'>{mentorInfo.degree} - <span className='text-indigo-400'>{mentorInfo.speciality}</span></p>
            <button className='py-1 px-4 border border-white/10 shadow-inner text-xs rounded-full bg-white/5'>
              {mentorInfo.collegeName}
            </button>
          </div>

          <div className='mt-8 pt-6 border-t border-white/10'>
            <p className='flex items-center gap-2 text-xl font-bold text-white'>
              About <img className='invert opacity-70' src={assets.info_icon} alt="" />
            </p>
            <p className='text-base text-slate-400 max-w-[700px] mt-3 leading-relaxed'>
              {mentorInfo.about}
            </p>
          </div>

          {/* Session Selection */}

          <div className='mt-8 pt-6 border-t border-white/10'>
            <p className='text-xl font-bold text-white mb-4'>
              Choose Session Type
            </p>

            <div className='flex flex-wrap gap-3'>

              {mentorInfo.sessions?.map((session,index)=>(
                <button
                  key={index}
                  onClick={()=>setSelectedSession(session)}
                  className={`px-4 py-2 rounded-full border text-sm font-medium transition
                  ${selectedSession?.name===session.name
                    ? 'bg-indigo-600 text-white shadow-[0_0_15px_rgba(79,70,229,0.4)] scale-105 border-indigo-500'
                    : 'border-white/10 text-slate-400 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {session.name}
                </button>
              ))}

            </div>

            {selectedSession && (
              <p className='text-lg font-bold text-slate-300 mt-6'>
                Session Fee:
                <span className='ml-2 text-2xl text-emerald-400 glow-text'>
                  {currencySymbol} {selectedSession.fee}
                </span>
              </p>
            )}
          </div>

          {/* Announcements */}

          {announcements.length>0 && (
            <div className="mt-8 bg-amber-900/20 border border-amber-500/30 rounded-2xl p-6 shadow-[0_0_30px_rgba(217,119,6,0.1)]">
              <p className="font-bold text-amber-400 mb-4 text-lg">
                🎉 Special Announcements
              </p>

              {announcements.map((item,index)=>(
                <div key={index} className="mb-3 last:mb-0 bg-black/20 p-4 rounded-xl border border-white/5">
                  <p className="font-semibold text-white">{item.title}</p>
                  <p className="text-sm text-slate-400 mt-1">{item.message}</p>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>

      {/* Booking Slots */}

      <div className='sm:ml-72 sm:pl-6 mt-10'>

        <p className='text-2xl font-bold text-white glow-text'>
          Booking Slots
        </p>

        <div className='flex gap-4 items-center w-full overflow-x-auto mt-5 pb-2'>

          {mentorSlots.length && mentorSlots.map((item,index)=>(
            <div
              key={index}
              onClick={()=>setSlotIndex(index)}
              className={`text-center py-5 min-w-20 rounded-xl cursor-pointer transition-all duration-300
              ${slotIndex===index
                ? 'bg-indigo-600 text-white shadow-[0_0_15px_rgba(79,70,229,0.5)] scale-105 border-indigo-500'
                : 'border border-white/10 text-slate-400 hover:bg-white/5 hover:text-white'
              }`}
            >
              <p className='text-xs font-bold opacity-80 uppercase tracking-widest mb-1'>
                {item[0] && daysOfWeek[item[0].datetime.getDay()]}
              </p>

              <p className='text-2xl font-bold'>
                {item[0] && item[0].datetime.getDate()}
              </p>
            </div>
          ))}

        </div>

        <div className='flex items-center gap-3 w-full overflow-x-auto mt-6 pb-2'>

          {mentorSlots.length && mentorSlots[slotIndex].map((item,index)=>(
            <p
              key={index}
              onClick={()=>setSlotTime(item.time)}
              className={`flex-shrink-0 px-6 py-2 rounded-full cursor-pointer text-sm font-medium transition-all duration-200
              ${item.time===slotTime
                ? 'bg-indigo-600 text-white shadow-[0_0_15px_rgba(79,70,229,0.5)] scale-105 border-indigo-500'
                : 'text-slate-400 border border-white/10 hover:bg-white/5 hover:text-white'
              }`}
            >
              {item.time.toLowerCase()}
            </p>
          ))}

        </div>

        <button
          onClick={bookAppointment}
          className='bg-indigo-600 hover:bg-indigo-500 transition-all duration-300 text-white font-bold cursor-pointer text-lg px-10 py-4.5 rounded-full mt-8 shadow-[0_0_20px_rgba(79,70,229,0.4)] hover:shadow-[0_0_30px_rgba(79,70,229,0.6)] hover:-translate-y-1 w-full sm:w-auto'
        >
          Book a Mentorship Session
        </button>

      </div>

      <div className='mt-12'>
        <RelatedMentors mentorId={mentorId} speciality={mentorInfo.speciality}/>
      </div>

    </div>
  )
}

export default Appointment