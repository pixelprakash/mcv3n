import React from 'react';
const SPEAKERS = [
  {
    name: 'Prof. Deepak John Mathew',
    affiliation: 'Indian Institute of Technology Hyderabad, India',
    image: '/speakers/deepak.webp',
    linkedin: 'https://www.linkedin.com/in/deepak-john-mathew-b079ab1a/',
    day: 'Day 1',
  },
  {
    name: 'Prof. Ida Fatimawati Adi Badiozaman',
    affiliation: 'Swinburne University of Technology, Sarawak, Malaysia',
    image: '/speakers/ida.webp',
    linkedin: 'https://www.linkedin.com/in/prof-ida-fatimawati-adibadiozaman/',
    online: true,
    day: 'Day 1',
  },
  {
    name: 'Prof. Krishna Sankar Kusuma',
    affiliation: 'AJK Mass Communication Research Centre, India',
    image: '/speakers/krishna.webp',
    linkedin: 'https://www.linkedin.com/in/krishna-sankar-kusuma-889b77179/',
    day: 'Day 1',
  },
  {
    name: 'Prof. Max Schleser',
    affiliation: 'Swinburne University of Technology, Australia',
    image: '/speakers/max.webp',
    linkedin: 'https://www.linkedin.com/in/maxschleser/',
    day: 'Day 1',
  },
  {
    name: 'Prof. Nina Sabnani',
    affiliation: 'Indian Institute of Technology Bombay, India',
    image: '/speakers/nina.webp',
    linkedin: 'https://www.linkedin.com/in/nina-sabnani-8a02323/',
    day: 'Day 1',
  },
  {
    name: 'Prof. Xiaoge Xu',
    affiliation: 'Zhejiang Wanli University, China',
    image: '/speakers/xiaoge.webp',
    linkedin: 'https://www.linkedin.com/in/xiaoge/',
    day: 'Day 1',
  },
  {
    name: 'Dr. Anna Chiara Sabatino',
    coSpeaker: 'Dr. Filippo Fimiani',
    affiliation: 'University of Salerno, Italy',
    image: '/speakers/anna.webp',
    linkedin: 'https://www.linkedin.com/in/anna-chiara-sabatino-801212413/',
    online: true,
    day: 'Day 2',
  },
  {
    name: 'Dr. Filippo Fimiani',
    coSpeaker: 'Dr. Anna Chiara Sabatino',
    affiliation: 'University of Salerno, Italy',
    image: '/speakers/filippo.webp',
    linkedin: '#',
    online: true,
    day: 'Day 2',
  },
  {
    name: 'Prof. Kaya Barry',
    affiliation: 'Griffith University, Queensland, Australia',
    image: '/speakers/kaya.webp',
    linkedin: 'https://www.linkedin.com/in/kaya-barry-b04a4025a/',
    day: 'Day 2',
  },
  {
    name: 'Dr. Dafydd Sills-Jones',
    affiliation: 'Auckland University of Technology, New Zealand',
    image: '/speakers/dafydd.webp',
    linkedin: 'https://www.linkedin.com/in/dafyddsillsjones/',
    day: 'Day 3',
  },
];

