import { useState, useCallback, useEffect } from 'react';
import './App.css';

import img1 from './assets/1.jpg';
import img2 from './assets/2.jpg';
import img3 from './assets/3.jpg';
import img4 from './assets/4.jpg';
import img5 from './assets/5.jpg';
import img6 from './assets/6.jpg';
import img7 from './assets/7.jpg';
import img8 from './assets/8.jpg';
import timg from './assets/tailimg.png';
import org1 from './assets/org1.png';
import org2 from './assets/org2.png';
import org3 from './assets/org3.png';

import imgMsiLogoBlack3 from './assets/msilogo.png';

function App() {
  const [count, setCount] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = useCallback((id) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 140;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      setMobileMenuOpen(false);
    }
  }, []);

  return (
    <>
      <nav className={`custom-navbar fixed-top ${scrolled ? 'shadow-md-custom' : ''}`}>
        <div className="container-fluid custom-nav-container">
          {/* Logo */}
          <div className="logo-img-container">
            <img alt="MSI Logo" className="logo-img" src={imgMsiLogoBlack3} />
          </div>

          {/* Desktop Navigation Links */}
          <div className="d-none d-lg-flex nav-desktop-links">
            <button onClick={() => scrollToSection('dates-section')} className="nav-link-custom">
              Important Dates
            </button>
            <button
              onClick={() => window.location.href = '/venue'}
              className="nav-link-custom"
              title="Venue"
            >
              Venue
            </button>
            <button
              onClick={() => window.open('https://design.iith.ac.in', '_blank')}
              className="nav-link-custom"
              title="IITH Design Department"
            >
              IITH Design Dept
            </button>
            <button
              onClick={() => alert('DIC website is currently under construction. Please check back soon!')}
              className="nav-link-custom"
              title="DIC"
            >
              DIC
            </button>
            <button onClick={() => scrollToSection('contact-section')} className="nav-link-custom">
              Contact
            </button>
            <button onClick={() => window.location.href = '/register'} className="register-btn-nav">
              Register Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="d-lg-none btn btn-light mobile-menu-btn"
            aria-label="Toggle navigation"
          >
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
              <button onClick={() => scrollToSection('dates-section')} className="mobile-nav-link">
                Important Dates
              </button>
              <button onClick={() => window.location.href = '/venue'} className="mobile-nav-link">
                Venue
              </button>
              <button onClick={() => window.open('https://design.iith.ac.in', '_blank')} className="mobile-nav-link">
                IITH Design Dept
              </button>
              <button onClick={() => alert('DIC website is currently under construction. Please check back soon!')} className="mobile-nav-link">
                DIC
              </button>
              <button onClick={() => scrollToSection('contact-section')} className="mobile-nav-link">
                Contact
              </button>
              <button onClick={() => window.location.href = '/register'} className="register-btn-nav" style={{ width: '100%', marginTop: '1em' }}>
                Register Now
              </button>
            </div>
          </div>
        )}
        <div className="nav-divider"></div>
      </nav>

      <main className="main-content-padding">
        <div className="main-content-wrapper">
          <div className="hero">
            <h1>Go Mobile,</h1>
            <h1>Stay Connected</h1>
            <h2>6th Mobile Studies Congress</h2>
            <h1 style={{ color: '#0F3' }}>August 21-22, 2026</h1>
            <h2>Venue: Indian Institute of Technology Hyderabad, India</h2>

            <a href="https://forms.cloud.microsoft/r/RhZq0aqFX0">
              <button className="cool-btn">Submit Abstract</button>
            </a>
          </div>

          <div className="bootstrap-scope">
            <div className="curosil">
              <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                {/* Carousel Indicators */}
                <div className="carousel-indicators">
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="5" aria-label="Slide 6"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="6" aria-label="Slide 7"></button>
                  <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="7" aria-label="Slide 8"></button>
                </div>

                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <img src={img1} className="d-block w-100" alt="Slide 1" />
                  </div>
                  <div className="carousel-item">
                    <img src={img2} className="d-block w-100" alt="Slide 2" />
                  </div>
                  <div className="carousel-item">
                    <img src={img3} className="d-block w-100" alt="Slide 3" />
                  </div>
                  <div className="carousel-item">
                    <img src={img4} className="d-block w-100" alt="Slide 4" />
                  </div>
                  <div className="carousel-item">
                    <img src={img5} className="d-block w-100" alt="Slide 5" />
                  </div>
                  <div className="carousel-item">
                    <img src={img6} className="d-block w-100" alt="Slide 6" />
                  </div>
                  <div className="carousel-item">
                    <img src={img7} className="d-block w-100" alt="Slide 7" />
                  </div>
                  <div className="carousel-item">
                    <img src={img8} className="d-block w-100" alt="Slide 8" />
                  </div>
                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>

          <div id="about">
            <h2 className="heading2" style={{ color: '#000' }}> About </h2>
            <p className='scontainer'>
              The 6th Mobile Studies Congress invites researchers, creative practitioners, designers, filmmakers, and industry professionals to submit papers and proposals for presentations, workshops, screenings, showcases, and panel discussions on the theme <span style={{ color: '#0057FF', fontFamily: "Cabinet Grotesk", fontWeight: 700 }}>"Go Mobile, Stay Connected".</span> This annual event examines the transformative impact of mobile media, cellphilming and smart technologies on our lives, society and creative industries. The congress will explore new ways to connect with culture, country, and communities. The 6th Mobile Studies Congress will also feature a screening of the Mobile Innovation Networks and Association (MINA) smartphone film festival. Selected conference papers and projects will be published in a special issue.
            </p>
          </div>

          <div className="AreasofInterest">
            <h2 className="heading2" style={{ color: '#0F3' }}> Areas of Interest </h2>
            <p style={{ color: '#fff' }}> We encourage contributions that address a wide range of topics related to mobile studies, mobile communication, creative mobile practices, smartphone filmmaking, mobile storytelling, and cellphilming, including but not limited to the following: </p>

            <p className="subheading"> Mobile Studies </p>
            <ul className="listofint">
              <li> Creator Economy </li>
              <li> The impact of mobile technologies on communication and social connections </li>
              <li> Mobile apps in education, health, and governance </li>
              <li> Mobile media and its societal implications </li>
              <li> Mobile data privacy and security concerns </li>
              <li> The future of mobile infrastructures and networks</li>
              <li> Cultural and ethical considerations in mobile technology adoption</li>
              <li> Mobile literacy and multimodal connectivity</li>
            </ul>

            <p className="subheading"> Cellphilm / Smartphone Filmmaking / Mobile Stories </p>
            <ul className="listofint">
              <li> Cellphilms as City Films </li>
              <li> Mobile Aesthetics </li>
              <li> Connecting to community through mobile storytelling </li>
              <li> Connecting to country through mobile storytelling </li>
              <li> Mobile creations </li>
              <li> Selfies, families, friends and peer-groups</li>
              <li> Young people for social change</li>
              <li> Activist groups and NGOs using mobile stories to capture those who have no voice</li>
              <li> Mobile XR</li>
            </ul>
          </div>

          {/* Format Section */}
          <div id="format-section">
            <h2 className="heading2" style={{ color: '#000' }}> Format </h2>
            <ul className="listofint">
              <li> Academic presentation (15min) </li>
              <ul className="listofintsub">
                <li> Creative arts research paper </li>
                <li> Design research paper </li>
                <li> Qualitative/Quantitative research paper </li>
              </ul>
              <li> Work-in-Progress / Discussion paper </li>
              <li> Lightening talks (5min) </li>
              <li> Roundtable discussion on mobile studies and mobile creative practice </li>
              <li> Workshop proposal </li>
              <li> Video essays</li>
              <li> Showcases</li>
              <li> Project and artefact exhibition</li>
              <li> Mobile story /Cellphilm / Smartphone film</li>
              <ul className="listofintsub">
                <li> A new MINA category spotlighting innovative and smart stories created with smartphones or other pocket cameras and mobile devices. Open to filmmakers, designers, artists, activists and storytellers, this category celebrates short mobile and digital stories (up to 8 minutes) that utilise mobile technology and smartphone filmmaking to craft compelling narratives around connecting to culture, country and communities. We seek entries that blend creativity with visual communication and storytelling ingenuity, showcasing mobile storytelling that inspires, informs, and engages audiences in new ways. Through this category, we aim to explore the intersection of creativity and innovation, promoting stories that engage audiences for social change and/or shape new experiences. </li>
              </ul>
            </ul>
          </div>

          {/* Submission Guidelines Section */}
          <div id="guidelines-section">
            <h2 className="heading2" style={{ color: '#000' }}> Submission Guidelines </h2>
            <ol className="listofint">
              <li> Abstracts should be kept within 300 words </li>
              <li> Submissions must be original and not previously presented or published. </li>
              <li> Please follow the APA style, the 7th edition </li>
              <li> All submissions will undergo a double-blind peer review process. </li>
            </ol>

            <div className="button-container">
              <a href="https://forms.cloud.microsoft/r/RhZq0aqFX0">
                <button className="down-btn">Submit your abstract</button>
              </a>

              <a href="https://filmfreeway.com/mina">
                <button className="down-btn">Submit your Mobile story / Cellphilm / Smartphone film</button>
              </a>
            </div>
          </div>

          {/* Important Dates Section */}
          <div id="dates-section">
            <h2 className="heading2" style={{ color: '#000' }}> Important Dates </h2>
            <hr></hr>
            <p>Abstract Submission Deadline: <span className='redd'>1st March, 2026</span> </p>
            <hr></hr>
            <p>Notification of Acceptance: 1st April, 2026</p>
            <hr></hr>
            <p> <span className='blued'> Join us </span> for this dynamic gathering at the Indian Institute of Technology Hyderabad, where thought leaders from around the globe will share insights, research, and innovations in mobile studies, mobile creative practice and cellphilms. Let us come together to shape the future of mobile connectivity, creativity and collaboration.</p>
          </div>

          {/* Organizers/Contact Section */}
          <div id="contact-section">
            <h2 className="heading2"> Organizers </h2>

            <div className="orgbox">
              <div className="orgimgcontainer">
                <img src={org1} className="orgimg" alt="Mobile Studies International logo" />
                <img src={org2} className="orgimg" alt="MINA logo" />
                <img src={org3} className="orgimg" alt="IIT Hyderabad logo" />
              </div>

              <div className="qbox">
                <div className="qboxcontent" style={{ color: '#000' }}>
                  <h4>For more information, please contact us at </h4>
                  <p>xiaogexu@zwu.edu.cn or MSchleser@swin.edu.au </p>
                  <a className="cool-btn" href="mailto:xiaogexu@zwu.edu.cn">
                    contact
                  </a>
                </div>

                <div className="timg">
                  <img src={timg} className="qboximg" alt="Contact illustration" />
                </div>
              </div>
            </div>

            <p style={{ color: '#fff' }}>We look forward to your submissions and an engaging congress!</p>
            <p style={{ color: '#fff' }}>The 6th MSC Team</p>

            <ul className="listofnone">
              <li>Anna Chiara Sabatino, University of Salerno, Italy</li>
              <li>Cati Alice, Università Cattolica del Sacro Cuore, Italy</li>
              <li>Claudia A Mitchell, McGill University, Canada</li>
              <li>Dafydd Sills-jones, Auckland University of Technology, New Zealand/Aotearoa</li>
              <li>Deepak John Mathew, Indian Institute of Technology Hyderabad, India</li>
              <li>Elly Telemelcos, Swinburne University of Technology, Australia</li>
              <li>Habib Moghimi, University of Sydney, Australia</li>
              <li>Kabil Khan, Daffodil International University, Bangladesh</li>
              <li>Laurent Antonczak, AcademyEX, New Zealand/Aotearoa</li>
              <li>Leann Brown, McGill University, Canada</li>
              <li>Max Schleser, Swinburne University of Technology, Australia</li>
              <li>Prof. Krishna Sankar Kusuma, AJKMCRC, India</li>
              <li>Shuai Li, Zhejiang Wanli University, China</li>
              <li>Sonali Srivastav, Indian Institute of Technology Hyderabad, India</li>
              <li>Twisha Singh, McGill University, Canada</li>
              <li>Xiaoge Xu, Zhejiang Wanli University, China</li>
            </ul>
          </div>
        </div>
      </main>

      <footer>
        © 2025 Mobile Studies Congress. All rights reserved.
      </footer>
    </>
  )
}

export default App