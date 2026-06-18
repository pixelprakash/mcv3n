import React, { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import './styles/global.css';

/* ── Lazy-loaded pages ── */
const Home           = lazy(() => import('./pages/Home'));
const Venue          = lazy(() => import('./pages/Venue'));
const Contact        = lazy(() => import('./pages/Contact'));
const ImportantDates = lazy(() => import('./pages/ImportantDates'));
const DIC            = lazy(() => import('./pages/DIC'));

/* ── Minimal loader shown while chunks download ── */
function PageLoader() {
  return (
    <div className="page-loader">
      <div className="page-loader-spinner" />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="venue" element={<Venue />} />
            <Route path="contact" element={<Contact />} />
            <Route path="important-dates" element={<ImportantDates />} />
            <Route path="dic" element={<DIC />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);