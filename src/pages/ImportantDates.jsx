import React from 'react';

/* Import original App.css for shared styles */
import '../App.css';
import '../styles/hero-page.css';

const REGISTER_URL = 'https://events.humanitix.com/6th-msc';

const DATES = [
  {
    label: 'Abstract Submission Deadline',
    date: '20th March, 2026',
    status: 'closed',
  },
  {
    label: 'Notification of Acceptance',
    date: '1st April, 2026',
    status: 'closed',
  },
  {
    label: 'Registration Deadline',
    date: '21st May, 2026',
    status: 'open',
  },
  {
    label: 'Congress Dates',
    date: 'August 21–22, 2026',
    status: 'upcoming',
  },
];

export default function ImportantDates() {
  return (
    <main>
      {/* Hero */}
      <section className="hero-page-hero">
        <h1>Important Dates</h1>
        <p className="hero-page-subtitle">
          Key milestones for the 6th Mobile Studies Congress at IIT Hyderabad
        </p>
      </section>

      {/* Timeline */}
      <section className="hero-page-body">
        <div className="dates-timeline">
          {DATES.map((item, i) => (
            <div key={i} className={`dates-timeline-item dates-status-${item.status}`}>
              <div className="dates-timeline-marker">
                <div className="dates-marker-dot" />
                {i < DATES.length - 1 && <div className="dates-marker-line" />}
              </div>
              <div className="dates-timeline-content">
                <span className="dates-label">{item.label}</span>
                <span className="dates-value">{item.date}</span>
                {item.status === 'open' && (
                  <span className="dates-badge-open">Registrations Open</span>
                )}
                {item.status === 'closed' && (
                  <span className="dates-badge-closed">Completed</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="dates-cta">
          <p>
            Join us for this dynamic gathering at the Indian Institute of Technology Hyderabad, where thought leaders from around the globe will share insights, research, and innovations in mobile studies, mobile creative practice and cellphilms.
          </p>
          <div className="dates-cta-buttons">
            <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" className="dates-btn-primary">
              Register Now
            </a>
            <a href="https://forms.cloud.microsoft/r/RhZq0aqFX0" className="dates-btn-secondary">
              Submit Abstract
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}