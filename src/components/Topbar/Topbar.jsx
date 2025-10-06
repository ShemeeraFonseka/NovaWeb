import React, { useState } from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, X, Bell } from 'lucide-react';
import './Topbar.css';

const Topbar = () => {
  const [isVisible, setIsVisible] = useState(true);

  const hideTopbar = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="topbar">
      <div className="topbar-container">
        <div className="topbar-content">
          {/* Left Section - Contact Info */}
          <div className="topbar-left">
            <div className="contact-item contact-phone">
              <Phone className="contact-icon" />
              <span>+94 198 5282</span>
            </div>
            <div className="contact-item contact-email">
              <Mail className="contact-icon" />
              <span>novawebsolutions.lk@gmail.com</span>
            </div>
            
          </div>

          

          {/* Right Section - Social Links & Utilities */}
          <div className="topbar-right">
            {/* Social Links */}
            <div className="social-links">
              <a href="#" className="social-link">
                <Facebook className="social-icon" />
              </a>
              <a href="#" className="social-link">
                <Twitter className="social-icon" />
              </a>
              <a href="#" className="social-link">
                <Instagram className="social-icon" />
              </a>
            </div>

            

            {/* Close Button */}
            <button
              onClick={hideTopbar}
              className="close-button"
              aria-label="Close topbar"
            >
              <X className="close-icon" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile-only bottom section */}
      <div className="mobile-section">
        <div className="mobile-content">
          <div className="mobile-contacts">
            <div className="mobile-contact">
              <Phone className="mobile-icon" />
              <span>(555) 123-4567</span>
            </div>
            <div className="mobile-contact">
              <Mail className="mobile-icon" />
              <span>info@company.com</span>
            </div>
          </div>
          <div className="mobile-social">
            <a href="#" className="mobile-social-link">
              <Facebook className="mobile-social-icon" />
            </a>
            <a href="#" className="mobile-social-link">
              <Twitter className="mobile-social-icon" />
            </a>
            <a href="#" className="mobile-social-link">
              <Instagram className="mobile-social-icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;