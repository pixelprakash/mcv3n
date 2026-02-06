import React, { useState, useEffect } from 'react';
import './RegistrationStyles.css';
import imgMsiLogo from './assets/msilogo.png';

function RegistrationPage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateToMainPage = (sectionId) => {
    window.location.href = `/#${sectionId}`;
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* SAME Navbar as App.jsx */}
      <nav className={`custom-navbar fixed-top ${scrolled ? 'shadow-md-custom' : ''}`}>
        <div className="container-fluid custom-nav-container">
          <div className="logo-img-container" onClick={() => window.location.href = '/'} style={{ cursor: 'pointer' }}>
            <img alt="MSI Logo" className="logo-img" src={imgMsiLogo} />
          </div>

          <div className="d-none d-lg-flex nav-desktop-links">
            <button onClick={() => navigateToMainPage('dates-section')} className="nav-link-custom">
              Important Dates
            </button>
            <button onClick={() => window.location.href = '/venue'} className="nav-link-custom">
              Venue
            </button>
            <button onClick={() => window.open('https://design.iith.ac.in', '_blank')} className="nav-link-custom">
              IITH Design Dept
            </button>
            <button onClick={() => alert('DIC website is currently under construction. Please check back soon!')} className="nav-link-custom">
              DIC
            </button>
            <button onClick={() => navigateToMainPage('contact-section')} className="nav-link-custom">
              Contact
            </button>
            <button onClick={() => window.location.href = '/register'} className="register-btn-nav nav-link-active">
              Register Now
            </button>
          </div>

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

        {mobileMenuOpen && (
          <div className="d-lg-none mobile-menu-dropdown">
            <div className="mobile-menu-links">
              <button onClick={() => navigateToMainPage('dates-section')} className="mobile-nav-link">Important Dates</button>
              <button onClick={() => window.location.href = '/venue'} className="mobile-nav-link">Venue</button>
              <button onClick={() => window.open('https://design.iith.ac.in', '_blank')} className="mobile-nav-link">IITH Design Dept</button>
              <button onClick={() => alert('DIC website is currently under construction. Please check back soon!')} className="mobile-nav-link">DIC</button>
              <button onClick={() => navigateToMainPage('contact-section')} className="mobile-nav-link">Contact</button>
              <button onClick={() => window.location.href = '/register'} className="register-btn-nav mobile-nav-link-active" style={{ width: '100%', marginTop: '1em' }}>Register Now</button>
            </div>
          </div>
        )}
        <div className="nav-divider"></div>
      </nav>

      <main className="main-content-padding">
        <div className="register-hero">
          <h1>Registrations will be open very soon</h1>
        </div>
      </main>

      <footer>
        © 2025 Mobile Studies Congress. All rights reserved.
      </footer>
    </>
  );
}

export default RegistrationPage;