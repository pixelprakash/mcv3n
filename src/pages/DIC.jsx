import { useState, useCallback } from 'react';
import '../App.css';
import '../styles/dic.css';

/* ── Data ── */
const DOMAINS = [
  { id: '01', title: 'Digital Preservation of Indian Heritage', type: 'Heritage', desc: 'Study on digital preservation and virtual recreation of UNESCO and tentative heritage sites through photogrammetry, interactive mediums, and haptic VR experience — including Ramappa Temple, Thousand Pillar Temple, and Warangal Fort.', tags: ['Photogrammetry', 'VR', 'UNESCO', 'ASI'] },
  { id: '02', title: 'Gond Tribal Heritage of Telangana', type: 'Heritage', desc: 'Comprehensive documentation of tangible and intangible cultural heritage of the Gond tribe. Design intervention workshops for safeguarding Dhokra crafts of Ojha community. Virtual museum and digital repository creation.', tags: ['Documentation', 'Craft Revival', 'Virtual Museum'] },
  { id: '03', title: 'Autonomous Urban Air Mobility', type: 'Research', desc: 'Design and development of autonomous passenger drones as air taxis. Full-scale eVTOL prototype, interior design and user experience study. VR-based perception and safety validation with 103 participants.', tags: ['eVTOL', 'Drone Design', 'UX Study', 'DST'] },
  { id: '04', title: 'VR/AR in Learning Models', type: 'Experiment', desc: 'Integrating AI, AR and VR in learning models and measuring their impact. Virtual chemistry lab environments, VR-aided STEM content for schools, and interactive educational game design including Tatva Bhoomi.', tags: ['STEM', 'Game Design', 'VR Lab'] },
  { id: '05', title: 'Sustainable Product Innovation', type: 'Product', desc: 'Bio-bricks from agro-waste for sustainable housing. Solar-powered cookers for rural India. Ekant soundproof office pods. Solar vegetable dryer for small-scale vendors.', tags: ['Sustainability', 'Solar', 'Bio-materials'] },
  { id: '06', title: 'Colour in Indian Cinema', type: 'Research', desc: 'Investigating the technology, aesthetics, and praxis of colour in Indian cinema. Examines how colour grading, film stock, and digital pipelines shape narrative and cultural meaning.', tags: ['Cinema', 'Aesthetics', 'Praxis'] },
  { id: '07', title: 'Affect & Design Cognition', type: 'Framework', desc: 'The role of mood boards, arousal, and valence in conceptual design processes. Reimagining subjects through the practice of image making and haptic design of textiles.', tags: ['Cognition', 'Mood Boards', 'Haptics'] },
  { id: '08', title: 'Multiple Narratives in Cinematic VR', type: 'Experiment', desc: 'Exploring non-linear storytelling through cinematic virtual reality film making. Creating branching narratives that respond to viewer gaze and spatial position within the VR environment.', tags: ['VR Film', 'Narrative', 'Immersive'] },
];

const STATS = [
  { number: '6,212', label: 'Students enrolled' },
  { number: '921', label: 'Innovations delivered' },
  { number: '228', label: 'Workshops held' },
  { number: '9', label: 'Patents filed' },
  { number: '25', label: 'Startups supported' },
  { number: '210', label: 'Technology transfers' },
];

const VIDEOS = [
  { id: 'JVgO6pTn4jA', title: 'Design Innovation Centre at IIT Hyderabad' },
  { id: '_jiQ5xb13pE', title: 'Digital Heritage Preservation of Ramappa Temple' },
  { id: 'OxqstyCRBwU', title: 'Tangible and Intangible Cultural Heritage of Telangana' },
  { id: 'hinNkP3qjLo', title: 'Full-Scale Passenger Drone Cabin Prototype' },
  { id: 'Pb4BENo5VwI', title: 'Passenger Drone Digital Prototype' },
  { id: 'gVAsxlgAvqw', title: 'Dhokra Casting' },
  { id: '2pRFgecS3js', title: 'World of PAVs' },
  { id: 'K0GEoz2SyeE', title: 'Fourth All India DIC Meet 2024' },
];

const PATENTS = [
  { name: 'UVC Air Purifier', inventor: 'Priyabrata Rautray' },
  { name: 'Herbal Decoction Maker', inventor: 'Upasana Bhandari' },
  { name: 'Electric Truck Carrier', inventor: 'Vivekananda Chary' },
  { name: 'Gatti Maker', inventor: 'Vivekananda Chary' },
  { name: 'NCERT Models (colour coding)', inventor: 'Upasana Bhandari' },
  { name: 'Urban Air Mobility Aircraft', inventor: 'Ketan Chaturmutha' },
  { name: 'Autonomous UAM Aircraft', inventor: 'Ketan Chaturmutha' },
  { name: 'Autonomous Advanced Air Mobility', inventor: 'Ketan Chaturmutha' },
  { name: 'Autonomous UAM Intra-city', inventor: 'Ketan Chaturmutha' },
];

const COURSES = [
  'Elements of Design', 'Principles of Design', 'UI & UX', 'Creative Coding',
  'Basic Animation', 'Digital Fabrication', 'Sound Design', 'Data Visualization',
  'Product Semantics', 'Universal Design', 'Storyboarding', 'Automobile Design',
];

const PARTNERS = [
  'MeitY', 'SHRI', 'Suzuki', 'TalentSprint', 'Wacom India',
  'Govt. of Rajasthan', 'WWF', 'ASI Hyderabad', 'DST', 'DSIR',
  'Ministry of Culture', 'ICMR',
];

const SLIDER_IMAGES = Array.from({ length: 10 }, (_, i) => '/dicimgs/' + (i + 1) + '.webp');

