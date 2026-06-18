import React, { useEffect } from 'react';

import '../App.css';
import '../styles/venue.css';

import c11 from '../assets/c11.jpg';
import c12 from '../assets/c12.webp';
import c13 from '../assets/c13.webp';
import c14 from '../assets/c14.webp';
import c15 from '../assets/c15.webp';
import c16 from '../assets/c16.webp';

import c21 from '../assets/c21.jpg';
import c22 from '../assets/c22.webp';
import c23 from '../assets/c23.webp';
import c24 from '../assets/c24.webp';
import c25 from '../assets/c25.webp';
import c26 from '../assets/c26.webp';

import gh0 from '../assets/gh0.jpg';
import gh1 from '../assets/gh1.jpg';
import gh2 from '../assets/gh2.jpg';
import gh3 from '../assets/gh3.jpg';
import gh4 from '../assets/gh4.jpg';
import gh5 from '../assets/gh5.jpg';

const col1Images = [c11, c12, c13, c14, c15, c16];
const col2Images = [c21, c22, c23, c24, c25, c26];
const ghImages = [gh0, gh1, gh2, gh3, gh4, gh5];
const ghMarquee = [...ghImages, ...ghImages];

const ROOM_TARIFFS = [
  { type: 'Standard Rooms', occupancy: 'Single Occupancy', tariff: 1500, gst: 180, total: 1680, desc: 'Room with 2 separate single beds' },
  { type: 'Standard Rooms', occupancy: 'Double Room', tariff: 2000, gst: 240, total: 2240, desc: '' },
  { type: 'Accessible Rooms', occupancy: 'Single/Double', tariff: 1500, gst: 180, total: 1680, desc: 'Accessible Rooms with queen size beds' },
  { type: 'Executive Rooms', occupancy: 'Single Occupancy', tariff: 2000, gst: 240, total: 2240, desc: 'Rooms has King Size cot & Single Cots' },
  { type: 'Executive Rooms', occupancy: 'Double Room', tariff: 2300, gst: 276, total: 2576, desc: '' },
  { type: 'Executive Rooms', occupancy: 'Triple Occupancy', tariff: 2600, gst: 312, total: 2912, desc: '' },
  { type: 'Suite', occupancy: 'Single/Double', tariff: 2800, gst: 336, total: 3136, desc: 'Rooms has Living area plus Rooms with King Size beds & a pantry' },
  { type: 'Super Suite', occupancy: 'Single/Double', tariff: 3000, gst: 360, total: 3360, desc: 'Accessible Rooms with queen size beds' },
];

