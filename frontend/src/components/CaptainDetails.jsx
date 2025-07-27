import React from 'react'
import { GiBackwardTime } from "react-icons/gi";
import { MdSpeed } from "react-icons/md";
import { TbNotes } from "react-icons/tb";
import profile from '../assets/profile.jpeg'

function CaptainDetails() {
  return (
    <div>
       <div className="flex items-center justify-between">
          <div className="flex items-center justify-start gap-3">
            <img className="h-10 w-10 rounded-full object-cover" src={profile} />
            <h4 className="text-lg font-medium">Ramu Singh</h4>
          </div>
          <div>
            <h4 className="text-xl font-semibold">Rs.295.20</h4>
            <p className="text-sm text-gray-600">Earned</p>
          </div>
        </div>
     <div className="flex justify-between items-start gap-4 mt-6 bg-gray-100 p-4 rounded-lg">
  {/* Hours Online */}
  <div className="flex-1 min-w-[80px] text-center flex flex-col items-center">
    <div className="text-3xl text-gray-700 mb-2">
      <GiBackwardTime />
    </div>
    <h5 className="text-lg font-medium">10.2</h5>
    <p className="text-sm text-gray-600">Hours Online</p>
  </div>

  {/* Average Speed */}
  <div className="flex-1 min-w-[80px] text-center flex flex-col items-center">
    <div className="text-3xl text-gray-700  mb-2">
      <MdSpeed />
    </div>
    <h5 className="text-lg font-medium">22 km/h</h5>
    <p className="text-sm text-gray-600">Avg. Speed</p>
  </div>

  {/* Rides Today */}
  <div className="flex-1 min-w-[80px] text-center flex flex-col items-center">
    <div className="text-3xl text-gray-700  mb-2">
      <TbNotes />
    </div>
    <h5 className="text-lg font-medium">15</h5>
    <p className="text-sm text-gray-600">Rides Today</p>
  </div>
</div>
    </div>
  )
}

export default CaptainDetails
