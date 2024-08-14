import React from 'react';
import '../assets/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-section">
        <h5 className="footer-title">Contact Us</h5>
        <p className="footer-description">
          <li>Email:PetPals@peto.in</li>
          <li>Phone:+91 8888777700</li>
        </p>
      </div>
      <div className="footer-section">
        <h5 className="footer-title">Follow Us</h5>
        <div className="social-links">
          <a href="https://facebook.com" className="social-link">Facebook</a>
          <a href="https://twitter.com" className="social-link">Twitter</a>
          <a href="https://instagram.com" className="social-link">Instagram</a>
        </div>
      </div>
      <div className="footer-section footer-copy">
        &copy; 2024 Pet Clinic. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
