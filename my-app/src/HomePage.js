import React from 'react';
import './App.css'
import Layout from './Layout';
import Navbar from './Navbar';
import CustomCarousel from './CustomCarousel';

function HomePage() {
  return (
    <Layout>
      <Navbar /> {/* Include the Navbar component */}
      <div className="carousel-container">
        <CustomCarousel />
      </div>
      {/* Home page content */}
    </Layout>
  );
}

export default HomePage;

