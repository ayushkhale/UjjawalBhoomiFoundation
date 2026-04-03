import React from 'react'
import pic1 from '../../assets/Home/pic1.jpg'
import pic2 from '../../assets/Home/pic2.jpg'
import pic3 from '../../assets/Home/pic3.jpg'
import pic4 from '../../assets/Home/pic4.jpg'
import pic5 from '../../assets/Home/pic5.jpg'
import pic6 from '../../assets/Home/pic6.jpg'
import pic7 from '../../assets/Home/pic7.jpeg'

const GalleryScroll = () => {

    const galleryImages = [
      { src: pic1, alt: "Plantation Drive with Former CM", size: "wide" },
      { src: pic3, alt: "Community Event", size: "wide" },
      { src: pic4, alt: "Plantation Drive Chorgari", size: "wide" },
      { src: pic5, alt: "Community Event", size: "wide" },
      { src: pic7, alt: "Community Event", size: "wide" },
      { src: pic2, alt: "Plantation Drive with Former CM", size: "wide" },
      { src: pic6, alt: "Community Event", size: "wide" },
    ];

    const row1Images = galleryImages.slice(0, 4);

    const ImageCard = ({ image, id }) => (
        <div
            key={id}
            className="flex-shrink-0 group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500
                       w-96 h-64 md:w-96 md:h-64
                       max-[767px]:w-full max-[767px]:h-56"
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
    );

    return (
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

                {/* ── DESKTOP: horizontal scroll row ── */}
                <div className="hidden md:block relative mb-6">
                    <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-blue-900 to-transparent z-10"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-blue-900 to-transparent z-10"></div>

                    <div className="overflow-hidden">
                        <div className="flex gap-6 animate-scroll-left">
                            {row1Images.map((image, index) => (
                                <ImageCard key={`row1-first-${index}`} image={image} />
                            ))}
                            {/* Duplicate for seamless loop */}
                            {row1Images.map((image, index) => (
                                <ImageCard key={`row1-second-${index}`} image={image} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* ── MOBILE: vertical scroll column ── */}
                <div className="md:hidden relative px-4" style={{ height: '480px' }}>
                    {/* Top fade */}
                    <div className="absolute left-0 right-0 top-0 h-16 bg-gradient-to-b from-blue-900 to-transparent z-10 pointer-events-none"></div>
                    {/* Bottom fade */}
                    <div className="absolute left-0 right-0 bottom-0 h-16 bg-gradient-to-t from-blue-900 to-transparent z-10 pointer-events-none"></div>

                    <div className="overflow-hidden h-full">
                        <div className="flex flex-col gap-4 animate-scroll-up">
                            {row1Images.map((image, index) => (
                                <ImageCard key={`mobile-first-${index}`} image={image} />
                            ))}
                            {/* Duplicate for seamless loop */}
                            {row1Images.map((image, index) => (
                                <ImageCard key={`mobile-second-${index}`} image={image} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
        @keyframes scroll-left {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes scroll-right {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        @keyframes scroll-up {
          0%   { transform: translateY(0); }
          100% { transform: translateY(-50%); }
        }

        .animate-scroll-left {
          animation: scroll-left 40s linear infinite;
        }

        .animate-scroll-right {
          animation: scroll-right 40s linear infinite;
        }

        .animate-scroll-up {
          animation: scroll-up 20s linear infinite;
        }

        .animate-scroll-left:hover,
        .animate-scroll-right:hover,
        .animate-scroll-up:hover {
          animation-play-state: paused;
        }
      `}</style>
        </section>
    );
};

export default GalleryScroll;