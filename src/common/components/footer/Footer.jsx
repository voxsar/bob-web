import React from 'react';
import '../styles/Footer.css'
import FooterTop from './footerTop';
import { Container } from 'react-bootstrap';

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

      <Container className='footer-bottom-light-container'>
        <p className='footer-bottom-text'>Copyright © 2024 Baby's On Broadway. All Rights Reserved.</p>
        <p className='footer-bottom-text'>Website Designed and Developed by 10X TEK</p>
      </Container>
    </div>
  );
}

export default Footer;