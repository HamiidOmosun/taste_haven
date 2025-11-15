import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Menu from './pages/Menu'
import About from './pages/About'
import Home from './pages/Home'
import Contact from './pages/Contact'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Reservations from './pages/Reservations'

const App = () => {
  return (
    <div className='overflow-hidden'>
      <ToastContainer />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/menu' element={<Menu/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/reservations' element={<Reservations/>}/>
      </Routes>
    </div>
  )
}

export default App
