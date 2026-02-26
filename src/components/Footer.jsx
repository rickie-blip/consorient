import React from 'react';
import '../styles/Footer.css';

const Footer = ({ navigate }) => {
  return (
    <footer className="footer">
      <div className="page-container">
        <div className="footer__grid">
          <div>
            <div className="footer__brand-wrap">
              <span className="footer__brand">CONSORIENT</span>
            </div>
            <p className="footer__text">
              Leading the way in ICT and Telecommunications infrastructure across the region. Engineering excellence for a
              connected world.
            </p>
          </div>
          <div>
            <h4 className="footer__heading">Quick Links</h4>
            <ul className="footer__list">
              <li><button onClick={() => navigate('quote')} className="footer__link">Get a Quote</button></li>
              <li><button onClick={() => navigate('about')} className="footer__link">About Us</button></li>
              <li><button onClick={() => navigate('services')} className="footer__link">Services</button></li>
              <li><button onClick={() => navigate('projects')} className="footer__link">Projects</button></li>
              <li><button onClick={() => navigate('contact')} className="footer__link">Contact</button></li>
            </ul>
          </div>
          <div>
            <h4 className="footer__heading">Our Services</h4>
            <ul className="footer__list footer__list--muted">
              <li>Network Infrastructure</li>
              <li>Fiber Optics & Towers</li>
              <li>Power Solutions</li>
              <li>Cybersecurity</li>
            </ul>
          </div>
          <div>
            <h4 className="footer__heading">Contact Info</h4>
            <ul className="footer__list footer__list--muted">
              <li><span className="footer__label">Address:</span>Will Put Adress here</li>
              <li><span className="footer__label">Phone:</span>+ 254 123 456</li>
              <li><span className="footer__label">Email:</span>info@consorient.com</li>
            </ul>
          </div>
        </div>
        <div className="footer__bottom">
          <p>© 2017 Consorient Solutions. All rights reserved.</p>
          <div className="footer__legal-links">
            <a href="#" className="footer__legal-link">Privacy Policy</a>
            <a href="#" className="footer__legal-link">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
