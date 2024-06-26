import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src="/path/to/your/logo.png" alt="Company Logo" />
          <p>&copy; 2024 Your Company. All Rights Reserved.</p>
        </div>
        <div className="footer-content">
          <div className="footer-links">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-of-service">Terms of Service</a>
            <a href="/contact-us">Contact Us</a>
          </div>
          <div className="footer-social">
            <p>Follow Us:</p>
            <div className="social-icons">
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faFacebookF} />
              </a>
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="#" className="social-icon">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </div>
          </div>
          <div className="footer-subscribe">
            <p>Subscribe to Our Newsletter</p>
            <form>
              <input type="email" placeholder="Enter your email" />
              <button type="submit">Subscribe</button>
            </form>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
