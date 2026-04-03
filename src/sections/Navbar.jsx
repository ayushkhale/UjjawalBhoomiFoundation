import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, ChevronDown } from 'lucide-react'
import namelogo from '../assets/namelogo.png'
import namelogo2 from '../assets/namelogo2.png'
import ubfLogo from '../assets/ubf-logo-Photoroom.png'

const navLinks = [
  { label: 'Home', href: '/', side: 'left' },
  { label: 'About', href: '/about', side: 'left' },
  { label: 'Events', href: '/events', side: 'left' },
  { label: 'Programs', href: '#', side: 'right' },
  { 
    label: 'Get Involved', 
    href: '/get-involved', 
    side: 'right',
    dropdown: [
      { label: 'Volunteer', href: '/get-involved#volunteer' },
      { label: 'Partner', href: '/get-involved#partner' },
      { label: 'Donate', href: '/get-involved#donate' },
      { label: 'Internship', href: '/get-involved#internship' },
    ]
  },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()
  
  // Set active based on current path
  const active = location.pathname.startsWith('/events') ? 'Events' :
                 location.pathname === '/about' ? 'About' : 
                 location.pathname === '/get-involved' ? 'Get Involved' : 'Home'

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
                <Link
                  key={label}
                  to={href}
                  className={getLinkClass(label)}
                >
                  {label}
                </Link>
              ))}
            </nav>
          </div>

          {/* CENTER — logo (always visible) */}
          <div className="flex justify-center flex-1 md:flex-1">
            <Link to="/" className="flex items-center gap-0 sm:gap-0.5 transition-transform hover:scale-105">
              <img
                src={ubfLogo}
                alt="UBF Icon"
                className="h-12 sm:h-14 object-contain"
              />
              <img
                src={scrolled ? namelogo2 : namelogo}
                alt="logo text"
                className="h-7 sm:h-14 object-contain"
              />
            </Link>
          </div>

          {/* RIGHT — desktop nav + CTA */}
          <div className="hidden md:flex items-center justify-end gap-6 flex-1">
            <nav className="flex items-center gap-6 font-medium">
              {navLinks.filter(l => l.side === 'right').map((link) => {
                if (link.dropdown) {
                  return (
                    <div key={link.label} className="relative group p-2 -m-2">
                      <Link
                        to={link.href}
                        className={`${getLinkClass(link.label)} flex items-center gap-1`}
                      >
                        {link.label} <ChevronDown size={16} />
                      </Link>
                      {/* Dropdown Menu */}
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-0 pt-2 w-48 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                        <div className="bg-white rounded-xl shadow-[0_10px_40px_rgba(0,0,0,0.1)] border border-gray-100 py-2 overflow-hidden">
                          {link.dropdown.map((item) => (
                            <Link
                              key={item.label}
                              to={item.href}
                              className="block px-5 py-3 text-sm font-bold text-gray-700 hover:bg-[#ffedd5] hover:text-[#EA681A] transition-colors"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  )
                }

                return (
                  <Link
                    key={link.label}
                    to={link.href}
                    className={getLinkClass(link.label)}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </nav>

            <Link
              to="/donate"
              className={`px-5 py-2 rounded-full font-semibold transition-all duration-200 ${
                scrolled
                  ? 'bg-blue-900 text-white hover:bg-blue-800 hover:scale-105 shadow-md'
                  : 'bg-white/20 text-white border border-white/40 hover:bg-white hover:text-blue-900 backdrop-blur-sm'
              }`}
            >
              Donate
            </Link>
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
              <Link
                key={label}
                to={href}
                onClick={() => setOpen(false)}
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
              </Link>
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