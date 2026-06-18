import React from 'react';
import '../styles/ticker.css';

const TICKER_ITEMS = [
  { text: 'Registrations Extended!', url: 'https://forms.cloud.microsoft/r/xH1YXgeYGR' },
  { text: 'Register by 6th June 2026!', url: 'https://forms.cloud.microsoft/r/xH1YXgeYGR' },
];

const REPEAT_COUNT = 8;
const tickerSet = Array.from({ length: REPEAT_COUNT }, () => TICKER_ITEMS).flat();

export default function Ticker() {
  return (
    <div className="ticker-container">
      <div className="ticker-track">
        <div className="ticker-set">
          {tickerSet.map((item, i) => (
            <div className="ticker-item" key={`a-${i}`}>
              <a href={item.url} target="_blank" rel="noopener noreferrer" className="ticker-text">{item.text}</a>
              <span className="ticker-separator">•</span>
            </div>
          ))}
        </div>
        <div className="ticker-set">
          {tickerSet.map((item, i) => (
            <div className="ticker-item" key={`b-${i}`}>
              <a href={item.url} target="_blank" rel="noopener noreferrer" className="ticker-text">{item.text}</a>
              <span className="ticker-separator">•</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}