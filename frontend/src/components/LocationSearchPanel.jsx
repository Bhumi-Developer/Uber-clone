import React from 'react'
import { FaLocationDot } from "react-icons/fa6";

function LocationSearchPanel(props) {

  // sample array for locations
  const locations = [
    'NH‑46, passes through MP Nagar / Habibganj',
    'Near Nadra bus stand, Bhopal Railway Station',
    '(Boulevard Street, TT Nagar – VIP Road along Upper Lake',
    'New Market (T.T. Nagar)',
    'Chowk Bazaar (Old City, Peer Gate Area)'
  ]

  return (
    <div>
      {/* sample data */}
      {
        locations.map((elem,index)=>(
          <div key={index} onClick={()=>{
            props.setVehiclePanel(true)
            props.setPanelOpen(false)
          }} className='flex gap-4 border-2 p-3 border-gray-100 active:border-black rounded-xl  items-center my-2 justify-start'>
        <h2 className='bg-[#eee] h-10 flex items-center w-10 rounded-full justify-center'>< FaLocationDot /></h2>
        <h4 className='font-medium'>{elem}</h4>
      </div>
        ))
      }
      
     
    </div>
  )
}

export default LocationSearchPanel
