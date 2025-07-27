import React, { useState } from 'react'
import { IoIosArrowDown } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { MdEditLocationAlt } from "react-icons/md";
import { MdPayments } from "react-icons/md";
import customer from '../assets/customer.jpg'
import { Link } from 'react-router-dom';

function ConfirmRidePopup(props) {
    const [otp,setOtp] =useState('')

    const submitHandler =(e)=>{
        e.preventDefault()
    }

  return (
      <div>
        {/* <h5
          className="p-1 flex justify-center w-[93%] absolute top-0 text-3xl text-gray-200"
        
        >
          <IoIosArrowDown />
        </h5> */}
        <h3 className="text-2xl font-semibold mb-5">Confirm this ride to start :-)</h3>
        <div className="flex items-center justify-between mt-4 p-3 bg-yellow-500 rounded-xl ">
              <div className="flex items-center gap-3 ">
                  <img className="h-12 rounded-full object-cover w-10" src={customer}/>
                  <h2 className="text-lg font-medium">Pranav</h2>
              </div>
              <h5>2.2 KM</h5>
        </div>
        <div className="flex justify-between flex-col items-center gap-1">
         
          <div className="w-full mt-5">
            <div className="flex items-center gap-5 p-3 border-b-2  border-gray-200">
              <MdEditLocationAlt />
              <div>
                <h3 className="text-lg font-medium">562/11-A</h3>
                <p className="text-sm -mt-1  text-gray-600">
                  Kankariya Talab,Ahmedabad
                </p>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-5 p-3 border-b-2 border-gray-200">
                <IoLocationSharp />
                <div>
                  <h3 className="text-lg font-medium">562/11-A</h3>
                  <p className="text-sm -mt-1  text-gray-600">
                    Kankariya Talab,Ahmedabad
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-5 p-3">
                <MdPayments />
                <div>
                  <h3 className="text-lg font-medium">Rs.193.20</h3>
                  <p className="text-sm -mt-1  text-gray-600">Cash Cash</p>
                </div>
              </div>
            </div>
          </div>
         <div className='mt-6 w-full'>
            <form onSubmit={(e)=>{
                submitHandler(e)
            }}>
                <input type='text' placeholder='Enter OTP' className='bg-[#eee] px-6 py-4 text-lg rounded-lg w-full mt-5 font-mono' value={otp} onChange={(e)=>setOtp(e.target.value)}/>
                 <Link to='/captain-riding'
            className="w-full flex justify-center mt-4 bg-green-600 text-white font-semibold p-3 rounded-lg"
            onClick={() => {
             
            }}
          >
            Confirm
          </Link>
          <button
            className="w-full mt-3 bg-red-700 text-white font-semibold p-3 rounded-lg"
            onClick={()=>{
          props.setConfirmRidePopupPanel(false)
          props.setRidePopupPanel(false)
         }}
          >
            Cancel
          </button>
            </form>
         </div>
        </div>
      </div>
    );
}

export default ConfirmRidePopup
