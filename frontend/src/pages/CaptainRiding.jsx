
import React, { useState,useRef } from "react";
import uber_map from "../assets/uber_map.png";
import { Link } from "react-router-dom";
import uber_logo from "../assets/uber_logo.png";
import { FiLogOut } from "react-icons/fi"
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import FinishRide from "../components/FinishRide";

function CaptainRiding() {

    const [finishRidePanel,setFinishRidePanel] = useState(false)
    const finishRidePanelRef = useRef(null)

     useGSAP(function(){
    if(finishRidePanel){
      gsap.to(finishRidePanelRef.current,{
        transform: 'translateY(0)'
      })
    }else{
      gsap.to(finishRidePanelRef.current,{
        transform:'translateY(100%)'
      })
    }
  },[finishRidePanel])

  return (
    <div className="h-screen overflow-hidden">
         
      <div className="fixed p-3 top-0 flex items-center justify-between w-screen">
        <img className="w-16" src={uber_logo} />
        <Link
          to="/home"
          className="h-10 w-10 bg-white flex items-center justify-center rounded-full text-lg font-medium"
        >
          <FiLogOut />
        </Link>
      </div>
      <div className="h-4/5">
        <img className="h-full w-full object-cover" src={uber_map} />
      </div>
      <div className="h-1/5 p-6 flex items-center justify-between bg-yellow-400 relative " onClick={()=>{
        setFinishRidePanel(true)
      }} >
      <h5
                className="p-1 flex justify-center w-[95%] absolute top-0 text-3xl text-gray-500"
              
              >
                <MdOutlineKeyboardArrowUp />
              </h5>
      <h4 className="text-xl font-semibold">4KM Away</h4>
       <button  className="  bg-green-600 text-white font-semibold p-3 px-10 rounded-lg">Complete Ride</button>
</div>
<div ref ={finishRidePanelRef} className='fixed w-full z-10 bottom-0 bg-white px-3 py-10 pt-12 translate-y-full'>
          <FinishRide setFinishRidePanel={setFinishRidePanel}/>
      </div>
       
    </div>
  );

}

export default CaptainRiding
