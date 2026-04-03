import React from 'react'
import logowide from '../assets/logowide.jpeg'

const Footer = () => {
  return (
    <footer className="bg-white text-blue-900 pt-14 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Grid: stacks to 2-col on sm, 4-col on lg */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Logo + About */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img
              src={logowide}
              alt="Ujjawal Bhoomi Foundation"
              className="w-36 sm:w-44 mb-4 rounded-2xl"
            />
            <p className="text-sm text-gray-500 leading-relaxed max-w-xs">
              Working towards a better tomorrow through community-driven programs and sustainable impact.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-bold mb-4 uppercase tracking-wider text-blue-900">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li><a href="#" className="hover:text-orange-600 hover:underline transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-orange-600 hover:underline transition-colors">Our Programs</a></li>
              <li><a href="#" className="hover:text-orange-600 hover:underline transition-colors">Get Involved</a></li>
            </ul>
          </div>

          {/* Join Us */}
          <div>
            <h3 className="text-base font-bold mb-4 uppercase tracking-wider text-blue-900">
              Join Us
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li><a href="/donate" className="hover:text-orange-600 hover:underline transition-colors">Make a Donation</a></li>
              <li><a href="/partner" className="hover:text-orange-600 hover:underline transition-colors">Become a Partner</a></li>
              <li><a href="/volunteer" className="hover:text-orange-600 hover:underline transition-colors">Become a Volunteer</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-base font-bold mb-4 uppercase tracking-wider text-blue-900">
              Contact Us
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="tel:+919424499188" className="hover:text-orange-600 hover:underline transition-colors">
                  +91 9424499188
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@ujjawalbhoomifoundation.in"
                  className="hover:text-orange-600 hover:underline transition-colors break-all"
                >
                  info@ujjawalbhoomifoundation.in
                </a>
              </li>
              <li>
                <a href="/contactus" className="hover:text-orange-600 hover:underline transition-colors">
                  Contact Page
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider + copyright */}
        <div className="border-t border-gray-200 pt-6">
          <p className="text-center text-gray-500 text-xs sm:text-sm">
            © 2026 Ujjawal Bhoomi Foundation. All rights reserved.
          </p>
        </div>

      </div>
    </footer>
  )
}

export default Footer