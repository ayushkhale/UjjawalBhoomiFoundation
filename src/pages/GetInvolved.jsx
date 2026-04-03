import React, { useEffect, useState } from 'react';
import './GetInvolved.css';
import Footer from '../sections/Footer';
import SuccessModal from '../components/SuccessModal';

import { useLocation, Link } from 'react-router-dom';

export default function GetInvolved() {
  const location = useLocation();
  const [modalConfig, setModalConfig] = useState({
    isOpen: false,
    title: '',
    message: ''
  });

  // Handle incoming hash links
  useEffect(() => {
    if (location.hash) {
      const element = document.getElementById(location.hash.slice(1));
      if (element) {
        // slight delay to ensure rendering
        setTimeout(() => element.scrollIntoView({ behavior: 'smooth', block: 'start' }), 100);
      }
    }
  }, [location]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    const elements = document.querySelectorAll('.gi-reveal');
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  const handleFormSubmit = (e, type) => {
    e.preventDefault();
    let title = "Application Submitted!";
    let message = "Thank you for your interest. Our team will review your details and contact you base on your application.";

    if (type === 'volunteer') {
      title = "Volunteer Application Received!";
      message = "Thank you for wanting to serve the community. Our block-level coordinators will reach out to you within 3-5 working days for your orientation.";
    } else if (type === 'partner') {
      title = "Partnership Request Sent!";
      message = "We are excited about the possibility of collaborating. Our CSR relations team has received your request and will contact your representative shortly.";
    } else if (type === 'internship') {
      title = "Internship Application Sent!";
      message = "Your resume and motivation statement have been received. Our HR department will review your profile for the selected department and invite you for an interview.";
    }

    setModalConfig({
      isOpen: true,
      title,
      message
    });

    e.target.reset();
  };

  return (
    <div className="gi-wrapper">
      
      {/* ═ HERO ═ */}
      <section className="gi-hero">
        <div className="gi-hero-glow gi-glow-1"></div>
        <div className="gi-hero-glow gi-glow-2"></div>

        <span className="gi-hero-label gi-reveal">Take Action</span>
        <h1 className="gi-reveal" style={{ animationDelay: '0.1s' }}>Join Hands With UBF</h1>
        <p className="gi-reveal" style={{ animationDelay: '0.2s' }}>
          Be a part of us and help in creating positive change from the ground up. Whether volunteering, partnering, or interning, every action shapes the future of our communities.
        </p>

        {/* Fancy SVG Curve at bottom of hero */}
        <svg className="gi-curve" viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120H1440V0c-261.2 88.5-544.1 118-825.2 62.7C414.7 23.3 205.8 11.2 0 45.4V120z" fill="#ffffff"/>
        </svg>
      </section>

      {/* ═ 1. VOLUNTEER ═ */}
      <section id="volunteer" className="gi-section">
        <div className="gi-container">
          
          <div className="gi-content-side orange gi-reveal">
            <span className="gi-content-badge">Grassroots Impact</span>
            <h2>Become A Volunteer</h2>
            <p className="gi-lead">
              Our volunteers are the backbone of our operations. Step into the field, connect with local communities, and deliver help where it is needed most.
            </p>
            <ul className="gi-benefits-list">
              <li><span className="icon">✓</span> Make a direct, tangible grassroots impact.</li>
              <li><span className="icon">✓</span> Connect with like-minded, passionate changemakers.</li>
              <li><span className="icon">✓</span> Gain valuable on-field experience in social work.</li>
            </ul>
          </div>

          <div className="gi-form-card gi-reveal" style={{ animationDelay: '0.1s' }}>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-1" onSubmit={(e) => handleFormSubmit(e, 'volunteer')}>
              <div className="gi-input-group">
                <label>Full Name <span>*</span></label>
                <input type="text" className="gi-input gi-outline-orange" placeholder="Enter your full name" required />
              </div>
              <div className="gi-input-group">
                <label>Father's Name <span>*</span></label>
                <input type="text" className="gi-input gi-outline-orange" placeholder="Enter father's name" required />
              </div>
              <div className="gi-input-group">
                <label>Mobile Number <span>*</span></label>
                <input type="tel" className="gi-input gi-outline-orange" placeholder="+91 00000 00000" required />
              </div>
              <div className="gi-input-group">
                <label>Email Address <span>*</span></label>
                <input type="email" className="gi-input gi-outline-orange" placeholder="name@domain.com" required />
              </div>
              <div className="gi-input-group">
                <label>Qualification <span>*</span></label>
                <input type="text" className="gi-input gi-outline-orange" placeholder="e.g. MSW, B.Tech" required />
              </div>
              <div className="gi-input-group">
                <label>Working Experience</label>
                <input type="text" className="gi-input gi-outline-orange" placeholder="Any relevant past work" />
              </div>

              <div className="gi-input-group col-span-1 md:col-span-2">
                <label>Permanent Address <span>*</span></label>
                <input type="text" className="gi-input gi-outline-orange" placeholder="Full residential location details" required />
              </div>

              <div className="gi-input-group col-span-1 md:col-span-2 mt-2">
                <label>Upload Your Photograph <span>*</span></label>
                <div className="gi-file-wrap gi-wrap-orange">
                  <input type="file" accept="image/*" required />
                  <div className="gi-file-icon gi-icon-orange">↑</div>
                  <div className="gi-file-text">Click or drag your photo here</div>
                  <span className="gi-file-hint">JPG, PNG allowed. Max size: 2MB.</span>
                </div>
              </div>

              <div className="gi-input-group col-span-1 md:col-span-2 mt-2">
                <label>About yourself & Motivation <span>*</span></label>
                <textarea className="gi-input gi-outline-orange" placeholder="Tell us about your passions and why you want to volunteer..." required></textarea>
              </div>

              <div className="col-span-1 md:col-span-2">
                <button type="submit" className="gi-submit-btn orange">Submit Application</button>
              </div>
            </form>
          </div>

        </div>
      </section>

      {/* ═ 2. PARTNER ═ */}
      <section id="partner" className="gi-section">
        <div className="gi-container">
          
          <div className="gi-content-side blue gi-reveal">
            <span className="gi-content-badge">Corporate / CSR</span>
            <h2>Become A Partner</h2>
            <p className="gi-lead">
              Strategic partnerships empower us to scale our impact. Align your organization's CSR goals with our grassroots initiatives to co-create sustainable, systematic change.
            </p>
            <ul className="gi-benefits-list">
              <li><span className="icon">✓</span> Fulfill CSR mandates with complete programmatic transparency.</li>
              <li><span className="icon">✓</span> Scale your organization's social impact nationwide.</li>
              <li><span className="icon">✓</span> Co-create sustainable livelihood and educational programs.</li>
            </ul>
          </div>

          <div className="gi-form-card gi-reveal" style={{ animationDelay: '0.1s' }}>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-1" onSubmit={(e) => handleFormSubmit(e, 'partner')}>
              <div className="gi-input-group">
                <label>Organization Name <span>*</span></label>
                <input type="text" className="gi-input gi-outline-blue" placeholder="Company or Trust Name" required />
              </div>
              <div className="gi-input-group">
                <label>Contact Person <span>*</span></label>
                <input type="text" className="gi-input gi-outline-blue" placeholder="Authorized Representative" required />
              </div>
              <div className="gi-input-group">
                <label>Mobile Number <span>*</span></label>
                <input type="tel" className="gi-input gi-outline-blue" placeholder="+91 00000 00000" required />
              </div>
              <div className="gi-input-group">
                <label>Email Address <span>*</span></label>
                <input type="email" className="gi-input gi-outline-blue" placeholder="csr@company.com" required />
              </div>
              <div className="gi-input-group col-span-1 md:col-span-2">
                <label>Website Link</label>
                <input type="text" className="gi-input gi-outline-blue" placeholder="https://www.yourwebsite.com" />
              </div>

              <div className="gi-input-group col-span-1 md:col-span-2 mt-2">
                <label>Mission Statement <span>*</span></label>
                <input type="text" className="gi-input gi-outline-blue" placeholder="What does your organization aim to achieve?" required />
              </div>

              <div className="gi-input-group col-span-1 md:col-span-2 mt-2">
                <label>Registered Address <span>*</span></label>
                <textarea className="gi-input gi-outline-blue" placeholder="Organization official address" required></textarea>
              </div>

              <div className="col-span-1 md:col-span-2">
                <button type="submit" className="gi-submit-btn blue">Register Partnership</button>
              </div>
            </form>
          </div>

        </div>
      </section>

      {/* ═ 3. INTERNSHIP ═ */}
      <section id="internship" className="gi-section">
        <div className="gi-container">
          
          <div className="gi-content-side green gi-reveal">
            <span className="gi-content-badge">Gain Experience</span>
            <h2>Apply For Internship</h2>
            <p className="gi-lead">
              Bring your skills to our dynamic environment. Learn, grow, and build your resume while working on live, impactful community-driven projects.
            </p>
            <ul className="gi-benefits-list">
              <li><span className="icon">✓</span> Gain real-world project experience in the social sector.</li>
              <li><span className="icon">✓</span> Receive mentorship from seasoned NGO leaders.</li>
              <li><span className="icon">✓</span> Earn certificates of completion and letters of recommendation.</li>
            </ul>
          </div>

          <div className="gi-form-card gi-reveal" style={{ animationDelay: '0.1s' }}>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-x-5 gap-y-1" onSubmit={(e) => handleFormSubmit(e, 'internship')}>
              <div className="gi-input-group">
                <label>Full Name <span>*</span></label>
                <input type="text" className="gi-input gi-outline-green" placeholder="Enter your full name" required />
              </div>
              <div className="gi-input-group">
                <label>Email Address <span>*</span></label>
                <input type="email" className="gi-input gi-outline-green" placeholder="intern@domain.com" required />
              </div>
              <div className="gi-input-group">
                <label>Mobile Number <span>*</span></label>
                <input type="tel" className="gi-input gi-outline-green" placeholder="+91 00000 00000" required />
              </div>
              <div className="gi-input-group">
                <label>College / Univ <span>*</span></label>
                <input type="text" className="gi-input gi-outline-green" placeholder="Institution Name" required />
              </div>
              <div className="gi-input-group">
                <label>Degree & Major <span>*</span></label>
                <input type="text" className="gi-input gi-outline-green" placeholder="e.g. Marketing" required />
              </div>
              <div className="gi-input-group">
                <label>Department <span>*</span></label>
                <select className="gi-input gi-outline-green" defaultValue="" required>
                  <option value="" disabled>Select an area...</option>
                  <option value="field">Field Operations</option>
                  <option value="marketing">Social Media</option>
                  <option value="events">Event Management</option>
                  <option value="research">Research</option>
                </select>
              </div>

              <div className="gi-input-group col-span-1 md:col-span-2 mt-2">
                <label>Upload Your Resume (CV) <span>*</span></label>
                <div className="gi-file-wrap gi-wrap-green">
                  <input type="file" accept=".pdf,.doc,.docx" required />
                  <div className="gi-file-icon gi-icon-green">📄</div>
                  <div className="gi-file-text">Click to attach your Resume</div>
                  <span className="gi-file-hint">PDF, DOCX allowed. Max size: 5MB.</span>
                </div>
              </div>

              <div className="gi-input-group col-span-1 md:col-span-2 mt-2">
                <label>Why intern with us? <span>*</span></label>
                <textarea className="gi-input gi-outline-green" placeholder="Tell us your motivation and what you hope to learn..." required></textarea>
              </div>

              <div className="col-span-1 md:col-span-2">
                <button type="submit" className="gi-submit-btn green">Submit Application</button>
              </div>
            </form>
          </div>

        </div>
      </section>

      {/* ═ DONATE CTA ═ */}
      <section id="donate" className="gi-donate-banner gi-reveal">
        <div className="gi-donate-box">
          <h2>Support Ujjawal Bhoomi</h2>
          <p>
            Not ready to volunteer or partner yet? Your generosity helps us uplift communities, create lasting change, and make a difference nationwide.
          </p>
          <Link to="/donate" className="gi-donate-btn">Make a Donation</Link>
        </div>
      </section>

      <Footer />

      <SuccessModal 
        isOpen={modalConfig.isOpen}
        onClose={() => setModalConfig({ ...modalConfig, isOpen: false })}
        title={modalConfig.title}
        message={modalConfig.message}
      />
    </div>
  );
}
