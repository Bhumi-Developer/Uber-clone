import React, { useContext, useState }  from 'react'
import captainpic from '../assets/captain.png';
import { Link,useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios'

function CaptainLogin() {

const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const {captain,setCaptain} = useContext(CaptainDataContext)
  const navigate = useNavigate()

  const submitHandler = async(e)=>{
    e.preventDefault()
    const CaptainData = {
      email,
      password
    }
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}/captains/login`,
        CaptainData
      );
      const data = response.data;         
      setCaptain(data.captain);
      localStorage.setItem('token', data.token);
      navigate('/captain-home'); 
    } catch (err) {
      console.error('Error creating account:', err);
    }
    setEmail('')
    setPassword('')
  }

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
       <div>
       <img className='w-16 mb-10' src={captainpic}/>
      
      <form onSubmit={submitHandler}>
        
        <h3 className='text-lg font-medium mb-2'>What's our Captain's email</h3>
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
      <p className='text-center'>Wanna join a fleet? <Link to='/captain-signup' className='text-blue-600'>Register as a Captain</Link></p>
      </div>
      <div>
        <Link to='/login' className='bg-[#d5622d] flex items-center justify-center w-full text-white py-3 rounded mt-4'>Sign in as User</Link>
      </div>
    </div>
  )
}

export default CaptainLogin
