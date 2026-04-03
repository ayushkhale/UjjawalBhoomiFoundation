import { useState } from 'react'
import { Heart, Users, Globe, TrendingUp, Play, ChevronRight, MapPin, Mail, Phone } from 'lucide-react'
import signature from '../assets/foundersignature.png'
import logowide from '../assets/logowide.jpeg'
import GovtImages from '../sections/Home/GovtImages'
import pic1 from '../assets/Home/pic1.jpg'
import pic2 from '../assets/Home/pic2.jpg'
import pic3 from '../assets/Home/pic3.jpg'
import pic4 from '../assets/Home/pic4.jpg'
import pic5 from '../assets/Home/pic5.jpg'
import pic6 from '../assets/Home/pic6.jpg'
import pic7 from '../assets/Home/pic7.jpeg'

// Mock data for causes
const causes = [
  {
    id: 1,
    title: 'Clean Water Initiative',
    description: 'Providing clean drinking water to communities in need across rural areas.',
    image: 'https://images.unsplash.com/photo-1541544537156-7627a0a4ec58?w=800&h=600&fit=crop',
    raised: 45000,
    goal: 60000,
    category: 'Water'
  },
  {
    id: 2,
    title: 'Education for All',
    description: 'Building schools and providing educational resources to underprivileged children.',
    image: 'https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=800&h=600&fit=crop',
    raised: 72000,
    goal: 90000,
    category: 'Education'
  },
  {
    id: 3,
    title: 'Healthcare Access',
    description: 'Mobile medical clinics bringing healthcare services to remote villages.',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&h=600&fit=crop',
    raised: 38000,
    goal: 50000,
    category: 'Health'
  }
]

const galleryImages = [
  { src: pic1, alt: "Plantation Drive with Former CM ", size: "wide" },
  { src: pic3, alt: "Community Event", size: "wide" },
  { src: pic4, alt: "Plantation Drive Chorgari", size: "wide" },
  { src: pic5, alt: "Community Event", size: "wide" },
  { src: pic7, alt: "Community Event", size: "wide" },
  { src: pic2, alt: "Plantation Drive with Former CM", size: "wide" },
  { src: pic6, alt: "Community Event", size: "wide" },
];

const partners = [
  {
    logo: "https://i.ibb.co/n3HN52g/sangmitra.jpg",
    name: "Sangmitra Trust",
    description: "Building stronger communities through social welfare and empowerment programs.",
    collaboration: "Community Development"
  },
  {
    logo: "https://i.ibb.co/gT3Pj7k/parivartak-support.jpg",
    name: "Parivartak Support Foundation",
    description: "Dedicated to creating positive change through education and awareness initiatives.",
    collaboration: "Awareness & Training"
  },
  {
    logo: "https://i.ibb.co/DwqCm3K/Screenshot-2024-10-16-132912.png",
    name: "Deep Photography",
    description: "Capturing moments that matter and documenting our journey of transformation.",
    collaboration: "Media & Documentation"
  },
  {
    logo: "https://i.postimg.cc/9FGZ1ddN/IMG-20240907-WA0001.jpg",
    name: "Dakshi Foundation",
    description: "Collaborative network fostering sustainable solutions for community development.",
    collaboration: "Strategic Partnership"
  },
];

// Mock data for projects
const projects = [
  {
    id: 1,
    title: 'Community Garden Project',
    location: 'Kenya',
    image: 'https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=800&h=600&fit=crop',
    impact: '500 families fed'
  },
  {
    id: 2,
    title: 'Solar Power Installation',
    location: 'India',
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&h=600&fit=crop',
    impact: '1,200 homes powered'
  },
  {
    id: 3,
    title: 'Girls Education Program',
    location: 'Bangladesh',
    image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&h=600&fit=crop',
    impact: '800 girls enrolled'
  },
  {
    id: 4,
    title: 'Medical Outreach',
    location: 'Uganda',
    image: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&h=600&fit=crop',
    impact: '2,000 patients treated'
  }
]

