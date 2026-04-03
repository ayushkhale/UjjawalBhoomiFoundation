import React from 'react'

const FoundersMsg = () => {
    return (
        <section className="py-16 sm:py-24 bg-gradient-to-br from-blue-950 via-blue-900 to-blue-950 relative overflow-hidden z-0">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-10 sm:gap-16">

                    {/* Founder Image with Premium Frame */}
                    <div className="flex-shrink-0 relative group">
                        {/* Decorative Corner Elements */}
                        <div className="absolute -top-3 -left-3 sm:-top-4 sm:-left-4 w-16 h-16 sm:w-24 sm:h-24 border-t-4 border-l-4 border-orange-500"></div>
                        <div className="absolute -bottom-3 -right-3 sm:-bottom-4 sm:-right-4 w-16 h-16 sm:w-24 sm:h-24 border-b-4 border-r-4 border-orange-500"></div>

                        {/* Image Container with Premium Border */}
                        <div className="relative p-2 bg-gradient-to-br from-orange-500 via-orange-400 to-yellow-500 rounded-lg shadow-2xl">
                            <div className="relative overflow-hidden rounded-md">
                                <img
                                    src="https://i.ibb.co/t1HJjJ8/8faa1087-94b4-4b9e-9ee0-aafa2d031cb2-2.png"
                                    alt="MANISH TAMRAKAR - Founder & Director"
                                    className="w-56 h-72 sm:w-72 sm:h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                                />
                                {/* Overlay Gradient */}
                                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent"></div>
                            </div>
                        </div>
                    </div>

                    {/* Content Section */}
                    <div className="flex-1 text-center lg:text-left space-y-5 sm:space-y-6">

                        {/* Main Heading */}
                        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                            A Message from
                            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-400">
                                Our Founder
                            </span>
                        </h2>

                        {/* Main Quote/Message */}
                        <div className="space-y-4 sm:space-y-5 text-base sm:text-lg text-gray-200 leading-relaxed">
                            <p>
                                "At <span className="text-orange-400 font-semibold">Ujjawal Bhoomi Foundation</span>,
                                we believe that real transformation begins from within—not just within individuals,
                                but within entire communities. Our mission goes far beyond temporary relief; we are
                                dedicated to creating sustainable, lasting change that empowers every person to reach
                                their full potential."
                            </p>

                            <p className="text-lg sm:text-xl text-orange-300 font-medium italic border-l-4 border-orange-500 pl-4 sm:pl-6 py-2">
                                "Together, we are not just creating programs—we are building legacies.
                                We are not just helping people—we are shaping a brighter, more equitable tomorrow
                                for generations to come."
                            </p>
                        </div>

                        {/* Signature Section */}
                        <div className="pt-6 sm:pt-8 space-y-3">
                            <div className="space-y-1">
                                <p className="text-lg sm:text-xl font-bold text-white">
                                    MANISH TAMRAKAR
                                </p>
                                <p className="text-orange-400 font-semibold tracking-wide text-sm sm:text-base">
                                    Founder & Director
                                </p>
                                <p className="text-gray-400 text-xs sm:text-sm">
                                    Ujjawal Bhoomi Foundation
                                </p>
                            </div>

                            {/* Decorative Line */}
                            <div className="pt-4">
                                <div className="w-32 h-1 bg-gradient-to-r from-orange-500 to-transparent mx-auto lg:mx-0"></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* Bottom Decorative Wave */}
            <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white/5 to-transparent"></div>
        </section>
    )
}

export default FoundersMsg