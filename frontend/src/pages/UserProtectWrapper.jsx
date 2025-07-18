import React,{useState,useContext,useEffect} from 'react'
import { UsersDataContext } from '../context/UsersContext'
import { useNavigate } from 'react-router-dom'

function UserProtectWrapper({children}) {
    const token = localStorage.getItem('token')
    const {user,setUser} = useContext(UsersDataContext)
    const navigate = useNavigate()
   useEffect(()=>{
    if(!token){
      navigate('/login')
  }
   })
  return (
    <>
    {children}
    </>
  )
}

export default UserProtectWrapper
