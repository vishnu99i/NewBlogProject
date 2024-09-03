import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import './App.css'
import authService from "./appwrite/auth"
import {login, logout} from "./store/authSlice"
import { Footer, Header } from './components'
import { Outlet } from 'react-router-dom'

function App() {
  const [loading, setLoading] = useState(true); //For conditional rendering
  const dispatch = useDispatch()

  useEffect(() => {
    authService.getCurrentUser()
    .then((userData) => {
      if (userData) {
        dispatch(login({userData}))
      } else {
        dispatch(logout())
      }
    })
    .finally(() => setLoading(false))
  }, [])
  
  return !loading ? (
    <div className='min-h-screen flex flex-wrap content-between text-slate-100 bg-slate-900'>
      <div className='w-full block'>
        <Header />
        <main>
        {/* Outlet comes from react router dom */}
        {/* Post Garage   */}
        {/* <p className='font-extrabold'>Post Garage</p> */}
        <Outlet /> 
        </main>
        <Footer />
      </div>
    </div>
  ) : null
}

export default App