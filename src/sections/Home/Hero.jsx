export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center text-center">

      <div className="max-w-3xl mx-auto gap-6 flex flex-col items-center justify-center">

        <div className="max-w-4xl mx-auto px-4 text-center text-white z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Together We Can Make a Difference
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Join us in our mission to create lasting change in communities around the world
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white rounded-full font-semibold text-lg transition-all duration-200 hover:scale-105">
              Donate Now
            </button>
            <button className="px-8 py-4 bg-white/20 backdrop-blur-sm hover:bg-white hover:text-gray-900 text-white border-2 border-white rounded-full font-semibold text-lg transition-all duration-200">
              Learn More
            </button>
          </div>
        </div>

      </div>
    </section>
  )
}