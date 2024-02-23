// Layout.js
import React from 'react';
import Navbar from './Navbar';
import CustomCarousel from './CustomCarousel';

function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="carousel-container">
        <CustomCarousel />
      </div>
      <div className="content">
        {children}
      </div>
    </div>
  );
}

export default Layout;