// Mock testimonials
const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'Volunteer Coordinator',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
    text: 'Being part of this organization has changed my life. Seeing the direct impact of our work on communities is incredibly rewarding.'
  },
  {
    id: 2, 
    name: 'Michael Chen',
    role: 'Donor',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
    text: 'The transparency and dedication of this charity is unmatched. I know exactly where my donations are going and the lives being changed.'
  },
  {
    id: 3,
    name: 'Amara Okafor',
    role: 'Community Beneficiary',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
    text: 'Thanks to this organization, my children now have access to clean water and education. Our village has been transformed.'
  }
]

function Test() {
  const [activeTestimonial, setActiveTestimonial] = useState(0)

  return (
    <div className="min-h-screen bg-white">

      <section className="py-20 bg-white mt-125">
        <div className="max-w-7xl mx-auto px-4">

          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-blue-900 mb-4">
              Why Choose
              <span className="block text-orange-500 to-blue-600">
                Ujjawal Bhoomi Foundation?
              </span>
            </h2>

            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              What sets us apart in creating meaningful, sustainable change
            </p>
          </div>

          <div className="grid gap-8">

            <p className="text-2xl text-gray-800 mx-auto">
              Ujjawal Bhoomi Foundation is dedicated to transforming lives by working closely with underserved communities at the grassroots level. Our approach focuses on creating real, long-term impact through initiatives in education, healthcare, and sustainable development.
            </p>

            <p className="text-2xl text-gray-800 mx-auto">
              Unlike many organizations, we believe in direct involvement and transparency. Every effort we make is driven by a deep understanding of community needs, ensuring that support reaches the right people at the right time.
            </p>

            <p className="text-2xl text-gray-800 mx-auto">
              Our programs are designed not just to provide immediate relief, but to build self-reliance and confidence among individuals. From helping children access quality education to organizing health camps and awareness drives, we aim to create lasting change.
            </p>

          </div>
        </div>
      </section>

      <section className="py-24 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 relative overflow-hidden z-0">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">

            {/* Founder Image with Premium Frame */}
            <div className="flex-shrink-0 relative group">
              {/* Decorative Corner Elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-4 border-l-4 border-orange-500"></div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-4 border-r-4 border-orange-500"></div>

              {/* Image Container with Premium Border */}
              <div className="relative p-2 bg-gradient-to-br from-orange-500 via-orange-400 to-yellow-500 rounded-lg shadow-2xl">
                <div className="relative overflow-hidden rounded-md">
                  <img src="https://i.ibb.co/t1HJjJ8/8faa1087-94b4-4b9e-9ee0-aafa2d031cb2-2.png"
                    alt="MANISH TAMRAKAR - Founder & Director"
                    className="w-72 h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
                </div>
              </div>
            </div>

            {/* Content Section */}
            <div className="flex-1 text-center lg:text-left space-y-6">

              {/* Main Heading */}
              <h2 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
                A Message from
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
                  Our Founder
                </span>
              </h2>

              {/* Main Quote/Message */}
              <div className="space-y-5 text-lg text-gray-200 leading-relaxed">
                <p>
                  "At <span className="text-orange-400 font-semibold">Ujjawal Bhoomi Foundation</span>,
                  we believe that real transformation begins from within—not just within individuals,
                  but within entire communities. Our mission goes far beyond temporary relief; we are
                  dedicated to creating sustainable, lasting change that empowers every person to reach
                  their full potential."
                </p>
                {/* 
                <p>
                  "Every child deserves quality education. Every family deserves dignity and opportunity.
                  Every community deserves a voice. These aren't just ideals—they are the principles that
                  guide everything we do, every single day."
                </p> */}

                <p className="text-xl text-orange-300 font-medium italic border-l-4 border-orange-500 pl-6 py-2">
                  "Together, we are not just creating programs—we are building legacies.
                  We are not just helping people—we are shaping a brighter, more equitable tomorrow
                  for generations to come."
                </p>
              </div>

              {/* Signature Section */}

              <div className="pt-8 space-y-3">

                {/* <img src={signature} alt="Founder's Signature" width={150} /> */}

                <div className="space-y-1">
                  <p className="text-xl font-bold text-white">
                    MANISH TAMRAKAR
                  </p>
                  <p className="text-orange-400 font-semibold tracking-wide">
                    Founder & Director
                  </p>
                  <p className="text-gray-400 text-sm">
                    Ujjawal Bhoomi Foundation
                  </p>
                </div>

                {/* Decorative Line */}
                <div className="pt-4">
                  <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-transparent"></div>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Bottom Decorative Wave */}
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/5 to-transparent"></div>
      </section>


      {/* Partner section  */}
      <section className="py-20 bg-white relative overflow-hidden z-0">
        {/* Decorative Background */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-900 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-16 px-6">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-blue-900/10 border border-blue-900/30 rounded-full text-blue-900 text-sm font-semibold tracking-wider uppercase">
                Trusted Collaborations
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-orange-600">Our Partners</span>
            </h2>

            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Building a better tomorrow together with our trusted partners
            </p>
          </div>

          {/* Vertical Infinite Scrolling Container */}
          <div className="relative max-w-4xl mx-auto px-6">
            {/* Top Gradient Fade */}
            <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none"></div>

            {/* Bottom Gradient Fade */}
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none"></div>

            {/* Scrolling Track */}
            <div className="h-[600px] overflow-hidden">
              <div className="animate-scroll-vertical space-y-6">

                {/* First Set of Cards */}
                {partners.map((partner, index) => (
                  <div
                    key={`first-${index}`}
                    className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-orange-300 overflow-hidden"
                  >
                    {/* Decorative Corner */}


                    <div className="flex flex-col sm:flex-row items-center gap-6 p-6">
                      {/* Left: Logo/Image */}
                      <div className="flex-shrink-0">
                        <div className="relative w-32 h-32   group-hover:scale-105 transition-transform duration-300">
                          <img
                            src={partner.logo}
                            alt={partner.name}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>

                      {/* Right: Info */}
                      <div className="flex-1 text-center sm:text-left space-y-3">
                        <h3 className="text-xl font-bold text-blue-900 group-hover:text-orange-600 transition-colors duration-300">
                          {partner.name}
                        </h3>

                        <p className="text-gray-600 text-sm leading-relaxed">
                          {partner.description}
                        </p>

                        <div className="flex items-center justify-center sm:justify-start gap-2">
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                          <span className="text-sm font-medium text-orange-600">
                            {partner.collaboration}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Duplicate Set for Seamless Loop */}
                {partners.map((partner, index) => (
                  <div
                    key={`second-${index}`}
                    className="group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-orange-300 overflow-hidden"
                  >


                    <div className="flex flex-col sm:flex-row items-center gap-6 p-6">
                      <div className="flex-shrink-0">
                        <div className="relative w-32 h-32   group-hover:scale-105 transition-transform duration-300">
                          <img
                            src={partner.logo}
                            alt={partner.name}
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>

                      <div className="flex-1 text-center sm:text-left space-y-3">
                        <h3 className="text-xl font-bold text-blue-900 group-hover:text-orange-600 transition-colors duration-300">
                          {partner.name}
                        </h3>

                        <p className="text-gray-600 text-sm leading-relaxed">
                          {partner.description}
                        </p>

                        <div className="flex items-center justify-center sm:justify-start gap-2">
                          <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                          <span className="text-sm font-medium text-orange-600">
                            {partner.collaboration}
                          </span>
                        </div>
                      </div>
                    </div>

                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Stats */}
          <div className="text-center mt-12">
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-900 to-blue-800 rounded-full shadow-lg">
              <svg className="w-5 h-5 text-orange-400" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
              </svg>
              <span className="text-white font-medium">
                Wish To Become a Partner ? <a href="#contact" className="underline text-orange-400 hover:text-orange-500 transition-colors duration-300">Join Our Partner Program!</a>
              </span>
            </div>
          </div>
        </div>

        <style jsx>{`
        @keyframes scroll-vertical {
          0% {
            transform: translateY(0);
          }
          100% {
            transform: translateY(-50%);
          }
        }

        .animate-scroll-vertical {
          animation: scroll-vertical 30s linear infinite;
        }

        .animate-scroll-vertical:hover {
          animation-play-state: paused;
        }
      `}</style>
      </section>

      {/* gallery  */}
      <section className="py-20 bg-blue-900 relative overflow-hidden z-0">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-1/3 w-96 h-96 bg-blue-900 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10">
          {/* Header */}
          <div className="text-center mb-16 px-6">
            <div className="inline-block mb-4">
              <span className="px-4 py-2 bg-white-500/10 border border-white-500/30 rounded-full text-white text-sm font-semibold tracking-wider uppercase">
                Our Impact
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
              <span className="text-white">Moments of</span>
              <span className="block text-orange-400">
                Contributions
              </span>
            </h2>

            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Witness the transformation we create together in communities
            </p>
          </div>

          {/* Infinite Scrolling Gallery - Row 1 */}
          <div className="relative mb-6">
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-blue-900 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-blue-900 to-transparent z-10"></div>

            <div className="overflow-hidden">
              <div className="flex gap-6 animate-scroll-left">
                {/* First set */}
                {galleryImages.slice(0, 4).map((image, index) => (
                  <div
                    key={`row1-first-${index}`}
                    className={`flex-shrink-0 group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500
                    ${image.size === 'tall' ? 'w-64 h-96' : image.size === 'wide' ? 'w-96 h-64' : 'w-80 h-80'}
                  `}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <p className="text-white font-semibold text-lg">{image.alt}</p>
                        <div className="w-16 h-1 bg-orange-500 mt-2"></div>
                      </div>
                    </div>

                    {/* Corner Accent */}
                    <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-orange-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}

                {/* Duplicate set for seamless loop */}
                {galleryImages.slice(0, 4).map((image, index) => (
                  <div
                    key={`row1-second-${index}`}
                    className={`flex-shrink-0 group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500
                    ${image.size === 'tall' ? 'w-64 h-96' : image.size === 'wide' ? 'w-96 h-64' : 'w-80 h-80'}
                  `}
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <p className="text-white font-semibold text-lg">{image.alt}</p>
                        <div className="w-16 h-1 bg-orange-500 mt-2"></div>
                      </div>
                    </div>

                    <div className="absolute top-0 right-0 w-12 h-12 bg-gradient-to-br from-orange-500/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <style jsx>{`
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scroll-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 40s linear infinite;
        }

        .animate-scroll-left:hover,
        .animate-scroll-right:hover {
          animation-play-state: paused;
        }
      `}</style>
      </section>

      {/* VOLUNTEER SECTION
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Become a Volunteer
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Join our community of dedicated volunteers making a real difference. Whether you have a few hours a month or can commit long-term, there's a place for you in our mission.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Heart className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Make an Impact</h3>
                    <p className="text-gray-600">Directly contribute to changing lives in your community and beyond</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-orange-500" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Join a Community</h3>
                    <p className="text-gray-600">Connect with like-minded individuals passionate about making a difference</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Grow & Learn</h3>
                    <p className="text-gray-600">Develop new skills and gain valuable experience while helping others</p>
                  </div>
                </div>
              </div>

              <button className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold text-lg transition-colors duration-200">
                Join as Volunteer
              </button>
            </div>

            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=800&h=1000&fit=crop"
                alt="Volunteers"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-orange-500 text-white p-8 rounded-xl shadow-xl">
                <div className="text-4xl font-bold mb-2">5,000+</div>
                <div className="text-lg">Active Volunteers</div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <GovtImages />

      {/* FOOTER */}
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
    </div>
  )
}

export default Test