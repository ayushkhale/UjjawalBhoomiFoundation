import React from 'react'
import food from '../../assets/food.svg'
import school from '../../assets/school.svg'
import water from '../../assets/water.svg'
import tranvel from '../../assets/tranvel.svg'
import love from '../../assets/love.svg'
import medical from '../../assets/medical.svg'

const FlaotingDiv = () => {
    return (
        <div className="relative z-0 px-3 sm:px-6">
            <div className="max-w-7xl mx-auto bg-white rounded-sm shadow-2xl py-8 sm:py-12 px-4 sm:px-8">

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 divide-y sm:divide-y md:divide-y-0 md:divide-x">

                    <div className="text-center px-4 sm:px-6 py-6 sm:py-8">
                        <div className="text-4xl mb-4 flex justify-center items-center">
                            <img src={food} className="w-12 h-12 sm:w-14 sm:h-14" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-semibold mb-3 text-blue-900">Healthy Food</h3>
                        <p className="text-gray-600 mb-4 text-sm sm:text-base">
                            We distribute nutritious meals to families in need, helping fight hunger and ensuring better health for children and adults.
                        </p>
                    </div>

                    <div className="text-center px-4 sm:px-6 py-6 sm:py-8">
                        <div className="text-4xl mb-4 flex justify-center items-center">
                            <img src={school} className="w-12 h-12 sm:w-14 sm:h-14" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-semibold mb-3 text-blue-900">Education</h3>
                        <p className="text-gray-600 mb-4 text-sm sm:text-base">
                            We support education through school supplies, scholarships, and learning programs to help children build a brighter future.
                        </p>
                    </div>

                    <div className="text-center px-4 sm:px-6 py-6 sm:py-8 sm:col-span-2 md:col-span-1">
                        <div className="text-4xl mb-4 flex justify-center items-center">
                            <img src={medical} className="w-12 h-12 sm:w-14 sm:h-14" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-semibold mb-3 text-blue-900">Medical</h3>
                        <p className="text-gray-600 mb-4 text-sm sm:text-base">
                            We organize medical camps and provide essential healthcare services to communities with limited access to proper treatment.
                        </p>
                    </div>

                    <div className="text-center px-4 sm:px-6 py-6 sm:py-8 border-t">
                        <div className="text-4xl mb-4 flex justify-center items-center">
                            <img src={water} className="w-12 h-12 sm:w-14 sm:h-14" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-semibold mb-3 text-blue-900">Pure Water</h3>
                        <p className="text-gray-600 mb-4 text-sm sm:text-base">
                            We work to provide clean drinking water and sanitation facilities to prevent water-borne diseases in rural areas.
                        </p>
                    </div>

                    <div className="text-center px-4 sm:px-6 py-6 sm:py-8 border-t">
                        <div className="text-4xl mb-4 flex justify-center items-center">
                            <img src={love} className="w-12 h-12 sm:w-14 sm:h-14" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-semibold mb-3 text-blue-900">Love & Care</h3>
                        <p className="text-gray-600 mb-4 text-sm sm:text-base">
                            We support orphans, elderly, and vulnerable individuals with care, compassion, and emotional support.
                        </p>
                    </div>

                    <div className="text-center px-4 sm:px-6 py-6 sm:py-8 border-t">
                        <div className="text-4xl mb-4 flex justify-center items-center">
                            <img src={tranvel} className="w-12 h-12 sm:w-14 sm:h-14" />
                        </div>
                        <h3 className="text-lg sm:text-xl font-semibold mb-3 text-blue-900">Travel Activities</h3>
                        <p className="text-gray-600 mb-4 text-sm sm:text-base">
                            Our volunteers travel to remote areas to conduct outreach programs and deliver help where it is needed the most.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default FlaotingDiv