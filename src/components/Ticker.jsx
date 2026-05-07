import React from 'react';
import '../styles/ticker.css';

const TICKER_ITEMS = [
  'Registrations Open',
  'Register before 21st May!',
];

/* Build a long repeated set so the marquee loops seamlessly */
const REPEAT_COUNT = 16;
const tickerSet = Array.from({ length: REPEAT_COUNT }, () => TICKER_ITEMS).flat();

export default function Ticker() {
  return (
    <div className="ticker-container">
      <div className="ticker-track">
        {/* First copy */}
        <div className="ticker-set">
          {tickerSet.map((text, i) => (
            <div className="ticker-item" key={`a-${i}`}>
              <span className="ticker-text">{text}</span>
              <span className="ticker-separator">•</span>
            </div>
          ))}
        </div>
        {/* Duplicate for seamless loop */}
        <div className="ticker-set">
          {tickerSet.map((text, i) => (
            <div className="ticker-item" key={`b-${i}`}>
              <span className="ticker-text">{text}</span>
              <span className="ticker-separator">•</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
