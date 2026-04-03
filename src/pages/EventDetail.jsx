import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { MapPin, Calendar, User, AlignLeft, Hash } from 'lucide-react';
import { eventsData } from '../data/eventsData';
import './Events.css';
import Footer from '../sections/Footer';

export default function EventDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const event = eventsData.find((e) => e.id === id);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!event) {
    return (
      <div className="events-wrapper flex flex-col items-center justify-center min-h-[60vh] text-center">
        <h1 className="text-4xl font-bold text-[#113E7C] mb-4">Event Not Found</h1>
        <p className="text-gray-500 mb-8">The event you are looking for does not exist or has been removed.</p>
        <button onClick={() => navigate('/events')} className="ev-btn-back">
          Back to Events
        </button>
      </div>
    );
  }

  // Use the first image as cover, or fallback to the thumb
  const coverImage = event.images && event.images.length > 0 ? event.images[0] : event.thumb;

  // Convert newlines to paragraphs for description
  const renderDescription = () => {
    return event.description.split('\n').map((paragraph, idx) => {
      if (paragraph.trim() === '') return null;
      return <p key={idx} className="mb-6">{paragraph}</p>;
    });
  };

  return (
    <div className="events-wrapper bg-gray-50 font-sans">
      
      {/* Dynamic Cover Hero */}
      <div className="relative w-full h-[50vh] md:h-[65vh] font-sans">
        <div className="absolute inset-0">
          <img 
            src={coverImage} 
            alt={event.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent"></div>
        </div>
        
        <div className="absolute inset-0 flex flex-col justify-end pb-16">
          <div className="max-w-6xl mx-auto px-6 w-full">
            <span className="inline-block px-4 py-1.5 bg-[#EA681A] text-white text-sm font-bold uppercase tracking-wider rounded-full mb-4 shadow-lg">
              {event.purpose}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 leading-tight drop-shadow-md">
              {event.title}
            </h1>
            
            <div className="flex flex-wrap items-center gap-6 text-gray-200">
              <div className="flex items-center gap-2">
                <Calendar size={20} className="text-[#EA681A]" />
                <span className="font-semibold text-lg">{new Date(event.date).toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' })}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin size={20} className="text-[#EA681A]" />
                <span className="font-semibold text-lg">{event.location}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main className="max-w-6xl mx-auto px-6 pb-24 relative z-10 -mt-8">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 flex flex-col lg:flex-row gap-0">
          
          {/* Main Content Area */}
          <div className="flex-1 p-8 md:p-12">
            <div className="flex items-center gap-3 mb-8 pb-6 border-b border-gray-100">
              <AlignLeft size={28} className="text-[#113E7C]" />
              <h2 className="text-2xl font-bold text-gray-900">About The Event</h2>
            </div>
            
            <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed text-justify mb-10">
              {renderDescription()}
            </div>

            {event.hashtags && (
              <div className="bg-blue-50/50 rounded-2xl p-6 border border-blue-100 mb-8">
                <div className="flex items-start gap-3">
                  <Hash size={24} className="text-blue-500 mt-1 flex-shrink-0" />
                  <p className="text-blue-800 font-semibold leading-relaxed tracking-wide">
                    {event.hashtags}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Sidebar Meta Data */}
          <div className="w-full lg:w-[350px] bg-slate-50 p-8 md:p-12 lg:border-l border-gray-100 flex flex-col gap-6">
            <h3 className="text-xl font-bold text-gray-900 mb-2">Event Details</h3>
            
            <div className="flex flex-col gap-5">
              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Event ID</span>
                <span className="text-gray-900 font-semibold">{event.id}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Category</span>
                <span className="text-gray-900 font-semibold">{event.category}</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Author</span>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-800 font-bold">
                    {event.addedBy.charAt(0).toUpperCase()}
                  </div>
                  <span className="text-gray-900 font-semibold capitalize">{event.addedBy}</span>
                </div>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">Published At</span>
                <span className="text-gray-600 font-medium text-sm">{new Date(event.createdAt).toLocaleString()}</span>
              </div>
            </div>

            <div className="mt-auto pt-8">
              <Link to="/events" className="flex items-center justify-center w-full py-4 rounded-xl font-bold text-white bg-[#113E7C] hover:bg-[#0a2752] transition-colors shadow-md">
                Back to All Events
              </Link>
            </div>
          </div>
        </div>

        {/* Images Gallery */}
        {event.images && event.images.length > 1 && (
          <div className="mt-16">
            <div className="flex items-center justify-center mb-10">
              <div className="h-px bg-gray-200 flex-1"></div>
              <h2 className="text-3xl font-black text-gray-900 mx-8 uppercase tracking-wide">Event Gallery</h2>
              <div className="h-px bg-gray-200 flex-1"></div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {event.images.map((img, idx) => (
                // Skip the first image if it's already used as the cover
                (idx !== 0 || event.images.length === 1) && (
                  <div key={idx} className="group overflow-hidden rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 bg-white border border-gray-100">
                    <img 
                      src={img} 
                      alt={`${event.title} gallery ${idx}`} 
                      className="w-full h-72 object-cover transform group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                )
              ))}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
