import React from 'react';
import { IoIosArrowDown } from "react-icons/io";
import uber_car from '../assets/uber_car.png';
import { IoLocationSharp } from "react-icons/io5";
import { MdEditLocationAlt } from "react-icons/md";
import { MdPayments } from "react-icons/md";

function ConfirmRide(props) {
  return (
    <div>
           <h5 className='p-1 flex justify-center w-[93%] absolute top-0 text-3xl text-gray-200' onClick={()=>{props.setConfirmRidePanel(false)}}><IoIosArrowDown /></h5>
                <h3 className='text-2xl font-semibold mb-5' >Confirm your Ride</h3>
                <div className='flex justify-between flex-col items-center gap-1'>
                      <img className='h-25' src={uber_car} />
                    <div className='w-full mt-5'>
                        <div className='flex items-center gap-5 p-3 border-b-2  border-gray-200'>
                        <MdEditLocationAlt />
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-sm -mt-1  text-gray-600'>
                                Kankariya Talab,Ahmedabad
                            </p>
                        </div>
                        </div>
                        <div>
                        <div className='flex items-center gap-5 p-3 border-b-2 border-gray-200'>
                        <IoLocationSharp />
                        <div>
                            <h3 className='text-lg font-medium'>562/11-A</h3>
                            <p className='text-sm -mt-1  text-gray-600'>
                                Kankariya Talab,Ahmedabad
                            </p>
                        </div>
                        </div>
                        </div>
                        <div>
                        <div className='flex items-center gap-5 p-3'>
                        <MdPayments />
                        <div>
                            <h3 className='text-lg font-medium'>Rs.193.20</h3>
                            <p className='text-sm -mt-1  text-gray-600'>
                                Cash Cash
                            </p>
                        </div>
                        </div>
                        </div>
                    </div>
                    <button className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg' onClick={()=>{props.setVehicleFound(true),
                        props.setConfirmRidePanel(false)
                    }}>Confirm</button>
                </div>

    </div>
  )
}

export default ConfirmRide
