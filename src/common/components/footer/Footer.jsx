import React from 'react';
import '../styles/Footer.css'
import FooterTop from './footerTop';

const Footer = () => {
  return (
    <div className='footer-wrapper'>
      <FooterTop />
      <div className='footer-bottom-dark-container'>
        <div className='footer-bottom-dark'>
          <a href="#">Website Accessibility</a>
          <a href="#">Terms & Conditions of Use</a>
          <a href="#">Privacy & Security Policy</a>
          <a href="#">CA Transparency</a>
          <a href="#">Do Not Sell My Personal Info</a>
        </div>
      </div>
    </div>
  );
}

export default Footer;