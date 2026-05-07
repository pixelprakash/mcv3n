import React from 'react';
import { Outlet } from 'react-router-dom';
import Ticker from './Ticker';
import Navbar from './Navbar';
import Footer from './Footer';

export default function Layout() {
  return (
    <>
      <Ticker />
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}
