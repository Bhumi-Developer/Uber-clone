import { useState } from 'react'
import './App.css'
import { Routes,Route } from 'react-router-dom'
import Home from './pages/Home'
import UserLogin from './pages/UserLogin'
import UserSignUp from './pages/UserSignUp'
import CaptainLogin from './pages/CaptainLogin'
import CaptainSignUp from './pages/CaptainSignUp'
import Start from './pages/Start'
import UserProtectWrapper from './pages/UserProtectWrapper'
import UserLogout from './pages/UserLogout'

function App() {

  return (
    <>
     <div className=''>
      <Routes>
        <Route path='/' element={<Start />} />
        <Route path='/home' element={
          <UserProtectWrapper>
          <Home />
          </UserProtectWrapper> } />
          <Route path='/user/logout' element={
            <UserProtectWrapper>
            <UserLogout/>
            </UserProtectWrapper>
            } />
        <Route path='/login' element={<UserLogin />} />
        <Route path='/signup' element={<UserSignUp />} />
        <Route path='/captain-login' element={<CaptainLogin />} />
        <Route path='/captain-signup' element={<CaptainSignUp />} />
      </Routes>
     </div>
    </>
  )
}

export default App
