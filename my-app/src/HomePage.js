import React from 'react';
import Layout from './Layout';
import Navbar from './Navbar';
import CustomCarousel from './CustomCarousel';

function HomePage() {
  return (
    <Layout>
      <Navbar /> 
      <div className="carousel-container">
        <CustomCarousel />
      </div>
      <div className="Homepage-container">
        <h1>Welcome to the Junior Alliance website!</h1>
          <img src="/JRA2.png" alt="Second JRA Logo" />
    </div>
    </Layout>

  );
}

export default HomePage;

