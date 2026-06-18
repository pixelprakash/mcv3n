import React, { useState } from 'react';
import '../App.css';
import '../styles/impdates.css';

const REGISTER_URL = 'https://events.humanitix.com/6th-msc/tickets';

const DATES = [
  { label: 'Abstract Submission Deadline', date: '20th March, 2026', status: 'closed' },
  { label: 'Notification of Acceptance', date: '1st April, 2026', status: 'closed' },
  { label: 'Travel Clearance Form Deadline', date: '4th June, 2026', status: 'closed' },
  { label: 'Registration Deadline', date: '6th June, 2026', status: 'closed' },
  { label: 'Late Registrations', date: 'Opening soon', status: 'upcoming' },
  { label: 'Congress Dates', date: 'August 21–23, 2026', status: 'upcoming' },
];

const DAYS = [
  {
    id: 1, label: 'Day 1', date: 'Aug 21', title: 'Main Congress',
    blocks: [
      { time: '08:00', end: '09:00', sessions: [
        { title: 'Registration', type: 'break', desc: 'Desk at Department of Design Entrance' },
      ]},
      { time: '09:00', end: '10:00', sessions: [
        { title: 'Opening Ceremony', type: 'ceremony', desc: 'Opening Speech — Congress Chairs Prof. Deepak John Mathew & Prof. Max Schleser' },
        { title: 'Words of the Founder', type: 'ceremony', desc: 'Prof. Xiaoge Xu, Zhejiang Wanli University, China' },
      ]},
      { time: '10:00', end: '11:00', sessions: [
        { title: 'Keynote — Prof. Nina Sabnani', type: 'keynote' },
        { title: 'Keynote — Prof. Ida Fatimawati Adi Badiozaman', type: 'keynote', tag: 'Online', desc: 'Malaysia' },
      ]},
      { time: '11:00', end: '11:40', sessions: [
        { title: 'Inauguration Ceremony', type: 'ceremony', desc: 'Launch of MDes in Photography, Film and Animation' },
      ]},
      { time: '11:40', end: '12:00', sessions: [
        { title: 'High Tea Break', type: 'break' },
      ]},
      { time: '12:00', end: '13:00', sessions: [
        { title: 'Vernadoc as a model for cultural exchange with mobile media production', type: 'paper', desc: 'Kath Dooley & Julie Nichols', tag: 'Online' },
        { title: 'Potential of Mobile Filmmaking in Contemporary Media Education', type: 'paper', desc: 'Rabiya Nazki' },
        { title: 'Generations: Representing Intergenerational Holocaust Narratives', type: 'paper', desc: 'Antoine Peyronnet Hobbs', tag: 'Online' },
        { title: 'Urban Children in AI-Driven Mobile Media Ecologies', type: 'paper', desc: 'Dr. Sonali Sharma' },
      ]},
      { time: '13:00', end: '14:00', sessions: [
        { title: 'Lunch Break', type: 'break' },
      ]},
      { time: '14:00', end: '15:00', sessions: [
        { title: 'Roundtable — Go mobile, go somewhere', type: 'roundtable', desc: 'Configuring self, community and environment through mobile media practices — Dr. Paola Lamberti', tag: 'Online' },
        { title: 'Roundtable — Capturing Mobile Lives', type: 'roundtable', desc: 'A Collective Reflection on Smartphone Self-Representation — Cati Alice', tag: 'Online' },
      ]},
      { time: '15:00', end: '16:00', sessions: [
        { title: 'Thumbnailing Crisis: How Indian Travel Vloggers Commodify the Manipur Conflict on YouTube', type: 'paper', desc: 'Neel Madhav' },
        { title: 'The NCR Aesthetics of Smartphone Filmmaking', type: 'paper', desc: 'Lucian Georgescu', tag: 'Online' },
        { title: 'Scrolling Towards a Different Future', type: 'paper', desc: 'Aspirational Mobile Media Use among Santal Girls — Kajal Shaw' },
      ]},
      { time: '16:00', end: '17:00', sessions: [
        { title: 'Co-creative Smartphone Digital Stories', type: 'paper', desc: 'Capturing lived experiences of smartphone use in senior citizens — Ms. Anupamanaomi Joseph', tag: 'Online' },
        { title: 'Digital Autoethnography on Social Media Platforms', type: 'paper', desc: 'Examining its Therapeutic Potential — Mohd Ruman' },
        { title: 'The Kachra Kahani', type: 'paper', desc: 'Priyal Bimal Mehta' },
      ]},
      { time: '17:00', end: '17:15', sessions: [
        { title: 'Low Tea Break', type: 'break' },
      ]},
      { time: '17:15', end: '18:00', sessions: [
        { title: 'MINA Film Opening & Screening', type: 'film', desc: 'Opening session followed by curated film screenings' },
      ]},
      { time: '19:00', end: '', sessions: [
        { title: 'Dinner', type: 'social' },
      ]},
    ],
  },
  {
    id: 2, label: 'Day 2', date: 'Aug 22', title: 'Congress & Closing',
    blocks: [
      { time: '09:00', end: '10:00', sessions: [
        { title: 'Branching on the Small Screen: How Generative AI Makes Interactive Mobile Film Viable', type: 'paper', desc: 'Shangyu Chen' },
        { title: 'Smartphone Filmmaking as Precursor for Gen AI Screen Storytelling', type: 'paper', desc: 'Shuai Li & Max Schleser' },
      ]},
      { time: '10:00', end: '11:00', sessions: [
        { title: 'Small Screens, Big Stories: Evolving Nature of Data Narratives in Mobile', type: 'paper', desc: 'Seema Krishnakumar' },
        { title: 'New Directions in Vertical Storytelling', type: 'paper', desc: 'Creative Shifts in Micro-Drama for Mobile Audiences — Roy Hanney', tag: 'Online' },
        { title: 'From Self-Tracking to Self-Judgment', type: 'paper', desc: 'Gamified Health Apps, Ideal Body Construction, and Digital Anxiety' },
      ]},
      { time: '11:00', end: '12:00', sessions: [
        { title: 'Roundtable — Smartphone Cinema Book', type: 'roundtable', desc: 'Prof. Xiaoge Xu' },
        { title: 'Roundtable — Beyond Access: Rethinking the Digital Divide in Indigenous Contexts', type: 'roundtable', desc: 'Kajal Shaw', tag: 'Online' },
      ]},
      { time: '12:00', end: '12:20', sessions: [
        { title: 'High Tea Break', type: 'break' },
      ]},
      { time: '12:20', end: '13:00', sessions: [
        { title: 'Heritage, Materiality and Media', type: 'paper', desc: 'Report from a Chinese Village — Stephen Connolly' },
        { title: 'Mobile Phone Use and Communication Patterns of Tribal Communities', type: 'paper', desc: 'Sofiya Shafqat Wani & Dr. John Babu Koyye' },
        { title: 'A Tiger Goni Story', type: 'paper', desc: 'Community-based volunteer movement in Bangladesh Sundarbans — Dr. Kabil Khan & Max Schleser' },
      ]},
      { time: '13:00', end: '14:00', sessions: [
        { title: 'Lunch Break', type: 'break' },
      ]},
      { time: '14:00', end: '15:00', sessions: [
        { title: 'Keynote — Dr. Anna Chiara Sabatino & Dr. Filippo Fimiani', type: 'keynote', tag: 'Online', desc: 'University of Salerno, Italy' },
        { title: 'Keynote — SEVERE WEATHER WARNING! Dis/locative forecasts in global mobile networks', type: 'keynote', desc: 'Kaya Barry, Griffith University, Australia' },
      ]},
      { time: '15:00', end: '16:00', sessions: [
        { title: 'Roundtable — Decentralising Creative Practice Research', type: 'roundtable', desc: 'Journal Media Practice and Education — Carolyn Beasley, Wilson Suai Moses, Catalin Brylla, Christine Rogers, Ibrahim Emara, Max Schleser', tag: 'Online' },
        { title: 'Roundtable — Digitalization and Community Participation in Citizen Journalism', type: 'roundtable', desc: 'During the July Uprisings in Bangladesh' },
        { title: 'Public Code Tetrads: Remediation and the Civic Grammar of Mobile Connectivity', type: 'paper', desc: 'Dr. John Bessai', tag: 'Online' },
      ]},
      { time: '16:00', end: '17:00', sessions: [
        { title: 'Reimagining Mobility Governance', type: 'paper', desc: 'A User-Centered UX/UI Redesign of the Chandigarh Bike Sharing System — Dr. Marisha Narula', tag: 'Online' },
        { title: 'Stardom and Self-Referential Cinema: Theorizing the Fifth Wall', type: 'paper', desc: 'Dr. Sonali Srivastav & Shanyu Bihani' },
        { title: 'Mobile Phone Films of India', type: 'paper', desc: 'Practices, Promotion, and Emerging Ecosystems — Gondi Surender Dhanunjay & Shamala Ramappa' },
      ]},
      { time: '17:00', end: '17:10', sessions: [
        { title: 'Low Tea Break', type: 'break' },
      ]},
      { time: '17:10', end: '18:00', sessions: [
        { title: 'Conclusion Ceremony', type: 'ceremony' },
      ]},
      { time: '19:00', end: '', sessions: [
        { title: 'Gala Dinner', type: 'social', desc: 'Celebrating the congress' },
      ]},
    ],
  },
  {
    id: 3, label: 'Day 3', date: 'Aug 23', title: 'Workshops & Films',
    blocks: [
      { time: '09:00', end: '10:00', sessions: [
        { title: 'Keynote — Media Environments', type: 'keynote', desc: 'Dafydd Sills-Jones' },
        { title: 'MINA Film Screenings Begin', type: 'film' },
      ]},
      { time: '10:00', end: '11:00', sessions: [
        { title: 'MINA Film Show 2', type: 'film' },
        { title: 'Workshop — Chaitanya Solanki', type: 'workshop', desc: 'Student Workshop Series' },
        { title: 'Workshop — Cellphilming Communities', type: 'workshop', desc: 'Telling Mobile Stories of Publics — Habib Moghimi' },
      ]},
      { time: '11:00', end: '12:00', sessions: [
        { title: 'MINA Film Show 3', type: 'film' },
        { title: 'Workshop — Adobe', type: 'workshop', desc: 'Industry Workshop' },
        { title: 'Workshop — Speech to Text & Text to Speech for Mobile Applications', type: 'workshop', desc: 'Maithili Mishra' },
      ]},
      { time: '12:00', end: '13:00', sessions: [
        { title: 'MINA Film Show 4', type: 'film' },
        { title: 'Workshop — Elias', type: 'workshop', desc: 'Student Workshop Series' },
        { title: 'Workshop — Reinventing Diary Filmmaking in the Era of Mobile Cameras', type: 'workshop', desc: 'Alex Xavier' },
      ]},
      { time: '13:00', end: '14:00', sessions: [
        { title: 'Lunch Break', type: 'break' },
      ]},
      { time: '14:00', end: '15:00', sessions: [
        { title: 'MINA Film Show 5', type: 'film' },
        { title: 'Workshop — Max Schleser', type: 'workshop' },
      ]},
      { time: '15:00', end: '16:00', sessions: [
        { title: 'MINA Film Show 6', type: 'film' },
        { title: 'Workshop — Kabil Khan', type: 'workshop' },
      ]},
      { time: '16:00', end: '17:00', sessions: [
        { title: 'MINA Film Show 7', type: 'film' },
        { title: 'Workshop — Branching on the Small Screen', type: 'workshop', desc: 'How Generative AI Makes Interactive Mobile Film Viable — Shangyu Chen' },
      ]},
    ],
  },
];

