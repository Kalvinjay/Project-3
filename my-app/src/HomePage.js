import React from 'react';
import { useLocation } from 'react-router-dom';
import Layout from './Layout';
import CustomCarousel from './CustomCarousel';

function HomePage() {


    const location=useLocation()
    const id = location.state?.id || '';


  return (
    <Layout>
      <div className="carousel-container">
        <CustomCarousel />
      </div>
      <div className="Homepage-container">
        <h1 className="Homepage-title">Welcome {id ? `${id} ` : ''}to the Junior Alliance website!</h1>
          <img src="/JRA2.png" alt="Second JRA Logo" className="Homepage-img1" />
          <h2 className="Homepage-title">About</h2>
          <p className="Homepage-about">
            Establshed in 2010. Junior Alliance is a basketball program run in Winnipeg, Manitoba Canada. Junior Alliance was created to bring in young athletes to learn the game of basektball
            while gaining friendships that will last forever. Junior Alliance has grown to be more than just a basketball program and has become a place for young athletes to bond and make
            memories that will last a lifetime.
          </p>
        <footer className="footer">
            <p>&copy; {new Date().getFullYear()} Junior Alliance. All rights reserved.</p>
        {/* Add additional footer content as needed */}
        </footer>
    </div>
    </Layout>

  );
}

export default HomePage;

