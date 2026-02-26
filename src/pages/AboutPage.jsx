import React from 'react';
import '../styles/AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="page-container">
        <div className="about-page__grid">
          <div>
            <h1 className="about-page__title">Expertise in ICT and Telecommunications</h1>
            <p className="about-page__text">
              Consorient Solutions was founded with a singular mission: to bridge the digital divide by providing superior
              engineering and infrastructure services. We specialize in creating the literal foundation of modern communication.
            </p>
            <p className="about-page__text about-page__text--last">
              Our team consists of certified engineers and project managers who bring decades of combined experience in
              high-stakes technology environments.
            </p>
            <div className="about-page__points">
              {[
                'Professional engineering standards',
                'Innovation-led approach',
                'Reliability and redundancy',
                'Sustainable infrastructure'
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
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800"
              className="about-page__image"
              alt="Office meeting"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
