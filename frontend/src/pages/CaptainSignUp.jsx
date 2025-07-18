import React,{useContext, useState} from 'react'
import captainpic from '../assets/captain.png';
import { Link,useNavigate } from 'react-router-dom';
import { CaptainDataContext } from '../context/CaptainContext';
import axios from 'axios'

function CaptainSignUp() {
   const [firstname,setFirstname] = useState('')
      const [lastname,setLastname] = useState('')
      const [email,setEmail] = useState('')
      const [password,setPassword] = useState('')
      const [capatinData,setCaptainData] = useState({})
      const navigate = useNavigate()
      const {captain,setCaptain} = useContext(CaptainDataContext)

  const submitHandler = async(e)=>{
    e.preventDefault()
    const newCaptain={
      fullname:{
        firstname,
        lastname
      },
      email,
      password
    }
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`,newCaptain)
    const data = response.data
    console.log(data)
    setCaptain(data.captain)
    localStorage.setItem('token',data.token)
    }
    
  

  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
           <div>
           <img className='w-16 mb-10' src={captainpic}/>
          
          <form onSubmit={submitHandler}>
            
            <h3 className='text-lg font-medium mb-2'>What's our Captain's name</h3>
            <div className='flex gap-4 mb-7'>
            <input required 
           value={firstname}
           onChange={(e)=>setFirstname(e.target.value)}
           type='text'
           className='bg-[#eeeeee]  rounded px-4 py-2 w-1/2 text-lg placeholder:text-base'
           placeholder='First name'
           />
            <input required 
           value={lastname}
           onChange={(e)=>setLastname(e.target.value)}
           type='text'
           className='bg-[#eeeeee]  rounded px-4 py-2 w-1/2 text-lg placeholder:text-base'
           placeholder='Last name'
           />
            </div>
            <h3 className='text-lg font-medium mb-2'>What's our captain's email</h3>
            <input required 
           value={email}
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
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            type='password' 
             className='bg-[#eeeeee] mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-base' placeholder='password'
             />
            <button
            className='bg-[#111] text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base'
            >Create Account</button>
            
          </form>
          <p className='text-center'>Already have an Account? <Link to='/captain-login' className='text-blue-600'>Login Here</Link></p>
          </div>
          <div>
            <p className='text-[10px] text-gray-600 leading-tight'>This site is protected by reCAPCHA <span className='underline'>Google Policy</span> and <span className='underline'>Terms of service apply.</span></p>
          </div>
        </div>
  )
}

export default CaptainSignUp
