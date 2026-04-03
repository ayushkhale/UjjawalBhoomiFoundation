import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center pt-20 md:pt-0">

      <div className="max-w-3xl mx-auto gap-6 flex flex-col items-center justify-center">

        <div className="max-w-4xl mx-auto px-4 text-center text-white z-10">
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-4 sm:mb-6 leading-tight">
            Together We Can Make a Difference
          </h1>
          <p className="text-base sm:text-xl md:text-2xl mb-6 sm:mb-8 text-white/90 max-w-2xl mx-auto">
            Join us in our mission to create lasting change in communities around the world
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center w-full sm:w-auto">
            <Link to="/donate" className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-semibold text-base sm:text-lg transition-all duration-200 hover:scale-105 inline-block">
              Donate Now
            </Link>
            <Link to="/about" className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-white/20 backdrop-blur-sm hover:bg-white hover:text-gray-900 text-white border-2 border-white rounded-full font-semibold text-base sm:text-lg transition-all duration-200 inline-block">
              Learn More
            </Link>
          </div>
        </div>

      </div>
    </section>
  )
}