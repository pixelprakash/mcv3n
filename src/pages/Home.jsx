import React from 'react';

/* IMPORTANT: Import the original App.css FIRST to keep all existing styles */
import '../App.css';
/* Then import the padding override for ticker offset */
import '../styles/home.css';
import KeynoteSpeakers from '../components/KeynoteSpeakers';


import HeroParticle from '../components/HeroParticle';

import img1 from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.jpg';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.jpg';
import img6 from '../assets/6.jpg';
import img7 from '../assets/7.jpg';
import img8 from '../assets/8.jpg';
import timg from '../assets/tailimg.webp';
import org1 from '../assets/org1.png';
import org2 from '../assets/org2.png';
import org3 from '../assets/org3.png';

const REGISTER_URL = 'https://forms.cloud.microsoft/r/xH1YXgeYGR';

export default function Home() {
  return (
    <main className="main-content-padding">
      <div className="main-content-wrapper">
        {/* Hero */}
        <div className="hero">
           <HeroParticle />
          <h2>6th Mobile Studies Congress</h2>
          <h1 style={{ color: '#0F3' }}>August 21-22, 2026</h1>
          <h2>Venue: Indian Institute of Technology Hyderabad, India</h2>
          </div>

        {/* 
          <a href="https://forms.cloud.microsoft/r/xH1YXgeYGR">
            <button className="cool-btn">Register Now</button>
          </a>
         */}

        {/* Carousel */}
        <div className="bootstrap-scope">
          <div className="curosil">
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-indicators">
                {[...Array(8)].map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    data-bs-target="#carouselExampleIndicators"
                    data-bs-slide-to={i}
                    className={i === 0 ? 'active' : ''}
                    aria-current={i === 0 ? 'true' : undefined}
                    aria-label={`Slide ${i + 1}`}
                  />
                ))}
              </div>

              <div className="carousel-inner">
                {[img1, img2, img3, img4, img5, img6, img7, img8].map((img, i) => (
                  <div key={i} className={`carousel-item ${i === 0 ? 'active' : ''}`}>
                    <img src={img} className="d-block w-100" alt={`Slide ${i + 1}`} />
                  </div>
                ))}
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

        {/* About */}
        <div id="about">
          <h2 className="heading2" style={{ color: '#000' }}> About </h2>
          <p className="scontainer">
            The 6th Mobile Studies Congress invites researchers, creative practitioners, designers, filmmakers, and industry professionals to submit papers and proposals for presentations, workshops, screenings, showcases, and panel discussions on the theme <span style={{ color: '#0057FF', fontFamily: 'Cabinet Grotesk', fontWeight: 700 }}>"Go Mobile, Stay Connected".</span> This annual event examines the transformative impact of mobile media, cellphilming and smart technologies on our lives, society and creative industries. The congress will explore new ways to connect with culture, country, and communities. The 6th Mobile Studies Congress will also feature a screening of the Mobile Innovation Networks and Association (MINA) smartphone film festival. Selected conference papers and projects will be published in a special issue.
          </p>
        </div>
        <KeynoteSpeakers />

        {/* Areas of Interest */}
        <div className="AreasofInterest">
          <h2 className="heading2" style={{ color: '#0F3' }}> Areas of Interest </h2>
          <p style={{ color: '#fff' }}>
            We encourage contributions that address a wide range of topics related to mobile studies, mobile communication, creative mobile practices, smartphone filmmaking, mobile storytelling, and cellphilming, including but not limited to the following:
          </p>

          <p className="subheading"> Mobile Studies </p>
          <ul className="listofint">
            <li>Creator Economy</li>
            <li>The impact of mobile technologies on communication and social connections</li>
            <li>Mobile apps in education, health, and governance</li>
            <li>Mobile media and its societal implications</li>
            <li>Mobile data privacy and security concerns</li>
            <li>The future of mobile infrastructures and networks</li>
            <li>Cultural and ethical considerations in mobile technology adoption</li>
            <li>Mobile literacy and multimodal connectivity</li>
          </ul>

          <p className="subheading"> Cellphilm / Smartphone Filmmaking / Mobile Stories </p>
          <ul className="listofint">
            <li>Cellphilms as City Films</li>
            <li>Mobile Aesthetics</li>
            <li>Connecting to community through mobile storytelling</li>
            <li>Connecting to country through mobile storytelling</li>
            <li>Mobile creations</li>
            <li>Selfies, families, friends and peer-groups</li>
            <li>Young people for social change</li>
            <li>Activist groups and NGOs using mobile stories to capture those who have no voice</li>
            <li>Mobile XR</li>
          </ul>
        </div>

        {/* Format */}
        <div id="format-section">
          <h2 className="heading2" style={{ color: '#000' }}> Format </h2>
          <ul className="listofint">
            <li>Academic presentation (15min)
              <ul className="listofintsub">
                <li>Creative arts research paper</li>
                <li>Design research paper</li>
                <li>Qualitative/Quantitative research paper</li>
              </ul>
            </li>
            <li>Work-in-Progress / Discussion paper</li>
            <li>Lightening talks (5min)</li>
            <li>Roundtable discussion on mobile studies and mobile creative practice</li>
            <li>Workshop proposal</li>
            <li>Video essays</li>
            <li>Showcases</li>
            <li>Project and artefact exhibition</li>
            <li>Mobile story / Cellphilm / Smartphone film
              <ul className="listofintsub">
                <li>A new MINA category spotlighting innovative and smart stories created with smartphones or other pocket cameras and mobile devices. Open to filmmakers, designers, artists, activists and storytellers, this category celebrates short mobile and digital stories (up to 8 minutes) that utilise mobile technology and smartphone filmmaking to craft compelling narratives around connecting to culture, country and communities. We seek entries that blend creativity with visual communication and storytelling ingenuity, showcasing mobile storytelling that inspires, informs, and engages audiences in new ways. Through this category, we aim to explore the intersection of creativity and innovation, promoting stories that engage audiences for social change and/or shape new experiences.</li>
              </ul>
            </li>
          </ul>

          {/* Presentation Guidelines */}
          <div className="format-guidelines-section">
            <h2 className="heading2" style={{ color: '#000' }}> Presentation Guidelines </h2>
            <p className="format-guidelines-intro">All submissions should be made via our official submission portal, which will be emailed to all successfully registered applicants.</p>

            <div className="format-guidelines">
              <div className="format-guideline-card">
                <h4>1. Online / Offline Presentations</h4>
                <p className="format-deadline">Deadline: UTC 11:59 PM — 31st July, 2026</p>
                <p>You will be allotted a time-slot of 15 minutes for presentation and 5 minutes dedicated to any Q&A. In addition to the presentation file, please submit a camera-ready video recording of the respective authors presenting the slides as well.</p>
                <p><strong style={{ color: '#CC1400' }}>*Submitting the camera-ready presentation is mandatory.</strong></p>
                <p className="format-naming">Please name your files as:<br />
                  <code>AuthorName_Title_Category.pptx</code> and <code>AuthorName_Title_Category.mp4</code><br />
                  <span style={{ color: '#666', fontSize: '0.9em' }}>(e.g., Lee_TextualMobility_Online.pptx)</span>
                </p>
                <a href="https://docs.google.com/presentation/d/1KkvKo7iSvodOpRgp3-x97YVrowxHzFqV6huHVP8fLUQ/" target="_blank" rel="noopener noreferrer" className="down-btn">
                  Download Presentation Template (.pptx)
                </a>
              </div>

              <div className="format-guideline-card">
                <h4>2. Poster Presentation</h4>
                <p className="format-deadline">Deadline: UTC 11:59 PM — 31st July, 2026</p>
                <p>Poster Presentations must adhere to a maximum size of A1, made in a vertical orientation and strictly adhere to the provided template.</p>
                <p>On request, we will be happy to send you a template for Adobe InDesign, Adobe Illustrator, and Canva Affinity.</p>
                <p>The Department of Design also offers on-site printing on a pre-booking basis. If you would like to print and receive the poster through us, kindly select the option on the registration link.</p>
                <a href="https://docs.google.com/presentation/d/1ZjUmtFMmn_79ViWO7_drnVdTSu-Mk1FS/" target="_blank" rel="noopener noreferrer" className="down-btn">
                  Download Poster Template (.pptx)
                </a>
              </div>

              <div className="format-guideline-card">
                <h4>3. Full Paper Submission</h4>
                <p>Selected papers will be provided an opportunity to be published in an edited volume by reputed publishers. A separate email will be shared expressing the complete details of the full paper submission process.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Organizers / Contact (brief on home) */}
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
                <h4>For more information, please contact us at</h4>
                <div className="contact-emails">
                  <a href="mailto:mobilecongress2026@des.iith.ac.in">mobilecongress2026@des.iith.ac.in</a>
                  <a href="mailto:xiaogexu@zwu.edu.cn">xiaogexu@zwu.edu.cn</a>
                  <a href="mailto:MSchleser@swin.edu.au">MSchleser@swin.edu.au</a>
                  <a className="cool-btn" href="mailto:mobilecongress2026@des.iith.ac.in">contact</a>
                </div>
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
  );
}