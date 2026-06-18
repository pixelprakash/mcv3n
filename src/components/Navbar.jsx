import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import imgMsiLogo from '../assets/msilogo.png';
import '../styles/navbar.css';

const REGISTER_URL = 'https://forms.cloud.microsoft/r/xH1YXgeYGR';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { label: 'Important Dates', to: '/important-dates' },
    { label: 'Accommodation', to: '/venue' },
    { label: 'IITH Design Dept', href: 'https://design.iith.ac.in', external: true },
    { label: 'DIC', to: '/dic' },
    { label: 'Contact', to: '/contact' },
  ];

  return (
    <nav className={`custom-navbar fixed-top ${scrolled ? 'shadow-md-custom' : ''}`}>
      <div className="container-fluid custom-nav-container">
        <Link to="/" className="logo-img-container">
          <img alt="MSI Logo" className="logo-img" src={imgMsiLogo} />
        </Link>

        {/* Desktop Nav */}
        <div className="d-none d-lg-flex nav-desktop-links">
          {navLinks.map((link) =>
            link.external ? (
              <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="nav-link-custom">
                {link.label}
              </a>
            ) : (
              <Link key={link.label} to={link.to} className={`nav-link-custom ${isActive(link.to) ? 'nav-link-active' : ''}`}>
                {link.label}
              </Link>
            )
          )}
          <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" className="register-btn-nav">
            Register Now
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="d-lg-none btn btn-light mobile-menu-btn" aria-label="Toggle navigation">
          {mobileMenuOpen ? (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="3" x2="21" y1="6" y2="6" />
              <line x1="3" x2="21" y1="12" y2="12" />
              <line x1="3" x2="21" y1="18" y2="18" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="d-lg-none mobile-menu-dropdown">
          <div className="mobile-menu-links">
            {navLinks.map((link) =>
              link.external ? (
                <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className="mobile-nav-link">
                  {link.label}
                </a>
              ) : (
                <Link key={link.label} to={link.to} className={`mobile-nav-link ${isActive(link.to) ? 'mobile-nav-link-active' : ''}`}>
                  {link.label}
                </Link>
              )
            )}
            <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" className="register-btn-nav" style={{ width: '100%', marginTop: '1em' }}>
              Register Now
            </a>
          </div>
        </div>
      )}
      <div className="nav-divider"></div>
    </nav>
  );
}