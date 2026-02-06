import React, { useState, useEffect } from 'react';
import './VenueStyles.css';
import imgMsiLogo from './assets/msilogo.png';
import c11 from './assets/c11.jpg';
import c12 from './assets/c12.webp';
import c13 from './assets/c13.webp';
import c14 from './assets/c14.webp';
import c15 from './assets/c15.webp';
import c16 from './assets/c16.webp';
import c21 from './assets/c21.jpg';
import c22 from './assets/c22.webp';
import c23 from './assets/c23.webp';
import c24 from './assets/c24.webp';
import c25 from './assets/c25.webp';
import c26 from './assets/c26.webp';
import gh0 from './assets/gh0.jpg';
import gh1 from './assets/gh1.jpg';
import gh2 from './assets/gh2.jpg';
import gh3 from './assets/gh3.jpg';
import gh4 from './assets/gh4.jpg';
import gh5 from './assets/gh5.jpg';

const col1Images = [c11, c12, c13, c14, c15, c16];
const col2Images = [c21, c22, c23, c24, c25, c26];
const ghImages = [gh0, gh1, gh2, gh3, gh4, gh5];

// Double the images for seamless marquee loop
const ghMarquee = [...ghImages, ...ghImages];

function VenuePage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Gallery expanding effect
  useEffect(() => {
    const wrapper = document.getElementById('hyderabad-gallery');
    if (!wrapper) return;

    const columns = wrapper.querySelectorAll('.gallery-column');
    const handlers = [];

    columns.forEach((column) => {
      const handler = function () {
        const isExpanded = this.classList.contains('expanded');
        columns.forEach(c => c.classList.remove('expanded'));
        wrapper.classList.remove('has-expanded');
        if (!isExpanded) {
          this.classList.add('expanded');
          wrapper.classList.add('has-expanded');
        }
      };
      column.addEventListener('click', handler);
      handlers.push({ column, handler });
    });

    return () => {
      handlers.forEach(({ column, handler }) => {
        column.removeEventListener('click', handler);
      });
    };
  }, []);

  const navigateToMainPage = (sectionId) => {
    window.location.href = `/#${sectionId}`;
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* SAME Navbar as App.jsx — exact same classes */}
      <nav className={`custom-navbar fixed-top ${scrolled ? 'shadow-md-custom' : ''}`}>
        <div className="container-fluid custom-nav-container">
          <div className="logo-img-container" onClick={() => window.location.href = '/'} style={{ cursor: 'pointer' }}>
            <img alt="MSI Logo" className="logo-img" src={imgMsiLogo} />
          </div>

          <div className="d-none d-lg-flex nav-desktop-links">
            <button onClick={() => navigateToMainPage('dates-section')} className="nav-link-custom">
              Important Dates
            </button>
            <button onClick={() => window.location.href = '/venue'} className="nav-link-custom nav-link-active">
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
            <button onClick={() => window.location.href = '/register'} className="register-btn-nav">
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
              <button onClick={() => { window.location.href = '/venue'; setMobileMenuOpen(false); }} className="mobile-nav-link mobile-nav-link-active">Venue</button>
              <button onClick={() => window.open('https://design.iith.ac.in', '_blank')} className="mobile-nav-link">IITH Design Dept</button>
              <button onClick={() => alert('DIC website is currently under construction. Please check back soon!')} className="mobile-nav-link">DIC</button>
              <button onClick={() => navigateToMainPage('contact-section')} className="mobile-nav-link">Contact</button>
              <button onClick={() => { window.location.href = '/register'; setMobileMenuOpen(false); }} className="register-btn-nav" style={{ width: '100%', marginTop: '1em' }}>Register Now</button>
            </div>
          </div>
        )}
        <div className="nav-divider"></div>
      </nav>

      <main className="main-content-padding">
        {/* Hero Section */}
        <div className="venue-hero">
          <div className="venue-hero-content">
            <h2>Venue</h2>
            <h1>IIT Hyderabad</h1>
            <p>
              Indian Institute of Technology Hyderabad (IITH) is a premier national institute of science and technology,
              <strong> consistently ranked among the top ten engineering institutions in India.</strong> Established in 2008, it has gained
              global recognition for its "Fractal Academics" curriculum and its deep-rooted research collaboration with
              Japan. The institute operates from a sprawling, architecturally iconic 576-acre permanent campus in Kandi,
              Sangareddy. Guided by its motto "Inventing and Innovating in Technology for Humanity," IITH serves as a
              vibrant hub for interdisciplinary education, cutting-edge research, and a thriving startup ecosystem.
            </p>
          </div>

          <div className="venue-hero-slider">
            <div className="venue-slider-wrapper">
              <div className="venue-scroll-column">
                <div className="venue-scroll-track">
                  {[...col1Images, ...col1Images, ...col1Images].map((img, i) => (
                    <img key={`col1-${i}`} src={img} alt={`IITH Campus ${i + 1}`} className="venue-slider-image" />
                  ))}
                </div>
              </div>
              <div className="venue-scroll-column">
                <div className="venue-scroll-track venue-scroll-track-reverse">
                  {[...col2Images, ...col2Images, ...col2Images].map((img, i) => (
                    <img key={`col2-${i}`} src={img} alt={`IITH Campus ${i + 1}`} className="venue-slider-image" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Campus Tour Section */}
        <section className="campus-tour-section">
          <h2 className="heading2" style={{ color: '#0F3' }}>Take a campus tour</h2>
          <div className="video-wrapper">
            <iframe src="https://www.youtube.com/embed/4LzE-hS-jSE" title="IITH Campus Tour" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
          </div>
        </section>

        {/* Accommodation Section */}
        <section id="accommodation" className="accommodation-section">
          <h2 className="heading2" style={{ color: '#000' }}>Accommodation</h2>
          <h3 className="accommodation-subtitle">International Guest House</h3>
          <p className="accommodation-intro">
            The International Guest House at IITH offers premium, climate-controlled lodging featuring award-winning
            architecture. Located in the heart of the campus, it provides a seamless stay for conference delegates
            within walking distance of the Department of Design.
          </p>

          <div className="features-grid">
            <div className="feature-card">
              <h4>Prime Location</h4>
              <p>Just a 5-minute walk to the main conference venues.</p>
            </div>
            <div className="feature-card">
              <h4>Modern Amenities</h4>
              <p>Fully furnished rooms with high-speed Wi-Fi and in-house dining serving diverse cuisines.</p>
            </div>
            <div className="feature-card">
              <h4>Varied Stays</h4>
              <p>Options ranging from Standard rooms to Executive suites.</p>
            </div>
            <div className="feature-card">
              <h4>Campus Experience</h4>
              <p>Stay amidst the iconic, Japanese-inspired landscape of IITH.</p>
            </div>
          </div>

          <div className="booking-info-grid">
            <div className="booking-card">
              <h4>Booking Process</h4>
              <p>Rooms are allotted on a first-come, first-served basis. To reserve your stay, please contact the Guest House office directly.</p>
            </div>
            <div className="booking-card">
              <h4>Contact Details</h4>
              <p><strong>Email:</strong> office.gh@iith.ac.in</p>
              <p><strong>Requirement:</strong> Please mention your Conference Registration ID in the subject line.</p>
            </div>
          </div>

          {/* Marquee carousel — doubled images for seamless infinite loop */}
          <div className="scroll-container">
            <div className="scroll-track-horizontal">
              {ghMarquee.map((img, idx) => (
                <img key={idx} src={img} alt={`Guest House ${idx + 1}`} className="scroll-image" />
              ))}
            </div>
          </div>
        </section>

        {/* How to Reach Section */}
        <section className="how-to-reach-section">
          <h2 className="heading2" style={{ color: '#000' }}>How to Reach</h2>

          <div className="reach-intro">
            <p><strong>IIT Hyderabad Address:</strong> Indian Institute of Technology Hyderabad, Kandi, Sangareddy, Telangana 502284</p>
          </div>

          <div className="transport-grid">
            <div className="transport-card">
              <h4>From Airport</h4>
              <p className="transport-title">Rajiv Gandhi International Airport (RGIA)</p>
              <ul className="transport-details">
                <li><strong>By Taxi/Cab:</strong> Take ORR, exit at Patancheru, and follow NH65 towards IITH. (~60 km, 1 hour)</li>
                <li><strong>By Bus:</strong> Take PUSHPAK airport bus to Gachibowli, then board a bus towards Patancheru.</li>
              </ul>
            </div>

            <div className="transport-card">
              <h4>From Railway Stations</h4>
              <p className="transport-title">Major Railway Hubs</p>
              <ul className="transport-details">
                <li><strong>Secunderabad Station:</strong> Take city bus 219, 226, or 226A towards Patancheru (50 km)</li>
                <li><strong>Nampally Station:</strong> Board city bus from MGBS - routes 225C/A, 225C, 218, or 217</li>
                <li><strong>Lingampally Station:</strong> Take share auto to bus stop, then board district buses to IITH</li>
              </ul>
            </div>

            <div className="transport-card">
              <h4>By Metro</h4>
              <p className="transport-title">Hyderabad Metro</p>
              <ul className="transport-details">
                <li><strong>From MGBS:</strong> Board metro to Ameerpet, change to Miyapur line, then take bus to Patancheru</li>
                <li><strong>From JBS:</strong> Take metro to Miyapur, then bus towards Patancheru</li>
                <li><strong>Note:</strong> From Patancheru, board district buses to IITH</li>
              </ul>
            </div>

            <div className="transport-card">
              <h4>By Bus</h4>
              <p className="transport-title">Direct Routes</p>
              <ul className="transport-details">
                <li><strong>District Buses:</strong> From MGBS or JBS, board buses to Sangareddy/Zaheerabad/Narayankhed</li>
                <li><strong>City Buses:</strong> Routes 225C, 218, 217 from MGBS; Routes 219, 226 from JBS</li>
                <li><strong>Get down at:</strong> IITH bus stop</li>
              </ul>
            </div>

            <div className="transport-card">
              <h4>By Car</h4>
              <p className="transport-title">Self-Drive Routes</p>
              <ul className="transport-details">
                <li><strong>From Hyderabad City:</strong> Via Gachibowli - Lingampally - Patancheru - Isnapur (60-65 km)</li>
                <li><strong>From Airport:</strong> Take ORR, exit at Patancheru, follow NH65 to IITH</li>
                <li><strong>GPS Coordinates:</strong> Use Google Maps for real-time navigation</li>
              </ul>
            </div>

            <div className="transport-card">
              <h4>On Campus</h4>
              <p className="transport-title">Intra-IITH Travel</p>
              <ul className="transport-details">
                <li><strong>Campus Shuttle:</strong> Regular shuttle service within campus</li>
                <li><strong>Schedule:</strong> Check <a href="https://www.iith.ac.in/bus_schedule/" target="_blank" rel="noopener noreferrer">IITH Bus Schedule</a></li>
                <li><strong>Walking:</strong> Campus is pedestrian-friendly with well-marked pathways</li>
              </ul>
            </div>
          </div>

          <div className="campus-map-section">
            <h3 className="campus-map-title">Campus Map</h3>
            <div className="campus-map-embed">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3803.3346584473634!2d78.12236!3d17.59416!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb919ba5bb73f9%3A0x444287c56f2e7ded!2sIndian%20Institute%20of%20Technology%20Hyderabad!5e0!3m2!1sen!2sin!4v1234567890" width="100%" height="450" style={{ border: 0, borderRadius: '12px' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="IIT Hyderabad Campus Map"></iframe>
            </div>
          </div>
        </section>

        {/* Hyderabad Attractions Section */}
        <section className="attractions-section">
          <div className="attractions-header">
            <h2 className="heading2" style={{ color: '#000' }}>Explore Hyderabad</h2>
            <h3 className="accommodation-subtitle">Beyond the Campus</h3>
            <p className="attractions-subtitle">
              Discover Hyderabad's rich heritage and vibrant culture while attending the conference
            </p>
          </div>

          <div className="gallery-wrapper" id="hyderabad-gallery">
            <div className="gallery-column">
              <div className="gallery-link">
                <img src="https://images.pexels.com/photos/11321242/pexels-photo-11321242.jpeg" alt="Charminar" />
                <div className="gallery-overlay">
                  <h3>Charminar</h3>
                  <p>An iconic monument and mosque built in 1591, featuring stunning Indo-Islamic architecture at the heart of the old city. - 45 km from IITH</p>
                </div>
              </div>
            </div>

            <div className="gallery-column">
              <div className="gallery-link">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Golconda_Fort-_Hyderabad%2C_Telangana%2C_India.jpg/1920px-Golconda_Fort-_Hyderabad%2C_Telangana%2C_India.jpg" alt="Golconda Fort" />
                <div className="gallery-overlay">
                  <h3>Golkonda Fort</h3>
                  <p>A majestic fortress with remarkable acoustics and panoramic views of the city. - 40 km from IITH</p>
                </div>
              </div>
            </div>

            <div className="gallery-column">
              <div className="gallery-link">
                <img src="https://upload.wikimedia.org/wikipedia/commons/f/f5/Salar_jung_museum_hyderabad.jpg" alt="Salar Jung Museum" />
                <div className="gallery-overlay">
                  <h3>Salar Jung Museum</h3>
                  <p>One of India's largest museums housing rare art, antiques, and artifacts from around the world. - 50 km from IITH</p>
                </div>
              </div>
            </div>

            <div className="gallery-column">
              <div className="gallery-link">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Hussain_Sagar_Lake_Hyderabad.JPG/1920px-Hussain_Sagar_Lake_Hyderabad.JPG" alt="Hussain Sagar Lake" />
                <div className="gallery-overlay">
                  <h3>Hussain Sagar Lake</h3>
                  <p>A serene lake with a monolithic Buddha statue, perfect for evening strolls. - 45 km from IITH</p>
                </div>
              </div>
            </div>

            <div className="gallery-column">
              <div className="gallery-link">
                <img src="https://i0.wp.com/hyderabadtourpackage.in/images/places-to-visit/ramoji-film-city-hyderabad-entryfee-timings-tour-package-header.jpg?w=1921&ssl=1" alt="Ramoji Film City" />
                <div className="gallery-overlay">
                  <h3>Ramoji Film City</h3>
                  <p>World's largest film studio complex, offering immersive entertainment experiences. - 75 km from IITH</p>
                </div>
              </div>
            </div>

            <div className="gallery-column">
              <div className="gallery-link">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Nehuru_zoological_park_Hyderabad_India_Entrance.jpg/1920px-Nehuru_zoological_park_Hyderabad_India_Entrance.jpg" alt="Nehru Zoological Park" />
                <div className="gallery-overlay">
                  <h3>Nehru Zoological Park</h3>
                  <p>One of India's largest zoos with diverse wildlife and natural habitats. - 55 km from IITH</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer>
        © 2025 Mobile Studies Congress. All rights reserved.
      </footer>
    </>
  );
}

export default VenuePage;