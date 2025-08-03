import React, { useState,useRef } from "react";
import uber_map from "../assets/uber_map.png";
import { Link } from "react-router-dom";
import uber_logo from "../assets/uber_logo.png";
import { FiLogOut } from "react-icons/fi";
import CaptainDetails from "../components/CaptainDetails";
import RidePopUp from "../components/RidePopUp";
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import ConfirmRidePopup from "../components/ConfirmRidePopup";
import { useEffect,useContext } from "react";
import { SocketContext } from "../context/SocketContext";
import { CaptainDataContext } from "../context/CaptainContext";


function CaptainHome() {

  const [ridePopupPanel,setRidePopupPanel] = useState(false)
  const [confirmRidePopupPanel,setConfirmRidePopupPanel] = useState(false)
  const ridePopupPanelRef = useRef(null)
  const [ride,setRide] = useState(null)
  const confirmRidePopupPanelRef = useRef(null)
  const {socket} = useContext(SocketContext)
  const {captain} = useContext(CaptainDataContext)

  useEffect(()=>{
    socket.emit('join',{
      userId: captain._id,
      userType: 'captain'
    })
    // socket.on('ride-request',(data)=>{
    //   setRidePopupPanel(true)
    // })

    const updateLocation = ()=>{
      if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position=>{
          socket.emit('update-location-captain',{
            userId: captain._id,
            location:{
            ltd: position.coords.latitude,
            lng: position.coords.longitude
            }
          })
        })
      }
    }
    const locationInterval = setInterval(updateLocation,10000)
    updateLocation()

  })

   async function confirmRide(){
      const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/confirm`,{
        rideId: ride._id,
        captainId: captain._id,
       
      },{
        headers: {
          Authorization: `Bearer ${localStorage.getItem('token')}`
        }
      })
   }

  useGSAP(function(){
    if(ridePopupPanel){
      gsap.to(ridePopupPanelRef.current,{
        transform: 'translateY(0)'
      })
    }else{
      gsap.to(ridePopupPanelRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[ridePopupPanel])

  useGSAP(function(){
    if(confirmRidePopupPanel){
      gsap.to(confirmRidePopupPanelRef.current,{
        transform: 'translateY(0)'
      })
    }else{
      gsap.to(confirmRidePopupPanelRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[confirmRidePopupPanel])

  return (
    <div className="h-screen">
      <div className="fixed p-3 top-0 flex items-center justify-between w-screen">
        <img className="w-16" src={uber_logo} />
        <Link
          to="/home"
          className="h-10 w-10 bg-white flex items-center justify-center rounded-full text-lg font-medium"
        >
          <FiLogOut />
        </Link>
      </div>
      <div className="h-3/5">
        <img className="h-full w-full object-cover" src={uber_map} />
      </div>
      <div className="h-2/5 p-6 ">
       <CaptainDetails />
</div>
       <div ref ={ridePopupPanelRef} className='fixed w-full z-10 bottom-0 bg-white px-3 py-10 pt-12 translate-y-full'>
          <RidePopUp 
          ride ={ride}
          confirmRide = {confirmRide}
          setRidePopupPanel={setRidePopupPanel} setConfirmRidePopupPanel={setConfirmRidePopupPanel}/>
      </div>
       <div ref ={confirmRidePopupPanelRef} className='fixed w-full z-10 h-screen bottom-0 bg-white px-3 py-10 pt-12 translate-y-full'>
          <ConfirmRidePopup setRidePopupPanel={setRidePopupPanel}
          setConfirmRidePopupPanel={setConfirmRidePopupPanel} />
      </div>
    </div>
  );
}

export default CaptainHome;
