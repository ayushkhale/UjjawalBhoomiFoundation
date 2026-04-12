import React, { useEffect, useState } from 'react'
import Navbar from '../sections/Navbar'
import Hero from '../sections/Home/Hero'
import herobg1 from '../assets/herobg1.jpg'
import herobg2 from '../assets/herobg2.jpg'
import herobg4 from '../assets/herobg4.jpg'
import FlaotingDiv from '../sections/Home/FlaotingDiv'
import WhyUs from '../sections/Home/WhyUs'
import FounderMsg from '../sections/Home/FoundersMsg'
import PartnerScroll from '../sections/Home/PartnersScroll'
import GalleryScroll from '../sections/Home/GalleryScroll'
import GovtImages from '../sections/Home/GovtImages'
import Footer from '../sections/Footer'

const images = [herobg1, herobg2, herobg4]

const Home = () => {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full">
      {/* ── Hero section with background slideshow ── */}
      <div className="relative min-h-screen w-full overflow-hidden">
        {/* Background images */}
        {images.map((img, i) => (
          <div
            key={i}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              i === index ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${img})` }}
          />
        ))}

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/75" />

        {/* Hero content */}
        <div className="relative z-10 h-full">
          <Hero />
        </div>
      </div>

      {/* ── All sections below hero ── */}
      <FlaotingDiv />
      <WhyUs />
      <FounderMsg />
      <PartnerScroll />
      <GalleryScroll />
      <GovtImages />
    </div>
  )
}

export default Home