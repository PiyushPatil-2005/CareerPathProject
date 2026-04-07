import React, { useEffect, useState } from 'react'
import { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'


const Login = () => {

  const { backendURL, token, setToken } = useContext(AppContext)
  const navigate = useNavigate()

  const [state, setState] = useState('Sign Up')

  const [ email, setEmail ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ name, setName ] = useState('')

  const onSubmitHandler = async (event) => {
    event.preventDefault()

    try {

      if(state === 'Sign Up') {
        const { data } = await axios.post( backendURL + '/api/user/register', { name, password, email} )
        if(data.success) {
          localStorage.setItem('token', data.token)
          setToken(data.token)
        } else {
          toast.error(data.message)
        }

      } else {

        const { data } = await axios.post( backendURL + '/api/user/login', { password, email} )
        if(data.success) {
          localStorage.setItem('token', data.token)
          setToken(data.token)
        } else {
          toast.error(data.message)
        }

      }
    } catch (error) {
      toast.error(error.message)
    }
  }

  useEffect(() => {
    if(token) {
      navigate('/')
    }

  }, [token])

  return (
    <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
        <div className='glass-card flex flex-col gap-6 m-auto items-start p-10 min-w-[340px] sm:min-w-[400px] rounded-[2rem] text-slate-300 text-sm transition-all animate-fade-up'>
          <p className='text-3xl font-bold text-white glow-text'>{ state === 'Sign Up' ? "Create Account" : "Access Portal" }</p>
          <p className='text-slate-400'>Please { state === 'Sign Up' ? "sign up" : "log in" } to book session</p>
          {
            state === "Sign Up" && <div className='w-full'>
              <p>Full Name</p>
              <input className='bg-slate-900/50 border border-white/10 text-white rounded-xl w-full p-3 mt-1 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-600' type="text" onChange={(e)=> setName(e.target.value)} value={name} required />
            </div>
          }
          <div className='w-full'>
            <p>Email</p>
            <input className='bg-slate-900/50 border border-white/10 text-white rounded-xl w-full p-3 mt-1 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-600' type="email" onChange={(e)=> setEmail(e.target.value)} value={email} required />
          </div>
          <div className='w-full'>
            <p>Password</p>
            <input className='bg-slate-900/50 border border-white/10 text-white rounded-xl w-full p-3 mt-1 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all placeholder:text-slate-600' type="password" onChange={(e)=> setPassword(e.target.value)} value={password} required />
          </div>
          <button type='submit' className='bg-indigo-600 hover:bg-indigo-500 hover:shadow-[0_0_20px_rgba(79,70,229,0.5)] transition-all text-white font-bold w-full py-4 rounded-full mt-2 text-base cursor-pointer'>{ state === 'Sign Up' ? "Create Account" : "Login" }</button>
          {
            state === "Sign Up"
            ? <p>Already have an account? <span onClick={()=> setState('Login')} className='text-indigo-600 font-medium underline cursor-pointer'>Login here</span></p>
            : <p>Create an new account? <span onClick={()=> setState('Sign Up')} className='text-indigo-600 font-medium underline cursor-pointer'>Click here</span></p>
          }
        </div>
    </form>
  )
}

export default Login