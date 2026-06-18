import React, { useState } from 'react';

import '../App.css';
import '../styles/contact.css';

import cpImg from '../assets/cp_img.png';
import org1 from '../assets/org1.png';
import org2 from '../assets/org2.png';
import org3 from '../assets/org3.png';

const TEAM = [
  { name: 'Prof. Anna Chiara Sabatino', aff: 'University of Salerno, Italy' },
  { name: 'Prof. Cati Alice', aff: 'Università Cattolica del Sacro Cuore, Italy' },
  { name: 'Prof. Claudia A. Mitchell', aff: 'McGill University, Canada' },
  { name: 'Dr. Dafydd Sills-Jones', aff: 'Auckland University of Technology, New Zealand/Aotearoa' },
  { name: 'Prof. Deepak John Mathew', aff: 'Indian Institute of Technology Hyderabad, India' },
  { name: 'Dr. Elly Telemelcos', aff: 'Swinburne University of Technology, Australia' },
  { name: 'Prof. Habib Moghimi', aff: 'University of Sydney, Australia' },
  { name: 'Prof. Kabil Khan', aff: 'Daffodil International University, Bangladesh' },
  { name: 'Dr. Laurent Antonczak', aff: 'AcademyEX, New Zealand/Aotearoa' },
  { name: 'Prof. Leann Brown', aff: 'McGill University, Canada' },
  { name: 'Dr. Max Schleser', aff: 'Swinburne University of Technology, Australia' },
  { name: 'Prof. Krishna Sankar Kusuma', aff: 'AJKMCRC, India' },
  { name: 'Prof. Shuai Li', aff: 'Zhejiang Wanli University, China' },
  { name: 'Dr. Sonali Srivastav', aff: 'Indian Institute of Technology Hyderabad, India' },
  { name: 'Prof. Twisha Singh', aff: 'McGill University, Canada' },
  { name: 'Dr. Xiaoge Xu', aff: 'Zhejiang Wanli University, China' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailto = `mailto:mobilecongress2026@des.iith.ac.in?subject=${encodeURIComponent(form.subject || 'Inquiry — 6th MSC')}&body=${encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`;
    window.location.href = mailto;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <main>
      {/* ── Hero ── */}
      <section className="cp-hero">
        <h1 className="cp-title">Contact Us</h1>
        <p className="cp-subtitle">
          Have a question about submissions, registration, or the congress? We'd love to hear from you.
        </p>
        <a href="mailto:mobilecongress2026@des.iith.ac.in" className="cp-hero-email">
          mobilecongress2026@des.iith.ac.in
        </a>
      </section>

      {/* ── Body ── */}
      <section className="cp-body">

        {/* Form + Photo side by side */}
        <div className="cp-split">
          <div className="cp-form-wrap">
            <h2 className="cp-form-heading">Send us a message</h2>
            <div className="cp-form-row">
              <div className="cp-field">
                <label htmlFor="cp-name" className="cp-label">Your name <span className="cp-req">*</span></label>
                <input id="cp-name" name="name" type="text" required autoComplete="name" placeholder="Dr. Jane Doe" className="cp-input" value={form.name} onChange={handleChange} />
              </div>
              <div className="cp-field">
                <label htmlFor="cp-email" className="cp-label">Email address <span className="cp-req">*</span></label>
                <input id="cp-email" name="email" type="email" required autoComplete="email" placeholder="jane@university.edu" className="cp-input" value={form.email} onChange={handleChange} />
              </div>
            </div>
            <div className="cp-field">
              <label htmlFor="cp-subject" className="cp-label">Subject</label>
              <input id="cp-subject" name="subject" type="text" placeholder="Abstract submission inquiry" className="cp-input" value={form.subject} onChange={handleChange} />
            </div>
            <div className="cp-field">
              <label htmlFor="cp-message" className="cp-label">How can we help? <span className="cp-req">*</span></label>
              <textarea id="cp-message" name="message" required rows="4" placeholder="Tell us about your query..." className="cp-input cp-textarea" value={form.message} onChange={handleChange} />
            </div>
            <button type="submit" className="cp-submit" onClick={handleSubmit} disabled={sent}>
              {sent ? '✓ Opening mail client...' : 'Send your message'}
            </button>
          </div>

          <div className="cp-photo-side">
            <img src={cpImg} alt="IMSC 2020 group photo" className="cp-photo" loading="lazy" />
            <p className="cp-photo-caption">IMSC 2020 · University of Nottingham, China</p>
          </div>
        </div>

        {/* Organizers */}
        <div className="cp-org">
          <div className="cp-org-logos">
            <img src={org1} alt="Mobile Studies International" className="cp-org-logo" />
            <img src={org2} alt="MINA" className="cp-org-logo" />
            <img src={org3} alt="IIT Hyderabad" className="cp-org-logo" />
          </div>

          <h2 className="cp-org-title">The 6th MSC Organizing Committee</h2>

          <div className="cp-team">
            {TEAM.map((m, i) => (
              <div key={i} className="cp-member">
                <span className="cp-member-name">{m.name}</span>
                <span className="cp-member-aff">{m.aff}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}