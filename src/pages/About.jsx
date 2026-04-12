import React from 'react'
import aboutbg from '../assets/herobg4.jpg'
import Hero from '../sections/Home/Hero'

const About = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <div
        className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 `}
        style={{ backgroundImage: aboutbg }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Hero content */}
      <div className="relative z-10 h-full">
        <Hero />
      </div>
    </div>
  )
}

export default About