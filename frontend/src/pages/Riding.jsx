import React from "react";
import uber_map from "../assets/uber_map.png";
import { IoIosArrowDown } from "react-icons/io";
import uber_car from "../assets/uber_car.png";
import { MdEditLocationAlt } from "react-icons/md";
import { MdPayments } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { TiHome } from "react-icons/ti";
import { Link } from "react-router-dom";

function Riding() {
  return (
    <div className="h-screen">
        <Link to='/home' className="fixed right-2 top-2 h-10 w-10 bg-white flex items-center justify-center rounded-full text-lg font-medium">
           <TiHome /> 
        </Link>
      <div className="h-1/2">
        <img className="h-full w-full object-cover" src={uber_map} />
      </div>
      <div className="h-1/2 p-4">
        <div className="flex items-center justify-between">
          <img className="h-20" src={uber_car} />
          <div className="text-right">
            <h2 className="text-lg font-medium">Ramu Singh</h2>
            <h4 className="text-xl font-semibold -mt-1 -mb-1">MP04 AB 1234</h4>
            <p className="text-sm txt-gray-600">Maruti Suzuki Alto</p>
          </div>
        </div>
        <div className="flex justify-between flex-col items-center gap-1">
          <div className="w-full mt-5">
           
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
        </div>
          <button className='w-full mt-5 bg-green-600 text-white font-semibold p-3 rounded-lg'>Make your Payment</button>
      </div>
    </div>
  );
}

export default Riding;
