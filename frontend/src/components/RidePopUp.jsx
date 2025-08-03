import React from "react";
import { IoIosArrowDown } from "react-icons/io";
import { IoLocationSharp } from "react-icons/io5";
import { MdEditLocationAlt } from "react-icons/md";
import { MdPayments } from "react-icons/md";
import customer from '../assets/customer.jpg'


function RidePopUp(props) {
  return (
    <div>
      <h5
        className="p-1 flex justify-center w-[93%] absolute top-0 text-3xl text-gray-200"
       onClick={()=>{
        props.setRidePopupPanel(false)
       }}
      >
        <IoIosArrowDown />
      </h5>
      <h3 className="text-2xl font-semibold mb-5">New Ride Available!!..</h3>
      <div className="flex items-center justify-between mt-4 p-3 bg-yellow-500 rounded-xl ">
            <div className="flex items-center gap-3 ">
                <img className="h-12 rounded-full object-cover w-10" src={customer}/>
                <h2 className="text-lg font-medium">Pranav
                  {/* {props.ride?.user.fullname.firstname + " " + props.ride?.user.fullname.lastname} */}
                </h2>
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
                {/* {props.ride.pickup} */}
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
                  {/* {props.ride.destination} */}
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="flex items-center gap-5 p-3">
              <MdPayments />
              <div>
                <h3 className="text-lg font-medium">Rs.193.20
                  {/* {props.ride.fare} */}
                </h3>
                <p className="text-sm -mt-1  text-gray-600">Cash Cash</p>
              </div>
            </div>
          </div>
        </div>
       <div className="flex items-center justify-between w-full mt-5">
         <button
          className=" mt-1 bg-green-600 text-white font-semibold p-3 px-10 rounded-lg"
          onClick={() => {
           props.setConfirmRidePopupPanel(true),
           props.confirmRide()
          }}
        >
          Accept
        </button>
        <button
          className=" mt-1 px-10 bg-gray-300 text-gray-700 font-semibold p-3 rounded-lg"
          onClick={()=>{
        props.setRidePopupPanel(false)
       }}
        >
          Ignore
        </button>
       </div>
      </div>
    </div>
  );
}

export default RidePopUp;
