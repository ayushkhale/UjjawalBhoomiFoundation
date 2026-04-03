import React from 'react'
import Home from './pages/Home'
import Navbar from './sections/Navbar'
import Footer from './sections/Footer'
import About from './pages/About'

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <About />
    </>
  )
}

export default App