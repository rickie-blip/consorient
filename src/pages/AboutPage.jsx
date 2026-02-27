import React from 'react';
import '../styles/AboutPage.css';
import profileStrengths from '../assets/pdf/profile-strengths.png';

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="page-container">
        <div className="about-page__grid">
          <div>
            <h1 className="about-page__title">Mission and Vision</h1>
            <p className="about-page__text">
              Our mission is to help organizations grow through reliable, forward-looking ICT solutions delivered by a
              skilled and committed team.
            </p>
            <p className="about-page__text about-page__text--last">
              Our vision is to be a leading telecommunications partner known for quality, innovation, and long-term value.
            </p>
            <div className="about-page__points">
              {[
                'Proven expertise in ICT and telecommunications',
                'Customer-focused and innovative approach',
                'Comprehensive range of services',
                'Strong partnerships with leading organizations',
                'Dedicated and professional team'
              ].map((item, i) => (
                <div key={i} className="about-page__point">
                  <span className="about-page__point-dot" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="about-page__image-wrap">
            <div className="about-page__blob about-page__blob--top" />
            <div className="about-page__blob about-page__blob--bottom" />
            <img src={profileStrengths} className="about-page__image" alt="Consorient strengths" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
