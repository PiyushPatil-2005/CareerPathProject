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
            className="bg-[#5f6FFF] w-full h-[420px] object-cover rounded-2xl shadow-lg"
            src={mentorInfo.image}
            alt={mentorInfo.name}
          />
        </div>

        <div className='flex-1 border border-gray-200 rounded-xl p-8 bg-white shadow-sm'>

          <p className='flex items-center gap-2 text-3xl font-semibold text-gray-900'>
            {mentorInfo.name}
            <img className='w-6' src={assets.verified_icon} alt="" />
          </p>

          <div className='flex flex-wrap items-center gap-3 text-base mt-2 text-gray-600'>
            <p className='font-medium'>{mentorInfo.degree} - {mentorInfo.speciality}</p>
            <button className='py-1 px-3 border text-xs rounded-full bg-gray-50'>
              {mentorInfo.collegeName}
            </button>
          </div>

          <div className='mt-4'>
            <p className='flex items-center gap-1 text-lg font-semibold text-gray-900'>
              About <img src={assets.info_icon} alt="" />
            </p>
            <p className='text-base text-gray-600 max-w-[700px] mt-2 leading-relaxed'>
              {mentorInfo.about}
            </p>
          </div>

          {/* Session Selection */}

          <div className='mt-6'>
            <p className='text-lg font-semibold text-gray-800 mb-2'>
              Choose Session Type
            </p>

            <div className='flex flex-wrap gap-3'>

              {mentorInfo.sessions?.map((session,index)=>(
                <button
                  key={index}
                  onClick={()=>setSelectedSession(session)}
                  className={`px-4 py-2 rounded-full border text-sm font-medium transition
                  ${selectedSession?.name===session.name
                    ? 'bg-[#5f6FFF] text-white'
                    : 'border-gray-300 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {session.name}
                </button>
              ))}

            </div>

            {selectedSession && (
              <p className='text-lg font-semibold text-gray-800 mt-4'>
                Session Fee:
                <span className='ml-2 text-xl text-[#5f6FFF]'>
                  {currencySymbol} {selectedSession.fee}
                </span>
              </p>
            )}
          </div>

          {/* Announcements */}

          {announcements.length>0 && (
            <div className="mt-6 bg-yellow-50 border border-yellow-300 rounded-xl p-4">
              <p className="font-semibold text-yellow-700 mb-2">
                🎉 Special Announcements
              </p>

              {announcements.map((item,index)=>(
                <div key={index} className="mb-2">
                  <p className="font-medium text-gray-800">{item.title}</p>
                  <p className="text-sm text-gray-600">{item.message}</p>
                </div>
              ))}
            </div>
          )}

        </div>
      </div>

      {/* Booking Slots */}

      <div className='sm:ml-72 sm:pl-6 mt-10'>

        <p className='text-2xl font-semibold text-gray-800'>
          Booking Slots
        </p>

        <div className='flex gap-4 items-center w-full overflow-x-auto mt-5 pb-2'>

          {mentorSlots.length && mentorSlots.map((item,index)=>(
            <div
              key={index}
              onClick={()=>setSlotIndex(index)}
              className={`text-center py-5 min-w-20 rounded-xl cursor-pointer transition-all duration-300
              ${slotIndex===index
                ? 'bg-[#5f6FFF] text-white shadow-md'
                : 'border border-gray-300 text-gray-700 hover:bg-gray-100'
              }`}
            >
              <p className='text-sm font-medium'>
                {item[0] && daysOfWeek[item[0].datetime.getDay()]}
              </p>

              <p className='text-lg font-semibold'>
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
                ? 'bg-[#5f6FFF] text-white shadow'
                : 'text-gray-600 border border-gray-300 hover:bg-gray-100'
              }`}
            >
              {item.time.toLowerCase()}
            </p>
          ))}

        </div>

        <button
          onClick={bookAppointment}
          className='bg-[#5f6FFF] hover:bg-[#4b57e0] transition-all text-white font-semibold cursor-pointer text-lg px-10 py-3 rounded-full mt-8 shadow-md'
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