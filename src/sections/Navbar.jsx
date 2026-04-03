import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import namelogo from '../assets/namelogo.png'
import namelogo2 from '../assets/namelogo2.png'

const navLinks = [
  { label: 'Home', href: '#', side: 'left' },
  { label: 'About', href: '#', side: 'left' },
  { label: 'Events', href: '#', side: 'left' },
  { label: 'Programs', href: '#', side: 'right' },
  { label: 'Get Involved', href: '#', side: 'right' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('Home')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const getLinkClass = (label) => {
    const isActive = active === label

    if (scrolled) {
      if (isActive) return 'font-bold text-orange-500'
      return 'text-gray-700 hover:text-blue-600 hover:font-bold transition-all duration-200'
    } else {
      if (isActive) return 'font-bold text-white'
      return 'text-white/60 hover:text-white hover:font-bold transition-all duration-200'
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 w-full z-100 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">

        {/* LEFT */}
        <div className="hidden md:flex items-center gap-6 flex-1">
          <nav className="flex items-center gap-6 font-medium">
            {navLinks.filter(l => l.side === 'left').map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => setActive(label)}
                className={getLinkClass(label)}
              >
                {label}
              </a>
            ))}
          </nav>
        </div>

        {/* CENTER */}
        <div className="flex justify-center flex-1 mt-2">
          <img
            src={scrolled ? namelogo2 : namelogo}
            alt="logo"
            className="h-12 object-contain"
          />
        </div>

        {/* RIGHT */}
        <div className="hidden md:flex items-center justify-end gap-6 flex-1">
          <nav className="flex items-center gap-6 font-medium">
            {navLinks.filter(l => l.side === 'right').map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => setActive(label)}
                className={getLinkClass(label)}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <button
            className={`px-5 py-2 rounded-full font-semibold transition-all duration-200 ${
              scrolled
                ? 'bg-secondary text-white hover:scale-105'
                : 'bg-white/20 text-white border border-white/40 hover:bg-white hover:text-secondary'
            }`}
          >
            Donate
          </button>
        </div>

        {/* MOBILE BUTTON */}
        <button
          className={`md:hidden ${scrolled ? 'text-primary' : 'text-white'}`}
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-white px-6 py-6 space-y-4 shadow-md">
          {navLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              onClick={() => {
                setActive(label)
                setOpen(false)
              }}
              className={`block ${
                active === label
                  ? 'font-bold text-orange-500'
                  : 'text-gray-700 hover:text-blue-600'
              }`}
            >
              {label}
            </a>
          ))}

          <button className="w-full bg-secondary text-white py-3 rounded-full font-semibold">
            Donate
          </button>
        </div>
      )}
    </header>
  )
}