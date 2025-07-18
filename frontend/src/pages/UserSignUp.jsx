import React,{useState,useContext} from 'react'
import uber_logo from '../assets/uber_logo.png';
import { Link, useNavigate } from 'react-router-dom';
import { UsersDataContext } from '../context/UsersContext';
import axios from 'axios'

function UserSignUp() {
    const [firstname,setFirstname] = useState('')
    const [lastname,setLastname] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [userData,setUserData] = useState({})

    const navigate = useNavigate()
    const {user,setUser} = useContext(UsersDataContext)

  const submitHandler = async(e)=>{
    e.preventDefault()
    const newUser ={
      fullname:{
        firstname,
        lastname
      },
      email,
      password

      
    } 
    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`,newUser)
    if(response.status == 201){
      const data = response.data
      setUser(data.user)
      localStorage.setItem('token',data.token)
      navigate('/home')
    }
  }

    return (
        <div className='p-7 h-screen flex flex-col justify-between'>
           <div>
           <img className='w-16 mb-10' src={uber_logo}/>
          
          <form onSubmit={submitHandler}>
            
            <h3 className='text-lg font-medium mb-2'>What's your name</h3>
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
            <h3 className='text-lg font-medium mb-2'>What's your email</h3>
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
          <p className='text-center'>Already have an Account? <Link to='/login' className='text-blue-600'>Login Here</Link></p>
          </div>
          <div>
            <p className='text-[10px] text-gray-600 leading-tight'>By proceeding,you consent to give calls,Whatsapp or SMS messages,including by automated means,from Uber and its affiliates to the nymber provided.</p>
          </div>
        </div>
      )
}

export default UserSignUp
