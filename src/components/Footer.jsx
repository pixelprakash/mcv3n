import React, { Suspense, lazy } from 'react';

import mscLogo from '../assets/6thMSC.png';
import iithLogo from '../assets/iith_logo.png';
import dodLogo from '../assets/DOD_logo.png';

const Spline = lazy(() => import('@splinetool/react-spline'));
const ROBOT_SCENE = 'https://prod.spline.design/PyzDhpQ9E5f1E3MT/scene.splinecode';

export default function Footer() {
  return (
    <footer className="ft">
      <div className="ft-main">
        <div className="ft-cta">
          <h2 className="ft-h">Want to be part of the conversation<span className="ft-q">?</span></h2>
          <a href="mailto:mobilecongress2026@des.iith.ac.in" className="ft-mail">mobilecongress2026@des.iith.ac.in</a>
          <a href="mailto:mobilecongress2026@des.iith.ac.in" className="ft-btn">
            <span className="ft-btn-t">Reach Out</span>
            <span className="ft-btn-i">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2" /><path d="M22 4L12 13L2 4" /></svg>
            </span>
          </a>
        </div>
        <div className="ft-robot">
          <div className="ft-robot-clip">
            <Suspense fallback={<div className="ft-ph"><div className="ft-spin" /></div>}>
              <Spline scene={ROBOT_SCENE} />
            </Suspense>
          </div>
        </div>
        <div className="ft-info">
          <div className="ft-logos">
            <img src={mscLogo} alt="6th MSC" className="ft-logo ft-logo-msc" />
            <img src={dodLogo} alt="Department of Design" className="ft-logo" />
            <img src={iithLogo} alt="IIT Hyderabad" className="ft-logo" />
          </div>
          <div className="ft-social">
            <a href="https://www.linkedin.com/company/6th-mobile-studies-congress/posts/?feedView=all" target="_blank" rel="noopener noreferrer" className="ft-sc" aria-label="LinkedIn">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
            </a>
            <a href="https://www.instagram.com/6thmobilestudiescongress/" target="_blank" rel="noopener noreferrer" className="ft-sc" aria-label="Instagram">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" /></svg>
            </a>
          </div>
          <p className="ft-cp">© 2025 6th Mobile Studies Congress. All rights reserved.</p>
        </div>
      </div>
      <style>{`
       .ft { background: #1a1c22; overflow: hidden; }

        .ft-main {
          display: grid;
          grid-template-columns: 1fr auto 1fr;
          align-items: center;
          gap: 2.5em;
          padding: 5em 5em 3.5em;
        }
        @media (min-width: 1400px) { .ft-main { padding: 5em 7.5em 3.5em; } }

        .ft-cta { display: flex; flex-direction: column; align-items: flex-start; gap: 1em; }

        .ft-h {
          font-family: 'Cabinet Grotesk', sans-serif;
          font-size: clamp(1.4rem, 2.8vw, 2.2rem);
          font-weight: 700; line-height: 1.2;
          color: #fff; margin: 0; text-align: left;
        }
        .ft-q { color: #00FF33; }

        .ft-mail {
  font-family: Avenir, sans-serif;
  font-size: clamp(0.85rem, 3vw, 1.4rem);
  color: rgba(255, 255, 255, 1);
  text-decoration: none;
  transition: color 0.2s;
  word-break: break-all;
}
        .ft-mail:hover { color: #00FF33; }

        .ft-btn {
          display: inline-flex; align-items: center;
          text-decoration: none; border-radius: 100px;
          border: 1px solid rgba(255,255,255,0.1);
          transition: border-color 0.25s;
          margin-top: 0.25em;
        }
        .ft-btn:hover { border-color: rgba(255,255,255,0.22); }

        .ft-btn-t {
          font-family: Avenir, sans-serif;
          font-size: 0.88rem; font-weight: 500;
          color: rgba(255,255,255,0.45);
          padding: 10px 16px;
          transition: color 0.2s;
        }
        .ft-btn:hover .ft-btn-t { color: #fff; }

        .ft-btn-i {
          width: 38px; height: 38px; border-radius: 50%;
          background: #0057FF; color: #fff;
          display: flex; align-items: center; justify-content: center;
          transition: transform 0.25s cubic-bezier(.34,1.56,.64,1);
        }
        .ft-btn:hover .ft-btn-i { transform: scale(1.06); }

       .ft-robot {
  width: 280px; height: 420px;
  overflow: hidden; position: relative; flex-shrink: 0;
  align-self: end;
  margin-bottom: -3.5em;
}
        .ft-robot-clip {
  position: absolute; top: 0; left: 0; right: 0; bottom: -60px;
  mix-blend-mode: screen;
}
.ft-robot-clip canvas {
  filter: hue-rotate(-45deg) saturate(1.3) brightness(1.2);
}
        .ft-ph { width:100%;height:100%;display:flex;align-items:center;justify-content:center; }
        .ft-spin {
          width:20px;height:20px;
          border:2px solid rgba(255,255,255,0.06);
          border-top-color:#0057FF;border-radius:50%;
          animation:fts .6s linear infinite;
        }
        @keyframes fts { to { transform:rotate(360deg); } }

        .ft-info {
          display: flex; flex-direction: column;
          align-items: flex-end; gap: 1.5em;
        }

        .ft-logos { display: flex; align-items: center; gap: 28px; }

        .ft-logo {
          width: 90px; height: auto; object-fit: contain;
          opacity: 0.35; filter: brightness(0) invert(1);
          transition: opacity 0.25s;
        }
        .ft-logo:hover { opacity: 0.6; }
        .ft-logo-msc { width: 110px; }

        .ft-social { display: flex; gap: 10px; }
        .ft-sc {
          width: 42px; height: 42px; border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.12);
          color: rgba(255,255,255,0.32);
          display: flex; align-items: center; justify-content: center;
          text-decoration: none;
          transition: color 0.2s, border-color 0.2s, transform 0.25s cubic-bezier(.34,1.56,.64,1);
        }
        .ft-sc:hover {
          color: #00FF33; border-color: rgba(0,255,51,0.25);
          transform: translateY(-2px);
        }

        .ft-cp {
          font-family: Avenir, sans-serif;
          font-size: 0.78rem;
          color: rgba(255,255,255,0.22);
          margin: 0; text-align: right; white-space: nowrap;
        }

        @media (max-width: 1023px) {
          .ft-main {
            grid-template-columns: 1fr auto;
            grid-template-rows: auto auto;
            gap: 2em; padding: 4em 3em 3em;
          }
          .ft-robot { grid-column:2; grid-row:1; width:220px; height:270px; }
          .ft-info {
            grid-column: 1/-1; grid-row: 2;
            flex-direction: row; align-items: center;
            justify-content: space-between;
            padding-top: 2em;
            border-top: 1px solid rgba(255,255,255,0.05);
          }
          .ft-logo { width: 70px; }
          .ft-logo-msc { width: 85px; }
        }

        @media (max-width: 767px) {
          .ft-main {
  display: flex; flex-direction: column;
  gap: 0; padding: 3.5em 1.5em 2.5em;
}
          .ft-cta { padding-bottom: 2.5em; padding-left: 0; }
.ft-h { font-size: clamp(1.2rem, 5vw, 1.8rem); }
          .ft-robot { display: none; }
          .ft-info {
            flex-direction: column; align-items: flex-start;
            gap: 1.25em; padding-top: 2em; width: 100%;
            border-top: 1px solid rgba(255,255,255,0.05);
          }
          .ft-logos { gap: 20px; }
          .ft-logo { width: 60px; }
          .ft-logo-msc { width: 75px; }
          .ft-sc { width: 38px; height: 38px; }
          .ft-cp { text-align: left; white-space: normal; }
        }

        @media (max-width: 399px) {
          .ft-main { padding: 3em 1.25em 2em; }
          .ft-h { font-size: 1.25rem; }
          .ft-logo { width: 50px; }
          .ft-logo-msc { width: 62px; }
          .ft-logos { gap: 14px; }
        }
      `}</style>
    </footer>
  );
}