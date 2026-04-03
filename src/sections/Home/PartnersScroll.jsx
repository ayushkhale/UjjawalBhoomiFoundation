import React from 'react'

const PartnersScroll = () => {

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


    return (
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

    )
}

export default PartnersScroll