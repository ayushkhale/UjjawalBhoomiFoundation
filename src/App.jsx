import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Navbar from './sections/Navbar'
import Footer from './sections/Footer'
import About from './pages/About'
import GetInvolved from './pages/GetInvolved'
import Events from './pages/Events'
import EventDetail from './pages/EventDetail'
import Donate from './pages/Donate'

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/get-involved" element={<GetInvolved />} />
        <Route path="/events" element={<Events />} />
        <Route path="/events/:id" element={<EventDetail />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
    </>
  )
}

export default App