function SpeakerCard({ speaker }) {
  const initials = speaker.name
    .replace(/Prof\.|Dr\./g, '')
    .trim()
    .split(' ')
    .map(w => w[0])
    .join('')
    .slice(0, 2);

  return (
    <div className="spk-card">
      <div className="spk-img-wrap">
        <div className="spk-img-placeholder" aria-hidden="true">
          <span className="spk-initials">{initials}</span>
        </div>
        <img
          src={speaker.image}
          alt={speaker.name}
          className="spk-img"
          loading="lazy"
          onError={(e) => { e.target.style.display = 'none'; }}
        />
        <div className="spk-reveal">
          <p className="spk-reveal-name">{speaker.name}</p>
          {speaker.coSpeaker && <p className="spk-reveal-co">& {speaker.coSpeaker}</p>}
          <p className="spk-reveal-aff">{speaker.affiliation}</p>
        </div>
        <span className="spk-day">{speaker.day}</span>
        {speaker.online && <span className="spk-online">Online</span>}
      </div>
      <div className="spk-info">
        <div className="spk-info-text">
          <h3 className="spk-name">{speaker.name}</h3>
          <p className="spk-aff">{speaker.affiliation}</p>
        </div>
        <a
          href={speaker.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="spk-li"
          aria-label={`${speaker.name} LinkedIn`}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
        </a>
      </div>
    </div>
  );
}

export default function KeynoteSpeakers() {
  return (
    <section className="spk-section">
      <h2 className="heading2"> Keynote Speakers </h2>
      {/* <p style={{ color: '#fff', marginBottom: '2em' }}>Leading voices in mobile studies, creative practice, and digital culture</p> */}
      <div className="spk-grid">
        {SPEAKERS.map((s, i) => (
          <SpeakerCard key={i} speaker={s} />
        ))}
      </div>

      <style>{`
        .spk-section {
          background: #23262E;
          padding: 5em 1.5em;
        }
        @media (min-width: 768px)  { .spk-section { padding: 6em 3em; } }
        @media (min-width: 1024px) { .spk-section { padding: 6em 5em; } }
        @media (min-width: 1400px) { .spk-section { padding: 6em 7.5em; } }

        .spk-section .heading2 {
          color: #fff;
        }

        .spk-subtitle {
          font-family: Avenir, sans-serif;
          font-size: clamp(0.9rem, 1.6vw, 1.1rem) !important;
          color: rgba(255,255,255,0.4) !important;
          margin: -0.5em 0 3em !important;
          line-height: 1.5;
        }

        /* ── Grid: 5 per row ── */
        .spk-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5em;
}

        /* ── Card ── */
        .spk-card {
  background: #fff;
  border-radius: 10px;
  overflow: hidden;
  border: 1px solid transparent;
  transition: box-shadow 0.3s, border-color 0.3s;
}

       .spk-card:hover {
  box-shadow: 0 10px 30px rgba(0, 87, 255, 0.12);
  border-color: #00FF33;
}

        /* ── Image ── */
        .spk-img-wrap {
          position: relative;
          width: 100%;
          aspect-ratio: 3 / 4;
          overflow: hidden;
          background: #e8e4dc;
        }

        .spk-img-placeholder {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #0057FF 0%, #003fcc 100%);
        }

        .spk-initials {
          font-family: 'Cabinet Grotesk', sans-serif;
          font-size: 2rem;
          font-weight: 800;
          color: rgba(255,255,255,0.12);
          user-select: none;
        }

        .spk-img {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          filter: grayscale(25%);
          transition: filter 0.5s, transform 0.5s cubic-bezier(.16,1,.3,1);
        }

        .spk-card:hover .spk-img {
          filter: grayscale(0%);
          transform: scale(1.04);
        }

        /* ── Circle reveal ── */
        .spk-reveal {
          position: absolute;
          inset: 0;
          background: rgba(0, 87, 255, 0.9);
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 1.25em;
          text-align: center;
          clip-path: circle(0% at 50% 50%);
          transition: clip-path 0.5s cubic-bezier(.16,1,.3,1);
          z-index: 2;
        }

        .spk-card:hover .spk-reveal {
          clip-path: circle(75% at 50% 50%);
        }

        .spk-reveal-name {
          font-family: 'Cabinet Grotesk', sans-serif;
          font-size: clamp(0.78rem, 1.2vw, 0.95rem);
          font-weight: 700;
          color: #fff;
          line-height: 1.3;
          margin: 0;
          opacity: 0;
          transform: translateY(8px);
          transition: opacity 0.25s 0.12s, transform 0.25s 0.12s;
        }

        .spk-card:hover .spk-reveal-name {
          opacity: 1;
          transform: translateY(0);
        }

        .spk-reveal-co {
          font-family: Avenir, sans-serif;
          font-size: 0.7rem;
          color: rgba(255,255,255,0.7);
          margin: 0.3em 0 0;
          opacity: 0;
          transition: opacity 0.25s 0.18s;
        }

        .spk-card:hover .spk-reveal-co { opacity: 1; }

        .spk-reveal-aff {
          font-family: Avenir, sans-serif;
          font-size: clamp(0.65rem, 1vw, 0.75rem);
          color: rgba(255,255,255,0.5);
          margin: 0.6em 0 0;
          line-height: 1.4;
          opacity: 0;
          transform: translateY(6px);
          transition: opacity 0.25s 0.2s, transform 0.25s 0.2s;
        }

        .spk-card:hover .spk-reveal-aff {
          opacity: 1;
          transform: translateY(0);
        }

        /* ── Online badge ── */
        .spk-online {
  position: absolute;
  top: 10px;
  right: 10px;
  z-index: 3;
  font-family: Avenir, sans-serif;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #059669;
  background: #fff;
  border: none;
  padding: 5px 12px;
  border-radius: 100px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
}

        /* ── Info bar ── */
        .spk-info {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.75em;
  padding: 1.1em 1.15em;
}
        .spk-info-text {
          min-width: 0;
          flex: 1;
        }

        .spk-name {
          font-family: 'Cabinet Grotesk', sans-serif !important;
          font-size: 0.88rem !important;
          font-weight: 700 !important;
          color: #23262E !important;
          margin: 0 !important;
          line-height: 1.3 !important;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .spk-aff {
          font-family: Avenir, sans-serif !important;
          font-size: 0.74rem !important;
          color: #999 !important;
          margin: 0.15em 0 0 !important;
          line-height: 1.3 !important;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .spk-li {
          flex-shrink: 0;
          width: 34px; height: 34px;
          border-radius: 50%;
          border: 1px solid #e5e5e5;
          color: #ccc;
          display: flex;
          align-items: center;
          justify-content: center;
          text-decoration: none;
          transition: color 0.2s, border-color 0.2s, transform 0.25s cubic-bezier(.34,1.56,.64,1);
        }

        .spk-li:hover {
          color: #0057FF;
          border-color: #0057FF;
          transform: scale(1.1);
        }


        .spk-day {
  position: absolute;
  top: 10px;
  left: 10px;
  z-index: 3;
  font-family: Avenir, sans-serif;
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #0057FF;
  background: #fff;
  padding: 5px 12px;
  border-radius: 100px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  line-height: 1;
}


        /* ═══ Responsive ═══ */
       @media (max-width: 1100px) {
  .spk-grid {
    grid-template-columns: repeat(3, 1fr);
  }
}

        @media (max-width: 860px) {
          .spk-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        @media (max-width: 600px) {
          .spk-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 0.9em;
          }
          .spk-img-wrap { aspect-ratio: 3 / 3.5; }
          .spk-initials { font-size: 1.6rem; }
        }

        @media (max-width: 380px) {
          .spk-grid {
            grid-template-columns: 1fr;
          }
        }

        /* Touch: tap to reveal */
        @media (hover: none) {
          .spk-card:active .spk-reveal { clip-path: circle(75% at 50% 50%); }
          .spk-card:active .spk-reveal-name { opacity: 1; transform: translateY(0); }
          .spk-card:active .spk-reveal-co { opacity: 1; }
          .spk-card:active .spk-reveal-aff { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}