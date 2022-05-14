import React from 'react';
import Navbar from './shared/Navbar';
import Footer from './shared/Footer';

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};
export default Layout;
