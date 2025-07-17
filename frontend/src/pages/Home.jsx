import React from 'react'
import uber_logo from '../assets/uber_logo.png';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <div className='bg-cover bg-center bg-[url("./assets/cover.jpeg")] h-screen flex justify-between flex-col w-full  pt-8'>
        <img className='w-16 ml-8' src={uber_logo}/>
        <div className='bg-white pb-7 py-4 px-4'>
            <h2 className='text-3xl font-bold'>Get started with Uber</h2>
            <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-4'>Continue</Link>
        </div>
      </div>
    </div>
  )
}

export default Home
