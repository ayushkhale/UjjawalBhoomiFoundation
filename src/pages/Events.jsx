import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { eventsData } from '../data/eventsData';
import './Events.css';
import Footer from '../sections/Footer';

export default function Events() {
  useEffect(() => {
    window.scrollTo(0, 0);
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.ev-reveal');
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <div className="events-wrapper">
      
      {/* ═ HERO SECTION ═ */}
      <section className="ev-hero">
        <div className="ev-hero-glow ev-glow-1"></div>
        <div className="ev-hero-glow ev-glow-2"></div>
        
        <span className="ev-hero-badge ev-reveal">Our Initiatives</span>
        <h1 className="ev-reveal" style={{ animationDelay: '0.1s' }}>
          All Published <span className="accent">Events</span>
        </h1>
        <p className="ev-reveal" style={{ animationDelay: '0.2s' }}>
          Explore our latest campaigns, ground-level actions, and community initiatives driving real impact across the nation.
        </p>

        {/* Fancy SVG Curve at bottom of hero */}
        <svg className="ev-curve" viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120H1440V0c-261.2 88.5-544.1 118-825.2 62.7C414.7 23.3 205.8 11.2 0 45.4V120z" fill="#f8fafc"/>
        </svg>
      </section>

      {/* ═ EVENTS GRID ═ */}
      <main className="ev-container">
        <div className="ev-grid">
          {eventsData.map((event, index) => (
            <div 
              key={event.id} 
              className="ev-card ev-reveal" 
              style={{ animationDelay: `${(index % 3) * 0.1}s` }}
            >
              <div className="ev-card-img">
                <span className="ev-badge" style={{ color: `var(--ubf-${event.categoryColor})` }}>
                  {event.category}
                </span>
                <img src={event.thumb} alt={event.title} />
              </div>
              
              <div className="ev-card-body">
                <h2 className="ev-title">{event.title}</h2>
                <div className="ev-meta">
                  <span className="icon-cal">📅</span> {event.date}
                </div>
                <p className="ev-desc">{event.shortDesc}</p>
                
                <div className="ev-card-footer">
                  <span className="ev-id">ID: {event.id}</span>
                  <Link to={`/events/${event.id}`} className="ev-link">
                    View Details <span>→</span>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
