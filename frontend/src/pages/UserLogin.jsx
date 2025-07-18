import React, { useState,useContext } from 'react'
import uber_logo from '../assets/uber_logo.png';
import { Link,useNavigate } from 'react-router-dom';
import { UsersDataContext } from '../context/UsersContext';
import axios from 'axios'

function UserLogin() {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const navigate = useNavigate()
  const {user,setUser} = useContext(UsersDataContext)

  const submitHandler = async(e)=>{
    e.preventDefault()
    const userData={
      email,
      password
    }
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`,userData)
    if(response.status == 200){
      const data = response.data
      setUser(data.user)
      localStorage.setItem('token',data.token)
      navigate('/home')
    }

    setEmail('')
    setPassword('')
  }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
       <div>
       <img className='w-16 mb-10' src={uber_logo}/>
      
      <form onSubmit={submitHandler}>
        
        <h3 className='text-lg font-medium mb-2'>What's your email</h3>
        <input required 
        value = {email}
        onChange={(e)=>setEmail(e.target.value)}
        type='email'
        className='bg-[#eeeeee] mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base'
        placeholder='email@example.com'
        />
        <h3 
        className='text-lg font-medium mb-2'>
          Enter Password
          </h3>
        <input required 
        value = {password}
        onChange={(e)=>setPassword(e.target.value)}
        type='password' 
         className='bg-[#eeeeee] mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base' placeholder='password'
         />
        <button
        className='bg-[#111] text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base'
        >Login</button>
        
      </form>
      <p className='text-center'>New here? <Link to='/signup' className='text-blue-600'>Create new Account</Link></p>
      </div>
      <div>
        <Link to='/captain-login' className='bg-[#10b461] flex items-center justify-center w-full text-white py-3 rounded mt-4'>Sign in as Captain</Link>
      </div>
    </div>
  )
}

export default UserLogin
