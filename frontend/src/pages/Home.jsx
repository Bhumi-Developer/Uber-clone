import React, { useRef, useState } from 'react'
import uber_logo from '../assets/uber_logo.png';
import uber_map from '../assets/uber_map.png'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import { IoIosArrowDown } from "react-icons/io";
import LocationSearchPanel from '../components/LocationSearchPanel';

function Home() {
  const [pickup,setPickup] = useState('')
  const [destination,setDestination] = useState('')
  const [panelOpen,setPanelOpen] = useState(false)
  const panelRef = useRef(null)
  const panelCloseRef = useRef(null)

  const submitHandler=(e)=>{
    e.preventDefault()
  }

  useGSAP(function(){
   if(panelOpen){
    gsap.to(panelRef.current,{
      height:'70%',
      padding:24
      // opacity:1
    })
    gsap.to(panelCloseRef.current,{
      opacity:1
    })
   }else{
    gsap.to(panelRef.current,{
      height:'0%',
      padding:0
      // opacity:0
    })
    gsap.to(panelCloseRef.current,{
      opacity:0
    })
   }
  },[panelOpen])

  return (
    <div className='h-screen relative'>
      <img className='w-16 absolute left-5 top-5' src={uber_logo}/>
      <div className='h-screen w-screen'>
        <img className='h-full w-full object-cover' src={uber_map}/>
      </div>
      <div className='flex flex-col justify-end h-screen absolute top-0 w-full'>
        <div className='h-[30%] p-6 bg-white relative'>
          <h5 onClick={()=>setPanelOpen(false)} className='absolute right-6 top-6 text-2xl opacity-0' ref={panelCloseRef}><IoIosArrowDown /></h5>
        <h4 className='text-2xl font-semibold'>Find a Trip</h4>
        <form onSubmit={(e)=>submitHandler(e)}>
          <div className='line absolute h-16 w-1 top-[43%] left-10 bg-gray-900 rounded-full '></div>
          <input type='text' className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5' placeholder='Add a pick-up location'
          value={pickup} onChange={(e)=>setPickup(e.target.value)}
          onClick={()=>setPanelOpen(true)}/>
          <input type='text'  className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3'  placeholder='Enter your destination' value={destination} onChange={(e)=>setDestination(e.target.value)}
          onClick={()=>setPanelOpen(true)}/>
        </form>
        </div>
        <div ref={panelRef} className='h-0 bg-white'>
              <LocationSearchPanel />
        </div>
      </div>
    </div>
  )
}

export default Home
