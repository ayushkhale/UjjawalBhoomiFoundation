import React, { useEffect, useState } from 'react';
import './Donate.css';
import Footer from '../sections/Footer';
import SuccessModal from '../components/SuccessModal';
import { Lock } from 'lucide-react';

export default function Donate() {
  const [formData, setFormData] = useState({
    name: '', email: '', phone: '', address: '', amount: '', purpose: '', idNumber: '', remark: ''
  });
  const [isModalOpen, setIsModalOpen] = useState(false);

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

    const elements = document.querySelectorAll('.don-reveal');
    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
    // Reset form for next time
    setFormData({
      name: '', email: '', phone: '', address: '', amount: '', purpose: '', idNumber: '', remark: ''
    });
  };

  return (
    <div className="don-wrapper">
      
      {/* ═ HERO SECTION ═ */}
      <section className="don-hero">
        <div className="don-hero-glow don-glow-1"></div>
        <div className="don-hero-glow don-glow-2"></div>
        
        <span className="don-hero-label don-reveal">Support Our Cause</span>
        <h1 className="don-reveal" style={{ animationDelay: '0.1s' }}>
          Make A Lasting <span className="accent">Impact</span>
        </h1>
        <p className="don-reveal" style={{ animationDelay: '0.2s' }}>
          Your generosity helps us uplift communities, drive educational growth, and ensure a sustainable environment. Every donation counts.
        </p>

        {/* Fancy SVG Curve */}
        <svg className="don-curve" viewBox="0 0 1440 120" fill="none" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 120H1440V0c-261.2 88.5-544.1 118-825.2 62.7C414.7 23.3 205.8 11.2 0 45.4V120z" fill="#f8fafc"/>
        </svg>
      </section>

      {/* ═ FORM CONTAINER ═ */}
      <main className="don-container">
        <div className="don-card don-reveal">
          <h2 className="don-title">Donation Details</h2>
          
          <form className="don-form" onSubmit={handleSubmit}>
            
            <div className="don-input-group">
              <label>Full Name <span>*</span></label>
              <input type="text" name="name" className="don-input" placeholder="Enter your full name" required onChange={handleChange} value={formData.name} />
            </div>
            
            <div className="don-input-group">
              <label>Email Address <span>*</span></label>
              <input type="email" name="email" className="don-input" placeholder="john@example.com" required onChange={handleChange} value={formData.email} />
            </div>
            
            <div className="don-input-group">
              <label>Phone Number <span>*</span></label>
              <input type="tel" name="phone" className="don-input" placeholder="+91 98765 43210" required onChange={handleChange} value={formData.phone} />
            </div>
            
            <div className="don-input-group">
              <label>Address <span>*</span></label>
              <input type="text" name="address" className="don-input" placeholder="City, State" required onChange={handleChange} value={formData.address} />
            </div>

            <div className="don-input-group">
              <label>Amount (in INR) <span>*</span></label>
              <input type="number" name="amount" className="don-input" placeholder="₹ 5000" min="100" required onChange={handleChange} value={formData.amount} />
            </div>

            <div className="don-input-group">
              <label>Toward (Purpose) <span>*</span></label>
              <select name="purpose" className="don-input" required onChange={handleChange} value={formData.purpose}>
                <option value="" disabled>Select Purpose</option>
                <option value="education">Education Support</option>
                <option value="health">Healthcare Initiatives</option>
                <option value="environment">Environmental Drives</option>
                <option value="general">General Donation</option>
                <option value="disaster-relief">Disaster Relief</option>
              </select>
            </div>

            <div className="don-input-group don-full">
              <label>Aadhaar, PAN or Any ID Proof Number <span>*</span></label>
              <input type="text" name="idNumber" className="don-input" placeholder="Required for Tax Exemption (80G)" required onChange={handleChange} value={formData.idNumber} />
            </div>

            <div className="don-input-group don-full">
              <label>Remark (Optional)</label>
              <textarea name="remark" className="don-input" placeholder="Leave a message for our team..." onChange={handleChange} value={formData.remark}></textarea>
            </div>

            <div className="don-secure">
              <Lock size={16} /> 100% Secure & Tax Exempt under 80G
            </div>

            <button type="submit" className="don-submit-btn">Donate Securely</button>

          </form>
        </div>
      </main>

      <Footer />

      <SuccessModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)}
        title="Donation Successful!"
        message="Thank you for your generous contribution. Your support directly funds our field operations and community projects. A formal receipt will be sent to your email shortly."
      />
    </div>
  );
}
