import React, { useContext, useState, useEffect } from 'react'
import { AppContext } from '../context/AppContext'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import ConfirmModal from '../components/ConfirmModal'

const MyAppointments = () => {

  const { backendURL, token, getMentorsData } = useContext(AppContext)

  const [appointments, setAppointments] = useState([])
  const [confirmModal, setConfirmModal] = useState({ isOpen: false, appointmentId: null })
  const months = [" ", "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

  const slotDateFormate = (slotDate) => {
    const dateArray = slotDate.split('_')
    return dateArray[0] + " " + months[Number(dateArray[1])] + " " + dateArray[2]
  }

  const navigate = useNavigate()

  const getUserAppointments = async () => {
    try {

      const { data } = await axios.get(backendURL + '/api/user/appointments', { headers: { token } })

      if (data.success) {
        setAppointments(data.appointments.reverse())
        console.log(data.appointments)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const cancelAppointment = async (appointmentId) => {
    try {
      const { data } = await axios.post(backendURL + '/api/user/cancel-appointment', { appointmentId }, { headers: { token } })
      if (data.success) {
        toast.success(data.message)
        getUserAppointments()
        getMentorsData()
      } else {
        toast.error(data.message)
      }
    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }
  }

  const initPay = (order) => {

    const options = {
      key: import.meta.env.VITE_RAZORPAY_KEY_ID,
      amount: order.amount,
      currency: order.currency,
      name: 'Appointment Payment',
      description: 'Appointment Payment',
      order_id: order.id,
      receipt: order.receipt,
      handler: async (response) => {
        console.log(response)

        try {

          const { data } = await axios.post(backendURL + '/api/user/verifyRazorpay', response, { headers: { token } })
          if (data.success) {
            getUserAppointments()
            navigate('/my-appointments')
          }
        } catch (error) {
          console.log(error)
          toast.error(error.message)
        }
      }
    }

    const rzp = new window.Razorpay(options)
    rzp.open()

  }

  const appoinmentRazorpay = async (appointmentId) => {

    try {

      const { data } = await axios.post(backendURL + '/api/user/payment-razorpay', { appointmentId }, { headers: { token } })

      if (data.success) {
        initPay(data.order)
      }

    } catch (error) {
      console.log(error)
      toast.error(error.message)
    }

  }

  useEffect(() => {
    if (token) {
      getUserAppointments()
    }
  }, [token])

  return (
    <div className='px-4 md:px-0'>
      <p className='pb-4 mt-12 font-bold text-2xl text-white glow-text border-b border-white/10 mb-6'>My Counselling Sessions</p>
      <div>
        {appointments.map((item, index) => (
          <div className='glass-card rounded-[2rem] p-6 grid grid-cols-1 md:grid-cols-[1fr_2fr_1fr] gap-6 mb-6' key={index}>
            <div className='flex items-center md:items-start'>
              <div className='relative overflow-hidden rounded-xl h-32 w-32 shrink-0 bg-slate-800 shadow-inner'>
                <img className='w-full h-full object-cover' src={item.menData.image} alt="" />
              </div>
            </div>
            <div className='flex-1 text-slate-400'>
              <p className='text-white text-xl font-bold'>{item.menData.name}</p>
              <p className='text-indigo-400 mt-1 font-semibold'>{item.menData.speciality}</p>
              <p className='text-xs mt-4 bg-white/5 inline-block px-4 py-2 rounded-lg border border-white/10 shadow-inner'><span className='text-sm text-white font-bold pr-2'>Date & Time</span> {slotDateFormate(item.slotDate)} | <span className='font-semibold'>{item.slotTime}</span> </p>
            </div>

            <div className='flex flex-col gap-3 justify-center border-t border-white/10 pt-4 md:border-t-0 md:pt-0'>
              {<button className='w-full py-3 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 font-bold'>Session Booked</button>}
              {!item.cancelled && !item.isCompleted && <button onClick={() => setConfirmModal({ isOpen: true, appointmentId: item._id })} className='text-sm text-slate-300 text-center w-full py-3 border border-white/10 rounded-full cursor-pointer hover:bg-red-500/20 hover:text-red-400 hover:border-red-500/50 transition-all duration-300 font-semibold'>Cancel Counselling</button>}
              {item.cancelled && !item.isCompleted && <button className='w-full py-3 border border-red-500/50 bg-red-500/10 rounded-full text-red-500 font-bold'>Cancelled</button>}
              {item.isCompleted && <button className='w-full py-3 border border-green-500/50 bg-green-500/10 rounded-full text-green-500 font-bold'>Completed</button>}
            </div>
          </div>
        ))}
      </div>

      <ConfirmModal 
        isOpen={confirmModal.isOpen}
        onClose={() => setConfirmModal({ isOpen: false, appointmentId: null })}
        onConfirm={() => {
          if (confirmModal.appointmentId) cancelAppointment(confirmModal.appointmentId);
        }}
        title="Cancel Appointment"
        message="Are you sure you want to cancel this counselling session? This action cannot be undone."
        confirmText="Cancel Session"
        isDestructive={true}
      />
    </div>
  )
}

export default MyAppointments
