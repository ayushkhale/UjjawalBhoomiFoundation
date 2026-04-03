import React, { useEffect, useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import Footer from '../sections/Footer';

// Icons
import { Target, Eye, Shield, MapPin, X, CheckCircle2 } from 'lucide-react';

const modalData = {
  'leader-manish': {
    name: 'Manish Tamrakar',
    role: 'Founder & Director',
    img: 'https://i.ibb.co/t1HJjJ8/8faa1087-94b4-4b9e-9ee0-aafa2d031cb2-2.png',
    bio: `<p>Manish Tamrakar is the visionary founder of Ujjawal Bhoomi Foundation, driven by a deep passion for community empowerment and sustainable development. With years of grassroots experience in social welfare, environmental sustainability, and community mobilization, Manish has dedicated his life to creating lasting impact.</p>
          <p>Under his leadership, Ujjawal Bhoomi Foundation has grown from a local initiative into a recognized organization working across education, healthcare, environmental conservation, and community development.</p>
          <p>Manish believes that true transformation begins at the grassroots level — by empowering individuals, strengthening communities, and building sustainable systems that create opportunities for generations to come.</p>`,
    chips: [
      { label: '✉ Email', href: 'mailto:info@ujjawalbhoomifoundation.in' },
      { label: '📞 Call', href: 'tel:+919424499188' }
    ],
  },
  'partner-sangmitra': {
    name: 'Sangmitra Trust', role: 'Community Partner',
    img: 'https://i.ibb.co/n3HN52g/sangmitra.jpg', contain: true,
    bio: '<p>Sangmitra Trust is dedicated to building stronger communities through social welfare and empowerment programs. As a valued partner, they collaborate with Ujjawal Bhoomi Foundation on grassroots initiatives that promote social inclusion, community health awareness, and capacity-building programs.</p><p>Their joint efforts focus on creating sustainable models of community engagement that empower local populations to take ownership of their own development journey.</p>',
  },
  'partner-parivartak': {
    name: 'Parivartak Support', role: 'Training Partner',
    img: 'https://i.ibb.co/gT3Pj7k/parivartak-support.jpg', contain: true,
    bio: '<p>Parivartak Support Foundation creates positive change through education and awareness initiatives. Together with UBF, they design programs that educate communities about health, hygiene, environmental responsibility, and social welfare.</p><p>Their partnership focuses on behavioral change communication, training workshops, and awareness campaigns reaching thousands across rural and semi-urban areas.</p>',
  },
  'partner-deep': {
    name: 'Deep Photography', role: 'Media Partner',
    img: 'https://i.ibb.co/DwqCm3K/Screenshot-2024-10-16-132912.png', contain: true,
    bio: '<p>Deep Photography captures moments that matter and documents the transformational journey of Ujjawal Bhoomi Foundation. Through powerful visual storytelling, they help communicate the impact of our programs to supporters, donors, and the wider community.</p>',
  },
  'partner-dakshi': {
    name: 'Dakshi Foundation', role: 'Strategic Partner',
    img: 'https://i.postimg.cc/9FGZ1ddN/IMG-20240907-WA0001.jpg', contain: true,
    bio: '<p>Dakshi Foundation fosters sustainable solutions for community development. As a strategic partner, they bring expertise in solid waste management, environmental sustainability, and community mobilization that complements UBF\'s mission.</p><p>Together, they work on joint projects including environmental awareness campaigns, waste management initiatives, and sustainable development programs.</p>',
  },
  'team-priya': {
    name: 'Priya Sharma', role: 'Program Coordinator',
    img: 'https://cdn-icons-png.flaticon.com/512/4140/4140048.png',
    bio: '<p>Priya leads the coordination of all community outreach programs, ensuring that each initiative reaches the communities that need it most. With a background in social work, she brings compassion and efficiency to every project.</p>',
  },
  'team-rajesh': {
    name: 'Rajesh Verma', role: 'Field Operations Lead',
    img: 'https://cdn-icons-png.flaticon.com/512/4140/4140037.png',
    bio: '<p>Rajesh manages on-ground field operations across multiple districts. His deep understanding of rural communities helps the foundation design programs that create real, sustainable impact.</p>',
  },
  'team-sunita': {
    name: 'Sunita Patel', role: 'Education Program Head',
    img: 'https://cdn-icons-png.flaticon.com/512/4140/4140048.png',
    bio: '<p>Sunita oversees all education-related initiatives including school supply drives, scholarship programs, and learning workshops. Her dedication has helped hundreds of students access quality education.</p>',
  },
  'team-amit': {
    name: 'Amit Kumar', role: 'Healthcare Initiatives Lead',
    img: 'https://cdn-icons-png.flaticon.com/512/4140/4140037.png',
    bio: '<p>Amit coordinates medical camps and healthcare awareness drives across rural communities. His public health background enables the foundation to deliver meaningful healthcare interventions.</p>',
  },
};

const teamMembersData = [
  { id: 'team-priya', name: 'Priya Sharma', role: 'Program Coordinator', category: 'core', img: 'https://cdn-icons-png.flaticon.com/512/4140/4140048.png' },
  { id: 'team-rajesh', name: 'Rajesh Verma', role: 'Field Ops Lead', category: 'core', img: 'https://cdn-icons-png.flaticon.com/512/4140/4140037.png' },
  { id: 'team-sunita', name: 'Sunita Patel', role: 'Education Head', category: 'core', img: 'https://cdn-icons-png.flaticon.com/512/4140/4140048.png' },
  { id: 'team-amit', name: 'Amit Kumar', role: 'Healthcare Lead', category: 'core', img: 'https://cdn-icons-png.flaticon.com/512/4140/4140037.png' },
  { id: 'neha', name: 'Neha Singh', role: 'District Coord', category: 'field', img: 'https://cdn-icons-png.flaticon.com/512/4140/4140048.png' },
  { id: 'vikas', name: 'Vikas Rao', role: 'On-Ground Admin', category: 'field', img: 'https://cdn-icons-png.flaticon.com/512/4140/4140037.png' },
  { id: 'anita', name: 'Anita Desai', role: 'Medical Assistant', category: 'field', img: 'https://cdn-icons-png.flaticon.com/512/4140/4140048.png' },
  { id: 'rohan', name: 'Rohan Gupta', role: 'Logistics', category: 'field', img: 'https://cdn-icons-png.flaticon.com/512/4140/4140037.png' },
  { id: 'kavita', name: 'Dr. Kavita', role: 'Medical Advisor', category: 'volunteers', img: 'https://cdn-icons-png.flaticon.com/512/4140/4140048.png' },
  { id: 'dinesh', name: 'Prof. Dinesh', role: 'Edu Consultant', category: 'volunteers', img: 'https://cdn-icons-png.flaticon.com/512/4140/4140037.png' },
  { id: 'smriti', name: 'Smriti Sen', role: 'Lead Volunteer', category: 'volunteers', img: 'https://cdn-icons-png.flaticon.com/512/4140/4140048.png' },
];

export default function About() {
  const [activeModal, setActiveModal] = useState(null)
  
  // Team Tabs
  const [activeTab, setActiveTab] = useState('all')
  const [teamLimit, setTeamLimit] = useState(8) // Initial limit set to 8 as requested

  // Partner Slider
  const scrollRef = useRef(null)

  const scrollPartners = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({ left: direction === 'left' ? -350 : 350, behavior: 'smooth' })
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1 })

    const elements = document.querySelectorAll('.scroll-reveal')
    elements.forEach(el => observer.observe(el))

    return () => elements.forEach(el => observer.unobserve(el))
  }, [activeTab, teamLimit]) // Re-run observer when tabs change

  // Modal handlers
  useEffect(() => {
    if (activeModal) {
      document.body.style.overflow = 'hidden'
      const handleEsc = (e) => { if (e.key === 'Escape') setActiveModal(null) }
      window.addEventListener('keydown', handleEsc)
      return () => {
        document.body.style.overflow = 'auto'
        window.removeEventListener('keydown', handleEsc)
      }
    }
  }, [activeModal])

  const openModal = (id) => {
    if (modalData[id]) {
        setActiveModal(modalData[id])
    }
  }
  const closeModal = () => setActiveModal(null)

  // Filtering and Pagination Logic
  const filteredTeam = teamMembersData.filter(m => activeTab === 'all' || m.category === activeTab);
  const visibleTeam = filteredTeam.slice(0, teamLimit);

  return (
    <div className="bg-white">
      {/* ═ HERO ═ */}
      <section className="about-hero">
        <div className="about-hero-glow about-glow-1"></div>
        <div className="about-hero-glow about-glow-2"></div>
        
        <span className="about-hero-label scroll-reveal">Mission & Vision</span>
        <h1 className="scroll-reveal delay-1">
          Know About <span>Ujjawal Bhoomi</span><br /><span className="accent">Foundation</span>
        </h1>
        <p className="scroll-reveal delay-2">
          We are dedicated to uplifting marginalized communities by focusing on health, environment, education, and empowering the youth to build a brighter tomorrow.
        </p>

        {/* Fancy SVG Curve at bottom of hero */}
        <svg className="about-curve" viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120H1440V0c-261.2 88.5-544.1 118-825.2 62.7C414.7 23.3 205.8 11.2 0 45.4V120z" fill="#ffffff"/>
        </svg>
      </section>

      {/* ═ PILLARS (Mission/Vision/Values) ═ */}
      <section className="pillars-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="pillar-card scroll-reveal">
              <div className="pillar-icon">
                <Target size={28} />
              </div>
              <h3 className="text-xl font-extrabold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                To transform lives through sustainable community development programs that empower individuals, strengthen communities, and create opportunities for the most vulnerable.
              </p>
            </div>
            
            <div className="pillar-card scroll-reveal delay-1">
              <div className="pillar-icon">
                <Eye size={28} />
              </div>
              <h3 className="text-xl font-extrabold text-gray-900 mb-3">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                A world where every individual has access to quality education, healthcare, a clean environment, and the opportunity to live with complete dignity.
              </p>
            </div>

            <div className="pillar-card scroll-reveal delay-2">
              <div className="pillar-icon">
                <Shield size={28} />
              </div>
              <h3 className="text-xl font-extrabold text-gray-900 mb-3">Our Values</h3>
              <p className="text-gray-600 leading-relaxed text-sm">
                Transparency, compassion, and grassroots empowerment. We design community-driven, culturally sensitive programs built for lasting, intergenerational impact.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ═ LEADERSHIP ═ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="section-header scroll-reveal">
            <span className="section-label">Leadership</span>
            <h2 className="section-title">The Heart Behind Our Mission</h2>
            <p className="section-subtitle">Dedicated leadership guiding our initiatives for maximum grassroots impact.</p>
          </div>

          <div className="leader-split-card scroll-reveal delay-1" onClick={() => openModal('leader-manish')}>
            <div className="leader-img-col">
              <img src="https://i.ibb.co/t1HJjJ8/8faa1087-94b4-4b9e-9ee0-aafa2d031cb2-2.png" alt="Manish Tamrakar" />
            </div>
            <div className="leader-info-col">
              <h3 className="text-3xl font-extrabold text-[#113E7C] mb-2">Manish Tamrakar</h3>
              <span className="text-sm font-bold text-[#EA681A] uppercase tracking-wider mb-6 block">Founder & Director</span>
              <p className="text-gray-600 leading-relaxed mb-8 text-[1.05rem]">
                With years of grassroots experience in social welfare and environmental sustainability, Manish has dedicated his life to creating lasting impact in underserved communities. His hands-on approach ensures every program directly addresses real community needs.
              </p>
              <button className="leader-read-btn">Read Full Bio</button>
            </div>
          </div>
        </div>
      </section>

      {/* ═ LARGE PARTNERS CAROUSEL ═ */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="section-header scroll-reveal max-w-3xl mx-auto mb-12 text-center">
            <span className="section-label">Ecosystem</span>
            <h2 className="section-title">Trusted Partners</h2>
            <p className="section-subtitle ml-auto mr-auto">Collaborating with visionary organizations to deliver unmatched value, scale our programs, and create deeper impact across regions.</p>
          </div>

          <div className="partner-scroll-wrapper scroll-reveal">
            <div className="partner-track" ref={scrollRef}>
              <div className="partner-card-slide" onClick={() => openModal('partner-sangmitra')}>
                <div className="p-logo"><img src="https://i.ibb.co/n3HN52g/sangmitra.jpg" alt="Partner" /></div>
                <h3>Sangmitra Trust</h3><span>Community</span>
              </div>
              <div className="partner-card-slide" onClick={() => openModal('partner-parivartak')}>
                <div className="p-logo"><img src="https://i.ibb.co/gT3Pj7k/parivartak-support.jpg" alt="Partner" /></div>
                <h3>Parivartak Support</h3><span>Training</span>
              </div>
              <div className="partner-card-slide" onClick={() => openModal('partner-deep')}>
                <div className="p-logo"><img src="https://i.ibb.co/DwqCm3K/Screenshot-2024-10-16-132912.png" alt="Partner" /></div>
                <h3>Deep Photography</h3><span>Media</span>
              </div>
              <div className="partner-card-slide" onClick={() => openModal('partner-dakshi')}>
                <div className="p-logo"><img src="https://i.postimg.cc/9FGZ1ddN/IMG-20240907-WA0001.jpg" alt="Partner" /></div>
                <h3>Dakshi Foundation</h3><span>Strategic</span>
              </div>  
              
            </div>
          </div>

          <div className="slider-controls scroll-reveal delay-1">
            <button className="ctrl-btn" onClick={() => scrollPartners('left')}>❮</button>
            <button className="ctrl-btn" onClick={() => scrollPartners('right')}>❯</button>
          </div>
        </div>
      </section>

      {/* ═ LARGE TABBED TEAM ═ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="section-header scroll-reveal">
            <span className="section-label">Our Team</span>
            <h2 className="section-title">The People Behind the Impact</h2>
            <p className="section-subtitle">Browse our dedicated group of professionals and volunteers sorted by departments.</p>
          </div>

          <div className="team-tabs scroll-reveal">
            <button className={`tab-btn ${activeTab === 'all' ? 'active' : ''}`} onClick={() => {setActiveTab('all'); setTeamLimit(8);}}>View All</button>
            <button className={`tab-btn ${activeTab === 'core' ? 'active' : ''}`} onClick={() => {setActiveTab('core'); setTeamLimit(100);}}>Core Team</button>
            <button className={`tab-btn ${activeTab === 'field' ? 'active' : ''}`} onClick={() => {setActiveTab('field'); setTeamLimit(100);}}>Field Operations</button>
            <button className={`tab-btn ${activeTab === 'volunteers' ? 'active' : ''}`} onClick={() => {setActiveTab('volunteers'); setTeamLimit(100);}}>Advisors & Volunteers</button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {visibleTeam.map((m, idx) => (
              <div 
                key={m.id} 
                className={`profile-card scroll-reveal`} 
                style={{ transitionDelay: `${(idx % 4) * 0.1}s` }}
                onClick={() => openModal(m.id)}
              >
                <div className="card-avatar">
                   <img src={m.img} alt={m.name} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{m.name}</h3>
                <span className="text-xs font-bold text-[#EA681A] uppercase tracking-wider">{m.role}</span>
              </div>
            ))}
          </div>
          
          {/* Load More Logic */}
          {activeTab === 'all' && teamLimit < filteredTeam.length && (
            <div className="flex items-center justify-center gap-6 border-t border-gray-200 pt-10 mt-12 scroll-reveal text-center">
              <span className="text-gray-500 font-semibold text-sm">Showing {visibleTeam.length} of {filteredTeam.length} members</span>
              <button 
                className="px-8 py-3 bg-transparent border-2 border-[#113E7C] text-[#113E7C] rounded-full font-bold hover:bg-[#113E7C] hover:text-white transition-all text-sm"
                onClick={() => setTeamLimit(prev => prev + 4)}
              >
                Load More
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ═ JOURNEY ═ */}
      <section className="journey-section">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="journey-grid">
            <div className="journey-sticky scroll-reveal">
              <span className="section-label">Our Journey</span>
              <h2 className="section-title mb-5">Building Impact<br/>Since 2020</h2>
              <p className="text-lg text-gray-600">From a small group of passionate volunteers to a recognized community development organization — every milestone reflects our commitment to creating real change.</p>
              
              <div className="journey-stats">
                <div className="journey-stat"><strong>5+</strong><span>Years Active</span></div>
                <div className="journey-stat"><strong>1k+</strong><span>Lives Touched</span></div>
              </div>
            </div>

            <div className="journey-cards">
              <div className="journey-card scroll-reveal">
                <div className="journey-card-header">
                  <span className="journey-year">2020</span>
                  <span className="journey-pill">Phase 01</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Foundation Established</h3>
                <p className="text-gray-500 mb-4 text-[0.95rem] leading-relaxed">Ujjawal Bhoomi Foundation was established with a vision to create lasting change in underserved communities across India.</p>
                <ul className="journey-features">
                  <li>Registered as a non-profit</li>
                  <li>Built the founding volunteer team</li>
                </ul>
              </div>

              <div className="journey-card scroll-reveal delay-1">
                <div className="journey-card-header">
                  <span className="journey-year">2021</span>
                  <span className="journey-pill">Phase 02</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Programs Launched</h3>
                <p className="text-gray-500 mb-4 text-[0.95rem] leading-relaxed">Launched our first community programs focusing on education, healthcare, and environmental awareness.</p>
                <ul className="journey-features">
                  <li>First major plantation drive</li>
                  <li>Local school supply distribution</li>
                </ul>
              </div>

              <div className="journey-card scroll-reveal delay-2">
                <div className="journey-card-header">
                  <span className="journey-year">2023</span>
                  <span className="journey-pill">Phase 03</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Strategic Growth</h3>
                <p className="text-gray-500 mb-4 text-[0.95rem] leading-relaxed">Expanded our reach through strategic partnerships with like-minded organizations and government bodies.</p>
                <ul className="journey-features">
                  <li>Formed key NGO consortiums</li>
                  <li>Expanded to new districts</li>
                </ul>
              </div>

              <div className="journey-card scroll-reveal delay-3">
                <div className="journey-card-header">
                  <span className="journey-year">2025</span>
                  <span className="journey-pill">Phase 04</span>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Scaling & Digital Transformation</h3>
                <p className="text-gray-500 mb-4 text-[0.95rem] leading-relaxed">Implementing technology-driven monitoring systems while scaling our education and health models to new states across India.</p>
                <ul className="journey-features">
                  <li>Launched digital literacy initiative</li>
                  <li>Expanded operations to 2 new states</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═ WHERE WE WORK ═ */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="section-header scroll-reveal">
            <span className="section-label">Our Presence</span>
            <h2 className="section-title">Where We Work</h2>
            <p className="section-subtitle">Creating impact across communities in Madhya Pradesh and responding where help is needed most.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="loc-card scroll-reveal">
              <div className="loc-icon"><MapPin size={24} /></div>
              <h4>Head Office</h4>
              <p>Bhopal, MP, India</p>
            </div>
            
            <div className="loc-card scroll-reveal delay-1">
              <div className="loc-icon"><CheckCircle2 size={24} /></div>
              <h4>Field Operations</h4>
              <p>Rural communities across MP</p>
            </div>

            <div className="loc-card scroll-reveal delay-2">
              <div className="loc-icon"><Target size={24} /></div>
              <h4>Outreach Areas</h4>
              <p>Districts across Central India</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═ CTA ═ */}
      <section className="py-16 bg-white scroll-reveal">
        <div className="max-w-5xl mx-auto px-4 sm:px-6">
          <div className="cta-box">
            <h2>Ready to Make a Difference?</h2>
            <p>Join us in our mission to create lasting change in the lives of those who need it most. Whether you donate, volunteer, or partner with us — every action counts.</p>
            <div className="cta-actions">
              <Link to="/donate" className="cta-btn-white text-center">Donate Now</Link>
              <Link to="/get-involved#volunteer" className="cta-btn-outline text-center">Become a Volunteer</Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* ═ MODAL OVERLAY ═ */}
      <div 
        className={`modal-overlay ${activeModal ? 'active' : ''} ${activeModal?.contain ? 'partner-modal' : ''}`} 
        onClick={closeModal}
      >
        <div className="modal-box" onClick={e => e.stopPropagation()}>
          <button className="modal-close" onClick={closeModal} aria-label="Close modal">
            <X size={24} />
          </button>
          
          <div className="modal-left">
            <img src={activeModal?.img} alt={activeModal?.name} />
            {activeModal?.chips && (
              <div className="flex flex-wrap gap-2 justify-center mt-2">
                {activeModal.chips.map((chip, idx) => (
                  <a key={idx} href={chip.href} className="modal-chip">
                    {chip.label}
                  </a>
                ))}
              </div>
            )}
          </div>
          
          <div className="modal-right">
            <h3>{activeModal?.name}</h3>
            <div className="sub">{activeModal?.role}</div>
            <div 
              className="modal-desc" 
              dangerouslySetInnerHTML={{ __html: activeModal?.bio || '' }} 
            />
          </div>
        </div>
      </div>
    </div>
  )
}