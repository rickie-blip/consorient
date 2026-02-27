import React from 'react';
import '../styles/HomePage.css';
import profileCover from '../assets/pdf/profile-cover.png';

const HomePage = ({ navigate }) => {
  return (
    <div>
      <section className="home-hero">
        <div className="home-hero__bg">
          <div className="home-hero__overlay" />
          <img src={profileCover} alt="Consorient profile cover" className="home-hero__image" />
        </div>

        <div className="page-container home-hero__content-wrap">
          <div className="home-hero__content">
            <div className="home-hero__badge">Innovation in Infrastructure</div>
            <h1 className="home-hero__title">
              Building the Future of <span className="home-hero__title-accent">Connectivity</span>
            </h1>
            <p className="home-hero__description">
              Since 2010, Consorient Solutions has delivered ICT, telecommunications, and project management services
              across Kenya, with a practical and customer-first approach.
            </p>
            <div className="home-hero__actions">
              <button onClick={() => navigate('services')} className="home-btn home-btn--primary">Explore Services</button>
              <button onClick={() => navigate('about')} className="home-btn home-btn--ghost">About Our Vision</button>
            </div>
          </div>
        </div>
      </section>

      <section className="home-stats">
        <div className="page-container">
          <div className="home-stats__grid">
            {[
              { label: 'Founded', value: '2010' },
              { label: 'Reference Projects', value: '9+' },
              { label: 'Regions Served', value: '6' },
              { label: 'Core Focus', value: 'ICT & Telecom' }
            ].map((stat, i) => (
              <div key={i} className="home-stats__item">
                <div className="home-stats__value">{stat.value}</div>
                <div className="home-stats__label">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-services">
        <div className="page-container">
          <div className="home-services__header">
            <h2 className="home-services__title">Comprehensive Solutions</h2>
            <div className="home-services__line" />
          </div>

          <div className="home-services__grid">
            {[
              {
                title: 'Network Infrastructure',
                desc: 'Fiber optic installation, tower construction, wireless solutions, and data center setup.'
              },
              {
                title: 'Equipment Installation',
                desc: 'Antenna and satellite dish installation, active equipment integration, and structured cabling.'
              },
              {
                title: 'Power Solutions',
                desc: 'Backup power systems and energy management for resilient telecom and enterprise operations.'
              }
            ].map((s, idx) => (
              <div key={idx} className="home-services__card">
                <h3 className="home-services__card-title">{s.title}</h3>
                <p className="home-services__card-desc">{s.desc}</p>
                <button onClick={() => navigate('services')} className="home-services__card-link">Read More</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-cta">
        <div className="home-cta__shape" />
        <div className="page-container home-cta__content">
          <div className="home-cta__text">
            <h2 className="home-cta__title">Ready to optimize your infrastructure?</h2>
            <p className="home-cta__desc">Partner with Consorient Solutions for your next big project.</p>
          </div>
          <button onClick={() => navigate('contact')} className="home-cta__button">Contact Us Today</button>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
