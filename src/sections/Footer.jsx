import React from 'react'
import logowide from '../assets/logowide.jpeg'

const Footer = () => {
    return (
        <footer className="bg-white text-blue-900 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4">

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

                    {/* Logo + About */}
                    <div>
                        <img
                            src={logowide}
                            alt="Ujjawal Bhoomi Foundation"
                            className="w-40 mb-4 rounded-2xl"
                        />
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="#" className="hover:underline hover:text-orange-600 ">About Us</a></li>
                            <li><a href="#" className="hover:underline hover:text-orange-600 ">Our Programs</a></li>
                            <li><a href="#" className="hover:underline hover:text-orange-600 ">Get Involved</a></li>
                        </ul>
                    </div>

                    {/* Join Us */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Join Us</h3>
                        <ul className="space-y-2">
                            <li><a href="/donate" className="hover:underline hover:text-orange-600 ">Make a Donation</a></li>
                            <li><a href="/partner" className="hover:underline hover:text-orange-600 ">Become a Partner</a></li>
                            <li><a href="/volunteer" className="hover:underline hover:text-orange-600 ">Become a Volunteer</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="tel:+919424499188" className="hover:underline">
                                    +91 9424499188
                                </a>
                            </li>
                            <li>
                                <a href="mailto:info@ujjawalbhoomifoundation.in" className="hover:underline">
                                    info@ujjawalbhoomifoundation.in
                                </a>
                            </li>
                            <li>
                                <a href="/contactus" className="hover:underline">
                                    Contact Page
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Divider */}
                <div className="border-t border-gray-300 pt-6">
                    {/* Bottom Text */}
                    <p className="text-center text-gray-600 text-sm">
                        © 2026 Ujjawal Bhoomi Foundation. All rights reserved.
                    </p>

                </div>

            </div>
        </footer>
    )
}

export default Footer