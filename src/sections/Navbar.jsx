import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import namelogo from '../assets/namelogo.png'
import namelogo2 from '../assets/namelogo2.png'

const navLinks = [
  { label: 'Home', href: '/', side: 'left' },
  { label: 'About', href: '/about', side: 'left' },
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

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const getLinkClass = (label) => {
    const isActive = active === label
    if (scrolled) {
      return isActive
        ? 'font-bold text-orange-500'
        : 'text-gray-700 hover:text-blue-600 hover:font-bold transition-all duration-200'
    }
    return isActive
      ? 'font-bold text-white'
      : 'text-white/60 hover:text-white hover:font-bold transition-all duration-200'
  }

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between">

          {/* LEFT — desktop nav */}
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

          {/* CENTER — logo (always visible) */}
          <div className="flex justify-center flex-1 md:flex-1">
            <img
              src={scrolled ? namelogo2 : namelogo}
              alt="logo"
              className="h-10 sm:h-12 object-contain"
            />
          </div>

          {/* RIGHT — desktop nav + CTA */}
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

          {/* MOBILE — hamburger button */}
          <button
            className={`md:hidden p-1 rounded-md transition-colors ${
              scrolled ? 'text-blue-900' : 'text-white'
            }`}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </header>

      {/* MOBILE MENU — full-screen overlay */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />

        {/* Drawer sliding in from top */}
        <div
          className={`absolute top-0 left-0 right-0 bg-white shadow-xl transition-transform duration-300 ${
            open ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          {/* Header row inside drawer */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
            <img src={namelogo2} alt="logo" className="h-10 object-contain" />
            <button
              onClick={() => setOpen(false)}
              className="text-gray-500 hover:text-blue-900 transition-colors"
              aria-label="Close menu"
            >
              <X size={24} />
            </button>
          </div>

          {/* Nav links */}
          <nav className="px-6 py-4 space-y-1">
            {navLinks.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                onClick={() => { setActive(label); setOpen(false) }}
                className={`flex items-center gap-3 px-3 py-3 rounded-xl text-base font-medium transition-all duration-200 ${
                  active === label
                    ? 'bg-orange-50 text-orange-500 font-bold'
                    : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'
                }`}
              >
                {active === label && (
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0" />
                )}
                {label}
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="px-6 pb-6 pt-2">
            <button className="w-full bg-blue-900 text-white py-3.5 rounded-full font-semibold text-base tracking-wide hover:bg-blue-800 transition-colors">
              Donate
            </button>
          </div>
        </div>
      </div>
    </>
  )
}