import React, { useContext, useEffect, useRef, useState } from 'react'
import uber_logo from '../assets/uber_logo.png';
import uber_map from '../assets/uber_map.png';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { IoIosArrowDown } from "react-icons/io";
import LocationSearchPanel from '../components/LocationSearchPanel';
import VehiclePanel from '../components/VehiclePanel';
import ConfirmRide from '../components/ConfirmRide';
import LookingForDriver from '../components/LookingForDriver';
import WaitForDriver from '../components/WaitForDriver';
import axios from 'axios';
import {SocketContext} from '../context/SocketContext'
import { UsersDataContext } from '../context/UsersContext';
import { useNavigate } from 'react-router-dom';
import LiveTracking from '../components/LiveTracking';

function Home() {
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [panelOpen, setPanelOpen] = useState(false);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [waitingForDriver, setWaitingForDriver] = useState(false);
  const navigate = useNavigate();

  const vehicleFoundRef = useRef(null);
  const confirmRidePanelRef = useRef(null);
  const vehiclePanelRef = useRef(null);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const waitingForDriverRef = useRef(null);

  const [pickupSuggestions, setPickupSuggestions] = useState([]);
  const [destinationSuggestions, setDestinationSuggestions] = useState([]);
  const [activeField, setActiveField] = useState(null);
  const [fare,setFare] = useState({})
  const [vehicleType,setVehicleType] = useState(null)
  const [ride,setRide] = useState(null)

  const { socket} = useContext(SocketContext);
  const {user} = useContext(UsersDataContext)

  useEffect(() => {
    socket.emit('join',{userType:"user",userId: user._id})
  }, [user]);

  socket.on('ride-confirmed',ride=>{
    setVehicleFound(false)
    setWaitingForDriver(true)
    setRide(ride)
  })
  socket.on('ride-started',ride=>{
    setWaitingForDriver(false)
    navigate('/riding',{state: {ride}})
  })
  

  // Handlers for input changes, fetch suggestions from API
  const handlePickupChange = async (e) => {
    const value = e.target.value;
    setPickup(value);

    // try {
    //   const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`, {
    //     params: { input: value },
    //     headers: {
    //       Authorization: `Bearer ${localStorage.getItem('token')}`
    //     }
    //   });
    //   setPickupSuggestions(response.data);
    // } catch (error) {
    //   console.error("Error fetching pickup suggestions:", error);
    // }
  };

  const handleDestinationChange = async (e) => {
    const value = e.target.value;
    setDestination(value);

    // try {
    //   const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/maps/get-suggestions`, {
    //     params: { input: value },
    //     headers: {
    //       Authorization: `Bearer ${localStorage.getItem('token')}`
    //     }
    //   });
    //   setDestinationSuggestions(response.data);
    // } catch (error) {
    //   console.error("Error fetching destination suggestions:", error);
    // }
  };

  // Placeholder submit handler
  const submitHandler = (e) => {
    e.preventDefault();
  
   
  };

  // GSAP animations for panelOpen toggle
  useGSAP(() => {
    if (panelOpen) {
      gsap.to(panelRef.current, {
        height: '70%',
        padding: 24,
        duration: 0.4,
        ease: 'power2.out',
      });
      gsap.to(panelCloseRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: 'power2.out',
        pointerEvents: 'auto'
      });
    } else {
      gsap.to(panelRef.current, {
        height: '0%',
        padding: 0,
        duration: 0.4,
        ease: 'power2.in',
      });
      gsap.to(panelCloseRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: 'power2.in',
        pointerEvents: 'none'
      });
    }
  }, [panelOpen]);

  // GSAP animations for vehiclePanel
  useGSAP(() => {
    gsap.to(vehiclePanelRef.current, {
      transform: vehiclePanel ? 'translateY(0)' : 'translateY(100%)',
      duration: 0.4,
      ease: 'power2.out',
    });
  }, [vehiclePanel]);

  // GSAP animations for confirmRidePanel
  useGSAP(() => {
    gsap.to(confirmRidePanelRef.current, {
      transform: confirmRidePanel ? 'translateY(0)' : 'translateY(100%)',
      duration: 0.4,
      ease: 'power2.out',
    });
  }, [confirmRidePanel]);

  // GSAP animations for vehicleFound
  useGSAP(() => {
    gsap.to(vehicleFoundRef.current, {
      transform: vehicleFound ? 'translateY(0)' : 'translateY(100%)',
      duration: 0.4,
      ease: 'power2.out',
    });
  }, [vehicleFound]);

  // GSAP animations for waitingForDriver
  useGSAP(() => {
    gsap.to(waitingForDriverRef.current, {
      transform: waitingForDriver ? 'translateY(0)' : 'translateY(100%)',
      duration: 0.4,
      ease: 'power2.out',
    });
  }, [waitingForDriver]);

  async function findTrip(){
    setVehiclePanel(true)
    setPanelOpen(false)

    // const response = await axios.get(`${import.meta.env.VITE_BASE_URL}/rides/get-fare`, {
    //   params: { pickup,destination },
    //   headers: {
    //     Authorization: `Bearer ${localStorage.getItem('token')}`
    //   }
    // });
    // setFare(response.data);
  }

    // async function createRide(){
    //     const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/rides/create`,{
    //       pickup,
    //       destination,
    //       vehicleType
    //     },{
    //       headers: {
    //         Authorization: `Bearer ${localStorage.getItem('token')}`
    //       }
    //     })
    // }

  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-16 absolute left-5 top-5' src={uber_logo} alt="Uber Logo" />
      <div className='h-screen w-screen'>
        <img className='h-full w-full object-cover' src={uber_map} 
        // <LiveTracking/>
        alt="Map background" />
      </div>

      <div className='flex flex-col justify-end h-screen absolute top-0 w-full'>
        <div className='h-[27%] p-6 pb-10 bg-white relative'>
          <h5
            onClick={() => setPanelOpen(false)}
            className='absolute right-6 top-6 text-2xl opacity-0 cursor-pointer'
            ref={panelCloseRef}
            aria-label="Close panel"
          >
            <IoIosArrowDown />
          </h5>

          <h4 className='text-2xl font-semibold'>Find a Trip</h4>

          <form onSubmit={submitHandler}>
            <div className='line absolute h-16 w-1 top-[50%] left-12 bg-gray-900 rounded-full'></div>
            <input
              type='text'
              className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5'
              placeholder='Add a pick-up location'
              value={pickup}
              onChange={handlePickupChange}
              onClick={() => {
                setPanelOpen(true);
                setActiveField('pickup');
              }}
              aria-label="Pick-up location"
              autoComplete="off"
            />
            <input
              type='text'
              className='bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3'
              placeholder='Enter your destination'
              value={destination}
              onChange={handleDestinationChange}
              onClick={() => {
                setPanelOpen(true);
                setActiveField('destination');
              }}
              aria-label="Destination"
              autoComplete="off"
            />

          
          </form>
          <button
              type="submit"
              onClick={findTrip}
              className="mt-6  bg-black text-white px-6 py-2 rounded-lg font-semibold shadow-md hover:bg-gray-900 transition-colors duration-200"
            >
              Find trip
            </button>
        </div>

        {/* Search panel */}
        <div ref={panelRef} className='h-0 bg-white overflow-hidden'>
          <LocationSearchPanel
            vehiclePanel={vehiclePanel}
            setVehiclePanel={setVehiclePanel}
            setPanelOpen={setPanelOpen}
            setPickup={setPickup}
            setDestination={setDestination}
            activeField={activeField}
            suggestions={activeField === 'pickup' ? pickupSuggestions : destinationSuggestions}
          />
        </div>
      </div>

      {/* Sliding Panels with refs and initial translate-y-full */}
      <div
        ref={vehiclePanelRef}
        className='fixed w-full z-10 bottom-0 bg-white px-3 py-10 pt-12 translate-y-full'
      >
        <VehiclePanel setVehicleType={setVehicleType} fare={fare} setVehiclePanel={setVehiclePanel} setConfirmRidePanel={setConfirmRidePanel} />
      </div>

      <div
        ref={confirmRidePanelRef}
        className='fixed w-full z-10 bottom-0 bg-white px-3 py-6 pt-12 translate-y-full'
      >
        <ConfirmRide 
          // createRide = {createRide}
          pickup={pickup}
          destination={destination}
          fare = {fare}
          vehicleType ={vehicleType}
        setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound} />
      </div>

      <div
        ref={vehicleFoundRef}
        className='fixed w-full z-10 bottom-0 bg-white px-3 py-6 pt-12 translate-y-full'
      >
        <LookingForDriver 
         pickup={pickup}
         destination={destination}
         fare = {fare}
         vehicleType ={vehicleType}
        setVehicleFound={setVehicleFound} />
      </div>

      <div
        ref={waitingForDriverRef}
        className='fixed w-full z-10 bottom-0 bg-white px-3 py-6 pt-12 translate-y-full'
      >
        <WaitForDriver
        ride={ride}
        setVehicleFound = {setVehicleFound}
        setWaitingForDriver={setWaitingForDriver} />
      </div>
    </div>
  );
}

export default Home;
