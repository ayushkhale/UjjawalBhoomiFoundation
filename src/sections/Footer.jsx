import React from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Mail, Phone, ChevronRight, ExternalLink } from 'lucide-react'
import ubfLogo from '../assets/ubf-logo-Photoroom.png'
import namelogo2 from '../assets/namelogo2.png'

const Footer = () => {
    return (
        <footer className="bg-[#fafafa] border-t border-gray-200 pt-24 pb-12 font-sans overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-20">
                    
                    {/* Column 1: Master Branding & Contact */}
                    <div className="lg:col-span-4 space-y-10">
                        <div className="flex flex-col gap-6">
                            <Link to="/" className="inline-flex items-center gap-4 group">
                                <div className="p-2 bg-white rounded-2xl shadow-sm border border-gray-100 group-hover:shadow-md transition-all">
                                    <img src={ubfLogo} alt="UBF Icon" className="h-16 w-auto object-contain" />
                                </div>
                                <img src={namelogo2} alt="UBF Title" className="h-10 w-auto object-contain" />
                            </Link>
                            <p className="text-gray-500 text-lg leading-relaxed font-medium">
                                Innovation for Change: Empowering India through sustainable social impact.
                            </p>
                        </div>

                        {/* Full Contact Info Section */}
                        <div className="space-y-4 pt-4 border-t border-gray-100">
                           <a href="tel:+919424499188" className="flex items-center gap-4 group">
                               <div className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-gray-400 group-hover:text-[#EA681A] transition-all">
                                   <Phone size={18} />
                               </div>
                               <div className="flex flex-col">
                                   <span className="text-[10px] font-black uppercase text-gray-400">Call Us</span>
                                   <span className="text-gray-700 font-bold">+91 9424499188</span>
                               </div>
                           </a>
                           <a href="mailto:info@ujjawalbhoomifoundation.in" className="flex items-center gap-4 group">
                               <div className="w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-gray-400 group-hover:text-[#EA681A] transition-all">
                                   <Mail size={18} />
                               </div>
                               <div className="flex flex-col">
                                   <span className="text-[10px] font-black uppercase text-gray-400">Mail Us</span>
                                   <span className="text-gray-700 font-bold">info@ujjawalbhoomifoundation.in</span>
                               </div>
                           </a>
                        </div>

                        <div className="flex gap-4">
                            {['FB', 'IG', 'TW', 'LI'].map((social) => (
                                <a 
                                    key={social} 
                                    href="#" 
                                    className="w-11 h-11 rounded-xl bg-white border border-gray-200 flex items-center justify-center text-[#113E7C] text-xs font-black hover:bg-[#113E7C] hover:text-white transition-all shadow-sm"
                                >
                                    {social}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Column 2: Navigation Groups */}
                    <div className="lg:col-span-4 grid grid-cols-2 gap-8 pt-4">
                        <div>
                            <h4 className="text-[#113E7C] font-black text-sm uppercase tracking-[3px] mb-8 relative inline-block">
                                Navigation
                                <span className="absolute -bottom-2 left-0 w-8 h-1 bg-[#EA681A] rounded-full"></span>
                            </h4>
                            <ul className="space-y-4">
                                {['About', 'Events', 'Mission'].map((link) => (
                                    <li key={link}>
                                        <Link 
                                            to={link === 'About' ? '/about' : link === 'Events' ? '/events' : '/get-involved'} 
                                            className="text-gray-600 hover:text-[#EA681A] font-bold text-base flex items-center gap-2 group transition-colors"
                                        >
                                            <ChevronRight size={16} className="text-gray-300 group-hover:text-[#EA681A]" />
                                            {link}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div>
                            <h4 className="text-[#113E7C] font-black text-sm uppercase tracking-[3px] mb-8 relative inline-block">
                                Support
                                <span className="absolute -bottom-2 left-0 w-8 h-1 bg-[#EA681A] rounded-full"></span>
                            </h4>
                            <ul className="space-y-4">
                                {['Donate', 'Volunteer', 'Partner'].map((link) => (
                                    <li key={link}>
                                        <Link 
                                            to={link === 'Donate' ? '/donate' : '/get-involved'} 
                                            className="text-gray-600 hover:text-[#EA681A] font-bold text-base flex items-center gap-2 group transition-colors"
                                        >
                                            <ChevronRight size={16} className="text-gray-300 group-hover:text-[#EA681A]" />
                                            {link}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Column 3: Expansive Map */}
                    <div className="lg:col-span-4 flex flex-col pt-4">
                        <div className="flex items-center justify-between mb-8">
                            <h4 className="text-[#113E7C] font-black text-sm uppercase tracking-[3px] relative inline-block">
                                Our Location
                                <span className="absolute -bottom-2 left-0 w-8 h-1 bg-[#EA681A] rounded-full"></span>
                            </h4>
                            <span className="text-[10px] font-black text-gray-400 flex items-center gap-1">
                                <MapPin size={12} className="text-[#EA681A]" /> BHOPAL, INDIA
                            </span>
                        </div>
                        <div className="relative flex-1 min-h-[320px] rounded-[40px] overflow-hidden border-8 border-white shadow-2xl group transition-all hover:scale-[1.01]">
                            <iframe 
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14663.15573489816!2d77.410656!3d23.259933!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x397c42edf4287e0b%3A0xc3b8a1c97a7a7a7a!2sBhopal%2C%20Madhya%20Pradesh!5e0!3m2!1sen!2sin!4v1712123456789!5m2!1sen!2sin"
                                width="100%" height="100%" style={{ border: 0 }} allowFullScreen loading="lazy"
                                className="transition-all duration-500"
                            ></iframe>
                        </div>
                    </div>
                </div>

                <div className="pt-12 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-8">
                    <p className="text-gray-400 text-xs font-black uppercase tracking-[4px]">
                        &copy; {new Date().getFullYear()} Ujjawal Bhoomi Foundation
                    </p>
                    <div className="flex gap-10">
                        {['Privacy', 'Policies', 'Admin'].map(t => (
                            <Link key={t} to="#" className="text-gray-400 hover:text-[#113E7C] text-[10px] font-black uppercase tracking-widest">{t}</Link>
                        ))}
                    </div>
                </div>

            </div>
        </footer>
    )
}

export default Footer