/* ── Image Slider ── */
function ImageSlider() {
  return (
    <div className="dic-slider-wrap">
      <div className="dic-slider">
        {[...SLIDER_IMAGES, ...SLIDER_IMAGES].map((src, i) => (
          <img key={i} src={src} alt={'DIC Lab image ' + ((i % 10) + 1)} className="dic-slider-img" loading="lazy" draggable="false" />
        ))}
      </div>
    </div>
  );
}

/* ── Video Card ── */
function VideoCard({ videoId, title }) {
  const [playing, setPlaying] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const play = useCallback(() => setPlaying(true), []);

  if (playing) {
    return (
      <div className="dic-video">
        <iframe
          src={'https://www.youtube.com/embed/' + videoId + '?autoplay=1&rel=0&modestbranding=1'}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
          className="dic-video-iframe"
        />
      </div>
    );
  }

  return (
    <div className="dic-video" role="button" tabIndex={0} onClick={play} onKeyDown={(e) => { if (e.key === 'Enter') play(); }}>
      <img
        src={'https://img.youtube.com/vi/' + videoId + '/maxresdefault.jpg'}
        alt={title}
        loading="lazy"
        className="dic-video-thumb"
        onLoad={() => setLoaded(true)}
        style={{ opacity: loaded ? 1 : 0 }}
      />
      <div className="dic-video-overlay" />
      <div className="dic-video-play">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="#fff" stroke="none">
          <polygon points="6,3 20,12 6,21" />
        </svg>
      </div>
      <span className="dic-video-title">{title}</span>
    </div>
  );
}

/* ── Video Grid with Show More ── */
function VideoGrid({ videos }) {
  const [showAll, setShowAll] = useState(false);
  const visible = showAll ? videos : videos.slice(0, 4);

  return (
    <>
      <div className="dic-video-grid">
        {visible.map((v) => (
          <VideoCard key={v.id} videoId={v.id} title={v.title} />
        ))}
      </div>
      {videos.length > 4 && (
        <button className="dic-video-toggle" onClick={() => setShowAll(!showAll)}>
          {showAll ? 'Show less' : `View all ${videos.length} films`}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ transform: showAll ? 'rotate(180deg)' : 'none', transition: 'transform 0.3s' }}>
            <path d="M6 9l6 6 6-6"/>
          </svg>
        </button>
      )}
    </>
  );
}

/* ── Main ── */
export default function DIC() {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="dic-hero">
        <div className="dic-hero-content">
          <h1 className="dic-hero-title">DIC Lab</h1>
          <p className="dic-hero-sub">Hub & Nodal — Interdisciplinary design research & innovation.</p>
        </div>
        <img src="/diclogo.png" alt="DIC Nodal logo" className="dic-hero-logo" draggable="false" />
      </section>

      {/* ── ABOUT ── */}
      <section className="dic-section dic-about-section">
        <h2 className="dic-section-title">About the Centre</h2>
        <p className="dic-about-text">
          The Design Innovation Centre (DIC) Nodal at IIT Hyderabad drives innovation through design and technology. The Department of Design along with partnering institutions engages in mutually beneficial innovation activities across cultural heritage, architecture, digital humanities, autonomous mobility, and sustainable product development.
        </p>
        <p className="dic-about-text">
          DIC creates a holistic and inter-disciplinary nature of design to cut across research and move projects from research to development. Our hub and partnering spokes incubate meaningful projects in line with contemporary trends in the design discipline — encouraging design praxis as a convergence of multiple interests across diverse contexts and scenarios.
        </p>
      </section>

      {/* ── IMAGE SLIDER ── */}
      <section className="dic-section dic-section--flush">
        <ImageSlider />
      </section>

      {/* ── STATS ── */}
      <section className="dic-section">
        <div className="dic-stats">
          {STATS.map((s) => (
            <div className="dic-stat" key={s.label}>
              <span className="dic-stat-num">{s.number}</span>
              <span className="dic-stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROJECT FILMS ── */}
      <section className="dic-section">
        <h2 className="dic-section-title">Project Films</h2>
        <VideoGrid videos={VIDEOS} />
      </section>

      {/* ── RESEARCH DOMAINS — 3×3 Grid ── */}
      <section className="dic-section">
        <h2 className="dic-section-title">Research Domains</h2>
        <div className="dic-grid">
          {DOMAINS.map((e) => (
            <div key={e.id} className="dic-card">
              <div className="dic-card-head">
                <span className="dic-card-num">{e.id}</span>
                <span className="dic-card-type">{e.type}</span>
              </div>
              <h3 className="dic-card-title">{e.title}</h3>
              <p className="dic-card-desc">{e.desc}</p>
              <div className="dic-card-tags">
                {e.tags.map((t) => (
                  <span className="dic-card-tag" key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
          <a href="mailto:dic@des.iith.ac.in" className="dic-card dic-card-cta">
            <span className="dic-cta-q">Want to collaborate?</span>
            <span className="dic-cta-btn">
              <span>Contact</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
            </span>
          </a>
        </div>
      </section>

      {/* ── PATENTS ── */}
      <section className="dic-section">
        <h2 className="dic-section-title">Patents</h2>
        <div className="dic-patent-grid">
          {PATENTS.map((p, i) => (
            <div className="dic-patent" key={i}>
              <span className="dic-patent-name">{p.name}</span>
              <span className="dic-patent-inv">{p.inventor}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── COLLABORATIONS ── */}
      <section className="dic-section">
        <h2 className="dic-section-title">Collaborations</h2>
        <div className="dic-pill-grid">
          {PARTNERS.map((p) => (
            <span className="dic-pill dic-pill--partner" key={p}>{p}</span>
          ))}
        </div>
      </section>
    </main>
  );
}