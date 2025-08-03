import React from 'react'
import uber_car from '../assets/uber_car.png';
import { IoPerson } from "react-icons/io5";
import uber_bike from '../assets/uber_bike.webp'
import uber_auto from '../assets/uber_Auto.webp';
import { IoIosArrowDown } from "react-icons/io";


function VehiclePanel(props) {
  return (
    <div>
        <h5 className='p-1 flex justify-center w-[93%] absolute top-0 text-3xl text-gray-200' onClick={()=>{props.setVehiclePanel(false)}}><IoIosArrowDown /></h5>
        <h3 className='text-2xl font-semibold mb-5' >Choose a vehicle</h3>
        <div onClick={()=>{
            props.setConfirmRidePanel(true)
            props.setVehicleType('car')
        }} className='flex border-2 border-gray-200 active:border-black rounded-xl mb-2  w-full items-center justify-between  p-3'>
            <img className='h-12' src={uber_car} />
            <div className=' w-1/2 ml-2'>
              <h4 className='font-medium text-sm flex gap-3'>UberGo<span className='flex items-center gap-1'><IoPerson />4</span></h4>
              <h5 className='font-medium text-sm'>2 mins away</h5>
              <p className='font-normal text-xs text-gray-600'>Affordable,compact rides</p>
            </div>
            <h2 className='text-xl font-semibold'>
              {/* Rs.{props.fare.car} */}
             Rs.198.20 </h2>
        </div>
        <div onClick={()=>{
            props.setConfirmRidePanel(true)
            props.setVehicleType('bike')
        }} className='flex border-2 border-gray-200 active:border-black rounded-xl  w-full items-center justify-between  p-3 mb-2'>
            <img className='h-12' src={uber_bike} />
            <div className=' w-1/2 ml-2'>
              <h4 className='font-medium text-sm flex gap-3'>Moto<span className='flex items-center gap-1'><IoPerson />1</span></h4>
              <h5 className='font-medium text-sm'>3 mins away</h5>
              <p className='font-normal text-xs text-gray-600'>Affordable Bike rides</p>
            </div>
            <h2 className='text-xl font-semibold'>
              {/* Rs.{props.fare.bike} */}
              Rs.110</h2>
        </div>
        <div onClick={()=>{
            props.setConfirmRidePanel(true)
            props.setVehicleType('auto')
        }} className='flex border-2 border-gray-200 active:border-black rounded-xl  w-full items-center justify-between  p-3 mb-2'>
            <img className='h-12' src={uber_auto} />
            <div className=' w-1/2 ml-2'>
              <h4 className='font-medium text-sm flex gap-3'>Moto<span className='flex items-center gap-1'><IoPerson />3</span></h4>
              <h5 className='font-medium text-sm'>3 mins away</h5>
              <p className='font-normal text-xs text-gray-600'>Affordable Auto rides</p>
            </div>
            <h2 className='text-xl font-semibold'>
              {/* Rs.{props.fare.auto} */}
              Rs.68.11</h2>
        </div>
    </div>
  )
}

export default VehiclePanel
