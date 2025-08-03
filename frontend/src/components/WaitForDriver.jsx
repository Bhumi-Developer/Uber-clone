import React from 'react'
import { IoIosArrowDown } from "react-icons/io";
import uber_car from '../assets/uber_car.png';
import { MdEditLocationAlt } from "react-icons/md";
import { MdPayments } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";

function WaitForDriver(props) {
  return (
       <div>
              <h5 className='p-1 flex justify-center w-[93%] absolute top-0 text-3xl text-gray-200' onClick={()=>{
                props.setWaitingForDriver(false)
              }}><IoIosArrowDown /></h5>
                  <div className='flex items-center justify-between'>
                    <img className='h-20' src={uber_car}/>
                   <div className='text-right'>
                     <h2 className='text-lg font-medium'>Ramu Singh
                        {/* {props.ride?.fullname.firstname + " " + props.ride?.fullname.latname} */}
                     </h2>
                     <h4 className='text-xl font-semibold -mt-1 -mb-1'>MP04 AB 1234
                     {/* {props.ride?.captain.vehicle.plate} */}
                     </h4>
                     <p className='text-sm txt-gray-600'>Maruti Suzuki Alto</p>
                     <h1 className='text-lg font-semibold'>1234
                        {/* {props.ride?.otp} */}
                        </h1>
                   </div>
                  </div>
                   <div className='flex justify-between flex-col items-center gap-1'>
                        
                       <div className='w-full mt-5'>
                           <div className='flex items-center gap-5 p-3 border-b-2  border-gray-200'>
                           <MdEditLocationAlt />
                           <div>
                               <h3 className='text-lg font-medium'>562/11-A</h3>
                               <p className='text-sm -mt-1  text-gray-600'>
                                   Kankariya Talab,Ahmedabad
                                   {/* {props.ride?.pickup} */}
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
                                   {/* {props.ride?.destination} */}
                               </p>
                           </div>
                           </div>
                           </div>
                           <div>
                           <div className='flex items-center gap-5 p-3'>
                           <MdPayments />
                           <div>
                               <h3 className='text-lg font-medium'>Rs.193.20
                               {/* {props.ride?.fare} */}
                               </h3>
                               <p className='text-sm -mt-1  text-gray-600'>
                                   Cash Cash
                               </p>
                           </div>
                           </div>
                           </div>
                       </div>
                      
                   </div>
   
       </div>
     )
 }


export default WaitForDriver
