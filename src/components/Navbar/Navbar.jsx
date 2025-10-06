import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import './Navbar.css';
import logo from './logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-content">
          {/* Logo */}
          <div className="navbar-logo">
            <a href="#" className="logo-link">
              <img className='logo' src={logo} alt="" />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="desktop-nav">
            <div className="nav-links">
              <a href="#" className="nav-link">Home</a>
              <a href="#" className="nav-link">About</a>
              <a href="#" className="nav-link">Services</a>
              <a href="#" className="nav-link">Projects</a>
              <a href="#" className="nav-link">Contact</a>
            </div>
          </div>

          
          {/* Mobile menu button */}
          <div className="mobile-menu-button">
            <button onClick={toggleMenu} className="menu-toggle">
              {isOpen ? (
                <X className="menu-icon" />
              ) : (
                <Menu className="menu-icon" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div className={`mobile-nav ${isOpen ? 'mobile-nav-open' : 'mobile-nav-closed'}`}>
        <div className="mobile-nav-content">
          <a href="#" className="mobile-nav-link">Home</a>
          <a href="#" className="mobile-nav-link">About</a>
          <a href="#" className="mobile-nav-link">Services</a>
          <a href="#" className="mobile-nav-link">Portfolio</a>
          <a href="#" className="mobile-nav-link">Contact</a>
          <div className="mobile-cta">
            <button className="mobile-cta-button">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;