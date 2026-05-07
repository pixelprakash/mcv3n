import React from 'react';

/* Import original App.css for shared styles */
import '../App.css';
import '../styles/hero-page.css';

import org1 from '../assets/org1.png';
import org2 from '../assets/org2.png';
import org3 from '../assets/org3.png';

const CONTACTS = [
  { name: 'Conference Email', email: 'mobilecongress2026@des.iith.ac.in' },
  { name: 'Xiaoge Xu', email: 'xiaogexu@zwu.edu.cn' },
  { name: 'Max Schleser', email: 'MSchleser@swin.edu.au' },
];

const TEAM = [
  'Anna Chiara Sabatino, University of Salerno, Italy',
  'Cati Alice, Università Cattolica del Sacro Cuore, Italy',
  'Claudia A Mitchell, McGill University, Canada',
  'Dafydd Sills-jones, Auckland University of Technology, New Zealand/Aotearoa',
  'Deepak John Mathew, Indian Institute of Technology Hyderabad, India',
  'Elly Telemelcos, Swinburne University of Technology, Australia',
  'Habib Moghimi, University of Sydney, Australia',
  'Kabil Khan, Daffodil International University, Bangladesh',
  'Laurent Antonczak, AcademyEX, New Zealand/Aotearoa',
  'Leann Brown, McGill University, Canada',
  'Max Schleser, Swinburne University of Technology, Australia',
  'Prof. Krishna Sankar Kusuma, AJKMCRC, India',
  'Shuai Li, Zhejiang Wanli University, China',
  'Sonali Srivastav, Indian Institute of Technology Hyderabad, India',
  'Twisha Singh, McGill University, Canada',
  'Xiaoge Xu, Zhejiang Wanli University, China',
];

export default function Contact() {
  return (
    <main>
      {/* Hero */}
      <section className="hero-page-hero">
        <h1>Get in Touch</h1>
        <p className="hero-page-subtitle">
          For queries regarding submissions, registration, or general inquiries about the 6th Mobile Studies Congress
        </p>
      </section>

      {/* Content */}
      <section className="hero-page-body">
        {/* Organizer logos */}
        <div className="contact-org-logos">
          <img src={org1} alt="Mobile Studies International" />
          <img src={org2} alt="MINA" />
          <img src={org3} alt="IIT Hyderabad" />
        </div>

        {/* Contact cards */}
        <div className="contact-cards-grid">
          {CONTACTS.map((c) => (
            <a key={c.email} href={`mailto:${c.email}`} className="contact-card">
              <span className="contact-card-label">{c.name}</span>
              <span className="contact-card-email">{c.email}</span>
              <span className="contact-card-arrow">→</span>
            </a>
          ))}
        </div>

        {/* Team */}
        <div className="contact-team-section">
          <h2>The 6th MSC Organizing Committee</h2>
          <p className="contact-team-intro">
            We look forward to your submissions and an engaging congress!
          </p>
          <div className="contact-team-grid">
            {TEAM.map((member, i) => {
              const [name, ...rest] = member.split(',');
              return (
                <div key={i} className="contact-team-member">
                  <span className="member-name">{name}</span>
                  <span className="member-affiliation">{rest.join(',').trim()}</span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}