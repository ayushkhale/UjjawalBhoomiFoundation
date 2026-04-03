import React, { useEffect } from 'react';
import './SuccessModal.css';
import { CheckCircle, X } from 'lucide-react';

const SuccessModal = ({ isOpen, onClose, title, message }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="success-modal-overlay">
      <div className="success-modal-glow don-glow-1"></div>
      <div className="success-modal-glow don-glow-2"></div>
      
      <div className="success-modal-card">
        <button className="success-modal-close" onClick={onClose}>
          <X size={24} />
        </button>
        
        <div className="success-modal-content">
          <div className="success-modal-icon-wrap">
            <div className="success-modal-icon-bg"></div>
            <CheckCircle className="success-modal-icon" size={60} strokeWidth={1.5} />
          </div>
          
          <h2 className="success-modal-title">{title || "Successfully Submitted!"}</h2>
          <p className="success-modal-text">
            {message || "Thank you for reaching out. Our team will review your application and get back to you shortly."}
          </p>
          
          <button className="success-modal-btn" onClick={onClose}>
            Got it, thanks!
          </button>
        </div>
      </div>
    </div>
  );
};

export default SuccessModal;
