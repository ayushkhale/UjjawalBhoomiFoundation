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
        <section className="py-14 sm:py-20 bg-white relative overflow-hidden z-0">
            <div className="absolute inset-0 opacity-5">
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-blue-900 rounded-full blur-3xl"></div>
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-orange-500 rounded-full blur-3xl"></div>
            </div>

            <div className="relative z-10">
                <div className="text-center mb-10 sm:mb-16 px-4 sm:px-6">
                    <div className="inline-block mb-4">
                        <span className="px-3 sm:px-4 py-2 bg-blue-900/10 border border-blue-900/30 rounded-full text-blue-900 text-xs sm:text-sm font-semibold tracking-wider uppercase">
                            Trusted Collaborations
                        </span>
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
                        <span className="text-orange-600">Our Partners</span>
                    </h2>
                    <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
                        Building a better tomorrow together with our trusted partners
                    </p>
                </div>

                <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
                    <div className="absolute top-0 left-0 right-0 h-20 sm:h-32 bg-gradient-to-b from-white to-transparent z-10 pointer-events-none"></div>
                    <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-32 bg-gradient-to-t from-white to-transparent z-10 pointer-events-none"></div>

                    <div className="h-[480px] sm:h-[600px] overflow-hidden">
                        <div className="animate-scroll-vertical space-y-4 sm:space-y-6">
                            {[...partners, ...partners].map((partner, index) => (
                                <div
                                    key={index}
                                    className="group relative bg-white rounded-xl sm:rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-gray-100 hover:border-orange-300 overflow-hidden"
                                >
                                    <div className="flex flex-row items-center gap-4 sm:gap-6 p-4 sm:p-6">
                                        <div className="flex-shrink-0">
                                            <div className="w-20 h-20 sm:w-32 sm:h-32 group-hover:scale-105 transition-transform duration-300">
                                                <img src={partner.logo} alt={partner.name} className="w-full h-full object-contain" />
                                            </div>
                                        </div>
                                        <div className="flex-1 text-left space-y-1 sm:space-y-3 min-w-0">
                                            <h3 className="text-base sm:text-xl font-bold text-blue-900 group-hover:text-orange-600 transition-colors duration-300 leading-tight">
                                                {partner.name}
                                            </h3>
                                            <p className="text-gray-600 text-xs sm:text-sm leading-relaxed line-clamp-2 sm:line-clamp-none">
                                                {partner.description}
                                            </p>
                                            <div className="flex items-center gap-2">
                                                <div className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></div>
                                                <span className="text-xs sm:text-sm font-medium text-orange-600 truncate">
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

                <div className="text-center mt-10 sm:mt-12 px-4">
                    <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-6 py-3 bg-gradient-to-r from-blue-900 to-blue-800 rounded-full shadow-lg">
                        <svg className="w-4 h-4 sm:w-5 sm:h-5 text-orange-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
                        </svg>
                        <span className="text-white font-medium text-sm sm:text-base text-left">
                            Wish to become a partner?{' '}
                            <a href="#contact" className="underline text-orange-400 hover:text-orange-500 transition-colors duration-300 whitespace-nowrap">
                                Join our Partner Program!
                            </a>
                        </span>
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes scroll-vertical {
          0% { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }
        .animate-scroll-vertical {
          animation: scroll-vertical 25s linear infinite;
        }
        @media (min-width: 640px) {
          .animate-scroll-vertical { animation-duration: 30s; }
        }
        .animate-scroll-vertical:hover {
          animation-play-state: paused;
        }
      `}</style>
        </section>
    )
}

export default PartnersScroll