const TYPE_META = {
  keynote:    { label: 'Keynote',     color: '#0057FF' },
  paper:      { label: 'Paper',       color: '#23262E' },
  roundtable: { label: 'Roundtable',  color: '#7C3AED' },
  workshop:   { label: 'Workshop',    color: '#D97706' },
  film:       { label: 'Film',        color: '#059669' },
  ceremony:   { label: 'Ceremony',    color: '#0057FF' },
  break:      { label: 'Break',       color: '#999' },
  social:     { label: 'Social',      color: '#E11D48' },
};

export default function ImportantDates() {
  const [activeDay, setActiveDay] = useState(1);
  const currentDay = DAYS.find(d => d.id === activeDay);

  return (
    <main>
      {/* ═══ Important Dates — Split Layout ═══ */}
      <div className="id-split">
        <div className="id-left">
          <div className="id-left-inner">
            <h1 className="id-title">Important Dates</h1>
            <p className="id-subtitle">Key milestones for the 6th Mobile Studies Congress at IIT Hyderabad</p>
            <p className="id-body">Join us for this dynamic gathering at the Indian Institute of Technology Hyderabad, where thought leaders from around the globe will share insights, research, and innovations in mobile studies, mobile creative practice and cellphilms.</p>
            <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" className="cool-btn" style={{ marginTop: '0.5em' }}>Buy Ticket</a>
          </div>
        </div>
        <div className="id-right">
          <div className="id-card">
            {DATES.map((item, i) => (
              <div key={i} className={`id-item id-s-${item.status}`}>
                <div className="id-marker">
                  <div className="id-dot" />
                  {i < DATES.length - 1 && <div className="id-line" />}
                </div>
                <div className="id-content">
                  <span className="id-label">{item.label}</span>
                  <span className="id-date">{item.date}</span>
                  {item.status === 'open' && <span className="id-badge-open">Registrations Open</span>}
                  {item.status === 'closed' && <span className="id-badge-closed">Completed</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ═══ Programme ═══ */}
      <section className="prog">

        <div className="prog-header">
          <h2 className="prog-heading">Conference Programme</h2>
          <p className="prog-sub">August 21–23, 2026 · IIT Hyderabad</p>
        </div>

        {/* Day tabs */}
        <div className="prog-tabs">
          {DAYS.map(d => (
            <button
              key={d.id}
              className={`prog-tab ${activeDay === d.id ? 'prog-tab--on' : ''}`}
              onClick={() => setActiveDay(d.id)}
            >
              <span className="prog-tab-day">{d.label}</span>
              <span className="prog-tab-date">{d.date}</span>
              <span className="prog-tab-title">{d.title}</span>
            </button>
          ))}
        </div>

        {/* Legend */}
        <div className="prog-legend">
          {Object.entries(TYPE_META).filter(([k]) => !['break','social'].includes(k)).map(([key, val]) => (
            <span key={key} className="prog-legend-chip">
              <span className="prog-legend-dot" style={{ background: val.color }} />
              {val.label}
            </span>
          ))}
        </div>

        {/* Timeline */}
        <div className="prog-tl">
          {currentDay.blocks.map((block, bi) => {
            const isBreak = block.sessions.length === 1 && ['break','social'].includes(block.sessions[0].type);
            return (
              <div key={bi} className={`prog-row ${isBreak ? 'prog-row--break' : ''}`}>
                <div className="prog-time">
                  <span className="prog-time-h">{block.time}</span>
                  {block.end && <span className="prog-time-to">{block.end}</span>}
                </div>
                <div className="prog-line-col">
                  <div className="prog-dot" />
                  {bi < currentDay.blocks.length - 1 && <div className="prog-stem" />}
                </div>
                <div className="prog-cards">
                  {block.sessions.map((s, si) => {
                    const meta = TYPE_META[s.type] || TYPE_META.paper;
                    if (isBreak) {
                      return (
                        <div key={si} className="prog-card prog-card--break">
                          <span className="prog-card-break-text">{s.title}</span>
                          {s.desc && <span className="prog-card-break-desc">{s.desc}</span>}
                        </div>
                      );
                    }
                    return (
                      <div key={si} className="prog-card">
                        <div className="prog-card-head">
                          <span className="prog-badge" style={{ background: meta.color + '10', color: meta.color, borderColor: meta.color + '28' }}>{meta.label}</span>
                          {s.tag && <span className="prog-tag">{s.tag}</span>}
                        </div>
                        <h4 className="prog-card-t">{s.title}</h4>
                        {s.desc && <p className="prog-card-d">{s.desc}</p>}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

      </section>
    </main>
  );
}