export default function Venue() {
  useEffect(() => {
    const wrapper = document.getElementById('hyderabad-gallery');
    if (!wrapper) return;
    const columns = wrapper.querySelectorAll('.gallery-column');
    const handlers = [];
    columns.forEach((column) => {
      const handler = function () {
        const isExpanded = this.classList.contains('expanded');
        columns.forEach((c) => c.classList.remove('expanded'));
        wrapper.classList.remove('has-expanded');
        if (!isExpanded) {
          this.classList.add('expanded');
          wrapper.classList.add('has-expanded');
        }
      };
      column.addEventListener('click', handler);
      handlers.push({ column, handler });
    });
    return () => { handlers.forEach(({ column, handler }) => column.removeEventListener('click', handler)); };
  }, []);

  /* Group tariffs by room type for rowSpan rendering */
  const groupedTariffs = [];
  let lastType = '';
  ROOM_TARIFFS.forEach((r, i) => {
    if (r.type !== lastType) {
      const span = ROOM_TARIFFS.filter(x => x.type === r.type).length;
      groupedTariffs.push({ ...r, isFirst: true, rowSpan: span, idx: i });
      lastType = r.type;
    } else {
      groupedTariffs.push({ ...r, isFirst: false, idx: i });
    }
  });

  return (
    <main className="main-content-padding">
      
      {/* ══════════════ ACCOMMODATION ══════════════ */}
      <section id="accommodation" className="accommodation-section">
        <h2 className="heading2" style={{ color: '#000' }}>Accommodation</h2>

        {/* ── Guest House ── */}
        <h3 className="accommodation-subtitle">Guest House, IITH</h3>
        <p className="accommodation-intro">
          The International Guest House at IITH offers premium, climate-controlled lodging featuring award-winning architecture. Located in the heart of the campus, it provides a seamless stay for conference delegates within walking distance of the Department of Design.
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

        {/* ── Tariff Table ── */}
        <p className="tariff-currency-note">All prices are in Indian Rupees (INR ₹). GST of 12% is included in the total.</p>

        {/* Desktop table */}
        <div className="tariff-table-wrap tariff-desktop-only">
          <table className="tariff-table" role="table" aria-label="Guest House Room Tariffs in INR">
            <thead>
              <tr>
                <th>Type of Room</th>
                <th>Occupancy Type</th>
                <th>Tariff (INR)</th>
                <th>GST 12% (INR)</th>
                <th>Total (INR)</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              {groupedTariffs.map((r) => (
                <tr key={r.idx}>
                  {r.isFirst && (
                    <td rowSpan={r.rowSpan} className="tariff-type-cell">{r.type}</td>
                  )}
                  <td>{r.occupancy}</td>
                  <td className="tariff-num">₹{r.tariff.toLocaleString('en-IN')}/-</td>
                  <td className="tariff-num">₹{r.gst.toLocaleString('en-IN')}/-</td>
                  <td className="tariff-num tariff-total">₹{r.total.toLocaleString('en-IN')}/-</td>
                  {r.isFirst && r.desc && (
                    <td rowSpan={r.rowSpan} className="tariff-desc-cell">{r.desc}</td>
                  )}
                  {r.isFirst && !r.desc && (
                    <td rowSpan={r.rowSpan} className="tariff-desc-cell">—</td>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile card view */}
        <div className="tariff-mobile-only">
          {ROOM_TARIFFS.map((r, i) => (
            <div className="tariff-mobile-card" key={i}>
              <div className="tariff-mobile-header">
                <span className="tariff-mobile-type">{r.type}</span>
                <span className="tariff-mobile-occ">{r.occupancy}</span>
              </div>
              <div className="tariff-mobile-prices">
                <div className="tariff-mobile-row">
                  <span>Tariff</span>
                  <span>₹{r.tariff.toLocaleString('en-IN')}/-</span>
                </div>
                <div className="tariff-mobile-row">
                  <span>GST 12%</span>
                  <span>₹{r.gst.toLocaleString('en-IN')}/-</span>
                </div>
                <div className="tariff-mobile-row tariff-mobile-total">
                  <span>Total</span>
                  <span>₹{r.total.toLocaleString('en-IN')}/-</span>
                </div>
              </div>
              {r.desc && <p className="tariff-mobile-desc">{r.desc}</p>}
            </div>
          ))}
        </div>

        {/* ── Booking Info ── */}
        <div className="booking-info-grid">
          <div className="booking-card">
            <h4>How to Book — Guest House</h4>
            <p>Rooms are allotted on a first-come, first-served basis. To reserve your stay, please send an email to:</p>
            <p><strong>Mr. Dhananjay —</strong> <a href="mailto:office.gh@iith.ac.in" style={{ color: '#00FF33' }}>office.gh@iith.ac.in</a></p>
          </div>
          <div className="booking-card">
            <h4>Important Note</h4>
            <p>Please mention your Conference Registration ID in the subject line of your booking email.</p>
            <p>All tariffs include 12% GST. Prices are in INR (₹).</p>
          </div>
        </div>

        {/* ── Campus Hostel — placed ABOVE the guest house image slider ── */}
        <div className="hostel-section">
          <h3 className="accommodation-subtitle">Campus Hostel, IITH</h3>
          <p className="accommodation-intro">
            Hostel accommodation is also available for students attending the conference.
          </p>

          <div className="hostel-details-grid">
            <div className="hostel-detail-card">
              <h4>Accommodation Details</h4>
              <p><strong style={{ color: '#0057FF' }}>Cost:</strong> ₹350/- per participant per day (INR)</p>
              <p><strong style={{ color: '#0057FF' }}>Facilities:</strong> Cot, Table, Chair, Mattress, Bedsheet, Blanket, and Pillow</p>
            </div>
            <div className="hostel-detail-card">
              <h4>How to Book</h4>
              <p>Fill out the Google Form to register for hostel accommodation.</p>
              <p>Make the payment based on the number of days you plan to stay.</p>
              <p>Upload the following in the Google Form:</p>
              <p style={{ paddingLeft: '1em' }}>→ Payment receipt (via the provided QR code)</p>
              <p style={{ paddingLeft: '1em' }}>→ A copy of your Student ID card</p>
              <div style={{ marginTop: '1.5em' }}>
                <a
                  className="cool-btn"
                  href="https://docs.google.com/forms/d/e/1FAIpQLSfN122W-DD-F-2K8rhLYhzy5zd2dK3LOVO1Qt8nGX041Py3hA/viewform"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Book Hostel — Google Form
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ── Guest House Image Marquee — now below hostel ── */}
        <div className="scroll-container">
          <div className="scroll-track-horizontal">
            {ghMarquee.map((img, idx) => (
              <img key={idx} src={img} alt={`Guest House ${idx + 1}`} className="scroll-image" />
            ))}
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <div className="venue-hero">
        <div className="venue-hero-content">
          <h2>Venue</h2>
          <h1>Department of Design (DOD) - IITH</h1>
          <p>
            Located within the prestigious Indian Institute of Technology Hyderabad (IITH) — a top-ranked engineering institute known for its Fractal Academics and global research collaborations — the Department of Design offers a world-class setting for conferences, workshops, and grand events like the 6th Mobile Studies Congress.
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

      {/* How to Reach */}
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

      {/* Campus Tour */}
      <section className="campus-tour-section">
        <h2 className="heading2" style={{ color: '#0F3' }}>Take a campus tour</h2>
        <div className="video-wrapper">
          <iframe src="https://www.youtube.com/embed/4LzE-hS-jSE" title="IITH Campus Tour" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
        </div>
      </section>

      {/* Hyderabad Attractions */}
      <section className="attractions-section">
        <div className="attractions-header">
          <h2 className="heading2" style={{ color: '#000' }}>Explore Hyderabad</h2>
          <h3 className="accommodation-subtitle">Beyond the Campus</h3>
          <p className="attractions-subtitle">Discover Hyderabad's rich heritage and vibrant culture while attending the conference</p>
        </div>
        <div className="gallery-wrapper" id="hyderabad-gallery">
          {[
            { img: 'https://images.pexels.com/photos/11321242/pexels-photo-11321242.jpeg', title: 'Charminar', desc: 'An iconic monument and mosque built in 1591, featuring stunning Indo-Islamic architecture at the heart of the old city. - 45 km from IITH' },
            { img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/07/Golconda_Fort-_Hyderabad%2C_Telangana%2C_India.jpg/1920px-Golconda_Fort-_Hyderabad%2C_Telangana%2C_India.jpg', title: 'Golkonda Fort', desc: 'A majestic fortress with remarkable acoustics and panoramic views of the city. - 40 km from IITH' },
            { img: 'https://upload.wikimedia.org/wikipedia/commons/f/f5/Salar_jung_museum_hyderabad.jpg', title: 'Salar Jung Museum', desc: "One of India's largest museums housing rare art, antiques, and artifacts from around the world. - 50 km from IITH" },
            { img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Hussain_Sagar_Lake_Hyderabad.JPG/1920px-Hussain_Sagar_Lake_Hyderabad.JPG', title: 'Hussain Sagar Lake', desc: 'A serene lake with a monolithic Buddha statue, perfect for evening strolls. - 45 km from IITH' },
            { img: 'https://i0.wp.com/hyderabadtourpackage.in/images/places-to-visit/ramoji-film-city-hyderabad-entryfee-timings-tour-package-header.jpg?w=1921&ssl=1', title: 'Ramoji Film City', desc: "World's largest film studio complex, offering immersive entertainment experiences. - 75 km from IITH" },
            { img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/Nehuru_zoological_park_Hyderabad_India_Entrance.jpg/1920px-Nehuru_zoological_park_Hyderabad_India_Entrance.jpg', title: 'Nehru Zoological Park', desc: "One of India's largest zoos with diverse wildlife and natural habitats. - 55 km from IITH" },
          ].map((place, i) => (
            <div className="gallery-column" key={i}>
              <div className="gallery-link">
                <img src={place.img} alt={place.title} />
                <div className="gallery-overlay">
                  <h3>{place.title}</h3>
                  <p>{place.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}