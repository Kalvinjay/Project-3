import React from 'react';
import Navbar from './components/Navbar';


function Layout({ children }) {
  return (
    <div>
      <Navbar />
      <div className="content">
        {children}
      </div>
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Junior Alliance. All rights reserved.</p>
        {/* Add additional footer content as needed */}
      </footer>
    </div>
  );
}

export default Layout;

