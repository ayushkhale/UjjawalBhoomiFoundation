import React from 'react'

const WhyUs = () => {
    return (
        <section className="py-20 bg-white">
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
    )
}

export default WhyUs